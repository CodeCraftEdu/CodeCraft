const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const context = { window: {}, URLSearchParams };
const root = path.join(__dirname, '..');
for (const name of ['lesson-data.js', 'pedagogy.js']) vm.runInNewContext(fs.readFileSync(path.join(root, name), 'utf8'), context);
const data = context.window.CODECRAFT_DATA, ui = context.window.CodeCraftPedagogy;
const id = 'web-collection-cartes', project = data.modules[id];
const block = name => ui.blocks(project.blocks).find(b => b.id === name);

test('collection : dernier projet Avancés, sans modification des autres parcours', () => {
  assert.equal(project.type, 'project');
  assert.equal(project.theme, 'avances');
  assert.deepEqual(Array.from(data.pathways['web-avances'].moduleIds), ['web-projet-cartes', 'html-parent-enfants', 'css-flexbox', id]);
  for (const name of ['web-fondations', 'web-debutants']) assert(!data.pathways[name].moduleIds.includes(id));
  assert.equal(project.nextSteps.length, 0);
  assert(ui.url({ moduleId: id }, 'web-avances').includes('parcours=web-avances'));
  assert.equal(data.modules['css-flexbox'].blocks.find(b => b.id === 'mission').title, 'Mise en pratique — Organiser une collection');
  assert(data.modules['css-flexbox'].blocks.find(b => b.id === 'mission').items.some(t => t.id === 'mission-wrap'));
});

test('collection : périmètre observable et transfert sans nouvelle recette', () => {
  assert.deepEqual(Array.from(project.skillIds), ['html.structure', 'css.selectors', 'css.flexbox']);
  assert.equal(project.masteryCriteria.length, 4);
  assert(block('preparer').text.includes('deux fichiers texte'));
  assert(block('projet').paragraphs.some(p => p.includes('quatre cartes sont déjà présentes')));
  assert(block('realisation').intro.includes('aucun modèle complet'));
  assert(block('verification').items.find(t => t.id === 'tester-largeurs').text.includes('Aucun nombre exact'));
  assert(block('verification').items.find(t => t.id === 'ajouter-carte').text.includes('sans lui créer une règle CSS individuelle'));
  assert(block('verification').items.find(t => t.id === 'allonger-texte').text.includes('Ne masque pas'));
  assert(block('transfert').intro.includes('copie'));
  assert(block('transfert').items.find(t => t.id === 'colonne-centree').text.includes('centre-les horizontalement'));
  assert.equal(block('bonus').type, 'details');
  assert(!ui.blocks(project.blocks).some(b => b.code || (b.items || []).some(t => t.syntax)));
});

test('collection : guide, références et identifiants résolus sans acquis automatique', () => {
  assert(project.prerequisitesInContent);
  for (const p of project.prerequisiteSkills) assert(data.skills[p.skillId]);
  const guide = project.teacherGuide;
  assert.equal(guide.questions.length, 6);
  assert.equal(guide.commonErrors.length, 3);
  for (const error of guide.commonErrors) assert.equal(error.helps.length, 4);
  assert(guide.notes.some(p => p.includes('suivi reste manuel')));
  assert(guide.notes.some(p => p.includes('responsive complet')));
  assert(guide.differentiation.some(p => p.includes('autonome, avec modèle ou avec aide')));
  for (const ref of [guide.example.target, guide.accompaniedActivity, guide.independentActivity, ...project.consolidation, ...project.bonusActivities]) assert(ui.target(ref), JSON.stringify(ref));
  const taskIds = ui.blocks(project.blocks).flatMap(b => (b.items || []).map(t => t.id)).filter(Boolean);
  assert.equal(taskIds.length, new Set(taskIds).size);
  for (const b of project.blocks.filter(b => b.moduleLink)) {
    assert(data.modules[b.moduleLink.moduleId]);
    assert(b.text.includes(b.moduleLink.text));
  }
});
