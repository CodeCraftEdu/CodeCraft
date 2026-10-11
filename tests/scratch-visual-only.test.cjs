const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

test('Scratch illustré : pas de doublon en pseudo-code, explications et autres codes conservés', () => {
  const app = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');
  assert.doesNotMatch(app, /Lire aussi le modèle en texte/);
  assert.match(app, /if \(block.visualScript\) \{\s*section.append\(createScratchVisual\(block.visualScript\)\);\s*\} else if \(block.code && !block.actionSteps\) section.append\(createCode\(block.code/);
  assert.match(app, /Explications et repères supplémentaires/);
  assert.match(app, /block.paragraphs.forEach\(text => details.append/);
});
