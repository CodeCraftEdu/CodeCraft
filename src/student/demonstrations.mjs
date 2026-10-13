export function createDemonstrations({ element, highlightCode, codeFileLabel, demoCleanups }) {
  function createIllustration(config) {
    const figure = element('figure', 'lesson-illustration');
    const image = element('img');
    image.src = config.src;
    image.alt = config.alt;
    figure.append(image, element('figcaption', '', config.caption));
    return figure;
  }

  function createFlexDisplayDemo(config) {
    const demo = element('section', 'flex-display-demo');
    demo.append(element('h3', '', config.title), element('p', '', config.intro));
    const label = element('label', 'flex-display-demo__control', config.controlLabel);
    const select = element('select');
    config.options.forEach((option) => {
      if (!['block', 'flex'].includes(option.value)) return;
      const choice = element('option', '', option.label);
      choice.value = option.value;
      select.append(choice);
    });
    label.append(select);
    const layout = element('div', 'flex-display-demo__layout');
    const preview = element('div', 'flex-display-demo__preview');
    preview.append(element('p', 'flex-display-demo__caption', config.previewLabel));
    const cards = element('div', 'cartes');
    cards.setAttribute('role', 'group');
    cards.setAttribute('aria-label', config.previewLabel);
    config.cards.forEach((text) => cards.append(element('div', 'carte', text)));
    preview.append(cards);
    const source = element('div', 'flex-display-demo__source');
    source.append(element('p', 'flex-display-demo__caption', 'style.css'));
    const pre = element('pre', 'code-block');
    const code = element('code');
    pre.append(code);
    source.append(pre);
    layout.append(source, preview);
    const feedback = element('p', 'flex-display-demo__feedback');
    feedback.setAttribute('role', 'status');
    const update = () => {
      const display = select.value === 'flex' ? 'flex' : 'block';
      select.value = display;
      cards.style.display = display;
      highlightCode(code, '.cartes {\n  display: ' + display + ';\n}', 'display');
      feedback.replaceChildren(
        element(
          'span',
          'task-text',
          config.options.find((option) => option.value === display).feedback,
        ),
      );
    };
    select.value = 'block';
    select.addEventListener('change', update);
    update();
    demo.append(label, layout, feedback);
    return demo;
  }

  function createFlexPropertyDemo(config) {
    const allowed = {
      'flex-direction': ['row', 'column'],
      gap: ['0px', '12px', '24px'],
      'justify-content': [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      'align-items': ['flex-start', 'center', 'flex-end', 'stretch'],
      'flex-wrap': ['nowrap', 'wrap'],
    };
    const values = allowed[config.property];
    if (!values) return element('div');
    const demo = element('section', 'flex-property-demo');
    demo.append(element('h3', '', config.title), element('p', '', config.intro));
    const label = element('label', 'flex-property-demo__control', config.property);
    const select = element('select');
    config.options
      .filter((option) => values.includes(option.value))
      .forEach((option) => {
        const choice = element('option', '', option.value);
        choice.value = option.value;
        select.append(choice);
      });
    label.append(select);
    const layout = element('div', 'flex-property-demo__layout');
    const preview = element('div', 'flex-property-demo__preview');
    preview.append(element('p', 'flex-property-demo__caption', '.cartes : le parent'));
    const viewport = element('div', 'flex-property-demo__viewport');
    const cards = element('div', 'flex-property-demo__cards');
    cards.setAttribute('role', 'group');
    cards.setAttribute('aria-label', 'Cartes organisées par le parent Flexbox');
    config.cards.forEach((text, index) => {
      const card = element('div', 'flex-property-demo__card', text);
      if (config.property === 'align-items') card.style.minHeight = 50 + index * 22 + 'px';
      cards.append(card);
    });
    viewport.append(cards);
    preview.append(viewport);
    const axes = element('p', 'flex-property-demo__axes');
    preview.append(axes);
    const source = element('div', 'flex-property-demo__source');
    source.append(element('p', 'flex-property-demo__caption', 'style.css'));
    const pre = element('pre', 'code-block');
    const code = element('code');
    pre.append(code);
    source.append(pre);
    layout.append(source, preview);
    const feedback = element('p', 'flex-property-demo__feedback');
    feedback.setAttribute('role', 'status');
    const defaults = {
      display: 'flex',
      'flex-direction': 'row',
      gap: '12px',
      'justify-content': 'flex-start',
      'align-items': 'flex-start',
      'flex-wrap': 'nowrap',
    };
    if (config.property === 'flex-wrap') {
      cards.style.width = '260px';
      cards.style.maxWidth = '100%';
      cards.style.alignContent = 'flex-start';
    }
    const update = () => {
      const option =
        config.options.find(
          (option) => option.value === select.value && values.includes(option.value),
        ) || config.options[0];
      select.value = option.value;
      const styles = { ...defaults, [config.property]: option.value };
      Object.entries(styles).forEach(([name, value]) => cards.style.setProperty(name, value));
      let css =
        '.cartes {\n' +
        Object.entries(styles)
          .map(([name, value]) => '  ' + name + ': ' + value + ';\n')
          .join('');
      if (config.property === 'flex-wrap')
        css += '  width: 260px;\n  max-width: 100%;\n  align-content: flex-start;\n';
      highlightCode(code, css + '}', config.property);
      const column = styles['flex-direction'] === 'column';
      axes.textContent = column
        ? 'Axe principal ↓ · Axe transversal →'
        : 'Axe principal → · Axe transversal ↓';
      feedback.replaceChildren(element('span', 'task-text', option.feedback));
    };
    select.value = config.options[0].value;
    select.addEventListener('change', update);
    update();
    demo.append(label, layout, feedback);
    return demo;
  }

  function createWebComparison(config) {
    const demo = element('section', 'web-comparison');
    demo.append(element('h3', '', config.title), element('p', '', config.intro));
    const controls = element('div', 'web-comparison__controls');
    const label = element('label', '', 'Comparer les versions');
    const select = element('select');
    config.variants.forEach((variant, index) => {
      const option = element('option', '', variant.label);
      option.value = String(index);
      select.append(option);
    });
    label.append(select);
    const reset = element('button', '', 'Revenir au départ');
    reset.type = 'button';
    controls.append(label, reset);
    const layout = element('div', 'web-comparison__layout');
    const result = element('div', 'web-comparison__result');
    const previewLabel = element('p', 'web-comparison__caption', 'Aperçu');
    const tab = element('p', 'web-comparison__tab');
    const frame = element('iframe', 'web-comparison__frame');
    const origin = frame.ownerDocument?.location?.origin;
    // Firefox can treat 'self' differently in srcdoc. Keep the allowed HTTP origin explicit.
    const imageSources =
      "'self' data:" + (origin && /^https?:\/\//.test(origin) ? ' ' + origin : '');
    frame.title = config.title + ' : résultat de la version choisie';
    // Origine conservée uniquement pour mesurer le contenu ; scripts et navigation restent interdits.
    frame.setAttribute('sandbox', 'allow-same-origin');
    frame.setAttribute('referrerpolicy', 'no-referrer');
    let resizeObserver = null;
    const fitPreview = () => {
      const body = frame.contentDocument?.body;
      if (!body) return;
      frame.style.height =
        Math.min(440, Math.max(96, Math.ceil(body.getBoundingClientRect().height + 32))) + 'px';
    };
    frame.addEventListener('load', () => {
      if (resizeObserver) resizeObserver.disconnect();
      fitPreview();
      if (typeof ResizeObserver !== 'undefined' && frame.contentDocument?.body) {
        resizeObserver = new ResizeObserver(fitPreview);
        resizeObserver.observe(frame.contentDocument.body);
      }
    });
    demoCleanups.push(() => {
      if (resizeObserver) resizeObserver.disconnect();
    });
    result.append(previewLabel, tab, frame);
    const source = element('div', 'web-comparison__source');
    const sourceLabel = element('p', 'web-comparison__caption');
    source.append(sourceLabel);
    const pre = element('pre', 'code-block');
    const code = element('code');
    pre.append(code);
    source.append(pre);
    layout.append(source, result);
    const feedback = element('p', 'web-comparison__feedback');
    feedback.setAttribute('role', 'status');
    const update = () => {
      const variant = config.variants[Number(select.value)] || config.variants[0];
      tab.hidden = !variant.tabTitle;
      tab.textContent = variant.tabTitle ? 'Onglet simulé : ' + variant.tabTitle : '';
      const base =
        'body{margin:16px;color:#292d32;background:#fff;font:16px/1.5 Arial,sans-serif;overflow-wrap:anywhere}h1{font-size:26px}h2{font-size:21px}a{color:#174b9b}pre{white-space:pre-wrap}*{box-sizing:border-box}';
      frame.srcdoc =
        '<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="default-src \'none\'; style-src \'unsafe-inline\'; img-src ' +
        imageSources +
        '"><style>' +
        base +
        (variant.css || '') +
        '</style></head><body>' +
        variant.html +
        '</body></html>';
      highlightCode(code, variant.code);
      sourceLabel.textContent = codeFileLabel(variant.code, config.codeLabel);
      source.hidden = !variant.code;
      layout.style.gridTemplateColumns = variant.code ? '' : '1fr';
      feedback.replaceChildren(element('span', 'task-text', variant.feedback));
    };
    select.value = '0';
    select.addEventListener('change', update);
    reset.addEventListener('click', () => {
      select.value = '0';
      update();
    });
    update();
    demo.append(controls, layout, feedback);
    return demo;
  }

  function createScratchScript(config) {
    const figure = element('figure', 'scratch-script');
    figure.append(element('figcaption', 'scratch-script__caption', config.caption));
    const layout = element('div', 'scratch-script__layout');
    const stack = element('ol', 'scratch-script__stack');
    const explanations = element('ol', 'scratch-script__explanations');
    const renderParts = (parent, parts) =>
      parts.forEach((part) => {
        if (typeof part === 'string') parent.append(document.createTextNode(part));
        else if (part.flag) {
          const flag = element('span', 'scratch-script__flag', '⚑');
          flag.setAttribute('aria-hidden', 'true');
          parent.append(flag, element('span', 'scratch-script__sr', 'drapeau vert'));
        } else if (part.condition) {
          const condition = element(
            'span',
            'scratch-script__condition' +
              (part.operator ? ' scratch-script__condition--operator' : ''),
          );
          renderParts(condition, part.condition);
          parent.append(condition);
        } else if (part.reporter) {
          parent.append(
            element(
              'span',
              'scratch-script__reporter scratch-script__reporter--' + part.category,
              part.reporter,
            ),
          );
        } else if (part.choice) {
          const choice = element('span', 'scratch-script__choice', part.choice);
          const caret = element('span', '', ' ▾');
          caret.setAttribute('aria-hidden', 'true');
          choice.append(caret);
          parent.append(choice);
        } else parent.append(element('span', 'scratch-script__value', part.value));
      });
    const renderBlock = (block) => {
      const category = [
        'events',
        'motion',
        'looks',
        'control',
        'sensing',
        'variables',
        'custom',
      ].includes(block.category)
        ? block.category
        : 'motion';
      const row = element('li', 'scratch-script__block scratch-script__block--' + category);
      row.append(element('span', 'scratch-script__sr', block.label + ' : '));
      renderParts(row, block.parts);
      if (block.children?.length) {
        row.classList.add('scratch-script__block--container');
        const children = element('ol', 'scratch-script__children');
        block.children.forEach((child) => children.append(renderBlock(child)));
        row.append(children, element('span', 'scratch-script__closing', 'fin du bloc'));
      }
      return row;
    };
    config.blocks.forEach((block) => {
      stack.append(renderBlock(block));
      if (!block.explanation?.trim()) return;
      const explanation = element('li');
      explanation.append(
        element('span', 'scratch-script__category', block.label),
        element('p', '', block.explanation),
      );
      explanations.append(explanation);
    });
    layout.append(stack);
    if (explanations.childElementCount) layout.append(explanations);
    else layout.classList.add('scratch-script__layout--single');
    figure.append(layout);
    if (config.note) figure.append(element('p', 'scratch-script__note', config.note));
    return figure;
  }

  function createScratchVisual(config) {
    if (!config.stacks) return createScratchScript(config);
    const figure = element('figure', 'scratch-scripts');
    figure.append(element('figcaption', 'scratch-script__caption', config.caption));
    const grid = element('div', 'scratch-scripts__grid');
    config.stacks.forEach((stack) => grid.append(createScratchScript(stack)));
    figure.append(grid, element('p', 'scratch-script__note', config.note));
    return figure;
  }

  function createCoordinateDiagram(config) {
    const figure = element('figure', 'scratch-coordinates');
    figure.append(element('figcaption', 'scratch-script__caption', config.caption));
    const grid = element('div', 'scratch-coordinates__grid');
    ['up', 'left', 'center', 'right', 'down'].forEach((direction) => {
      grid.append(element('div', 'scratch-coordinates__' + direction, config[direction]));
    });
    figure.append(grid, element('p', 'scratch-script__note', config.note));
    return figure;
  }

  function createCodeDiagram(config) {
    const figure = element('figure', 'code-diagram');
    figure.setAttribute('aria-label', 'Code dans l’éditeur et résultat dans la console');
    const editor = element('div', 'code-diagram__editor');
    const header = element('div', 'code-diagram__header');
    const tools = element('div', 'code-diagram__tools');
    const icon = element('span', 'code-diagram__play', '▶');
    icon.setAttribute('aria-hidden', 'true');
    const label = element('span', 'code-diagram__run');
    label.append(icon, document.createTextNode('Exécuter'));
    tools.append(element('span', 'code-diagram__file', config.filename), label);
    header.append(element('span', 'code-diagram__zone', 'Éditeur'), tools);
    const pre = element('pre', 'code-diagram__source');
    const code = element('code');
    highlightCode(code, config.codeParts.map((part) => part.text).join(''));
    pre.append(code);
    editor.append(header, pre);
    const consolePanel = element('div', 'code-diagram__console');
    consolePanel.append(
      element('div', 'code-diagram__header', 'Console'),
      element('pre', 'code-diagram__result', config.output),
    );
    figure.append(editor, consolePanel);
    if (config.note) figure.append(element('p', 'code-diagram__note', config.note));
    return figure;
  }

  return {
    createIllustration,
    createFlexDisplayDemo,
    createFlexPropertyDemo,
    createWebComparison,
    createScratchVisual,
    createCoordinateDiagram,
    createCodeDiagram,
  };
}
