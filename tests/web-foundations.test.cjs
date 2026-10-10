const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const context = { window: {}, URLSearchParams };
for (const file of ['lesson-data.js', 'pedagogy.js']) {
  vm.runInNewContext(fs.readFileSync(path.join(root, file), 'utf8'), context);
}
const data = context.window.CODECRAFT_DATA, ui = context.window.CodeCraftPedagogy;
const ids = ['html-titres-paragraphes', 'html-listes', 'html-liens'];
const block = (id, name) => data.modules[id].blocks.find(b => b.id === name);

const reviewIds = ['html-mini-page-fondations', 'html-revision', 'web-projet-cartes'];

test('cohérence des transitions Web et conservation des essais', () => {
  assert.equal(block('css-classes-couleurs', 'reprise-css').moduleLink.moduleId, 'css-decouverte');
  assert(data.pathways['web-fondations'].moduleIds.includes('css-decouverte'));
  assert(!data.pathways['web-debutants'].moduleIds.includes('css-decouverte'));
  assert.deepEqual(Array.from(data.pathways['web-avances'].moduleIds), ['web-projet-cartes', 'html-parent-enfants', 'css-flexbox', 'web-collection-cartes']);
  assert.match(JSON.stringify(block('web-affiche-numerique', 'suite')), /Structure d’un document HTML/);
  assert.match(JSON.stringify(block('html-parent-enfants', 'codepen')), /garde ton projet précédent intact/);
  assert.match(JSON.stringify(block('css-flexbox', 'apparence')), /au moins trois cartes.*deux fichiers texte.*copie du projet/);
  assert.match(data.pathways['web-debutants'].objective, /mini-site local/);
  assert.match(JSON.stringify(block('html-mini-page', 'exigences')), /Deux sous-titres h2/);
});

test('consignes Web sans renvoi vers les anciens liens de pied de page', () => {
  for (const module of Object.values(data.modules).filter(m => m.domainId === 'web')) {
    const content = JSON.stringify(module.blocks);
    assert(!/reprises[^"\n]*(?:en bas|plus bas)|consolidation en bas|suites ci-dessous|liens restent accessibles|utilise sa reprise en bas/.test(content), module.title);
  }
});
test('Diagnostic Web retiré : catalogue sans liens morts et anciennes adresses vers le domaine', () => {
  assert.equal(data.modules['diagnostic-web'], undefined);
  assert.equal(data.domains.web.diagnosticModuleIds.length, 0);
  assert.equal(Object.values(data.modules).filter(m => m.domainId === 'web').length, 24);
  assert.equal(data.aliases.rattrapage, 'domaine/web');
  assert.equal(data.aliases['module/diagnostic-web'], 'domaine/web');
  assert(!JSON.stringify(data.pathways).includes('diagnostic-web'));
  assert(!JSON.stringify(data.modules).includes('diagnostic-web'));
});
test('réinvestissement Web : trois guides, critères et références sans validation automatique', () => {
  for (const id of reviewIds) {
    const m = data.modules[id], guide = m.teacherGuide;
    assert.equal(m.masteryCriteria.length, 4);
    assert(m.prerequisitesInContent);
    assert.equal(m.blocks.filter(b => b.id === 'preparer').length, 1);
    assert(block(id, 'preparer').text.includes('fichier'));
    assert(guide.questions.length >= 6);
    assert.equal(guide.commonErrors.length, 3);
    for (const error of guide.commonErrors) assert.equal(error.helps.length, 4);
    for (const ref of [guide.example.target, guide.accompaniedActivity, guide.independentActivity, ...m.consolidation]) assert(ui.target(ref), id + ': référence résolue');
    for (const p of m.prerequisiteSkills) assert(data.skills[p.skillId]);
    assert(guide.notes.includes('suivi reste manuel'));
    assert(guide.notes.includes('sans verdict automatique'));
    assert(guide.differentiation.some(p => p.includes('avec modèle ou avec aide')));
    const taskIds = ui.blocks(m.blocks).flatMap(b => (b.items || []).map(t => t.id));
    assert.equal(new Set(taskIds).size, taskIds.length);
  }
  assert.equal(Object.values(data.modules).filter(m => m.domainId === 'web' && !m.masteryCriteria?.length).length, 0);
});

test('mini-page : périmètre conservé, code et aperçu comparés, modification observée', () => {
  const m = data.modules[reviewIds[0]];
  assert.deepEqual(Array.from(m.skillIds), ['html.headings', 'html.text', 'html.lists']);
  assert.deepEqual(block(reviewIds[0], 'defi').items.map(t => t.id).join(','), 'titre-principal,sous-titre,deux-paragraphes,liste');
  assert(block(reviewIds[0], 'defi').intro.includes('sans recopier'));
  const checks = block(reviewIds[0], 'verification').items;
  for (const id of ['titres-visibles','paragraphes-presents','trois-elements','balises','modifier-expliquer']) assert(checks.some(t => t.id === id));
  assert(checks.find(t => t.id === 'balises').text.includes('même si l’aperçu paraît correct'));
  assert.equal(m.bonus, undefined);
  assert(block(reviewIds[0], 'bonus').title.includes('facultatif'));
  assert(!m.prerequisiteSkills.some(p => p.skillId.startsWith('css.')));
});

test('révision : hiérarchie, tests du lien et bonus réellement facultatifs', () => {
  const id = reviewIds[1];
  for (const name of ['consigne','revision-html-titres-paragraphes','revision-html-listes','revision-html-liens','approfondissement','pause']) assert(block(id, name));
  const headings = block(id, 'revision-html-titres-paragraphes').items[0];
  assert.equal((headings.syntax.match(/<h2>/g) || []).length, 2);
  assert(!headings.syntax.includes('<h3>'));
  assert(headings.text.includes('même importance'));
  assert(block(id, 'revision-html-liens').items[0].text.includes('teste son ouverture'));
  assert(block(id, 'pause').items.find(t => t.id === 'tester-lien').text.includes('Si le test est bloqué'));
  assert(block(id, 'approfondissement').intro.includes('aucun bonus'));
  assert(block(id, 'approfondissement').items.find(t => t.id === 'bonus-hierarchie').text.includes('vraie sous-partie'));
  assert(!JSON.stringify(data.modules[id]).includes('Point de validation'));
});

test('cartes : préparation distincte de maîtrise, une propriété testée à la fois et transfert', () => {
  const id = reviewIds[2], m = data.modules[id];
  assert.equal(m.prerequisiteSkills.length, 0);
  assert(!m.skillIds.includes('css.flexbox'));
  assert(block(id, 'projet').intro.includes('empilées'));
  assert(block(id, 'preparer').text.includes('deux fichiers texte'));
  const html = ui.blocks(m.blocks).find(b => b.id === 'base-html');
  const css = ui.blocks(m.blocks).find(b => b.id === 'base-css');
  assert.equal((html.code.match(/class="carte"/g) || []).length, 3);
  assert.equal((html.code.match(/class="cartes"/g) || []).length, 1);
  assert.equal((html.code.match(/<div\b/g) || []).length, (html.code.match(/<\/div>/g) || []).length);
  assert(!css.code.includes('display: flex'));
  assert(css.paragraphs.some(p => p.includes('écran tactile')));
  const tests = block(id, 'pause').items;
  assert(tests.find(t => t.id === 'tester-padding').text.includes('rétablis 20px'));
  assert(tests.find(t => t.id === 'tester-margin').text.includes('rétablis 10px'));
  assert(tests.find(t => t.id === 'adapter-carte').text.includes('Sans recopier toute la base'));
  assert.equal(m.teacherGuide.independentActivity.itemId, 'adapter-carte');
  assert(m.teacherGuide.example.comments.some(p => p.includes('pas évalués ici')));
  for (const task of block(id, 'verification').items) assert(!task.text.startsWith("J'ai"));
});

test('revue HTML : trois contenus partagés, critères observables et guides résolus', () => {
  assert.equal(Object.values(data.modules).filter(module => module.domainId !== 'robotique').length, 62);
  for (const id of ids) {
    const module = data.modules[id];
    assert(data.pathways['web-fondations'].moduleIds.includes(id));
    assert(data.pathways['web-debutants'].moduleIds.includes(id));
    assert.equal(module.masteryCriteria.length, 4);
    assert.equal(module.prerequisitesInContent, true);
    assert.equal(module.blocks.filter(b => b.id === 'preparer').length, 1);
    const guide = module.teacherGuide;
    assert(guide.questions.length >= 6);
    assert.equal(guide.commonErrors.length, 3);
    for (const error of guide.commonErrors) assert.equal(error.helps.length, 4);
    for (const ref of [guide.example.target, guide.accompaniedActivity, guide.independentActivity]) assert(ui.target(ref));
    const tasks = ui.blocks(module.blocks).flatMap(b => (b.items || []).map(t => t.id));
    assert.equal(new Set(tasks).size, tasks.length);
    assert(guide.notes.includes('suivi reste manuel'));
    assert(guide.differentiation.some(text => text.includes('avec modèle ou avec aide')));
    assert(guide.references.every(ref => ref.url.startsWith('https://html.spec.whatwg.org/')));
  }
  assert.deepEqual(Array.from(data.modules[ids[0]].prerequisiteSkills), []);
  for (const id of ids.slice(1)) {
    assert.deepEqual(Array.from(data.modules[id].prerequisiteSkills, p => p.skillId), ['html.text']);
  }
});

test('revue HTML : repères historiques conservés et balises des exemples équilibrées', () => {
  const historical = {
    'html-titres-paragraphes': ['guide', 'niveaux-titres', 'autonome'],
    'html-listes': ['cours', 'guide', 'defi'],
    'html-liens': ['cours', 'exercices']
  };
  for (const id of ids) {
    for (const name of historical[id]) assert(block(id, name));
    for (const example of ui.blocks(data.modules[id].blocks).filter(b => b.type === 'lesson' && b.code)) {
      const stack = [];
      for (const [, close, tag] of example.code.matchAll(/<(\/?)(h[1-6]|p|ul|li|a)(?:\s[^>]*)?>/g)) {
        if (close) assert.equal(stack.pop(), tag, id + '/' + example.id);
        else stack.push(tag);
      }
      assert.equal(stack.length, 0, id + '/' + example.id);
    }
  }
  const levels = block(ids[0], 'niveaux-titres');
  assert.equal((levels.code.match(/<h2>/g) || []).length, 2);
  assert(!levels.code.includes('<h3>'));
  assert(levels.paragraphs.some(p => p.includes('pas pour obtenir un texte plus grand')));
  assert(block(ids[0], 'autonome').items.find(t => t.id === 'sous-titres-autonomes').text.includes('deux titres h2'));
});

test('revue HTML : essais conservés, transfert et vérification du code explicites', () => {
  for (const id of ids) {
    assert(block(id, 'preparer').text.includes('fichier texte'));
    assert(block(id, 'preparer').text.includes('Aucun compte'));
  }
  const title = data.modules[ids[0]];
  assert(!title.bonus.includes('Efface'));
  assert(title.bonus.includes('sans regarder les exemples'));
  assert(block(ids[0], 'cours').paragraphs.some(p => p.includes('le navigateur peut réparer')));
  assert(block(ids[1], 'guide').intro.includes('sans effacer'));
  assert(block(ids[1], 'guide').items.find(t => t.id === 'quatrieme-li').text.includes('avant </ul>'));
  assert(block(ids[1], 'defi').intro.includes('Conserve la première liste'));
  assert(block(ids[1], 'defi').items.some(t => t.id === 'expliquer-liste'));
});

test('revue HTML : texte et destination séparés, liens testés et limites réseau distinguées', () => {
  const course = block(ids[2], 'cours'), tasks = block(ids[2], 'exercices');
  assert(course.paragraphs.some(p => p.includes('adresse complète')));
  assert(course.paragraphs.some(p => p.includes('pas forcément une erreur HTML')));
  assert(tasks.items.find(t => t.id === 'texte-lien').text.includes('la destination reste'));
  assert(tasks.items.find(t => t.id === 'adresse-lien').text.includes('vérifie l’adresse'));
  assert(block(ids[2], 'autonome').items.some(t => t.id === 'expliquer-lien'));
  const example = course.code.match(/href="([^"]+)"/)[1];
  assert.equal(new URL(example).protocol, 'https:');
  assert(data.modules[ids[2]].masteryCriteria.some(p => p.includes('blocage de l’aperçu ou du réseau')));
});
