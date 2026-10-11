import { createCourseNavigation } from './course-navigation.mjs';
import { createSupportPanel } from './support.mjs';

export function createRouter({
  data,
  pedagogy,
  main,
  demoCleanups,
  element,
  studentTitle,
  setInlineText,
  link,
  createBlock,
  routes,
}) {
  const { moduleUrl, pathwayStartUrl, singlePathway, domainEntryUrl, domainUrl } = routes;
  const own = (collection, id) =>
    Object.prototype.hasOwnProperty.call(collection, id) ? collection[id] : null;
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
      copy.append(heading, element('p', 'home-intro', data.site.homeIntro));
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
    domain.pathwayIds.forEach((pathwayId) => {
      const pathway = data.pathways[pathwayId];
      navigation.append(
        card(pathway.title, pathway.objective, pathwayStartUrl(pathwayId), pathway.theme),
      );
    });
    (domain.diagnosticModuleIds || []).forEach((moduleId) => {
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
      robotique: { name: 'robotique', tag: 'Circuits virtuels' },
    };
    domains.forEach((id) => {
      const domain = data.domains[id];
      const visual = homeVisuals[id] || homeVisuals.web;
      const entry = card(
        domain.title,
        domain.homeDescription || 'Découvrir les parcours',
        domainEntryUrl(id),
      );
      entry.classList.add('home-domain', 'home-domain--' + visual.name);
      const top = element('span', 'home-domain__top');
      top.setAttribute('aria-hidden', 'true');
      const scene = element('img', 'home-domain__scene');
      scene.src = 'images/home-' + visual.name + '.svg';
      scene.alt = '';
      scene.width = 400;
      scene.height = 108;
      top.append(scene);
      const pictogram = element('img', 'home-domain__pictogram');
      pictogram.src = scene.src.replace('/home-', '/home-icon-');
      pictogram.alt = '';
      pictogram.width = 40;
      pictogram.height = 30;
      top.append(pictogram);
      entry.prepend(top);
      entry
        .querySelector('.route-card-title')
        .after(element('span', 'home-domain__tag', visual.tag));
      entry.append(
        element(
          'span',
          'home-domain__action',
          singlePathway(domain) ? 'Commencer le parcours →' : 'Choisir un parcours →',
        ),
      );
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
      const button = link(
        tool ? tool.label : data.site.codepenLabel,
        tool ? tool.url : data.site.codepenUrl,
        'button button--primary',
      );
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

  function renderModule(id, requestedPathway) {
    const item = data.modules[id];
    const candidate = own(data.pathways, requestedPathway);
    // Une URL partagée peut contenir un contexte périmé : ne conserver que celui
    // qui appartient réellement au module pour le fil d'Ariane et la navigation.
    const pathway =
      candidate && candidate.domainId === item.domainId && candidate.moduleIds.includes(id)
        ? candidate
        : null;
    const containing = Object.values(data.pathways).filter(
      (value) => value.domainId === item.domainId && value.moduleIds.includes(id),
    );
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
      domain.append(
        link(data.domains[item.domainId].title, domainUrl(item.domainId), 'lesson-text-link'),
      );
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
      article.append(
        element(
          'p',
          'lesson-stage-location',
          'Étape ' +
            number +
            ' · ' +
            stage.title +
            (stage.upcoming ? ' : Leçon disponible' : ' : Module ' + position + ' sur ' + total),
        ),
      );
    }
    article.append(intro(item.title, item.objective));
    // Le téléchargement de Thonny n'est utile qu'à l'installation. Scratch et
    // CodePen restent accessibles là où ils constituent l'environnement de travail.
    const showTool =
      item.showTool !== false &&
      (Boolean(item.tool) ||
        item.domainId === 'jeux-video' ||
        id === 'python-thonny' ||
        item.domainId === 'web');
    const preparationBlock = item.blocks.find(
      (block) =>
        block.type === 'callout' &&
        (block.id === 'preparer' || block.title.startsWith('Avant de commencer')),
    );
    let preparation = null;
    if (preparationBlock) {
      preparation = createBlock(preparationBlock, id);
      preparation.classList.add('lesson-preparation');
      if (!item.prerequisitesInContent) {
        const prerequisites = pedagogy.prerequisites(item);
        const list = prerequisites.querySelector('ul');
        if (list?.childElementCount) {
          [...list.children].forEach((row, index) => {
            setInlineText(row, item.prerequisiteSkills[index].expectation);
          });
          preparation.append(list);
        }
      }
      article.append(preparation);
    } else if (!item.prerequisitesInContent) {
      preparation = pedagogy.prerequisites(item);
      preparation.classList.add('lesson-preparation');
      preparation.querySelector('.section-title').textContent =
        item.prerequisiteSkills?.length === 0 ? 'Pour travailler' : 'Avant de commencer';
      preparation.querySelector('.section-intro').remove();
      const list = preparation.querySelector('ul');
      if (list) {
        [...list.children].forEach((row, index) => {
          setInlineText(row, item.prerequisiteSkills[index].expectation);
        });
        if (!list.childElementCount) list.remove();
      }
      article.append(preparation);
    }
    const toolLink = showTool
      ? link(
          item.tool?.label || data.site.codepenLabel,
          item.tool?.url || data.site.codepenUrl,
          'lesson-text-link lesson-tool-link',
        )
      : null;
    if (toolLink) {
      toolLink.append(' ↗');
      toolLink.target = '_blank';
      toolLink.rel = 'noopener noreferrer';
    }
    const scratchProject = pedagogy.scratchProject(item);
    if (scratchProject) article.append(scratchProject);
    item.blocks.forEach((block) => {
      if (block === preparationBlock) return;
      const rendered = createBlock(block, id);
      article.append(rendered);
    });
    if (toolLink) {
      if (preparation) {
        const illustration = preparation.querySelector('.lesson-illustration');
        if (illustration) illustration.before(toolLink);
        else preparation.append(toolLink);
      } else article.querySelector('.lesson-intro').after(toolLink);
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
      item.masteryCriteria.forEach((text) => points.append(element('li', '', text)));
      criteria.append(heading, points);
    }
    // Les orientations restent dans les données et le guide professeur.
    const specificSupport = createSupportPanel(item, element);
    if (specificSupport) article.append(specificSupport);
    if (criteria) article.append(criteria);
    if (stagePosition?.isLast && !stagePosition.stage.upcoming)
      article.append(
        element(
          'p',
          'lesson-stage-pause',
          stagePosition.stage.endMessage ||
            'Fin de l’étape ' +
              stagePosition.number +
              (stagePosition.stage.projectBlockId
                ? ' : conserve ton mini-projet : tu pourras le reprendre à la prochaine étape.'
                : ' : un bon moment pour faire une pause et reprendre ton projet avec une modification personnelle.'),
        ),
      );
    const navigation = element('nav', 'module-navigation module-navigation--lesson');
    navigation.setAttribute('aria-label', 'Navigation entre modules');
    if (sequence) {
      const position = sequence.moduleIds.indexOf(id);
      const previous = sequence.moduleIds[position - 1];
      const next = sequence.moduleIds[position + 1];
      const context = pathway ? requestedPathway : null;
      if (previous)
        navigation.append(
          link(
            '←\u00a0' + data.modules[previous].title,
            moduleUrl(previous, context),
            'button button--secondary module-navigation__previous',
          ),
        );
      if (next)
        navigation.append(
          link(
            data.modules[next].title + '\u00a0→',
            moduleUrl(next, context),
            'button button--primary module-navigation__next',
          ),
        );
      else if (pathway && item.finalPathwayAction)
        navigation.append(
          link(
            item.finalPathwayAction,
            '#parcours/' + encodeURIComponent(requestedPathway),
            'button button--primary module-navigation__next',
          ),
        );
    }
    if (navigation.childElementCount) article.append(navigation);
    if (sequence) {
      const sequenceId = Object.keys(data.pathways).find((key) => data.pathways[key] === sequence);
      main.classList.add('site-shell--course');
      const layout = element('div', 'course-layout');
      const navigation = createCourseNavigation(sequence, sequenceId, id, {
        data,
        element,
        link,
        moduleUrl,
        studentTitle,
      });
      disposeCourseNavigation = navigation.dispose;
      layout.append(navigation.node, article);
      main.append(layout);
    } else main.append(article);
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
      const route = separator < 0 ? hash : hash.slice(0, separator);
      const query = new URLSearchParams(separator < 0 ? '' : hash.slice(separator + 1));
      const segments = route.split('/').map(decodeURIComponent);
      const [kind, id] = segments;
      if (!route) renderHome();
      else if (segments.length !== 2) notFound();
      else if (kind === 'domaine' && own(data.domains, id)) renderDomain(id);
      else if (kind === 'parcours' && own(data.pathways, id)) renderPathway(id);
      else if (kind === 'module' && own(data.modules, id)) renderModule(id, query.get('parcours'));
      else notFound();
    } catch (error) {
      console.error('Impossible d’afficher ce contenu.', error);
      notFound();
    }
    main.focus({ preventScroll: true });
    const params = new URLSearchParams(location.hash.split('?')[1] || '');
    const activity = [...main.querySelectorAll('[data-activity-id]')].find(
      (el) => el.dataset.activityId === params.get('activite'),
    );
    const target =
      activity &&
      ([...activity.querySelectorAll('[data-task-id]')].find(
        (el) => el.dataset.taskId === params.get('tache'),
      ) ||
        activity);
    if (target) {
      // Un lien vers une tâche imbriquée doit ouvrir ses encarts repliés avant
      // le focus et le défilement ; une tâche absente revient au bloc trouvé.
      for (let el = target; el && el !== main; el = el.parentElement)
        if (el.tagName === 'DETAILS') el.open = true;
      target.tabIndex = -1;
      target.focus({ preventScroll: true });
      target.scrollIntoView({ block: 'start' });
    } else window.scrollTo({ top: 0, behavior: 'auto' });
  }

  return { navigate };
}
