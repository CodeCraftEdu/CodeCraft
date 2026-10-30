const test = require('node:test');
const assert = require('node:assert/strict');
const { loadCatalog } = require('../scripts/catalog/load-catalog.cjs');
const { studentDom } = require('./helpers/student-dom.cjs');

test('livre Scratch : lecture HTML disponible avant le moteur, contenu conservé et nettoyage', (t) => {
  const data = loadCatalog();
  const original = JSON.stringify(data.modules['scratch-recette-marche']);
  const dom = studentDom(data);
  t.after(() => dom.close());
  dom.navigate('#module/scratch-recette-marche?parcours=scratch-recettes');
  assert.ok(dom.main.querySelector('.recipe-book__flat .scratch-script__block--motion'));
  assert.equal(dom.main.querySelector('.recipe-book__flat').hidden, false);
  assert.equal(dom.main.querySelector('.recipe-book__stage').hidden, true);
  assert.equal(dom.main.querySelectorAll('[data-density=hard]').length, 2);
  assert.equal(dom.main.querySelector('.course-sidebar'), null);
  assert.equal(JSON.stringify(data.modules['scratch-recette-marche']), original);
  dom.navigate('#module/python-affichage?parcours=python-debutants');
  assert.equal(dom.main.querySelector('.recipe-book'), null);
  assert.equal(dom.main.classList.contains('site-shell--book'), false);
  assert.equal(dom.mediaListeners.size, 1);
});

test('livre Scratch : dizaines de recettes et sommaires paginés sans modifier les sources', (t) => {
  const data = loadCatalog();
  const sequence = data.pathways['scratch-recettes'];
  for (let n = 0; n < 30; n++) {
    const id = 'fixture-recette-' + n;
    data.modules[id] = structuredClone(data.modules['scratch-recette-marche']);
    data.modules[id].title = 'Recette de contrôle ' + n;
    sequence.moduleIds.push(id);
  }
  const dom = studentDom(data);
  t.after(() => dom.close());
  dom.navigate('#module/fixture-recette-29?parcours=scratch-recettes');
  assert.equal(dom.main.querySelector('.lesson-title').textContent, 'Recette de contrôle 29');
  const pages = [...dom.main.querySelectorAll('.recipe-book__host > section')];
  assert.equal(pages.length, 68);
  assert.equal(dom.main.querySelectorAll('.recipe-book__flat .recipe-book__contents a').length, 31);
  for (let n = 5; n < pages.length - 1; n += 2) {
    assert.equal(pages[n].dataset.recipe, pages[n + 1].dataset.recipe);
    assert.ok(pages[n + 1].querySelector('.scratch-script'));
  }
});
