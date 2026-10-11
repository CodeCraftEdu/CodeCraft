const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'lesson-data.js'), 'utf8'), context);
const configs = context.window.CODECRAFT_DATA.modules['css-flexbox'].blocks
  .filter(b => b.demonstration?.type === 'flex-property').map(b => b.demonstration);
class Node {
  constructor(tag, cls = '', text = '') {
    this.tag = tag; this.cls = cls; this.textContent = text; this.children = [];
    this.attrs = {}; this.events = {}; this.style = { setProperty(name, value) { this[name] = value; } };
  }
  append(...items) { this.children.push(...items); }
  replaceChildren(...items) { this.children = items; }
  setAttribute(name, value) { this.attrs[name] = value; }
  addEventListener(name, fn) { this.events[name] = fn; }
}
const element = (tag, cls, text) => new Node(tag, cls, text);
const source = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const fn = source.slice(source.indexOf('  function createFlexPropertyDemo('), source.indexOf('  function createScratchScript('));
const syntax = source.slice(source.indexOf('  function codeTokens('), source.indexOf('  function createCode('));
const render = vm.runInNewContext(syntax + fn + '\ncreateFlexPropertyDemo;', { element });
const nodes = n => [n, ...n.children.filter(x => x instanceof Node).flatMap(nodes)];
const text = n => typeof n === 'string' ? n : n.textContent + n.children.map(text).join('');

test('Flexbox : chaque choix change uniquement sa propriété et synchronise CSS, axes et retour', () => {
  assert.equal(configs.length, 5);
  for (const config of configs) {
    const demo = render(config);
    const all = nodes(demo);
    assert(!demo.children.some(n => n.cls === 'section-intro'));
    const select = all.find(n => n.tag === 'select');
    const cards = all.find(n => n.cls === 'flex-property-demo__cards');
    const code = all.find(n => n.tag === 'code');
    const feedback = all.find(n => n.attrs.role === 'status');
    assert(all.find(n => n.tag === 'label').children.includes(select));
    assert.equal(cards.children.length, config.cards.length);
    const initial = {...cards.style};
    for (const option of config.options) {
      select.value = option.value; select.events.change();
      assert.equal(cards.style[config.property], option.value);
      assert(text(code).includes(config.property + ': ' + option.value + ';'));
      assert.equal(text(feedback), option.feedback);
      for (const key of Object.keys(initial).filter(k => k !== config.property)) assert.equal(cards.style[key], initial[key]);
    }
    select.value = config.options[0].value; select.events.change();
    assert.equal(cards.style[config.property], initial[config.property]);
    if (config.property === 'flex-direction') {
      select.value = 'column'; select.events.change();
      assert.match(all.find(n => n.cls === 'flex-property-demo__axes').textContent, /principal ↓.*transversal →/);
    }
  }
});

test('Flexbox : wrap explicite les dimensions et l’alignement des lignes, sans écraser les styles globaux', () => {
  const wrap = configs.find(c => c.property === 'flex-wrap');
  assert.equal(wrap.cards.length, 6);
  assert.match(wrap.note, /260px.*64px.*align-content: flex-start/);
  const demo = render(wrap);
  const cards = nodes(demo).find(n => n.cls === 'flex-property-demo__cards');
  assert.equal(cards.style.alignContent, 'flex-start');
  assert.equal(cards.style.width, '260px');
  const css = fs.readFileSync(path.join(root, 'pedagogy.css'), 'utf8');
  assert.match(css, /\.flex-property-demo__viewport \{ overflow-x: auto/);
  assert.match(css, /\.flex-property-demo__card \{[^}]*flex: 0 0 auto/);
});
