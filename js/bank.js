// The question bank. Every entry has a stable id and a make() function that returns a fresh,
// shuffled question. Template entries (numbers, clock times, verbs …) produce new values each time.
window.A1 = window.A1 || {};

(function () {
  const { pick, shuffle, sample, uniq, zahl, ordinal, rand } = A1.util;

  const TASK = {
    hoerenMc: { en: 'Listen and choose the right answer.', de: 'Hören Sie und wählen Sie die richtige Antwort.' },
    hoerenTf: { en: 'Listen. Is the sentence right (richtig) or wrong (falsch)?', de: 'Hören Sie. Ist der Satz richtig oder falsch?' },
    lesenTf: { en: 'Read the text. Is the sentence right (richtig) or wrong (falsch)?', de: 'Lesen Sie den Text. Ist der Satz richtig oder falsch?' },
    lesenAd: { en: 'Read the situation. Which ad fits: a or b?', de: 'Lesen Sie die Situation. Welche Anzeige passt: a oder b?' },
    gap: { en: 'Choose the word that fits the gap.', de: 'Welches Wort passt in die Lücke?' },
    phrase: { en: 'What do you say?', de: 'Was sagen Sie?' },
    order: { en: 'Put the words in the right order. Tap the words one after another.', de: 'Bringen Sie die Wörter in die richtige Reihenfolge. Tippen Sie die Wörter nacheinander an.' },
    article: { en: 'der, die or das?', de: 'der, die oder das?' },
    meaning: { en: 'What does this mean in English?', de: 'Was bedeutet das auf Englisch?' },
    typeWord: { en: 'Write the German word with der, die or das.', de: 'Schreiben Sie das deutsche Wort mit der, die oder das.' },
    plural: { en: 'What is the plural?', de: 'Wie heißt der Plural?' },
    form: { en: 'Read the text and fill in the form.', de: 'Lesen Sie den Text und füllen Sie das Formular aus.' },
    write: { en: 'Write a short message (about 30 words). Write something about each point.', de: 'Schreiben Sie eine kurze Nachricht (circa 30 Wörter). Schreiben Sie zu jedem Punkt etwas.' },
    intro: { en: 'Introduce yourself. Speak out loud – say something about each point.', de: 'Stellen Sie sich vor. Sprechen Sie laut – sagen Sie etwas zu jedem Punkt.' },
    topicCard: { en: 'Ask a question with this word. Then answer your own question.', de: 'Stellen Sie eine Frage mit diesem Wort. Dann antworten Sie selbst.' },
    requestCard: { en: 'Make a polite request (with "bitte") that fits the picture.', de: 'Formulieren Sie eine Bitte (mit „bitte“) zum Bild.' },
    numberHear: { en: 'Listen. Which number do you hear?', de: 'Hören Sie. Welche Zahl hören Sie?' },
    numberRead: { en: 'Which number is it?', de: 'Welche Zahl ist das?' },
    numberWord: { en: 'How do you write this number?', de: 'Wie schreibt man diese Zahl?' },
    priceHear: { en: 'Listen. What does it cost?', de: 'Hören Sie. Was kostet das?' },
    phoneHear: { en: 'Listen. Which phone number is it?', de: 'Hören Sie. Welche Telefonnummer ist das?' },
    clockRead: { en: 'What time is it? Choose the everyday way of saying it.', de: 'Wie spät ist es? Wählen Sie die Umgangssprache.' },
    clockHear: { en: 'Listen. What time is it?', de: 'Hören Sie. Wie spät ist es?' },
    clockFormal: { en: 'How do you say this time officially (e.g. at the station)?', de: 'Wie sagt man diese Uhrzeit offiziell (z. B. am Bahnhof)?' },
    dateHear: { en: 'Listen. Which date do you hear?', de: 'Hören Sie. Welches Datum hören Sie?' },
    dayMonth: { en: 'Choose the right answer.', de: 'Wählen Sie die richtige Antwort.' },
    spellHear: { en: 'Listen. A name is spelled. Which name is it?', de: 'Hören Sie. Ein Name wird buchstabiert. Welcher Name ist es?' },
    conj: { en: 'Choose the right verb form.', de: 'Wählen Sie die richtige Verbform.' },
    verbMeaning: { en: 'What does this verb mean?', de: 'Was bedeutet dieses Verb?' },
    opposite: { en: 'What is the opposite?', de: 'Was ist das Gegenteil?' },
    pronoun: { en: 'er, sie or es?', de: 'er, sie oder es?' },
  };

  const entries = [];
  const add = (id, skill, topic, make, extra) => entries.push(Object.assign({ id, skill, topic, make }, extra || {}));

  // Shuffle options of a "first option is right" list into {options, answer}
  function mcFromFirst(opts) {
    const correct = opts[0];
    const options = shuffle(opts);
    return { options, answer: options.indexOf(correct) };
  }
  function mcWith(correct, distractors) {
    return mcFromFirst([correct].concat(uniq(distractors.filter((d) => d !== correct)).slice(0, 2)));
  }

  // ---------------- Static items ----------------
  A1.HOEREN.forEach((h) => add(h.id, 'hoeren', h.topic, () => {
    const base = { id: h.id, skill: 'hoeren', topic: h.topic, part: h.part, audio: h.audio, q: h.q, ex: h.ex };
    if (h.type === 'tf') return Object.assign(base, { type: 'tf', task: TASK.hoerenTf, answer: h.answer });
    const ordered = [h.options[h.answer]].concat(h.options.filter((_, i) => i !== h.answer));
    return Object.assign(base, { type: 'mc', task: TASK.hoerenMc }, mcFromFirst(ordered));
  }, { part: h.part }));

  A1.LESEN.forEach((l) => add(l.id, 'lesen', l.topic, () => {
    const base = { id: l.id, skill: 'lesen', topic: l.topic, part: l.part, text: l.text, kind: l.kind, q: l.q, ex: l.ex };
    if (l.type === 'tf') return Object.assign(base, { type: 'tf', task: TASK.lesenTf, answer: l.answer });
    // ads keep their a/b order
    return Object.assign(base, { type: 'mc', ads: true, task: TASK.lesenAd, options: l.options, answer: l.answer });
  }, { part: l.part, group: l.part === 1 ? l.id.replace(/-\d+$/, '') : null }));

  A1.GRAMMAR.forEach(([topic, q, opts, en, de], i) => add(`g-${i}`, 'grammatik', topic, () => Object.assign(
    { id: `g-${i}`, skill: 'grammatik', topic, type: 'mc', task: TASK.gap, q, ex: { en, de } }, mcFromFirst(opts))));

  A1.PHRASES.forEach(([topic, sEn, sDe, opts], i) => add(`p-${i}`, 'wortschatz', topic, () => Object.assign(
    { id: `p-${i}`, skill: 'wortschatz', topic, type: 'mc', task: TASK.phrase, situation: { en: sEn, de: sDe },
      ex: { en: `"${opts[0]}" is the right thing to say here.`, de: `Hier sagt man: „${opts[0]}“` } }, mcFromFirst(opts))));

  A1.SENTENCES.forEach((s, i) => add(`o-${i}`, 'grammatik', 'g_satzbau', () => {
    const words = s.de.replace(/[.?!]$/, '').split(' ');
    const end = s.de.slice(-1);
    let tokens = shuffle(words);
    while (tokens.join(' ') === words.join(' ')) tokens = shuffle(words);
    return { id: `o-${i}`, skill: 'grammatik', topic: 'g_satzbau', type: 'order', task: TASK.order, tokens, answer: words, end, hint: s.en,
      ex: { en: `Meaning: ${s.en}. Remember: the verb is in position 2 (or position 1 in a yes/no question).`, de: 'Das Verb steht auf Position 2 (bei Ja/Nein-Fragen auf Position 1).' } };
  }));

  A1.FORMS.forEach((f) => add(f.id, 'schreiben', f.topic, () => ({
    id: f.id, skill: 'schreiben', topic: f.topic, part: 1, type: 'form', task: TASK.form, title: f.title, text: f.text,
    fields: f.fields.map(([label, accepted]) => ({ label, accepted })),
    ex: { en: 'Copy names and numbers exactly from the text.', de: 'Schreiben Sie Namen und Zahlen genau wie im Text.' },
  }), { part: 1 }));

  const GREET = { de: 'Anrede (z. B. Liebe …, Sehr geehrte …)', en: 'Greeting (e.g. Liebe …, Sehr geehrte …)', kw: 'liebe|lieber|hallo|sehr geehrte|guten tag|hi ' };
  const CLOSE = { de: 'Gruß am Ende (z. B. Viele Grüße)', en: 'Sign-off (e.g. Viele Grüße)', kw: 'grüße|grüsse|gruß|gruss|bis bald|bis dann|bis morgen|bis samstag|bis freitag|tschüss|danke' };
  A1.MESSAGES.forEach((m) => add(m.id, 'schreiben', m.topic, () => ({
    id: m.id, skill: 'schreiben', topic: m.topic, part: 2, type: 'write', task: TASK.write, situation: m.situation,
    points: m.points, extraPoints: [GREET, CLOSE], model: m.model,
    ex: { en: 'Compare your text with the example. Small mistakes are okay – the examiners want to see that you covered all three points.', de: 'Vergleichen Sie mit dem Beispiel. Kleine Fehler sind okay – wichtig sind alle drei Punkte.' },
  }), { part: 2 }));

  add(A1.INTRO.id, 'sprechen', 'person', () => ({
    id: A1.INTRO.id, skill: 'sprechen', topic: 'person', part: 1, type: 'speak', mode: 'intro', task: TASK.intro,
    points: A1.INTRO.points, model: A1.INTRO.model,
    ex: { en: 'In the exam you introduce yourself to the group. Practise until you can say all points without reading.', de: 'In der Prüfung stellen Sie sich der Gruppe vor. Üben Sie, bis Sie alles frei sagen können.' },
  }), { part: 1 });
  A1.INTRO_EXTRA.forEach((x) => add(x.id, 'sprechen', x.topic, () => ({
    id: x.id, skill: 'sprechen', topic: x.topic, part: 1, type: 'speak', mode: 'extra', task: x.task, points: [], model: x.model,
    ex: { en: 'The examiner often asks you to spell your name or say a number after your introduction.', de: 'Oft fragt die Prüferin nach dem Buchstabieren oder einer Nummer.' },
  }), { part: 1 }));
  A1.TOPIC_CARDS.forEach(([topic, theme, word, exQ, exA, kw], i) => add(`sp2-${i}`, 'sprechen', topic, () => ({
    id: `sp2-${i}`, skill: 'sprechen', topic, part: 2, type: 'speak', mode: 'topic', task: TASK.topicCard, theme, word,
    points: [
      { de: `Frage mit „${word}“`, en: `A question with "${word}"`, kw },
      { de: 'Antwort im ganzen Satz', en: 'An answer in a full sentence', kw: 'ich |wir |mein|meine|ja|nein' },
    ],
    model: `${exQ} – ${exA}`,
    ex: { en: 'Start your question with a W-word (Was, Wo, Wann …) or with the verb (Hast du …?).', de: 'Fragen Sie mit einem W-Wort oder mit dem Verb am Anfang.' },
  }), { part: 2 }));
  A1.REQUEST_CARDS.forEach(([topic, emoji, word, example, kw], i) => add(`sp3-${i}`, 'sprechen', topic, () => ({
    id: `sp3-${i}`, skill: 'sprechen', topic, part: 3, type: 'speak', mode: 'request', task: TASK.requestCard, emoji, word,
    points: [{ de: '„bitte“', en: '"bitte"', kw: 'bitte' }, { de: `„${word}“`, en: `"${word}"`, kw }],
    model: example,
    ex: { en: 'Polite requests: "Können Sie bitte …?", "Kannst du mir bitte … geben?", "… , bitte!"', de: 'Bitten: „Können Sie bitte …?“, „Kannst du mir bitte … geben?“' },
  }), { part: 3 }));

  // ---------------- Templates from the vocabulary ----------------
  const ARTS = ['der', 'die', 'das'];
  function articleTip(n) {
    const w = n.word;
    if (/(ung|heit|keit|schaft|ion|ei|in)$/.test(w) && n.art === 'die') return { en: ` Words ending in -ung, -heit, -keit, -ei, -ion or -in (female) are always "die".`, de: ' Wörter auf -ung, -heit, -keit, -ei, -ion, -in sind immer „die“.' };
    if (/(chen|lein)$/.test(w)) return { en: ' Words ending in -chen are always "das".', de: ' Wörter auf -chen sind immer „das“.' };
    if (/e$/.test(w) && n.art === 'die') return { en: ' Many words ending in -e are "die".', de: ' Viele Wörter auf -e sind „die“.' };
    if (/(tag|monat|winter|sommer|herbst|frühling|abend|morgen|mittag)$/i.test(w) && n.art === 'der') return { en: ' Days, months, seasons and times of day are "der".', de: ' Tage, Monate, Jahreszeiten und Tageszeiten sind „der“.' };
    return { en: ' Learn every noun together with its article.', de: ' Lernen Sie jedes Nomen mit Artikel.' };
  }

  const nounsByTopic = {};
  A1.nouns.forEach((n) => { (nounsByTopic[n.topic] = nounsByTopic[n.topic] || []).push(n); });
  const nounKey = (n) => n.word.toLowerCase().replace(/[^a-zäöüß]/g, '');

  A1.nouns.forEach((n) => {
    const k = nounKey(n);
    add(`art-${k}`, 'grammatik', 'g_artikel', () => {
      const tip = articleTip(n);
      return { id: `art-${k}`, skill: 'grammatik', topic: 'g_artikel', type: 'mc', task: TASK.article, visual: n.emoji, q: `___ ${n.word}`, hintText: n.en,
        options: ARTS, answer: ARTS.indexOf(n.art), fixed: true,
        ex: { en: `${n.art} ${n.word} (${n.en}).${tip.en}`, de: `${n.art} ${n.word}.${tip.de}` } };
    });
    add(`voc-${k}`, 'wortschatz', n.topic, () => {
      const pool = (nounsByTopic[n.topic].length > 3 ? nounsByTopic[n.topic] : A1.nouns).filter((x) => x.en !== n.en);
      const d = sample(pool, 2).map((x) => x.en);
      return Object.assign({ id: `voc-${k}`, skill: 'wortschatz', topic: n.topic, type: 'mc', task: TASK.meaning, visual: n.emoji, q: `${n.art} ${n.word}`,
        ex: { en: `${n.art} ${n.word} = ${n.en}${n.plural ? ` (plural: die ${n.plural})` : ''}`, de: `${n.art} ${n.word} = ${n.en}` } }, mcWith(n.en, d));
    });
    add(`typ-${k}`, 'wortschatz', n.topic, () => ({
      id: `typ-${k}`, skill: 'wortschatz', topic: n.topic, type: 'type', task: TASK.typeWord, visual: n.emoji, prompt: n.en,
      accepted: [`${n.art} ${n.word}`], word: n.word, art: n.art,
      ex: { en: `${n.en} = ${n.art} ${n.word}`, de: `${n.en} = ${n.art} ${n.word}` },
    }));
    if (n.plural) {
      add(`pl-${k}`, 'grammatik', 'g_plural', () => {
        const fakes = uniq([
          n.word + 'en', n.word + 's', n.word + 'e', n.word + 'n', n.word + 'er',
          n.word.replace(/a/, 'ä').replace(/o/, 'ö').replace(/u(?!e)/, 'ü') + 'e',
        ]).filter((f) => f !== n.plural);
        if (n.plural !== n.word) fakes.unshift(n.word);
        const d = sample(fakes.slice(0, 5), 2);
        return Object.assign({ id: `pl-${k}`, skill: 'grammatik', topic: 'g_plural', type: 'mc', task: TASK.plural, visual: n.emoji,
          q: `${n.art} ${n.word} → die ___`,
          ex: { en: `${n.art} ${n.word} → die ${n.plural}. Learn the plural together with the word.`, de: `${n.art} ${n.word} → die ${n.plural}` } }, mcWith(n.plural, d));
      });
    }
  });

  // Accusative with ein/eine/einen
  const AKK_TOPICS = { essen: ['Ich möchte', 'Ich kaufe', 'Wir brauchen'], einkaufen: ['Ich kaufe', 'Ich brauche', 'Ich suche'], wohnen: ['Wir brauchen', 'Ich kaufe', 'Ich suche'], freizeit: ['Ich habe', 'Ich suche', 'Ich kaufe'], stadt: ['Ich suche'] };
  const AKK_SKIP = new Set(['Preis', 'Größe', 'Angebot', 'Kasse', 'Platz', 'Weg', 'Gleis', 'Wochenende', 'Urlaub', 'Freund', 'Freundin', 'Party', 'Bank', 'Schule', 'Kirche', 'Stadt', 'Dorf', 'Flughafen', 'Bahnhof', 'Krankenhaus', 'Museum', 'Ampel', 'Kino', 'Konzert', 'Park', 'Schwimmbad', 'Spiel', 'Kilo', 'Liter', 'Stück', 'Abendessen', 'Mittagessen', 'Frühstück', 'Haus', 'Rechnung', 'Kleidung']);
  const INDEF = { der: 'einen', die: 'eine', das: 'ein' };
  A1.nouns.filter((n) => AKK_TOPICS[n.topic] && n.plural && !AKK_SKIP.has(n.word)).forEach((n) => {
    const k = nounKey(n);
    add(`akk-${k}`, 'grammatik', 'g_akkusativ', () => {
      const verb = pick(AKK_TOPICS[n.topic]);
      return { id: `akk-${k}`, skill: 'grammatik', topic: 'g_akkusativ', type: 'mc', task: TASK.gap, visual: n.emoji,
        q: `${verb} ___ ${n.word}.`, options: ['einen', 'eine', 'ein'], answer: ['einen', 'eine', 'ein'].indexOf(INDEF[n.art]), fixed: true,
        ex: { en: `${n.art} ${n.word} → ${INDEF[n.art]} ${n.word}. After verbs like kaufen, brauchen, haben (accusative) only "der" changes: einen.`, de: `${n.art} ${n.word} → ${INDEF[n.art]} ${n.word}. Im Akkusativ ändert sich nur „der“ → einen.` } };
    });
  });

  // er / sie / es
  const PRON = { der: 'Er', die: 'Sie', das: 'Es' };
  A1.nouns.filter((n) => ['familie', 'wohnen', 'einkaufen', 'essen', 'stadt'].includes(n.topic) && n.plural).forEach((n) => {
    const k = nounKey(n);
    add(`pr-${k}`, 'grammatik', 'g_pronomen', () => ({
      id: `pr-${k}`, skill: 'grammatik', topic: 'g_pronomen', type: 'mc', task: TASK.pronoun, visual: n.emoji,
      q: `Wo ist ${n.art} ${n.word}? – ___ ist hier.`, options: ['Er', 'Sie', 'Es'], answer: ['Er', 'Sie', 'Es'].indexOf(PRON[n.art]), fixed: true,
      ex: { en: `${n.art} → ${PRON[n.art].toLowerCase()}. der = er, die = sie, das = es.`, de: `${n.art} ${n.word} → ${PRON[n.art].toLowerCase()}` },
    }));
  });

  // Possessive articles with family words
  const POSS = [
    { label: { en: 'my', de: 'mein' }, m: 'mein', f: 'meine' },
    { label: { en: 'your (du)', de: 'dein' }, m: 'dein', f: 'deine' },
    { label: { en: 'your (Sie)', de: 'Ihr' }, m: 'Ihr', f: 'Ihre' },
  ];
  A1.nouns.filter((n) => n.topic === 'familie').forEach((n) => {
    const k = nounKey(n);
    add(`pos-${k}`, 'grammatik', 'g_possessiv', () => {
      const p = pick(POSS);
      const right = n.art === 'die' ? p.f : p.m;
      const opts = [p.m, p.f, p.m + 'en'];
      return { id: `pos-${k}`, skill: 'grammatik', topic: 'g_possessiv', type: 'mc', task: TASK.gap, visual: n.emoji,
        q: `Das ist ___ ${n.word}. (${p.label.de})`, hintText: p.label.en, options: opts, answer: opts.indexOf(right), fixed: true,
        ex: { en: `${n.art} ${n.word} → ${right} ${n.word}. With "die" words add -e: ${p.f}.`, de: `${n.art} ${n.word} → ${right} ${n.word}` } };
    });
  });

  // ---------------- Verbs ----------------
  const PERSONS = [['ich'], ['du'], ['er', 'sie', 'Maria', 'Herr Kaya'], ['wir'], ['ihr'], ['sie (Plural)', 'Sie']];
  function conjugate(inf) {
    if (A1.IRREGULAR[inf]) return A1.IRREGULAR[inf];
    const stem = inf.replace(/e?n$/, '');
    const e = /[td]$/.test(stem) || /[^aeiouäöülrh]n$/.test(stem) ? 'e' : '';
    return [stem + 'e', stem + e + 'st', stem + e + 't', inf, stem + e + 't', inf];
  }
  A1.conjugate = conjugate;
  A1.verbs.forEach((v) => {
    const k = v.inf.replace(/[^a-zäöüß]/g, '');
    add(`konj-${k}`, 'grammatik', 'g_verben', () => {
      const forms = conjugate(v.inf);
      const p = rand(6);
      const subj = pick(PERSONS[p]);
      const right = forms[p];
      const others = uniq(forms.filter((f) => f !== right));
      return Object.assign({ id: `konj-${k}`, skill: 'grammatik', topic: 'g_verben', type: 'mc', task: TASK.conj,
        q: `${subj} ___ (${v.inf})`, hintText: v.en,
        ex: { en: `${v.inf}: ich ${forms[0]}, du ${forms[1]}, er/sie ${forms[2]}, wir ${forms[3]}, ihr ${forms[4]}, sie/Sie ${forms[5]}`,
          de: `${v.inf}: ich ${forms[0]}, du ${forms[1]}, er/sie ${forms[2]}, wir ${forms[3]}, ihr ${forms[4]}, sie/Sie ${forms[5]}` } },
      mcWith(right, sample(others, 2)));
    });
    add(`vb-${k}`, 'wortschatz', v.topic, () => {
      const d = sample(A1.verbs.filter((x) => x.inf !== v.inf), 2).map((x) => x.en);
      return Object.assign({ id: `vb-${k}`, skill: 'wortschatz', topic: v.topic, type: 'mc', task: TASK.verbMeaning, q: v.inf,
        ex: { en: `${v.inf} = ${v.en}`, de: `${v.inf} = ${v.en}` } }, mcWith(v.en, d));
    });
  });

  // Separable verbs: "Ich stehe um 7 Uhr auf."
  const SEP_REST = { aufstehen: 'um sieben Uhr', einkaufen: 'am Samstag im Supermarkt', anrufen: 'morgen meine Mutter', fernsehen: 'am Abend', aufräumen: 'heute die Küche', mitkommen: 'heute ins Kino', ankommen: 'um 18 Uhr in Berlin', abholen: 'die Kinder um 16 Uhr', anfangen: 'um acht Uhr mit der Arbeit', zumachen: 'das Fenster', aufmachen: 'die Tür' };
  A1.SEPARABLE.forEach(([inf, prefix, ich, er, en]) => {
    add(`sep-${inf}`, 'grammatik', 'g_trennbar', () => {
      const useIch = Math.random() < 0.5;
      const subj = useIch ? 'Ich' : pick(['Maria', 'Er', 'Sie']);
      const form = useIch ? ich : er;
      const wrongPrefix = pick(['an', 'auf', 'ein', 'mit', 'ab'].filter((p) => p !== prefix));
      return Object.assign({ id: `sep-${inf}`, skill: 'grammatik', topic: 'g_trennbar', type: 'mc', task: TASK.gap,
        q: `${subj} ___ ${SEP_REST[inf]} ___.`, hintText: en,
        ex: { en: `${inf}: the verb goes to position 2, the prefix "${prefix}" goes to the end: ${subj} ${form} ${SEP_REST[inf]} ${prefix}.`, de: `${inf}: ${subj} ${form} ${SEP_REST[inf]} ${prefix}.` } },
      mcFromFirst([`${form} … ${prefix}`, `${inf} … –`, `${form} … ${wrongPrefix}`]));
    });
  });

  // Adjectives
  A1.adjectives.filter((a) => a.opp).forEach((a) => {
    add(`opp-${a.word}`, 'wortschatz', 'alltag', () => {
      const d = sample(A1.adjectives.filter((x) => x.word !== a.word && x.word !== a.opp).map((x) => x.word), 2);
      return Object.assign({ id: `opp-${a.word}`, skill: 'wortschatz', topic: 'alltag', type: 'mc', task: TASK.opposite, q: `${a.word} ↔ ___`, hintText: a.en,
        ex: { en: `${a.word} (${a.en}) ↔ ${a.opp}`, de: `${a.word} ↔ ${a.opp}` } }, mcWith(a.opp, d));
    });
  });

  // ---------------- Number, time and date templates ----------------
  function numberDistractors(n) {
    const out = [];
    const t = Math.floor(n / 10) % 10, u = n % 10, h = Math.floor(n / 100);
    if (n >= 20 && u && u !== t) out.push(h * 100 + u * 10 + t); // 47 ↔ 74
    if (n >= 13 && n <= 19) out.push((n - 10) * 10); // 14 ↔ 40
    if (n % 10 === 0 && n >= 30 && n <= 90) out.push(n / 10 + 10); // 40 ↔ 14
    out.push(n + 10, n - 1, n + 1, n + 100);
    return uniq(out.filter((x) => x > 0 && x !== n));
  }
  function randomNumber() {
    const r = Math.random();
    if (r < 0.25) return 13 + rand(7);
    if (r < 0.7) return 21 + rand(79);
    return 100 + rand(900);
  }
  for (let i = 0; i < 25; i++) {
    add(`zh-${i}`, 'hoeren', 'zahlen', () => {
      const n = randomNumber();
      return Object.assign({ id: `zh-${i}`, skill: 'hoeren', topic: 'zahlen', type: 'mc', task: TASK.numberHear, audio: [['A', String(zahl(n))]], q: '',
        ex: { en: `${n} = ${zahl(n)}. In German the ones come before the tens: ${n % 100 > 20 && n % 10 ? `${zahl(n % 10 === 1 ? 1 : n % 10)}-und-${zahl(Math.floor(n % 100 / 10) * 10)}` : zahl(n)}.`, de: `${n} = ${zahl(n)}` } },
      mcWith(String(n), sample(numberDistractors(n), 2).map(String)));
    });
  }
  for (let i = 0; i < 12; i++) {
    add(`zl-${i}`, 'wortschatz', 'zahlen', () => {
      const n = randomNumber();
      return Object.assign({ id: `zl-${i}`, skill: 'wortschatz', topic: 'zahlen', type: 'mc', task: TASK.numberRead, q: zahl(n), big: true,
        ex: { en: `${zahl(n)} = ${n}`, de: `${zahl(n)} = ${n}` } }, mcWith(String(n), sample(numberDistractors(n), 2).map(String)));
    });
    add(`zw-${i}`, 'wortschatz', 'zahlen', () => {
      const n = randomNumber();
      return Object.assign({ id: `zw-${i}`, skill: 'wortschatz', topic: 'zahlen', type: 'mc', task: TASK.numberWord, visual: String(n), visualText: true,
        ex: { en: `${n} = ${zahl(n)}`, de: `${n} = ${zahl(n)}` } }, mcWith(zahl(n), sample(numberDistractors(n), 2).map(zahl)));
    });
  }
  const CENTS = [10, 20, 25, 30, 40, 49, 50, 60, 75, 80, 90, 95, 99, 19, 29, 39, 59, 69, 79, 89];
  const price = (e, c) => `${e},${String(c).padStart(2, '0')} €`;
  const priceWords = (e, c) => `${e === 1 ? 'ein' : zahl(e)} Euro${c ? ' ' + zahl(c) : ''}`;
  for (let i = 0; i < 15; i++) {
    add(`eur-${i}`, 'hoeren', 'zahlen', () => {
      const e = 1 + rand(30), c = pick(CENTS);
      const ct = Math.floor(c / 10), cu = c % 10;
      const d = uniq([
        cu && cu !== ct ? price(e, cu * 10 + ct) : price(e, c + 10 > 99 ? c - 10 : c + 10),
        e !== c % 100 && c < 100 && e < 100 && c ? price(c, e) : price(e + 1, c),
        price(e + 10, c),
      ]).filter((x) => x !== price(e, c));
      const thing = pick(['Das Brot kostet', 'Der Käse kostet', 'Die Fahrkarte kostet', 'Das macht zusammen', 'Die Tasche kostet', 'Ein Kilo Tomaten kostet']);
      return Object.assign({ id: `eur-${i}`, skill: 'hoeren', topic: 'zahlen', type: 'mc', task: TASK.priceHear, audio: [['A', `${thing} ${priceWords(e, c)}.`]], q: '',
        ex: { en: `"${priceWords(e, c)}" = ${price(e, c)}. First the euros, then the cents.`, de: `„${priceWords(e, c)}“ = ${price(e, c)}` } }, mcWith(price(e, c), d));
    });
  }
  for (let i = 0; i < 8; i++) {
    add(`tel-${i}`, 'hoeren', 'zahlen', () => {
      const digits = ['0', '1', String(5 + rand(3)), String(rand(10))].concat(Array.from({ length: 7 }, () => String(rand(10))));
      const fmt = (d) => `${d.slice(0, 4).join('')} ${d.slice(4, 7).join('')} ${d.slice(7).join('')}`;
      const variants = [];
      for (let tries = 0; tries < 40 && variants.length < 2; tries++) {
        const v = digits.slice();
        if (tries % 2 === 0) { const j = 4 + rand(6); [v[j], v[j + 1]] = [v[j + 1], v[j]]; } else { const m = 4 + rand(7); v[m] = String((Number(v[m]) + 1 + rand(8)) % 10); }
        if (fmt(v) !== fmt(digits) && !variants.includes(fmt(v))) variants.push(fmt(v));
      }
      const spoken = [digits.slice(0, 4), digits.slice(4, 7), digits.slice(7)].map((g) => g.map((x) => zahl(Number(x))).join(' ')).join(', ');
      return Object.assign({ id: `tel-${i}`, skill: 'hoeren', topic: 'zahlen', type: 'mc', task: TASK.phoneHear, audio: [['A', `Meine Nummer ist ${spoken}.`]], q: '',
        ex: { en: `The number is ${fmt(digits)}. Write the digits down while you listen.`, de: `Die Nummer ist ${fmt(digits)}.` } }, mcWith(fmt(digits), variants));
    });
  }

  // Clock times
  const z1 = (h) => (h === 1 ? 'eins' : zahl(h)); // "Viertel nach eins"
  function informal(h, m) {
    const next = h % 12 + 1;
    switch (m) {
      case 0: return `${h === 1 ? 'ein' : zahl(h)} Uhr`;
      case 15: return `Viertel nach ${z1(h)}`;
      case 30: return `halb ${z1(next)}`;
      case 45: return `Viertel vor ${z1(next)}`;
      case 25: return `fünf vor halb ${z1(next)}`;
      case 35: return `fünf nach halb ${z1(next)}`;
      case 40: return `zwanzig vor ${z1(next)}`;
      case 50: return `zehn vor ${z1(next)}`;
      case 55: return `fünf vor ${z1(next)}`;
      default: return `${zahl(m)} nach ${z1(h)}`; // 5, 10, 20
    }
  }
  const digital = (h, m) => `${h}:${String(m).padStart(2, '0')}`;
  const MINUTES = [0, 15, 30, 45, 30, 15, 45, 5, 10, 20, 25, 35, 40, 50, 55];
  function timeDistractors(h, m) {
    const next = h % 12 + 1, prev = (h + 10) % 12 + 1;
    const c = [[next, m], [prev, m], [h, (m + 30) % 60], [h, m === 15 ? 45 : m === 45 ? 15 : (m + 15) % 60]];
    if (m === 30) c.unshift([next, 30]);
    return c;
  }
  for (let i = 0; i < 20; i++) {
    add(`uhr-l-${i}`, 'wortschatz', 'zeit', () => {
      const h = 1 + rand(12), m = pick(MINUTES);
      const right = informal(h, m);
      const d = timeDistractors(h, m).map(([a, b]) => informal(a, b));
      return Object.assign({ id: `uhr-l-${i}`, skill: 'wortschatz', topic: 'zeit', type: 'mc', task: TASK.clockRead, clock: [h, m], q: '',
        ex: { en: `${digital(h, m)} = ${right}.${m === 30 ? ' "halb" counts towards the NEXT hour: halb vier = 3:30.' : ''}`, de: `${digital(h, m)} = ${right}` } }, mcWith(right, d));
    });
  }
  for (let i = 0; i < 15; i++) {
    add(`uhr-h-${i}`, 'hoeren', 'zeit', () => {
      const h = 1 + rand(12), m = pick(MINUTES);
      const right = digital(h, m);
      const d = timeDistractors(h, m).map(([a, b]) => digital(a, b));
      return Object.assign({ id: `uhr-h-${i}`, skill: 'hoeren', topic: 'zeit', type: 'mc', task: TASK.clockHear, audio: [['A', `Es ist ${informal(h, m)}.`]], q: '',
        ex: { en: `"${informal(h, m)}" = ${right}.`, de: `„${informal(h, m)}“ = ${right}` } }, mcWith(right, d));
    });
  }
  for (let i = 0; i < 8; i++) {
    add(`uhr-f-${i}`, 'wortschatz', 'zeit', () => {
      const H = 6 + rand(17), m = pick([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]);
      const formal = (hh, mm) => `${hh === 1 ? 'ein' : zahl(hh)} Uhr${mm ? ' ' + zahl(mm) : ''}`;
      const right = formal(H, m);
      const d = [formal(H + 1 > 23 ? H - 1 : H + 1, m), formal(H, (m + 10) % 60), formal(H > 12 ? H - 12 : H + 12, m)];
      return Object.assign({ id: `uhr-f-${i}`, skill: 'wortschatz', topic: 'zeit', type: 'mc', task: TASK.clockFormal, visual: `${H}:${String(m).padStart(2, '0')}`, visualText: true,
        ex: { en: `Officially (station, radio, appointments) you say the hour, then "Uhr", then the minutes: ${right}.`, de: `Offiziell: ${right}` } }, mcWith(right, d));
    });
  }

  // Dates, days and months
  const MONTH_CONFUSE = { Juni: 'Juli', Juli: 'Juni', März: 'Mai', Mai: 'März', September: 'November', November: 'September', Januar: 'Juni', Februar: 'Januar', April: 'August', August: 'April', Oktober: 'Dezember', Dezember: 'Oktober' };
  for (let i = 0; i < 10; i++) {
    add(`dat-${i}`, 'hoeren', 'zeit', () => {
      const d = 1 + rand(28), mi = rand(12), mon = A1.MONTHS[mi];
      const fmt = (dd, mm) => `${dd}. ${mm}`;
      const swapD = d >= 13 && d <= 19 ? d - 10 : d < 10 ? d + 10 : (d % 10) * 10 + Math.floor(d / 10) <= 31 && d % 10 ? (d % 10) * 10 + Math.floor(d / 10) : d + 1;
      return Object.assign({ id: `dat-${i}`, skill: 'hoeren', topic: 'zeit', type: 'mc', task: TASK.dateHear, audio: [['A', `Der Termin ist am ${ordinal(d)} ${mon}.`]], q: '',
        ex: { en: `"am ${ordinal(d)} ${mon}" = ${d}. ${A1.MONTHS_EN[mi]}. Dates use ordinal numbers.`, de: `„am ${ordinal(d)} ${mon}“ = ${d}. ${mon}` } },
      mcWith(fmt(d, mon), [fmt(swapD === d ? d + 1 : swapD, mon), fmt(d, MONTH_CONFUSE[mon])]));
    });
  }
  for (let i = 0; i < 12; i++) {
    add(`tm-${i}`, 'wortschatz', 'zeit', () => {
      const kind = rand(4);
      if (kind < 2) {
        const list = kind === 0 ? A1.DAYS : A1.MONTHS;
        const idx = rand(list.length), after = Math.random() < 0.6;
        const right = list[(idx + (after ? 1 : -1) + list.length) % list.length];
        const d = sample(list.filter((x) => x !== right && x !== list[idx]), 2);
        const q = kind === 0 ? `Welcher Tag kommt ${after ? 'nach' : 'vor'} ${list[idx]}?` : `Welcher Monat kommt ${after ? 'nach' : 'vor'} ${list[idx]}?`;
        return Object.assign({ id: `tm-${i}`, skill: 'wortschatz', topic: 'zeit', type: 'mc', task: TASK.dayMonth, q,
          ex: { en: `${list.join(', ')}.`, de: `${list.join(', ')}.` } }, mcWith(right, d));
      }
      const days = kind === 2;
      const idx = rand(days ? 7 : 12);
      const de = days ? A1.DAYS[idx] : A1.MONTHS[idx];
      const en = days ? A1.DAYS_EN[idx] : A1.MONTHS_EN[idx];
      const pool = days ? A1.DAYS_EN : A1.MONTHS_EN;
      return Object.assign({ id: `tm-${i}`, skill: 'wortschatz', topic: 'zeit', type: 'mc', task: TASK.meaning, q: de,
        ex: { en: `${de} = ${en}`, de: `${de} = ${en}` } }, mcWith(en, sample(pool.filter((x) => x !== en), 2)));
    });
  }

  // Spelling (German letter names)
  const LETTER = { a: 'A', b: 'Be', c: 'Ze', d: 'De', e: 'E', f: 'Eff', g: 'Ge', h: 'Ha', i: 'I', j: 'Jott', k: 'Ka', l: 'Ell', m: 'Emm', n: 'Enn', o: 'O', p: 'Pe', q: 'Ku', r: 'Er', s: 'Ess', t: 'Te', u: 'U', v: 'Fau', w: 'We', x: 'Ix', y: 'Ypsilon', z: 'Zett', ä: 'Ä', ö: 'Ö', ü: 'Ü', ß: 'Eszett' };
  const CONFUSE = { e: 'i', i: 'e', b: 'p', p: 'b', d: 't', t: 'd', g: 'k', k: 'g', v: 'w', w: 'v', f: 'v', j: 'y', y: 'j', m: 'n', n: 'm', s: 'z', z: 's', a: 'e', u: 'o', o: 'u', ü: 'u', ä: 'e', r: 'l', l: 'r', h: 'k', c: 'z', x: 'k', q: 'k', ö: 'o' };
  A1.LETTER = LETTER;
  function variant(name) {
    const chars = name.split('');
    const idxs = chars.map((c, i) => (CONFUSE[c.toLowerCase()] ? i : -1)).filter((i) => i >= 0);
    const j = pick(idxs);
    const c = chars[j], r = CONFUSE[c.toLowerCase()];
    chars[j] = c === c.toUpperCase() ? r.toUpperCase() : r;
    return chars.join('');
  }
  for (let i = 0; i < 12; i++) {
    add(`abc-${i}`, 'hoeren', 'alphabet', () => {
      const name = pick(A1.SPELL_NAMES);
      const spelled = name.toLowerCase().split('').map((c) => LETTER[c] || c).join(' – ');
      let d = [];
      for (let tries = 0; tries < 30 && d.length < 2; tries++) {
        const v = tries < 15 ? variant(name) : variant(variant(name));
        if (v !== name && !d.includes(v)) d.push(v);
      }
      return Object.assign({ id: `abc-${i}`, skill: 'hoeren', topic: 'alphabet', type: 'mc', task: TASK.spellHear, audio: [['A', `Ich buchstabiere: ${spelled}.`]], q: '', slowAudio: true,
        ex: { en: `${name}: ${spelled}. Tricky letters: E (ee) – I (ee as in "see"), J = Jott, V = Fau, W = We, Y = Ypsilon, Z = Zett.`, de: `${name}: ${spelled}` } }, mcWith(name, d));
    });
  }

  // ---------------- Public API ----------------
  const byId = {};
  entries.forEach((e) => { byId[e.id] = e; });
  A1.bank = { entries, byId, TASK };
})();
