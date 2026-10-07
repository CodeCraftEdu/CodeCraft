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

test('fin de module : encarts génériques supprimés, consignes spécifiques conservées', () => {
  const source = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
  const start = source.indexOf('  function support(item) {');
  const end = source.indexOf('  function renderModule(', start);
  const fake = (tag, className, text) => ({ tag, className, text, children: [], append(...children) { this.children.push(...children); } });
  const render = vm.runInNewContext('(' + source.slice(start, end).trim() + ')', { element: fake });
  const texts = node => node ? [node.text, ...node.children.flatMap(texts)].filter(Boolean) : [];
  for (const item of Object.values(data.modules)) {
    const result = render(item);
    if (!item.bonus && !item.stuck) assert.equal(result, null);
    if (item.bonus) assert(texts(result).includes(item.bonus));
    assert(!texts(result).includes('Je suis bloqué'));
    if (item.stuck) {
      for (const step of item.stuck.steps) assert(texts(result).includes(step));
      assert(texts(result).includes('J’ai fini'));
    } else if (item.bonus) {
      assert(texts(result).includes('Vérification et suite'));
    }
  }
  assert(data.modules['html-titres-paragraphes'].bonus.includes('sans regarder les exemples'));
  assert.equal(data.modules['diagnostic-web'], undefined);
  assert(!source.includes('data.shared'));
  assert.equal(data.shared, undefined);
});

test('projets Scratch : liens mutualisés, facultatifs et démonstration réservée au guide', () => {
  const project = data.scratchProjects['chat-cible'];
  const saved = { ...project };
  const fake = tag => ({ tag, children: [], classList: { add() {} }, append(...items) { this.children.push(...items); } });
  context.document = { createElement: fake };
  const anchors = node => node ? [node, ...node.children.flatMap(anchors)].filter(n => n.tag === 'a') : [];
  try {
    project.starterUrl = null;
    project.demoUrl = null;
    for (const id of ['scratch-pilotage', 'scratch-reactions', 'scratch-variables']) {
      assert.equal(data.modules[id].scratchProjectId, 'chat-cible');
      assert.equal(ui.scratchProject(data.modules[id]), null);
      assert.equal(anchors(ui.scratchProject(data.modules[id], true)).length, 0);
    }
    project.starterUrl = 'https://scratch.mit.edu/projects/123456/';
    project.demoUrl = 'https://scratch.mit.edu/projects/654321/';
    const student = anchors(ui.scratchProject(data.modules['scratch-reactions']));
    assert.equal(student.length, 1);
    assert.equal(student[0].href, project.starterUrl);
    assert.equal(student[0].target, '_blank');
    assert.equal(student[0].rel, 'noopener noreferrer');
    assert.equal(anchors(ui.scratchProject(data.modules['scratch-reactions'], true)).length, 2);
    assert.equal(ui.scratchProject(data.modules['scratch-variables']), null);
    assert.equal(anchors(ui.scratchProject(data.modules['scratch-variables'], true)).length, 1);
    project.starterUrl = 'javascript:alert(1)';
    assert.equal(ui.scratchProject(data.modules['scratch-reactions']), null);
    project.starterUrl = 'https://example.com/projects/123456/';
    assert.equal(ui.scratchProject(data.modules['scratch-reactions']), null);
    assert.equal(ui.scratchProject(data.modules['html-images']), null);
  } finally {
    Object.assign(project, saved);
    delete context.document;
  }
});

test('inventaire Scratch partagé : démonstrations distinctes des bases élève', () => {
  const projects = data.scratchProjects;
  assert.equal(projects['chat-cible'].demoUrl, 'https://scratch.mit.edu/projects/1388025424/');
  assert.equal(projects.labyrinthe.demoUrl, 'https://scratch.mit.edu/projects/1388025497/');
  assert.equal(projects['carte-animee'].demoUrl, 'https://scratch.mit.edu/projects/1388025602/');
  assert.equal(projects['chat-cible'].starterUrl, 'https://scratch.mit.edu/projects/1388027652/');
  assert.equal(projects.labyrinthe.starterUrl, 'https://scratch.mit.edu/projects/1388027832/');
  assert.equal(projects['carte-animee'].starterUrl, 'https://scratch.mit.edu/projects/1388027889/');
  const preparation = data.modules['scratch-reactions'].blocks.find(block => block.id === 'preparer');
  assert(preparation.paragraphs.some(text => text.includes('n’ajoute pas de deuxième cible')));
});

test('lots Scratch : quatorze contenus réels, prérequis explicites et aucun acquis automatique', () => {
  assert.deepEqual(Array.from(data.pathways['scratch-debutants'].moduleIds), ['scratch-decouverte', 'scratch-actions', 'scratch-pilotage', 'scratch-boucles', 'scratch-reactions', 'scratch-variables', 'scratch-fin-partie', 'scratch-mini-jeu', 'scratch-coordination', 'scratch-blocs-personnalises', 'scratch-clones', 'scratch-temps-difficulte', 'scratch-debogage', 'scratch-projet-personnel']);
  assert.equal(data.pathways['scratch-debutants'].domainId, 'jeux-video');
  assert.equal(Object.values(data.modules).filter(m => m.domainId === 'jeux-video').length, 14);
  assert.equal(data.modules['scratch-decouverte'].prerequisiteSkills.length, 0);
  for (const id of data.pathways['scratch-debutants'].moduleIds) {
    const m = data.modules[id];
    assert.equal(m.tool.label, 'Ouvrir Scratch');
    assert.equal(m.tool.url, 'https://scratch.mit.edu/projects/editor/');
    assert(m.masteryCriteria.length >= 3);
    assert(m.teacherGuide.questions.length >= 3);
    assert(m.teacherGuide.commonErrors.every(e => e.helps.length >= 4));
    assert(ui.target({moduleId: id, blockId: 'autonomie'}));
    assert(!/KidnKod|Startup|Lyna|Imran|04\/10|Godot/.test(JSON.stringify(m)));
  }
  const document = model.create('scratch-test');
  const before = JSON.stringify(document);
  for (const skillId of Object.keys(data.skills).filter(id => id.startsWith('scratch.'))) {
    assert.equal(model.getProgress(document, 'missing-student', skillId).status, 'not-started');
  }
  assert.equal(JSON.stringify(document), before);
});

test('lot 1 Scratch : préserver les essais et isoler les activités indépendantes', () => {
  const block = (id, activity) => data.modules[id].blocks.find(b => b.id === activity);
  const actions = data.modules['scratch-actions'];
  const pilotage = data.modules['scratch-pilotage'];
  const loops = data.modules['scratch-boucles'];
  assert(block('scratch-actions', 'reprise').text.includes('Fichier → Nouveau'));
  assert(block('scratch-actions', 'autonomie').intro.includes('Sauvegarde'));
  assert(block('scratch-actions', 'autonomie').intro.includes('Fichier → Nouveau'));
  assert(block('scratch-actions', 'exemple').paragraphs[0].includes('Reste dans ce projet'));
  const order = block('scratch-actions', 'guide').items.find(i => i.id === 'ordre');
  assert(order.hint.includes('Détache d’abord la suite'));
  assert(order.hint.includes('drapeau → déplacement → premier message → pause → second déplacement → dernier message'));
  assert(actions.teacherGuide.example.comments.some(c => c.includes('insérer le message')));
  assert(actions.teacherGuide.questions.some(q => q.question.startsWith('Quels blocs font attendre')));
  assert(!JSON.stringify(actions).includes('Retire ton ancienne pile'));
  assert(!JSON.stringify(actions.teacherGuide).includes('Détacher une ancienne pile'));
  assert(block('scratch-pilotage', 'reprise').text.includes('Fichier → Nouveau'));
  assert(pilotage.teacherGuide.preparation.some(p => p.includes('Garder ensuite ce projet')));
  assert.equal(block('scratch-pilotage', 'exemple').visualScript.stacks.length, 4);
  assert(block('scratch-boucles', 'continue').shortSteps[0].includes('Fichier → Nouveau'));
  assert(block('scratch-boucles', 'autonomie').intro.includes('Fichier → Nouveau'));
  assert(loops.teacherGuide.example.comments.some(c => c.includes('quatre pauses de 0.3')));
  assert(loops.teacherGuide.quickConductor.some(c => c.includes('quatre puis deux tours')));
  assert(!JSON.stringify(loops).includes('retire les autres piles'));
});

test('lot 2 revu : base préservée, contact vertical, blocs nommés et règles isolées', () => {
  const block = (id, activity) => data.modules[id].blocks.find(b => b.id === activity);
  const reactions = data.modules['scratch-reactions'];
  const variables = data.modules['scratch-variables'];
  const ending = data.modules['scratch-fin-partie'];
  const project = data.modules['scratch-mini-jeu'];
  assert(block('scratch-reactions', 'preparer').paragraphs[0].startsWith('Sauvegarde ton projet actuel'));
  assert(!JSON.stringify(reactions.teacherGuide).includes('Retirer les anciennes commandes'));
  const vertical = block('scratch-reactions', 'bonus').items.find(i => i.id === 'nouvelle-cible');
  assert(vertical.text.includes('Taille sous la scène à 100'));
  assert(vertical.text.includes('y = 120'));
  assert(vertical.text.includes('vérifie l’absence de contact'));
  assert(vertical.hint.includes('dépend des dessins'));
  assert(reactions.teacherGuide.example.comments.some(c => c.includes('suspend cette pile')));
  assert(variables.scratchProjectContinuation);
  assert(ending.scratchProjectContinuation);
  assert(project.scratchProjectContinuation);
  assert(block('scratch-variables', 'preparer').paragraphs[0].includes('Reviens ensuite dans Compter et mémoriser'));
  assert(block('scratch-variables', 'preparer').paragraphs[0].includes('sans créer un projet vide'));
  assert(variables.teacherGuide.example.comments.some(c => c.includes('deuxième contact → 2')));
  assert(!JSON.stringify(ending).includes('position x'));
  assert.equal(block('scratch-fin-partie', 'exemple').visualScript.blocks[1].parts[1].condition[0].value, 'abscisse x');
  assert(block('scratch-fin-partie', 'comparaisons').paragraphs.some(p => p.includes('position horizontale')));
  assert(block('scratch-mini-jeu', 'exemple').paragraphs.some(p => p.includes('3, 4 ou 5')));
  const rule = block('scratch-mini-jeu', 'autonomie').items.find(i => i.id === 'regles').text;
  assert(rule.includes('change seulement ce seuil et teste une victoire. Ensuite'));
  assert(rule.includes('modifie seulement la limite'));
});

test('projet personnel Scratch : choix limité, base réutilisée et aucune extension obligatoire', () => {
  const m = data.modules['scratch-projet-personnel'];
  assert.equal(m.type, 'project');
  assert.equal(m.scratchProjectId, 'chat-cible');
  assert.equal(Object.keys(data.scratchProjects).length, 3);
  const prereqs = Array.from(m.prerequisiteSkills, p => p.skillId);
  assert(!prereqs.includes('scratch.clones'));
  assert(!prereqs.includes('scratch.messages'));
  assert(!prereqs.includes('scratch.custom-blocks'));
  assert(!prereqs.includes('scratch.time'));
  assert(m.blocks.find(b => b.id === 'choix-clics').text.includes('Prérequis supplémentaire'));
  assert(m.blocks.find(b => b.id === 'choix-labyrinthe').text.includes('seulement si'));
  assert.equal(m.blocks.find(b => b.id === 'exemple').code, undefined);
  assert(m.blocks.find(b => b.id === 'verification').items.some(i => i.id === 'deux-parties'));
  assert(m.blocks.find(b => b.id === 'autonomie').items.some(i => i.id === 'justifier'));
  assert(m.bonusActivities.filter(r => r.moduleId !== 'scratch-projet-personnel').every(r => r.prerequisiteSkills.length));
  assert(data.modules['scratch-debogage'].nextSteps.some(r => r.moduleId === 'scratch-projet-personnel'));
  assert.equal(m.nextSteps.length, 0);
  assert.equal(m.teacherGuide.example.target.blockId, 'exemple');
});

test('débogage Scratch : erreurs reproductibles, corrections et reprise', () => {
  const m = data.modules['scratch-debogage'];
  const blocks = m.blocks.find(b => b.id === 'exemple').visualScript.blocks;
  assert.equal(blocks[1].parts[0], 'ajouter ');
  assert.equal(blocks[2].parts[0], 'aller à x: ');
  const move = Number(blocks[1].parts[1].value);
  const origin = Number(blocks[2].parts[1].value);
  // Simulation des opérations fournies, pas exécution du moteur Scratch.
  for (const initial of [-90, 0, 40]) {
    let wrong = initial + move;
    wrong = origin;
    assert.equal(wrong, 0);
    const repaired = origin + move;
    assert.equal(repaired, 40);
  }
  const click = m.blocks.find(b => b.id === 'score').visualScript.stacks[1].blocks;
  assert.equal(click[1].parts[1].choice, 'score');
  assert.equal(click[1].parts[3].value, '0');
  assert.equal(click[2].parts[3].choice, 'score');
  const gain = Number(click[2].parts[1].value);
  let wrong = 0, repaired = 0;
  for (let n = 1; n <= 3; n++) { wrong = gain; repaired += gain; }
  assert.equal(wrong, 1);
  assert.equal(repaired, 3);
  const condition = m.blocks.find(b => b.id === 'seuil').visualScript.blocks[0].parts[1].condition;
  assert.equal(condition[1], ' > ');
  const threshold = Number(condition[2].value);
  assert.deepEqual([1, 2, 3, 4].map(n => n > threshold), [false, false, false, true]);
  assert.deepEqual([1, 2, 3].map(n => n > 2), [false, false, true]);
  repaired = 0; // drapeau puis nouveau clic
  repaired += gain;
  assert.equal(repaired, 1);
  assert(m.blocks.find(b => b.id === 'autonomie').items.every(i => !i.syntax));
  assert(data.modules['scratch-temps-difficulte'].nextSteps.some(r => r.moduleId === 'scratch-debogage'));
  assert.equal(m.scratchProjectId, undefined);
});

test('lot 5 Scratch : clones finis, positions et suppression distincte du modèle', () => {
  const m = data.modules['scratch-clones'];
  const stacks = m.blocks.find(b => b.id === 'exemple').visualScript.stacks;
  const factory = stacks[0].blocks;
  assert.equal(factory[1].parts[0], 'cacher');
  const loop = factory[3];
  const count = Number(loop.parts[1].value);
  const step = Number(loop.children[1].parts[1].value);
  assert.equal(loop.children[0].parts[0], 'créer un clone de ');
  assert.equal(stacks[1].blocks[1].parts[0], 'montrer');
  assert.equal(stacks[1].blocks.at(-1).parts[0], 'supprimer ce clone');
  assert(!JSON.stringify(stacks[1]).includes('créer un clone'));
  // Simulation arithmétique du modèle visuel, pas exécution du moteur Scratch.
  let x = Number(factory[2].parts[1].value);
  const copies = [];
  for (let i = 0; i < count; i++) { copies.push(x); x += step; }
  assert.deepEqual(copies, [-120, -40, 40]);
  assert.equal(x, 120);
  const autonomous = Array.from({length: 4}, (_, i) => -120 + i * 60);
  assert.deepEqual(autonomous, [-120, -60, 0, 60]);
  assert(autonomous.every(position => Math.abs(position) < 240));
  assert(data.modules['scratch-blocs-personnalises'].nextSteps.some(r => r.moduleId === 'scratch-clones'));
  assert(m.nextSteps.some(r => r.moduleId === 'scratch-temps-difficulte'));
});

test('lot 5 Scratch : points interdits à la limite, temps initialisé et reprise', () => {
  const m = data.modules['scratch-temps-difficulte'];
  const stacks = m.blocks.find(b => b.id === 'exemple').visualScript.stacks;
  const start = stacks[0].blocks;
  assert.equal(start[1].parts[1].choice, 'score');
  assert.equal(start[1].parts[3].value, '0');
  const duration = Number(start[2].parts[3].value);
  assert.equal(duration, 10);
  assert.equal(start.filter(b => b.parts[0] === 'réinitialiser le chronomètre').length, 1);
  const endCondition = start[6].parts[1].condition;
  assert.equal(endCondition[1], ' > ');
  assert.equal(start.at(-1).parts[1].choice, 'tout');
  const gate = stacks[1].blocks[1];
  assert.equal(gate.parts[1].condition[1], ' < ');
  assert.equal(gate.children.length, 1);
  assert.equal(gate.children[0].parts[3].choice, 'score');
  assert(!JSON.stringify(stacks[1]).includes('réinitialiser'));
  // Simulation des comparaisons décrites : ne prétend pas lancer Scratch.
  let score = 0;
  for (const elapsed of [0.2, 9.9, 10, 10.01, 12]) if (elapsed < duration) score++;
  assert.equal(score, 2);
  assert.equal(10 > duration, false);
  assert.equal(10.01 > duration, true);
  score = Number(start[1].parts[3].value); // nouveau drapeau
  assert.equal(score, 0);
  assert.equal(5 < 4, false); // bonus après 5 s dans une partie de 4 s
  assert(m.blocks.find(b => b.id === 'autonomie').items.some(i => i.text.includes('50 %')));
});

test('lot 3 Scratch : conditions de fin atteignables, arrêt et reprise explicites', () => {
  const m = data.modules['scratch-fin-partie'], project = data.modules['scratch-mini-jeu'];
  assert.equal(project.type, 'project');
  assert.equal(m.scratchProjectContinuation, true);
  assert.equal(project.scratchProjectContinuation, true);
  assert(data.modules['scratch-variables'].nextSteps.some(r => r.moduleId === 'scratch-fin-partie'));
  assert(m.nextSteps.some(r => r.moduleId === 'scratch-mini-jeu'));
  const additions = m.blocks.find(b => b.id === 'exemple').visualScript.blocks;
  assert.equal(additions.length, 2);
  assert(additions.every(b => b.parts[1].operator));
  assert.equal(additions[0].parts[1].condition[1], ' = ');
  assert.equal(additions[1].parts[1].condition[1], ' < ');
  assert(additions.every(b => b.children.at(-1).parts[1].choice === 'tout'));
  // Simulation des comparaisons décrites par le modèle, pas du moteur Scratch.
  const resolve = (part, state) => part.value in state ? state[part.value] : Number(part.value);
  const ending = state => additions.findIndex(b => {
    const [left, op, right] = b.parts[1].condition;
    return op.trim() === '=' ? resolve(left, state) === resolve(right, state) : resolve(left, state) < resolve(right, state);
  });
  const start = () => ({ score: 0, 'abscisse x': -100 });
  const state = start();
  assert.equal(ending(state), -1);
  for (let contact = 1; contact <= 3; contact++) {
    state.score += 1; state['abscisse x'] = -100;
    assert.equal(ending(state), contact === 3 ? 0 : -1);
  }
  assert.equal(ending(start()), -1); // redémarrage après victoire
  const losing = start();
  for (let step = 0; step < 27; step++) losing['abscisse x'] -= 3;
  assert.equal(losing['abscisse x'], -181);
  assert.equal(ending(losing), 1);
  assert.equal(ending({ score: 0, 'abscisse x': -180 }), -1);
  assert.equal(ending(start()), -1); // redémarrage après défaite
  assert.equal(ending({ score: 4, 'abscisse x': -100 }), -1); // seuil 3 sauté : bonus
  assert(project.blocks.find(b => b.id === 'verification').items.length >= 5);
  assert.equal(data.site.scratchLanguageHelp, undefined);
});

test('lot 4 Scratch : signal attendu, recettes réutilisées et paramètre facultatif', () => {
  const coordination = data.modules['scratch-coordination'];
  const custom = data.modules['scratch-blocs-personnalises'];
  assert.equal(coordination.scratchProjectId, 'carte-animee');
  const stacks = coordination.blocks.find(b => b.id === 'exemple').visualScript.stacks;
  assert.equal(stacks.length, 2);
  assert.equal(stacks[0].blocks[2].parts[1].choice, stacks[1].blocks[0].parts[1].choice);
  assert.equal(stacks[0].blocks[2].parts[2], ' et attendre');
  assert(!stacks[1].blocks.some(b => b.parts.some(p => p.flag)));
  // Simulation des durées de ces deux piles finies, pas du moteur Scratch.
  const duration = block => Number(block.parts.findLast(p => p.value)?.value);
  const first = duration(stacks[0].blocks[1]), response = duration(stacks[1].blocks[1]);
  assert.equal(first, 2);
  assert.equal(first + response, 4); // troisième réplique après la réception
  assert.equal(4 + response, 6); // si la première réplique dure quatre secondes
  assert(!stacks.flatMap(s => s.blocks).some(b => b.children)); // pas de réception infinie
  const example = custom.blocks.find(b => b.id === 'exemple').visualScript.stacks;
  assert.equal(example[0].blocks[0].category, 'custom');
  assert.equal(example[0].blocks[0].parts[0], 'définir retour au départ');
  assert.equal(example[1].blocks.filter(b => b.category === 'custom').length, 2);
  const initial = Number(example[0].blocks[1].parts[1].value);
  const delta = Number(example[1].blocks[2].parts[1].value);
  assert.equal(initial + delta, -40);
  assert.equal(-150 + delta, -90);
  const parameter = ui.blocks(custom.blocks).find(b => b.id === 'parametre');
  assert(parameter.paragraphs.some(p => p.includes('Une seule pile de drapeau')));
  assert(parameter.paragraphs.some(p => p.includes('N’écris pas le mot distance')));
  assert(custom.bonusActivities[0].prerequisiteSkills.some(p => p.skillId === 'scratch.custom-blocks'));
  const calls = parameter.visualScript.stacks[1].blocks.filter(b => b.parts[0] === 'deplacer ');
  assert.equal(initial + calls.reduce((x,b) => x + Number(b.parts[1].value), 0), -30);
  assert(data.modules['scratch-mini-jeu'].nextSteps.some(r => r.moduleId === 'scratch-coordination'));
  assert(coordination.nextSteps.some(r => r.moduleId === 'scratch-blocs-personnalises'));
  const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
  assert(!app.includes('scratchLanguageHelp'));
  assert(!app.includes('Scratch est en anglais ?'));
  assert(app.includes("'custom'"));
});

test('prototype Flexbox : une seule démonstration, sans nouveau module ni progression', () => {
  const demos=Object.entries(data.modules).flatMap(([id,m])=>ui.blocks(m.blocks).filter(b=>b.demonstration).map(b=>({id,block:b})));
  assert.equal(demos.length,1);
  assert.equal(demos[0].id,'css-flexbox');
  assert.equal(demos[0].block.id,'cours');
  const demo=demos[0].block.demonstration;
  assert.equal(demo.type,'flex-display');
  assert.deepEqual(Array.from(demo.options,o=>o.value),['block','flex']);
  assert.deepEqual(Array.from(demo.cards),['A','B','C']);
  for(const key of ['title','intro','controlLabel','previewLabel','codeLabel','note']) assert(demo[key].trim());
  assert(demo.options.every(o=>o.label && o.feedback));
  assert.equal(demos[0].block.code,'.cartes {\n  display: flex;\n}');
});

test('lot 2 Scratch : imbrication, conditions et score placés dans le bon contexte', () => {
  const example = id => data.modules[id].blocks.find(b => b.id === 'exemple').visualScript.blocks;
  const repeated = example('scratch-boucles');
  assert.equal(repeated[1].parts[1].value, '4');
  assert.equal(repeated[1].children[0].parts[1].value, '20');
  assert.equal(4 * 20, 80);
  assert.equal(repeated[2].category, 'looks'); // message après la boucle
  assert.equal(repeated[1].children.length, 2);
  const continuous = data.modules['scratch-boucles'].blocks.find(b => b.id === 'continue').visualScript.blocks;
  assert.equal(continuous[1].parts[0], 'répéter indéfiniment');
  assert.equal(continuous[1].children.length, 2);
  const reactions = example('scratch-reactions');
  assert.equal(reactions[1].parts[1].value, '-100');
  const tests = reactions[2].children;
  assert.equal(tests.filter(b => b.parts[0] === 'si ').length, 3);
  assert.equal(tests[0].parts[1].condition[1].choice, 'flèche droite');
  assert.equal(tests[1].children[0].parts[1].value, '-3');
  assert.equal(tests[2].parts[1].condition[1].choice, 'Cible');
  assert.equal(tests[2].children.at(-1).parts[1].value, '-100'); // séparer après contact
  const score = example('scratch-variables');
  assert.equal(score[1].category, 'variables');
  assert.equal(score[1].parts[0], 'mettre ');
  assert.equal(score[1].parts[3].value, '0');
  const loop = score[3];
  assert(!loop.children.some(b => b.category === 'variables')); // aucun point inconditionnel
  const contact = loop.children[2];
  assert.equal(contact.children[0].parts[0], 'ajouter ');
  assert.equal(contact.children[0].parts[1].value, '1');
  assert.equal(contact.children[0].parts[3].choice, 'score');
  assert.equal(contact.children.at(-1).parts[1].value, '-100');
  assert(data.modules['scratch-pilotage'].nextSteps.some(r => r.moduleId === 'scratch-boucles'));
  assert(data.modules['scratch-reactions'].nextSteps.some(r => r.moduleId === 'scratch-variables'));
});

test('Scratch visuel : quatre exemples, modèles texte conservés, coordonnées et touches cohérentes', () => {
  const scripts = Object.entries(data.modules).filter(([id]) => ['scratch-decouverte', 'scratch-actions', 'scratch-pilotage'].includes(id)).flatMap(([id, m]) => ui.blocks(m.blocks).filter(b => b.visualScript).map(b => ({ id, b })));
  assert.equal(scripts.length, 4);
  assert.equal(scripts[0].id, 'scratch-decouverte');
  assert.equal(scripts[0].b.id, 'exemple');
  assert.deepEqual(Array.from(scripts[0].b.visualScript.blocks, b => b.category), ['events', 'motion']);
  assert.equal(scripts[0].b.visualScript.blocks[1].parts[1].value, '10');
  assert.equal(scripts[0].b.code, 'Événements : quand le drapeau vert est cliqué\n  Mouvement : avancer de 10 pas');
  assert(scripts.every(s => s.b.shortSteps.length === 3 && s.b.paragraphs.length));
  const sequence = data.modules['scratch-actions'].blocks.find(b => b.id === 'exemple');
  assert.deepEqual(Array.from(sequence.visualScript.blocks, b => b.category), ['events', 'looks', 'motion', 'control', 'motion', 'looks']);
  const position = data.modules['scratch-pilotage'].blocks.find(b => b.id === 'position');
  assert(position.coordinateDiagram.down.includes('diminue'));
  assert(position.coordinateDiagram.up.includes('augmente'));
  const keys = data.modules['scratch-pilotage'].blocks.find(b => b.id === 'exemple').visualScript.stacks;
  assert.equal(keys.length, 4);
  assert.deepEqual(Array.from(keys, s => s.blocks[1].parts[1].value), ['10', '-10', '10', '-10']);
  assert.deepEqual(Array.from(keys, s => s.blocks[0].parts[1].choice), ['flèche droite', 'flèche gauche', 'flèche haut', 'flèche bas']);
});

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
  assert.equal(Object.values(data.modules).filter(m => m.domainId !== 'python').length, 37);
  assert.equal(Object.keys(data.skills).filter(id => !id.startsWith('python.')).length, 34);
  assert.equal(Object.values(data.modules).filter(m => m.domainId !== 'python' && m.teacherGuide).length, 37);
  assert.equal(data.modules['html-mini-page'].type, 'challenge');
  assert.equal(data.modules['web-affiche-numerique'].type, 'project');
  assert.equal(JSON.stringify(data.modules['css-decouverte'].skillIds), '["css.colors"]');
  assert.equal(JSON.stringify(data.pathways['web-debutants'].moduleIds), '["html-titres-paragraphes","html-listes","html-liens","html-revision","html-images","css-classes-couleurs","html-mini-page","html-document","html-fichiers-chemins","css-feuille-style","html-parent-enfants","html-zones","css-textes-lisibles","css-boites-espacements","css-dimensions-images","web-carte-personnelle","html-multipage","web-mini-site"]');
  assert(data.pathways['web-fondations'].moduleIds.includes('html-mini-page'));
  assert(data.pathways['web-fondations'].moduleIds.includes('web-affiche-numerique'));
  const requirements = data.modules['html-mini-page'].blocks.find(b => b.id === 'exigences').items;
  assert.equal(JSON.stringify(requirements.map(i => i.text)), JSON.stringify(['Un titre principal h1.', 'Deux sous-titres h2 pour deux parties de même importance.', 'Au moins 3 paragraphes.', 'Une liste.', '2 liens.', '2 images.']));
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

test('Scratch revue 9–12 : conservation des projets, comparaisons et prérequis', () => {
  for (const id of ['scratch-coordination', 'scratch-blocs-personnalises', 'scratch-clones', 'scratch-temps-difficulte']) {
    const m = data.modules[id];
    const preparation = m.blocks.find(b => b.id === 'preparer').paragraphs.join(' ');
    assert(preparation.includes('Sauvegarde ton travail précédent'));
    assert(preparation.includes('Fichier → Nouveau'));
    assert(m.teacherGuide.preparation.some(s => s.includes('sauvegarder le travail précédent')));
  }
  const coordination = data.modules['scratch-coordination'];
  const exchange = coordination.blocks.find(b => b.id === 'autonomie');
  assert(exchange.intro.includes('projet distinct'));
  assert(exchange.intro.includes('ne supprime pas les piles'));
  assert(coordination.teacherGuide.commonErrors.find(e => e.symptom.includes('inversion')).helps.at(-1).includes('sans supprimer ses piles'));
  assert(coordination.nextSteps[0].prerequisiteSkills.some(p => p.skillId === 'scratch.coordinates'));
  const custom = data.modules['scratch-blocs-personnalises'];
  const tasks = custom.blocks.find(b => b.id === 'autonomie').items;
  assert(tasks.find(t => t.id === 'appels').text.includes('d’abord retour au départ, puis saluer deux fois'));
  assert(tasks.find(t => t.id === 'predire').text.includes('remet le chat à -100'));
  const comments = custom.teacherGuide.example.comments.join(' ');
  assert(comments.includes('terminent à -60'));
  assert(comments.includes('terminent à -40'));
  // Vérifie les résultats attendus de deux essais indépendants ; pas le moteur Scratch.
  const trial = step => { let x = -100; for (let i = 0; i < 2; i++) x += step; return x; };
  assert.equal(trial(20), -60);
  assert.equal(trial(30), -40);
  assert.equal(trial(20), -60);
  assert(data.modules['scratch-clones'].nextSteps[0].prerequisiteSkills.some(p => p.skillId === 'scratch.game-rules'));
  for (const m of [coordination, data.modules['scratch-clones']]) {
    for (const next of m.nextSteps) {
      assert(data.modules[next.moduleId]);
      for (const prerequisite of next.prerequisiteSkills) assert(data.skills[prerequisite.skillId]);
    }
  }
});

test('Scratch revue 13–14 : sauvegarde préalable et enquêtes comparables', () => {
  const debugging = data.modules['scratch-debogage'];
  const personal = data.modules['scratch-projet-personnel'];
  for (const [module, blockId] of [[debugging, 'methode'], [personal, 'exemple']]) {
    const text = module.blocks.find(b => b.id === blockId).paragraphs.join(' ');
    assert(text.includes('Sauvegarde ton travail actuel'));
    assert(text.includes('Fichier → Nouveau'));
    assert(module.teacherGuide.preparation[0].includes('sauvegarder le travail actuel'));
  }
  const scoreText = debugging.blocks.find(b => b.id === 'score').paragraphs.join(' ');
  assert(scoreText.includes('avant de passer au seuil'));
  assert(scoreText.includes('Garde ce même projet'));
  const threshold = debugging.blocks.find(b => b.id === 'seuil');
  assert(threshold.paragraphs.join(' ').includes('Avant chaque test, lance le drapeau et vérifie score = 0'));
  assert(threshold.code.includes('score > 3'), 'le modèle incorrect reste un problème à résoudre');
  const task = debugging.blocks.find(b => b.id === 'autonomie').items.find(t => t.id === 'seuil-trois');
  assert(task.text.includes('Avant chaque test, lance le drapeau et vérifie score = 0'));
  const comments = debugging.teacherGuide.example.comments.join(' ');
  assert(comments.includes('avant d’ajouter le seuil dans le même projet'));
  assert(comments.includes('Avant chaque comparaison, lancer le drapeau et vérifier score = 0'));
  // Modèle arithmétique du test, pas une exécution du moteur Scratch.
  const trial = limit => { let score = 0; return [1, 2, 3, 4].map(() => ++score > limit); };
  assert.deepEqual(trial(3), [false, false, false, true]);
  assert.deepEqual(trial(2), [false, false, true, true]);
  assert.deepEqual(trial(2), [false, false, true, true]);
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
