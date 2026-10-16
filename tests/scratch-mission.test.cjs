const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const { loadCatalog } = require('../scripts/catalog/load-catalog.cjs');
const { validateSource } = require('../scripts/catalog/validate-schema.cjs');
const { publicFile } = require('../scripts/lib/public-files.cjs');
const { studentDom } = require('./helpers/student-dom.cjs');
const { readScratchProject } = require('./helpers/scratch-project.cjs');
const data = loadCatalog();
const ids = [
  'scratch-mission-commandes',
  'scratch-mission-balises',
  'scratch-mission-vies',
  'scratch-mission-clones',
  'scratch-mission-messages',
  'scratch-mission-etats',
  'scratch-mission-tests',
];
const blocks = (items) => items.flatMap((b) => [b, ...blocks(b.blocks || [])]);

test('Mission balises : chapitres cumulatifs et navigation distincte des reprises', (t) => {
  assert.deepEqual(data.pathways['scratch-avances'].moduleIds, ids);
  assert.equal(data.pathways['scratch-debutants'].moduleIds.length, 17);
  const dom = studentDom(data);
  t.after(() => dom.close());
  for (let i = 0; i < ids.length; i++) {
    dom.navigate('#module/' + ids[i] + '?parcours=scratch-avances');
    const next = dom.main.querySelector('.module-navigation__next');
    assert.equal(
      next?.hash,
      ids[i + 1] ? '#module/' + ids[i + 1] + '?parcours=scratch-avances' : undefined,
    );
    const active = dom.main.querySelector('[aria-current="page"]');
    assert(active);
    const mandatory = dom.main.querySelector(
      '[data-activity-id="' +
        ['horizontal', 'collecte', 'contact', 'fabrique', 'declenchement', 'decision', 'limites'][
          i
        ] +
        '"]',
    );
    assert.equal(mandatory.closest('details'), null);
    assert(mandatory.querySelector(i === 6 ? 'input[type=checkbox]' : '.scratch-quick-steps'));
    assert.equal(dom.main.querySelector('[data-activity-id="modeles"]').open, false);
    assert(
      dom.main
        .querySelector('[data-activity-id="reprise"]')
        .textContent.includes('mission-0' + (i + 1) + '.sb3'),
    );
    const links = [...dom.main.querySelectorAll('.lesson-note a')];
    assert(links.length);
    for (const link of links) {
      assert.equal(link.target, '_blank');
      assert(link.rel.includes('noopener'));
      assert(link.rel.includes('noreferrer'));
      assert(!link.hash.includes('parcours=scratch-avances'));
      assert.match(link.textContent, /autre onglet/);
    }
  }
});

function visualOpcode(block) {
  const first = block.parts[0];
  if (first === 'quand le ') return 'event_whenflagclicked';
  if (first === 'quand je reçois ') return 'event_whenbroadcastreceived';
  if (first === 'envoyer à tous ') return 'event_broadcast';
  if (first === 'aller à x: ') return 'motion_gotoxy';
  if (first === 'dire ')
    return block.parts.includes(' pendant ') ? 'looks_sayforsecs' : 'looks_say';
  if (first === 'montrer') return 'looks_show';
  if (first === 'cacher') return 'looks_hide';
  if (first === 'quand je commence comme un clone') return 'control_start_as_clone';
  if (first === 'créer un clone de ') return 'control_create_clone_of';
  if (first === 'supprimer ce clone') return 'control_delete_this_clone';
  if (first === 'répéter jusqu’à ce que ') return 'control_repeat_until';
  if (first === 'basculer sur l’arrière-plan ') return 'looks_switchbackdropto';
  if (first === 'répéter indéfiniment') return 'control_forever';
  if (first === 'si ')
    return Object.hasOwn(block, 'elseChildren') ? 'control_if_else' : 'control_if';
  if (first === 'attendre jusqu’à ce que ') return 'control_wait_until';
  if (first === 'attendre ') return 'control_wait';
  if (first === 'stop ') return 'control_stop';
  if (first === 'mettre ') return 'data_setvariableto';
  if (first.startsWith('mettre ')) return 'motion_set' + first.split(' ')[1];
  if (first === 'ajouter ')
    return block.parts[2] === ' à x'
      ? 'motion_changexby'
      : block.parts[2] === ' à y'
        ? 'motion_changeyby'
        : 'data_changevariableby';
  throw new Error('Unknown visual block: ' + first);
}
function visualShape(block) {
  const result = { opcode: visualOpcode(block) };
  if (block.children) result.children = block.children.map(visualShape);
  if (block.elseChildren) result.elseChildren = block.elseChildren.map(visualShape);
  return result;
}
function nativeChain(target, id) {
  const result = [];
  while (id) {
    const block = target.blocks[id];
    const row = { opcode: block.opcode };
    for (const [slot, key] of [
      ['SUBSTACK', 'children'],
      ['SUBSTACK2', 'elseChildren'],
    ]) {
      if (block.inputs[slot]) row[key] = nativeChain(target, block.inputs[slot][1]);
    }
    result.push(row);
    id = block.next;
  }
  return result;
}

test('Mission balises : les modèles complets conservent les mêmes piles et branches que les archives', () => {
  for (const [index, name, owners] of [
    [0, 'commandes', ['Pilote']],
    [1, 'balises', ['Stage', 'Balise']],
    [2, 'vies', ['Stage', 'Obstacle']],
    [3, 'clones', ['Obstacle']],
    [4, 'messages', ['Stage', 'Obstacle']],
    [5, 'etats', ['Stage', 'Pilote', 'Balise', 'Obstacle']],
  ]) {
    const { project } = readScratchProject(
      path.join(__dirname, '../assets/scratch/mission/mission-' + name + '.sb3'),
    );
    for (const owner of owners) {
      const target = project.targets.find((t) => t.name === owner);
      const hats = Object.entries(target.blocks).filter(
        ([, b]) =>
          b.topLevel &&
          (index !== 4 || owner !== 'Obstacle' || b.opcode === 'event_whenbroadcastreceived'),
      );
      for (const [position, [hat]] of hats.entries()) {
        const modelId =
          index === 5
            ? {
                Stage: ['modele-scene', 'modele-decor'],
                Pilote: ['modele-pilote', 'modele-annonce'],
                Balise: ['modele-balise'],
                Obstacle: ['modele-fabrique', 'modele-clone', 'modele-vitesse'],
              }[owner][position]
            : index === 4
              ? owner === 'Stage'
                ? ['modele-scene', 'modele-decor'][position]
                : 'modele-vitesse'
              : index === 3
                ? ['modele-fabrique', 'modele-clone'][position]
                : 'modele-' + (owner === 'Stage' ? 'scene' : owner.toLowerCase());
        const model = blocks(data.modules[ids[index]].blocks).find((b) => b.id === modelId);
        assert.deepEqual(
          model.visualScript.blocks.map(visualShape),
          nativeChain(target, hat),
          ids[index] + '/' + modelId,
        );
      }
    }
  }
  const { project: base } = readScratchProject(
    path.join(__dirname, '../assets/scratch/mission/mission-base.sb3'),
  );
  assert(base.targets.every((target) => Object.keys(target.blocks).length === 0));
  for (const id of ids) {
    for (const block of blocks(data.modules[id].blocks)) {
      for (const download of block.downloads || []) {
        const served = publicFile(path.join(__dirname, '..'), '/' + download.path);
        assert(served, download.path);
        assert.equal(served.type, 'application/zip');
      }
    }
  }
});

test('Mission Tests : laboratoire de relance isolé, indices repliés et référence avant personnalisation', (t) => {
  const { project: before } = readScratchProject(
    path.join(__dirname, '../assets/scratch/mission/mission-etats.sb3'),
  );
  const { project: fault } = readScratchProject(
    path.join(__dirname, '../assets/scratch/mission/mission-panne-relance.sb3'),
  );
  for (const name of ['Pilote', 'Balise', 'Obstacle']) {
    assert.deepEqual(
      fault.targets.find((a) => a.name === name),
      before.targets.find((a) => a.name === name),
    );
  }
  const originalStage = before.targets.find((a) => a.isStage);
  const stage = fault.targets.find((a) => a.isStage);
  assert.deepEqual(stage.variables.niveau, ['niveau', 2]);
  const reset = (b) =>
    b.opcode === 'data_setvariableto' &&
    b.fields.VARIABLE[0] === 'niveau' &&
    b.inputs.VALUE[1][1] === '1';
  assert.equal(Object.values(originalStage.blocks).filter(reset).length, 1);
  assert.equal(Object.values(stage.blocks).filter(reset).length, 0);
  assert.equal(Object.keys(originalStage.blocks).length - Object.keys(stage.blocks).length, 1);
  for (const [id, b] of Object.entries(stage.blocks)) {
    const previous = originalStage.blocks[id];
    assert.equal(b.opcode, previous.opcode);
    assert.deepEqual(b.inputs, previous.inputs);
    assert.deepEqual(b.fields, previous.fields);
  }
  const m = data.modules['scratch-mission-tests'];
  assert.equal(m.type, 'project');
  const dom = studentDom(data);
  t.after(() => dom.close());
  dom.navigate('#module/scratch-mission-tests?parcours=scratch-avances');
  for (const id of [
    'indices-panne',
    'verification-panne',
    'verification-comparaison',
    'verification-variation',
    'modeles',
  ]) {
    assert.equal(dom.main.querySelector('[data-activity-id="' + id + '"]').open, false);
  }
  assert.equal(dom.main.querySelector('[data-activity-id=panne]').closest('details'), null);
  const flat = blocks(m.blocks);
  assert.equal(
    flat.find((b) => b.id === 'panne').downloads[0].path,
    'assets/scratch/mission/mission-panne-relance.sb3',
  );
  assert.equal(
    flat.find((b) => b.id === 'reference').downloads[0].path,
    'assets/scratch/mission/mission-etats.sb3',
  );
});

test('Mission États : décisions et actions verrouillées avant l’annonce, création contrôlée après attente', () => {
  const { project } = readScratchProject(
    path.join(__dirname, '../assets/scratch/mission/mission-etats.sb3'),
  );
  const target = (name) => project.targets.find((t) => t.name === name);
  const stage = target('Stage');
  assert.deepEqual(stage.variables.etat, ['etat', 'preparation']);
  assert.deepEqual(stage.broadcasts, { secteur2: 'secteur2', resultat: 'resultat' });
  const isActive = (owner, id) => {
    const b = owner.blocks[id];
    assert.equal(b.opcode, 'operator_equals');
    assert.deepEqual(b.inputs.OPERAND1[1], [12, 'etat', 'etat']);
    assert.equal(b.inputs.OPERAND2[1][1], 'en jeu');
  };
  const atFlag = (owner) =>
    Object.values(owner.blocks).find((b) => b.opcode === 'event_whenflagclicked');
  let b = stage.blocks[atFlag(stage).next];
  assert.equal(b.fields.VARIABLE[0], 'etat');
  assert.equal(b.inputs.VALUE[1][1], 'preparation');
  while (b.opcode !== 'control_forever') b = stage.blocks[b.next];
  const firstGate = stage.blocks[b.inputs.SUBSTACK[1]];
  const sectorGate = stage.blocks[firstGate.next];
  for (const gate of [firstGate, sectorGate]) isActive(stage, gate.inputs.CONDITION[1]);
  const decision = stage.blocks[firstGate.inputs.SUBSTACK[1]];
  assert.equal(stage.blocks[decision.inputs.CONDITION[1]].opcode, 'operator_lt');
  const victory = stage.blocks[decision.inputs.SUBSTACK2[1]];
  for (const [branch, state] of [
    [decision, 'perdu'],
    [victory, 'gagne'],
  ]) {
    const lock = stage.blocks[branch.inputs.SUBSTACK[1]];
    assert.equal(lock.fields.VARIABLE[0], 'etat');
    assert.equal(lock.inputs.VALUE[1][1], state);
    const signal = stage.blocks[lock.next];
    assert.equal(signal.opcode, 'event_broadcast');
    assert.deepEqual(signal.inputs.BROADCAST_INPUT, [1, [11, 'resultat', 'resultat']]);
    assert.equal(signal.next, null);
  }
  assert(!Object.values(stage.blocks).some((b) => b.opcode === 'control_stop'));
  const pilot = target('Pilote');
  const pilotLoop = Object.values(pilot.blocks).find((b) => b.opcode === 'control_forever');
  isActive(pilot, pilot.blocks[pilotLoop.inputs.SUBSTACK[1]].inputs.CONDITION[1]);
  const collector = target('Balise');
  const collectLoop = Object.values(collector.blocks).find((b) => b.opcode === 'control_forever');
  const collectGate = collector.blocks[collectLoop.inputs.SUBSTACK[1]];
  const and = collector.blocks[collectGate.inputs.CONDITION[1]];
  assert.equal(and.opcode, 'operator_and');
  isActive(collector, and.inputs.OPERAND1[1]);
  const obstacle = target('Obstacle');
  const factory = Object.values(obstacle.blocks).find((b) => b.opcode === 'control_forever');
  const delay = obstacle.blocks[factory.inputs.SUBSTACK[1]];
  assert.equal(delay.opcode, 'control_wait');
  assert.equal(delay.inputs.DURATION[1][1], '1.2');
  const creationGate = obstacle.blocks[delay.next];
  isActive(obstacle, creationGate.inputs.CONDITION[1]);
  assert.equal(obstacle.blocks[creationGate.inputs.SUBSTACK[1]].opcode, 'control_create_clone_of');
  const travel = Object.values(obstacle.blocks).find((b) => b.opcode === 'control_repeat_until');
  const exit = obstacle.blocks[travel.inputs.CONDITION[1]];
  assert.equal(exit.opcode, 'operator_or');
  const not = obstacle.blocks[exit.inputs.OPERAND2[1]];
  assert.equal(not.opcode, 'operator_not');
  isActive(obstacle, not.inputs.OPERAND[1]);
  isActive(obstacle, obstacle.blocks[travel.inputs.SUBSTACK[1]].inputs.CONDITION[1]);
  assert.equal(obstacle.blocks[travel.next].opcode, 'control_delete_this_clone');
  const stops = project.targets.flatMap((t) =>
    Object.values(t.blocks).filter((b) => b.opcode === 'control_stop'),
  );
  assert.equal(stops.length, 1);
  const receive = Object.values(pilot.blocks).find(
    (b) => b.opcode === 'event_whenbroadcastreceived',
  );
  assert.deepEqual(receive.fields.BROADCAST_OPTION, ['resultat', 'resultat']);
  const announcement = pilot.blocks[receive.next];
  for (const slot of ['SUBSTACK', 'SUBSTACK2']) {
    const say = pilot.blocks[announcement.inputs[slot][1]];
    assert.equal(say.opcode, 'looks_sayforsecs');
    assert.equal(say.inputs.SECS[1][1], '2');
  }
  assert.equal(pilot.blocks[announcement.next], stops[0]);
});

test('Mission Messages : passage mémorisé avant émission, réceptions courtes et anciennes piles conservées', () => {
  const read = (name) =>
    readScratchProject(path.join(__dirname, '../assets/scratch/mission/mission-' + name + '.sb3'))
      .project;
  const before = read('clones');
  const after = read('messages');
  for (const name of ['Pilote', 'Balise']) {
    assert.deepEqual(
      after.targets.find((t) => t.name === name),
      before.targets.find((t) => t.name === name),
    );
  }
  const obstacle = after.targets.find((t) => t.name === 'Obstacle');
  const previous = before.targets.find((t) => t.name === 'Obstacle');
  for (const [id, block] of Object.entries(previous.blocks))
    assert.deepEqual(obstacle.blocks[id], block);
  const stage = after.targets.find((t) => t.isStage);
  assert.deepEqual(stage.variables.niveau, ['niveau', 1]);
  assert.deepEqual(stage.broadcasts, { secteur2: 'secteur2' });
  const native = Object.values(stage.blocks);
  const emission = native.filter((b) => b.opcode === 'event_broadcast');
  assert.equal(emission.length, 1);
  assert.deepEqual(emission[0].inputs.BROADCAST_INPUT, [1, [11, 'secteur2', 'secteur2']]);
  const change = stage.blocks[emission[0].parent];
  assert.equal(change.opcode, 'data_setvariableto');
  assert.equal(change.fields.VARIABLE[0], 'niveau');
  assert.equal(change.inputs.VALUE[1][1], '2');
  const gate = stage.blocks[change.parent];
  assert.equal(gate.opcode, 'control_if');
  const condition = stage.blocks[gate.inputs.CONDITION[1]];
  assert.equal(condition.opcode, 'operator_and');
  const level = stage.blocks[condition.inputs.OPERAND1[1]];
  const score = stage.blocks[condition.inputs.OPERAND2[1]];
  assert.equal(level.opcode, 'operator_equals');
  assert.deepEqual(level.inputs.OPERAND1[1], [12, 'niveau', 'niveau']);
  assert.equal(level.inputs.OPERAND2[1][1], '1');
  assert.equal(score.opcode, 'operator_gt');
  assert.deepEqual(score.inputs.OPERAND1[1], [12, 'score', 'score']);
  assert.equal(score.inputs.OPERAND2[1][1], '2');
  const loop = native.find((b) => b.opcode === 'control_forever');
  const decision = stage.blocks[loop.inputs.SUBSTACK[1]];
  assert.equal(decision.opcode, 'control_if_else');
  assert.equal(stage.blocks[decision.next], gate);
  assert.equal(stage.blocks[gate.next].opcode, 'control_wait');
  for (const [target, opcode, slot, expected] of [
    [stage, 'looks_switchbackdropto', 'BACKDROP', 'secteur2'],
    [obstacle, 'data_setvariableto', 'VALUE', '7'],
  ]) {
    const hat = Object.values(target.blocks).find(
      (b) => b.opcode === 'event_whenbroadcastreceived',
    );
    assert.deepEqual(hat.fields.BROADCAST_OPTION, ['secteur2', 'secteur2']);
    const action = target.blocks[hat.next];
    assert.equal(action.opcode, opcode);
    assert.equal(action.next, null);
    if (slot === 'VALUE') {
      assert.equal(action.fields.VARIABLE[0], 'vitesseObstacle');
      assert.equal(action.inputs.VALUE[1][1], expected);
    } else {
      assert.equal(target.blocks[action.inputs[slot][1]].fields.BACKDROP[0], expected);
    }
  }
  const guide = data.modules['scratch-mission-messages'].teacherGuide;
  assert(guide.questions.length >= 3);
  assert(guide.commonErrors.every((error) => error.helps.length >= 4));
});

test('Mission Clones : transition conserve Pilote et Balise, remplace le danger et borne ses copies', () => {
  const read = (name) =>
    readScratchProject(path.join(__dirname, '../assets/scratch/mission/mission-' + name + '.sb3'))
      .project;
  const before = read('vies');
  const after = read('clones');
  for (const name of ['Pilote', 'Balise']) {
    assert.deepEqual(
      after.targets.find((t) => t.name === name),
      before.targets.find((t) => t.name === name),
    );
  }
  const obstacle = after.targets.find((t) => t.name === 'Obstacle');
  const native = Object.values(obstacle.blocks);
  assert.equal(obstacle.visible, false);
  assert.equal(native.filter((b) => b.topLevel).length, 2);
  assert.equal(native.filter((b) => b.opcode === 'control_wait_until').length, 0);
  assert.equal(native.filter((b) => b.opcode === 'control_delete_this_clone').length, 2);
  const damage = native.find((b) => b.opcode === 'data_changevariableby');
  assert.equal(damage.fields.VARIABLE[0], 'vies');
  assert.equal(damage.inputs.VALUE[1][1], '-1');
  assert.equal(obstacle.blocks[damage.next].opcode, 'control_delete_this_clone');
  const random = native.find((b) => b.opcode === 'operator_random');
  assert.equal(random.inputs.FROM[1][1], '-100');
  assert.equal(random.inputs.TO[1][1], '100');
  const movement = native.find((b) => b.opcode === 'motion_changexby');
  assert.deepEqual(movement.inputs.DX[1], [12, 'vitesseObstacle', 'vitesseObstacle']);
  const stage = after.targets.find((t) => t.isStage);
  assert.deepEqual(stage.variables.vitesseObstacle, ['vitesseObstacle', 4]);
  const guide = data.modules[ids[3]].teacherGuide;
  assert(guide.questions.length >= 3);
  assert(guide.commonErrors.every((error) => error.helps.length >= 4));
});

test('Mission balises : sinon garde une branche distincte et les schémas valident ses descendants', (t) => {
  const dom = studentDom(data);
  t.after(() => dom.close());
  dom.navigate('#module/scratch-mission-balises?parcours=scratch-avances');
  const alternate = dom.main.querySelector(
    '[data-activity-id="alternance"] .scratch-script__block--container',
  );
  const branches = alternate.querySelectorAll(':scope > .scratch-script__children');
  assert.equal(branches.length, 2);
  assert.match(branches[0].textContent, /160/);
  assert.match(branches[1].textContent, /-160/);
  assert.equal(alternate.querySelector(':scope > .scratch-script__otherwise').textContent, 'sinon');
  const invalid = structuredClone(data.modules[ids[1]]);
  invalid.blocks.find((b) => b.id === 'alternance').visualScript.blocks[0].elseChildren = [
    { category: 'bogus' },
  ];
  assert.throws(
    () => validateSource('module', invalid, 'invalid-else.json'),
    /invalid module structure/,
  );
  const badLink = structuredClone(data.modules[ids[2]]);
  badLink.blocks.find((b) => b.id === 'aide-contact').moduleLink.newTab = 'yes';
  assert.throws(() => validateSource('module', badLink, 'invalid-tab.json'), /must be boolean/);
});
