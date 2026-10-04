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

  function createLesson(block) {
    const section = element("section", "content-card");
    section.append(element("h2", "section-title", block.title));
    const visual = block.visualScript || block.coordinateDiagram;
    if (visual && block.shortSteps) {
      const steps = element('ol', 'scratch-quick-steps');
      block.shortSteps.forEach(text => steps.append(element('li', '', text)));
      section.append(steps);
    } else (block.paragraphs || []).forEach((paragraph) => section.append(element("p", "", paragraph)));
    if (block.coordinateDiagram) section.append(createCoordinateDiagram(block.coordinateDiagram));
    if (block.visualScript) {
      section.append(createScratchVisual(block.visualScript));
      if (block.code) {
        const details = element('details', 'hint');
        details.append(element('summary', '', 'Lire aussi le modèle en texte'), createCode(block.code));
        section.append(details);
      }
    } else if (block.code) section.append(createCode(block.code));
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

  function start(title, theme, compact = true) {
    document.title = title + ' — ' + data.site.name;
    if (theme) document.body.dataset.route = theme;
    else delete document.body.dataset.route;
    main.replaceChildren();
    main.classList.toggle('home-page', !compact);
    const header = element('header', compact ? 'page-header page-header--compact' : 'page-header');
    const brand = link(data.site.name, '#', 'brand');
    if (compact) header.append(brand);
    else {
      header.classList.add('home-header');
      const logo = element('img', 'home-logo');
      logo.src = 'images/logo-transparent.png';
      logo.width = 1516; logo.height = 1038;
      logo.alt = ''; // Décoratif : le nom est déjà annoncé dans le h1.
      const copy = element('div', 'home-header__copy');
      const heading = element('h1', 'home-title');
      heading.append(brand);
      copy.append(element('p', 'home-eyebrow', data.site.subtitle), heading,
        element('p', 'home-intro', data.site.homeIntro));
      header.append(logo, copy);
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
    start(home ? data.site.subtitle : domain.title, null, home ? false : true);
    if (!home) main.append(element('h1', 'library-heading', domain.title));
    const navigation = element('nav', 'route-grid');
    navigation.setAttribute('aria-label', 'Choisir un parcours ou un diagnostic');
    domain.pathwayIds.forEach(pathwayId => {
      const pathway = data.pathways[pathwayId];
      navigation.append(card(pathway.title, pathway.objective, '#parcours/' + pathwayId, pathway.theme));
    });
    (domain.diagnosticModuleIds || []).forEach(moduleId => {
      const item = data.modules[moduleId];
      navigation.append(card(item.title, item.objective, moduleUrl(moduleId), item.theme));
    });
    main.append(navigation);
    if (!home) main.append(link('← Accueil', '#', 'button button--secondary back-button'));
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
      entry.classList.add('home-domain', id === 'jeux-video' ? 'home-domain--game' : 'home-domain--web');
      const top = element('span', 'home-domain__top');
      const symbol = element('span', 'home-domain__symbol', id === 'jeux-video' ? '+' : '</>');
      symbol.setAttribute('aria-hidden', 'true');
      top.append(symbol, element('span', 'home-domain__tag', domain.homeTag || domain.title));
      entry.prepend(top);
      entry.append(element('span', 'home-domain__action', 'Découvrir les parcours →'));
      navigation.append(entry);
    });
    main.append(navigation);
  }

  function intro(title, objective, codepen = false, tool = null) {
    const header = element('header', 'lesson-intro');
    header.append(element('p', 'eyebrow', data.site.subtitle));
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
    start(pathway.title, pathway.theme);
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
    const content = item.stuck || {title:data.shared.stuckTitle,steps:data.shared.stuckSteps};
    const grid = element('section', 'support-grid');
    const stuck = element('div', 'support-card support-card--stuck');
    stuck.append(element('h2', 'section-title', content.title));
    const routine = element('ol', 'routine-list');
    content.steps.forEach(step => routine.append(element('li', '', step)));
    stuck.append(routine);
    const done = element('div', 'support-card support-card--done');
    done.append(element('h2', 'section-title', data.shared.finishedTitle));
    done.append(element('p', '', item.bonus || data.shared.finishedText));
    grid.append(stuck, done);
    return grid;
  }

  function renderModule(id, requestedPathway) {
    const item = data.modules[id];
    const candidate = own(data.pathways, requestedPathway);
    const pathway = candidate && candidate.domainId === item.domainId && candidate.moduleIds.includes(id) ? candidate : null;
    start(item.title, pathway ? pathway.theme : item.theme);
    const article = element('article', 'lesson-page');
    const back = element('nav', 'library-links');
    back.setAttribute('aria-label', 'Retour à la bibliothèque');
    back.append(link(pathway ? '← ' + pathway.title : '← Retour aux parcours', pathway ? '#parcours/' + requestedPathway : domainUrl(item.domainId)));
    article.append(back, intro(item.title, item.objective, true, item.tool));
    article.append(pedagogy.prerequisites(item));
    const scratchProject = pedagogy.scratchProject(item);
    if (scratchProject) article.append(scratchProject);
    item.blocks.forEach(block => article.append(createBlock(block, id)));
    const criteria = pedagogy.criteria(item);
    const orientations = pedagogy.orientations(item, pathway ? requestedPathway : null);
    if (criteria) article.append(criteria);
    if (orientations) article.append(orientations);
    article.append(support(item));
    const navigation = element('nav', 'module-navigation');
    navigation.setAttribute('aria-label', 'Navigation entre modules');
    if (pathway) {
      const position = pathway.moduleIds.indexOf(id);
      const previous = pathway.moduleIds[position-1];
      const next = pathway.moduleIds[position+1];
      if (previous) navigation.append(link('← ' + data.modules[previous].title, moduleUrl(previous, requestedPathway)));
      if (next) navigation.append(link(data.modules[next].title + ' →', moduleUrl(next, requestedPathway), 'button button--primary'));
      if (!next) navigation.append(link('Retour au parcours ' + pathway.title, '#parcours/' + requestedPathway));
    } else {
      Object.entries(data.pathways).filter(([,value]) => value.moduleIds.includes(id)).forEach(([pathwayId,value]) => {
        navigation.append(link('Dans le parcours ' + value.title, moduleUrl(id,pathwayId)));
      });
    }
    article.append(navigation, link('← ' + data.site.homeLabel, '#', 'button button--secondary back-button'));
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
      if (own(data.aliases, hash)) {
        hash = data.aliases[hash];
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
