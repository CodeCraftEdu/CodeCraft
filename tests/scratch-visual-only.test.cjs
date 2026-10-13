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

test('Scratch illustré : blocs de valeur distincts des saisies, légendes utiles uniquement', () => {
  const dom = studentDom();
  try {
    const preview = dom.blocks.createBlock(
      {
        type: 'lesson',
        title: 'Comparer',
        visualScript: {
          caption: 'Valeurs',
          blocks: [
            {
              category: 'control',
              label: 'Contrôle',
              parts: [
                {
                  condition: [{ reporter: 'score', category: 'variables' }, ' > ', { value: '5' }],
                  operator: true,
                },
              ],
            },
          ],
        },
      },
      'scratch-niveaux-etats',
    );
    assert.equal(
      preview.querySelector('.scratch-script__reporter--variables').textContent,
      'score',
    );
    assert.equal(preview.querySelector('.scratch-script__value').textContent, '5');
    assert.equal(preview.querySelector('.scratch-script__explanations'), null);
    assert(preview.querySelector('.scratch-script__layout--single'));
    const explained = dom.blocks.createBlock(
      {
        type: 'lesson',
        title: 'Départ',
        visualScript: {
          caption: 'Script',
          blocks: [
            {
              category: 'events',
              label: 'Événements',
              parts: [{ flag: true }],
              explanation: 'Au drapeau',
            },
            { category: 'looks', label: 'Apparence', parts: ['montrer'] },
          ],
        },
      },
      'scratch-pilotage',
    );
    assert.equal(explained.querySelectorAll('.scratch-script__explanations li').length, 1);
    assert.equal(explained.querySelector('.scratch-script__category').textContent, 'Événements');
  } finally {
    dom.close();
  }
});
