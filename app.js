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
  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  function createCode(code) {
    const pre = element("pre", "code-block");
    const codeNode = element("code", "", code);
    pre.append(codeNode);
    return pre;
  }

  function createHint(item) {
    const details = element("details", "hint");
    details.append(element("summary", "", "Voir un indice"));
    if (item.hint) details.append(element("p", "", item.hint));
    (item.hints || []).forEach((text, index) => {
      const step = element('details', 'syntax');
      const labels = ['1 — Où regarder', '2 — Cibler la difficulté', '3 — Comparer', '4 — Corriger pas à pas'];
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
    const section = element("section", `callout callout--${block.tone || "neutral"}`);
    section.append(element("h2", "section-title", block.title));
    const paragraph = element("p");
    const moduleLink = block.moduleLink;
    const position = moduleLink ? block.text.indexOf(moduleLink.text) : -1;
    if (position >= 0) {
      paragraph.append(
        block.text.slice(0, position),
        link(moduleLink.text, moduleUrl(moduleLink.moduleId), ''),
        block.text.slice(position + moduleLink.text.length)
      );
    } else {
      paragraph.textContent = block.text;
    }
    section.append(paragraph);
    return section;
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
    const source = element('div');
    source.append(element('p', 'flex-display-demo__caption', config.codeLabel));
    const pre = element('pre', 'code-block');
    const code = element('code');
    const value = element('strong', 'flex-display-demo__value');
    code.append('.cartes {\n  display: ', value, ';\n}');
    pre.append(code);
    source.append(pre);
    layout.append(preview, source);
    const feedback = element('p', 'flex-display-demo__feedback');
    feedback.setAttribute('role', 'status');
    const update = () => {
      const display = select.value === 'flex' ? 'flex' : 'block';
      select.value = display;
      cards.style.display = display;
      value.textContent = display;
      feedback.textContent = config.options.find(option => option.value === display).feedback;
    };
    select.value = 'block';
    select.addEventListener('change', update);
    update();
    demo.append(label, layout, feedback, element('p', 'section-intro', config.note));
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
    config.codeParts.forEach(part => {
      const kind = ['function', 'string'].includes(part.kind) ? part.kind : 'plain';
      code.append(element('span', 'code-diagram__token--' + kind, part.text));
    });
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
      block.actionSteps.forEach((step, index) => {
        const action = element('li', 'lesson-action');
        const heading = element('h3', 'lesson-action__title');
        heading.append(element('span', 'lesson-action__number', String(index + 1)), document.createTextNode(step.title));
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
      const figure = element('figure', 'lesson-illustration');
      const image = element('img');
      image.src = block.illustration.src;
      image.alt = block.illustration.alt;
      figure.append(image, element('figcaption', '', block.illustration.caption));
      section.append(figure);
    }
    if (block.coordinateDiagram) section.append(createCoordinateDiagram(block.coordinateDiagram));
    if (block.visualScript) {
      section.append(createScratchVisual(block.visualScript));
      if (block.code) {
        const details = element('details', 'hint');
        details.append(element('summary', '', 'Lire aussi le modèle en texte'), createCode(block.code));
        section.append(details);
      }
    } else if (block.code && !block.actionSteps) section.append(createCode(block.code));
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
  const domainUrl = id => Object.keys(data.domains).length === 1 ? '#' : '#domaine/' + id;
  const own = (collection, id) => Object.prototype.hasOwnProperty.call(collection, id) ? collection[id] : null;

  function start(title, theme, compact = true, domainId = null) {
    delete document.body.dataset.lessonLayout;
    document.title = title + ' — ' + data.site.name;
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
    start(home ? data.site.subtitle : domain.title, null, home ? false : true, home ? null : id);
    if (!home) main.append(element('h1', 'library-heading domain-banner', domain.title));
    const navigation = element('nav', 'route-grid');
    navigation.setAttribute('aria-label', 'Choisir un parcours');
    domain.pathwayIds.forEach(pathwayId => {
      const pathway = data.pathways[pathwayId];
      navigation.append(card(pathway.title, pathway.objective, '#parcours/' + pathwayId, pathway.theme));
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
    domains.forEach(id => {
      const domain = data.domains[id];
      const entry = card(domain.title, domain.homeDescription || 'Découvrir les parcours', '#domaine/' + id);
      entry.classList.add('home-domain', id === 'jeux-video' ? 'home-domain--game' : id === 'python' ? 'home-domain--python' : 'home-domain--web');
      const top = element('span', 'home-domain__top');
      top.setAttribute('aria-hidden', 'true');
      const scene = element('img', 'home-domain__scene');
      scene.src = 'images/home-' + (id === 'jeux-video' ? 'game' : id === 'python' ? 'python' : 'web') + '.svg';
      scene.alt = '';
      scene.width = 400; scene.height = 108;
      top.append(scene);
      const pictogram = element('img', 'home-domain__pictogram');
      pictogram.src = scene.src.replace('/home-', '/home-icon-');
      pictogram.alt = '';
      pictogram.width = 40; pictogram.height = 30;
      top.append(pictogram);
      entry.prepend(top);
      entry.querySelector('.route-card-title').after(element('span', 'home-domain__tag', id === 'python' ? 'Thonny' : id === 'jeux-video' ? 'Scratch' : 'HTML · CSS'));
      entry.append(element('span', 'home-domain__action', 'Découvrir les parcours →'));
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
    start(pathway.title, pathway.theme, true, pathway.domainId);
    const article = element('article', 'lesson-page');
    article.append(intro(pathway.title, pathway.objective));
    const list = element('ol', 'module-list');
    pathway.moduleIds.forEach(moduleId => {
      const item = data.modules[moduleId];
      const row = element('li');
      row.append(card(item.title, data.moduleTypes[item.type] + ' · ' + item.objective, moduleUrl(moduleId, id), pathway.theme));
      list.append(row);
    });
    article.append(list, link('← Retour aux parcours', domainUrl(pathway.domainId), 'button button--secondary back-button'));
    main.append(article);
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
    const pathway = candidate && candidate.domainId === item.domainId && candidate.moduleIds.includes(id) ? candidate : null;
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
        parent.append(link(pathway.title, '#parcours/' + requestedPathway, 'lesson-text-link'));
        trail.append(parent);
      }
      const current = element('li', 'lesson-breadcrumbs__current', item.title);
      current.setAttribute('aria-current', 'page');
      trail.append(current);
      back.append(trail);
    }
    main.querySelector('.page-header--compact').append(back);
    article.append(intro(item.title, item.objective));
    // Le téléchargement de Thonny n'est utile qu'à l'installation. Scratch et
    // CodePen restent accessibles là où ils constituent l'environnement de travail.
    const showTool = item.domainId === 'jeux-video' || id === 'python-thonny' ||
      item.domainId === 'web';
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
          [...list.children].forEach((row, index) => { row.textContent = item.prerequisiteSkills[index].expectation; });
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
        [...list.children].forEach((row, index) => { row.textContent = item.prerequisiteSkills[index].expectation; });
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
      if (preparation) preparation.append(toolLink);
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
    const navigation = element('nav', 'module-navigation module-navigation--lesson');
    navigation.setAttribute('aria-label', 'Navigation entre modules');
    const containing = Object.values(data.pathways).filter(value => value.domainId === item.domainId && value.moduleIds.includes(id));
    const sequence = pathway || (containing.length === 1 ? containing[0] : null);
    if (sequence) {
      const position = sequence.moduleIds.indexOf(id);
      const previous = sequence.moduleIds[position-1];
      const next = sequence.moduleIds[position+1];
      const context = pathway ? requestedPathway : null;
      if (previous) navigation.append(link('←\u00a0' + data.modules[previous].title, moduleUrl(previous, context), 'button button--secondary module-navigation__previous'));
      if (next) navigation.append(link(data.modules[next].title + '\u00a0→', moduleUrl(next, context), 'button button--primary module-navigation__next'));
    }
    if (navigation.childElementCount) article.append(navigation);
    main.append(article);
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
