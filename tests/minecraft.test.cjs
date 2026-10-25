const test = require('node:test');
const assert = require('node:assert/strict');
const { loadCatalog } = require('../scripts/catalog/load-catalog.cjs');
const { validateSource } = require('../scripts/catalog/validate-schema.cjs');
const { studentDom } = require('./helpers/student-dom.cjs');
const data = loadCatalog();

test('Minecraft : seules les missions disponibles sont accessibles depuis le parcours', (t) => {
  const dom = studentDom(data);
  t.after(() => dom.close());
  dom.navigate('#domaine/jeux-video');
  const entry = dom.main.querySelector('a[href*="parcours=minecraft-algorithmes"]');
  assert.ok(entry);
  dom.navigate(entry.hash);
  assert.equal(dom.main.querySelector('h1').textContent, data.modules['minecraft-trajets'].title);
  const next = dom.main.querySelector('.module-navigation__next');
  assert.equal(next.hash, '#module/minecraft-repetitions?parcours=minecraft-algorithmes');
  dom.navigate(next.hash);
  const construction = dom.main.querySelector('.module-navigation__next');
  assert.equal(construction.hash, '#module/minecraft-passage?parcours=minecraft-algorithmes');
  dom.navigate(construction.hash);
  const procedures = dom.main.querySelector('.module-navigation__next');
  assert.equal(procedures.hash, '#module/minecraft-procedures?parcours=minecraft-algorithmes');
  dom.navigate(procedures.hash);
  const motifs = dom.main.querySelector('.module-navigation__next');
  assert.equal(motifs.hash, '#module/minecraft-motifs?parcours=minecraft-algorithmes');
  dom.navigate(motifs.hash);
  const decisions = dom.main.querySelector('.module-navigation__next');
  assert.equal(decisions.hash, '#module/minecraft-decisions?parcours=minecraft-algorithmes');
  dom.navigate(decisions.hash);
  const strategies = dom.main.querySelector('.module-navigation__next');
  assert.equal(strategies.hash, '#module/minecraft-strategies?parcours=minecraft-algorithmes');
  dom.navigate(strategies.hash);
  const project = dom.main.querySelector('.module-navigation__next');
  assert.equal(project.hash, '#module/minecraft-automatisation?parcours=minecraft-algorithmes');
  dom.navigate(project.hash);
  assert.equal(dom.main.querySelector('.module-navigation__next'), null);
  assert.equal(dom.main.querySelectorAll('.course-sidebar a[aria-current="page"]').length, 1);
  assert.ok(
    dom.main.querySelector('a[href="#module/minecraft-motifs?parcours=minecraft-algorithmes"]'),
  );
});

test('Minecraft : les raccourcis ouvrent les activités Code.org du cours', (t) => {
  const dom = studentDom(data);
  t.after(() => dom.close());
  dom.window.HTMLElement.prototype.scrollIntoView = () => {};
  for (const [id, source, target] of [
    ['minecraft-trajets', 'entree-scratch', 'niveau-trois'],
    ['minecraft-repetitions', 'entree-experimentee', 'niveau-quatre'],
    ['minecraft-procedures', 'entree-scratch', 'lire-huit'],
    ['minecraft-motifs', 'entree-experimentee', 'definir-troncon'],
    ['minecraft-decisions', 'entree-experimentee', 'lire-sept'],
  ]) {
    dom.navigate('#module/' + id + '?parcours=minecraft-algorithmes');
    const anchor = dom.main.querySelector('[data-activity-id="' + source + '"] a');
    assert.equal(new URLSearchParams(anchor.hash.split('?')[1]).get('activite'), target);
    dom.navigate(anchor.hash);
    assert.ok(dom.main.querySelector('[data-activity-id="' + target + '"]'));
    assert.ok(dom.main.querySelector('a[href^="https://studio.code.org/"]'));
  }
  dom.navigate('#module/minecraft-trajets?parcours=minecraft-algorithmes');
  const project = dom.main.querySelector('[data-activity-id="entree-projet"] a');
  dom.navigate(project.hash);
  assert.equal(
    dom.main.querySelector('h1').textContent,
    data.modules['minecraft-automatisation'].title,
  );
});

test('liens de niveaux : le bon niveau externe s’ouvre sans remplacer la mission', (t) => {
  const dom = studentDom(data);
  t.after(() => dom.close());
  for (const [id, course, levels] of [
    ['minecraft-trajets', 'hero', [1, 3]],
    ['minecraft-repetitions', 'hero', [4, 5]],
    ['minecraft-passage', 'hero', [6, 7]],
    ['minecraft-procedures', 'hero', [8, 10]],
    ['minecraft-motifs', 'hero', [12]],
    ['minecraft-decisions', 'aquatic', [4, 7, 8]],
    ['minecraft-strategies', 'aquatic', [9, 10, 11]],
    ['minecraft-automatisation', 'hero', [12]],
  ]) {
    dom.navigate('#module/' + id + '?parcours=minecraft-algorithmes');
    const external = [...dom.main.querySelectorAll('a[href^="https://studio.code.org/"]')];
    assert.deepEqual(
      external.map((a) => a.href).sort(),
      levels
        .map(
          (level) => `https://studio.code.org/courses/${course}/units/1/lessons/1/levels/${level}`,
        )
        .sort(),
    );
    for (const anchor of external) {
      assert.equal(anchor.target, '_blank');
      assert.equal(anchor.rel, 'noopener noreferrer');
    }
  }
  const invalid = structuredClone(data.modules['minecraft-trajets']);
  invalid.blocks.find((b) => b.externalLink).externalLink.url = 'javascript:alert(1)';
  assert.throws(() => validateSource('module', invalid, 'unsafe.json'), /externalLink|pattern/);
});

test('Minecraft : les cours utilisent le jeu sans support de grille ou de notes imposé', () => {
  function flatten(blocks) {
    return blocks.flatMap((block) => [block, ...flatten(block.blocks || [])]);
  }
  for (const id of data.pathways['minecraft-algorithmes'].moduleIds) {
    const module = data.modules[id];
    assert.ok(module.tool.url.startsWith('https://studio.code.org/'));
    for (const block of flatten(module.blocks)) {
      assert.equal(block.illustration, undefined, id);
      assert.equal(block.code, undefined, id);
      assert.doesNotMatch(
        JSON.stringify(block),
        /grille|papier|carnet|feuille|pion|dessin|contre-exemple/i,
        id,
      );
    }
  }
});
