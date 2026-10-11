const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const app = require('./helpers/student-source.cjs');
class Node {
  constructor(tag) { this.tag = tag; this.children = []; this.textContent = ''; }
  append(...children) { this.children.push(...children); }
}
const document = {
  createElement: tag => new Node(tag),
  createTextNode: text => ({ tag: '#text', textContent: text, children: [] })
};
const source = app.slice(app.indexOf('  function appendInlineText('), app.indexOf('  function createCode('));
const element = vm.runInNewContext(source + '\nelement;', { document, studentTitle: text => text });
const text = node => node.textContent + node.children.map(text).join('');

test('Code en ligne : balises et expressions explicites, texte et ponctuation conservés', () => {
  const node = element('p', '', '<html> avec `lang="fr"`. CSS : `display: flex`. Python : `print()`.');
  assert.equal(text(node), '<html> avec lang="fr". CSS : display: flex. Python : print().');
  const codes = node.children.filter(n => n.tag === 'code');
  assert.deepEqual(codes.map(n => n.textContent), ['<html>', 'lang="fr"', 'display: flex', 'print()']);
  assert(codes.every(n => n.className === 'inline-code'));
  assert.equal(text(element('p', '', 'Si 2 < 3, observe.')), 'Si 2 < 3, observe.');
});

test('Code en ligne : exemples inertes, blocs de code et titres inchangés', () => {
  const payload = '<img src="x" onerror="alert(1)">';
  const node = element('p', '', payload);
  assert.equal(node.children[0].tag, 'code');
  assert.equal(node.children[0].textContent, payload);
  assert.equal(node.children[0].children.length, 0);
  for (const tag of ['code', 'pre', 'h2', 'option']) {
    const raw = element(tag, '', '`print()` <body>');
    assert.equal(raw.children.length, 0);
    assert.equal(raw.textContent, '`print()` <body>');
  }
  assert.equal(element('span', 'task-text', 'Ajoute <h1>.').children[1].tag, 'code');
});

test('Document HTML : balises et attributs identifiables dans la leçon', () => {
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, 'generated/catalog.js'), 'utf8'), context);
  const module = context.window.CODECRAFT_DATA.modules['html-document'];
  const prose = module.blocks.flatMap(b => b.paragraphs || []).join(' ');
  assert.match(prose, /<html> entoure le document/);
  assert(prose.includes('`lang="fr"`'));
  assert(prose.includes('<head>') && prose.includes('<body>'));
  const css = require('./helpers/style-source.cjs').readStyle(path.join(root, 'pedagogy.css'));
  assert.match(css, /\.inline-code\s*\{/);
  assert.match(css, /box-decoration-break: clone/);
});

test('Web : noms de balises dans les consignes, sans transformer mots courants, fichiers ni autres parcours', () => {
  document.body = { dataset: { domain: 'web' } };
  const prose = 'Ajoute h1 et p dans body. La balise a crée un lien. Il a un article dans index.html et style.css. Utilise lang="fr".';
  const node = element('p', '', prose);
  assert.equal(text(node), prose);
  assert.deepEqual(node.children.filter(n => n.tag === 'code').map(n => n.textContent), ['h1', 'p', 'body', 'a', 'lang="fr"']);
  for (const domain of ['python', 'robotique', 'jeux-video']) {
    document.body.dataset.domain = domain;
    const other = element('p', '', 'La variable p et le mot body. Exemple : <h1> et `print()`.');
    assert.deepEqual(other.children.filter(n => n.tag === 'code').map(n => n.textContent), ['<h1>', 'print()']);
  }
  delete document.body;
});

test('Panneaux pédagogiques : les critères utilisent le même rendu que les leçons', () => {
  document.body = { dataset: { domain: 'web' } };
  const append = vm.runInNewContext(source + '\nappendInlineText;', { document, studentTitle: text => text });
  const context = { document, window: { CODECRAFT_DATA: {}, CodeCraftInlineText: append } };
  vm.runInNewContext(fs.readFileSync(path.join(root, 'pedagogy.js'), 'utf8'), context);
  const row = context.window.CodeCraftPedagogy.node('li', 'Je repère h1 dans body.');
  assert.deepEqual(row.children.filter(n => n.tag === 'code').map(n => n.textContent), ['h1', 'body']);
  assert.equal(text(row), 'Je repère h1 dans body.');
  delete document.body;
});

test('Balises séparées par une barre oblique : traitement complet sans modifier les chemins', () => {
  document.body = { dataset: { domain: 'web' } };
  const prose = 'Compare head/body et ul/li dans l’exemple. Garde images/body.html.';
  const node = element('p', '', prose);
  assert.equal(text(node), prose);
  assert.deepEqual(node.children.filter(n => n.tag === 'code').map(n => n.textContent), ['head/body', 'ul/li']);
  delete document.body;
});

test('Attributs HTML seuls : paragraphes, consignes et retours, sans altérer les phrases ni les chemins', () => {
  document.body = { dataset: { domain: 'web' } };
  const prose = 'Colle la source entre les guillemets de src, puis rédige alt. Compare src/alt et href. Garde images/alt.svg et le style de la page.';
  for (const [tag, cls] of [['p', ''], ['span', 'task-text'], ['li', '']]) {
    const node = element(tag, cls, prose);
    assert.equal(text(node), prose);
    assert.deepEqual(node.children.filter(n => n.tag === 'code').map(n => n.textContent), ['src', 'alt', 'src/alt', 'href']);
  }
  const node = element('p', '', 'L’attribut style et src = "image.svg", puis alt=\'Un dessin\'.');
  assert.deepEqual(node.children.filter(n => n.tag === 'code').map(n => n.textContent), ['style', 'src = "image.svg"', "alt='Un dessin'"]);
  document.body.dataset.domain = 'python';
  assert.equal(element('p', '', 'Une variable src et alt.').children.filter(n => n.tag === 'code').length, 0);
  delete document.body;
});
