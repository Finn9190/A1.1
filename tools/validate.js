// Checks the question bank: loads all data files, builds every question several times
// and reports broken items (missing answers, duplicate options, duplicate ids).
// Run: node tools/validate.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const ctx = { window: {}, console };
ctx.window = ctx;
vm.createContext(ctx);
['js/data/vocab.js', 'js/data/hoeren.js', 'js/data/lesen.js', 'js/data/grammatik.js', 'js/data/schreiben.js', 'js/data/sprechen.js', 'js/util.js', 'js/bank.js']
  .forEach((f) => vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f }));

const { entries } = ctx.A1.bank;
const problems = [];
const ids = new Set();
const counts = {};
entries.forEach((e) => {
  if (ids.has(e.id)) problems.push(`duplicate id ${e.id}`);
  ids.add(e.id);
  counts[e.skill] = (counts[e.skill] || 0) + 1;
  for (let run = 0; run < 15; run++) {
    let it;
    try { it = e.make(); } catch (err) { problems.push(`${e.id}: make() threw ${err.message}`); break; }
    if (it.id !== e.id) problems.push(`${e.id}: item id ${it.id} differs`);
    if (!it.task || !it.task.en || !it.task.de) problems.push(`${e.id}: missing task text`);
    if (!it.ex || !it.ex.en || !it.ex.de) problems.push(`${e.id}: missing explanation`);
    if (it.type === 'mc') {
      if (!Array.isArray(it.options) || it.options.length < 2) problems.push(`${e.id}: fewer than 2 options`);
      else if (new Set(it.options).size !== it.options.length) problems.push(`${e.id}: duplicate options ${JSON.stringify(it.options)}`);
      if (typeof it.answer !== 'number' || !(it.answer in it.options)) problems.push(`${e.id}: bad answer index`);
      if (it.options && it.options.some((o) => o == null || o === '' || /undefined|NaN/.test(String(o)))) problems.push(`${e.id}: empty option ${JSON.stringify(it.options)}`);
      if (it.options && it.options.length < 3 && !it.ads) problems.push(`${e.id}: only ${it.options.length} options ${JSON.stringify(it.options)}`);
    }
    if (it.type === 'tf' && typeof it.answer !== 'boolean') problems.push(`${e.id}: tf answer not boolean`);
    if (it.audio && it.audio.some(([, t]) => /undefined|NaN/.test(t))) problems.push(`${e.id}: bad audio text`);
    if (it.type === 'order' && it.tokens.join(' ') === it.answer.join(' ') && it.answer.length > 2) problems.push(`${e.id}: tokens not shuffled`);
  }
});

const uniq = (a) => [...new Set(a)];
console.log('Questions in the bank:', entries.length);
console.log('By skill:', counts);
if (problems.length) {
  console.log(`\n${uniq(problems).length} problem(s):`);
  uniq(problems).slice(0, 60).forEach((p) => console.log(' -', p));
  process.exit(1);
}
console.log('All questions OK.');
