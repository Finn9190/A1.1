// Small helpers shared by the question bank and the app.
window.A1 = window.A1 || {};

A1.util = (function () {
  const rand = (n) => Math.floor(Math.random() * n);
  const pick = (arr) => arr[rand(arr.length)];
  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = rand(i + 1);
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  // n distinct random elements
  const sample = (arr, n) => shuffle(arr).slice(0, n);
  const uniq = (arr) => Array.from(new Set(arr));

  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

  // German number words, 0–9999
  const UNITS = ['null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun'];
  const TEENS = ['zehn', 'elf', 'zwölf', 'dreizehn', 'vierzehn', 'fünfzehn', 'sechzehn', 'siebzehn', 'achtzehn', 'neunzehn'];
  const TENS = ['', '', 'zwanzig', 'dreißig', 'vierzig', 'fünfzig', 'sechzig', 'siebzig', 'achtzig', 'neunzig'];
  function under100(n) {
    if (n < 10) return UNITS[n];
    if (n < 20) return TEENS[n - 10];
    const t = Math.floor(n / 10), u = n % 10;
    if (!u) return TENS[t];
    return (u === 1 ? 'ein' : UNITS[u]) + 'und' + TENS[t];
  }
  function zahl(n) {
    if (n < 100) return under100(n);
    if (n < 1000) {
      const h = Math.floor(n / 100), r = n % 100;
      return (h === 1 ? 'ein' : UNITS[h]) + 'hundert' + (r ? under100(r) : '');
    }
    const th = Math.floor(n / 1000), r = n % 1000;
    return (th === 1 ? 'ein' : UNITS[th]) + 'tausend' + (r ? zahl(r) : '');
  }
  // Ordinal in the form used after "am" / "der": ersten, zweiten, dritten …
  function ordinal(n) {
    const special = { 1: 'ersten', 3: 'dritten', 7: 'siebten', 8: 'achten' };
    if (special[n]) return special[n];
    if (n < 20) return zahl(n) + 'ten';
    return zahl(n) + 'sten';
  }

  // Normalise typed text for comparison: lower case, no punctuation, umlauts spelled out.
  function norm(s) {
    return String(s || '').toLowerCase().trim()
      .replace(/[.!?,;:„“"'()\-–]/g, ' ')
      .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
      .replace(/\s+/g, ' ').trim();
  }
  function lev(a, b) {
    const m = a.length, n = b.length;
    if (!m) return n;
    if (!n) return m;
    let prev = Array.from({ length: n + 1 }, (_, j) => j);
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      }
      prev = cur;
    }
    return prev[n];
  }
  // 'exact' | 'close' | null
  function matchTyped(given, accepted) {
    const g = norm(given);
    if (!g) return null;
    let best = null;
    for (const a of accepted) {
      const na = norm(a);
      if (g === na) return 'exact';
      const d = lev(g, na);
      const allowed = na.length >= 8 ? 2 : na.length >= 4 ? 1 : 0;
      if (d <= allowed) best = 'close';
    }
    return best;
  }

  const today = () => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  };

  return { rand, pick, shuffle, sample, uniq, esc, zahl, ordinal, norm, lev, matchTyped, today };
})();
