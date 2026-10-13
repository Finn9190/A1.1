// The app: screens, practice sessions, mock exam, progress and settings.
(function () {
  const { esc, shuffle, sample, uniq, today, matchTyped } = A1.util;
  const SP = A1.speech;
  const KEY = 'a1trainer.v1';
  const main = document.getElementById('main');

  // ---------------- State ----------------
  const defaults = () => ({ lang: 'en', examDate: '', stats: {}, agg: {}, seen: {}, mistakes: {}, days: {}, mocks: [], session: null, voiceURI: '', rate: 0.9 });
  let S = load();
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) return Object.assign(defaults(), JSON.parse(raw));
    } catch (e) { /* storage unavailable */ }
    return defaults();
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* storage unavailable */ }
  }
  let saveTimer = null;
  const saveSoon = () => { clearTimeout(saveTimer); saveTimer = setTimeout(save, 400); };

  const t = (k, vars) => {
    let s = A1.I18N[S.lang][k];
    if (s == null) s = A1.I18N.en[k] || k;
    if (vars) Object.keys(vars).forEach((v) => { s = s.split(`{${v}}`).join(vars[v]); });
    return s;
  };
  const L = (o) => (o ? (o[S.lang] || o.en || '') : '');
  const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);

  let view = 'home';
  const ui = { listening: false, micError: null, playing: false, flash: null, resetAsk: false, msg: null, copyMsg: null };

  // ---------------- Picking questions ----------------
  function weakness(topic) {
    const a = S.agg['t:' + topic];
    if (!a || a.n < 3) return 0.4;
    return 1 - a.ok / a.n;
  }
  // Unseen questions first, weak topics more often, never the same group twice.
  function choose(filter, n, exclude) {
    const ex = exclude || new Set();
    const scored = A1.bank.entries.filter((e) => filter(e) && !ex.has(e.id))
      .map((e) => ({ e, s: Math.random() + (S.seen[e.id] ? 0 : 2) + weakness(e.topic) * 0.8 }))
      .sort((a, b) => b.s - a.s);
    const out = [];
    const groups = new Set();
    for (const { e } of scored) {
      if (out.length >= n) break;
      if (e.group) { if (groups.has(e.group)) continue; groups.add(e.group); }
      out.push(e);
    }
    return out;
  }
  const dueMistakes = () => Object.keys(S.mistakes).filter((id) => A1.bank.byId[id])
    .sort((a, b) => (S.mistakes[a].box - S.mistakes[b].box) || (S.mistakes[a].t - S.mistakes[b].t));

  function buildEntries(mode, arg) {
    const taken = new Set();
    const take = (list) => { list.forEach((e) => taken.add(e.id)); return list; };
    if (mode === 'quick') {
      let list = [];
      [['hoeren', 2], ['lesen', 2], ['wortschatz', 2], ['grammatik', 2]].forEach(([skill, n]) => {
        list = list.concat(take(choose((e) => e.skill === skill, n, taken)));
      });
      list = list.concat(take(choose((e) => (e.topic === 'zahlen' || e.topic === 'zeit') && e.skill !== 'sprechen', 1, taken)));
      list = list.concat(take(choose((e) => (e.skill === 'sprechen' && e.part >= 2) || (e.skill === 'schreiben' && e.part === 1), 1, taken)));
      // Bring back up to two earlier mistakes
      const due = dueMistakes().filter((id) => !taken.has(id)).slice(0, 2);
      due.forEach((id, i) => { list[i * 3] = A1.bank.byId[id]; });
      return shuffle(list);
    }
    if (mode === 'skill') {
      const n = arg === 'schreiben' ? 3 : arg === 'sprechen' ? 5 : 10;
      return shuffle(choose((e) => e.skill === arg, n));
    }
    if (mode === 'topic') return shuffle(choose((e) => e.topic === arg && !(e.skill === 'schreiben' && e.part === 2), 10));
    if (mode === 'mistakes') return dueMistakes().slice(0, 10).map((id) => A1.bank.byId[id]);
    return [];
  }

  function buildMock() {
    const sec = (key, list) => list.map((e) => Object.assign(e.make(), { section: key }));
    const hoeren = [1, 2, 3].flatMap((p) => choose((e) => e.skill === 'hoeren' && e.part === p, p === 1 ? 6 : p === 2 ? 4 : 5));
    const groups = uniq(A1.bank.entries.filter((e) => e.skill === 'lesen' && e.part === 1).map((e) => e.group));
    const pickedGroups = choose((e) => e.skill === 'lesen' && e.part === 1, 2).map((e) => e.group);
    const lesen1 = A1.bank.entries.filter((e) => pickedGroups.includes(e.group));
    const lesen = lesen1.concat(choose((e) => e.skill === 'lesen' && e.part === 2, 5), choose((e) => e.skill === 'lesen' && e.part === 3, 5));
    const schreiben = choose((e) => e.skill === 'schreiben' && e.part === 1, 1).concat(choose((e) => e.skill === 'schreiben' && e.part === 2, 1));
    const sprechen = [A1.bank.byId['sp1-intro'], A1.bank.byId['sp1-spell']]
      .concat(choose((e) => e.skill === 'sprechen' && e.part === 2, 2), choose((e) => e.skill === 'sprechen' && e.part === 3, 2));
    void groups;
    return sec('hoeren', hoeren).concat(sec('lesen', lesen), sec('schreiben', schreiben), sec('sprechen', sprechen));
  }

  function startSession(mode, arg) {
    SP.stop();
    let items;
    if (mode === 'mock') items = buildMock();
    else items = buildEntries(mode, arg).map((e) => e.make());
    if (!items.length) { ui.msg = t('emptyPool'); render(); return; }
    S.session = {
      mode, arg, items, i: 0, results: [], cur: null,
      feedback: mode !== 'mock', maxPlays: mode === 'mock' ? 2 : null,
      introDone: {}, secStart: {}, started: Date.now(),
    };
    save();
    go('quiz');
  }

  // ---------------- Recording answers ----------------
  function bump(key, score) {
    const a = S.agg[key] || { n: 0, ok: 0 };
    a.n += 1; a.ok += score;
    S.agg[key] = a;
  }
  function record(item, score, given) {
    const s = S.stats[item.id] || { n: 0, ok: 0 };
    s.n += 1; s.ok += score; s.last = Date.now();
    S.stats[item.id] = s;
    S.seen[item.id] = 1;
    bump('s:' + item.skill, score);
    bump('t:' + item.topic, score);
    const d = today();
    S.days[d] = (S.days[d] || 0) + 1;
    if (score < 0.99) S.mistakes[item.id] = { box: 0, t: Date.now() };
    else if (S.mistakes[item.id]) {
      S.mistakes[item.id].box += 1;
      if (S.mistakes[item.id].box >= 2) delete S.mistakes[item.id];
    }
    const ss = S.session;
    ss.results[ss.i] = { score, given };
    ss.cur.done = true;
    ss.cur.score = score;
    save();
  }

  // ---------------- Small render helpers ----------------
  const btn = (act, label, cls, attrs) => `<button type="button" class="btn ${cls || ''}" data-act="${act}" ${attrs || ''}>${label}</button>`;
  const gap = (s) => esc(s).replace(/___/g, '<span class="gap" aria-label="Lücke">&nbsp;</span>');
  const skillName = (k) => L(A1.SKILLS[k]);
  const topicName = (k) => L(A1.TOPICS[k]) || k;

  function daysToExam() {
    if (!S.examDate) return null;
    const [y, m, d] = S.examDate.split('-').map(Number);
    const exam = new Date(y, m - 1, d);
    const now = new Date(); now.setHours(0, 0, 0, 0);
    return Math.round((exam - now) / 86400000);
  }
  function streak() {
    let n = 0;
    const d = new Date();
    const key = (x) => `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, '0')}-${String(x.getDate()).padStart(2, '0')}`;
    if (!S.days[key(d)]) d.setDate(d.getDate() - 1);
    while (S.days[key(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }

  function clockSVG(h, m) {
    const ha = ((h % 12) + m / 60) * 30, ma = m * 6;
    let ticks = '';
    for (let i = 0; i < 12; i++) ticks += `<line x1="60" y1="10" x2="60" y2="${i % 3 ? 15 : 19}" class="tick" transform="rotate(${i * 30} 60 60)"/>`;
    const nums = [[12, 60, 31], [3, 91, 64], [6, 60, 97], [9, 29, 64]].map(([n, x, y]) => `<text x="${x}" y="${y}" class="num">${n}</text>`).join('');
    return `<svg class="clock" viewBox="0 0 120 120" role="img" aria-label="${h}:${String(m).padStart(2, '0')}">
      <circle cx="60" cy="60" r="54" class="face"/>${ticks}${nums}
      <line x1="60" y1="60" x2="60" y2="34" class="hand-h" transform="rotate(${ha} 60 60)"/>
      <line x1="60" y1="60" x2="60" y2="18" class="hand-m" transform="rotate(${ma} 60 60)"/>
      <circle cx="60" cy="60" r="3.5" class="pin"/></svg>`;
  }

  // ---------------- Header ----------------
  function renderHeader() {
    document.getElementById('lang-en').setAttribute('aria-pressed', S.lang === 'en');
    document.getElementById('lang-de').setAttribute('aria-pressed', S.lang === 'de');
    document.documentElement.lang = S.lang;
    const cd = document.getElementById('countdown');
    const d = daysToExam();
    cd.hidden = false;
    if (d === null || d < 0) { cd.innerHTML = `<span class="cd-long">${esc(t('setDate'))}</span><span class="cd-short" aria-hidden="true">📅</span>`; cd.className = 'countdown is-unset'; }
    else {
      const long = d === 0 ? t('examToday') : d === 1 ? t('dayLeft') : t('daysLeft', { n: d });
      cd.innerHTML = `<span class="cd-long">${esc(long)}</span><span class="cd-short" aria-hidden="true">📅 ${d}</span>`;
      cd.setAttribute('aria-label', long);
      cd.className = 'countdown' + (d <= 7 ? ' is-near' : '');
    }
    cd.setAttribute('data-act', 'progress');
    cd.setAttribute('role', 'button');
    cd.tabIndex = 0;
  }

  // ---------------- Home ----------------
  function viewHome() {
    const due = dueMistakes().length;
    const todayCount = S.days[today()] || 0;
    const lastMock = S.mocks[S.mocks.length - 1];
    const mockDaysAgo = lastMock ? Math.floor((Date.now() - lastMock.t) / 86400000) : null;
    const mockDone = lastMock && mockDaysAgo < 3;
    const weakTopics = Object.keys(A1.TOPICS).filter((k) => S.agg['t:' + k] && S.agg['t:' + k].n >= 3)
      .sort((a, b) => (S.agg['t:' + a].ok / S.agg['t:' + a].n) - (S.agg['t:' + b].ok / S.agg['t:' + b].n));
    const weak = weakTopics[0];
    const st = streak();
    const ss = S.session;
    const resumable = ss && ss.i < ss.items.length && ss.i > 0;

    const planRow = (done, label, act, arg) => `
      <li class="plan-row ${done ? 'is-done' : ''}">
        <span class="box" aria-hidden="true">${done ? '✓' : ''}</span>
        <span class="plan-label">${label}</span>
        ${done ? `<span class="plan-state">${t('planDone')}</span>` : btn(act, t('planGo'), 'btn-small', arg ? `data-arg="${esc(arg)}"` : '')}
      </li>`;

    const skillTiles = Object.keys(A1.SKILLS).map((k) => {
      const a = S.agg['s:' + k];
      return `<button type="button" class="tile" data-act="skill" data-arg="${k}">
        <span class="tile-icon" aria-hidden="true">${A1.SKILLS[k].icon}</span>
        <span class="tile-name">${esc(skillName(k))}</span>
        <span class="tile-meta">${a ? pct(a.ok, a.n) + ' %' : '–'}</span></button>`;
    }).join('');
    const chip = (k) => `<button type="button" class="chip" data-act="topic" data-arg="${k}">${esc(topicName(k))}</button>`;
    const themeKeys = Object.keys(A1.TOPICS).filter((k) => !k.startsWith('g_'));
    const gramKeys = Object.keys(A1.TOPICS).filter((k) => k.startsWith('g_'));

    return `
      ${ui.msg ? `<p class="note" role="status">${esc(ui.msg)}</p>` : ''}
      ${resumable ? `<section class="resume" aria-label="${esc(t('resumeTitle'))}">
        <p>${esc(t('resumeTitle'))} <span class="muted">${esc(t('question', { i: ss.i + 1, n: ss.items.length }))}</span></p>
        <div class="row">${btn('resume', t('resumeBtn'), 'btn-primary')}${btn('discard', t('discardBtn'), 'btn-ghost')}</div>
      </section>` : ''}
      <section class="hero">
        <div>
          <h1>${esc(t('hello'))}</h1>
          <p class="lead">${esc(t('homeLead'))}</p>
        </div>
        ${st ? `<p class="streak"><span aria-hidden="true">🔥</span> ${esc(t('streak', { n: st }))}</p>` : ''}
      </section>

      <div class="home-grid">
        <div class="main-actions">
          <button type="button" class="action action-primary" data-act="quick">
            <span class="action-title">${esc(t('quickTitle'))}</span>
            <span class="action-sub">${esc(t('quickSub'))}</span>
            <span class="action-arrow" aria-hidden="true">→</span>
          </button>
          <button type="button" class="action" data-act="mock">
            <span class="action-title">${esc(t('mockTitle'))}</span>
            <span class="action-sub">${esc(t('mockSub'))}</span>
            ${lastMock ? `<span class="action-meta">${esc(t('lastMock', { p: lastMock.total }))}</span>` : ''}
          </button>
          <div class="action-pair">
            <button type="button" class="action action-small" data-act="mistakes" ${due ? '' : 'disabled'}>
              <span class="action-title">${esc(t('mistakesTitle'))}</span>
              <span class="action-sub">${esc(due ? t('mistakesSub', { n: due }) : t('mistakesNone'))}</span>
            </button>
            <button type="button" class="action action-small" data-act="flash">
              <span class="action-title">${esc(t('flashTitle'))}</span>
              <span class="action-sub">${esc(t('flashSub'))}</span>
            </button>
          </div>
          <button type="button" class="action action-small action-plain" data-act="progress">
            <span class="action-title">${esc(t('progressTitle'))}</span>
            <span class="action-sub">${esc(t('progressSub'))}</span>
          </button>
        </div>

        <aside class="plan" aria-labelledby="plan-h">
          <h2 id="plan-h" class="eyebrow">${esc(t('planTitle'))}</h2>
          <ul class="plan-list">
            ${planRow(todayCount >= 10, t('planQuick'), 'quick')}
            ${planRow(due === 0 && todayCount > 0, t('planMistakes'), 'mistakes')}
            ${planRow(mockDone, t('planMock'), 'mock')}
            ${weak ? planRow(false, t('planWeak', { t: topicName(weak) }), 'topic', weak) : ''}
          </ul>
        </aside>
      </div>

      <section class="block" aria-labelledby="skills-h">
        <h2 id="skills-h">${esc(t('bySkill'))}</h2>
        <div class="tiles">${skillTiles}</div>
      </section>

      <section class="block" aria-labelledby="topics-h">
        <h2 id="topics-h">${esc(t('byTopic'))}</h2>
        <h3 class="eyebrow">${esc(t('themes'))}</h3>
        <div class="chips">${themeKeys.map(chip).join('')}</div>
        <h3 class="eyebrow">${esc(t('grammarPoints'))}</h3>
        <div class="chips">${gramKeys.map(chip).join('')}</div>
      </section>
      <p class="footnote">${esc(t('examInfo'))} · ${esc(t('bankSize', { n: A1.bank.entries.length }))}</p>`;
  }

  // ---------------- Quiz ----------------
  function curState() {
    const ss = S.session;
    if (!ss.cur) ss.cur = { done: false, score: null, sel: null, typed: '', order: [], fields: [], text: '', transcript: '', revealed: false, plays: 0, slow: false, showText: false, note: null };
    return ss.cur;
  }

  function audioBlock(it, cur, ss) {
    const noTTS = !SP.supported;
    const noVoice = noTTS || (ui.voicesChecked && !SP.hasGerman);
    const limit = ss.maxPlays;
    const left = limit ? Math.max(0, limit - cur.plays) : null;
    const canPlay = !noTTS && (left === null || left > 0);
    const showText = noVoice || cur.showText || (cur.done && ss.feedback);
    const lines = it.audio.map(([who, text]) => `<p><span class="who">${it.audio.length > 1 ? who + ':' : ''}</span> ${esc(text)}</p>`).join('');
    return `<div class="audio">
      <div class="audio-controls">
        <button type="button" class="play ${ui.playing ? 'is-playing' : ''}" data-act="play" ${canPlay ? '' : 'disabled'}>
          <span class="play-icon" aria-hidden="true">${ui.playing ? '❚❚' : '▶'}</span>
          <span>${esc(ui.playing ? t('playing') : cur.plays ? t('listenAgain') : t('listen'))}</span>
        </button>
        <label class="toggle"><input type="checkbox" id="slow" data-act="slow" ${cur.slow || it.slowAudio ? 'checked' : ''}> ${esc(t('slow'))}</label>
        ${!ss.maxPlays && !cur.done && !noTTS ? `<button type="button" class="link" data-act="showtext">${esc(cur.showText ? t('hideText') : t('showText'))}</button>` : ''}
      </div>
      ${limit ? `<p class="muted small">${esc(left > 0 ? t('playsLeft', { n: left }) : t('noPlays'))}</p>` : ''}
      ${noVoice ? `<p class="note small">${esc(t('noVoice'))}</p>` : ''}
      ${showText ? `<div class="transcript"><p class="eyebrow">${esc(t('transcript'))}</p>${lines}</div>` : ''}
    </div>`;
  }

  function promptBlock(it) {
    let out = '';
    if (it.clock) out += `<div class="visual">${clockSVG(it.clock[0], it.clock[1])}<span class="digital">${it.clock[0]}:${String(it.clock[1]).padStart(2, '0')}</span></div>`;
    else if (it.visual && it.visualText) out += `<div class="visual"><span class="visual-num">${esc(it.visual)}</span></div>`;
    else if (it.visual) out += `<div class="visual"><span class="visual-emoji" aria-hidden="true">${it.visual}</span></div>`;
    if (it.text) out += `<figure class="notice"><figcaption class="eyebrow">${esc(it.kind || '')}</figcaption><div class="notice-text">${esc(it.text)}</div></figure>`;
    if (it.situation) out += `<p class="situation">${esc(L(it.situation))}</p>`;
    if (it.q) out += `<p class="q ${it.big ? 'q-big' : ''}">${gap(it.q)}</p>`;
    if (it.hintText && S.lang === 'en') out += `<p class="hint">(${esc(it.hintText)})</p>`;
    return out;
  }

  function answerText(it) {
    switch (it.type) {
      case 'mc': return it.ads ? ['a', 'b'][it.answer] + ') ' + it.options[it.answer].split('\n')[0] : it.options[it.answer];
      case 'tf': return it.answer ? 'richtig' : 'falsch';
      case 'type': return it.accepted[0];
      case 'order': return it.answer.join(' ') + it.end;
      case 'form': return it.fields.map((f) => `${f.label}: ${f.accepted[0]}`).join(' · ');
      default: return it.model || '';
    }
  }

  function feedbackBlock(it, cur) {
    const ok = cur.score >= 0.99, half = cur.score > 0 && cur.score < 0.99;
    const selfRated = it.type === 'write' || it.type === 'speak';
    let detail = '';
    if (cur.note === 'almost') detail = `<p>${esc(t('almost'))} <strong>${esc(it.accepted[0])}</strong></p>`;
    else if (cur.note === 'missingArticle') detail = `<p>${esc(t('missingArticle'))} <strong>${esc(it.accepted[0])}</strong></p>`;
    else if (cur.note === 'wrongArticle') detail = `<p>${esc(t('wrongArticle'))} <strong>${esc(it.accepted[0])}</strong></p>`;
    else if (!ok && !['write', 'speak', 'form'].includes(it.type)) detail = `<p>${esc(t('rightAnswer'))} <strong>${esc(answerText(it))}</strong></p>`;
    return `<div class="feedback ${ok ? 'is-right' : half ? 'is-half' : 'is-wrong'}" role="status">
      <p class="stamp-text">${esc(selfRated ? (ok ? 'Gut gemacht!' : half ? 'Weiter üben!' : 'Nicht aufgeben!') : ok ? t('stampRight') : half ? t('stampHalf') : t('stampWrong'))}</p>
      ${detail}
      <p class="explain">${esc(L(it.ex))}</p>
    </div>`;
  }

  function bodyMC(it, cur, ss) {
    const letters = ['a', 'b', 'c', 'd'];
    const cls = (i) => {
      if (!cur.done) return '';
      if (!ss.feedback) return i === cur.sel ? 'is-picked' : '';
      if (i === it.answer) return 'is-right';
      if (i === cur.sel) return 'is-wrong';
      return 'is-dim';
    };
    if (it.ads) {
      return `<div class="ads">${it.options.map((o, i) => `
        <button type="button" class="ad ${cls(i)}" data-act="mc" data-i="${i}" ${cur.done ? 'aria-disabled="true"' : ''}>
          <span class="letter">${letters[i]}</span><span class="ad-text">${esc(o)}</span></button>`).join('')}</div>`;
    }
    return `<div class="options">${it.options.map((o, i) => `
      <button type="button" class="opt ${cls(i)}" data-act="mc" data-i="${i}" ${cur.done ? 'aria-disabled="true"' : ''}>
        <span class="letter">${letters[i]}</span><span class="opt-text">${esc(o)}</span></button>`).join('')}</div>`;
  }

  function bodyTF(it, cur, ss) {
    const cls = (v) => {
      if (!cur.done) return '';
      if (!ss.feedback) return cur.sel === v ? 'is-picked' : '';
      if (v === it.answer) return 'is-right';
      if (cur.sel === v) return 'is-wrong';
      return 'is-dim';
    };
    const sub = (k) => (S.lang === 'en' ? `<span class="tf-sub">${esc(t(k))}</span>` : '');
    return `<div class="tf">
      <button type="button" class="opt tf-btn ${cls(true)}" data-act="tf" data-v="1" ${cur.done ? 'aria-disabled="true"' : ''}><span class="tf-main">richtig</span>${sub('right')}</button>
      <button type="button" class="opt tf-btn ${cls(false)}" data-act="tf" data-v="0" ${cur.done ? 'aria-disabled="true"' : ''}><span class="tf-main">falsch</span>${sub('wrong')}</button>
    </div>`;
  }

  const UMLAUTS = ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'];
  const umlautBar = (target) => `<div class="umlauts" aria-label="${esc(t('umlaut'))}">${UMLAUTS.map((c) => `<button type="button" class="key" data-act="char" data-c="${c}" data-target="${target}">${c}</button>`).join('')}</div>`;

  function bodyType(it, cur) {
    return `<p class="q q-big">${esc(it.prompt)}</p>
      <div class="type-row">
        <input type="text" id="typed" class="input" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${esc(t('typeHere'))}" value="${esc(cur.typed)}" ${cur.done ? 'readonly' : ''} data-bind="typed">
        ${cur.done ? '' : btn('checkType', t('check'), 'btn-primary')}
      </div>
      ${cur.done ? '' : umlautBar('typed')}`;
  }

  function bodyOrder(it, cur, ss) {
    const used = new Set(cur.order);
    const answerLine = cur.order.map((ti, pos) => `<button type="button" class="word is-placed" data-act="unplace" data-pos="${pos}" ${cur.done ? 'disabled' : ''}>${esc(it.tokens[ti])}</button>`).join('');
    const pool = it.tokens.map((w, ti) => (used.has(ti) ? '' : `<button type="button" class="word" data-act="place" data-ti="${ti}">${esc(w)}</button>`)).join('');
    const showHint = S.lang === 'en' || cur.done;
    return `<div class="sentence" aria-live="polite">${answerLine || '<span class="muted">…</span>'}<span class="end">${esc(it.end)}</span></div>
      ${cur.done ? '' : `<div class="pool">${pool}</div>`}
      ${showHint ? `<p class="hint">${esc(t('meaning', { s: it.hint }))}</p>` : ''}
      ${cur.done ? '' : `<div class="row">${btn('checkOrder', t('check'), 'btn-primary', cur.order.length === it.tokens.length ? '' : 'disabled')}${btn('resetOrder', t('orderReset'), 'btn-ghost')}</div>`}
      ${cur.done && ss.feedback && cur.score < 1 ? '' : ''}`;
  }

  function bodyForm(it, cur, ss) {
    const rows = it.fields.map((f, i) => {
      const val = cur.fields[i] || '';
      let mark = '';
      if (cur.done && ss.feedback) {
        const ok = cur.fieldOk && cur.fieldOk[i];
        mark = ok ? '<span class="mark ok" aria-label="richtig">✓</span>' : `<span class="mark bad" aria-label="falsch">✗</span> <span class="fix">${esc(f.accepted[0])}</span>`;
      }
      return `<div class="form-row">
        <label for="f${i}">${esc(f.label)}</label>
        <div class="form-input"><input type="text" class="input" id="f${i}" value="${esc(val)}" data-bind="field" data-i="${i}" autocomplete="off" spellcheck="false" ${cur.done ? 'readonly' : ''}>${mark}</div>
      </div>`;
    }).join('');
    return `<figure class="notice"><div class="notice-text">${esc(it.text)}</div></figure>
      <div class="form-sheet"><p class="form-title">${esc(it.title)}</p>${rows}</div>
      ${cur.done ? (ss.feedback ? `<p class="muted">${esc(t('formResult', { n: cur.fieldOk.filter(Boolean).length, m: it.fields.length }))}</p>` : '') : `${umlautBar('active')}<div class="row">${btn('checkForm', t('check'), 'btn-primary')}</div>`}`;
  }

  const pointHit = (p, text) => { try { return new RegExp(p.kw, 'i').test(text); } catch (e) { return false; } };
  const pointList = (points, text, showHits) => `<ul class="points">${points.map((p) => {
    const hit = showHits && pointHit(p, text);
    return `<li class="${showHits ? (hit ? 'hit' : 'miss') : ''}"><span class="box" aria-hidden="true">${showHits ? (hit ? '✓' : '') : ''}</span><span>${esc(p.de)}${S.lang === 'en' ? ` <span class="muted">– ${esc(p.en)}</span>` : ''}</span></li>`;
  }).join('')}</ul>`;

  function rateBlock(cur) {
    if (cur.done) return '';
    return `<div class="rate"><p class="eyebrow">${esc(t('rateQ'))}</p><div class="row">
      ${btn('rate', t('rateGood'), 'btn-good', 'data-v="1"')}${btn('rate', t('rateOk'), 'btn-ok', 'data-v="0.5"')}${btn('rate', t('rateBad'), 'btn-bad', 'data-v="0"')}</div></div>`;
  }

  function bodyWrite(it, cur) {
    const words = cur.text.trim() ? cur.text.trim().split(/\s+/).length : 0;
    const all = it.points.concat(it.extraPoints);
    return `<p class="situation">${esc(L(it.situation))}</p>
      ${pointList(it.points, cur.text, false)}
      <textarea id="msg" class="input textarea" rows="7" placeholder="${esc(t('writeHere'))}" data-bind="text" ${cur.revealed ? 'readonly' : ''}>${esc(cur.text)}</textarea>
      <p class="muted small" id="wordcount">${esc(t('words', { n: words }))}</p>
      ${cur.revealed ? '' : `${umlautBar('msg')}<div class="row">${btn('reveal', t('showModel'), 'btn-primary')}</div>`}
      ${cur.revealed ? `<div class="reveal">
        <p class="eyebrow">${esc(t('covered'))}</p>${pointList(all, cur.text.toLowerCase(), true)}
        <p class="eyebrow">${esc(t('example'))}</p><div class="model">${esc(it.model)}</div>
        ${rateBlock(cur)}</div>` : ''}`;
  }

  function bodySpeak(it, cur) {
    let card = '';
    if (it.mode === 'intro') card = `<div class="card-speak"><p class="eyebrow">${esc(t('pointsLabel'))}</p>${pointList(it.points, '', false)}</div>`;
    else if (it.mode === 'topic') card = `<div class="card-speak card-topic"><p class="card-theme">Thema: ${esc(it.theme)}</p><p class="card-word">${esc(it.word)}</p></div>`;
    else if (it.mode === 'request') card = `<div class="card-speak card-topic"><p class="card-emoji" aria-hidden="true">${it.emoji}</p><p class="card-word">${esc(it.word)}</p></div>`;
    let mic = '';
    if (!cur.revealed) {
      if (SP.canListen) {
        mic = `<div class="mic">
          <button type="button" class="play mic-btn ${ui.listening ? 'is-playing' : ''}" data-act="mic"><span class="play-icon" aria-hidden="true">${ui.listening ? '■' : '●'}</span><span>${esc(ui.listening ? t('micStop') : t('micStart'))}</span></button>
          ${ui.listening ? `<span class="muted">${esc(t('micListening'))}</span>` : ''}
        </div>
        ${ui.micError ? `<p class="note small">${esc(ui.micError === 'not-allowed' || ui.micError === 'service-not-allowed' ? t('micBlocked') : t('micError'))}</p>` : ''}`;
      } else mic = `<p class="note small">${esc(t('micUnsupported'))}</p>`;
    }
    const said = cur.transcript ? `<div class="said"><p class="eyebrow">${esc(t('youSaid'))}</p><p id="said">${esc(cur.transcript)}</p></div>` : '<div class="said" hidden><p class="eyebrow"></p><p id="said"></p></div>';
    const hasPoints = it.points && it.points.length;
    return `${card}${mic}${said}
      ${cur.revealed ? '' : `<div class="row">${btn('reveal', t('speakDone'), 'btn-primary')}</div>`}
      ${cur.revealed ? `<div class="reveal">
        ${hasPoints && cur.transcript ? `<p class="eyebrow">${esc(t('covered'))}</p>${pointList(it.points, cur.transcript.toLowerCase(), true)}` : ''}
        <p class="eyebrow">${esc(t('example'))}</p><div class="model">${esc(it.model)}</div>
        <button type="button" class="link" data-act="playModel">▶ ${esc(t('hearModel'))}</button>
        ${rateBlock(cur)}</div>` : ''}`;
  }

  function sectionIntro(ss, key) {
    const items = ss.items.filter((x) => x.section === key);
    const sec = A1.SECTIONS[key];
    const idx = ['hoeren', 'lesen', 'schreiben', 'sprechen'].indexOf(key) + 1;
    return `<section class="sheet intro">
      <p class="eyebrow">${esc(t('mockTitle'))} · ${idx} / 4</p>
      <h1>${esc(A1.SKILLS[key].de)} <span class="muted">${S.lang === 'en' ? '· ' + esc(A1.SKILLS[key].en) : ''}</span></h1>
      <p class="lead">${esc(L(sec))}</p>
      <p class="muted">${esc(t('sectionCount', { n: items.length }))} · ${esc(t('sectionMinutes', { m: sec.minutes }))}</p>
      <p class="muted small">${esc(t('mockNoFeedback'))}</p>
      <div class="row">${btn('startSection', t('start'), 'btn-primary btn-big', `data-arg="${key}"`)}${btn('quit', t('quit'), 'btn-ghost')}</div>
    </section>`;
  }

  function timerText(ss, key) {
    const start = ss.secStart[key];
    if (!start) return '';
    const left = A1.SECTIONS[key].minutes * 60 - Math.floor((Date.now() - start) / 1000);
    if (left <= 0) return t('timeUp');
    const mm = Math.floor(left / 60), s = left % 60;
    return t('timeLeft', { t: `${mm}:${String(s).padStart(2, '0')}` });
  }

  function viewQuiz() {
    const ss = S.session;
    if (!ss) return viewHome();
    if (ss.i >= ss.items.length) return viewResult();
    const it = ss.items[ss.i];
    if (ss.mode === 'mock' && !ss.introDone[it.section]) return sectionIntro(ss, it.section);
    const cur = curState();
    const n = ss.items.length;
    const isMock = ss.mode === 'mock';
    let body = '';
    if (it.type === 'mc') body = bodyMC(it, cur, ss);
    else if (it.type === 'tf') body = bodyTF(it, cur, ss);
    else if (it.type === 'type') body = bodyType(it, cur);
    else if (it.type === 'order') body = bodyOrder(it, cur, ss);
    else if (it.type === 'form') body = bodyForm(it, cur, ss);
    else if (it.type === 'write') body = bodyWrite(it, cur);
    else if (it.type === 'speak') body = bodySpeak(it, cur);
    const partChip = it.part && ['hoeren', 'lesen', 'schreiben', 'sprechen'].includes(it.skill) ? `<span class="chip-static">${esc(t('part', { n: it.part }))}</span>` : '';
    const last = ss.i === n - 1;
    const timer = isMock ? `<span class="timer" id="timer">${esc(timerText(ss, it.section))}</span>` : '';
    return `
      <div class="quiz-top">
        <div class="progress-line">
          <span class="qcount">${esc(t('question', { i: ss.i + 1, n }))}</span>
          ${timer}
        </div>
        <div class="bar" aria-hidden="true"><span style="width:${pct(ss.i + (cur.done ? 1 : 0), n)}%"></span></div>
        <div class="row row-tight">
          ${isMock ? '' : btn('newSet', '↻ ' + t('newSet'), 'btn-ghost btn-small')}
          ${btn('quit', t('quit'), 'btn-ghost btn-small')}
        </div>
      </div>
      <article class="sheet question" aria-live="polite">
        <div class="tags"><span class="chip-static skill-${it.skill}">${A1.SKILLS[it.skill].icon} ${esc(skillName(it.skill))}</span>${partChip}<span class="chip-static muted">${esc(topicName(it.topic))}</span></div>
        <p class="task">${esc(L(it.task))}</p>
        ${it.audio ? audioBlock(it, cur, ss) : ''}
        ${it.type === 'type' || it.type === 'form' || it.type === 'write' || it.type === 'speak' ? (it.visual ? promptBlock({ visual: it.visual }) : '') : promptBlock(it)}
        ${body}
        ${cur.done && ss.feedback ? feedbackBlock(it, cur) : ''}
        ${cur.done ? `<div class="next-row">${btn('next', last ? t('finish') : t('next') + ' →', 'btn-primary btn-big', 'id="next-btn"')}</div>` : ''}
      </article>`;
  }

  // ---------------- Results ----------------
  function viewResult() {
    const ss = S.session;
    const items = ss.items;
    const res = ss.results;
    const total = items.reduce((a, _, i) => a + (res[i] ? res[i].score : 0), 0);
    const p = pct(total, items.length);
    const num = (x) => (Math.round(x * 10) / 10).toLocaleString(S.lang === 'de' ? 'de-DE' : 'en-GB');
    let overallMock = null;
    const wrong = items.map((it, i) => ({ it, r: res[i] })).filter((x) => !x.r || x.r.score < 0.99);
    const label = (it) => it.q || it.prompt || L(it.situation) || (it.mode === 'topic' ? `Thema: ${it.theme} – ${it.word}` : it.word) || L(it.task);
    const given = (it, r) => {
      if (!r || r.given == null || r.given === '') return t('noAnswer');
      if (it.type === 'mc') return it.options[r.given];
      if (it.type === 'tf') return r.given ? 'richtig' : 'falsch';
      return String(r.given);
    };
    let mockPart = '';
    if (ss.mode === 'mock') {
      const parts = ['hoeren', 'lesen', 'schreiben', 'sprechen'].map((k) => {
        const idx = items.map((it, i) => (it.section === k ? i : -1)).filter((i) => i >= 0);
        const sc = idx.reduce((a, i) => a + (res[i] ? res[i].score : 0), 0);
        return { k, p: pct(sc, idx.length) };
      });
      const overall = Math.round(parts.reduce((a, x) => a + x.p, 0) / 4);
      overallMock = overall;
      if (!ss.saved && !ss.stoppedEarly) {
        S.mocks.push({ t: Date.now(), total: overall, parts: Object.fromEntries(parts.map((x) => [x.k, x.p])) });
        ss.saved = true;
        save();
      }
      const passed = overall >= 60;
      mockPart = `<div class="mock-summary">
        <p class="verdict ${passed ? 'is-pass' : 'is-fail'}">${esc(passed ? t('passed') : t('notPassed'))}</p>
        <p class="muted">${esc(t('passNote'))}</p>
        <div class="bars">${parts.map((x) => barRow(`${A1.SKILLS[x.k].de}${S.lang === 'en' ? ' · ' + A1.SKILLS[x.k].en : ''}`, x.p, `${x.p} %`)).join('')}</div>
      </div>`;
    }
    const again = ss.mode === 'quick' ? btn('quick', t('again10'), 'btn-primary btn-big')
      : ss.mode === 'mock' ? btn('mock', t('mockTitle'), 'btn-primary btn-big')
        : btn('again', t('sameAgain'), 'btn-primary btn-big');
    return `<section class="sheet result">
      <p class="eyebrow">${esc(ss.mode === 'mock' ? t('mockResult') : t('resultTitle'))}</p>
      ${overallMock !== null
    ? `<p class="big-score"><span>${overallMock} %</span></p>`
    : `<p class="big-score"><span>${num(total)}</span> / ${items.length}</p><p class="lead">${esc(t('scoreLine', { a: num(total), b: items.length }))} · ${p} %</p>`}
      ${mockPart}
      <div class="row">${again}${dueMistakes().length ? btn('mistakes', t('mistakesTitle'), 'btn-ghost') : ''}${btn('home', t('backHome'), 'btn-ghost')}</div>
    </section>
    ${wrong.length ? `<section class="block"><h2>${esc(t('reviewWrong'))}</h2><ol class="review">${wrong.map(({ it, r }) => `
      <li><p class="review-q">${gap(label(it))}</p>
      ${['write', 'speak'].includes(it.type) ? '' : `<p class="small"><span class="muted">${esc(t('yourAnswer'))}</span> ${esc(given(it, r))}</p>`}
      <p class="small"><span class="muted">${esc(t('rightAnswer'))}</span> <strong>${esc(answerText(it))}</strong></p>
      <p class="small muted">${esc(L(it.ex))}</p></li>`).join('')}</ol></section>` : `<p class="lead center">${esc(t('allRight'))}</p>`}`;
  }

  function barRow(label, p, valueText) {
    return `<div class="bar-row"><span class="bar-label">${esc(label)}</span><span class="bar"><span class="${p >= 60 ? 'good' : p >= 40 ? 'mid' : 'low'}" style="width:${Math.max(2, p)}%"></span></span><span class="bar-val">${esc(valueText)}</span></div>`;
  }

  // ---------------- Progress & settings ----------------
  function viewProgress() {
    const totalN = Object.values(S.stats).reduce((a, s) => a + s.n, 0);
    const totalOk = Object.values(S.stats).reduce((a, s) => a + s.ok, 0);
    const skills = Object.keys(A1.SKILLS).map((k) => {
      const a = S.agg['s:' + k];
      return a ? barRow(skillName(k), pct(a.ok, a.n), `${pct(a.ok, a.n)} % · ${a.n}`) : barRowEmpty(skillName(k));
    }).join('');
    const topics = Object.keys(A1.TOPICS).map((k) => ({ k, a: S.agg['t:' + k] }))
      .sort((x, y) => (x.a ? x.a.ok / x.a.n : 2) - (y.a ? y.a.ok / y.a.n : 2))
      .map(({ k, a }) => (a ? barRow(topicName(k), pct(a.ok, a.n), `${pct(a.ok, a.n)} % · ${a.n}`) : barRowEmpty(topicName(k)))).join('');
    const mocks = S.mocks.slice().reverse().map((m) => {
      const d = new Date(m.t);
      return `<li><span>${d.toLocaleDateString(S.lang === 'de' ? 'de-DE' : 'en-GB')}</span><strong class="${m.total >= 60 ? 'ok' : 'bad'}">${m.total} %</strong><span class="muted small">${['hoeren', 'lesen', 'schreiben', 'sprechen'].map((k) => `${A1.SKILLS[k].de} ${m.parts[k]} %`).join(' · ')}</span></li>`;
    }).join('');
    const voices = SP.voices;
    const code = exportCode();
    return `<h1>${esc(t('progressTitle'))}</h1>
      <section class="sheet stats-top">
        <div class="stat"><span class="stat-num">${totalN}</span><span class="stat-label">${esc(t('answered', { n: '' }).trim())}</span></div>
        <div class="stat"><span class="stat-num">${pct(totalOk, totalN)} %</span><span class="stat-label">${esc(t('right'))}</span></div>
        <div class="stat"><span class="stat-num">${streak()}</span><span class="stat-label">${esc(t('streak', { n: '' }).trim())}</span></div>
        <div class="stat"><span class="stat-num">${dueMistakes().length}</span><span class="stat-label">${esc(t('mistakesTitle'))}</span></div>
      </section>
      <div class="two-col">
        <section class="block"><h2>${esc(t('bySkillTitle'))}</h2><div class="bars">${skills}</div></section>
        <section class="block"><h2>${esc(t('mockHistory'))}</h2>${mocks ? `<ul class="mock-list">${mocks}</ul>` : `<p class="muted">${esc(t('noData'))}</p>`}</section>
      </div>
      <section class="block"><h2>${esc(t('byTopicTitle'))}</h2><div class="bars">${topics}</div></section>

      <section class="sheet settings" aria-labelledby="set-h">
        <h2 id="set-h">${esc(t('settings'))}</h2>
        <div class="field">
          <label for="examDate">${esc(t('examDate'))}</label>
          <input type="date" id="examDate" class="input" value="${esc(S.examDate)}" data-bind="examDate">
        </div>
        <div class="field">
          <label for="voice">${esc(t('voice'))}</label>
          <div class="row">
            <select id="voice" class="input" data-bind="voice" ${voices.length ? '' : 'disabled'}>
              ${voices.length ? voices.map((v) => `<option value="${esc(v.voiceURI)}" ${v.voiceURI === S.voiceURI ? 'selected' : ''}>${esc(v.name)} (${esc(v.lang)})</option>`).join('') : `<option>${esc(t('voiceNone'))}</option>`}
            </select>
            ${btn('testVoice', '▶ ' + t('voiceTest'), 'btn-ghost', voices.length ? '' : 'disabled')}
          </div>
        </div>
        <div class="field">
          <span class="label">${esc(t('speed'))}</span>
          <div class="seg" role="group" aria-label="${esc(t('speed'))}">
            <button type="button" data-act="rate" data-v="0.9" aria-pressed="${S.rate >= 0.85}">${esc(t('speedNormal'))}</button>
            <button type="button" data-act="rate" data-v="0.72" aria-pressed="${S.rate < 0.85}">${esc(t('speedSlow'))}</button>
          </div>
        </div>
        <div class="field">
          <h3>${esc(t('backup'))}</h3>
          <p class="muted small">${esc(t('backupNote'))}</p>
          <div class="row">${btn('copyCode', t('copyCode'), 'btn-ghost')}${btn('saveFile', t('saveFile'), 'btn-ghost')}
            <label class="btn btn-ghost file-label">${esc(t('loadFile'))}<input type="file" id="loadFile" accept=".json,.txt,application/json" class="visually-hidden"></label></div>
          ${ui.copyMsg ? `<p class="note small" role="status">${esc(ui.copyMsg)}</p>` : ''}
          <textarea id="code-out" class="input code" rows="2" readonly aria-label="Code">${esc(code)}</textarea>
          <label for="code-in" class="label">${esc(t('pasteHere'))}</label>
          <textarea id="code-in" class="input code" rows="2"></textarea>
          <div class="row">${btn('loadCode', t('loadCode'), 'btn-ghost')}</div>
          ${ui.msg ? `<p class="note small" role="status">${esc(ui.msg)}</p>` : ''}
        </div>
        <div class="field danger">
          ${ui.resetAsk ? `<p>${esc(t('resetAsk'))}</p><div class="row">${btn('resetYes', t('resetConfirm'), 'btn-bad')}${btn('resetNo', t('cancel'), 'btn-ghost')}</div>` : btn('resetAsk', t('reset'), 'btn-ghost btn-danger')}
        </div>
      </section>
      <div class="row">${btn('home', t('backHome'), 'btn-ghost')}</div>`;
  }
  const barRowEmpty = (label) => `<div class="bar-row is-empty"><span class="bar-label">${esc(label)}</span><span class="bar"></span><span class="bar-val muted">${esc(t('noData'))}</span></div>`;

  function exportCode() {
    const copy = Object.assign({}, S, { session: null });
    try { return btoa(unescape(encodeURIComponent(JSON.stringify(copy)))); } catch (e) { return ''; }
  }
  function importCode(code) {
    const txt = String(code || '').trim();
    let data;
    try { data = JSON.parse(txt); } catch (e) {
      try { data = JSON.parse(decodeURIComponent(escape(atob(txt)))); } catch (e2) { return false; }
    }
    if (!data || typeof data !== 'object' || !data.stats) return false;
    S = Object.assign(defaults(), data, { session: null });
    save();
    return true;
  }

  // ---------------- Word cards ----------------
  function buildDeck(topic) {
    const nouns = A1.nouns.filter((n) => !topic || n.topic === topic).map((n) => ({ de: `${n.art} ${n.word}`, en: n.en, emoji: n.emoji, extra: n.plural ? `die ${n.plural}` : '' }));
    const verbs = A1.verbs.filter((v) => !topic || v.topic === topic).map((v) => {
      const f = A1.conjugate(v.inf);
      return { de: v.inf, en: v.en, emoji: '', extra: `ich ${f[0]}, du ${f[1]}, er ${f[2]}` };
    });
    const adj = !topic || topic === 'alltag' ? A1.adjectives.map((a) => ({ de: a.word, en: a.en, emoji: '', extra: a.opp ? `↔ ${a.opp}` : '' })) : [];
    return shuffle(nouns.concat(verbs, adj)).slice(0, 20);
  }
  function viewFlash() {
    const f = ui.flash;
    const topics = Object.keys(A1.TOPICS).filter((k) => !k.startsWith('g_') && (A1.nouns.some((n) => n.topic === k) || A1.verbs.some((v) => v.topic === k)));
    const chips = `<div class="chips">${topics.map((k) => `<button type="button" class="chip ${f && f.topic === k ? 'is-on' : ''}" data-act="flashTopic" data-arg="${k}">${esc(topicName(k))}</button>`).join('')}</div>`;
    if (!f) return `<h1>${esc(t('flashTitle'))}</h1><p class="lead">${esc(t('flashPick'))}</p>${chips}<div class="row">${btn('home', t('backHome'), 'btn-ghost')}</div>`;
    if (!f.deck.length) {
      return `<h1>${esc(t('flashTitle'))}</h1><section class="sheet center"><p class="lead">${esc(t('flashDone'))}</p>
        <div class="row center">${btn('flashTopic', t('again'), 'btn-primary', `data-arg="${f.topic}"`)}${btn('home', t('backHome'), 'btn-ghost')}</div></section>
        <p class="eyebrow">${esc(t('flashPick'))}</p>${chips}`;
    }
    const c = f.deck[0];
    return `<h1>${esc(t('flashTitle'))} <span class="muted">· ${esc(topicName(f.topic))}</span></h1>
      <p class="muted">${esc(t('cardsLeft', { n: f.deck.length }))}</p>
      <section class="sheet flashcard">
        ${c.emoji ? `<p class="card-emoji" aria-hidden="true">${c.emoji}</p>` : ''}
        <p class="card-word">${esc(c.de)}</p>
        <button type="button" class="link" data-act="sayCard">▶ ${esc(t('listen'))}</button>
        ${f.flipped ? `<p class="card-en">${esc(c.en)}</p>${c.extra ? `<p class="muted">${esc(c.extra)}</p>` : ''}` : ''}
        <div class="row center">${f.flipped ? `${btn('flashAgain', t('again'), 'btn-ghost btn-big')}${btn('flashKnew', t('knew'), 'btn-primary btn-big')}` : btn('flip', t('flip'), 'btn-primary btn-big')}</div>
      </section>
      <p class="eyebrow">${esc(t('flashPick'))}</p>${chips}
      <div class="row">${btn('home', t('backHome'), 'btn-ghost')}</div>`;
  }

  // ---------------- Render ----------------
  function go(v, fromHistory) {
    if (!fromHistory && v !== 'home' && view !== v) {
      try { history.pushState({ v }, ''); } catch (e) { /* history unavailable */ }
    }
    view = v;
    ui.micError = null;
    render();
    window.scrollTo(0, 0);
    main.focus({ preventScroll: true });
  }
  function render() {
    renderHeader();
    let html;
    if (view === 'quiz') html = viewQuiz();
    else if (view === 'progress') html = viewProgress();
    else if (view === 'flash') html = viewFlash();
    else html = viewHome();
    main.innerHTML = html;
    main.dataset.view = view;
    const next = document.getElementById('next-btn');
    if (next) next.focus({ preventScroll: false });
    else if (view === 'quiz') {
      const typed = document.getElementById('typed');
      if (typed && !typed.readOnly) typed.focus();
    }
  }

  // ---------------- Answer checks ----------------
  function current() { const ss = S.session; return { ss, it: ss.items[ss.i], cur: curState() }; }

  function checkType() {
    const { it, cur } = current();
    if (cur.done) return;
    const typed = cur.typed.trim();
    let score = 0, note = null;
    const m = matchTyped(typed, it.accepted);
    if (m === 'exact') score = 1;
    else if (m === 'close') { score = 1; note = 'almost'; }
    else if (it.word) {
      const parts = typed.split(/\s+/);
      if (parts.length === 1 && matchTyped(typed, [it.word])) { score = 0.5; note = 'missingArticle'; }
      else if (parts.length >= 2 && ['der', 'die', 'das'].includes(parts[0].toLowerCase()) && matchTyped(parts.slice(1).join(' '), [it.word])) { score = 0; note = 'wrongArticle'; }
    }
    cur.note = note;
    record(it, score, typed);
    render();
  }
  function checkForm() {
    const { it, cur } = current();
    if (cur.done) return;
    cur.fieldOk = it.fields.map((f, i) => !!matchTyped(cur.fields[i] || '', f.accepted));
    const score = cur.fieldOk.filter(Boolean).length / it.fields.length;
    record(it, score, it.fields.map((f, i) => `${f.label}: ${cur.fields[i] || '–'}`).join(' · '));
    render();
  }

  // ---------------- Events ----------------
  const acts = {
    home: () => { SP.stop(); ui.msg = null; go('home'); },
    lang: (el) => { S.lang = el.dataset.lang; save(); render(); },
    quick: () => { ui.msg = null; startSession('quick'); },
    mock: () => { ui.msg = null; startSession('mock'); },
    mistakes: () => { ui.msg = null; startSession('mistakes'); },
    skill: (el) => { ui.msg = null; startSession('skill', el.dataset.arg); },
    topic: (el) => { ui.msg = null; startSession('topic', el.dataset.arg); },
    again: () => { const ss = S.session; startSession(ss.mode, ss.arg); },
    newSet: () => { const ss = S.session; startSession(ss.mode, ss.arg); },
    progress: () => { ui.msg = null; ui.copyMsg = null; ui.resetAsk = false; go('progress'); },
    flash: () => { ui.flash = null; go('flash'); },
    resume: () => go('quiz'),
    discard: () => { S.session = null; save(); render(); },
    quit: () => { SP.stop(); SP.stopListening(); ui.listening = false; const ss = S.session; if (ss && ss.results.filter(Boolean).length && ss.i > 0) { ss.items = ss.items.slice(0, ss.i + (ss.cur && ss.cur.done ? 1 : 0)); ss.i = ss.items.length; ss.stoppedEarly = true; save(); render(); } else { S.session = null; save(); go('home'); } },
    startSection: (el) => { const ss = S.session; ss.introDone[el.dataset.arg] = true; ss.secStart[el.dataset.arg] = Date.now(); save(); render(); },
    next: () => {
      SP.stop(); SP.stopListening(); ui.listening = false; ui.micError = null; ui.playing = false;
      const ss = S.session; ss.i += 1; ss.cur = null; save();
      render(); window.scrollTo(0, 0);
    },
    mc: (el) => {
      const { ss, it, cur } = current();
      if (cur.done) return;
      cur.sel = Number(el.dataset.i);
      SP.stop(); ui.playing = false;
      record(it, cur.sel === it.answer ? 1 : 0, cur.sel);
      void ss;
      render();
    },
    tf: (el) => {
      const { it, cur } = current();
      if (cur.done) return;
      cur.sel = el.dataset.v === '1';
      SP.stop(); ui.playing = false;
      record(it, cur.sel === it.answer ? 1 : 0, cur.sel);
      render();
    },
    play: () => {
      const { ss, it, cur } = current();
      if (ui.playing) { SP.stop(); ui.playing = false; render(); return; }
      if (ss.maxPlays && cur.plays >= ss.maxPlays) return;
      cur.plays += 1;
      ui.playing = true;
      const slow = cur.slow || it.slowAudio;
      SP.speak(it.audio, { rate: slow ? 0.68 : S.rate, voiceURI: S.voiceURI, onend: () => { ui.playing = false; if (view === 'quiz') render(); } });
      saveSoon();
      render();
    },
    slow: (el) => { const { cur } = current(); cur.slow = el.checked; },
    showtext: () => { const { cur } = current(); cur.showText = !cur.showText; render(); },
    char: (el) => {
      let target = el.dataset.target === 'active' ? lastFocusedInput : document.getElementById(el.dataset.target);
      if (!target) target = document.querySelector('.form-sheet input:not([readonly])');
      if (!target || target.readOnly) return;
      const s = target.selectionStart ?? target.value.length, e = target.selectionEnd ?? target.value.length;
      target.value = target.value.slice(0, s) + el.dataset.c + target.value.slice(e);
      target.focus();
      target.setSelectionRange(s + 1, s + 1);
      target.dispatchEvent(new Event('input', { bubbles: true }));
    },
    checkType,
    checkForm,
    place: (el) => { const { cur } = current(); cur.order.push(Number(el.dataset.ti)); render(); },
    unplace: (el) => { const { cur } = current(); cur.order.splice(Number(el.dataset.pos), 1); render(); },
    resetOrder: () => { const { cur } = current(); cur.order = []; render(); },
    checkOrder: () => {
      const { it, cur } = current();
      if (cur.done) return;
      const built = cur.order.map((i) => it.tokens[i]);
      record(it, built.join(' ') === it.answer.join(' ') ? 1 : 0, built.join(' ') + it.end);
      render();
    },
    reveal: () => {
      const { cur } = current();
      SP.stopListening();
      ui.listening = false;
      cur.revealed = true;
      save();
      render();
    },
    rate: (el) => {
      const { it, cur } = current();
      if (cur.done) return;
      record(it, Number(el.dataset.v), it.type === 'write' ? cur.text : cur.transcript);
      render();
    },
    mic: () => {
      const { cur } = current();
      if (ui.listening) { SP.stopListening(); return; }
      ui.micError = null;
      ui.listening = true;
      SP.stop();
      SP.listen({
        onText: (txt) => {
          cur.transcript = txt;
          const box = document.querySelector('.said');
          const p = document.getElementById('said');
          if (box && p) { box.hidden = false; box.querySelector('.eyebrow').textContent = t('youSaid'); p.textContent = txt; }
        },
        onEnd: () => { ui.listening = false; save(); if (view === 'quiz') render(); },
        onError: (err) => { ui.micError = err === 'no-speech' ? null : err; ui.listening = false; if (view === 'quiz') render(); },
      });
      render();
    },
    playModel: () => {
      const { it } = current();
      SP.speak([['A', it.model.replace(/\n/g, ' ')]], { rate: S.rate, voiceURI: S.voiceURI });
    },
    testVoice: () => SP.speak([['A', 'Guten Tag! Ich bin Ihre Stimme für die Deutschprüfung.']], { rate: S.rate, voiceURI: S.voiceURI }),
    copyCode: () => {
      const code = exportCode();
      const done = () => { ui.copyMsg = t('copied'); render(); };
      const fail = () => { ui.copyMsg = t('copyFailed'); render(); const ta = document.getElementById('code-out'); if (ta) { ta.focus(); ta.select(); } };
      try { navigator.clipboard.writeText(code).then(done, fail); } catch (e) { fail(); }
    },
    saveFile: () => {
      const blob = new Blob([JSON.stringify(Object.assign({}, S, { session: null }), null, 1)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `deutsch-a1-fortschritt-${today()}.json`;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
    },
    loadCode: () => {
      const v = document.getElementById('code-in').value;
      ui.msg = importCode(v) ? t('loaded') : t('loadFailed');
      render();
    },
    resetAsk: () => { ui.resetAsk = true; render(); },
    resetNo: () => { ui.resetAsk = false; render(); },
    resetYes: () => {
      const keep = { lang: S.lang, examDate: S.examDate, voiceURI: S.voiceURI, rate: S.rate };
      S = Object.assign(defaults(), keep);
      save();
      ui.resetAsk = false;
      ui.msg = t('resetDone');
      render();
    },
    flashTopic: (el) => { ui.flash = { topic: el.dataset.arg, deck: buildDeck(el.dataset.arg), flipped: false }; render(); },
    flip: () => { ui.flash.flipped = true; render(); },
    flashKnew: () => { ui.flash.deck.shift(); ui.flash.flipped = false; render(); },
    flashAgain: () => { const c = ui.flash.deck.shift(); ui.flash.deck.push(c); ui.flash.flipped = false; render(); },
    sayCard: () => { const c = ui.flash.deck[0]; SP.speak([['A', c.de]], { rate: S.rate, voiceURI: S.voiceURI }); },
  };
  // the speed buttons share data-act="rate" with self-rating; tell them apart by view
  const rateSelf = acts.rate;
  acts.rate = (el) => {
    if (view === 'progress') { S.rate = Number(el.dataset.v); save(); render(); return; }
    rateSelf(el);
  };

  let lastFocusedInput = null;
  document.addEventListener('focusin', (e) => {
    if (e.target.matches && e.target.matches('input[type=text], textarea')) lastFocusedInput = e.target;
  });

  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-act]');
    if (!el || el.disabled || el.getAttribute('aria-disabled') === 'true') return;
    if (el.tagName === 'INPUT' && el.type === 'checkbox') return; // handled on change
    const fn = acts[el.dataset.act];
    if (fn) { e.preventDefault(); fn(el); }
  });
  document.addEventListener('keydown', (e) => {
    const el = e.target;
    if ((e.key === 'Enter' || e.key === ' ') && el.id === 'countdown') { e.preventDefault(); acts.progress(); return; }
    if (e.key === 'Enter' && el.id === 'typed') { e.preventDefault(); checkType(); return; }
    if (e.key === 'Enter' && el.closest && el.closest('.form-sheet') && view === 'quiz') {
      e.preventDefault();
      const inputs = Array.from(document.querySelectorAll('.form-sheet input:not([readonly])'));
      const i = inputs.indexOf(el);
      if (i >= 0 && i < inputs.length - 1) inputs[i + 1].focus(); else checkForm();
    }
  });
  document.addEventListener('change', (e) => {
    const el = e.target;
    if (el.dataset.act === 'slow') { acts.slow(el); return; }
    if (el.id === 'loadFile' && el.files && el.files[0]) {
      const r = new FileReader();
      r.onload = () => { ui.msg = importCode(r.result) ? t('loaded') : t('loadFailed'); render(); };
      r.readAsText(el.files[0]);
      return;
    }
    if (el.dataset.bind === 'examDate') { S.examDate = el.value; save(); renderHeader(); }
    if (el.dataset.bind === 'voice') { S.voiceURI = el.value; save(); }
  });
  document.addEventListener('input', (e) => {
    const el = e.target;
    const b = el.dataset && el.dataset.bind;
    if (!b || view !== 'quiz' || !S.session) return;
    const cur = curState();
    if (b === 'typed') cur.typed = el.value;
    else if (b === 'field') cur.fields[Number(el.dataset.i)] = el.value;
    else if (b === 'text') {
      cur.text = el.value;
      const wc = document.getElementById('wordcount');
      const n = el.value.trim() ? el.value.trim().split(/\s+/).length : 0;
      if (wc) wc.textContent = t('words', { n });
    }
    saveSoon();
  });

  // Phone back button: go back to the start screen instead of closing the app
  window.addEventListener('popstate', () => {
    if (view === 'home') return;
    SP.stop(); SP.stopListening(); ui.listening = false;
    go('home', true);
  });

  // Mock exam timer
  setInterval(() => {
    if (view !== 'quiz' || !S.session || S.session.mode !== 'mock') return;
    const el = document.getElementById('timer');
    const it = S.session.items[S.session.i];
    if (el && it) {
      el.textContent = timerText(S.session, it.section);
      el.classList.toggle('is-over', el.textContent === t('timeUp'));
    }
  }, 1000);

  SP.onVoices(() => { ui.voicesChecked = true; if (view === 'progress') render(); });
  setTimeout(() => { ui.voicesChecked = true; }, 1500);

  // Offline support when served from a website (not inside sandboxed frames)
  if ('serviceWorker' in navigator && /^https?:/.test(location.protocol) && window.top === window.self) {
    try { navigator.serviceWorker.register('sw.js').catch(() => {}); } catch (e) { /* not available */ }
  }

  render();
})();
