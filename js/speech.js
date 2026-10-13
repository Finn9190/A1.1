// Text-to-speech (listening exercises) and speech recognition (speaking practice).
// Both use the browser's built-in Web Speech API. Chrome and Edge work best.
window.A1 = window.A1 || {};

A1.speech = (function () {
  const synth = window.speechSynthesis || null;
  let voices = [];
  let token = 0;
  const listeners = [];

  const PREFER = [/natural/i, /online/i, /google/i, /katja|hedda|conrad|amala|killian|seraphina|florian/i, /anna|petra|markus|yannick|helena/i];
  function score(v) {
    let s = 0;
    PREFER.forEach((re, i) => { if (re.test(v.name)) s += 10 - i; });
    if (/de-DE/i.test(v.lang)) s += 3;
    return s;
  }
  function load() {
    if (!synth) return;
    voices = synth.getVoices().filter((v) => /^de(-|_|$)/i.test(v.lang)).sort((a, b) => score(b) - score(a));
    listeners.forEach((fn) => fn(voices));
  }
  if (synth) {
    load();
    if (typeof synth.addEventListener === 'function') synth.addEventListener('voiceschanged', load);
    else synth.onvoiceschanged = load;
  }

  function pickVoices(preferredURI) {
    const chosen = voices.find((v) => v.voiceURI === preferredURI) || voices[0] || null;
    const second = voices.find((v) => v !== chosen && v.name.split(' ')[0] !== (chosen && chosen.name.split(' ')[0])) || voices.find((v) => v !== chosen) || null;
    return [chosen, second];
  }

  // segments: [[speaker, text], …]; opts: { rate, voiceURI, onend }
  function speak(segments, opts) {
    if (!synth) { if (opts && opts.onend) opts.onend(false); return; }
    stop();
    const my = ++token;
    const [va, vb] = pickVoices(opts && opts.voiceURI);
    let i = 0;
    const next = () => {
      if (my !== token) return;
      if (i >= segments.length) { if (opts && opts.onend) opts.onend(true); return; }
      const [who, text] = segments[i++];
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'de-DE';
      const isB = who === 'B';
      const v = isB ? (vb || va) : va;
      if (v) u.voice = v;
      u.rate = (opts && opts.rate) || 0.9;
      u.pitch = isB && !vb ? 0.75 : 1;
      u.onend = () => setTimeout(next, 450);
      u.onerror = () => setTimeout(next, 50);
      synth.speak(u);
    };
    // Chrome sometimes needs a moment after cancel()
    setTimeout(next, 60);
  }
  function stop() {
    token++;
    if (synth) synth.cancel();
  }

  // ---------- Recognition ----------
  const Rec = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  let rec = null;
  function listen({ onText, onEnd, onError }) {
    if (!Rec) { onError && onError('unsupported'); return; }
    stopListening();
    rec = new Rec();
    rec.lang = 'de-DE';
    rec.continuous = true;
    rec.interimResults = true;
    let finalText = '';
    rec.onresult = (e) => {
      let interim = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const r = e.results[i];
        if (r.isFinal) finalText += r[0].transcript + ' ';
        else interim += r[0].transcript;
      }
      onText && onText((finalText + interim).trim());
    };
    rec.onerror = (e) => { onError && onError(e.error || 'error'); };
    rec.onend = () => { rec = null; onEnd && onEnd(finalText.trim()); };
    try { rec.start(); } catch (err) { onError && onError('start'); }
  }
  function stopListening() {
    if (rec) { try { rec.stop(); } catch (e) { /* already stopped */ } }
  }

  return {
    get supported() { return !!synth; },
    get voices() { return voices; },
    get hasGerman() { return voices.length > 0; },
    onVoices(fn) { listeners.push(fn); },
    speak, stop,
    canListen: !!Rec,
    listen, stopListening,
    get listening() { return !!rec; },
  };
})();
