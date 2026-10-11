const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.join(__dirname, '..');
const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const catalog = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'lesson-data.js'), 'utf8'), catalog);
const data = catalog.window.CODECRAFT_DATA;

function render(sequence, sequenceId, currentId, wide = false) {
  function element(tag, className, text) {
    return { tag, className, text, children: [], attributes: {}, events: {},
      append(...nodes) { this.children.push(...nodes); },
      setAttribute(key, value) { this.attributes[key] = value; },
      addEventListener(key, callback) { this.events[key] = callback; }
    };
  }
  const media = { matches: wide, addEventListener(key, callback) { this.change = callback; },
    removeEventListener(key, callback) { assert.equal(this.change, callback); this.change = null; } };
  const context = { data, element, window: { matchMedia: () => media }, requestAnimationFrame() {},
    moduleUrl: (id, context) => '#module/' + encodeURIComponent(id) + '?parcours=' + encodeURIComponent(context),
    link: (text, href, className) => Object.assign(element('a', className, text), { href }) };
  vm.createContext(context);
  vm.runInContext(app.slice(app.indexOf('  const studentTitle ='), app.indexOf('  const element =')) + '\nthis.studentTitle = studentTitle;', context);
  vm.runInContext(app.slice(app.indexOf('  function courseNavigation('), app.indexOf('  function notFound(')), context);
  return { sidebar: context.courseNavigation(sequence, sequenceId, currentId), media, context };
}
function nodes(node) { return [node, ...node.children.flatMap(nodes)]; }

test('chaque parcours : tous les modules, ordre conservé, contexte et un seul module actif', () => {
  for (const [id, sequence] of Object.entries(data.pathways)) {
    const current = sequence.moduleIds.at(-1);
    const { sidebar } = render(sequence, id, current);
    const entries = nodes(sidebar).filter(node => node.className === 'course-sidebar__link');
    assert.deepEqual(entries.map(node => node.href), Array.from(sequence.moduleIds, module => '#module/' + module + '?parcours=' + id));
    assert.equal(entries.filter(node => node.attributes['aria-current'] === 'page').length, 1);
    assert.equal(entries.at(-1).attributes['aria-current'], 'page');
    assert.ok(!nodes(sidebar).some(node => node.tag === 'input' || node.attributes['aria-checked']));
    assert.ok(!nodes(sidebar).some(node => node.className === 'course-sidebar__title'));
    assert.ok(!nodes(sidebar).some(node => node.className === 'course-sidebar__number'));
  }
});

test('petit écran : ouvrir/fermer, changement de largeur et nettoyage du listener', () => {
  const { sidebar, media, context } = render(data.pathways['python-debutants'], 'python-debutants', 'python-affichage');
  const [toggle, contents] = sidebar.children;
  assert.equal(contents.hidden, true);
  assert.equal(toggle.attributes['aria-expanded'], 'false');
  toggle.events.click();
  assert.equal(contents.hidden, false);
  toggle.events.click();
  assert.equal(contents.hidden, true);
  media.matches = true; media.change();
  assert.equal(contents.hidden, false);
  media.matches = false; media.change();
  assert.equal(contents.hidden, true);
  context.disposeCourseNavigation();
  assert.equal(media.change, null);
});

test('titres élèves : retirer numéros et tirets décoratifs sans toucher aux mots composés', () => {
  const { context } = render(data.pathways['python-debutants'], 'python-debutants', 'python-thonny');
  for (const title of ['1 — Ton atelier de jeu', '2 - Ton atelier de jeu', '3. Ton atelier de jeu', '4 -- Ton atelier de jeu']) {
    assert.equal(context.studentTitle(title), 'Ton atelier de jeu');
  }
  assert.equal(context.studentTitle('Exercice guidé - trois messages'), 'Exercice guidé : trois messages');
  assert.equal(context.studentTitle('Mini-jeu -- à toi'), 'Mini-jeu : à toi');
  assert.equal(context.studentTitle('Retrouver les repères sur micro:bit'), 'Retrouver les repères sur micro:bit');
  assert.doesNotMatch(app, /element\('(?:ul|ol)', 'module-list'\)/);
});

test('Python : quatre parties de cinq modules, sans transformer les repères en étapes validantes', () => {
  const sequence = data.pathways['python-debutants'];
  assert.equal(sequence.chapters.length, 4);
  assert.equal(sequence.stages, undefined);
  assert.deepEqual(Array.from(sequence.chapters.flatMap(chapter => chapter.moduleIds)), Array.from(sequence.moduleIds));
  assert.ok(sequence.chapters.every(chapter => chapter.moduleIds.length === 5 && chapter.description));
  const { sidebar } = render(sequence, 'python-debutants', 'python-thonny', true);
  const titles = nodes(sidebar).filter(node => node.className === 'course-sidebar__group-title').map(node => node.text);
  assert.deepEqual(titles, Array.from(sequence.chapters, (chapter, index) => 'Partie ' + (index + 1) + ' · ' + chapter.title));
  assert.match(app, /sequence.chapters \|\| sequence.stages \|\| \[\]/);
});

test('parcours longs : parties complètes et ordonnées, modules partagés conservés', () => {
  for (const [id, count] of [['scratch-debutants', 4], ['web-fondations', 3], ['web-debutants', 5]]) {
    const sequence = data.pathways[id];
    assert.equal(sequence.chapters.length, count);
    assert.equal(sequence.stages, undefined);
    assert.deepEqual(Array.from(sequence.chapters.flatMap(chapter => chapter.moduleIds)), Array.from(sequence.moduleIds));
    assert.equal(new Set(sequence.chapters.map(chapter => chapter.id)).size, count);
    assert.ok(sequence.chapters.every(chapter => chapter.title && chapter.description && chapter.moduleIds.length));
    const { sidebar } = render(sequence, id, sequence.moduleIds[0], true);
    assert.equal(nodes(sidebar).filter(node => node.className === 'course-sidebar__group-title').length, count);
  }
  assert.equal(data.pathways['web-avances'].chapters, undefined);
  assert.equal(data.pathways['robotique-debutants'].chapters, undefined);
  assert.equal(data.pathways['gdevelop-debutants'].chapters, undefined);
});

test('étapes existantes conservées, sortie du cours et aucun parcours choisi arbitrairement', () => {
  const id = 'robotique-debutants';
  const sequence = data.pathways[id];
  const { sidebar } = render(sequence, id, sequence.moduleIds[0], true);
  const titles = nodes(sidebar).filter(node => node.className === 'course-sidebar__group-title').map(node => node.text);
  assert.deepEqual(titles, Array.from(sequence.stages, stage => stage.title));
  assert.match(app, /main\.classList\.remove\('site-shell--course'\)/);
  assert.match(app, /containing\.length === 1 \? containing\[0\] : null/);
  assert.match(app, /if \(sequence\) \{\s*const sequenceId/);
  const css = fs.readFileSync(path.join(root, 'student-lowpoly.css'), 'utf8');
  assert.match(css, /position: sticky; top: 20px/);
  assert.match(css, /course-sidebar__contents\[hidden\] \{ display: none/);
  assert.match(css, /@media print \{\s*body.student-lowpoly .course-sidebar \{ display: none/);
});
