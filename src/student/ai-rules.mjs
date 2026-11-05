export const WIN_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
export const CORNERS = [0, 2, 6, 8];
export const STORAGE_KEY = 'codecraft.ai.regles-donnees.v1';

export function gameOutcome(board) {
  for (const line of WIN_LINES) {
    if (board[line[0]] && line.every((cell) => board[cell] === board[line[0]]))
      return board[line[0]];
  }
  return board.every(Boolean) ? 'draw' : null;
}

export function programDecision(board) {
  if (gameOutcome(board)) return null;
  const crosses = board.filter((mark) => mark === 'X').length;
  if (crosses !== board.filter((mark) => mark === 'O').length) return null;
  const freeCorners = CORNERS.filter((cell) => !board[cell]);
  if (crosses === 0) return { ruleId: 'first-corner', cells: freeCorners };
  if (crosses === 1) {
    const opposite = 8 - board.indexOf('X');
    return board[opposite] !== 'O'
      ? { ruleId: 'second-opposite', cells: [opposite] }
      : { ruleId: 'second-corner', cells: freeCorners };
  }
  if (crosses === 4)
    return { ruleId: 'last-cell', cells: board.flatMap((mark, i) => (mark ? [] : [i])) };
  for (const [mark, ruleId] of [
    ['X', 'complete-line'],
    ['O', 'block-line'],
  ]) {
    const cells = [
      ...new Set(
        WIN_LINES.flatMap((line) =>
          line.filter((cell) => board[cell] === mark).length === 2
            ? line.filter((cell) => !board[cell])
            : [],
        ),
      ),
    ].sort((a, b) => a - b);
    if (cells.length) return { ruleId, cells };
  }
  return { ruleId: 'free-corner', cells: freeCorners };
}

export function replayMoves(moves) {
  const board = Array(9).fill('');
  let lastDecision = null;
  if (!Array.isArray(moves) || moves.length > 9) return null;
  for (let turn = 0; turn < moves.length; turn++) {
    const cell = moves[turn];
    if (!Number.isInteger(cell) || cell < 0 || cell > 8 || board[cell] || gameOutcome(board))
      return null;
    const mark = turn % 2 === 0 ? 'X' : 'O';
    if (mark === 'X') {
      const decision = programDecision(board);
      if (!decision?.cells.includes(cell)) return null;
      lastDecision = { ...decision, chosen: cell };
    }
    board[cell] = mark;
  }
  return { board, lastDecision, outcome: gameOutcome(board) };
}

function normalized(text) {
  return text.normalize('NFC').toLocaleLowerCase('fr').replaceAll('’', "'");
}

export function predictMessage(text, hypothesis) {
  const input = normalized(text).trim();
  const matches = hypothesis.conditions.filter((condition) => {
    const term = normalized(condition.term);
    if (condition.kind === 'starts') return input.startsWith(term + ' ') || input === term;
    if (condition.kind === 'word') return input.match(/[\p{L}\p{N}]+/gu)?.includes(term);
    return input.includes(term);
  });
  if (!matches.length) return { category: 'indeterminee', clues: [] };
  if (hypothesis.policy === 'consensus' && new Set(matches.map((item) => item.category)).size > 1)
    return { category: 'indeterminee', clues: matches, conflict: true };
  return {
    category: matches[0].category,
    clues: hypothesis.policy === 'first' ? matches.slice(0, 1) : matches,
  };
}

export function initialProgress(config) {
  return {
    version: 1,
    step: 0,
    visited: [0],
    moves: [],
    stepMode: true,
    guess: null,
    answers: {},
    checked: {},
    order: [...config.flow.initialOrder],
    orderChecked: false,
    candidate: null,
    lockedRule: null,
    revealed: 0,
    emojiGuess: null,
    selectedExamples: [],
    examplesChecked: false,
    freeText: '',
    freeShown: false,
  };
}

export function restoreProgress(raw, config) {
  const state = initialProgress(config);
  if (!raw || raw.version !== 1) return state;
  if (Number.isInteger(raw.step) && raw.step >= 0 && raw.step < 4) state.step = raw.step;
  state.visited = [
    ...new Set([
      0,
      state.step,
      ...(Array.isArray(raw.visited)
        ? raw.visited.filter((v) => Number.isInteger(v) && v >= 0 && v < 4)
        : []),
    ]),
  ];
  if (replayMoves(raw.moves)) state.moves = [...raw.moves];
  state.stepMode = raw.stepMode !== false;
  if (
    Number.isInteger(raw.guess) &&
    raw.guess >= 0 &&
    raw.guess < 9 &&
    !replayMoves(state.moves).board[raw.guess]
  )
    state.guess = raw.guess;
  for (const question of [...config.gameQuestions, ...config.reviewQuestions]) {
    if (question.options.some((option) => option.id === raw.answers?.[question.id])) {
      state.answers[question.id] = raw.answers[question.id];
      state.checked[question.id] = raw.checked?.[question.id] === true;
    }
  }
  const ids = config.flow.cards.map((card) => card.id);
  if (
    Array.isArray(raw.order) &&
    raw.order.length === ids.length &&
    new Set(raw.order).size === ids.length &&
    raw.order.every((id) => ids.includes(id))
  )
    state.order = [...raw.order];
  state.orderChecked = raw.orderChecked === true;
  const rules = config.hypotheses.map((rule) => rule.id);
  if (rules.includes(raw.candidate)) state.candidate = raw.candidate;
  if (rules.includes(raw.lockedRule)) {
    state.lockedRule = raw.lockedRule;
    state.candidate = raw.lockedRule;
    if (config.categories.some((item) => item.id === raw.emojiGuess))
      state.emojiGuess = raw.emojiGuess;
    if (Number.isInteger(raw.revealed))
      state.revealed = Math.max(0, Math.min(config.tests.length, raw.revealed));
  }
  state.selectedExamples = Array.isArray(raw.selectedExamples)
    ? [
        ...new Set(
          raw.selectedExamples.filter((id) => config.extraExamples.some((item) => item.id === id)),
        ),
      ]
    : [];
  state.examplesChecked = raw.examplesChecked === true;
  state.freeText = typeof raw.freeText === 'string' ? raw.freeText.slice(0, 1000) : '';
  state.freeShown = raw.freeShown === true;
  return state;
}
