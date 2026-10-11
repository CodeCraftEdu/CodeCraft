const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'generated/catalog.js'), 'utf8'), context);
const data = context.window.CODECRAFT_DATA;
const blocks = list => list.flatMap(b => [b, ...blocks(b.blocks || [])]);
const studentTexts = Object.values(data.modules).flatMap(m => blocks(m.blocks)).flatMap(b =>
  [b.text, b.intro, ...(b.paragraphs || []), b.demonstration?.note].filter(Boolean));

test('Textes élèves : précautions génériques retirées, règle éditoriale persistante', () => {
  for (const text of studentTexts) {
    assert.doesNotMatch(text, /Ne colle pas le document complet de ce cours|Aucun serveur|Une aide pour cliquer, sélectionner ou enregistrer ne remplace|Il ne sauvegarde ni ne valide ton travail/);
  }
  const guide = fs.readFileSync(path.join(root, 'docs/regles-editoriales.md'), 'utf8');
  assert.match(guide, /tous les modules et parcours/);
  assert.match(guide, /sécurité, de confidentialité et de sauvegarde/);
  assert.match(fs.readFileSync(path.join(root, 'AGENTS.md'), 'utf8'), /docs\/regles-editoriales.md/);
});

test('Introduction document HTML : chemin principal court et action explicite', () => {
  const intro = data.modules['html-document'].blocks.find(b => b.id === 'depart');
  const text = intro.paragraphs.join(' ');
  assert.match(text, /fichier HTML complet/);
  assert.match(text, /éditeur de texte/);
  assert.match(text, /enregistre le fichier/);
  assert.doesNotMatch(text, /Si tu ne peux|demande une aide|Ne colle|Aucun serveur/);
  assert(text.length < 750);
});

test('Allègement transversal : sauvegardes, confidentialité et précautions de circuit conservées', () => {
  for (const id of ['html-titres-paragraphes', 'html-listes', 'html-liens']) {
    assert.match(data.modules[id].blocks.find(b => b.id === 'preparer').text, /fichier texte.*fermer l’onglet/);
  }
  const robot = JSON.stringify(data.modules['robotique-lumiere'].blocks);
  assert.match(robot, /résistance/);
  assert.match(robot, /simulation arrêtée|Arrête la simulation/);
  const collection = JSON.stringify(data.modules['web-collection-cartes'].blocks);
  assert.match(collection, /N’utilise pas de renseignements personnels/);
  for (const id of ['python-thonny', 'scratch-projet-personnel', 'gdevelop-projet', 'robotique-trajet']) {
    assert.doesNotMatch(JSON.stringify(data.modules[id].blocks), /Aucun compte|aucun compte ni publication/);
    assert(data.modules[id].teacherGuide);
  }
});
