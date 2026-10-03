const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const model = require('../teacher-model.js');
const root = path.join(__dirname, '..');
const context = { window: {}, URLSearchParams };
for (const file of ['lesson-data.js', 'pedagogy.js']) vm.runInNewContext(fs.readFileSync(path.join(root, file), 'utf8'), context);
const data = context.window.CODECRAFT_DATA, ui = context.window.CodeCraftPedagogy;

test('relations du catalogue : compétences, activités imbriquées et tâches résolues sans duplication', () => {
  function prerequisite(p) { assert(data.skills[p.skillId]); assert(p.expectation.trim()); }
  function reference(ref) {
    assert(ui.target(ref), JSON.stringify(ref));
    if (ref.itemId) assert(ref.blockId);
    (ref.prerequisiteSkills || []).forEach(prerequisite);
  }
  for (const module of Object.values(data.modules)) {
    const ids = ui.blocks(module.blocks).filter(b => b.id).map(b => b.id);
    assert.equal(new Set(ids).size, ids.length, module.title);
    (module.prerequisiteSkills || []).forEach(prerequisite);
    for (const key of ['consolidation', 'bonusActivities', 'nextSteps']) (module[key] || []).forEach(reference);
    if (!module.teacherGuide) continue;
    const guide = module.teacherGuide;
    [guide.example.target, guide.accompaniedActivity, guide.independentActivity].forEach(reference);
    for (const key of ['entryDiagnosis', 'preparation', 'discoverySpeech', 'questions', 'commonErrors', 'quickConductor', 'references']) assert(guide[key].length, key);
    assert(module.masteryCriteria.length);
  }
  assert(!data.modules['html-images'].prerequisiteSkills.some(p => p.skillId === 'html.links'));
  assert(data.modules['html-images'].bonusActivities.find(r => r.blockId === 'bonus-lien').prerequisiteSkills.some(p => p.skillId === 'html.links'));
  assert(!data.modules['html-parent-enfants'].prerequisiteSkills.some(p => p.skillId.startsWith('css.')));
});

test('adresses d’activités : contexte conservé seulement si compatible, anciennes routes inchangées', () => {
  const ref = { moduleId: 'html-images', blockId: 'depannage', itemId: 'source-incorrecte' };
  assert.equal(ui.url(ref, 'web-fondations'), '#module/html-images?parcours=web-fondations&activite=depannage&tache=source-incorrecte');
  assert.equal(ui.url({ moduleId: 'css-flexbox' }, 'web-fondations'), '#module/css-flexbox');
  assert.equal(ui.target({ moduleId: 'absent' }), null);
  assert.equal(ui.target({ moduleId: 'html-images', blockId: 'absent' }), null);
  assert(ui.target({ moduleId: 'html-images', blockId: 'squelette' }));
});

test('ressources CodePen : dessins embarqués identiques aux SVG du dépôt', () => {
  for (const r of data.modules['html-images'].resources) {
    assert(r.codepenSrc.startsWith('data:image/svg+xml,'));
    const svg = fs.readFileSync(path.join(root, r.path), 'utf8').trim();
    assert.equal(decodeURIComponent(r.codepenSrc.split(',')[1]), svg);
    assert(!/<script|onload=|https?:\/\/(?!www.w3.org)/i.test(svg));
  }
});

test('lots pédagogiques : modules uniques, noyau HTML conservé et extensions facultatives', () => {
  assert.equal(Object.keys(data.modules).length, 24);
  assert.equal(Object.keys(data.skills).length, 19);
  assert.equal(Object.values(data.modules).filter(m => m.teacherGuide).length, 17);
  assert.equal(data.modules['html-mini-page'].type, 'challenge');
  assert.equal(data.modules['web-affiche-numerique'].type, 'project');
  assert.equal(JSON.stringify(data.modules['css-decouverte'].skillIds), '["css.colors"]');
  assert.equal(JSON.stringify(data.pathways['web-debutants'].moduleIds), '["html-titres-paragraphes","html-listes","html-liens","html-revision","html-images","css-classes-couleurs","html-mini-page","html-document","html-fichiers-chemins","css-feuille-style","html-parent-enfants","html-zones","css-textes-lisibles","css-boites-espacements","css-dimensions-images","web-carte-personnelle","html-multipage","web-mini-site"]');
  assert(data.pathways['web-fondations'].moduleIds.includes('html-mini-page'));
  assert(data.pathways['web-fondations'].moduleIds.includes('web-affiche-numerique'));
  const requirements = data.modules['html-mini-page'].blocks.find(b => b.id === 'exigences').items;
  assert.equal(JSON.stringify(requirements.map(i => i.text)), JSON.stringify(['Un titre principal h1.', 'Plusieurs niveaux de titres.', 'Au moins 3 paragraphes.', 'Une liste.', '2 liens.', '2 images.']));
  const discoveryLink = data.modules['css-classes-couleurs'].blocks.find(b => b.id === 'reprise-css').moduleLink;
  assert.equal(discoveryLink.moduleId, 'css-decouverte');
  assert(data.modules['css-decouverte'].nextSteps.some(ref => ref.moduleId === 'css-classes-couleurs'));
  assert(data.modules['html-mini-page'].nextSteps.some(ref => ref.moduleId === 'web-affiche-numerique' && ref.prerequisiteSkills.length));
  for (const id of ['html-mini-page','css-decouverte','css-classes-couleurs','web-affiche-numerique']) {
    const m = data.modules[id];
    for (const key of ['prerequisiteSkills','masteryCriteria','consolidation','bonusActivities','nextSteps']) assert(m[key].length, id + ': ' + key);
    for (const ref of m.nextSteps) assert(ref.prerequisiteSkills?.length, id + ': prérequis de suite explicites');
    const ids = ui.blocks(m.blocks).flatMap(b => (b.items || []).map(i => i.id));
    assert.equal(new Set(ids).size, ids.length, id + ': tâches uniques y compris blocs repliés');
    assert(m.teacherGuide.notes.some(text => /autonome|autonomie/.test(text)));
    for (const b of ui.blocks(m.blocks)) if (b.moduleLink) {
      assert(data.modules[b.moduleLink.moduleId]);
      assert(b.text.includes(b.moduleLink.text));
    }
  }
});

test('lot fichiers : prérequis, guides et reprises résolus sans imposer les bonus', () => {
  const entries = [['html-document','html.document'],['html-fichiers-chemins','html.paths'],['css-feuille-style','css.stylesheets']];
  for (const [id, skillId] of entries) {
    const m = data.modules[id];
    assert.equal(JSON.stringify(m.skillIds), JSON.stringify([skillId]));
    for (const key of ['prerequisiteSkills','masteryCriteria','consolidation','bonusActivities','nextSteps']) assert(m[key].length);
    const ids = ui.blocks(m.blocks).flatMap(b => (b.items || []).map(i => i.id));
    assert.equal(new Set(ids).size, ids.length);
    assert(m.teacherGuide.questions.length >= 5);
    assert(m.teacherGuide.notes.some(text=>/autonome|autonomie/.test(text)));
    for (const ref of m.nextSteps) assert(ref.prerequisiteSkills?.length);
    for (const b of m.blocks) if (b.moduleLink) {
      assert(data.modules[b.moduleLink.moduleId]);
      assert(b.text.includes(b.moduleLink.text));
    }
    assert(!data.pathways['web-fondations'].moduleIds.includes(id));
    assert(!data.pathways['web-avances'].moduleIds.includes(id));
  }
  assert(data.modules['css-feuille-style'].prerequisiteSkills.some(p=>p.skillId==='css.colors'));
  assert(data.modules['css-feuille-style'].consolidation.some(r=>r.moduleId==='css-decouverte'));
  const order = data.pathways['web-debutants'].moduleIds;
  assert.equal(order[order.indexOf('html-mini-page') + 1], 'html-document');
  assert.equal(data.skills['html.structure'].title, 'Identifier la structure HTML, les parents et les enfants');
  assert.equal(data.skills['css.selectors'].title, 'Créer et utiliser des classes CSS');
});

test('nouvelles compétences : ancien fichier intact, À voir implicite et suivi uniquement manuel', () => {
  const doc = model.create('Fictif');
  model.addClass(doc, { id:'c', name:'Classe fictive' });
  model.addStudent(doc, { id:'s', name:'Fictif', classId:'c' });
  model.updateProgress(doc,'s','html.structure',{status:'acquired',note:'Observation fictive'});
  const original = model.serialize(doc);
  const reopened = model.parse(original,data).document;
  assert.equal(model.serialize(reopened),original);
  for (const id of ['html.document','html.paths','css.stylesheets','html.landmarks','css.fonts']) assert.equal(model.getProgress(reopened,'s',id).status,'not-started');
  assert.equal(reopened.progress.length,1);
  model.updateProgress(reopened,'s','css.stylesheets',{status:'in-progress',note:'Test fictif'});
  const saved = model.parse(model.serialize(reopened),data).document;
  assert.equal(model.getProgress(saved,'s','css.stylesheets').status,'in-progress');
  assert.equal(model.getProgress(saved,'s','html.structure').status,'acquired');
  assert.equal(saved.frameworkProgress.length,0);
});

test('lot zones et espacements : partage, prérequis et guides sans cours futurs factices', () => {
  const order = data.pathways['web-debutants'].moduleIds;
  assert.equal(order[order.indexOf('css-feuille-style') + 1], 'html-parent-enfants');
  assert.equal(ui.url({moduleId:'html-parent-enfants'},'web-debutants'),'#module/html-parent-enfants?parcours=web-debutants');
  assert.equal(ui.url({moduleId:'html-parent-enfants'},'web-avances'),'#module/html-parent-enfants?parcours=web-avances');
  assert.equal(Object.values(data.modules).filter(m=>m.title==='Parent et enfants').length,1);
  for (const id of ['html-zones','css-textes-lisibles','css-boites-espacements']) {
    const m = data.modules[id];
    assert.equal(m.type,'lesson');
    assert(!data.pathways['web-fondations'].moduleIds.includes(id));
    assert(!data.pathways['web-avances'].moduleIds.includes(id));
    for (const key of ['prerequisiteSkills','masteryCriteria','consolidation','bonusActivities','nextSteps']) assert(m[key].length);
    for (const ref of m.nextSteps) assert(ref.prerequisiteSkills.length);
    const tasks = ui.blocks(m.blocks).flatMap(b=>(b.items || []).map(i=>i.id));
    assert.equal(new Set(tasks).size,tasks.length);
    assert(m.teacherGuide.questions.length >= 6);
    assert(m.teacherGuide.notes.some(t=>/autonome, avec modèle ou avec aide/.test(t)));
    for (const b of ui.blocks(m.blocks)) if (b.moduleLink) {
      assert(data.modules[b.moduleLink.moduleId]);
      assert(b.text.includes(b.moduleLink.text));
    }
  }
  assert(!data.modules['html-zones'].prerequisiteSkills.some(p=>p.skillId.startsWith('css.')));
  assert(data.modules['html-zones'].bonusActivities[0].prerequisiteSkills.some(p=>p.skillId==='html.links'));
  assert(data.modules['css-boites-espacements'].prerequisiteSkills.some(p=>p.skillId==='html.structure'));
  assert(data.modules['css-boites-espacements'].teacherGuide.notes.some(t=>t.includes('couverture partielle')));
  assert.equal(data.skills['css.borders'].title,'Utiliser les bordures et border-radius');
  assert(data.modules['html-parent-enfants'].nextSteps.some(r=>r.moduleId==='html-zones'));
  assert(data.modules['html-parent-enfants'].nextSteps.some(r=>r.moduleId==='css-flexbox'));
  assert.equal(Object.values(data.modules).filter(m=>m.title==='Dimensions et images dans une carte').length,1);
});

test('nouveaux repères zones/texte : suivi manuel et aucune extension des acquis anciens', () => {
  const doc = model.create('Fictif');
  model.addClass(doc,{id:'c',name:'Fictive'});
  model.addStudent(doc,{id:'s',name:'Fictif',classId:'c'});
  model.updateProgress(doc,'s','html.structure',{status:'acquired'});
  model.updateProgress(doc,'s','css.colors',{status:'acquired'});
  const original = model.serialize(doc);
  const copy = model.parse(original,data).document;
  assert.equal(model.serialize(copy),original);
  for (const skill of ['html.landmarks','css.fonts','css.spacing','css.borders']) assert.equal(model.getProgress(copy,'s',skill).status,'not-started');
  model.updateProgress(copy,'s','css.fonts',{status:'in-progress',note:'Observation fictive avec aide'});
  const saved = model.parse(model.serialize(copy),data).document;
  assert.equal(model.getProgress(saved,'s','css.fonts').status,'in-progress');
  assert.equal(model.getProgress(saved,'s','html.landmarks').status,'not-started');
  assert.equal(saved.frameworkProgress.length,0);
});

test('lot carte : ressources uniques, prérequis et jalon sans nouvelle notion obligatoire', () => {
  const course=data.modules['css-dimensions-images'], project=data.modules['web-carte-personnelle'];
  assert.equal(course.type,'lesson'); assert.equal(project.type,'project');
  const order=data.pathways['web-debutants'].moduleIds;
  assert.equal(order[order.indexOf('css-boites-espacements')+1],'css-dimensions-images');
  assert.equal(order[order.indexOf('css-dimensions-images')+1],'web-carte-personnelle');
  assert(data.modules['css-flexbox'].consolidation.some(r=>r.moduleId==='css-dimensions-images'));
  assert(course.prerequisiteSkills.some(p=>p.skillId==='css.spacing'));
  assert(course.prerequisiteSkills.some(p=>p.skillId==='html.images'));
  assert(project.prerequisiteSkills.some(p=>p.skillId==='css.sizing'));
  assert(project.prerequisiteSkills.some(p=>p.skillId==='css.fonts'));
  assert(!project.prerequisiteSkills.some(p=>p.skillId==='css.flexbox'));
  assert(!project.skillIds.includes('css.borders'), 'bordure facultative, aucun arrondi réputé acquis');
  assert(!project.blocks.some(b=>b.code), 'pas de solution complète à copier dans le projet');
  for(const id of ['css-dimensions-images','web-carte-personnelle']) {
    const m=data.modules[id];
    assert(!data.pathways['web-fondations'].moduleIds.includes(id));
    assert(!data.pathways['web-avances'].moduleIds.includes(id));
    for(const k of ['prerequisiteSkills','masteryCriteria','consolidation','bonusActivities','nextSteps']) assert(m[k].length);
    for(const r of m.nextSteps) assert(r.prerequisiteSkills.length);
    assert(m.teacherGuide.questions.length>=8);
    assert(m.teacherGuide.notes.some(t=>t.includes('autonome, avec modèle ou avec aide')));
    assert(!m.resources, 'les sources appartiennent uniquement au module Images');
    const tasks=ui.blocks(m.blocks).flatMap(b=>(b.items||[]).map(t=>t.id));
    assert.equal(new Set(tasks).size,tasks.length);
    for(const b of ui.blocks(m.blocks)) if(b.moduleLink) {
      assert(data.modules[b.moduleLink.moduleId]);
      assert(b.text.includes(b.moduleLink.text));
    }
  }
  let sharedResources=0;
  for(const m of Object.values(data.modules)) for(const b of ui.blocks(m.blocks)) if(b.type==='reference') {
    const source=ui.target({moduleId:b.moduleId,blockId:b.blockId});
    assert(source);
    assert.equal(b.moduleId,'html-images');
    assert.equal(source.block.type,'resource', 'aucun exercice de révision recouplé');
    assert(source.module.resources.some(r=>r.id===source.block.resourceId));
    sharedResources++;
  }
  assert.equal(sharedResources,4);
  assert.equal(Object.values(data.modules).filter(m=>m.title==='Mon mini-site').length,1);
});

test('dimensions : aucun report automatique des acquis de boîtes ou images', () => {
  const doc=model.create('Fictif');
  model.addClass(doc,{id:'c',name:'Fictive'});
  model.addStudent(doc,{id:'s',name:'Fictif',classId:'c'});
  for(const skill of ['css.spacing','html.images']) model.updateProgress(doc,'s',skill,{status:'acquired'});
  const raw=model.serialize(doc), copy=model.parse(raw,data).document;
  assert.equal(model.serialize(copy),raw);
  assert.equal(model.getProgress(copy,'s','css.sizing').status,'not-started');
  model.updateProgress(copy,'s','css.sizing',{status:'in-progress',note:'Comparaison avec aide'});
  const saved=model.parse(model.serialize(copy),data).document;
  assert.equal(model.getProgress(saved,'s','css.sizing').status,'in-progress');
  assert.equal(saved.frameworkProgress.length,0);
  assert.equal(data.skills['css.spacing'].title,'Utiliser margin et padding');
});

test('catalogue enrichi compatible avec suivi et historiques privés sans calcul d’acquisition', () => {
  const doc = model.create('fictif');
  model.addClass(doc, { id: 'classe', name: 'Classe fictive' });
  model.addStudent(doc, { id: 'eleve', name: 'Fictif', classId: 'classe' });
  model.setMembershipPathway(doc, 'classe', 'eleve', 'web-avances', data);
  model.updateProgress(doc, 'eleve', 'css.flexbox', { status: 'in-progress', note: 'Observation fictive' });
  const before = JSON.stringify(doc);
  model.validate(doc, data);
  assert.equal(JSON.stringify(doc), before);
  assert.equal(JSON.stringify(model.parse(model.serialize(doc), data).document), before);
  assert.equal(model.getProgress(doc, 'eleve', 'html.images').status, 'not-started');
  assert.equal(model.getProgress(doc, 'eleve', 'css.flexbox').status, 'in-progress');
});

test('lot multipage : cours local, projet partagé et prérequis sans Flexbox obligatoire', () => {
  const course=data.modules['html-multipage'], project=data.modules['web-mini-site'];
  assert.equal(course.type,'lesson'); assert.equal(project.type,'project');
  assert.equal(JSON.stringify(course.skillIds),'["html.navigation"]');
  assert(!course.prerequisiteSkills.some(p=>p.skillId.startsWith('css.')));
  assert(!project.prerequisiteSkills.some(p=>p.skillId==='css.flexbox'));
  for(const skill of ['html.navigation','html.document','html.paths','css.stylesheets','css.fonts','css.sizing']) assert(project.prerequisiteSkills.some(p=>p.skillId===skill));
  assert.equal(JSON.stringify(data.pathways['web-debutants'].moduleIds.slice(-3)),'["web-carte-personnelle","html-multipage","web-mini-site"]');
  assert(data.modules['web-carte-personnelle'].nextSteps.some(r=>r.moduleId==='html-multipage'));
  for(const id of ['html-multipage','web-mini-site']) {
    const m=data.modules[id];
    assert.equal(Object.values(data.modules).filter(other=>other.title===m.title).length,1);
    assert(!data.pathways['web-fondations'].moduleIds.includes(id));
    assert(!data.pathways['web-avances'].moduleIds.includes(id));
    for(const key of ['prerequisiteSkills','masteryCriteria','consolidation','bonusActivities','nextSteps']) assert(m[key].length);
    for(const r of m.nextSteps) assert(r.prerequisiteSkills.length);
    const tasks=ui.blocks(m.blocks).flatMap(b=>(b.items||[]).map(t=>t.id));
    assert.equal(new Set(tasks).size,tasks.length);
    assert(m.teacherGuide.questions.length>=8);
    assert(m.teacherGuide.notes.some(t=>t.includes('autonome, avec modèle ou avec aide')));
    for(const b of ui.blocks(m.blocks)) if(b.moduleLink) {
      assert(data.modules[b.moduleLink.moduleId]); assert(b.text.includes(b.moduleLink.text));
    }
    assert(!m.resources);
  }
  assert(course.blocks.find(b=>b.id==='accueil').code.includes('href="decouvertes.html"'));
  assert(course.blocks.find(b=>b.id==='seconde').code.includes('href="index.html"'));
  assert(project.blocks.find(b=>b.id==='liaison').code.includes('href="style.css"'));
  assert(!project.blocks.some(b=>b.code?.includes('<!doctype')), 'pas de solution intégrale du projet');
  assert.equal(project.blocks.find(b=>b.type==='reference').moduleId,'html-images');
});

test('navigation multipage : les acquis liens et chemins ne sont jamais reportés automatiquement', () => {
  const doc=model.create('Fictif');
  model.addClass(doc,{id:'c',name:'Fictive'});
  model.addStudent(doc,{id:'s',name:'Fictif',classId:'c'});
  for(const skill of ['html.links','html.paths']) model.updateProgress(doc,'s',skill,{status:'acquired'});
  const raw=model.serialize(doc), copy=model.parse(raw,data).document;
  assert.equal(model.serialize(copy),raw);
  assert.equal(model.getProgress(copy,'s','html.navigation').status,'not-started');
  model.updateProgress(copy,'s','html.navigation',{status:'in-progress',note:'Retour expliqué avec aide'});
  const saved=model.parse(model.serialize(copy),data).document;
  assert.equal(model.getProgress(saved,'s','html.navigation').status,'in-progress');
  assert.equal(saved.frameworkProgress.length,0);
});
