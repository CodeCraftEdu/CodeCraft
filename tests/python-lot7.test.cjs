const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { spawnSync } = require('node:child_process');
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(__dirname, '..', 'lesson-data.js'), 'utf8'), sandbox);
const data = sandbox.window.CODECRAFT_DATA;
const ids = ['python-fonctions', 'python-retour', 'python-quiz'];
const block = (id, name) => data.modules[id].blocks.find(b => b.id === name);
function execute(code, input = '', success = true) {
  const r = spawnSync(process.env.PYTHON_PATH || 'python', ['-X', 'utf8', '-c', code],
    { input, encoding: 'utf8', timeout: 5000 });
  assert.ifError(r.error);
  if (success) assert.equal(r.status, 0, r.stderr);
  return { ...r, stdout: r.stdout.replace(/\r\n/g, '\n') };
}

test('Python lot 7 : contrats, transfert et aides spécifiques sans solution complète', () => {
  for (const id of ids) {
    const m = data.modules[id];
    assert.equal(m.prerequisitesInContent, true);
    assert.equal(m.blocks.filter(b => b.title === 'Avant de commencer').length, 1);
    assert(m.masteryCriteria.length >= 4);
    assert.equal(m.teacherGuide.accompaniedActivity.blockId, 'guide');
    assert.equal(m.teacherGuide.independentActivity.blockId, 'autonomie');
    assert(m.teacherGuide.questions.length >= 6);
    assert(m.teacherGuide.notes.includes('manuel'));
    const allTasks = m.blocks.flatMap(b => b.items || []).map(t => t.id);
    assert.equal(new Set(allTasks).size, allTasks.length);
    assert(m.blocks.every(b => !b.title.includes('—')));
  }
  assert.equal(data.modules['python-fonctions'].skillIds[0], 'python.functions');
  assert.equal(data.modules['python-retour'].skillIds[0], 'python.return');
  assert(data.modules['python-fonctions'].teacherGuide.commonErrors.every(e => !JSON.stringify(e).includes('return')));
  assert(data.modules['python-fonctions'].bonusActivities[0].prerequisiteSkills.some(p => p.skillId === 'python.for'));
  assert(data.modules['python-fonctions'].bonusActivities[0].prerequisiteSkills.some(p => p.skillId === 'python.lists'));
  const quiz = data.modules['python-quiz'];
  assert.equal(quiz.type, 'project');
  assert.equal(quiz.blocks.filter(b => b.code).length, 0);
  assert(!quiz.skillIds.includes('python.lists'));
  assert(!quiz.skillIds.includes('python.random'));
  assert.equal(quiz.nextSteps.length, 0);
  assert(block('python-quiz', 'autonomie').items.some(t => t.text.includes('quiz_variante.py')));
  assert(block('python-quiz', 'bonus').items[0].text.includes('copie'));
});

test('Python finitions : affectation explicite, titre adapté et bonus indépendants', () => {
  const textHint = block('python-texte', 'autonomie').items.find(t => t.id === 'mot-personnel').hint;
  assert(textHint.includes('input renvoie le texte saisi'));
  assert(textHint.includes("l'affectation à reponse le conserve"));
  assert(!textHint.includes('input conserve'));
  assert.equal(block('python-retour', 'autonomie').title, 'À toi - créer et réutiliser des résultats');
  assert.deepEqual(Array.from(block('python-quiz', 'bonus').items, t => t.id), ['quatrieme-question']);
  const message = block('python-quiz', 'bonus-message');
  assert.equal(message.title, 'Bonus - un retour au joueur');
  assert(message.intro.includes('indépendant'));
  assert.equal(message.items[0].id, 'retour-joueur');
  assert(message.items[0].text.includes('avant le return'));
  assert.deepEqual(Array.from(data.modules['python-quiz'].bonusActivities, a => a.blockId), ['bonus', 'bonus-message']);
});

test('Python fonctions : définition, appels, arguments et diagnostic isolé', () => {
  const first = block('python-fonctions', 'exemple').code;
  assert.equal(execute(first).stdout, 'Préparation\nPrépare ton matériel\nDépart de la visite\nFin\n');
  assert.equal(execute(first.replace('\nannoncer()\n', '\n')).stdout, 'Préparation\nFin\n');
  assert.equal(execute(first.replace('\nannoncer()\n', '\nannoncer()\nannoncer()\n')).stdout,
    'Préparation\nPrépare ton matériel\nDépart de la visite\nPrépare ton matériel\nDépart de la visite\nFin\n');
  const changed = first.replace('Départ de la visite', 'Départ du trajet').replace('\nannoncer()\n', '\nannoncer()\nannoncer()\n');
  assert.equal((execute(changed).stdout.match(/Départ du trajet/g) || []).length, 2);
  const param = block('python-fonctions', 'parametre').code;
  assert.equal(execute(param).stdout, 'Bonjour Nova\nBonjour Orion\n');
  const missing = execute(param.replace('saluer("Nova")', 'saluer()'), '', false);
  assert.notEqual(missing.status, 0);
  assert.match(missing.stderr, /TypeError/);
  const two = block('python-fonctions', 'deux-parametres').code;
  assert.equal(execute(two).stdout, 'Nova est pilote\nOrion est guide\n');
  assert.equal(execute(two.replace('presenter("Nova", "pilote")', 'presenter("pilote", "Nova")')).stdout,
    'pilote est Nova\nOrion est guide\n');
  // Création de contrôle originale, distincte du modèle élève.
  const personal = 'def accueillir(nom, lieu):\n    print("Bienvenue")\n    print(nom, "arrive à", lieu)\n\naccueillir("A", "la tour")\naccueillir("B", "la gare")\naccueillir("C", "la forêt")';
  assert.equal(execute(personal).stdout, 'Bienvenue\nA arrive à la tour\nBienvenue\nB arrive à la gare\nBienvenue\nC arrive à la forêt\n');
  assert(execute(personal.replace('arrive à', 'visite')).stdout.includes('C visite la forêt'));
});

test('Python return : résultats réutilisés, None, noms locaux et deux issues', () => {
  const first = block('python-retour', 'exemple').code;
  assert.equal(execute(first).stdout, '5\n6\n');
  assert.equal(execute(first.replace('ajouter_bonus(3)', 'ajouter_bonus(0)')).stdout, '2\n3\n');
  const display = block('python-retour', 'afficher-ou-retourner').code;
  assert.equal(execute(display).stdout, '5\nNone\n');
  assert.equal(execute(display.replace('print(nombre + 2)', 'return nombre + 2')).stdout, '5\n');
  const local = block('python-retour', 'local').code;
  assert.equal(execute(local).stdout, '8\n100\n');
  const inaccessible = execute(local + '\nprint(resultat_local)', '', false);
  assert.notEqual(inaccessible.status, 0);
  assert.match(inaccessible.stderr, /NameError/);
  assert.equal(execute(local.replaceAll('valeur_exterieure', 'nombre')).stdout, '8\n100\n');
  assert(block('python-retour', 'local').paragraphs[2].includes('sans changer la fonction'));
  assert.equal(execute(local + '\nresultat_exterieur = doubler(5)\nprint(resultat_exterieur)').stdout, '8\n100\n10\n');
  const comparison = block('python-retour', 'deux-issues').code;
  assert.equal(execute(comparison).stdout, '1\n0\n0\n');
  assert.equal(execute(comparison + '\nprint(attribuer_point("", ""))').stdout, '1\n0\n0\n1\n');
  assert.equal(execute(comparison.replace('        return 0', '        print("Refusé")')).stdout, '1\nRefusé\nNone\nRefusé\nNone\n');
  const stopping = 'def choix():\n    return 4\n    print("Jamais")\nprint(choix())\nprint("Suite")';
  assert.equal(execute(stopping).stdout, '4\nSuite\n');
  const reuse = 'def ajouter_bonus(nombre):\n    bonus = 2\n    return nombre + bonus\npremier = ajouter_bonus(3)\nsecond = ajouter_bonus(0)\nprint(premier + second)';
  assert.equal(execute(reuse).stdout, '7\n');
});

test('Python revue 7 : fichiers limités et transfert autonome des deux branches', () => {
  const functions = data.modules['python-fonctions'];
  const discovery = functions.blocks.filter(b => b.type === 'lesson').map(b => b.paragraphs.join(' ')).join(' ');
  assert(!/salutations\.py|presentation\.py/.test(discovery));
  assert(discovery.includes('fonctions.py'));
  assert(block('python-fonctions', 'guide').items[0].text.includes('troisième appel'));
  const autonomy = block('python-retour', 'autonomie');
  assert(autonomy.items.some(t => t.id === 'regle-personnelle' && t.text.includes('égal, différent et vide')));
  assert(autonomy.items.some(t => t.id === 'transfert-regle' && t.text.includes('sans modifier la définition')));
  const personal = 'def verifier(proposition, attendue):\n    if proposition == attendue:\n        return 1\n    else:\n        return 0\n\npremier = verifier("porte", "porte")\nsecond = verifier("tour", "porte")\ntroisieme = verifier("", "porte")\nprint(premier, second, troisieme)';
  assert.equal(execute(personal).stdout, '1 0 0\n');
  assert.equal(execute(personal.replaceAll(', "porte")', ', "tour")')).stdout, '0 1 0\n');
});

// Solution originale réservée à la recette. Aucun programme complet du quiz
// n'est publié dans lesson-data.js. Pas de donnée ou acquis privé écrit.
const quiz = [
  'def poser_question(question, attendue):',
  '    reponse = input(question)',
  '    sans_bords = reponse.strip()',
  '    normalisee = sans_bords.lower()',
  '    if normalisee == attendue:',
  '        return 1',
  '    else:',
  '        return 0',
  '',
  'score = 0',
  'points = poser_question("Couleur : ", "bleu")',
  'score = score + points',
  'points = poser_question("Lieu : ", "tour")',
  'score = score + points',
  'points = poser_question("Animal : ", "chat")',
  'score = score + points',
  'print("Score :", score, "sur 3")'
].join('\n');

test('Python revue 7 : passage explicite à la saisie et un seul appel compté', () => {
  const tasks = block('python-quiz', 'guide').items;
  assert.deepEqual(Array.from(tasks, t => t.id),
    ['fonction-question', 'saisie-locale', 'preparer-reponse', 'verifier-question', 'debut-score']);
  assert(tasks[0].text.includes('et non la réponse du joueur'));
  assert(tasks[1].hint.includes('reponse = input(question)'));
  assert(tasks[2].hint.includes('pas sur reponse'));
  assert(tasks[4].text.includes('Ne conserve pas un ancien appel de test en plus'));
  assert(block('python-quiz', 'autonomie').items[0].text.includes('ajoute deux appels'));
  const student = data.modules['python-quiz'].blocks;
  assert(!JSON.stringify(student).includes('input(question) conserve'));
  assert(!/dictionnaire|liste de listes|global|Aucun code complet/.test(JSON.stringify(student)));
  const functionOnly = quiz.slice(0, quiz.indexOf('score = 0'));
  const one = functionOnly + 'score = 0\npoints = poser_question("Lieu : ", "tour")\nscore = score + points\nprint(score)';
  for (const [answer, result] of [[' TOUR ', 1], ['lune', 0], ['', 0]]) {
    const output = execute(one, answer + '\n').stdout;
    assert.equal(output, 'Lieu : ' + result + '\n');
  }
  const exact = one.replace('if normalisee == attendue:', 'if reponse == attendue:');
  assert.equal(execute(exact, 'TOUR\n').stdout, 'Lieu : 0\n');
  assert.equal(execute(exact, 'tour\n').stdout, 'Lieu : 1\n');
});

test('Python quiz : scores, vide, casse, espaces et limites annoncées', () => {
  for (const [input, score] of [
    ['bleu\ntour\nchat\n', 3], ['rouge\nlune\nchien\n', 0],
    ['bleu\nlune\n\n', 1], ['\ntour\nchat\n', 2], ['\n\n\n', 0],
    ['  BLEU  \nToUr\n CHAT \n', 3], ['ble u\nto ur\nch at\n', 0],
    ['bléu\ntoür\nchât\n', 0], ['   \n   \n   \n', 0]
  ]) {
    const output = execute(quiz, input).stdout;
    assert(output.endsWith('Score : ' + score + ' sur 3\n'));
    assert.equal((output.match(/Couleur : /g) || []).length, 1);
    assert.equal((output.match(/Lieu : /g) || []).length, 1);
    assert.equal((output.match(/Animal : /g) || []).length, 1);
  }
  assert(execute(quiz, 'bleu\ntour\nchat\n').stdout.endsWith('Score : 3 sur 3\n'));
  assert(execute(quiz, 'non\nnon\nnon\n').stdout.endsWith('Score : 0 sur 3\n'));
});

test('Python quiz : changement personnel et quatrième question sans recopier le corps', () => {
  const personal = quiz.replace('"Couleur : ", "bleu"', '"Forme : ", "cercle"');
  const newAnswer = execute(personal, ' CERCLE \ntour\nchat\n').stdout;
  assert(newAnswer.startsWith('Forme : '));
  assert(!newAnswer.includes('Couleur : '));
  assert(newAnswer.endsWith('Score : 3 sur 3\n'));
  assert(execute(personal, 'bleu\ntour\nchat\n').stdout.endsWith('Score : 2 sur 3\n'));
  const four = personal.replace('print("Score :", score, "sur 3")',
    'points = poser_question("Objet : ", "clef")\nscore = score + points\nprint("Score :", score, "sur 4")');
  assert.equal((four.match(/def poser_question/g) || []).length, 1);
  assert(execute(four, 'cercle\ntour\nchat\nclef\n').stdout.endsWith('Score : 4 sur 4\n'));
  assert(execute(four, 'cercle\ntour\nchat\nporte\n').stdout.endsWith('Score : 3 sur 4\n'));
});
