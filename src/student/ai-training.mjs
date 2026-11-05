export const TRAINING_STORAGE_KEY = 'codecraft.ai.entrainement.v1';

export function restoreTraining(raw, config) {
  const state = { version: 1, step: 0, results: {}, selected: [], reason: '', answer: '' };
  if (!raw || raw.version !== 1) return state;
  if (Number.isInteger(raw.step) && raw.step >= 0 && raw.step < config.steps.length)
    state.step = raw.step;
  for (const photo of [...config.comparison, ...config.fresh]) {
    for (const phase of ['before', 'after']) {
      const key = phase + ':' + photo.file;
      if (config.classes.includes(raw.results?.[key])) state.results[key] = raw.results[key];
    }
  }
  state.selected = config.complement
    .filter((photo) => Array.isArray(raw.selected) && raw.selected.includes(photo.file))
    .map((photo) => photo.file);
  for (const key of ['reason', 'answer'])
    state[key] = typeof raw[key] === 'string' ? raw[key].slice(0, 1000) : '';
  return state;
}

export function trainingSummary(photos, results, phase) {
  let tested = 0;
  let correct = 0;
  for (const photo of photos) {
    const value = results[phase + ':' + photo.file];
    if (!value) continue;
    tested += 1;
    if (value === photo.expected) correct += 1;
  }
  return { tested, correct, total: photos.length };
}

export function createAiTraining(config, { element }) {
  const root = element('section', 'ai-lab ai-discovery ai-training');
  root.setAttribute('aria-label', 'Entraîner et comparer un modèle');
  let state = restoreTraining(null, config);
  let storage;
  let unavailable = false;
  try {
    storage = window.localStorage;
    const raw = storage.getItem(TRAINING_STORAGE_KEY);
    if (raw) state = restoreTraining(JSON.parse(raw), config);
  } catch {
    unavailable = true;
  }
  const notice = element('p', 'ai-lab__status');
  notice.setAttribute('role', 'status');
  const save = () => {
    try {
      storage?.setItem(TRAINING_STORAGE_KEY, JSON.stringify(state));
    } catch {
      unavailable = true;
    }
    notice.textContent = unavailable
      ? 'La reprise locale est indisponible. Tu peux poursuivre sur cette page.'
      : '';
  };
  const button = (text, id, action, primary = false) => {
    const node = element('button', 'button button--' + (primary ? 'primary' : 'secondary'), text);
    node.type = 'button';
    node.dataset.trainingAction = id;
    node.addEventListener('click', action);
    return node;
  };
  const paragraph = (parent, text) => parent.append(element('p', '', text));
  const textField = (parent, key, label) => {
    const wrapper = element('label', 'ai-training__text');
    wrapper.append(element('span', '', label));
    const input = element('textarea');
    input.id = 'ai-training-' + key;
    input.maxLength = 1000;
    input.rows = 3;
    input.value = state[key];
    input.addEventListener('input', () => {
      state[key] = input.value;
      save();
    });
    wrapper.append(input);
    parent.append(wrapper);
  };
  const photoLink = (photo, lot) => {
    const link = element('a', '', photo.file);
    link.href = config.basePath + '/' + lot + '/' + photo.folder + '/' + photo.file;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', 'Voir ' + photo.file + ' dans un autre onglet');
    return link;
  };
  function table(parent, photos, lot, phases, title, onChange = () => {}) {
    const wrapper = element('div', 'ai-training__table-wrap');
    const grid = element('table', 'ai-discovery__table');
    grid.append(element('caption', '', title));
    const header = element('thead');
    const headings = element('tr');
    for (const name of [
      'Photo et catégorie attendue',
      ...phases.map((p) => (p === 'before' ? 'Avant' : 'Après')),
    ]) {
      const th = element('th', '', name);
      th.scope = 'col';
      headings.append(th);
    }
    header.append(headings);
    const body = element('tbody');
    const summary = element('p', 'ai-training__summary');
    summary.setAttribute('role', 'status');
    const updateSummary = () => {
      summary.textContent = phases
        .map((phase) => {
          const result = trainingSummary(photos, state.results, phase);
          return (
            (phase === 'before' ? 'Avant' : 'Après') +
            ' : ' +
            result.tested +
            '/' +
            result.total +
            ' essais renseignés' +
            (result.tested
              ? ' ; ' + result.correct + '/' + result.tested + ' correctement classés.'
              : '.')
          );
        })
        .join(' ');
    };
    for (const photo of photos) {
      const row = element('tr');
      row.dataset.phases = String(phases.length);
      const name = element('th');
      name.scope = 'row';
      name.append(photoLink(photo, lot), element('span', 'ai-training__expected', photo.expected));
      row.append(name);
      for (const phase of phases) {
        const cell = element('td');
        cell.dataset.phase = phase === 'before' ? 'Avant' : 'Après';
        const select = element('select');
        const key = phase + ':' + photo.file;
        select.dataset.trainingResult = key;
        select.setAttribute(
          'aria-label',
          (phase === 'before' ? 'Avant' : 'Après') + ', ' + photo.file,
        );
        for (const value of ['', ...config.classes]) {
          const option = element('option', '', value || 'À tester');
          option.value = value;
          select.append(option);
        }
        select.value = state.results[key] || '';
        select.addEventListener('change', () => {
          if (select.value) state.results[key] = select.value;
          else delete state.results[key];
          save();
          updateSummary();
          onChange();
        });
        cell.append(select);
        row.append(cell);
      }
      body.append(row);
    }
    grid.append(header, body);
    wrapper.append(grid);
    parent.append(wrapper, summary);
    updateSummary();
  }
  function render() {
    root.replaceChildren();
    const nav = element('nav', 'ai-lab__nav');
    nav.setAttribute('aria-label', 'Étapes de l’entraînement');
    const change = (index) => {
      state.step = index;
      save();
      render();
      root.querySelector('h3').focus();
    };
    config.steps.forEach((step, index) => {
      const node = button(step.label, 'step-' + index, () => change(index));
      if (state.step === index) node.setAttribute('aria-current', 'step');
      nav.append(node);
    });
    const step = config.steps[state.step];
    const heading = element('h3', 'ai-lab__title', step.title);
    heading.tabIndex = -1;
    root.append(
      nav,
      element('p', 'ai-lab__progress', 'Étape ' + (state.step + 1) + ' sur 4'),
      notice,
      heading,
    );
    step.paragraphs.forEach((text) => paragraph(root, text));
    for (const item of step.links || []) {
      const line = element('p');
      const anchor = element('a', '', item.label + (item.url.startsWith('https:') ? ' ↗' : ''));
      anchor.href = item.url;
      if (item.url.startsWith('https:')) {
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
      } else anchor.download = '';
      line.append(anchor);
      root.append(line);
    }
    if (state.step === 1)
      table(
        root,
        config.comparison,
        '02-essais',
        ['before'],
        'Première version : reporte la catégorie proposée',
      );
    if (state.step === 2) {
      const choices = element('fieldset', 'ai-discovery__group');
      choices.append(element('legend', '', 'Mes photos à ajouter'));
      for (const photo of config.complement) {
        const line = element('div', 'ai-training__choice');
        const label = element('label', 'ai-lab__choice');
        const input = element('input');
        input.type = 'checkbox';
        input.checked = state.selected.includes(photo.file);
        input.dataset.trainingPhoto = photo.file;
        input.addEventListener('change', () => {
          state.selected = state.selected.filter((file) => file !== photo.file);
          if (input.checked) state.selected.push(photo.file);
          save();
        });
        label.append(input, element('span', '', photo.file + ' : ' + photo.description));
        const preview = photoLink(photo, '03-complement');
        preview.textContent = 'Voir ↗';
        line.append(label, preview);
        choices.append(line);
      }
      root.append(choices);
      textField(root, 'reason', config.reasonPrompt);
      const reminder = element(
        'aside',
        'ai-lab__feedback ai-lab__feedback--review ai-training__reminder',
      );
      paragraph(reminder, config.beforeReminder);
      reminder.append(button('Compléter le premier relevé', 'complete-before', () => change(1)));
      const updateReminder = () => {
        const { tested, total } = trainingSummary(config.comparison, state.results, 'before');
        reminder.hidden = tested === total;
      };
      updateReminder();
      root.append(reminder);
      paragraph(root, config.retrain);
      table(
        root,
        config.comparison,
        '02-essais',
        ['before', 'after'],
        'Les mêmes quatre photos : compare les versions',
        updateReminder,
      );
      paragraph(root, config.freshIntro);
      table(
        root,
        config.fresh,
        '04-nouveaux-essais',
        ['after'],
        'Quatre nouvelles photos : seconde version seulement',
      );
    }
    if (state.step === 3) {
      const recap = element('section', 'ai-lab__criteria ai-training__recap');
      recap.setAttribute('aria-label', 'Mon récapitulatif');
      recap.append(element('h4', '', 'Mon récapitulatif'));
      for (const [label, photos, phase] of [
        ['Avant', config.comparison, 'before'],
        ['Après, mêmes photos', config.comparison, 'after'],
        ['Nouvelles photos', config.fresh, 'after'],
      ]) {
        const { tested, correct, total } = trainingSummary(photos, state.results, phase);
        paragraph(
          recap,
          label +
            ' : ' +
            tested +
            '/' +
            total +
            ' essais renseignés' +
            (tested ? ', ' + correct + '/' + tested + ' correctement classés.' : '.'),
        );
      }
      const selected = config.complement.filter((photo) => state.selected.includes(photo.file));
      paragraph(
        recap,
        'Photos cochées : ' + (selected.map((photo) => photo.file).join(', ') || 'aucune') + '.',
      );
      paragraph(recap, 'Mon choix : ' + (state.reason || 'justification à compléter.'));
      recap.append(button('Revoir mes essais', 'review-results', () => change(2)));
      root.append(recap);
      textField(root, 'answer', config.freeCheck.prompt);
      const details = element('details', 'ai-lab__criteria');
      details.append(element('summary', '', 'Comparer avec les repères'));
      const list = element('ul');
      config.freeCheck.criteria.forEach((text) => list.append(element('li', '', text)));
      details.append(
        list,
        element('h4', '', 'Une réponse possible'),
        element('p', '', config.freeCheck.sample),
      );
      root.append(details);
      paragraph(root, config.biasCheck.prompt);
      const bias = element('details', 'ai-lab__criteria ai-training__bias');
      bias.append(
        element('summary', '', 'Une piste pour vérifier ma réponse'),
        element('p', '', config.biasCheck.answer),
      );
      root.append(bias);
    }
    const controls = element('div', 'ai-lab__navigation');
    if (state.step)
      controls.append(button('← Précédent', 'previous', () => change(state.step - 1)));
    if (state.step < 3)
      controls.append(button('Suivant →', 'next', () => change(state.step + 1), true));
    const reset = button('Réinitialiser', 'reset', () => {
      const box = element('div', 'ai-lab__confirmation');
      paragraph(box, 'Effacer le relevé et les réponses de ce chapitre sur CodeCraft ?');
      box.append(
        button('Effacer mes réponses', 'confirm-reset', () => {
          try {
            storage?.removeItem(TRAINING_STORAGE_KEY);
          } catch {
            unavailable = true;
          }
          state = restoreTraining(null, config);
          render();
          notice.textContent = 'Les réponses de ce chapitre sont effacées.';
          root.querySelector('h3').focus();
        }),
        button('Conserver mes réponses', 'cancel-reset', () => {
          render();
          root.querySelector('[data-training-action="reset"]').focus();
        }),
      );
      controls.replaceChildren(box);
      box.querySelector('button').focus();
    });
    reset.className = 'ai-lab__reset-link';
    controls.append(reset);
    root.append(controls);
    notice.textContent = unavailable
      ? 'La reprise locale est indisponible. Tu peux poursuivre sur cette page.'
      : '';
  }
  render();
  return root;
}
