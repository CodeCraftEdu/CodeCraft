(function () {
  "use strict";
  const data = window.CODECRAFT_DATA;
  const pedagogy = window.CodeCraftPedagogy;
  const main = document.getElementById("main-content");
  if (!data || !main) return;
  document.querySelector('.skip-link').addEventListener('click', (event) => {
    event.preventDefault();
    main.focus();
  });
  const checks = new Set();
  const demoCleanups = [];
  // Partagé avec les panneaux pédagogiques, créés après le chargement de l'app.
  window.CodeCraftInlineText = appendInlineText;
  window.CodeCraftHighlightCode = highlightCode;
  window.CodeCraftCreateCode = createCode;
  // Nettoyage d'affichage uniquement : conserver les données, les liens et le code.
  const studentTitle = text => text.replace(/^\s*\d+\s*(?:--+|[.:-]|[\u2013\u2014])\s*/, '')
    .replace(/\s+(?:--+|[\u2013\u2014]|-)\s+/g, ' : ');
  function appendInlineText(node, text) {
    // Construire des nœuds texte : les exemples HTML ne sont jamais exécutés.
    const tags = 'html|head|body|title|meta|link|h[1-6]|p|a|img|ul|ol|li|div|span|header|main|footer|nav|section|article|strong|em|br|button|input|label|form|table|thead|tbody|tr|th|td|figure|figcaption|select|option|textarea|video|audio|source|script|style';
    // Les noms nus sont reconnus uniquement en Web. « a » et « article » restent
    // des mots ordinaires sauf après une mention explicite de balise/élément.
    const web = document.body?.dataset?.domain === 'web';
    const attributes = 'lang|charset|href|src|alt|srcset|sizes|rel|class|id|target|loading|colspan|rowspan';
    const pair = '(?:html|head|body|title|h[1-6]|ul|ol|li|div|span|' + attributes + ')';
    const boundary = '(?![\\w-]|\\.[\\w])';
    const bare = web ? '|(?<![\\w./-])(?:' + attributes + ')\\s*=\\s*(?:"[^"\\n]*"|\'[^\'\\n]*\')'
      + '|(?<![\\w./-])' + pair + '(?:/' + pair + ')+' + boundary
      + '|(?<![\\w./-])/?(?:html|head|body|title|meta|link|h[1-6]|p|img|ul|ol|li|div|span|header|main|footer|nav|strong|em|br|input|textarea|' + attributes + ')' + boundary
      + '|(?<=balise |élément )a\\b|(?<=balise |élément )article\\b|(?<=attribut )(?:style|name|type|content|value|width|height)\\b' : '';
    const pattern = new RegExp('`([^`\\n]+)`|<!doctype\\s+html>|<\\/?(?:' + tags + ')(?:\\s+[^<>\\n]*)?\\s*\\/?>' + bare, 'g');
    let position = 0;
    for (const match of text.matchAll(pattern)) {
      if (match.index > position) node.append(document.createTextNode(text.slice(position, match.index)));
      const code = document.createElement('code');
      code.className = 'inline-code';
      code.textContent = match[1] || match[0];
      node.append(code);
      position = match.index + match[0].length;
    }
    if (position < text.length) node.append(document.createTextNode(text.slice(position)));
  }
  function setInlineText(node, text) {
    node.replaceChildren();
    appendInlineText(node, text);
  }
  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) {
      if (tag === 'p' || tag === 'li' || (tag === 'span' && className === 'task-text')) appendInlineText(node, text);
      else node.textContent = /(?:^|\s)(?:section-title|subheading|lesson-title|route-card-title)(?:\s|$)/.test(className || '') ? studentTitle(text) : text;
    }
    return node;
  };
  function codeTokens(source) {
    const tokens = [];
    const add = (text, kind = '') => { if (text) tokens.push({ text, kind }); };
    if (/<\/?[a-z][\w:-]*(?:\s|>|\/)|<!doctype|<!--/i.test(source)) {
      const tags = /<!--[\s\S]*?(?:-->|$)|<!doctype[^>]*>|<\/?[a-z][\w:-]*(?:[^"'<>]|"[^"]*"|'[^']*')*>/gi;
      let position = 0;
      for (const match of source.matchAll(tags)) {
        add(source.slice(position, match.index));
        const tag = match[0];
        if (tag.startsWith('<!--')) add(tag, 'comment');
        else if (/^<!doctype/i.test(tag)) add(tag, 'tag');
        else {
          const opening = tag.match(/^(<\/?)([\w:-]+)/);
          add(opening[1]); add(opening[2], 'tag');
          const rest = tag.slice(opening[0].length);
          let offset = 0;
          for (const attribute of rest.matchAll(/"[^"]*"|'[^']*'|[\w:-]+(?=\s*=)/g)) {
            add(rest.slice(offset, attribute.index));
            add(attribute[0], /^["']/.test(attribute[0]) ? 'string' : 'attribute');
            offset = attribute.index + attribute[0].length;
          }
          add(rest.slice(offset));
        }
        position = match.index + tag.length;
      }
      add(source.slice(position));
    } else {
      const css = /\{[\s\S]*?[\w-]+\s*:/.test(source) && !/^\s*\{/.test(source);
      const python = /(^|\n)\s*(?:def |from |import |print\(|if .*:|for .*:|while .*:)/.test(source);
      const pattern = python
        ? /#[^\n]*|"""[\s\S]*?(?:"""|$)|'''[\s\S]*?(?:'''|$)|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b(?:def|return|if|elif|else|for|while|in|import|from|as|and|or|not|True|False|None|break|continue|class|try|except|with)\b|\b(?:print|input|int|float|str|len|range|list|sum|min|max)(?=\s*\()|\b\d+(?:\.\d+)?\b/g
        : /\/\*[\s\S]*?(?:\*\/|$)|\/\/[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b(?:const|let|var|function|return|if|else|for|while|new|true|false|null|undefined|async|await|class|import|export)\b|[\w-]+(?=\s*:)|#[\da-fA-F]{3,8}\b|\b\d+(?:\.\d+)?(?:px|rem|em|%|s)?/g;
      let position = 0;
      for (const match of source.matchAll(pattern)) {
        add(source.slice(position, match.index));
        const value = match[0];
        const kind = /^(?:\/\*|\/\/)/.test(value) || (python && value.startsWith('#')) ? 'comment'
          : /^["']/.test(value) ? 'string'
          : /^\d|^#/.test(value) ? 'number'
          : css ? 'attribute'
          : /^(?:print|input|int|float|str|len|range|list|sum|min|max)$/.test(value) ? 'function' : 'keyword';
        add(value, kind);
        position = match.index + value.length;
      }
      add(source.slice(position));
    }
    return tokens;
  }
  function highlightCode(node, source, activeProperty) {
    node.replaceChildren();
    node.className = 'editor-code';
    const lines = source.split('\n');
    const content = lines.map((text, index) => {
      const active = activeProperty && text.trimStart().startsWith(activeProperty + ':');
      const line = element('span', 'editor-line' + (active ? ' editor-line--active' : ''));
      const number = element('span', 'editor-line__number');
      number.setAttribute('aria-hidden', 'true');
      number.setAttribute('data-line', String(index + 1));
      const value = element('span', 'editor-line__text');
      const indent = text.match(/^[ \t]*/)[0].replace(/\t/g, '    ').length;
      value.setAttribute('style', '--indent: ' + indent + 'ch');
      line.append(number, value);
      if (index) node.append('\n');
      node.append(line);
      return value;
    });
    let index = 0;
    codeTokens(source).forEach(token => {
      token.text.split('\n').forEach((part, offset) => {
        if (offset) index++;
        if (part) content[index].append(token.kind ? element('span', 'syntax-token--' + token.kind, part) : part);
      });
    });
  }
  function codeFileLabel(code, label) {
    if (label && !['HTML', 'CSS'].includes(label)) return label;
    if (/<\/?[a-z][\w:-]*(?:\s|>|\/)|<!doctype/i.test(code)) return 'index.html';
    if (/\{[\s\S]*?[\w-]+\s*:/.test(code) && !/^\s*\{/.test(code)) return 'style.css';
    if (/\b(?:const|let|var|function|console\.log)\b/.test(code)) return 'script.js';
    if (/\b(?:print|input|range)\s*\(|(^|\n)\s*(?:def |import |from |if .*:|for .*:)/.test(code)) return 'main.py';
    return label || 'Code';
  }
  function createCode(code, filename) {
    const editor = element('div', 'code-editor');
    editor.append(element('p', 'code-editor__header', codeFileLabel(code, filename)));
    const pre = element("pre", "code-block");
    const codeNode = element("code");
    highlightCode(codeNode, code);
    pre.append(codeNode);
    editor.append(pre);
    return editor;
  }

  function createHint(item) {
    const details = element("details", "hint");
    details.append(element("summary", "", "Voir un indice"));
    if (item.hint) details.append(element("p", "", item.hint));
    (item.hints || []).forEach((text, index) => {
      const step = element('details', 'syntax');
      const labels = ['Où regarder', 'Cibler la difficulté', 'Comparer', 'Corriger pas à pas'];
      step.append(element('summary', '', labels[index] || 'Aide supplémentaire'), element('p', '', text));
      details.append(step);
    });

    if (item.syntax) {
      const syntax = element("details", "syntax");
      syntax.append(element("summary", "", "Afficher la syntaxe complète"));
      syntax.append(createCode(item.syntax));
      details.append(syntax);
    }
    return details;
  }

  function createTasks(block, routeId) {
    const section = element("section", "content-card");
    section.append(element("h2", "section-title", block.title));
    if (block.intro) section.append(element("p", "section-intro", block.intro));

    const list = element("ol", "task-list");
    block.items.forEach((item) => {
      const row = element("li", "task-item");
      row.dataset.taskId = item.id;
      const label = element("label", "task-label");
      const checkbox = element("input");
      checkbox.type = "checkbox";
      const key = `${routeId}:${item.id}`;
      checkbox.checked = checks.has(key);
      checkbox.addEventListener("change", () => checkbox.checked ? checks.add(key) : checks.delete(key));

      const text = element(item.code ? "code" : "span", "task-text", item.text);
      label.append(checkbox, text);
      row.append(label);
      if (item.hint || item.hints) row.append(createHint(item));
      list.append(row);
    });
    section.append(list);
    return section;
  }

  function createChecklist(block, routeId) {
    const section = element("section", "content-card");
    section.append(element("h2", "section-title", block.title));
    const list = element("ul", "check-list");
    block.items.forEach((item) => {
      const row = element("li", "check-item");
      row.dataset.taskId = item.id;
      const label = element("label", "task-label");
      const checkbox = element("input");
      checkbox.type = "checkbox";
      const key = `${routeId}:${item.id}`;
      checkbox.checked = checks.has(key);
      checkbox.addEventListener("change", () => checkbox.checked ? checks.add(key) : checks.delete(key));
      label.append(checkbox, element("span", "task-text", item.text));
      row.append(label);
      list.append(row);
    });
    section.append(list);
    return section;
  }

  function createCallout(block) {
    const section = element("section", block.presentation === 'compact' ? 'lesson-note' : `callout callout--${block.tone || "neutral"}`);
    section.append(element("h2", "section-title", block.title));
    const paragraph = element("p");
    const moduleLink = block.moduleLink;
    const position = moduleLink ? block.text.indexOf(moduleLink.text) : -1;
    if (position >= 0) {
      appendInlineText(paragraph, block.text.slice(0, position));
      paragraph.append(link(moduleLink.text, moduleUrl(moduleLink.moduleId), ''));
      appendInlineText(paragraph, block.text.slice(position + moduleLink.text.length));
    } else {
      appendInlineText(paragraph, block.text);
    }
    section.append(paragraph);
    if (block.illustration) section.append(createIllustration(block.illustration));
    return section;
  }

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
    config.options.forEach(option => {
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
    config.cards.forEach(text => cards.append(element('div', 'carte', text)));
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
      feedback.replaceChildren(element('span', 'task-text', config.options.find(option => option.value === display).feedback));
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
      'justify-content': ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
      'align-items': ['flex-start', 'center', 'flex-end', 'stretch'],
      'flex-wrap': ['nowrap', 'wrap']
    };
    const values = allowed[config.property];
    if (!values) return element('div');
    const demo = element('section', 'flex-property-demo');
    demo.append(element('h3', '', config.title), element('p', '', config.intro));
    const label = element('label', 'flex-property-demo__control', config.property);
    const select = element('select');
    config.options.filter(option => values.includes(option.value)).forEach(option => {
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
      if (config.property === 'align-items') card.style.minHeight = (50 + index * 22) + 'px';
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
    pre.append(code); source.append(pre); layout.append(source, preview);
    const feedback = element('p', 'flex-property-demo__feedback');
    feedback.setAttribute('role', 'status');
    const defaults = { display: 'flex', 'flex-direction': 'row', gap: '12px', 'justify-content': 'flex-start', 'align-items': 'flex-start', 'flex-wrap': 'nowrap' };
    if (config.property === 'flex-wrap') {
      cards.style.width = '260px'; cards.style.maxWidth = '100%';
      cards.style.alignContent = 'flex-start';
    }
    const update = () => {
      const option = config.options.find(option => option.value === select.value && values.includes(option.value)) || config.options[0];
      select.value = option.value;
      const styles = { ...defaults, [config.property]: option.value };
      Object.entries(styles).forEach(([name, value]) => cards.style.setProperty(name, value));
      let css = '.cartes {\n' + Object.entries(styles).map(([name, value]) => '  ' + name + ': ' + value + ';\n').join('');
      if (config.property === 'flex-wrap') css += '  width: 260px;\n  max-width: 100%;\n  align-content: flex-start;\n';
      highlightCode(code, css + '}', config.property);
      const column = styles['flex-direction'] === 'column';
      axes.textContent = column ? 'Axe principal ↓ · Axe transversal →' : 'Axe principal → · Axe transversal ↓';
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
      option.value = String(index); select.append(option);
    });
    label.append(select);
    const reset = element('button', '', 'Revenir au départ');
    reset.type = 'button'; controls.append(label, reset);
    const layout = element('div', 'web-comparison__layout');
    const result = element('div', 'web-comparison__result');
    const previewLabel = element('p', 'web-comparison__caption', 'Aperçu');
    const tab = element('p', 'web-comparison__tab');
    const frame = element('iframe', 'web-comparison__frame');
    frame.title = config.title + ' : résultat de la version choisie';
    // Origine conservée uniquement pour mesurer le contenu ; scripts et navigation restent interdits.
    frame.setAttribute('sandbox', 'allow-same-origin');
    frame.setAttribute('referrerpolicy', 'no-referrer');
    let resizeObserver = null;
    const fitPreview = () => {
      const body = frame.contentDocument?.body;
      if (!body) return;
      frame.style.height = Math.min(440, Math.max(96, Math.ceil(body.getBoundingClientRect().height + 32))) + 'px';
    };
    frame.addEventListener('load', () => {
      if (resizeObserver) resizeObserver.disconnect();
      fitPreview();
      if (typeof ResizeObserver !== 'undefined' && frame.contentDocument?.body) {
        resizeObserver = new ResizeObserver(fitPreview);
        resizeObserver.observe(frame.contentDocument.body);
      }
    });
    demoCleanups.push(() => { if (resizeObserver) resizeObserver.disconnect(); });
    result.append(previewLabel, tab, frame);
    const source = element('div', 'web-comparison__source');
    const sourceLabel = element('p', 'web-comparison__caption');
    source.append(sourceLabel);
    const pre = element('pre', 'code-block');
    const code = element('code'); pre.append(code); source.append(pre);
    layout.append(source, result);
    const feedback = element('p', 'web-comparison__feedback');
    feedback.setAttribute('role', 'status');
    const update = () => {
      const variant = config.variants[Number(select.value)] || config.variants[0];
      tab.hidden = !variant.tabTitle;
      tab.textContent = variant.tabTitle ? 'Onglet simulé : ' + variant.tabTitle : '';
      const base = 'body{margin:16px;color:#292d32;background:#fff;font:16px/1.5 Arial,sans-serif;overflow-wrap:anywhere}h1{font-size:26px}h2{font-size:21px}a{color:#174b9b}pre{white-space:pre-wrap}*{box-sizing:border-box}';
      frame.srcdoc = '<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="default-src \'none\'; style-src \'unsafe-inline\'; img-src data:"><style>' + base + (variant.css || '') + '</style></head><body>' + variant.html + '</body></html>';
      highlightCode(code, variant.code);
      sourceLabel.textContent = codeFileLabel(variant.code, config.codeLabel);
      source.hidden = !variant.code;
      layout.style.gridTemplateColumns = variant.code ? '' : '1fr';
      feedback.replaceChildren(element('span', 'task-text', variant.feedback));
    };
    select.value = '0';
    select.addEventListener('change', update);
    reset.addEventListener('click', () => { select.value = '0'; update(); });
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
    const renderParts = (parent, parts) => parts.forEach(part => {
      if (typeof part === 'string') parent.append(document.createTextNode(part));
      else if (part.flag) {
        const flag = element('span', 'scratch-script__flag', '⚑');
        flag.setAttribute('aria-hidden', 'true');
        parent.append(flag, element('span', 'scratch-script__sr', 'drapeau vert'));
      } else if (part.condition) {
        const condition = element('span', 'scratch-script__condition' + (part.operator ? ' scratch-script__condition--operator' : ''));
        renderParts(condition, part.condition); parent.append(condition);
      } else if (part.choice) {
        const choice = element('span', 'scratch-script__choice', part.choice);
        const caret = element('span', '', ' ▾'); caret.setAttribute('aria-hidden', 'true');
        choice.append(caret); parent.append(choice);
      } else parent.append(element('span', 'scratch-script__value', part.value));
    });
    const renderBlock = block => {
      const category = ['events', 'motion', 'looks', 'control', 'sensing', 'variables', 'custom'].includes(block.category) ? block.category : 'motion';
      const row = element('li', 'scratch-script__block scratch-script__block--' + category);
      row.append(element('span', 'scratch-script__sr', block.label + ' : '));
      renderParts(row, block.parts);
      if (block.children?.length) {
        row.classList.add('scratch-script__block--container');
        const children = element('ol', 'scratch-script__children');
        block.children.forEach(child => children.append(renderBlock(child)));
        row.append(children, element('span', 'scratch-script__closing', 'fin du bloc'));
      }
      return row;
    };
    config.blocks.forEach((block, index) => {
      stack.append(renderBlock(block));
      const explanation = element('li');
      explanation.append(element('span', 'scratch-script__category', (index + 1) + ' · ' + block.label), element('p', '', block.explanation));
      explanations.append(explanation);
    });
    layout.append(stack, explanations);
    figure.append(layout);
    if (config.note) figure.append(element('p', 'scratch-script__note', config.note));
    return figure;
  }

  function createScratchVisual(config) {
    if (!config.stacks) return createScratchScript(config);
    const figure = element('figure', 'scratch-scripts');
    figure.append(element('figcaption', 'scratch-script__caption', config.caption));
    const grid = element('div', 'scratch-scripts__grid');
    config.stacks.forEach(stack => grid.append(createScratchScript(stack)));
    figure.append(grid, element('p', 'scratch-script__note', config.note));
    return figure;
  }

  function createCoordinateDiagram(config) {
    const figure = element('figure', 'scratch-coordinates');
    figure.append(element('figcaption', 'scratch-script__caption', config.caption));
    const grid = element('div', 'scratch-coordinates__grid');
    ['up', 'left', 'center', 'right', 'down'].forEach(direction => {
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
    highlightCode(code, config.codeParts.map(part => part.text).join(''));
    pre.append(code);
    editor.append(header, pre);
    const consolePanel = element('div', 'code-diagram__console');
    consolePanel.append(element('div', 'code-diagram__header', 'Console'), element('pre', 'code-diagram__result', config.output));
    figure.append(editor, consolePanel);
    if (config.note) figure.append(element('p', 'code-diagram__note', config.note));
    return figure;
  }

  function createLesson(block) {
    const section = element("section", "content-card");
    section.append(element("h2", "section-title", block.title));
    const visual = block.visualScript || block.coordinateDiagram;
    if (visual && block.shortSteps) {
      const steps = element('ol', 'scratch-quick-steps');
      block.shortSteps.forEach(text => steps.append(element('li', '', text)));
      section.append(steps);
    } else if (block.actionSteps) {
      const steps = element('ol', 'lesson-actions');
      block.actionSteps.forEach((step) => {
        const action = element('li', 'lesson-action');
        const heading = element('h3', 'lesson-action__title');
        heading.append(document.createTextNode(step.title));
        action.append(heading, element('p', '', block.paragraphs[step.paragraphIndex]));
        if (step.showCode) {
          action.append(element('p', 'lesson-action__label', 'Dans l’éditeur'), createCode(block.code));
        }
        if (step.output !== undefined) {
          action.append(element('p', 'lesson-action__label', 'Résultat dans la console'), element('pre', 'lesson-action__output', step.output));
        }
        steps.append(action);
      });
      section.append(steps);
    } else (block.paragraphs || []).forEach((paragraph) => section.append(element("p", "", paragraph)));
    if (block.codeDiagram) section.append(createCodeDiagram(block.codeDiagram));
    if (block.illustration) {
      section.append(createIllustration(block.illustration));
    }
    if (block.downloads?.length) {
      const downloads = element('ul', 'value-list');
      block.downloads.forEach(resource => {
        const item = element('li');
        const anchor = link(resource.label, resource.path, 'lesson-text-link');
        anchor.download = resource.filename;
        item.append(anchor);
        downloads.append(item);
      });
      section.append(downloads);
    }
    if (block.coordinateDiagram) section.append(createCoordinateDiagram(block.coordinateDiagram));
    if (block.visualScript) {
      section.append(createScratchVisual(block.visualScript));
    } else if (block.code && !block.actionSteps) section.append(createCode(block.code, block.filename || block.title?.match(/\b[\w-]+\.(?:html|css|js|py)\b/)?.[0]));
    if (visual && block.shortSteps && block.paragraphs?.length) {
      const details = element('details', 'hint scratch-explanations');
      details.append(element('summary', '', 'Explications et repères supplémentaires'));
      block.paragraphs.forEach(text => details.append(element('p', '', text)));
      section.append(details);
    }
    if (block.values && block.values.length) {
      section.append(element("h3", "subheading", block.valuesTitle));
      const values = element("ul", "value-list");
      block.values.forEach((value) => values.append(element("li", "", value)));
      section.append(values);
    }
    if (block.demonstration?.type === 'flex-display') {
      section.append(createFlexDisplayDemo(block.demonstration));
    }
    if (block.demonstration?.type === 'flex-property') {
      section.append(createFlexPropertyDemo(block.demonstration));
    }
    if (block.demonstration?.type === 'web-comparison') {
      section.append(createWebComparison(block.demonstration));
    }
    return section;
  }

  function createDetails(block, routeId) {
    const details = element("details", "content-card disclosure");
    details.append(element("summary", "section-title", block.title));
    const body = element("div", "disclosure-body");
    block.blocks.forEach((child) => body.append(createBlock(child, routeId)));
    details.append(body);
    return details;
  }

  function createBlock(block, routeId) {
    const result = renderBlock(block, routeId);
    if (block.type === 'lesson') result.classList.add('lesson-card--reading');
    if (block.type === 'tasks' || block.type === 'checklist') result.classList.add('lesson-card--practice');
    if (block.id) { result.dataset.activityId = block.id; result.tabIndex = -1; }
    return result;
  }

  function renderBlock(block, routeId) {
    if (block.type === "reference") {
      const source = data.modules[block.moduleId];
      return createBlock(source.blocks.find(item => item.id === block.blockId), block.moduleId);
    }
    if (block.type === "tasks") return createTasks(block, routeId);
    if (block.type === "checklist") return createChecklist(block, routeId);
    if (block.type === "callout") return createCallout(block);
    if (block.type === "lesson") return createLesson(block);
    if (block.type === "details") return createDetails(block, routeId);
    if (block.type === "resource") return pedagogy.resource(data.modules[routeId], block.resourceId);
    return element("div");
  }

  const link = (label, href, className = 'button button--secondary') => {
    const node = element('a', className, label);
    node.href = href;
    return node;
  };
  const moduleUrl = (id, pathwayId) => '#module/' + encodeURIComponent(id) +
    (pathwayId ? '?parcours=' + encodeURIComponent(pathwayId) : '');
  const pathwayStartUrl = id => moduleUrl(data.pathways[id].moduleIds[0], id);
  const singlePathway = domain => domain.pathwayIds.length === 1 && !(domain.diagnosticModuleIds || []).length;
  const domainEntryUrl = id => singlePathway(data.domains[id]) ? pathwayStartUrl(data.domains[id].pathwayIds[0]) : '#domaine/' + id;
  const domainUrl = id => Object.keys(data.domains).length === 1 ? '#' : '#domaine/' + id;
  const own = (collection, id) => Object.prototype.hasOwnProperty.call(collection, id) ? collection[id] : null;
  let disposeCourseNavigation = null;

  function start(title, theme, compact = true, domainId = null) {
    while (demoCleanups.length) demoCleanups.pop()();
    if (disposeCourseNavigation) disposeCourseNavigation();
    disposeCourseNavigation = null;
    main.classList.remove('site-shell--course');
    delete document.body.dataset.lessonLayout;
    document.title = title + ' : ' + data.site.name;
    if (theme) document.body.dataset.route = theme;
    else delete document.body.dataset.route;
    if (domainId) document.body.dataset.domain = domainId;
    else delete document.body.dataset.domain;
    main.replaceChildren();
    main.classList.toggle('home-page', !compact);
    document.body.classList.toggle('student-home', !compact);
    const header = element('header', compact ? 'page-header page-header--compact' : 'page-header');
    const brand = link(data.site.name, '#', 'brand');
    if (compact) header.append(brand);
    else {
      header.classList.add('home-header');
      const copy = element('div', 'home-header__copy');
      const heading = element('h1', 'home-title');
      heading.append(brand);
      copy.append(heading,
        element('p', 'home-intro', data.site.homeIntro));
      header.append(copy);
    }
    main.append(header);
  }

  function card(title, description, href, theme) {
    const node = link('', href, 'route-card route-card--' + (theme || 'fondations'));
    node.append(element('span', 'route-card-title', title));
    node.append(element('span', 'route-card-description', description));
    return node;
  }

  function renderDomain(id, home = false) {
    const domain = data.domains[id];
    if (!home && singlePathway(domain)) return renderPathway(domain.pathwayIds[0]);
    start(home ? data.site.subtitle : domain.title, null, home ? false : true, home ? null : id);
    if (!home) main.append(element('h1', 'library-heading domain-banner', domain.title));
    const navigation = element('nav', 'route-grid');
    navigation.setAttribute('aria-label', 'Choisir un parcours');
    domain.pathwayIds.forEach(pathwayId => {
      const pathway = data.pathways[pathwayId];
      navigation.append(card(pathway.title, pathway.objective, pathwayStartUrl(pathwayId), pathway.theme));
    });
    (domain.diagnosticModuleIds || []).forEach(moduleId => {
      const item = data.modules[moduleId];
      navigation.append(card(item.title, item.objective, moduleUrl(moduleId), item.theme));
    });
    main.append(navigation);
  }

  function renderHome() {
    const domains = Object.keys(data.domains);
    if (domains.length === 1) return renderDomain(domains[0], true);
    start(data.site.subtitle, null, false);
    main.append(element('h2', 'home-choice', data.site.homeChoiceLabel));
    const navigation = element('nav', 'route-grid home-domains');
    navigation.setAttribute('aria-label', 'Choisir un domaine');
    const homeVisuals = {
      'jeux-video': { name: 'game', tag: 'Scratch' },
      python: { name: 'python', tag: 'Thonny' },
      web: { name: 'web', tag: 'HTML · CSS' },
      robotique: { name: 'robotique', tag: 'Circuits virtuels' }
    };
    domains.forEach(id => {
      const domain = data.domains[id];
      const visual = homeVisuals[id] || homeVisuals.web;
      const entry = card(domain.title, domain.homeDescription || 'Découvrir les parcours', domainEntryUrl(id));
      entry.classList.add('home-domain', 'home-domain--' + visual.name);
      const top = element('span', 'home-domain__top');
      top.setAttribute('aria-hidden', 'true');
      const scene = element('img', 'home-domain__scene');
      scene.src = 'images/home-' + visual.name + '.svg';
      scene.alt = '';
      scene.width = 400; scene.height = 108;
      top.append(scene);
      const pictogram = element('img', 'home-domain__pictogram');
      pictogram.src = scene.src.replace('/home-', '/home-icon-');
      pictogram.alt = '';
      pictogram.width = 40; pictogram.height = 30;
      top.append(pictogram);
      entry.prepend(top);
      entry.querySelector('.route-card-title').after(element('span', 'home-domain__tag', visual.tag));
      entry.append(element('span', 'home-domain__action', singlePathway(domain) ? 'Commencer le parcours →' : 'Choisir un parcours →'));
      navigation.append(entry);
    });
    main.append(navigation);
  }

  function intro(title, objective, codepen = false, tool = null) {
    const header = element('header', 'lesson-intro');
    header.append(element('h1', 'lesson-title', title));
    header.append(element('h2', 'objective-label', 'Objectif'));
    header.append(element('p', 'objective', objective));
    if (codepen) {
      const button = link(tool ? tool.label : data.site.codepenLabel, tool ? tool.url : data.site.codepenUrl, 'button button--primary');
      button.target = '_blank';
      button.rel = 'noopener noreferrer';
      header.append(button);
    }
    return header;
  }

  function renderPathway(id) {
    const pathway = data.pathways[id];
    // Compatibilité des anciens liens : remplacer la route sans ajouter un écran à l'historique.
    history.replaceState(null, '', pathwayStartUrl(id));
    renderModule(pathway.moduleIds[0], id);
  }

  function support(item) {
    // Aucun encart générique : conserver uniquement les consignes propres au module.
    if (!item.stuck && !item.bonus) return null;
    const grid = element('section', 'support-grid');
    if (item.stuck) {
      const stuck = element('div', 'support-card support-card--stuck');
      stuck.append(element('h2', 'section-title', item.stuck.title));
      const routine = element('ol', 'routine-list');
      item.stuck.steps.forEach(step => routine.append(element('li', '', step)));
      stuck.append(routine);
      grid.append(stuck);
    }
    if (item.bonus) {
      const done = element('div', 'support-card support-card--done');
      done.append(element('h2', 'section-title', item.stuck ? "J’ai fini" : 'Vérification et suite'));
      done.append(element('p', '', item.bonus));
      grid.append(done);
    }
    return grid;
  }

  function renderModule(id, requestedPathway) {
    const item = data.modules[id];
    const candidate = own(data.pathways, requestedPathway);
    // Une URL partagée peut contenir un contexte périmé : ne conserver que celui
    // qui appartient réellement au module pour le fil d'Ariane et la navigation.
    const pathway = candidate && candidate.domainId === item.domainId && candidate.moduleIds.includes(id) ? candidate : null;
    const containing = Object.values(data.pathways).filter(value => value.domainId === item.domainId && value.moduleIds.includes(id));
    // Une entrée directe peut retrouver son étape, mais pas choisir arbitrairement
    // entre plusieurs parcours contenant la même leçon.
    const sequence = pathway || (containing.length === 1 ? containing[0] : null);
    const stagePosition = pedagogy.pathwayStage(id, sequence);
    start(item.title, pathway ? pathway.theme : item.theme, true, item.domainId);
    document.body.dataset.lessonLayout = 'standard';
    const article = element('article', 'lesson-page');
    if (item.presentation === 'workshop') article.classList.add('lesson-page--workshop');
    const back = element('nav', 'library-links');
    back.setAttribute('aria-label', 'Fil d’Ariane');
    {
      back.classList.add('lesson-breadcrumbs');
      const trail = element('ol', 'lesson-breadcrumbs__list');
      const domain = element('li');
      domain.append(link(data.domains[item.domainId].title, domainUrl(item.domainId), 'lesson-text-link'));
      trail.append(domain);
      if (pathway) {
        const parent = element('li');
        parent.append(link(pathway.title, pathwayStartUrl(requestedPathway), 'lesson-text-link'));
        trail.append(parent);
      }
      const current = element('li', 'lesson-breadcrumbs__current', item.title);
      current.setAttribute('aria-current', 'page');
      trail.append(current);
      back.append(trail);
    }
    main.querySelector('.page-header--compact').append(back);
    if (stagePosition) {
      const { stage, number, position, total } = stagePosition;
      article.append(element('p', 'lesson-stage-location', 'Étape ' + number + ' · ' + stage.title + (stage.upcoming ? ' : Leçon disponible' : ' : Module ' + position + ' sur ' + total)));
    }
    article.append(intro(item.title, item.objective));
    // Le téléchargement de Thonny n'est utile qu'à l'installation. Scratch et
    // CodePen restent accessibles là où ils constituent l'environnement de travail.
    const showTool = item.showTool !== false && (Boolean(item.tool) || item.domainId === 'jeux-video' || id === 'python-thonny' ||
      item.domainId === 'web');
    const preparationBlock = item.blocks.find(block => block.type === 'callout' &&
      (block.id === 'preparer' || block.title.startsWith('Avant de commencer')));
    let preparation = null;
    if (preparationBlock) {
      preparation = createBlock(preparationBlock, id);
      preparation.classList.add('lesson-preparation');
      if (!item.prerequisitesInContent) {
        const prerequisites = pedagogy.prerequisites(item);
        const list = prerequisites.querySelector('ul');
        if (list?.childElementCount) {
          [...list.children].forEach((row, index) => { setInlineText(row, item.prerequisiteSkills[index].expectation); });
          preparation.append(list);
        }
      }
      article.append(preparation);
    } else if (!item.prerequisitesInContent) {
      preparation = pedagogy.prerequisites(item);
      preparation.classList.add('lesson-preparation');
      preparation.querySelector('.section-title').textContent = item.prerequisiteSkills?.length === 0 ? 'Pour travailler' : 'Avant de commencer';
      preparation.querySelector('.section-intro').remove();
      const list = preparation.querySelector('ul');
      if (list) {
        [...list.children].forEach((row, index) => { setInlineText(row, item.prerequisiteSkills[index].expectation); });
        if (!list.childElementCount) list.remove();
      }
      article.append(preparation);
    }
    const toolLink = showTool ? link(item.tool?.label || data.site.codepenLabel,
      item.tool?.url || data.site.codepenUrl, 'lesson-text-link lesson-tool-link') : null;
    if (toolLink) { toolLink.append(' ↗'); toolLink.target = '_blank'; toolLink.rel = 'noopener noreferrer'; }
    const scratchProject = pedagogy.scratchProject(item);
    if (scratchProject) article.append(scratchProject);
    item.blocks.forEach(block => {
      if (block === preparationBlock) return;
      const rendered = createBlock(block, id);
      article.append(rendered);
    });
    if (toolLink) {
      if (preparation) {
        const illustration = preparation.querySelector('.lesson-illustration');
        if (illustration) illustration.before(toolLink);
        else preparation.append(toolLink);
      }
      else article.querySelector('.lesson-intro').after(toolLink);
    }
    let criteria;
    if (item.masteryCriteria?.length) {
      criteria = element('section', 'lesson-checkpoint');
      criteria.setAttribute('aria-labelledby', 'lesson-checkpoint-title');
      criteria.dataset.activityId = 'bilan';
      criteria.tabIndex = -1;
      const heading = element('h2', 'lesson-checkpoint__title', 'Les essentiels');
      heading.id = 'lesson-checkpoint-title';
      const points = element('ul', 'lesson-checkpoint__list');
      item.masteryCriteria.forEach(text => points.append(element('li', '', text)));
      criteria.append(heading, points);
    }
    // Les orientations restent dans les données et le guide professeur.
    const specificSupport = support(item);
    if (specificSupport) article.append(specificSupport);
    if (criteria) article.append(criteria);
    if (stagePosition?.isLast && !stagePosition.stage.upcoming) article.append(element('p', 'lesson-stage-pause', stagePosition.stage.endMessage || ('Fin de l’étape ' + stagePosition.number + (stagePosition.stage.projectBlockId ? ' : conserve ton mini-projet : tu pourras le reprendre à la prochaine étape.' : ' : un bon moment pour faire une pause et reprendre ton projet avec une modification personnelle.'))));
    const navigation = element('nav', 'module-navigation module-navigation--lesson');
    navigation.setAttribute('aria-label', 'Navigation entre modules');
    if (sequence) {
      const position = sequence.moduleIds.indexOf(id);
      const previous = sequence.moduleIds[position-1];
      const next = sequence.moduleIds[position+1];
      const context = pathway ? requestedPathway : null;
      if (previous) navigation.append(link('←\u00a0' + data.modules[previous].title, moduleUrl(previous, context), 'button button--secondary module-navigation__previous'));
      if (next) navigation.append(link(data.modules[next].title + '\u00a0→', moduleUrl(next, context), 'button button--primary module-navigation__next'));
      else if (pathway && item.finalPathwayAction) navigation.append(link(item.finalPathwayAction, '#parcours/' + encodeURIComponent(requestedPathway), 'button button--primary module-navigation__next'));
    }
    if (navigation.childElementCount) article.append(navigation);
    if (sequence) {
      const sequenceId = Object.keys(data.pathways).find(key => data.pathways[key] === sequence);
      main.classList.add('site-shell--course');
      const layout = element('div', 'course-layout');
      layout.append(courseNavigation(sequence, sequenceId, id), article);
      main.append(layout);
    } else main.append(article);
  }

  function courseNavigation(sequence, sequenceId, currentId) {
    const sidebar = element('aside', 'course-sidebar');
    const toggle = element('button', 'course-sidebar__toggle', 'Dans ce parcours');
    toggle.type = 'button';
    toggle.setAttribute('aria-controls', 'course-contents');
    const contents = element('nav', 'course-sidebar__contents');
    contents.id = 'course-contents';
    contents.setAttribute('aria-label', 'Sommaire du parcours');
    const overview = element('details', 'course-sidebar__overview');
    overview.append(element('summary', '', 'Objectif du parcours'), element('p', '', sequence.objective));
    contents.append(overview);
    const grouped = new Set();
    function addModules(ids, title) {
      if (!ids.length) return;
      const group = element('div', 'course-sidebar__group');
      if (title) group.append(element('h2', 'course-sidebar__group-title', title));
      const list = element('ol', 'course-sidebar__list');
      ids.forEach(moduleId => {
        grouped.add(moduleId);
        const row = element('li');
        const entry = link('', moduleUrl(moduleId, sequenceId), 'course-sidebar__link');
        entry.append(element('span', '', studentTitle(data.modules[moduleId].title)));
        if (moduleId === currentId) entry.setAttribute('aria-current', 'page');
        row.append(entry);
        list.append(row);
      });
      group.append(list);
      contents.append(group);
    }
    (sequence.chapters || sequence.stages || []).forEach((stage, index) => {
      addModules(sequence.moduleIds.filter(moduleId => stage.moduleIds.includes(moduleId) && !grouped.has(moduleId)),
        (sequence.chapters ? 'Partie ' + (index + 1) + ' · ' : '') + stage.title);
    });
    addModules(sequence.moduleIds.filter(moduleId => !grouped.has(moduleId)));
    sidebar.append(toggle, contents);
    const desktop = window.matchMedia('(min-width: 1200px)');
    let expanded = false;
    function sync() {
      contents.hidden = !desktop.matches && !expanded;
      toggle.setAttribute('aria-expanded', String(!contents.hidden));
    }
    toggle.addEventListener('click', () => { expanded = !expanded; sync(); });
    desktop.addEventListener('change', sync);
    disposeCourseNavigation = () => desktop.removeEventListener('change', sync);
    sync();
    // Garder la leçon active dans la fenêtre du sommaire sans déplacer le cours.
    if (desktop.matches) requestAnimationFrame(() => {
      if (!contents.isConnected) return;
      const active = contents.querySelector('[aria-current="page"]');
      if (active) {
        const bounds = contents.getBoundingClientRect();
        const current = active.getBoundingClientRect();
        if (current.bottom > bounds.bottom || current.top < bounds.top) {
          contents.scrollTop += current.top - bounds.top - contents.clientHeight / 2;
        }
      }
    });
    return sidebar;
  }

  function notFound() {
    start('Page introuvable');
    main.append(element('h1', 'library-heading', 'Ce contenu est introuvable.'));
    main.append(link('Retour à l’accueil', '#'));
  }

  function navigate() {
    try {
      let hash = location.hash.slice(1);
      const aliasRoute = hash.split('?')[0];
      if (own(data.aliases, aliasRoute)) {
        hash = data.aliases[aliasRoute];
        history.replaceState(null, '', '#' + hash);
      }
      const separator = hash.indexOf('?');
      const route = separator < 0 ? hash : hash.slice(0,separator);
      const query = new URLSearchParams(separator < 0 ? '' : hash.slice(separator+1));
      const segments = route.split('/').map(decodeURIComponent);
      const [kind,id] = segments;
      if (!route) renderHome();
      else if (segments.length !== 2) notFound();
      else if (kind === 'domaine' && own(data.domains,id)) renderDomain(id);
      else if (kind === 'parcours' && own(data.pathways,id)) renderPathway(id);
      else if (kind === 'module' && own(data.modules,id)) renderModule(id,query.get('parcours'));
      else notFound();
    } catch (error) {
      console.error('Impossible d’afficher ce contenu.',error);
      notFound();
    }
    main.focus({preventScroll:true});
    const params = new URLSearchParams(location.hash.split('?')[1] || '');
    const activity = [...main.querySelectorAll('[data-activity-id]')].find(el => el.dataset.activityId === params.get('activite'));
    const target = activity && ([...activity.querySelectorAll('[data-task-id]')].find(el => el.dataset.taskId === params.get('tache')) || activity);
    if (target) {
      // Un lien vers une tâche imbriquée doit ouvrir ses encarts repliés avant
      // le focus et le défilement ; une tâche absente revient au bloc trouvé.
      for (let el = target; el && el !== main; el = el.parentElement) if (el.tagName === 'DETAILS') el.open = true;
      target.tabIndex = -1; target.focus({ preventScroll: true }); target.scrollIntoView({ block: 'start' });
    } else window.scrollTo({top:0,behavior:'auto'});
  }
  // Nettoyer les anciennes URL du lien d’évitement avant de démarrer le routeur.
  if (location.hash === '#main-content') {
    history.replaceState(null, '', location.pathname + location.search);
  }
  window.addEventListener('hashchange',navigate);
  navigate();

})();
