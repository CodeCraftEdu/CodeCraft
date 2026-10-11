const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const { createCodeTools } = require('../src/student/code.mjs');
const { codeTokens: tokenize } = createCodeTools({});

test('HTML : balises, attributs, valeurs et commentaires distincts, texte visible neutre', () => {
  const code =
    '<!doctype html>\n<!-- exemple -->\n<html lang="fr"><body><h1>Carnet</h1><img src="a>b.svg" alt="Une forme"></body></html>';
  const tokens = tokenize(code);
  assert.equal(tokens.map((t) => t.text).join(''), code);
  const has = (text, kind) => tokens.some((t) => t.text === text && t.kind === kind);
  assert(has('html', 'tag'));
  assert(has('h1', 'tag'));
  assert(has('lang', 'attribute'));
  assert(has('"fr"', 'string'));
  assert(has('<!-- exemple -->', 'comment'));
  assert(has('Carnet', ''));
  assert(has('"a>b.svg"', 'string'));
});

test('CSS, Python et JavaScript : repères de syntaxe, chaînes et commentaires protégés', () => {
  const cases = [
    ['.carte { color: "red"; gap: 12px; /* texte */ }', 'color', 'attribute'],
    ['def saluer():\n    # exemple\n    print("Bonjour")\n    return 12', 'def', 'keyword'],
    ['const texte = "< faux >"; // exemple\nconsole.log(texte);', 'const', 'keyword'],
  ];
  for (const [code, text, kind] of cases) {
    const tokens = tokenize(code);
    assert.equal(tokens.map((t) => t.text).join(''), code);
    assert(tokens.some((t) => t.text === text && t.kind === kind));
    assert(tokens.some((t) => t.kind === 'comment'));
    assert(tokens.some((t) => t.kind === 'string'));
  }
});

test('Catalogue complet : coloration sans modifier le code ni exécuter les exemples', () => {
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, 'generated/catalog.js'), 'utf8'), context);
  let count = 0;
  const visit = (value) => {
    if (!value || typeof value !== 'object') return;
    for (const [key, entry] of Object.entries(value)) {
      if (['code', 'syntax'].includes(key) && typeof entry === 'string') {
        assert.equal(
          tokenize(entry)
            .map((t) => t.text)
            .join(''),
          entry,
        );
        count++;
      } else visit(entry);
    }
  };
  visit(context.window.CODECRAFT_DATA);
  assert(count > 100);
  assert.equal(
    tokenize('<script>alert(1)</script>')
      .map((t) => t.text)
      .join(''),
    '<script>alert(1)</script>',
  );
});

test('Blocs de code : hauteur libre, lignes longues contenues et nom de fichier explicite', () => {
  const css = require('./helpers/style-source.cjs').readStyle(path.join(root, 'pedagogy.css'));
  assert.match(css, /\.web-comparison \.code-block \{[^}]*max-height: none/);
  assert.doesNotMatch(css, /\.web-comparison \.code-block \{[^}]*max-height: \d/);
  const lowpoly = require('./helpers/style-source.cjs').readStyle(
    path.join(root, 'student-lowpoly.css'),
  );
  const rule = lowpoly.match(
    /body\.student-lowpoly :is\(\.web-comparison, \.flex-display-demo, \.flex-property-demo\) \.code-block \{([^}]*)\}/,
  )[1];
  assert.match(rule, /white-space: pre-wrap/);
  assert.match(rule, /overflow-wrap: anywhere/);
  assert.match(rule, /max-height: none/);
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, 'generated/catalog.js'), 'utf8'), context);
  const demo = context.window.CODECRAFT_DATA.modules['html-document'].blocks.find(
    (b) => b.id === 'comprendre',
  ).demonstration;
  assert.equal(demo.codeLabel, 'index.html');
  assert(demo.variants.every((v) => v.code.endsWith('</html>')));
});

test('Rendu éditeur : lignes numérotées hors du texte, indentation et copie intactes', () => {
  class Node {
    constructor(tag, cls = '', value = '') {
      this.tag = tag;
      this.cls = cls;
      this.textContent = value;
      this.children = [];
      this.attrs = {};
    }
    append(...children) {
      this.children.push(...children);
    }
    replaceChildren(...children) {
      this.children = children;
    }
    setAttribute(key, value) {
      this.attrs[key] = value;
    }
  }
  const { highlightCode: render } = createCodeTools({
    element: (tag, cls, value) => new Node(tag, cls, value),
  });
  const text = (n) => (typeof n === 'string' ? n : n.textContent + n.children.map(text).join(''));
  const code = '<body>\n  <!-- une ligne\n       puis une autre -->\n  <h1>Carnet</h1>\n</body>\n';
  const node = new Node('code');
  render(node, code);
  assert.equal(text(node), code);
  const lines = node.children.filter((n) => typeof n !== 'string');
  assert.equal(lines.length, 6);
  assert.equal(lines[1].children[0].attrs['data-line'], '2');
  assert.equal(lines[1].children[0].attrs['aria-hidden'], 'true');
  assert.equal(lines[1].children[1].attrs.style, '--indent: 2ch');
  render(node, 'print("Bonjour")');
  assert.equal(text(node), 'print("Bonjour")');
  assert.equal(node.children.length, 1);
});

test('Cadre commun : en-tête de fichier pour les exemples et nom adapté au langage', () => {
  class Node {
    constructor(tag, cls = '', value = '') {
      this.tag = tag;
      this.cls = cls;
      this.textContent = value;
      this.children = [];
      this.attrs = {};
    }
    append(...children) {
      this.children.push(...children);
    }
    replaceChildren(...children) {
      this.children = children;
    }
    setAttribute(key, value) {
      this.attrs[key] = value;
    }
  }
  const { createCode: create } = createCodeTools({
    element: (tag, cls, value) => new Node(tag, cls, value),
  });
  const text = (n) => (typeof n === 'string' ? n : n.textContent + n.children.map(text).join(''));
  for (const [code, filename, label] of [
    ['<h1>Carnet</h1>', undefined, 'index.html'],
    ['.carte { color: red; }', undefined, 'style.css'],
    ['print("Bonjour")', 'bonjour.py', 'bonjour.py'],
  ]) {
    const editor = create(code, filename);
    assert.equal(editor.cls, 'code-editor');
    assert.equal(editor.children[0].textContent, label);
    assert.equal(editor.children[1].tag, 'pre');
    assert.equal(text(editor.children[1].children[0]), code);
  }
  const css = require('./helpers/style-source.cjs').readStyle(
    path.join(root, 'student-lowpoly.css'),
  );
  assert.match(
    css,
    /:is\(\.code-editor, \.web-comparison__source,[^}]*border-bottom: 5px solid color-mix/s,
  );
});
