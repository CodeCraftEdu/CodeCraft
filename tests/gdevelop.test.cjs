const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const zlib = require('node:zlib');
const root = path.resolve(__dirname, '..'), context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'lesson-data.js'), 'utf8'), context);
vm.runInNewContext(fs.readFileSync(path.join(root, 'pedagogy.js'), 'utf8'), context);
const data = context.window.CODECRAFT_DATA;
const ids = ['gdevelop-projet', 'gdevelop-deplacement', 'gdevelop-objets', 'gdevelop-evenements'];

test('Étapes GDevelop : groupe disponible sans modules futurs et autres parcours inchangés', () => {
  const pathway = data.pathways['gdevelop-debutants'];
  assert.equal(pathway.stages.length, 1);
  const stage = pathway.stages[0];
  assert.equal(stage.title, 'Prendre les commandes');
  assert.deepEqual(Array.from(stage.moduleIds), ids);
  assert(stage.pause.includes('modification personnelle'));
  assert(pathway.nextStageLabel.includes('Explorer et ramasser — à venir'));
  for (const id of ['python-debutants', 'scratch-debutants', 'web-fondations', 'web-debutants', 'web-avances']) {
    assert.equal(data.pathways[id].stages, undefined);
  }
  assert.equal(data.modules['gdevelop-murs'], undefined);
});

test('Projet d’étape 1 : réinvestissement sans module ajouté ni validation automatique', () => {
  const module = data.modules['gdevelop-evenements'];
  const stage = data.pathways['gdevelop-debutants'].stages[0];
  const project = module.blocks.find(b => b.id === stage.projectBlockId);
  assert.equal(project.id, 'autonomie');
  assert(project.title.includes('Ma scène explorable'));
  assert.deepEqual(Array.from(project.items, task => task.id), ['gd03-transfert', 'gd03-ancienne']);
  const content = project.items.map(task => task.text).join(' ');
  for (const word of ['trois exemplaires', 'personnage pilotable', 'repos', 'relâchement', 'deux conditions', 'rouvre']) assert(content.includes(word), word);
  assert(content.includes('Aucun mur bloquant, ramassage, score ni victoire'));
  const criteria = module.blocks.find(b => b.id === 'bilan-etape');
  assert.equal(criteria.values.length, 5);
  assert(criteria.paragraphs.some(p => p.includes('ne valide pas automatiquement')));
  assert(module.teacherGuide.notes.includes('aides de manipulation et de raisonnement'));
  assert.equal(Object.values(data.modules).filter(item => item.domainId === 'jeux-video').length, 18);
});

test('Repère d’étape : position structurelle, entrée directe possible et aucun suivi muté', () => {
  const before = JSON.stringify(data);
  const locate = context.window.CodeCraftPedagogy.pathwayStage;
  const pathway = data.pathways['gdevelop-debutants'];
  for (const [index, id] of ids.entries()) {
    const position = locate(id, pathway);
    assert.equal(position.number, 1);
    assert.equal(position.position, index + 1);
    assert.equal(position.total, 4);
    assert.equal(position.isLast, index === 3);
    assert.equal(Object.hasOwn(position, 'completed'), false);
  }
  assert.equal(locate('python-thonny', pathway), null);
  assert.equal(locate('gdevelop-deplacement', data.pathways['python-debutants']), null);
  assert.equal(locate('gdevelop-deplacement', null), null);
  assert.equal(locate('python-thonny', data.pathways['python-debutants']), null);
  assert.equal(JSON.stringify(data), before);
});
test('GDevelop : quatre leçons réelles dans Jeu vidéo, Scratch conservé', () => {
  assert.deepEqual(Array.from(data.pathways['gdevelop-debutants'].moduleIds), ids);
  assert(data.domains['jeux-video'].pathwayIds.includes('scratch-debutants'));
  assert(data.domains['jeux-video'].pathwayIds.includes('gdevelop-debutants'));
  assert.equal(data.pathways['scratch-debutants'].moduleIds.length, 14);
  assert.equal(Object.values(data.modules).filter(item => item.domainId === 'jeux-video').length, 18);
  assert.equal(data.modules['gdevelop-projet'].prerequisiteSkills.length, 0);
  for (const [index, id] of ids.entries()) {
    const module = data.modules[id];
    assert.equal(module.domainId, 'jeux-video');
    assert.equal(module.theme, 'fondations');
    assert(module.masteryCriteria.length >= 3);
    assert.equal(module.blocks.filter(b => b.id === 'preparer').length, 1);
    for (const skill of [...module.skillIds, ...module.prerequisiteSkills.map(p => p.skillId)]) assert(data.skills[skill], skill);
    for (const block of module.blocks) {
      if (block.illustration) assert(fs.existsSync(path.join(root, block.illustration.src)));
      for (const resource of block.downloads || []) {
        assert(resource.path.startsWith('resources/gdevelop/'));
        assert(fs.statSync(path.join(root, resource.path)).size > 0);
      }
    }
    const guide = module.teacherGuide;
    assert(guide.discoverySpeech.length >= 3);
    assert(guide.questions.length >= 3);
    for (const error of guide.commonErrors) assert(error.helps.length >= 4);
    for (const ref of [guide.example.target, guide.accompaniedActivity, guide.independentActivity, ...module.consolidation, ...module.bonusActivities]) {
      assert(data.modules[ref.moduleId].blocks.some(b => b.id === ref.blockId));
    }
    assert.equal(module.nextSteps.length, index === ids.length - 1 ? 0 : 1);
    if (index < ids.length - 1) assert.equal(module.nextSteps[0].moduleId, ids[index + 1]);
    if (index > 0) assert.equal(module.showTool, false);
  }
});

test('GD04 : entrée après GD01, migration ciblée et identifiants initiaux conservés', () => {
  const module = data.modules['gdevelop-deplacement'];
  assert.deepEqual(Array.from(module.skillIds), ['gdevelop.movement']);
  assert.deepEqual(Array.from(module.prerequisiteSkills, p => p.skillId), ['gdevelop.workspace']);
  assert.equal(module.nextSteps[0].moduleId, 'gdevelop-objets');
  assert.equal(data.modules['gdevelop-projet'].nextSteps[0].moduleId, 'gdevelop-deplacement');
  assert.deepEqual(Array.from(data.modules['gdevelop-objets'].prerequisiteSkills, p => p.skillId), ['gdevelop.workspace']);
  const existingTasks = {
    'gdevelop-projet': ['gd01-visible', 'gd01-position', 'gd01-reouvrir', 'gd01-autonome', 'gd01-copie'],
    'gdevelop-objets': ['gd02-trois', 'gd02-image', 'gd02-position', 'gd02-carre', 'gd02-un-seul', 'gd02-retirer']
  };
  for (const [id, tasks] of Object.entries(existingTasks)) {
    assert.deepEqual(Array.from(data.modules[id].blocks.flatMap(b => b.items || []), t => t.id), tasks);
  }
  assert(data.modules['gdevelop-objets'].blocks[0].text.includes('un personnage immobile suffit'));
  assert(data.modules['gdevelop-evenements'].teacherGuide.notes.includes('distincte des flèches'));
  assert(!JSON.stringify(data.modules['gdevelop-projet'].teacherGuide).includes('non publié'));
});

test('GD04 revu : premier pilotage, comparaison, adaptation puis trajet personnel sans nouvelles règles', () => {
  const module = data.modules['gdevelop-deplacement'];
  const byId = id => module.blocks.find(b => b.id === id);
  assert(byId('exemple').paragraphs[1].includes('avant de jouer'));
  assert(byId('exemple').paragraphs[2].includes('Prévois'));
  assert(byId('exemple').paragraphs[3].includes('aucun événement de déplacement'));
  assert(byId('vitesse').paragraphs.some(p => p.includes('n’invente pas un résultat')));
  assert.equal(byId('guide').items.length, 2, 'Pas de répétition des quatre directions dans l’adaptation');
  assert(byId('guide').title.includes('Adaptation guidée'));
  assert(byId('autonomie').intro.includes('aucune cible à créer'));
  assert(byId('autonomie').items[0].text.includes('centre'));
  assert(byId('autonomie').items[0].text.includes('changement de direction'));
  assert(byId('autonomie').items[0].text.includes('reviens'));
  assert(byId('autonomie').items[1].text.includes('Explique') || byId('autonomie').items[1].text.includes('explique'));
  assert(byId('bonus').items[0].text.includes('copie complète'));
  assert.equal(module.blocks.filter(b => b.code || b.visualScript).length, 0);
  const ids = module.blocks.flatMap(b => (b.items || []).map(t => t.id));
  assert.equal(new Set(ids).size, ids.length);
});

test('GD04 : guide distingue preuves du site, moteur en attente et aides techniques', () => {
  const guide = data.modules['gdevelop-deplacement'].teacherGuide;
  assert(guide.preparation.some(p => p.includes('Recette GDevelop non effectuée')));
  assert(guide.preparation.some(p => p.includes('120/240 sont provisoires')));
  assert(guide.preparation.some(p => p.includes('même départ')));
  assert(guide.preparation.some(p => p.includes('ne sont pas des acquis exigés')));
  assert(guide.example.comments.some(p => p.includes('n’est pas un modèle partiel')));
  assert(guide.questions.some(q => q.answer.includes('aucune logique')));
  assert(guide.commonErrors.some(e => e.helps.some(h => h.includes('confinement ou caméra cachés'))));
});
test('Kit : PNG transparents aux dimensions prévues et archive identique aux fichiers', () => {
  for (const [name, size] of [['personnage', 64], ['jeton', 32], ['jeton-alternatif', 32]]) {
    const png = fs.readFileSync(path.join(root, 'resources/gdevelop/kit/images', name + '.png'));
    assert.equal(png.subarray(1, 4).toString(), 'PNG');
    assert.equal(png.readUInt32BE(16), size); assert.equal(png.readUInt32BE(20), size);
    assert.equal(png[25], 6, 'RGBA avec transparence');
  }
  const archive = fs.readFileSync(path.join(root, 'resources/gdevelop/kit-depart.zip'));
  let offset = 0, count = 0;
  while (archive.readUInt32LE(offset) === 0x04034b50) {
    const size = archive.readUInt32LE(offset + 18), nameLength = archive.readUInt16LE(offset + 26), extra = archive.readUInt16LE(offset + 28);
    const filename = archive.subarray(offset + 30, offset + 30 + nameLength).toString();
    assert(filename.startsWith('kit-codecraft-gdevelop/')); assert(!filename.includes('..'));
    const start = offset + 30 + nameLength + extra;
    const bytes = zlib.inflateRawSync(archive.subarray(start, start + size));
    assert.deepEqual(bytes, fs.readFileSync(path.join(root, 'resources/gdevelop/kit', filename.slice('kit-codecraft-gdevelop/'.length))));
    offset = start + size; count++;
  }
  assert.equal(count, 5);
});
test('GD03 : maintien opposé, pas de fausse boucle ni de lien futur', () => {
  const content = JSON.stringify(data.modules['gdevelop-evenements']);
  assert(content.includes('inverse cette condition'));
  assert(content.includes('dans les deux conditions'));
  assert(content.includes('sans appui'));
  assert(!content.includes('gdevelop-deplacement'));
  assert.equal(data.modules['gdevelop-evenements'].blocks.filter(b => b.code).length, 0);
});

test('Lot revu : entrée ciblée et contraste objet/instance avant les coordonnées', () => {
  const first = data.modules['gdevelop-projet'];
  const byId = (module, id) => module.blocks.find(block => block.id === id);
  assert.equal(byId(first, 'exemple').paragraphs.length, 3);
  assert(!byId(first, 'guide').items.some(task => task.text.includes('rouvre')),
    'La réouverture complète est concentrée dans le transfert, pas répétée dans le guidé');
  assert(byId(first, 'autonomie').items[0].text.includes('rouvre'));
  assert(byId(first, 'preparer').text.includes('petite pièce'));
  const objects = data.modules['gdevelop-objets'];
  const example = byId(objects, 'exemple').paragraphs.join(' ');
  assert(example.includes('déplaces un seul jeton'));
  assert(example.includes('dessin de l’objet Jeton'));
  assert(byId(objects, 'reperes').paragraphs.every(p => !p.includes('jeton-alternatif.png')),
    'Le contraste image commune est enseigné avant le travail X/Y');
  const transfer = byId(objects, 'autonomie').items.map(task => task.text).join(' ');
  assert(transfer.includes('choisis un arrangement'));
  assert(!transfer.includes('(300, 100)'));
  assert(objects.teacherGuide.preparation.some(p => p.includes('sans en faire un prérequis caché')));
});

test('GD03 revu : modèle complet, enquête restaurée, exemple partiel puis mission choisie', () => {
  const module = data.modules['gdevelop-evenements'];
  const example = module.blocks.find(b => b.id === 'exemple').paragraphs;
  assert(example[0].includes('deux règles'));
  assert(example[0].includes('prévois'));
  const mask = example.findIndex(p => p.includes('action Masquer Message'));
  const preview = example.findIndex(p => p.includes('Lance maintenant un aperçu'));
  assert(mask >= 0 && preview > mask, 'Les deux règles précèdent le premier essai clavier');
  const guide = module.blocks.find(b => b.id === 'guide').items;
  assert(guide[0].text.includes('copie'));
  assert(guide[0].text.includes('Restaure'));
  assert(guide[1].text.includes('action manquante'));
  const transfer = module.blocks.find(b => b.id === 'autonomie').items;
  assert(transfer[0].text.includes('Choisis un indice'));
  assert(transfer[0].text.includes('n’est pas utilisée ailleurs'));
  assert(transfer[1].text.includes('ancienne commande'));
  assert(!JSON.stringify(module.teacherGuide).includes('Essayer volontairement avec la seule première règle'));
  assert(module.teacherGuide.questions.some(q => q.answer.includes('pas de changement visible')));
});
