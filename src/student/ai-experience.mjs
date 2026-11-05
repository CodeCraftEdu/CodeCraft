import {
  STORAGE_KEY,
  initialProgress,
  restoreProgress,
  replayMoves,
  programDecision,
  predictMessage,
} from './ai-rules.mjs';

export function createAiExperience(config, { element }) {
  const root = element('section', 'ai-lab');
  root.setAttribute('aria-label', 'Expérience : des règles aux données');
  let state = initialProgress(config);
  let storage;
  let storageFailed = false;
  try {
    storage = window.localStorage;
    const raw = storage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        state = restoreProgress(JSON.parse(raw), config);
      } catch {
        state = initialProgress(config);
      }
    }
  } catch {
    storageFailed = true;
  }
  const status = element('p', 'ai-lab__status');
  status.setAttribute('role', 'status');
  const nav = element('nav', 'ai-lab__nav');
  nav.setAttribute('aria-label', 'Étapes de l’expérience');
  const stepNames = ['Les instructions', 'Règles et données', 'Les émojis', 'Bilan'];
  const visited = element('p', 'ai-lab__progress');
  const content = element('div', 'ai-lab__content');
  const controls = element('div', 'ai-lab__navigation');
  const resetArea = element('div', 'ai-lab__reset');
  root.append(nav, visited, status, content, controls);
  let gameNotice = '';
  let gameNoticeGood = true;
  const cellName = (cell) => String.fromCharCode(65 + (cell % 3)) + (Math.floor(cell / 3) + 1);
  const category = (id) => config.categories.find((item) => item.id === id);
  const button = (text, action, focus, primary = false) => {
    const node = element(
      'button',
      'button ' + (primary ? 'button--primary' : 'button--secondary'),
      text,
    );
    node.type = 'button';
    if (focus) node.dataset.focus = focus;
    node.addEventListener('click', action);
    return node;
  };
  const save = () => {
    try {
      storage?.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      storageFailed = true;
    }
    if (storageFailed)
      status.textContent =
        'La reprise locale n’est pas disponible. Tu peux continuer cette expérience sans fermer la page.';
    else status.textContent = '';
  };
  const title = (text, tag = 'h3') => element(tag, 'ai-lab__title', text);
  const feedback = (text, good = true) => {
    const node = element(
      'p',
      'ai-lab__feedback ' + (good ? 'ai-lab__feedback--correct' : 'ai-lab__feedback--review'),
      text,
    );
    node.setAttribute('role', 'status');
    return node;
  };
  const requireChoice = (field, text) => {
    field.querySelector('[data-required-choice]')?.remove();
    const message = feedback(text, false);
    message.dataset.requiredChoice = 'true';
    field.append(message);
    message.scrollIntoView?.({ block: 'nearest', behavior: 'instant' });
  };
  const changeStep = (index) => {
    state.step = index;
    if (!state.visited.includes(index)) state.visited.push(index);
    save();
    render();
    content.querySelector('h3')?.focus();
  };
  function renderQuestion(question, parent) {
    const field = element('fieldset', 'ai-lab__question');
    field.append(element('legend', '', question.prompt));
    for (const option of question.options) {
      const label = element('label', 'ai-lab__choice');
      const input = element('input');
      input.type = 'radio';
      input.name = 'ai-' + question.id;
      input.value = option.id;
      input.checked = state.answers[question.id] === option.id;
      input.dataset.focus = question.id + '-' + option.id;
      input.addEventListener('change', () => {
        state.answers[question.id] = option.id;
        state.checked[question.id] = false;
        save();
        render();
      });
      label.append(input, element('span', '', option.text));
      field.append(label);
    }
    field.append(
      button(
        'Vérifier ma réponse',
        () => {
          if (!state.answers[question.id]) {
            requireChoice(field, 'Choisis une réponse avant de la vérifier.');
            return;
          }
          state.checked[question.id] = true;
          save();
          render();
        },
        'check-' + question.id,
      ),
    );
    if (state.checked[question.id]) {
      const option = question.options.find((item) => item.id === state.answers[question.id]);
      field.append(
        feedback((option.correct ? 'Oui. ' : 'À revoir. ') + option.feedback, option.correct),
      );
    }
    parent.append(field);
  }
  function playX() {
    const current = replayMoves(state.moves);
    const decision = programDecision(current.board);
    if (!decision?.cells.length) return;
    const predicted = state.guess;
    const valid = decision.cells.includes(predicted);
    const chosen = valid ? predicted : decision.cells[0];
    gameNoticeGood = predicted === null || valid;
    state.moves.push(chosen);
    state.guess = null;
    gameNotice =
      predicted === null
        ? 'Le programme place X en ' + cellName(chosen) + '.'
        : valid
          ? 'Ta prévision ' +
            cellName(predicted) +
            ' respecte l’instruction. Le programme y place X.'
          : 'La case ' +
            cellName(predicted) +
            ' ne respecte pas cette instruction. Le programme place X en ' +
            cellName(chosen) +
            '.';
    save();
  }
  function renderGame() {
    const current = replayMoves(state.moves);
    const decision = programDecision(current.board);
    content.append(
      title('Le morpion : suivre une stratégie'),
      element('p', '', config.copy.gameIntro),
    );
    const mode = element('label', 'ai-lab__choice ai-lab__mode');
    const toggle = element('input');
    toggle.type = 'checkbox';
    toggle.checked = state.stepMode;
    toggle.dataset.focus = 'step-mode';
    toggle.addEventListener('change', () => {
      state.stepMode = toggle.checked;
      state.guess = null;
      if (!state.stepMode) playX();
      save();
      render();
    });
    mode.append(toggle, element('span', '', 'Mode pas à pas'));
    const gameControls = element('div', 'ai-lab__game-controls');
    gameControls.setAttribute('role', 'group');
    gameControls.setAttribute('aria-label', 'Commandes du morpion');
    gameControls.append(mode);
    const layout = element('div', 'ai-lab__game-layout');
    const game = element('div', 'ai-lab__game');
    const turn =
      current.outcome === 'draw'
        ? 'Match nul : la grille est pleine.'
        : current.outcome
          ? 'Les ' + current.outcome + ' ont gagné. La partie est terminée.'
          : decision
            ? config.copy.guessInstructions
            : 'À toi : place un O.';
    const turnText = element('p', 'ai-lab__turn', turn);
    turnText.setAttribute('role', 'status');
    gameControls.append(turnText);
    if (decision) {
      gameControls.append(
        button(
          state.guess === null ? 'Révéler le coup des X' : 'Vérifier ma prévision et jouer X',
          () => {
            playX();
            render();
          },
          'reveal-x',
          true,
        ),
      );
    }
    content.append(gameControls);
    const grid = element('div', 'ai-lab__board');
    grid.setAttribute('role', 'group');
    grid.setAttribute('aria-label', 'Grille de morpion : colonnes A à C, lignes 1 à 3');
    current.board.forEach((mark, cell) => {
      const node = button(
        '',
        () => {
          if (current.outcome || current.board[cell]) return;
          gameNoticeGood = true;
          if (decision) {
            state.guess = cell;
            gameNotice = 'Prévision : X en ' + cellName(cell) + '. Révèle le coup pour comparer.';
          } else {
            state.moves.push(cell);
            state.guess = null;
            gameNotice = 'Tu places O en ' + cellName(cell) + '.';
            if (!state.stepMode) playX();
          }
          save();
          render();
        },
        'cell-' + cell,
      );
      node.className = 'ai-lab__cell' + (mark ? ' ai-lab__cell--' + mark.toLowerCase() : '');
      node.disabled = Boolean(mark || current.outcome);
      node.setAttribute(
        'aria-label',
        'Case ' +
          cellName(cell) +
          ', ' +
          (mark || 'libre') +
          (state.guess === cell ? ', prévision sélectionnée' : ''),
      );
      if (!mark && !current.outcome)
        node.setAttribute('aria-pressed', String(state.guess === cell));
      node.append(
        element('span', 'ai-lab__coordinate', cellName(cell)),
        element('strong', '', mark || (state.guess === cell ? '?' : '')),
      );
      grid.append(node);
    });
    game.append(grid);
    if (gameNotice) game.append(feedback(gameNotice, gameNoticeGood));
    game.append(
      button(
        'Recommencer la partie',
        () => {
          state.moves = [];
          state.guess = null;
          gameNotice = '';
          if (!state.stepMode) playX();
          save();
          render();
        },
        'restart-game',
      ),
    );
    const instructions = element('div', 'ai-lab__instructions');
    instructions.append(title('Les instructions des X', 'h4'));
    const list = element('ol', 'ai-lab__rules');
    for (const rule of config.rules) {
      const item = element('li', '', rule.text);
      item.dataset.rule = rule.id;
      if (current.lastDecision?.ruleId === rule.id) {
        item.classList.add('is-applied');
        item.prepend(element('span', 'ai-lab__applied', 'Instruction appliquée'));
      }
      list.append(item);
    }
    instructions.append(list);
    if (current.lastDecision) {
      const rule = config.rules.find((item) => item.id === current.lastDecision.ruleId);
      instructions.append(
        feedback(
          'X a joué en ' +
            cellName(current.lastDecision.chosen) +
            '. ' +
            rule.reason.replace('{cells}', current.lastDecision.cells.map(cellName).join(', ')),
        ),
      );
    }
    layout.append(game, instructions);
    content.append(layout);
    if (current.outcome) {
      content.append(title('Ce que la partie montre'));
      for (const question of config.gameQuestions) renderQuestion(question, content);
    }
  }
  function renderFlow() {
    content.append(
      title('Règles, entraînement et utilisation'),
      element('p', '', config.flow.explanation),
      element('p', '', config.flow.prompt),
    );
    const list = element('ol', 'ai-lab__flow');
    state.order.forEach((id, index) => {
      const card = config.flow.cards.find((item) => item.id === id);
      const row = element('li', 'ai-lab__flow-card');
      row.dataset.card = id;
      row.append(element('span', 'ai-lab__flow-text', card.text));
      const actions = element('div', 'ai-lab__flow-actions');
      for (const [direction, label] of [
        [-1, 'Monter'],
        [1, 'Descendre'],
      ]) {
        const move = button(
          label,
          () => {
            const other = index + direction;
            [state.order[index], state.order[other]] = [state.order[other], state.order[index]];
            state.orderChecked = false;
            save();
            render();
          },
          label + '-' + id,
        );
        move.setAttribute('aria-label', label + ' : ' + card.text);
        move.disabled = index + direction < 0 || index + direction >= state.order.length;
        actions.append(move);
      }
      row.append(actions);
      list.append(row);
    });
    content.append(
      list,
      button(
        'Vérifier l’ordre',
        () => {
          state.orderChecked = true;
          save();
          render();
        },
        'check-order',
        true,
      ),
    );
    if (state.orderChecked) {
      const correct = state.order.every((id, index) => id === config.flow.cards[index].id);
      content.append(
        feedback(
          (correct ? 'Ordre retrouvé. ' : 'Compare les étapes et réessaie. ') +
            config.flow.feedback,
          correct,
        ),
      );
    }
  }
  function corpusView(parent) {
    const columns = element('div', 'ai-lab__corpus');
    for (const cat of config.categories.filter((item) => item.id !== 'indeterminee')) {
      const column = element('section', 'ai-lab__corpus-column');
      column.append(title(cat.emoji + ' ' + cat.label, 'h4'));
      const list = element('ul');
      for (const item of config.corpus.filter((item) => item.category === cat.id))
        list.append(element('li', '', item.text));
      column.append(list);
      columns.append(column);
    }
    parent.append(columns);
  }
  function renderExtraExamples() {
    content.append(
      title('Mettre les raccourcis à l’épreuve'),
      element('p', '', config.copy.extraPrompt),
    );
    const field = element('fieldset', 'ai-lab__question');
    field.append(element('legend', '', 'Exemples supplémentaires'));
    for (const example of config.extraExamples) {
      const label = element('label', 'ai-lab__choice');
      const input = element('input');
      input.type = 'checkbox';
      input.checked = state.selectedExamples.includes(example.id);
      input.dataset.focus = 'extra-' + example.id;
      input.addEventListener('change', () => {
        state.selectedExamples = input.checked
          ? [...state.selectedExamples, example.id]
          : state.selectedExamples.filter((id) => id !== example.id);
        state.examplesChecked = false;
        save();
        render();
      });
      label.append(input, element('span', '', example.text));
      field.append(label);
    }
    field.append(
      button(
        'Examiner mes choix',
        () => {
          state.examplesChecked = true;
          save();
          render();
        },
        'check-examples',
      ),
    );
    if (state.examplesChecked) {
      for (const example of config.extraExamples) {
        const selected = state.selectedExamples.includes(example.id);
        field.append(
          feedback(
            (selected ? 'Tu as retenu : ' : 'Tu n’as pas retenu : ') +
              example.text +
              ' ' +
              example.feedback,
            selected === example.useful,
          ),
        );
      }
    }
    content.append(field);
  }
  function renderEmojis() {
    content.append(title('Des messages, puis une règle'));
    if (!state.lockedRule) {
      content.append(element('p', '', config.copy.emojisIntro));
      corpusView(content);
      content.append(element('p', '', config.copy.hypothesisIntro));
      const field = element('fieldset', 'ai-lab__question');
      field.append(element('legend', '', 'Quelle hypothèse veux-tu tester ?'));
      for (const hypothesis of config.hypotheses) {
        const label = element('label', 'ai-lab__choice');
        const input = element('input');
        input.type = 'radio';
        input.name = 'ai-hypothesis';
        input.value = hypothesis.id;
        input.checked = state.candidate === hypothesis.id;
        input.dataset.focus = 'hypothesis-' + hypothesis.id;
        input.addEventListener('change', () => {
          state.candidate = hypothesis.id;
          save();
          render();
        });
        const text = element('span');
        text.append(
          element('strong', '', hypothesis.label),
          element('span', 'ai-lab__description', hypothesis.description),
        );
        label.append(input, text);
        field.append(label);
      }
      field.append(
        button(
          'Valider ma règle et passer au test',
          () => {
            if (!state.candidate) {
              requireChoice(field, 'Choisis une hypothèse avant de la valider.');
              return;
            }
            state.lockedRule = state.candidate;
            state.revealed = 0;
            state.emojiGuess = null;
            save();
            render();
          },
          'lock-rule',
          true,
        ),
      );
      content.append(field);
      return;
    }
    const hypothesis = config.hypotheses.find((item) => item.id === state.lockedRule);
    const rule = element('div', 'ai-lab__fixed-rule');
    rule.append(
      title('Règle conservée pour cet essai', 'h4'),
      element('p', '', hypothesis.description),
    );
    content.append(element('p', '', config.copy.fixedRuleIntro), rule);
    const examples = element('details', 'ai-lab__examples');
    examples.append(element('summary', '', 'Revoir les exemples étiquetés'));
    corpusView(examples);
    content.append(examples);
    const comparison = element('details', 'ai-lab__examples');
    comparison.append(element('summary', '', 'Que donne ta règle sur les exemples de départ ?'));
    const matches = config.corpus.filter(
      (message) => predictMessage(message.text, hypothesis).category === message.category,
    );
    const mismatch = config.corpus.find(
      (message) => predictMessage(message.text, hypothesis).category !== message.category,
    );
    for (const message of [matches[0], mismatch].filter(Boolean)) {
      const result = predictMessage(message.text, hypothesis);
      comparison.append(
        element(
          'p',
          '',
          '« ' +
            message.text +
            ' » : étiquette de départ « ' +
            category(message.category).label +
            ' » ; ta règle répond « ' +
            category(result.category).label +
            ' ».',
        ),
      );
    }
    content.append(comparison);
    for (const message of config.tests.slice(0, state.revealed)) {
      const prediction = predictMessage(message.text, hypothesis);
      const cat = category(prediction.category);
      const card = element('section', 'ai-lab__test');
      card.dataset.test = message.id;
      card.append(title(message.text, 'h4'));
      if (message === config.tests[0] && state.emojiGuess) {
        const correct = state.emojiGuess === prediction.category;
        card.append(
          feedback(
            correct
              ? 'Ta prévision correspond à la catégorie produite par la règle.'
              : 'Tu avais prévu « ' +
                  category(state.emojiGuess).label +
                  ' ». Suis les indices de la règle pour retrouver sa réponse ci-dessous.',
            correct,
          ),
        );
      }
      const result = element('dl', 'ai-lab__result');
      let clue = prediction.clues.length
        ? prediction.clues.map((item) => '« ' + item.term + ' »').join(', ')
        : 'Aucun indice prévu par cette règle.';
      if (prediction.conflict)
        clue += ' Plusieurs catégories correspondent : la règle répond donc « indéterminée ».';
      for (const [name, text] of [
        ['Catégorie produite par la règle', cat.emoji + ' ' + cat.label],
        ['Indice utilisé', clue],
        ['Interprétation du message', message.interpretation],
      ]) {
        result.append(element('dt', '', name), element('dd', '', text));
      }
      card.append(result);
      content.append(card);
    }
    if (state.revealed < config.tests.length) {
      let predictionField;
      if (state.revealed === 0) {
        predictionField = element('fieldset', 'ai-lab__question');
        predictionField.append(
          element('legend', '', config.tests[0].text),
          element(
            'p',
            '',
            'Quelle catégorie ta règle va-t-elle produire ? Prévois sa réponse avant de la révéler.',
          ),
        );
        for (const item of config.categories) {
          const label = element('label', 'ai-lab__choice');
          const input = element('input');
          input.type = 'radio';
          input.name = 'ai-emoji-guess';
          input.value = item.id;
          input.checked = state.emojiGuess === item.id;
          input.dataset.focus = 'emoji-guess-' + item.id;
          input.addEventListener('change', () => {
            state.emojiGuess = item.id;
            save();
          });
          label.append(input, element('span', '', item.emoji + ' ' + item.label));
          predictionField.append(label);
        }
        content.append(predictionField);
      }
      content.append(
        button(
          state.revealed ? 'Tester le message suivant' : 'Révéler la réponse de la règle',
          () => {
            if (state.revealed === 0 && !state.emojiGuess) {
              requireChoice(predictionField, 'Choisis la catégorie que ta règle va produire.');
              return;
            }
            state.revealed++;
            save();
            render();
          },
          'reveal-message',
          true,
        ),
      );
    } else {
      content.append(feedback(config.copy.emojisConclusion));
      renderExtraExamples();
    }
    content.append(
      button(
        'Terminer cet essai et choisir une autre règle',
        () => {
          state.lockedRule = null;
          state.revealed = 0;
          state.emojiGuess = null;
          state.examplesChecked = false;
          save();
          render();
        },
        'new-hypothesis',
      ),
    );
  }
  function renderReview() {
    content.append(title('Vérifie les trois idées'));
    for (const question of config.reviewQuestions) renderQuestion(question, content);
    const label = element('label', 'ai-lab__free-label', config.freeCheck.prompt);
    label.htmlFor = 'ai-free-answer';
    const input = element('textarea');
    input.id = 'ai-free-answer';
    input.rows = 4;
    input.maxLength = 1000;
    input.value = state.freeText;
    input.dataset.focus = 'free-answer';
    input.addEventListener('input', () => {
      state.freeText = input.value;
      save();
    });
    content.append(
      label,
      input,
      button(
        'Voir les critères et une réponse possible',
        () => {
          state.freeShown = true;
          save();
          render();
        },
        'show-criteria',
      ),
    );
    if (state.freeShown) {
      const box = element('div', 'ai-lab__criteria');
      box.append(element('p', '', config.copy.freeIntro));
      const list = element('ul');
      config.freeCheck.criteria.forEach((text) => list.append(element('li', '', text)));
      box.append(
        list,
        title('Une réponse possible', 'h4'),
        element('p', '', config.freeCheck.sample),
      );
      content.append(box);
    }
    content.append(
      button(
        'Réessayer le bilan',
        () => {
          for (const question of config.reviewQuestions) {
            delete state.answers[question.id];
            delete state.checked[question.id];
          }
          state.freeShown = false;
          save();
          render();
        },
        'retry-review',
      ),
    );
  }
  function renderReset() {
    const resetButton = button(
      'Réinitialiser',
      () => {
        const confirm = element('div', 'ai-lab__confirmation');
        confirm.setAttribute('role', 'group');
        confirm.setAttribute('aria-label', 'Confirmer la remise à zéro');
        confirm.append(
          element(
            'p',
            '',
            'Effacer la partie, les réponses et les choix enregistrés pour ce chapitre ?',
          ),
        );
        confirm.append(
          button(
            'Effacer ma progression',
            () => {
              try {
                storage?.removeItem(STORAGE_KEY);
              } catch {
                storageFailed = true;
              }
              state = initialProgress(config);
              gameNotice = '';
              render();
              status.textContent = 'La progression de ce chapitre est effacée.';
            },
            'confirm-reset',
          ),
          button(
            'Conserver ma progression',
            () => {
              renderReset();
              resetArea.querySelector('button').focus();
            },
            'cancel-reset',
          ),
        );
        resetArea.replaceChildren(confirm);
        confirm.querySelector('button').focus();
      },
      'reset-chapter',
    );
    resetButton.className = 'ai-lab__reset-link';
    resetArea.replaceChildren(resetButton);
  }
  function render() {
    const focus = root.contains(document.activeElement)
      ? document.activeElement.dataset.focus
      : null;
    nav.replaceChildren();
    stepNames.forEach((text, index) => {
      const node = button(text, () => changeStep(index), 'step-' + index);
      node.dataset.step = index;
      if (state.step === index) node.setAttribute('aria-current', 'step');
      nav.append(node);
    });
    visited.textContent = 'Étape ' + (state.step + 1) + ' sur 4';
    content.replaceChildren();
    [renderGame, renderFlow, renderEmojis, renderReview][state.step]();
    const heading = content.querySelector('h3');
    if (heading) heading.tabIndex = -1;
    controls.replaceChildren();
    if (state.step > 0)
      controls.append(button('← Précédent', () => changeStep(state.step - 1), 'previous-step'));
    if (state.step < 3)
      controls.append(button('Suivant →', () => changeStep(state.step + 1), 'next-step', true));
    renderReset();
    controls.append(resetArea);
    if (focus) {
      const target = [...root.querySelectorAll('[data-focus]')].find(
        (node) => node.dataset.focus === focus,
      );
      if (target && !target.disabled) target.focus({ preventScroll: true });
      else heading?.focus({ preventScroll: true });
    }
  }
  render();
  if (storageFailed)
    status.textContent =
      'La reprise locale n’est pas disponible. Tu peux continuer cette expérience sans fermer la page.';
  return root;
}
