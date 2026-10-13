const test = require('node:test');
const assert = require('node:assert/strict');
const { studentDom } = require('./helpers/student-dom.cjs');
const { loadCatalog } = require('../scripts/catalog/load-catalog.cjs');

test('support clones mobiles : deux piles accessibles et activité indépendante repliée', () => {
  const dom = studentDom();
  try {
    dom.window.HTMLElement.prototype.scrollIntoView = () => {};
    dom.navigate('#module/scratch-clones-mobiles?parcours=scratch-debutants&activite=mouvement');
    const main = dom.window.document.querySelector('main');
    for (const id of ['fabrique', 'mouvement']) {
      const block = main.querySelector('[data-activity-id="' + id + '"]');
      assert(block.querySelector('.scratch-script'));
      assert.equal(block.closest('details'), null);
    }
    assert.equal(main.querySelector('[data-activity-id="atelier"]').open, false);
    assert.equal(main.querySelector('[data-activity-id="depannage"]').open, false);
    const movement = main.querySelector('[data-activity-id="mouvement"]');
    assert.equal(
      movement.querySelector('.scratch-script__reporter--motion').textContent,
      'abscisse x',
    );
    assert(
      movement.querySelector('.scratch-quick-steps').textContent.includes('Glisse abscisse x'),
    );
    dom.navigate('#module/scratch-clones-mobiles?parcours=scratch-debutants&activite=hauteur');
    assert.equal(main.querySelector('[data-activity-id="atelier"]').open, true);
    assert.equal(main.querySelector('[data-activity-id="bonus"]').open, true);
    assert(main.querySelector('[data-activity-id="hauteur"]'));
  } finally {
    dom.close();
  }
});

test('support clones mobiles : reprise des bases et accès professeur aux sections utiles', () => {
  const data = loadCatalog();
  const module = data.modules['scratch-clones-mobiles'];
  assert(module.consolidation.some((link) => link.moduleId === 'scratch-clones'));
  assert.equal(module.teacherGuide.accompaniedActivity.blockId, 'mouvement');
  assert.equal(module.teacherGuide.independentActivity.blockId, 'autonomie');
  const ids = data.pathways['scratch-debutants'].moduleIds;
  assert.equal(ids.indexOf('scratch-clones-mobiles'), ids.indexOf('scratch-clones') + 1);
});
