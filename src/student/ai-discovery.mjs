export const DISCOVERY_STORAGE_KEY = 'codecraft.ai.decouverte.v1';

export function restoreDiscovery(raw, config) {
  const state = { version: 1, step: 0, choices: {}, checked: [], freeText: '', criteria: false };
  if (!raw || raw.version !== 1) return state;
  if (Number.isInteger(raw.step) && raw.step >= 0 && raw.step < config.steps.length)
    state.step = raw.step;
  for (const step of config.steps)
    for (const group of step.groups)
      for (const field of group.fields)
        if (field.choices.some((choice) => choice.id === raw.choices?.[field.id]))
          state.choices[field.id] = raw.choices[field.id];
  state.checked = Array.isArray(raw.checked)
    ? config.steps.map((step) => step.id).filter((id) => raw.checked.includes(id))
    : [];
  state.freeText = typeof raw.freeText === 'string' ? raw.freeText.slice(0, 1000) : '';
  state.criteria = raw.criteria === true;
  return state;
}

export function discoveryResult(group, choices) {
  if (group.fields.some((field) => !choices[field.id])) return 'missing';
  return group.fields.every((field) => choices[field.id] === field.answer) ? 'correct' : 'review';
}

export function createAiDiscovery(config, { element }) {
  const storageKey = config.storageKey || DISCOVERY_STORAGE_KEY;
  const root = element('section', 'ai-lab ai-discovery');
  root.setAttribute('aria-label', config.label || 'Découvrir les tâches d’un système d’IA');
  let state = restoreDiscovery(null, config);
  let storage;
  let unavailable = false;
  try {
    storage = window.localStorage;
    const raw = storage.getItem(storageKey);
    if (raw) state = restoreDiscovery(JSON.parse(raw), config);
  } catch {
    // A damaged entry does not prevent a fresh activity.
    try {
      storage?.removeItem(storageKey);
    } catch {
      unavailable = true;
    }
    if (!storage) unavailable = true;
  }
  const notice = element('p', 'ai-lab__status');
  notice.setAttribute('role', 'status');
  const nav = element('nav', 'ai-lab__nav');
  nav.setAttribute('aria-label', 'Étapes de la découverte');
  const progress = element('p', 'ai-lab__progress');
  const content = element('div', 'ai-discovery__content');
  const controls = element('div', 'ai-lab__navigation');
  root.append(nav, progress, notice, content, controls);
  const button = (label, action, id, primary = false) => {
    const node = element(
      'button',
      'button ' + (primary ? 'button--primary' : 'button--secondary'),
      label,
    );
    node.type = 'button';
    node.dataset.discoveryFocus = id;
    node.addEventListener('click', action);
    return node;
  };
  const save = () => {
    try {
      storage?.setItem(storageKey, JSON.stringify(state));
    } catch {
      unavailable = true;
    }
    notice.textContent = unavailable
      ? 'La reprise locale est indisponible. Tu peux poursuivre cette activité sur cette page.'
      : '';
  };
  const changeStep = (index) => {
    state.step = index;
    save();
    render();
    content.querySelector('h3').focus();
  };
  function renderGroup(group, checked) {
    const fieldset = element('fieldset', 'ai-discovery__group');
    fieldset.dataset.discoveryGroup = group.id;
    fieldset.append(element('legend', '', group.title));
    if (group.description) fieldset.append(element('p', '', group.description));
    const fields = element('div', 'ai-discovery__fields');
    for (const field of group.fields) {
      const label = element(field.control === 'radios' ? 'div' : 'label', 'ai-discovery__field');
      label.append(element('span', '', field.label));
      if (field.control === 'radios') {
        label.id = field.id;
        for (const choice of field.choices) {
          const option = element('label', 'ai-lab__choice');
          const input = element('input');
          input.type = 'radio';
          input.name = field.id;
          input.value = choice.id;
          input.checked = state.choices[field.id] === choice.id;
          input.dataset.discoveryFocus = field.id + '-' + choice.id;
          input.addEventListener('change', () => {
            state.choices[field.id] = choice.id;
            state.checked = state.checked.filter((id) => id !== config.steps[state.step].id);
            save();
            render();
          });
          option.append(input, element('span', '', choice.label));
          label.append(option);
        }
        fields.append(label);
        continue;
      }
      const select = element('select');
      select.id = field.id;
      select.dataset.discoveryFocus = field.id;
      const empty = element('option', '', 'Choisir…');
      empty.value = '';
      select.append(empty);
      for (const choice of field.choices) {
        const option = element('option', '', choice.label);
        option.value = choice.id;
        select.append(option);
      }
      select.value = state.choices[field.id] || '';
      select.addEventListener('change', () => {
        state.choices[field.id] = select.value;
        state.checked = state.checked.filter((id) => id !== config.steps[state.step].id);
        save();
        render();
      });
      label.append(select);
      fields.append(label);
    }
    fieldset.append(fields);
    if (checked) {
      const result = discoveryResult(group, state.choices);
      const text =
        result === 'missing'
          ? 'Complète les choix de cette carte, puis vérifie.'
          : (result === 'correct' ? 'Réponse correcte. ' : 'À revoir. ') + group.feedback;
      const feedback = element(
        'p',
        'ai-lab__feedback' + (result === 'correct' ? '' : ' ai-lab__feedback--review'),
        text,
      );
      feedback.setAttribute('role', 'status');
      fieldset.append(feedback);
    }
    return fieldset;
  }
  function renderImage(image) {
    const figure = element('figure', 'ai-discovery__figure');
    if (image.compact) figure.classList.add('ai-discovery__figure--compact');
    if (image.prompt)
      figure.append(element('p', 'ai-discovery__prompt', 'Consigne : « ' + image.prompt + ' »'));
    const img = element('img');
    img.src = image.src;
    img.alt = image.alt;
    img.width = 1536;
    img.height = 1024;
    figure.append(img, element('figcaption', '', image.caption));
    content.append(figure);
  }
  function renderFreeAnswer() {
    const label = element('label', 'ai-lab__free-label', config.freeCheck.prompt);
    label.htmlFor = 'ai-discovery-answer';
    const input = element('textarea');
    input.id = 'ai-discovery-answer';
    input.rows = 3;
    input.maxLength = 1000;
    input.value = state.freeText;
    input.addEventListener('input', () => {
      state.freeText = input.value;
      save();
    });
    content.append(
      label,
      input,
      button(
        'Voir les critères et un exemple',
        () => {
          state.criteria = true;
          save();
          render();
        },
        'criteria',
      ),
    );
    if (state.criteria) {
      const box = element('div', 'ai-lab__criteria');
      const list = element('ul');
      config.freeCheck.criteria.forEach((text) => list.append(element('li', '', text)));
      box.append(
        list,
        element('h4', '', 'Une réponse possible'),
        element('p', '', config.freeCheck.sample),
      );
      content.append(box);
    }
  }
  function renderReset() {
    const reset = element('div', 'ai-lab__reset');
    const trigger = button(
      'Réinitialiser',
      () => {
        const confirmation = element('div', 'ai-lab__confirmation');
        confirmation.append(
          element('p', '', 'Effacer les choix et la réponse enregistrés pour ce chapitre ?'),
          button(
            'Effacer ma progression',
            () => {
              try {
                storage?.removeItem(storageKey);
              } catch {
                unavailable = true;
              }
              state = restoreDiscovery(null, config);
              render();
              notice.textContent = 'La progression de ce chapitre est effacée.';
              content.querySelector('h3').focus();
            },
            'confirm-reset',
          ),
          button(
            'Conserver ma progression',
            () => {
              reset.replaceChildren(trigger);
              trigger.focus();
            },
            'cancel-reset',
          ),
        );
        reset.replaceChildren(confirmation);
        confirmation.querySelector('button').focus();
      },
      'reset',
    );
    trigger.className = 'ai-lab__reset-link';
    reset.append(trigger);
    controls.append(reset);
  }
  function render() {
    const active = root.contains(document.activeElement)
      ? document.activeElement.dataset.discoveryFocus
      : null;
    const step = config.steps[state.step];
    nav.replaceChildren();
    config.steps.forEach((item, index) => {
      const node = button(item.label, () => changeStep(index), 'step-' + index);
      if (index === state.step) node.setAttribute('aria-current', 'step');
      nav.append(node);
    });
    progress.textContent = 'Étape ' + (state.step + 1) + ' sur ' + config.steps.length;
    const heading = element('h3', 'ai-lab__title', step.title);
    heading.tabIndex = -1;
    content.replaceChildren(heading, element('p', '', step.intro));
    for (const link of step.links || []) {
      const line = element('p');
      const anchor = element('a', '', link.label + ' ↗');
      anchor.href = link.url;
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
      line.append(anchor);
      content.append(line);
    }
    if (step.image) renderImage(step.image);
    if (step.table) {
      const table = element('table', 'ai-discovery__table');
      table.append(element('caption', '', step.table.caption));
      const head = element('thead');
      const row = element('tr');
      for (const label of step.table.headings) {
        const cell = element('th', '', label);
        cell.scope = 'col';
        row.append(cell);
      }
      head.append(row);
      const body = element('tbody');
      for (const values of step.table.rows) {
        const row = element('tr');
        for (const value of values) row.append(element('td', '', value));
        body.append(row);
      }
      table.append(head, body);
      content.append(table);
    }
    const groups = element('div', 'ai-discovery__groups');
    if (state.step === 0) groups.classList.add('ai-discovery__groups--compact');
    step.groups.forEach((group) =>
      groups.append(renderGroup(group, state.checked.includes(step.id))),
    );
    content.append(
      groups,
      button(
        'Vérifier mes choix',
        () => {
          if (!state.checked.includes(step.id)) state.checked.push(step.id);
          save();
          render();
        },
        'check',
        true,
      ),
    );
    if (state.step === config.steps.length - 1) renderFreeAnswer();
    controls.replaceChildren();
    if (state.step > 0)
      controls.append(button('← Précédent', () => changeStep(state.step - 1), 'previous'));
    if (state.step < config.steps.length - 1)
      controls.append(button('Suivant →', () => changeStep(state.step + 1), 'next', true));
    renderReset();
    if (active) {
      const target = [...root.querySelectorAll('[data-discovery-focus]')].find(
        (node) => node.dataset.discoveryFocus === active,
      );
      target?.focus({ preventScroll: true });
    }
  }
  render();
  if (unavailable)
    notice.textContent =
      'La reprise locale est indisponible. Tu peux poursuivre cette activité sur cette page.';
  return root;
}
