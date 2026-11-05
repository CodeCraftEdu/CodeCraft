const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { loadCatalog } = require('../scripts/catalog/load-catalog.cjs');
const { studentDom } = require('./helpers/student-dom.cjs');
const {
  TRAINING_STORAGE_KEY,
  restoreTraining,
  trainingSummary,
} = require('../src/student/ai-training.mjs');
const data = loadCatalog();
const config = data.modules['ia-entrainement'].blocks[0].aiTraining;

test('entraînement : essais distincts, fichiers distribués et catégories cohérentes', () => {
  const sources = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../docs/sources-kit-ia.json'), 'utf8'),
  );
  const files = [...config.comparison, ...config.fresh, ...config.complement];
  assert.equal(new Set(files.map((photo) => photo.file)).size, files.length);
  for (const photo of files) {
    const source = sources.find((item) => item.file === photo.file);
    assert(source);
    assert.equal(source.path.split('/')[1], photo.folder);
    assert.equal(photo.expected, photo.folder === 'tasses' ? 'Tasses' : 'Cuillères');
    assert(fs.existsSync(path.join(__dirname, '..', config.basePath, source.path)));
  }
});

test('entraînement : reprise filtrée et aucun essai vide compté comme une erreur', () => {
  const photo = config.comparison[0];
  const state = restoreTraining(
    {
      version: 1,
      step: 99,
      results: { ['before:' + photo.file]: photo.expected, unknown: 'Tasses' },
      selected: ['unknown', config.complement[0].file],
      reason: 'x'.repeat(1500),
    },
    config,
  );
  assert.equal(state.step, 0);
  assert.equal(state.reason.length, 1000);
  assert.deepEqual(state.selected, [config.complement[0].file]);
  assert.equal(Object.keys(state.results).length, 1);
  assert.deepEqual(trainingSummary(config.comparison, {}, 'before'), {
    tested: 0,
    correct: 0,
    total: 4,
  });
  assert.deepEqual(trainingSummary(config.comparison, state.results, 'before'), {
    tested: 1,
    correct: 1,
    total: 4,
  });
});

test('entraînement : relevé, justification, reprise et reset isolé des autres chapitres', () => {
  const dom = studentDom(data);
  try {
    const doc = dom.window.document;
    const click = (id) => doc.querySelector('[data-training-action="' + id + '"]').click();
    dom.window.localStorage.setItem(
      'codecraft.ai.classification.v1',
      JSON.stringify({ version: 1, step: 0 }),
    );
    dom.navigate('#module/ia-entrainement?parcours=ia-experience');
    assert(doc.querySelector('.ai-training a[download]').href.endsWith('tasses-cuilleres.zip'));
    click('step-1');
    const select = doc.querySelector('[data-training-result]');
    select.value = config.comparison[0].expected;
    select.dispatchEvent(new dom.window.Event('change'));
    assert(doc.querySelector('.ai-training__summary').textContent.includes('1/4'));
    click('step-2');
    doc.querySelector('[data-training-photo]').click();
    const reason = doc.querySelector('#ai-training-reason');
    reason.value = 'Ajouter une autre orientation.';
    reason.dispatchEvent(new dom.window.Event('input'));
    dom.navigate('#module/ia-classification?parcours=ia-experience');
    dom.navigate('#module/ia-entrainement?parcours=ia-experience');
    assert.equal(doc.querySelector('#ai-training-reason').value, reason.value);
    assert(doc.querySelector('[data-training-photo]').checked);
    assert.equal(doc.querySelector('[data-training-result]').value, config.comparison[0].expected);
    assert.equal(doc.querySelectorAll('.ai-training table tbody tr').length, 8);
    click('reset');
    click('cancel-reset');
    assert(doc.querySelector('#ai-training-reason').value);
    click('reset');
    click('confirm-reset');
    assert.equal(dom.window.localStorage.getItem(TRAINING_STORAGE_KEY), null);
    assert.equal(
      dom.window.localStorage.getItem('codecraft.ai.classification.v1'),
      JSON.stringify({ version: 1, step: 0 }),
    );
  } finally {
    dom.close();
  }
});

test('entraînement : rappel initial réactif et bilan fidèle aux relevés partiels', () => {
  const dom = studentDom(data);
  try {
    dom.navigate('#module/ia-entrainement?parcours=ia-experience');
    const doc = dom.window.document;
    const click = (id) => doc.querySelector('[data-training-action="' + id + '"]').click();
    const choose = (field, value) => {
      field.value = value;
      field.dispatchEvent(new dom.window.Event('change'));
    };
    click('step-2');
    assert.equal(doc.querySelector('.ai-training__reminder').hidden, false);
    click('complete-before');
    assert.equal(doc.querySelector('[aria-current="step"]').textContent, 'Entraîner');
    for (const field of doc.querySelectorAll('[data-training-result]')) choose(field, 'Cuillères');
    click('step-2');
    assert.equal(doc.querySelector('.ai-training__reminder').hidden, true);
    const first = doc.querySelector('[data-training-result^="before:"]');
    choose(first, '');
    assert.equal(doc.querySelector('.ai-training__reminder').hidden, false);
    doc.querySelector('[data-training-photo]').click();
    const reason = doc.querySelector('#ai-training-reason');
    reason.value = 'Comparer plusieurs objets.';
    reason.dispatchEvent(new dom.window.Event('input'));
    click('step-3');
    const recap = doc.querySelector('.ai-training__recap').textContent;
    assert(recap.includes('3/4 essais renseignés, 1/3 correctement classés'));
    assert(recap.includes('Après, mêmes photos : 0/4 essais renseignés.'));
    assert(recap.includes('Nouvelles photos : 0/4 essais renseignés.'));
    assert(recap.includes(config.complement[0].file));
    assert(recap.includes(reason.value));
    const feedback = doc.querySelector('.ai-training__bias');
    assert.equal(feedback.open, false);
    assert(feedback.textContent.includes(config.biasCheck.answer));
    click('review-results');
    assert.equal(doc.querySelector('#ai-training-reason').value, reason.value);
  } finally {
    dom.close();
  }
});
