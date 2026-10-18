const test = require('node:test');
const assert = require('node:assert/strict');
const { loadCatalog } = require('../scripts/catalog/load-catalog.cjs');
const { validateSource } = require('../scripts/catalog/validate-schema.cjs');
const { studentDom } = require('./helpers/student-dom.cjs');
const data = loadCatalog();

test('Minecraft : seules les missions disponibles sont accessibles depuis le parcours', (t) => {
  const dom = studentDom(data);
  t.after(() => dom.close());
  dom.navigate('#domaine/jeux-video');
  const entry = dom.main.querySelector('a[href*="parcours=minecraft-algorithmes"]');
  assert.ok(entry);
  dom.navigate(entry.hash);
  assert.equal(dom.main.querySelector('h1').textContent, data.modules['minecraft-trajets'].title);
  const next = dom.main.querySelector('.module-navigation__next');
  assert.equal(next.hash, '#module/minecraft-repetitions?parcours=minecraft-algorithmes');
  dom.navigate(next.hash);
  const construction = dom.main.querySelector('.module-navigation__next');
  assert.equal(construction.hash, '#module/minecraft-passage?parcours=minecraft-algorithmes');
  dom.navigate(construction.hash);
  const procedures = dom.main.querySelector('.module-navigation__next');
  assert.equal(procedures.hash, '#module/minecraft-procedures?parcours=minecraft-algorithmes');
  dom.navigate(procedures.hash);
  const motifs = dom.main.querySelector('.module-navigation__next');
  assert.equal(motifs.hash, '#module/minecraft-motifs?parcours=minecraft-algorithmes');
  dom.navigate(motifs.hash);
  const decisions = dom.main.querySelector('.module-navigation__next');
  assert.equal(decisions.hash, '#module/minecraft-decisions?parcours=minecraft-algorithmes');
  dom.navigate(decisions.hash);
  const strategies = dom.main.querySelector('.module-navigation__next');
  assert.equal(strategies.hash, '#module/minecraft-strategies?parcours=minecraft-algorithmes');
  dom.navigate(strategies.hash);
  const project = dom.main.querySelector('.module-navigation__next');
  assert.equal(project.hash, '#module/minecraft-automatisation?parcours=minecraft-algorithmes');
  dom.navigate(project.hash);
  assert.equal(dom.main.querySelector('.module-navigation__next'), null);
  assert.equal(dom.main.querySelectorAll('.course-sidebar a[aria-current="page"]').length, 1);
  assert.ok(
    dom.main.querySelector('a[href="#module/minecraft-motifs?parcours=minecraft-algorithmes"]'),
  );
});

test('Minecraft : le choix d’entrée relie le diagnostic, la comparaison et le projet', (t) => {
  const dom = studentDom(data);
  t.after(() => dom.close());
  dom.window.HTMLElement.prototype.scrollIntoView = () => {};
  const pathway = 'minecraft-algorithmes';
  const navigate = (id) => dom.navigate('#module/' + id + '?parcours=' + pathway);
  const activity = (id) => dom.main.querySelector('[data-activity-id="' + id + '"]');
  const follow = (source, targetModule, targetBlock) => {
    const anchor = activity(source).querySelector('a');
    const expected = new URLSearchParams({ parcours: pathway, activite: targetBlock });
    assert.equal(anchor.hash, '#module/' + targetModule + '?' + expected);
    dom.navigate(anchor.hash);
    assert.ok(activity(targetBlock));
    assert.equal(dom.main.querySelector('h1').textContent, data.modules[targetModule].title);
  };
  navigate('minecraft-trajets');
  follow('entree-scratch', 'minecraft-trajets', 'autonomie');
  assert.ok(activity('autonomie').querySelector('[type="checkbox"]'));
  follow('suite-diagnostic', 'minecraft-repetitions', 'programme-a');
  assert.ok(activity('programme-a').querySelector('pre'));
  assert.ok(activity('programme-b').querySelector('pre'));

  navigate('minecraft-trajets');
  const project = activity('entree-projet').querySelector('a');
  assert.equal(project.hash, '#module/minecraft-automatisation');
  dom.navigate(project.hash);
  assert.ok(activity('preparer'));
  assert.ok(activity('aide-tests'));
  assert.ok(activity('bilan-aquatic'));

  for (const [id, source, target] of [
    ['minecraft-repetitions', 'entree-experimentee', 'programme-a'],
    ['minecraft-procedures', 'entree-scratch', 'lire-huit'],
    ['minecraft-motifs', 'entree-experimentee', 'definir-troncon'],
    ['minecraft-decisions', 'entree-experimentee', 'lire-sept'],
  ]) {
    navigate(id);
    follow(source, id, target);
    assert.ok(activity('preparer'));
    assert.ok(activity('autonomie'));
  }
});

test('liens de niveaux : le bon niveau externe s’ouvre sans remplacer la mission', (t) => {
  const dom = studentDom(data);
  t.after(() => dom.close());
  for (const [id, course, levels] of [
    ['minecraft-trajets', 'hero', [1, 3]],
    ['minecraft-repetitions', 'hero', [4, 5]],
    ['minecraft-passage', 'hero', [6, 7]],
    ['minecraft-procedures', 'hero', [8, 10]],
    ['minecraft-motifs', 'hero', [12]],
    ['minecraft-decisions', 'aquatic', [4, 7, 8]],
    ['minecraft-strategies', 'aquatic', [9, 10, 11]],
    ['minecraft-automatisation', 'hero', [12]],
  ]) {
    dom.navigate('#module/' + id + '?parcours=minecraft-algorithmes');
    const external = [...dom.main.querySelectorAll('a[href^="https://studio.code.org/"]')];
    assert.deepEqual(
      external.map((a) => a.href).sort(),
      levels
        .map(
          (level) => `https://studio.code.org/courses/${course}/units/1/lessons/1/levels/${level}`,
        )
        .sort(),
    );
    for (const anchor of external) {
      assert.equal(anchor.target, '_blank');
      assert.equal(anchor.rel, 'noopener noreferrer');
    }
  }
  const invalid = structuredClone(data.modules['minecraft-trajets']);
  invalid.blocks.find((b) => b.externalLink).externalLink.url = 'javascript:alert(1)';
  assert.throws(() => validateSource('module', invalid, 'unsafe.json'), /externalLink|pattern/);
});

test('comparaison sur grille : les deux écritures produisent les mêmes états et coûts distincts', () => {
  const lesson = data.modules['minecraft-repetitions'];
  const a = lesson.blocks.find((b) => b.id === 'programme-a').code.split('\n');
  const b = lesson.blocks.find((b) => b.id === 'programme-b').code.split('\n');
  assert.match(b[0], /^répéter 2 fois$/);
  const body = b.slice(1).map((line) => line.trim());
  const expanded = [...body, ...body];
  assert.deepEqual(expanded, a);
  function trace(actions) {
    let x = 3;
    let y = 4;
    let direction = 0;
    const path = [];
    for (const action of actions) {
      if (action === 'tourner à droite') direction = (direction + 1) % 4;
      else {
        assert.equal(action, 'avancer');
        const [dx, dy] = [
          [0, -1],
          [1, 0],
          [0, 1],
          [-1, 0],
        ][direction];
        x += dx;
        y += dy;
      }
      assert.ok(x >= 1 && x <= 5 && y >= 1 && y <= 5);
      path.push([x, y, direction]);
    }
    return path;
  }
  assert.deepEqual(trace(a), trace(expanded));
  assert.deepEqual(trace(a).at(-1), [5, 2, 2]);
  assert.deepEqual(trace([...expanded, ...body]).at(-1), [5, 4, 3]);
  assert.equal(a.length, 6);
  assert.equal(b.length, 4);
  assert.equal(expanded.filter((action) => action === 'avancer').length, 4);
});

test('passage : la trace distingue arrivée, cases construites et continuité', () => {
  const module = data.modules['minecraft-passage'];
  const initial = module.blocks.find((block) => block.id === 'defi-papier').code.split('\n');
  const turns = Number(initial[0].match(/^répéter (\d+) fois$/)[1]);
  const motif = initial.slice(1).map((line) => line.trim());
  function run(actions) {
    let position = 'B'.charCodeAt(0);
    const covered = new Set(['A', 'B', 'G']);
    for (const action of actions) {
      if (action === 'avancer') position += 1;
      else {
        assert.equal(action, 'placer une planche');
        covered.add(String.fromCharCode(position));
      }
    }
    return { arrival: String.fromCharCode(position), covered: [...covered].sort() };
  }
  const expand = (count) => Array.from({ length: count }, () => motif).flat();
  const before = run(expand(turns));
  assert.equal(before.arrival, 'E');
  assert.deepEqual(before.covered, ['A', 'B', 'C', 'D', 'E', 'G']);
  const repaired = run(expand(turns + 1));
  assert.equal(repaired.arrival, 'F');
  assert.deepEqual(repaired.covered, ['A', 'B', 'C', 'D', 'E', 'F', 'G']);
  const movedPlacement = run(['avancer', 'avancer', 'avancer', 'placer une planche']);
  assert.equal(movedPlacement.arrival, before.arrival);
  assert.deepEqual(movedPlacement.covered, ['A', 'B', 'E', 'G']);
});

test('procédures : les appels conservent orientation et terrain, et dépendent du départ', () => {
  const module = data.modules['minecraft-procedures'];
  const definition = module.blocks.find((block) => block.id === 'defi-papier').code.split('\n');
  assert.equal(definition[0], 'définir tronçon');
  const turns = Number(definition[1].trim().match(/^répéter (\d+) fois$/)[1]);
  const end = definition.at(-1).trim();
  const motif = definition.slice(2, -1).map((line) => line.trim());
  const actions = [...Array.from({ length: turns }, () => motif).flat(), end];
  const water = new Set(['B4', 'B3', 'C3', 'D3']);
  function run(calls, direction = 0) {
    let x = 2;
    let y = 5;
    const covered = new Set();
    const states = [];
    for (let call = 0; call < calls; call++) {
      for (const action of actions) {
        if (action === 'avancer') {
          const [dx, dy] = [
            [0, -1],
            [1, 0],
            [0, 1],
            [-1, 0],
          ][direction];
          x += dx;
          y += dy;
        } else if (action === 'tourner à droite') direction = (direction + 1) % 4;
        else {
          assert.equal(action, 'placer une planche');
          const cell = String.fromCharCode(64 + x) + y;
          if (water.has(cell)) covered.add(cell);
        }
        assert.ok(x >= 1 && x <= 5 && y >= 1 && y <= 5);
      }
      states.push([String.fromCharCode(64 + x) + y, direction]);
    }
    return { states, covered: [...covered].sort() };
  }
  assert.deepEqual(run(2), {
    states: [
      ['B3', 1],
      ['D3', 2],
    ],
    covered: ['B3', 'B4', 'C3', 'D3'],
  });
  assert.deepEqual(run(1, 1), { states: [['D5', 2]], covered: [] });
});

test('motifs : boucles imbriquées, appels et ordre des placements distinguent coût, tracé et état', () => {
  const module = data.modules['minecraft-motifs'];
  const code = (id) => module.blocks.find((block) => block.id === id).code;
  function parse(source) {
    const root = { children: [], indent: -2 };
    const stack = [root];
    for (const line of source.split('\n')) {
      const node = {
        text: line.trim(),
        indent: line.length - line.trimStart().length,
        children: [],
      };
      while (stack.at(-1).indent >= node.indent) stack.pop();
      stack.at(-1).children.push(node);
      stack.push(node);
    }
    return root.children[0].children;
  }
  function expand(nodes, definition = []) {
    return nodes.flatMap((node) => {
      const repeat = /^répéter (\d+) fois$/.exec(node.text);
      if (repeat)
        return Array.from({ length: Number(repeat[1]) }, () =>
          expand(node.children, definition),
        ).flat();
      if (node.text === 'appeler tronçon') return expand(definition);
      assert.equal(node.children.length, 0);
      return [node.text];
    });
  }
  function run(actions, x, y) {
    let direction = 0;
    const rails = [];
    for (const action of actions) {
      if (action === 'tourner à droite') direction = (direction + 1) % 4;
      else if (action === 'tourner à gauche') direction = (direction + 3) % 4;
      else if (action === 'placer un rail') rails.push([x, y]);
      else {
        assert.equal(action, 'avancer');
        const [dx, dy] = [
          [0, -1],
          [1, 0],
          [0, 1],
          [-1, 0],
        ][direction];
        x += dx;
        y += dy;
      }
    }
    return { arrival: [x, y, direction], rails };
  }
  const nested = expand(parse(code('deux-boucles')));
  const simple = [
    'tourner à droite',
    ...Array.from({ length: 6 }, () => ['placer un rail', 'avancer']).flat(),
  ];
  assert.deepEqual(nested, simple);
  assert.deepEqual(run(nested, 10, 19).arrival, [16, 19, 1]);
  const angle = run(expand(parse(code('appeler-angle')), parse(code('definir-troncon'))), 10, 19);
  assert.deepEqual(angle.arrival, [13, 16, 3]);
  assert.deepEqual(angle.rails, [
    [10, 19],
    [11, 19],
    [12, 19],
    [13, 19],
    [13, 18],
    [13, 17],
  ]);

  const definition = parse(code('defi-papier'));
  const main = parse(code('programme-papier'));
  const actions = expand(main, definition);
  const original = run(actions, 2, 4);
  assert.equal(actions.filter((action) => action === 'avancer').length, 4);
  assert.deepEqual(original, {
    arrival: [4, 2, 3],
    rails: [
      [2, 4],
      [3, 4],
      [4, 4],
      [4, 3],
    ],
  });
  const withoutLastTurn = run(actions.slice(0, -1), 2, 4);
  assert.deepEqual(withoutLastTurn.rails, original.rails);
  assert.deepEqual(withoutLastTurn.arrival, [4, 2, 0]);
  const reversed = parse(
    code('defi-papier').replace('placer un rail\n    avancer', 'avancer\n    placer un rail'),
  );
  const changed = run(expand(main, reversed), 2, 4);
  assert.deepEqual(changed.arrival, original.arrival);
  assert.deepEqual(changed.rails, [
    [3, 4],
    [4, 4],
    [4, 3],
    [4, 2],
  ]);
});

test('décisions : test relatif, ordre des actions, cas faux et arrêt au but sur la grille originale', () => {
  const module = data.modules['minecraft-decisions'];
  const code = (id) => module.blocks.find((block) => block.id === id).code;
  const cells = new Set(['B5', 'B4', 'B3', 'C3', 'D3', 'D4', 'D5']);
  const delta = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];
  const cell = (x, y) => String.fromCharCode(64 + x) + y;
  function rightPath(x, y, direction) {
    const [dx, dy] = delta[(direction + 1) % 4];
    return { cell: cell(x + dx, y + dy), open: cells.has(cell(x + dx, y + dy)) };
  }
  function parse(source) {
    const root = { children: [], indent: -2 };
    const stack = [root];
    for (const line of source.split('\n')) {
      const node = {
        text: line.trim(),
        indent: line.length - line.trimStart().length,
        children: [],
      };
      while (stack.at(-1).indent >= node.indent) stack.pop();
      stack.at(-1).children.push(node);
      stack.push(node);
    }
    return root.children[0].children;
  }
  function run(source, startY = 5, startX = 2) {
    let x = startX;
    let y = startY;
    let direction = 0;
    let turns = 0;
    let blocked = null;
    const path = [];
    const tests = [];
    function execute(nodes) {
      for (const node of nodes) {
        if (node.text === 'répéter jusqu’au but') {
          let tours = 0;
          while (cell(x, y) !== 'D5') {
            assert.ok(tours++ < 20, 'La trace doit atteindre le but ou signaler un blocage.');
            execute(node.children);
          }
        } else if (node.text === 'si chemin à droite') {
          const probe = rightPath(x, y, direction);
          tests.push({ from: cell(x, y), direction, ...probe });
          if (probe.open) execute(node.children);
        } else if (node.text === 'tourner à droite') {
          direction = (direction + 1) % 4;
          turns++;
        } else {
          assert.equal(node.text, 'avancer');
          const [dx, dy] = delta[direction];
          const target = cell(x + dx, y + dy);
          if (!cells.has(target)) {
            blocked = target;
            throw new Error('blocked');
          }
          x += dx;
          y += dy;
          path.push(cell(x, y));
        }
      }
    }
    try {
      execute(parse(source));
    } catch (error) {
      if (!blocked) throw error;
    }
    return { arrival: [cell(x, y), direction], path, tests, turns, blocked };
  }
  assert.deepEqual(rightPath(2, 4, 0), { cell: 'C4', open: false });
  assert.deepEqual(rightPath(2, 3, 0), { cell: 'C3', open: true });
  assert.deepEqual(rightPath(2, 4, 1), { cell: 'B5', open: true });
  const a = run(code('defi-papier'));
  const b = run(code('tester-dabord'));
  assert.deepEqual(a.path, ['B4', 'B3', 'C3', 'D3', 'D4', 'D5']);
  assert.deepEqual(
    a.tests.map((probe) => probe.open),
    [false, true, false, true, false, false],
  );
  assert.equal(a.turns, 2);
  assert.deepEqual(a.arrival, ['D5', 2]);
  assert.equal(a.blocked, null);
  assert.deepEqual(b.path, a.path);
  assert.deepEqual(b.arrival, a.arrival);
  assert.deepEqual(
    b.tests.map((probe) => probe.open),
    [false, false, true, false, true, false],
  );
  const blocked = run(code('defi-papier'), 3);
  assert.equal(blocked.blocked, 'B2');
  assert.deepEqual(blocked.path, []);
  assert.deepEqual(blocked.tests, []);
  const turnedFirst = run(code('tester-dabord'), 3);
  assert.deepEqual(turnedFirst.path, ['C3', 'D3', 'D4', 'D5']);
  assert.deepEqual(turnedFirst.arrival, ['D5', 2]);
  for (const source of [code('defi-papier'), code('tester-dabord')]) {
    assert.deepEqual(run(source, 5, 4), {
      arrival: ['D5', 0],
      path: [],
      tests: [],
      turns: 0,
      blocked: null,
    });
  }
});

test('stratégies : les repères déterminent la réussite et les variantes localisent le premier écart', () => {
  const source = data.modules['minecraft-strategies'].blocks.find(
    (b) => b.id === 'defi-papier',
  ).code;
  const cells = new Set(['B5', 'B4', 'B3', 'C3', 'D3', 'D2', 'D1']);
  const cell = (x, y) => String.fromCharCode(64 + x) + y;
  function parse(code) {
    const root = { indent: -2, children: [] };
    const stack = [root];
    for (const line of code.split('\n')) {
      const node = {
        text: line.trim(),
        indent: line.length - line.trimStart().length,
        children: [],
      };
      while (stack.at(-1).indent >= node.indent) stack.pop();
      stack.at(-1).children.push(node);
      stack.push(node);
    }
    return root.children[0].children;
  }
  function run(blue = 'B3', red = 'D3', code = source) {
    let x = 2;
    let y = 5;
    let direction = 0;
    const path = [];
    const tests = [];
    const turns = [];
    let blocked = null;
    function execute(nodes) {
      for (const node of nodes) {
        if (node.text === 'répéter jusqu’au but') {
          let count = 0;
          while (cell(x, y) !== 'D1') {
            assert.ok(count++ < 20, 'Le parcours doit aboutir ou rencontrer un blocage.');
            execute(node.children);
          }
        } else if (node.text.startsWith('si sur ')) {
          const color = node.text.slice('si sur '.length);
          assert.ok(['bleu', 'rouge'].includes(color));
          const result = cell(x, y) === (color === 'bleu' ? blue : red);
          tests.push([cell(x, y), color, result]);
          if (result) execute(node.children);
        } else if (node.text.startsWith('tourner')) {
          assert.ok(['tourner à droite', 'tourner à gauche'].includes(node.text));
          direction = (direction + (node.text === 'tourner à droite' ? 1 : 3)) % 4;
          turns.push([cell(x, y), direction]);
        } else {
          assert.equal(node.text, 'avancer');
          const [dx, dy] = [
            [0, -1],
            [1, 0],
            [0, 1],
            [-1, 0],
          ][direction];
          const target = cell(x + dx, y + dy);
          if (!cells.has(target)) {
            blocked = target;
            throw new Error('blocked');
          }
          x += dx;
          y += dy;
          path.push(cell(x, y));
        }
      }
    }
    try {
      execute(parse(code));
    } catch (error) {
      if (!blocked) throw error;
    }
    return { path, tests, turns, blocked, arrival: [cell(x, y), direction] };
  }
  const reference = run();
  assert.deepEqual(reference.path, ['B4', 'B3', 'C3', 'D3', 'D2', 'D1']);
  assert.deepEqual(
    reference.tests.map((probe) => probe[2]),
    [false, false, true, false, false, false, false, true, false, false, false, false],
  );
  assert.deepEqual(reference.turns, [
    ['B3', 1],
    ['D3', 0],
  ]);
  assert.deepEqual(reference.arrival, ['D1', 0]);
  assert.equal(reference.blocked, null);
  const moved = run('B4');
  assert.deepEqual(moved.path, ['B4']);
  assert.deepEqual(moved.turns, [['B4', 1]]);
  assert.equal(moved.blocked, 'C4');
  const removed = run('B3', null);
  assert.deepEqual(removed.path, reference.path.slice(0, 4));
  assert.deepEqual(removed.turns, [['B3', 1]]);
  assert.equal(removed.blocked, 'E3');
  // La mauvaise imbrication empêche de rencontrer le test rouge sur une case rouge.
  const nested = source.replace(
    '    si sur rouge\n      tourner à gauche',
    '      si sur rouge\n        tourner à gauche',
  );
  const incorrect = run('B3', 'D3', nested);
  assert.equal(incorrect.blocked, 'E3');
  assert.equal(
    incorrect.tests.some(([position, color]) => position === 'D3' && color === 'rouge'),
    false,
  );
  assert.deepEqual(run().path, reference.path);
});

test('automatisation : la référence professeur compare deux écritures et isole le virage final', () => {
  // Référence réservée au guide : le projet élève n’affiche pas de pile complète.
  const repeat = (count, children) => ({ repeat: count, children });
  const definition = [repeat(2, ['placer', 'avancer'])];
  const main = ['droite', repeat(3, ['appel', 'gauche'])];
  function expand(nodes) {
    return nodes.flatMap((node) => {
      if (typeof node !== 'string')
        return Array.from({ length: node.repeat }, () => expand(node.children)).flat();
      return node === 'appel' ? expand(definition) : [node];
    });
  }
  function written(nodes) {
    return nodes.reduce(
      (total, node) => total + 1 + (node.children ? written(node.children) : 0),
      0,
    );
  }
  function trace(actions) {
    let x = 1;
    let y = 5;
    let direction = 0;
    const rails = [];
    const moves = [];
    let turns = 0;
    const cell = () => String.fromCharCode(64 + x) + y;
    for (const action of actions) {
      if (action === 'placer') rails.push(cell());
      else if (action === 'gauche' || action === 'droite') {
        direction = (direction + (action === 'gauche' ? 3 : 1)) % 4;
        turns++;
      } else {
        assert.equal(action, 'avancer');
        const [dx, dy] = [
          [0, -1],
          [1, 0],
          [0, 1],
          [-1, 0],
        ][direction];
        x += dx;
        y += dy;
        assert.ok(x >= 1 && x <= 5 && y >= 1 && y <= 5);
        moves.push(cell());
      }
    }
    return { rails, moves, turns, arrival: [cell(), direction] };
  }
  const unfolded = [
    'droite',
    'placer',
    'avancer',
    'placer',
    'avancer',
    'gauche',
    'placer',
    'avancer',
    'placer',
    'avancer',
    'gauche',
    'placer',
    'avancer',
    'placer',
    'avancer',
    'gauche',
  ];
  const compiled = expand(main);
  assert.deepEqual(compiled, unfolded);
  assert.equal(written(main) + written(definition), 7);
  assert.equal(written(unfolded), 16);
  const reference = trace(compiled);
  assert.deepEqual(reference.rails, ['A5', 'B5', 'C5', 'C4', 'C3', 'B3']);
  assert.equal(new Set(reference.rails).size, 6);
  assert.equal(reference.moves.length, 6);
  assert.equal(reference.turns, 4);
  assert.deepEqual(reference.arrival, ['A3', 2]);
  const withoutFinal = trace(compiled.slice(0, -1));
  assert.deepEqual(withoutFinal.rails, reference.rails);
  assert.deepEqual(withoutFinal.arrival, ['A3', 3]);
  const alternative = trace(
    expand(['droite', 'appel', 'gauche', 'appel', 'droite', 'appel', 'gauche']),
  );
  assert.deepEqual(alternative.rails, ['A5', 'B5', 'C5', 'C4', 'C3', 'D3']);
  assert.equal(new Set(alternative.rails).size, 6);
  assert.deepEqual(alternative.arrival, ['E3', 0]);
  assert.equal(alternative.moves.length, reference.moves.length);
  assert.equal(alternative.turns, reference.turns);
});
