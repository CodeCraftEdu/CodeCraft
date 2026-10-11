const test = require('node:test');
const assert = require('node:assert/strict');
const { studentDom } = require('./helpers/student-dom.cjs');

test('Scratch illustré : pas de doublon en pseudo-code, explications et autres codes conservés', () => {
  const dom = studentDom();
  try {
    const block = {
      type: 'lesson',
      id: 'exemple',
      title: 'Exemple',
      code: 'NE PAS AFFICHER',
      shortSteps: ['Observer'],
      paragraphs: ['Repère les blocs.'],
      visualScript: {
        caption: 'Script',
        blocks: [
          { category: 'events', label: 'Départ', parts: [{ flag: true }], explanation: 'Au clic' },
        ],
      },
    };
    const preview = dom.blocks.createBlock(block, 'scratch-pilotage');
    assert(preview.querySelector('.scratch-script'));
    assert.equal(preview.querySelector('.code-editor'), null);
    assert(!preview.textContent.includes('NE PAS AFFICHER'));
    assert.equal(
      preview.querySelector('.scratch-explanations summary').textContent,
      'Explications et repères supplémentaires',
    );
    assert.equal(preview.querySelector('.scratch-explanations p').textContent, 'Repère les blocs.');
    const code = dom.blocks.createBlock(
      { type: 'lesson', title: 'Python', code: 'print("Bonjour")' },
      'python-affichage',
    );
    assert.equal(code.querySelector('code').textContent, 'print("Bonjour")');
  } finally {
    dom.close();
  }
});
