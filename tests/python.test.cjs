const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { spawnSync } = require('node:child_process');
const model = require('../teacher-model.js');
const root = path.join(__dirname, '..');
const context = { window: {}, URLSearchParams };
for (const file of ['lesson-data.js', 'pedagogy.js']) vm.runInNewContext(fs.readFileSync(path.join(root, file), 'utf8'), context);
const data = context.window.CODECRAFT_DATA, ui = context.window.CodeCraftPedagogy;
const ids = ['python-thonny', 'python-affichage', 'python-variables', 'python-saisie', 'python-conversation', 'python-calculs', 'python-erreurs', 'python-conditions', 'python-elif', 'python-aventure', 'python-for', 'python-while', 'python-compteurs', 'python-hasard', 'python-nombre-mystere', 'python-listes', 'python-texte'];
const block = (id, name) => data.modules[id].blocks.find(b => b.id === name);

test('Thonny : présentation pilote, trois actions et consignes intégralement réutilisées', () => {
  assert.equal(data.modules['python-thonny'].presentation, 'workshop');
  assert.equal(Object.values(data.modules).filter(m => m.presentation === 'workshop').length, 1);
  const example = block('python-thonny', 'exemple');
  assert.deepEqual(Array.from(example.actionSteps, s => s.title), ['Écrire', 'Enregistrer', 'Exécuter']);
  assert.deepEqual(Array.from(example.actionSteps, s => s.paragraphIndex), [0, 1, 2]);
  assert.equal(example.actionSteps[0].showCode, true);
  assert.equal(example.actionSteps[2].output, 'Bonjour !');
  assert(example.paragraphs.every(p => p.length));
});

test('Python revue 1–4 : autonomie fichiers, essais conservés et introductions fusionnées', () => {
  for (const id of ids.slice(0, 4)) {
    const m = data.modules[id];
    assert.equal(m.prerequisitesInContent, true);
    assert.equal(m.blocks.filter(b => b.title === 'Avant de commencer').length, 1);
    assert(m.blocks.every(b => !b.title.includes('—')));
    assert(!/Stop\/Restart|View →|File →/.test(JSON.stringify(m)));
  }
  const createFile = block('python-thonny', 'autonomie').items.find(i => i.id === 'retrouver-seul');
  assert(createFile.text.includes('Crée accueil.py'));
  assert(createFile.text.includes('enregistre-le'));
  assert(createFile.text.includes('rouvre le fichier'));
  assert(data.modules['python-thonny'].masteryCriteria.some(c => c.includes('Créer et nommer')));
  assert(!block('python-thonny', 'bonus').items[0].text.includes('Crée'));
  const replacement = block('python-variables', 'guide').items.find(i => i.id === 'predire-remplacement');
  assert(replacement.text.includes('Enregistre variables.py'));
  assert(replacement.text.includes('crée remplacement.py'));
  assert(replacement.text.includes('Garde le premier fichier'));
  assert(!block('python-variables', 'preparer').text.includes('Pour chaque test'));
  assert(block('python-variables', 'autonomie').items.some(i => i.id === 'test-propre'));
});

test('Python : dix-sept contenus réels, aucun module futur vide', () => {
  assert.deepEqual(Array.from(data.domains.python.pathwayIds), ['python-debutants']);
  assert.deepEqual(Array.from(data.pathways['python-debutants'].moduleIds), ids);
  assert.equal(Object.values(data.modules).filter(m => m.domainId === 'python').length, 17);
  assert.equal(data.modules['python-conversation'].type, 'project');
  const learned = new Set();
  for (const id of ids) {
    const m = data.modules[id];
    assert.equal(m.domainId, 'python');
    assert.equal(m.tool.url, 'https://thonny.org/');
    assert(m.blocks.length >= 5);
    assert(m.masteryCriteria.length >= 3);
    for (const prerequisite of m.prerequisiteSkills) {
      assert(learned.has(prerequisite.skillId), `${id}: prérequis non enseigné`);
      assert(prerequisite.expectation.trim());
    }
    for (const skill of m.skillIds) { assert(data.skills[skill]); learned.add(skill); }
    for (const key of ['consolidation', 'bonusActivities', 'nextSteps']) {
      for (const ref of m[key]) {
        assert(ui.target(ref));
        for (const p of ref.prerequisiteSkills || []) assert(data.skills[p.skillId]);
      }
    }
    const guide = m.teacherGuide;
    for (const ref of [guide.example.target, guide.accompaniedActivity, guide.independentActivity]) assert(ui.target(ref));
    assert(guide.questions.length >= 3);
    assert(guide.questions.every(q => q.question && q.answer));
    assert(guide.commonErrors.every(e => e.helps.length >= 4));
    assert(guide.discoverySpeech.length >= 3);
    assert(guide.preparation.length && guide.quickConductor.length && guide.references.length);
    assert(!/KIDnKOD|Startup|2026|04\/10|Lyna|Imran/.test(JSON.stringify(m)));
    const activities = ui.blocks(m.blocks);
    const taskIds = activities.flatMap(b => (b.items || []).map(i => i.id));
    assert.equal(new Set(taskIds).size, taskIds.length, 'Identifiants de cases uniques');
    assert(!activities.some(b => b.type === 'reference'), 'Aucun couplage entre exercices');
  }
  assert.equal(learned.size, 15);
  assert.equal(data.modules['python-thonny'].prerequisiteSkills.length, 0);
  assert.equal(data.modules['python-conversation'].nextSteps[0].moduleId, 'python-calculs');
  assert.equal(data.modules['python-conditions'].nextSteps[0].moduleId, 'python-elif');
  assert.equal(data.modules['python-aventure'].nextSteps[0].moduleId, 'python-for');
  assert.equal(data.modules['python-compteurs'].nextSteps[0].moduleId, 'python-hasard');
  assert.equal(data.modules['python-nombre-mystere'].nextSteps[0].moduleId, 'python-listes');
  assert.equal(data.modules['python-listes'].nextSteps[0].moduleId, 'python-texte');
  assert.equal(data.modules['python-texte'].nextSteps.length, 0);
});

test('Python checkpoint : transitions continues, reprises accessibles et autonomie dans le socle', () => {
  assert.equal(data.modules['python-calculs'].consolidation[0].label, 'Revoir nombre, texte et addition');
  const diagnostics = data.modules['python-erreurs'].consolidation;
  assert(diagnostics.some(ref => ref.moduleId === 'python-erreurs' && ref.blockId === 'guide' && ref.label === 'Revoir noms et syntaxe'));
  assert(diagnostics.some(ref => ref.moduleId === 'python-erreurs' && ref.blockId === 'conversion' && ref.label === 'Revoir une saisie non convertible'));
  const learned = new Set();
  for (const [index, id] of ids.entries()) {
    const m = data.modules[id];
    for (const skill of m.skillIds) learned.add(skill);
    assert.equal(m.nextSteps.length, index === ids.length - 1 ? 0 : 1);
    if (m.nextSteps.length) {
      assert.equal(m.nextSteps[0].moduleId, ids[index + 1]);
      for (const p of m.nextSteps[0].prerequisiteSkills || []) {
        assert(learned.has(p.skillId), `${id}: transition exigeant une compétence future`);
      }
    }
    for (const ref of m.consolidation) {
      assert(ids.indexOf(ref.moduleId) >= 0 && ids.indexOf(ref.moduleId) <= index, `${id}: reprise vers un module futur`);
      assert.notEqual(ref.blockId, 'bonus', `${id}: reprise dépendant d'un bonus`);
      assert.notEqual(ref.blockId, 'exploration', `${id}: reprise dépendant de l'exploration facultative`);
    }
    const autonomy = block(id, m.teacherGuide.independentActivity.blockId);
    assert.equal(autonomy.type, 'tasks');
    assert(autonomy.items.length >= 2, `${id}: preuve autonome absente du socle`);
  }
});

test('Python lot 2 : introduction fusionnée, format explicite et transfert distinct', () => {
  for (const id of ids.slice(5, 8)) {
    const m = data.modules[id];
    assert.equal(m.prerequisitesInContent, true);
    assert.equal(m.blocks.filter(b => b.title === 'Avant de commencer').length, 1);
    assert(m.blocks.every(b => !b.title.includes('—')));
    assert(block(id, 'preparer').text.includes('Il faut savoir'));
    assert(block(id, 'autonomie').intro.includes('.py'));
  }
  assert(block('python-calculs', 'conversion').paragraphs.some(p => p.includes('ValueError')));
  assert(block('python-erreurs', 'conversion').paragraphs.some(p => p.includes('n’est pas la gérer')));
  assert(block('python-conditions', 'saisie').paragraphs.some(p => p.includes('ne protège pas')));
});

test('Python revue 5–8 : socle allégé, diagnostic autonome et fichiers conservés', () => {
  const conversation = data.modules['python-conversation'];
  assert.equal(conversation.prerequisitesInContent, true);
  assert(!/Stop\/Restart|—/.test(JSON.stringify(conversation)));
  assert(block('python-conversation', 'verification').items.some(i => i.text.includes('conversation_modifiee.py') && i.text.includes('renomme')));
  assert.equal(block('python-calculs', 'operations').code, 'points = 4\nbonus = 3\ntotal = points + bonus\nprint("Total :", total)');
  assert(!block('python-calculs', 'conversion').paragraphs.some(p => p.includes('int(input')));
  assert(block('python-calculs', 'conversion').paragraphs.some(p => p.includes('Un entier est')));
  const extra = block('python-calculs', 'exploration');
  assert.equal(extra.type, 'details');
  assert(extra.blocks.some(b => b.id === 'priorites'));
  assert(extra.blocks.some(b => b.id === 'ecriture-courte'));
  assert(!block('python-calculs', 'guide').items.some(i => i.id === 'operateurs'));
  for (const [id, file] of [['exemple', 'diagnostic_nom.py'], ['syntaxe', 'diagnostic_syntaxe.py'], ['conversion', 'diagnostic_conversion.py'], ['resultat', 'diagnostic_resultat.py']]) {
    assert(block('python-erreurs', id).paragraphs.some(p => p.includes(file)));
  }
  assert.equal(block('python-erreurs', 'mission').code, 'print(10 - 3)\nmessage = "Bonjour"\nprint(mesage)');
  const independent = block('python-erreurs', 'autonomie').items.find(i => i.id === 'diagnostic-saisie');
  assert(independent.text.includes('Choisis une réponse'));
  assert(!independent.text.includes('ValueError'));
  assert(block('python-conditions', 'saisie').paragraphs[0].includes('choix_saisie.py'));
  assert(block('python-conditions', 'saisie').paragraphs[0].includes('sans indentation'));
});

test('Python lot 3 : plusieurs issues, frontières et projet sans notions cachées', () => {
  function execute(code, input = '') {
    const result = spawnSync(process.env.PYTHON_PATH || 'python', ['-X', 'utf8', '-c', code], { input, encoding: 'utf8', timeout: 5000 });
    assert.ifError(result.error);
    assert.equal(result.status, 0, result.stderr);
    return result.stdout.replace(/\r\n/g, '\n');
  }
  const chain = block('python-elif', 'exemple').code;
  for (const [points, issue] of [[4, 'Patienter'], [5, 'Petit passage'], [9, 'Petit passage'], [10, 'Grand passage'], [12, 'Grand passage']]) {
    assert.equal(execute(chain.replace('points = 10', 'points = ' + points)), issue + '\nFin du choix\n');
    const interactive = block('python-elif', 'saisie').code + '\n' + chain.split('\n').slice(1).join('\n');
    assert.equal(execute(interactive, points + '\n'), 'Points, entier uniquement : ' + issue + '\nFin du choix\n');
  }
  assert.equal(execute(block('python-elif', 'ordre').code), 'Petit passage\n');
  assert.equal(execute(block('python-elif', 'independants').code), 'Grand passage\nPetit passage\n');
  assert(block('python-elif', 'ordre').paragraphs.join(' ').includes('ordre_conditions.py'));
  assert(!block('python-elif', 'ordre').paragraphs.join(' ').includes('premier test >= 5 est déjà vrai'));
  assert(block('python-elif', 'guide').items.find(i => i.id === 'corriger-ordre').hint.includes('premier test >= 5 est déjà vrai'));
  assert(block('python-elif', 'independants').paragraphs.join(' ').includes('conditions_independantes.py'));
  assert(block('python-elif', 'saisie').paragraphs[0].includes('Rouvre possibilites.py'));
  assert(block('python-elif', 'saisie').paragraphs[0].includes('possibilites_saisie.py'));
  assert(block('python-elif', 'autonomie').intro.includes('Enregistre possibilites_saisie.py'));
  for (const filename of ['possibilites.py', 'ordre_conditions.py', 'conditions_independantes.py', 'possibilites_saisie.py']) {
    assert(data.modules['python-elif'].teacherGuide.preparation.join(' ').includes(filename));
  }
  for (const id of ids.slice(8, 10)) {
    assert.equal(data.modules[id].prerequisitesInContent, true);
    assert.equal(data.modules[id].blocks.filter(b => b.title === 'Avant de commencer').length, 1);
    assert(block(id, 'autonomie').intro.includes('.py'));
    assert(data.modules[id].blocks.every(b => !b.title.includes('—')));
  }
  const adventure = data.modules['python-aventure'];
  assert.equal(adventure.type, 'project');
  assert(!adventure.skillIds.includes('python.conversion'));
  assert(adventure.blocks.every(b => !b.code), 'Pas de solution complète publiée');
  assert(block('python-aventure', 'texte').paragraphs.some(p => p.includes('Ne convertis pas')));
  const renameTask = block('python-aventure', 'verification').items.find(i => i.id === 'modifier-route');
  assert(renameTask.text.includes('rappel des choix affiché par else'));
  assert(renameTask.text.includes('un mot inconnu'));
  assert(adventure.teacherGuide.questions.find(q => q.question.startsWith('Renommer')).answer.includes('rappel des choix dans else'));
  // Solution de contrôle originale : jamais publiée dans le cours.
  const solution = 'print("Bienvenue")\npseudo = input("Pseudo : ")\nprint("Bonjour", pseudo)\nlieu = input("Lieu : tour, jardin, grotte : ")\nif lieu == "tour":\n    print("Tu trouves une carte")\nelif lieu == "jardin":\n    print("Tu rencontres un guide")\nelif lieu == "grotte":\n    print("Tu découvres un cristal")\nelse:\n    print("Lieu inconnu : tour, jardin, grotte")\nprint("Fin")';
  for (const [lieu, issue] of [['tour', 'Tu trouves une carte'], ['jardin', 'Tu rencontres un guide'], ['grotte', 'Tu découvres un cristal'], ['lune', 'Lieu inconnu : tour, jardin, grotte'], ['Tour', 'Lieu inconnu : tour, jardin, grotte'], ['tour ', 'Lieu inconnu : tour, jardin, grotte']]) {
    assert.equal(execute(solution, 'Nova\n' + lieu + '\n'), 'Bienvenue\nPseudo : Bonjour Nova\nLieu : tour, jardin, grotte : ' + issue + '\nFin\n');
  }
  const renamed = solution.replaceAll('tour', 'pont');
  assert(execute(renamed, 'Milo\npont\n').includes('Tu trouves une carte\nFin\n'));
  assert(execute(renamed, 'Milo\ntour\n').includes('Lieu inconnu : pont, jardin, grotte\nFin\n'));
  assert(execute(renamed, 'Milo\njardin\n').includes('Tu rencontres un guide\nFin\n'));
  assert(execute(renamed, 'Milo\ngrotte\n').includes('Tu découvres un cristal\nFin\n'));
  const unknownAfterRename = execute(renamed, 'Milo\nlune\n');
  assert(unknownAfterRename.includes('Lieu inconnu : pont, jardin, grotte\nFin\n'));
  assert(!unknownAfterRename.includes('tour'));
});

test('Python lot 4 : bornes, arrêt et accumulation avec transfert distinct', () => {
  function execute(code, input = '') {
    const result = spawnSync(process.env.PYTHON_PATH || 'python', ['-X', 'utf8', '-c', code], { input, encoding: 'utf8', timeout: 3000 });
    assert.ifError(result.error);
    assert.equal(result.status, 0, result.stderr);
    return result.stdout.replace(/\r\n/g, '\n');
  }
  for (const id of ids.slice(10, 13)) {
    const m = data.modules[id];
    assert.equal(m.prerequisitesInContent, true);
    assert.equal(m.blocks.filter(b => b.title === 'Avant de commencer').length, 1);
    assert(m.blocks.every(b => !b.title.includes('—')));
    assert(block(id, 'autonomie').intro.includes('.py'));
    for (const b of m.blocks.filter(b => b.code)) {
      assert(!/while True|\bbreak\b|\bcontinue\b|\bimport\b|\bdef\b|\btry\b|\+=/.test(b.code));
    }
  }
  assert(block('python-for', 'guide').items.some(i => i.text.includes('range(1, 1)')));
  assert(block('python-for', 'guide').items.find(i => i.id === 'bloc').text.startsWith('Rouvre repetitions.py et rétablis range(3).'));
  const repetition = block('python-for', 'exemple').code;
  for (const n of [0, 1, 3, 6]) {
    assert.equal(execute(repetition.replace('range(3)', `range(${n})`)), 'Bonjour !\n'.repeat(n) + 'Fin\n');
  }
  const tours = block('python-for', 'valeurs').code;
  assert.equal(execute(tours), 'Tour 0\nTour 1\nTour 2\nFin\n');
  assert.equal(execute(tours.replace('range(3)', 'range(1, 4)')), 'Tour 1\nTour 2\nTour 3\nFin\n');
  assert.equal(execute(tours.replace('range(3)', 'range(1, 1)')), 'Fin\n');
  // Solutions de contrôle originales non publiées dans les activités autonomes.
  assert.equal(execute('for passage in range(1, 7):\n    print("Étape", passage)\nprint("Terminé")'), Array.from({ length: 6 }, (_, i) => `Étape ${i + 1}\n`).join('') + 'Terminé\n');
  const textual = block('python-while', 'exemple').code;
  const prompt = 'Continuer ? oui pour continuer : ';
  for (const [input, count] of [['non\n', 0], ['oui\nnon\n', 1], ['oui\noui\nnon\n', 2], ['Oui\n', 0], ['oui \n', 0]]) {
    assert.equal(execute(textual, input), prompt + ('Un nouveau tour\n' + prompt).repeat(count) + 'Fin\n');
  }
  const renamed = textual.replaceAll('oui', 'encore');
  assert.equal(execute(renamed, 'encore\nnon\n'), 'Continuer ? encore pour continuer : Un nouveau tour\nContinuer ? encore pour continuer : Fin\n');
  assert.equal(execute(renamed, 'oui\n'), 'Continuer ? encore pour continuer : Fin\n');
  const numeric = block('python-while', 'numerique').code;
  assert.equal(execute(numeric), 'Tour 1\nTour 2\nTour 3\nFin\n');
  for (const start of [4, 5]) assert.equal(execute(numeric.replace('tour = 1', `tour = ${start}`)), 'Fin\n');
  const changedBound = numeric.replace('tour < 4', 'tour < 6');
  assert.equal(execute(changedBound), 'Tour 1\nTour 2\nTour 3\nTour 4\nTour 5\nFin\n');
  for (const start of [6, 7]) assert.equal(execute(changedBound.replace('tour = 1', `tour = ${start}`)), 'Fin\n');
  assert(block('python-while', 'autonomie').items.some(i => i.id === 'borne-personnelle' && i.text.includes('borne_personnelle.py')));
  const counter = data.modules['python-compteurs'];
  assert(counter.teacherGuide.questions.some(q => q.question === 'Après deux réussites à 3 points, que valent le compteur et le score ?' && q.answer.includes('2 réussites') && q.answer.includes('6 points')));
  assert(!counter.prerequisiteSkills.some(p => ['python.while', 'python.conversion'].includes(p.skillId)));
  assert(counter.bonusActivities[0].prerequisiteSkills.some(p => p.skillId === 'python.while'));
  assert.equal(execute(block('python-compteurs', 'exemple').code), 'Score : 8\n');
  assert.equal(execute(block('python-compteurs', 'exemple').code.replace('score + 2', '2')), 'Score : 2\n');
  assert.equal(execute(block('python-compteurs', 'compteur').code), 'Passages : 3\n');
  assert.equal(execute(block('python-compteurs', 'branche').code, 'oui\nnon\noui\n'), 'Objet trouvé ? oui pour confirmer : Trouvé\nObjet trouvé ? oui pour confirmer : Objet trouvé ? oui pour confirmer : Trouvé\nFin\n');
  assert(block('python-compteurs', 'guide').items.some(i => i.id === 'compter-reussites'));
  assert(block('python-compteurs', 'guide').items.find(i => i.id === 'ajouter-score').hint.includes('Deux variables suffisent'));
  const score = 'reussites = 0\nscore = 0\nfor tour in range(4):\n    reponse = input("Trouvé ? oui : ")\n    if reponse == "oui":\n        reussites = reussites + 1\n        score = score + 3\nprint("Réussites :", reussites)\nprint("Score :", score)';
  for (const [input, count] of [['non\nnon\nnon\nnon\n', 0], ['oui\noui\noui\noui\n', 4], ['oui\nnon\noui\nnon\n', 2]]) {
    assert(execute(score, input).endsWith(`Réussites : ${count}\nScore : ${count * 3}\n`));
    assert(execute(score.replace('score + 3', 'score + 2'), input).endsWith(`Réussites : ${count}\nScore : ${count * 2}\n`));
  }
  const newWord = score.replaceAll('oui', 'trouve');
  assert(execute(newWord, 'trouve\noui\ntrouve\nnon\n').endsWith('Réussites : 2\nScore : 6\n'));
  assert(execute(score.replace('    reponse =', '    score = 0\n    reponse ='), 'oui\nnon\noui\nnon\n').endsWith('Réussites : 2\nScore : 0\n'));
  const bonus = 'tours = 0\nscore = 0\nreponse = input("Encore ? oui : ")\nwhile reponse == "oui":\n    tours = tours + 1\n    score = score + 2\n    reponse = input("Encore ? oui : ")\nprint(tours, score)';
  assert(execute(bonus, 'non\n').endsWith('0 0\n'));
  assert(execute(bonus, 'oui\noui\nnon\n').endsWith('2 4\n'));
});

test('Python lot 5 : tirage conservé, projet déterministe et essais sans décalage', () => {
  function execute(code, input = '', succeeds = true) {
    const result = spawnSync(process.env.PYTHON_PATH || 'python', ['-X', 'utf8', '-c', code], { input, encoding: 'utf8', timeout: 3000 });
    assert.ifError(result.error);
    if (succeeds) assert.equal(result.status, 0, result.stderr);
    return { ...result, stdout: result.stdout.replace(/\r\n/g, '\n') };
  }
  const randomLesson = data.modules['python-hasard'];
  const project = data.modules['python-nombre-mystere'];
  assert.equal(project.type, 'project');
  assert(!project.skillIds.includes('python.for'));
  for (const id of ids.slice(13, 15)) {
    assert.equal(data.modules[id].prerequisitesInContent, true);
    assert.equal(data.modules[id].blocks.filter(b => b.title === 'Avant de commencer').length, 1);
    assert(data.modules[id].blocks.every(b => !b.title.includes('—')));
  }
  assert(block('python-hasard', 'preparer').text.includes('Ne nomme pas ton fichier random.py'));
  assert(block('python-nombre-mystere', 'structure').paragraphs.some(p => p.includes('Retire la branche Trouvé')));
  assert(block('python-nombre-mystere', 'autonomie').items.find(i => i.id === 'tests-personnels').text.includes('Choisis toi-même'));
  assert.equal(project.blocks.filter(b => b.code).length, 1, 'Seul le petit exemple != est publié, pas le jeu complet');
  assert.equal(execute(block('python-nombre-mystere', 'difference').code).stdout, 'True\nFalse\n');
  const first = block('python-hasard', 'exemple').code;
  assert.equal(execute(first.replace('randint(1, 6)', 'randint(4, 4)')).stdout, 'Nombre : 4\n');
  const bounds = execute('for verification in range(20):\n' + first.split('\n').map(line => '    ' + line).join('\n')).stdout.trim().split('\n');
  assert.equal(bounds.length, 20);
  for (const output of bounds) assert(/^Nombre : [1-6]$/.test(output));
  // Dispositif réservé aux tests : résultats identiques pour prouver que le nombre
  // d'appels ne se déduit pas de la diversité observée. Jamais publié dans le cours.
  const fixedRandom = 'import random\nappels = []\ndef tirage_controle(a, b):\n    appels.append((a, b))\n    return 4\nrandom.randint = tirage_controle\n';
  for (const [id, count] of [['conserver', 1], ['renouveler', 3]]) {
    assert.equal(execute(fixedRandom + block('python-hasard', id).code + '\nprint("Appels :", len(appels))').stdout, '4\n4\n4\nAppels : ' + count + '\n');
  }
  // Solution originale de contrôle, non publiée ; première conversion avant while.
  const game = 'secret = 6\nreponse = input("Entier de 1 à 10 : ")\nproposition = int(reponse)\nessais = 1\nwhile proposition != secret:\n    if proposition < secret:\n        print("Trop petit")\n    else:\n        print("Trop grand")\n    reponse = input("Entier de 1 à 10 : ")\n    proposition = int(reponse)\n    essais = essais + 1\nprint("Trouvé")\nprint("Essais :", essais)';
  for (const [input, count, small, large] of [['6\n', 1, 0, 0], ['4\n6\n', 2, 1, 0], ['8\n6\n', 2, 0, 1], ['4\n8\n6\n', 3, 1, 1], ['0\n6\n', 2, 1, 0], ['11\n6\n', 2, 0, 1]]) {
    const output = execute(game, input).stdout;
    assert(output.endsWith('Trouvé\nEssais : ' + count + '\n'));
    assert.equal((output.match(/Entier de 1 à 10 : /g) || []).length, count);
    assert.equal((output.match(/Trop petit/g) || []).length, small);
    assert.equal((output.match(/Trop grand/g) || []).length, large);
    assert(!output.split('Trouvé')[1].includes('Entier'), 'Pas de nouvelle question après réussite');
  }
  for (const input of ['cinq\n', '2.5\n', '5 pièces\n', '4\ncinq\n']) {
    const result = execute(game, input, false);
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /ValueError/);
    assert(!result.stdout.includes('Trouvé'));
  }
  const personal = game.replaceAll('1 à 10', '1 à 12').replace('secret = 6', 'secret = 7');
  for (const [input, count] of [['7\n', 1], ['2\n7\n', 2], ['11\n7\n', 2], ['2\n11\n7\n', 3]]) {
    assert(execute(personal, input).stdout.endsWith('Essais : ' + count + '\n'));
  }
  for (const secret of [1, 12]) {
    assert(execute(personal.replace('secret = 7', 'secret = ' + secret), secret + '\n').stdout.endsWith('Trouvé\nEssais : 1\n'));
  }
  const controlledGame = fixedRandom + game.replace('secret = 6', 'secret = random.randint(1, 10)') + '\nprint("Appels :", len(appels))\nprint("Bornes :", appels[0])';
  const controlledOutput = execute(controlledGame, '2\n8\n4\n').stdout;
  assert(controlledOutput.endsWith('Trouvé\nEssais : 3\nAppels : 1\nBornes : (1, 10)\n'));
  assert.equal(execute(fixedRandom + personal.replace('secret = 7', 'secret = random.randint(1, 12)') + '\nprint(appels)', '4\n').stdout.split('\n').at(-2), '[(1, 12)]');
  assert(!game.includes('print(secret)'), 'Pas de révélation du secret dans la version finale de contrôle');
  assert(randomLesson.teacherGuide.preparation.some(text => text.includes('jamais random.py')));
});

test('Python lot 6 : listes, texte, cas vides et transfert de casse', () => {
  const execute = (code, input = '', success = true) => {
    const r = spawnSync(process.env.PYTHON_PATH || 'python', ['-X', 'utf8', '-c', code], { input, encoding: 'utf8', timeout: 5000 });
    assert.ifError(r.error);
    if (success) assert.equal(r.status, 0, r.stderr);
    return { ...r, stdout: r.stdout.replace(/\r\n/g, '\n') };
  };
  for (const id of ids.slice(15)) {
    const m = data.modules[id];
    assert.equal(m.prerequisitesInContent, true);
    assert.equal(m.blocks.filter(b => b.title === 'Avant de commencer').length, 1);
    assert(m.blocks.every(b => !b.title.includes('—')));
    assert(!m.prerequisiteSkills.some(p => ['python.random', 'python.while'].includes(p.skillId)));
  }
  const first = block('python-listes', 'exemple').code;
  assert.equal(execute(first).stdout, "['carte', 'corde', 'lampe']\ncarte\n");
  assert.equal(execute(first + '\nprint(objets[2])\nprint(len(objets))').stdout, "['carte', 'corde', 'lampe']\ncarte\nlampe\n3\n");
  const traversal = block('python-listes', 'parcours').code;
  assert.equal(execute(traversal).stdout, 'Objet : carte\nObjet : corde\nObjet : lampe\nFin\n');
  const augmented = traversal + '\n' + block('python-listes', 'ajout').code + '\nfor objet in objets:\n    print(objet)';
  assert(execute(augmented).stdout.endsWith("['carte', 'corde', 'lampe', 'boussole']\n4\ncarte\ncorde\nlampe\nboussole\n"));
  assert.equal(execute(traversal.replace('["carte", "corde", "lampe"]', '[]') + '\nprint(len(objets))').stdout, 'Fin\n0\n');
  const badIndex = execute('objets = ["carte", "corde", "lampe"]\nprint(objets[3])', '', false);
  assert.notEqual(badIndex.status, 0);
  assert.match(badIndex.stderr, /IndexError/);
  assert(block('python-listes', 'guide').items.find(i => i.id === 'parcours-ajout').text.includes('Dans parcours_liste.py'));
  // Solutions de contrôle originales, réservées aux tests, pas publiées dans l'autonomie.
  const collection = 'objets = ["pierre", "bois", "clef"]\nprint(len(objets))\nfor objet in objets:\n    print(objet)\nprint(objets[0])\nprint(objets[2])\nobjets.append("livre")\nprint(len(objets))\nfor objet in objets:\n    print(objet)';
  assert.equal(execute(collection).stdout, '3\npierre\nbois\nclef\npierre\nclef\n4\npierre\nbois\nclef\nlivre\n');
  assert(execute(collection.replace('"bois"', '"corde"')).stdout.includes('pierre\ncorde\nclef'));
  const text = block('python-texte', 'exemple').code;
  assert.equal(execute(text).stdout, '4\nC\no\nd\ne\n');
  assert.equal(execute(text.replace('"Code"', '""')).stdout, '0\n');
  assert.equal(execute(text + '\nprint(mot[0])\nprint(mot[3])').stdout, '4\nC\no\nd\ne\nC\ne\n');
  assert.match(execute(text + '\nprint(mot[4])', '', false).stderr, /IndexError/);
  const transformation = block('python-texte', 'transformation').code;
  assert.equal(execute(transformation + '\nreponse.lower()\nprint(reponse)').stdout, 'Original :   TOUR  \nPréparé : tour\n  TOUR  \n');
  const comparison = block('python-texte', 'comparaison').code;
  for (const [input, accepted] of [['tour', true], ['Tour', true], ['  TOUR  ', true], ['TO UR', false], ['lune', false], ['', false], ['   ', false]]) {
    assert.equal(execute(comparison, input + '\n').stdout, 'Écris tour : ' + (accepted ? 'Accepté' : 'Refusé') + '\n');
  }
  const personal = comparison.replaceAll('tour', 'porte');
  for (const [input, accepted] of [[' PORTE ', true], ['tour', false]]) assert(execute(personal, input + '\n').stdout.endsWith((accepted ? 'Accepté' : 'Refusé') + '\n'));
  const sensitive = personal.replace('normalisee = sans_bords.lower()', 'normalisee = sans_bords');
  for (const [input, accepted] of [['Porte', false], [' porte ', true], ['', false]]) assert(execute(sensitive, input + '\n').stdout.endsWith((accepted ? 'Accepté' : 'Refusé') + '\n'));
  const transfer = block('python-texte', 'transfert').items[0];
  assert(transfer.text.includes('mon_mot_casse.py'));
  assert(transfer.text.includes('par normalisee = sans_bords'));
  assert(transfer.text.includes('Actualise la question'));
  assert.equal(execute(block('python-texte', 'remplacement').code).stdout, 'Bonjour, voyageur !\nBonjour, pilote !\n');
});

test('Python : routes directes et contexte du parcours uniquement lorsqu’il est compatible', () => {
  for (const id of ids) {
    assert.equal(ui.url({ moduleId: id }), '#module/' + id);
    assert.equal(ui.url({ moduleId: id }, 'python-debutants'), '#module/' + id + '?parcours=python-debutants');
    assert.equal(ui.url({ moduleId: id }, 'web-debutants'), '#module/' + id);
  }
  assert.equal(data.aliases.debutants, 'parcours/web-debutants');
});

test('Python : exemples exécutés dans des processus propres, sorties et erreurs attendues', () => {
  function execute(code, input = '') {
    const result = spawnSync(process.env.PYTHON_PATH || 'python', ['-X', 'utf8', '-c', code], { input, encoding: 'utf8', timeout: 5000 });
    assert.ifError(result.error);
    return { ...result, stdout: result.stdout.replace(/\r\n/g, '\n') };
  }
  const cases = [
    ['python-thonny', 'exemple', '', 'Bonjour !\n'],
    ['python-affichage', 'exemple', '', 'Bienvenue !\nVoici mon premier programme.\n'],
    ['python-variables', 'exemple', '', 'Luna\npersonnage\n'],
    ['python-variables', 'changer', '', 'Luna\nMilo\n'],
    ['python-saisie', 'exemple', 'Nova\n', 'Quel pseudo choisis-tu ? Bienvenue Nova\n'],
    ['python-saisie', 'exemple', '12\n', 'Quel pseudo choisis-tu ? Bienvenue 12\n'],
    ['python-calculs', 'exemple', '', '15\n123\n12 + 3\n'],
    ['python-calculs', 'operations', '', 'Total : 7\n'],
    ['python-calculs', 'conversion', '5\n', 'Combien de pièces ? Entier uniquement : Avec le bonus : 7\n'],
    ['python-calculs', 'conversion', '0\n', 'Combien de pièces ? Entier uniquement : Avec le bonus : 2\n'],
    ['python-erreurs', 'conversion', '5\n', 'Points, entier uniquement : 7\n'],
    ['python-erreurs', 'resultat', '', '3\n'],
    ['python-conditions', 'comparer', '', 'True\nFalse\nTrue\n'],
    ['python-conditions', 'exemple', '', 'Passage ouvert\nFin du test\n']
  ];
  for (const [id, name, input, expected] of cases) {
    const result = execute(block(id, name).code, input);
    assert.equal(result.status, 0, result.stderr);
    assert.equal(result.stdout, expected);
  }
  assert.match(execute(block('python-affichage', 'erreur').code).stderr, /SyntaxError/);
  assert.match(execute(block('python-variables', 'erreur').code).stderr, /NameError/);
  assert.match(execute(block('python-erreurs', 'exemple').code).stderr, /NameError/);
  assert.match(execute(block('python-erreurs', 'syntaxe').code).stderr, /SyntaxError/);
  const extra = block('python-calculs', 'exploration').blocks;
  for (const [id, input, expected] of [['autres-operations', '', '6\n16\n4.0\n'], ['priorites', '', '20\n14\n'], ['ecriture-courte', '5\n', 'Pièces, entier uniquement : 5\n']]) {
    const result = execute(extra.find(b => b.id === id).code, input);
    assert.equal(result.status, 0, result.stderr);
    assert.equal(result.stdout, expected);
  }
  const brokenMission = execute(block('python-erreurs', 'mission').code);
  assert.match(brokenMission.stderr, /NameError/);
  assert.equal(brokenMission.stdout, '7\n');
  const fixedMission = block('python-erreurs', 'mission').code.replace('10 - 3', '10 + 3').replace('print(mesage)', 'print(message)');
  assert.equal(execute(fixedMission).stdout, '13\nBonjour\n');
  assert.equal(execute(fixedMission.replace('10 + 3', '4 + 3')).stdout, '7\nBonjour\n');
  for (const input of ['cinq\n', '2.5\n', '5 pièces\n']) {
    const failed = execute(block('python-calculs', 'conversion').code, input);
    assert.notEqual(failed.status, 0);
    assert.match(failed.stderr, /ValueError/);
    assert(!failed.stdout.includes('Avec le bonus :'));
  }
  assert.match(execute(block('python-erreurs', 'conversion').code, 'cinq\n').stderr, /ValueError/);
  const decision = block('python-conditions', 'exemple').code;
  for (const points of [9, 10, 11]) {
    const expected = (points < 10 ? 'Encore quelques points' : 'Passage ouvert') + '\nFin du test\n';
    const fixed = execute(decision.replace('points = 10', 'points = ' + points));
    assert.equal(fixed.status, 0, fixed.stderr);
    assert.equal(fixed.stdout, expected);
    const interactive = block('python-conditions', 'saisie').code + '\n' + decision.split('\n').slice(1).join('\n');
    const result = execute(interactive, points + '\n');
    assert.equal(result.status, 0, result.stderr);
    assert.equal(result.stdout, 'Points, entier uniquement : ' + expected);
  }
  assert.equal(execute(decision.replace('>=', '>')).stdout, 'Encore quelques points\nFin du test\n');
  assert.match(execute(decision.replace('    print("Passage ouvert")', 'print("Passage ouvert")')).stderr, /IndentationError/);
  const correctedName = execute(block('python-erreurs', 'exemple').code.replace('print(point +', 'print(points +'));
  assert.equal(correctedName.status, 0);
  assert.equal(correctedName.stdout, '7\n');
  const correctedCalculation = execute(block('python-erreurs', 'resultat').code.replace('points - bonus', 'points + bonus'));
  assert.equal(correctedCalculation.status, 0);
  assert.equal(correctedCalculation.stdout, '7\n');
  assert.equal(block('python-conversation', 'plan').code, undefined, 'Pas de solution complète dans le projet');
  // Solution de test originale : n'est pas affichée sur la page du projet.
  const conversation = 'print("Bienvenue !")\npseudo = input("Pseudo ? ")\nlieu = input("Lieu ? ")\nactivite = input("Activité ? ")\nprint("Bonjour", pseudo)\nprint("Destination", lieu)\nprint("Programme", activite)';
  for (const [input, ending] of [
    ['Nova\nLune\nDessiner\n', 'Bonjour Nova\nDestination Lune\nProgramme Dessiner\n'],
    ['Milo\nForêt\nExplorer\n', 'Bonjour Milo\nDestination Forêt\nProgramme Explorer\n']
  ]) {
    const result = execute(conversation, input);
    assert.equal(result.status, 0, result.stderr);
    assert(result.stdout.endsWith(ending));
  }
});

test('Python : manipulation explicite et aucune validation ni écriture privée automatique', () => {
  assert(block('python-thonny', 'reperes').paragraphs.some(p => p.includes('>>>')));
  const diagram = block('python-thonny', 'reperes').codeDiagram;
  assert(diagram.note);
  assert.equal(diagram.title, undefined);
  assert.equal(diagram.filename, 'bonjour.py');
  assert.equal(Array.from(diagram.codeParts, p => p.text).join(''), block('python-thonny', 'exemple').code);
  assert.equal(diagram.output, 'Bonjour !');
  const diagramRenderer = fs.readFileSync(path.join(root, 'app.js'), 'utf8').split('function createCodeDiagram(config) {')[1].split('function createLesson')[0];
  assert(!/innerHTML|createElement\(['"]button/.test(diagramRenderer));
  assert(!/File →|View →|This computer|Stop\/Restart|\(Shell\)|\(Run,/.test(JSON.stringify(data.modules['python-thonny'])));
  assert.equal(data.modules['python-thonny'].prerequisitesInContent, true);
  assert(!block('python-thonny', 'preparer').text.includes('adulte'));
  assert(data.modules['python-thonny'].blocks.every(b => !b.title.includes('—')));
  assert(block('python-saisie', 'exemple').paragraphs.some(p => p.includes('virgule')));
  assert(block('python-saisie', 'exemple').paragraphs.some(p => p.includes('même si tu réponds avec des chiffres')));
  assert(block('python-conversation', 'preparer').text.includes('ne les efface pas'));
  const doc = model.create('Test fictif');
  const before = model.serialize(doc);
  for (const id of ids) {
    ui.target({ moduleId: id });
    for (const skill of data.modules[id].skillIds) assert.equal(model.getProgress(doc, 'absent', skill).status, 'not-started');
  }
  assert.equal(model.serialize(doc), before);
  model.addClass(doc, { id: 'c', name: 'Classe fictive' });
  model.addStudent(doc, { id: 's', name: 'Élève fictif', classId: 'c' });
  model.updateProgress(doc, 's', 'python.input', { status: 'in-progress', note: 'Question créée avec aide' });
  const copy = model.parse(model.serialize(doc), data).document;
  assert.equal(model.getProgress(copy, 's', 'python.input').status, 'in-progress');
  assert.equal(model.getProgress(copy, 's', 'python.variables').status, 'not-started');
  assert.equal(copy.frameworkProgress.length, 0);
});
