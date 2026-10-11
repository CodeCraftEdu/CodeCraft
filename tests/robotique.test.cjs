const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.join(__dirname, '..');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'lesson-data.js'), 'utf8'), context);
const data = context.window.CODECRAFT_DATA;

test('RB01 conserve la leçon complète après retrait de l’essai visuel', () => {
  const preparation = data.modules['robotique-lumiere'].blocks.find(b => b.id === 'preparer');
  assert.equal(preparation.steps, undefined);
  assert.match(preparation.text, /mission|programme commande une lumière/);
  assert.doesNotMatch(preparation.text, /Tinker this|connexion|copie|LED|Blocks/);
  assert.match(data.modules['robotique-lumiere'].blocks.find(b => b.id === 'atelier').paragraphs.join(' '), /Tinker this.*enseignant/);
  const blocks = data.modules['robotique-lumiere'].blocks;
  for (const id of ['observer', 'commander', 'guide', 'autonomie']) assert.ok(blocks.some(b => b.id === id));
  const css = fs.readFileSync(path.join(root, 'student-lowpoly.css'), 'utf8');
  assert.doesNotMatch(css, /robotique-lesson-ambience|preparation-steps/);
  assert.match(css, /data-domain="robotique"[^\n]+--domain-canvas: #eaf0ec/);
  assert.doesNotMatch(css, /data-lesson-id/);
});

test('RB01 introduit mission, outil, montage puis programmation dans cet ordre', () => {
  const lesson = data.modules['robotique-lumiere'];
  assert.deepEqual(Array.from(lesson.blocks.slice(0, 4), b => b.id), ['preparer', 'atelier', 'observer', 'commander']);
  assert.doesNotMatch(lesson.objective, /LED|Blocks|Tinker/);
  assert.match(lesson.blocks[0].text, /Tinkercad, un atelier virtuel/);
  assert.match(lesson.blocks[2].paragraphs.join(' '), /s’appelle une LED/);
  assert.match(lesson.blocks[3].paragraphs.join(' '), /panneau Code.*mode Blocks/);
  assert.match(lesson.blocks[3].paragraphs.join(' '), /LOW.*HIGH/);
});

test('RB01 : un schéma utile et accessible, sans manipulation dépendant du professeur', () => {
  const blocks = data.modules['robotique-lumiere'].blocks;
  assert.equal(blocks.find(block => block.id === 'preparer').illustration, undefined);
  for (const id of ['observer']) {
    const config = blocks.find(block => block.id === id).illustration;
    assert.ok(config.alt.length > 40 && config.caption.length > 40);
    const svg = fs.readFileSync(path.join(root, config.src), 'utf8');
    assert.match(svg, /viewBox="0 0 800 /);
    assert.match(svg, /<title id="title">/);
    assert.match(svg, /<desc id="desc">/);
    assert.doesNotMatch(svg, /<script|(?:href|src)="https?:\/\//);
  }
  const observer = blocks.find(block => block.id === 'observer');
  assert.match(observer.illustration.caption, /pas la disposition exacte.*sens de la LED/);
  assert.doesNotMatch(JSON.stringify(observer), /enseignant|professeur/);
  assert.match(observer.paragraphs.join(' '), /déjà complet.*Sans retirer de fil/);
  assert.doesNotMatch(JSON.stringify(blocks.find(block => block.id === 'guide')), /enseignant|professeur|complète.*connexion/);
  const svg = fs.readFileSync(path.join(root, 'images/robotique-lumiere-montage.svg'), 'utf8');
  assert.match(svg, /220 Ω/);
  assert.match(svg, /GND/);
  assert.doesNotMatch(svg, /enseignant|professeur/);
});

test('les textes élève robotique ne contiennent pas le suivi interne de préparation', () => {
  const pathway = data.pathways['robotique-debutants'];
  const internal = /en préparation|recette pratique|recette de placement|diagnostic professeur|essais professeur|avant utilisation|avant le cours|aides identifiées|compétence automatiquement/i;
  // Les réserves de recette restent dans teacherGuide ; ne contrôler que la vue élève.
  for (const id of pathway.moduleIds) {
    const module = data.modules[id];
    assert.doesNotMatch(JSON.stringify({title: module.title, objective: module.objective,
      blocks: module.blocks, masteryCriteria: module.masteryCriteria}), internal, id);
    assert.ok(module.teacherGuide, id);
  }
  assert.doesNotMatch(JSON.stringify(pathway), internal);
  assert.doesNotMatch(fs.readFileSync(path.join(root, 'resources/robotique/fiche-mission-robot.html'), 'utf8'), internal);
  for (const id of ['robotique-distance', 'robotique-obstacle', 'robotique-mission', 'robotique-tests']) {
    assert.match(JSON.stringify(data.modules[id].teacherGuide.preparation), /recette pratique incomplète/i);
  }
});

test('RB08 sépare placement immobile et lancement sans donner la décision au départ', () => {
  const lesson = data.modules['robotique-obstacle'];
  const base = lesson.blocks.find(b => b.id === 'base').paragraphs.join(' ');
  assert.match(base, /attend l’appui sur A/);
  assert.match(base, /sans arrêter la simulation entre placement et appui/);
  assert.match(base, /départ sans décision reste immobile même après A/);
  assert.match(base, /seconde répétition/);
  assert.doesNotMatch(base, /attend 2000|aucun appui A\/B/);
  const observation = data.modules['robotique-distance'].blocks.find(b => b.id === 'observer').paragraphs.join(' ');
  assert.match(observation, /garde la simulation active pour glisser le robot immobile/);
  for (const id of ['robotique-mission', 'robotique-tests']) {
    assert.doesNotMatch(JSON.stringify(data.modules[id].blocks), /Arrête.*avant tout placement|Arrête avant tout placement/);
    assert.match(JSON.stringify(data.modules[id].blocks), /sans appuyer sur A|attente de A|attente du bouton A/);
  }
});

test('la robotique mène à un parcours publié sans module fantôme', () => {
  const domain = data.domains.robotique;
  const pathway = data.pathways['robotique-debutants'];
  assert.deepEqual(Array.from(domain.pathwayIds), ['robotique-debutants']);
  assert.equal(pathway.domainId, 'robotique');
  assert.deepEqual(Array.from(pathway.moduleIds), ['robotique-lumiere', 'robotique-signal', 'robotique-bouton', 'robotique-decision', 'robotique-microbit', 'robotique-trajet', 'robotique-distance', 'robotique-obstacle', 'robotique-mission', 'robotique-tests']);
  assert.equal(pathway.stages.length, 4);
  for (const id of pathway.moduleIds) assert.ok(data.modules[id]);
  assert.deepEqual(Array.from(pathway.stages[0].moduleIds), Array.from(pathway.moduleIds.slice(0, 4)));
  assert.deepEqual(Array.from(pathway.stages[1].moduleIds), Array.from(pathway.moduleIds.slice(4, 6)));
  assert.ok(pathway.stages[1].pause);
  assert.deepEqual(Array.from(pathway.stages[2].moduleIds), Array.from(pathway.moduleIds.slice(6, 8)));
  assert.match(pathway.stages[2].description, /distance|obstacle/);
  assert.deepEqual(Array.from(pathway.stages[3].moduleIds), Array.from(pathway.moduleIds.slice(8)));
  assert.match(pathway.stages[3].description, /mission/);
  assert.match(pathway.stages[3].endMessage, /ton projet/);
  assert.equal(pathway.stages[3].upcoming, undefined);
});

test('RB09/RB10 réinvestissent la règle, partagent une fiche et gardent les réserves de recette', () => {
  const ids = ['robotique-mission', 'robotique-tests'];
  for (const id of ids) {
    const m = data.modules[id];
    assert.equal(m.domainId, 'robotique');
    assert.equal(m.theme, 'fondations');
    assert.ok(m.prerequisitesInContent);
    for (const skill of m.skillIds) assert.ok(data.skills[skill]);
    for (const ref of [m.teacherGuide.example.target, m.teacherGuide.accompaniedActivity, m.teacherGuide.independentActivity]) {
      assert.equal(ref.moduleId, id);
      assert.ok(m.blocks.some(b => b.id === ref.blockId));
    }
    assert.match(m.blocks.find(b => b.id === 'recette').text, /professeur/);
    assert.match(m.teacherGuide.preparation.join(' '), /Recette pratique incomplète/);
    assert.doesNotMatch(JSON.stringify(m.blocks), /KidnKod|séance [1-5]|Capteurs-recette/);
    const downloads = m.blocks.flatMap(b => Array.from(b.downloads || []));
    assert.equal(downloads.length, 1);
    assert.equal(downloads[0].path, 'resources/robotique/fiche-mission-robot.html');
    assert.ok(fs.existsSync(path.join(root, downloads[0].path)));
    for (const ref of m.teacherGuide.references) {
      if (!ref.url.startsWith('https://')) assert.ok(fs.existsSync(path.join(root, ref.url.split('#')[0])), ref.url);
    }
    assert.match(m.blocks.find(b => b.id === 'conserver').text, /exporte/);
    assert.ok(m.teacherGuide.questions.length >= 3);
    assert.ok(m.teacherGuide.commonErrors.every(e => e.helps.length >= 4));
  }
  const mission = data.modules[ids[0]], tests = data.modules[ids[1]];
  assert.equal(mission.type, 'project');
  assert.match(mission.blocks.find(b => b.id === 'guide').title, /avant de choisir/);
  assert.match(mission.blocks.find(b => b.id === 'autonomie').title, /premier résultat/);
  assert.match(mission.blocks.find(b => b.id === 'choisir').paragraphs.join(' '), /pas une course.*plus petit seuil/);
  assert.match(tests.blocks.find(b => b.id === 'preparer').text, /confirmation fictive/);
  assert.match(tests.blocks.find(b => b.id === 'diagnostic').paragraphs.join(' '), /reprends A\/B\/C/);
  assert.equal(tests.finalPathwayAction, 'Revenir au parcours');
  const sheet = fs.readFileSync(path.join(root, 'resources/robotique/fiche-mission-robot.html'), 'utf8');
  assert.match(sheet, /@media print/);
  assert.match(sheet, /Premier essai RB09/);
  assert.match(sheet, /Confirmation RB10/);
  assert.match(sheet, /non testé/);
  assert.match(sheet, /simulation active sans appuyer sur le bouton A/);
  assert.match(sheet, /arrête la simulation avant toute intervention/);
  assert.match(sheet, /Le bouton A n’est pas la situation A/);
  assert.doesNotMatch(sheet, /Arrête avant tout placement/);
  assert.doesNotMatch(sheet, /localStorage|fetch\(|<form|<input/);
});

test('les guides de mission conservent les preuves récentes sans annoncer une validation complète', () => {
  for (const id of ['robotique-mission', 'robotique-tests']) {
    const preparation = data.modules[id].teacherGuide.preparation.join(' ');
    assert.match(preparation, /Recette pratique incomplète/);
    assert.match(preparation, /13/);
    assert.match(preparation, /22-23/);
    assert.match(preparation, /réimport/);
    assert.match(preparation, /conditions égales|équitables/);
    assert.match(preparation, /impression|imprimée/);
  }
  for (const filename of ['RB09-Mission-prudente-seuil-25.hex', 'RB09-Mission-approche-seuil-15.hex']) {
    const file = path.join(root, 'docs/recettes-robotique', filename);
    assert.ok(fs.statSync(file).size > 1000, filename);
    const hex = fs.readFileSync(file, 'utf8').trim();
    const records = hex.split(/\r?\n/).filter(line => line.trim());
    assert.ok(records.every(line => /^:[0-9A-Fa-f]+$/.test(line)), filename);
    for (const record of records) {
      const bytes = Buffer.from(record.slice(1), 'hex');
      assert.equal(bytes.length, bytes[0] + 5, filename);
      assert.equal([...bytes].reduce((sum, byte) => sum + byte, 0) % 256, 0, filename);
    }
    assert.ok(hex.endsWith(':00000001FF'), filename);
    // Ces contrôles de fichier ne remplacent pas le réimport et les essais du simulateur.
    const studentDownloads = ['robotique-mission', 'robotique-tests'].flatMap(id =>
      data.modules[id].blocks.flatMap(block => Array.from(block.downloads || [])));
    assert.ok(studentDownloads.every(resource => !resource.path.includes(filename)));
  }
});

test('RB07 et RB08 séparent mesure, règle fixe et première variable sans validation pratique implicite', () => {
  for (const id of ['robotique-distance', 'robotique-obstacle']) {
    const lesson = data.modules[id];
    assert.equal(lesson.domainId, 'robotique');
    assert.equal(lesson.theme, 'fondations');
    assert.ok(lesson.prerequisitesInContent);
    for (const skill of lesson.skillIds) assert.ok(data.skills[skill], skill);
    for (const ref of [lesson.teacherGuide.example.target, lesson.teacherGuide.accompaniedActivity, lesson.teacherGuide.independentActivity]) {
      assert.equal(ref.moduleId, id);
      assert.ok(lesson.blocks.some(b => b.id === ref.blockId));
    }
    assert.match(lesson.blocks.find(b => b.id === 'recette').text, /professeur/);
    assert.match(lesson.teacherGuide.preparation.join(' '), /recette pratique incomplète/);
    assert.doesNotMatch(JSON.stringify(lesson.blocks), /KidnKod|séance [1-5]|demain|Capteurs-recette/);
    for (const block of lesson.blocks) {
      if (block.illustration) assert.ok(fs.existsSync(path.join(root, block.illustration.src)));
      for (const download of block.downloads || []) {
        assert.ok(fs.existsSync(path.join(root, download.path)));
        assert.doesNotMatch(download.path, /reference|recette/);
      }
    }
    for (const ref of lesson.teacherGuide.references) {
      if (!ref.url.startsWith('https://')) assert.ok(fs.existsSync(path.join(root, ref.url)), ref.url);
    }
    assert.match(lesson.blocks.find(b => b.id === 'conserver').text, /export|Exporte/);
  }
  const measure = data.modules['robotique-distance'];
  assert.match(measure.blocks.find(b => b.id === 'base').paragraphs.join(' '), /aucune commande d’avance/);
  assert.match(measure.blocks.find(b => b.id === 'limite').paragraphs.join(' '), /exactement 20, non/);
  const obstacle = data.modules['robotique-obstacle'];
  assert.match(obstacle.blocks.find(b => b.id === 'construire').paragraphs.join(' '), /sans durée/);
  assert.ok(obstacle.blocks.findIndex(b => b.id === 'guide') < obstacle.blocks.findIndex(b => b.id === 'seuil'));
  assert.match(obstacle.blocks.find(b => b.id === 'seuil').paragraphs.join(' '), /avant la boucle qui attend A/);
  assert.match(obstacle.blocks.find(b => b.id === 'seuil').paragraphs.join(' '), /comparaison distance < 20 de la seconde boucle/);
  assert.match(obstacle.blocks.find(b => b.id === 'reglage').intro, /même obstacle, le même départ et la même orientation/);
  for (const name of ['RB07-Ma-distance-observation.hex', 'RB08-Mon-obstacle-depart.hex', 'RB08-Obstacle-fixe-reference.hex', 'RB08-Robot-prudent-reference.hex']) {
    const file = path.join(root, 'resources/robotique/makecode', name);
    assert.ok(fs.statSync(file).size > 1000);
    assert.match(fs.readFileSync(file, 'utf8'), /^:/);
  }
});

test('microbit et trajet séparent événements, préparation, départ et références', () => {
  for (const id of ['robotique-microbit', 'robotique-trajet']) {
    const lesson = data.modules[id];
    assert.equal(lesson.domainId, 'robotique');
    assert.equal(lesson.theme, 'fondations');
    for (const skill of lesson.skillIds) assert.ok(data.skills[skill], skill);
    for (const ref of [lesson.teacherGuide.example.target, lesson.teacherGuide.accompaniedActivity, lesson.teacherGuide.independentActivity]) {
      assert.equal(ref.moduleId, id);
      assert.ok(lesson.blocks.some(b => b.id === ref.blockId));
    }
    for (const block of lesson.blocks) {
      if (block.illustration) assert.ok(fs.existsSync(path.join(root, block.illustration.src)));
      for (const download of block.downloads || []) assert.ok(fs.existsSync(path.join(root, download.path)));
    }
    assert.doesNotMatch(JSON.stringify(lesson.blocks), /KidnKod|séance [1-5]|demain/i);
    assert.match(lesson.teacherGuide.preparation.join(' '), /élève.*restent à vérifier/);
    assert.match(lesson.blocks.find(b => b.id === 'conserver').text, /export|télécharger/i);
  }
  const robot = data.modules['robotique-trajet'];
  assert.match(robot.blocks.find(b => b.id === 'base').paragraphs.join(' '), /A et B ne pilotent aucun moteur/);
  assert.match(robot.blocks.find(b => b.id === 'avancer').paragraphs.join(' '), /1500 ms/);
  assert.match(robot.blocks.find(b => b.id === 'tourner').paragraphs.join(' '), /Ne retire pas l’arrêt/);
  assert.match(robot.blocks.find(b => b.id === 'autonomie').intro, /Garde puissance, direction et durée du virage/);
  const downloads = robot.blocks.flatMap(b => Array.from(b.downloads || []));
  assert.equal(downloads.length, 1);
  assert.match(downloads[0].path, /Mon-trajet-depart\.hex$/);
  assert.doesNotMatch(downloads[0].path, /reference/);
  for (const name of ['RB05-Mes-images-reference.hex', 'RB06-Mon-trajet-depart.hex', 'RB06-Trajet-reference.hex']) {
    const file = path.join(root, 'resources/robotique/makecode', name);
    assert.ok(fs.statSync(file).size > 1000);
    assert.match(fs.readFileSync(file, 'utf8'), /^:/);
  }
});

test('bouton et décision restent deux leçons avec départs sans solution et guides reliés', () => {
  for (const id of ['robotique-bouton', 'robotique-decision']) {
    const lesson = data.modules[id];
    assert.equal(lesson.domainId, 'robotique');
    for (const skill of lesson.skillIds) assert.ok(data.skills[skill], skill);
    for (const ref of [lesson.teacherGuide.example.target, lesson.teacherGuide.accompaniedActivity, lesson.teacherGuide.independentActivity]) {
      assert.equal(ref.moduleId, id);
      assert.ok(lesson.blocks.some(b => b.id === ref.blockId));
    }
    for (const block of lesson.blocks.filter(b => b.illustration)) assert.ok(fs.existsSync(path.join(root, block.illustration.src)));
    assert.doesNotMatch(JSON.stringify(lesson.blocks), /KidnKod|séance [1-5]|demain/i);
    assert.doesNotMatch(lesson.tool.url, /ed9JYU40iMH|d1QIg2g5Q82|0HMEwEsJtNV/);
    assert.match(lesson.teacherGuide.preparation.join(' '), /élève.*restent à vérifier|élève.*restent à faire/);
  }
  const decision = data.modules['robotique-decision'];
  assert.match(decision.blocks.find(b => b.id === 'autonomie').intro, /Mon-bouton-inverse/);
  assert.match(decision.blocks.find(b => b.id === 'partiel').paragraphs.join(' '), /Ne supprime rien/);
  assert.match(decision.blocks.find(b => b.id === 'construire').paragraphs.join(' '), /read digital pin 2 = HIGH/);
});

test('le signal prolonge les deux états et conserve un départ distinct de la solution', () => {
  const lesson = data.modules['robotique-signal'];
  assert.equal(lesson.tool.url, data.modules['robotique-lumiere'].tool.url);
  assert.deepEqual(Array.from(lesson.prerequisiteSkills, p => p.skillId), ['robotique.circuit', 'robotique.sortie']);
  for (const id of lesson.skillIds) assert.ok(data.skills[id], id);
  for (const ref of [lesson.teacherGuide.example.target, lesson.teacherGuide.accompaniedActivity, lesson.teacherGuide.independentActivity]) {
    assert.equal(ref.moduleId, 'robotique-signal');
    assert.ok(lesson.blocks.some(block => block.id === ref.blockId), ref.blockId);
  }
  assert.ok(lesson.blocks.some(block => block.id === 'completer' && /copie/i.test(block.intro)));
  assert.doesNotMatch(JSON.stringify(lesson.blocks), /KidnKod|séance [1-5]|demain/i);
  assert.ok(fs.existsSync(path.join(root, lesson.blocks.find(block => block.illustration).illustration.src)));
});

test('première leçon et guide restent autonomes et honnêtes sur la recette', () => {
  const lesson = data.modules['robotique-lumiere'];
  assert.equal(lesson.domainId, 'robotique');
  assert.equal(lesson.tool.url, 'https://www.tinkercad.com/things/d5FVvQDz9b4-codecraft-ma-premiere-lumiere-depart-eleve');
  assert.ok(lesson.teacherGuide);
  assert.ok(lesson.blocks.some(block => block.id === 'guide'));
  assert.ok(lesson.blocks.some(block => block.id === 'autonomie'));
  assert.match(lesson.teacherGuide.preparation.join(' '), /copie depuis un compte élève restent à vérifier/i);
  assert.match(lesson.blocks.find(block => block.id === 'commander').paragraphs.join(' '), /LOW.*HIGH/);
  assert.doesNotMatch(JSON.stringify(lesson.blocks), /KidnKod|séance [1-5]|demain/i);
  for (const name of ['home-robotique.svg', 'home-icon-robotique.svg', 'banner-robotique.svg']) {
    assert.ok(fs.existsSync(path.join(root, 'images', name)), name);
  }
});
