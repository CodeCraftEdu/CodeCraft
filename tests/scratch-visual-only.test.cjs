const test = require('node:test');
const assert = require('node:assert/strict');

test('Scratch illustré : pas de doublon en pseudo-code, explications et autres codes conservés', () => {
  const app = require('./helpers/student-source.cjs');
  assert.doesNotMatch(app, /Lire aussi le modèle en texte/);
  assert.match(app, /if \(block.visualScript\) \{\s*section.append\(createScratchVisual\(block.visualScript\)\);\s*\} else if \(block.code && !block.actionSteps\) section.append\(createCode\(block.code/);
  assert.match(app, /Explications et repères supplémentaires/);
  assert.match(app, /block.paragraphs.forEach\(text => details.append/);
});
