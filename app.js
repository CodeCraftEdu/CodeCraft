(function () {
  "use strict";

  const data = window.CODECRAFT_DATA;
  const main = document.getElementById("main-content");

  if (!data || !main) return;

  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  const storageKey = (routeId, itemId) =>
    `codecraft:${data.sessionId}:${routeId}:${itemId}`;

  const readProgress = (key) => {
    try {
      return localStorage.getItem(key) === "true";
    } catch (_error) {
      return false;
    }
  };

  const writeProgress = (key, checked) => {
    try {
      localStorage.setItem(key, String(checked));
    } catch (_error) {
      // Le parcours reste utilisable si le stockage local est indisponible.
    }
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
    details.append(element("p", "", item.hint));

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
      const label = element("label", "task-label");
      const checkbox = element("input");
      checkbox.type = "checkbox";
      const key = storageKey(routeId, item.id);
      checkbox.checked = readProgress(key);
      checkbox.addEventListener("change", () => writeProgress(key, checkbox.checked));

      const text = element(item.code ? "code" : "span", "task-text", item.text);
      label.append(checkbox, text);
      row.append(label);
      if (item.hint) row.append(createHint(item));
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
      const label = element("label", "task-label");
      const checkbox = element("input");
      checkbox.type = "checkbox";
      const key = storageKey(routeId, item.id);
      checkbox.checked = readProgress(key);
      checkbox.addEventListener("change", () => writeProgress(key, checkbox.checked));
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
    section.append(element("p", "", block.text));
    return section;
  }

  function createLesson(block) {
    const section = element("section", "content-card");
    section.append(element("h2", "section-title", block.title));
    (block.paragraphs || []).forEach((paragraph) => section.append(element("p", "", paragraph)));
    if (block.code) section.append(createCode(block.code));
    if (block.values && block.values.length) {
      section.append(element("h3", "subheading", block.valuesTitle));
      const values = element("ul", "value-list");
      block.values.forEach((value) => values.append(element("li", "", value)));
      section.append(values);
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
    if (block.type === "tasks") return createTasks(block, routeId);
    if (block.type === "checklist") return createChecklist(block, routeId);
    if (block.type === "callout") return createCallout(block);
    if (block.type === "lesson") return createLesson(block);
    if (block.type === "details") return createDetails(block, routeId);
    return element("div");
  }

  function renderHeader(compact) {
    const header = element("header", compact ? "page-header page-header--compact" : "page-header");
    const brand = element("a", "brand", data.site.name);
    brand.href = "#";
    header.append(brand);
    if (!compact) header.append(element("p", "site-subtitle", data.site.subtitle));
    return header;
  }

  function renderHome() {
    document.title = `${data.site.name} — ${data.site.subtitle}`;
    delete document.body.dataset.route;
    main.replaceChildren();
    main.append(renderHeader(false));

    const navigation = element("nav", "route-grid");
    navigation.setAttribute("aria-label", "Choisir un parcours");
    data.routes.forEach((route) => {
      const card = element("a", `route-card route-card--${route.id}`);
      card.href = `#${route.id}`;
      card.append(element("span", "route-card-title", route.title));
      card.append(element("span", "route-card-description", route.shortDescription));
      navigation.append(card);
    });
    main.append(navigation);
  }

  function renderSharedBlocks(route) {
    const stuckContent = route.stuck || {
      title: data.shared.stuckTitle,
      steps: data.shared.stuckSteps
    };
    const stuck = element("section", "support-grid");
    const stuckCard = element("div", "support-card support-card--stuck");
    stuckCard.append(element("h2", "section-title", stuckContent.title));
    const routine = element("ol", "routine-list");
    stuckContent.steps.forEach((step) => routine.append(element("li", "", step)));
    stuckCard.append(routine);

    const doneCard = element("div", "support-card support-card--done");
    doneCard.append(element("h2", "section-title", data.shared.finishedTitle));
    doneCard.append(element("p", "", route.bonus));
    stuck.append(stuckCard, doneCard);
    return stuck;
  }

  function renderRoute(route) {
    document.title = `${route.title} — ${data.site.name}`;
    document.body.dataset.route = route.id;
    main.replaceChildren();
    main.append(renderHeader(true));

    const article = element("article", "lesson-page");
    const intro = element("header", "lesson-intro");
    intro.append(element("p", "eyebrow", data.site.subtitle));
    intro.append(element("h1", "lesson-title", route.title));
    intro.append(element("h2", "objective-label", "Objectif du jour"));
    intro.append(element("p", "objective", route.objective));

    const codepen = element("a", "button button--primary", data.site.codepenLabel);
    codepen.href = data.site.codepenUrl;
    codepen.target = "_blank";
    codepen.rel = "noopener noreferrer";
    intro.append(codepen);
    article.append(intro);

    route.blocks.forEach((block) => article.append(createBlock(block, route.id)));
    article.append(renderSharedBlocks(route));

    const back = element("a", "button button--secondary back-button", `← ${data.site.homeLabel}`);
    back.href = "#";
    article.append(back);
    main.append(article);
    main.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function renderStudentPage() {
    const banner = document.getElementById("course-banner");
    banner.textContent = data.site.banner;

    const handleRoute = () => {
      const routeId = decodeURIComponent(location.hash.slice(1)).toLowerCase();
      const route = data.routes.find((item) => item.id === routeId);
      if (route) renderRoute(route);
      else renderHome();
    };

    window.addEventListener("hashchange", handleRoute);
    handleRoute();
  }

  function renderTeacherPage() {
    const teacher = data.teacher;
    document.title = `${teacher.title} — ${data.site.name}`;
    delete document.body.dataset.route;
    main.replaceChildren();
    main.append(renderHeader(true));

    const article = element("article", "teacher-page");
    const intro = element("header", "lesson-intro");
    intro.append(element("p", "eyebrow", data.site.name));
    intro.append(element("h1", "lesson-title", teacher.title));
    intro.append(element("p", "objective", teacher.subtitle));
    article.append(intro);

    const schedule = element("section", "content-card");
    schedule.append(element("h2", "section-title", "Déroulé"));
    const list = element("ol", "schedule-list");
    teacher.schedule.forEach((slot) => {
      const item = element("li", "schedule-item");
      item.append(element("time", "schedule-time", slot.time));
      item.append(element("span", "schedule-activity", slot.activity));
      list.append(item);
    });
    schedule.append(list);

    const principles = element("section", "content-card");
    principles.append(element("h2", "section-title", teacher.principlesTitle));
    const principleList = element("ul", "principle-list");
    teacher.principles.forEach((principle) => principleList.append(element("li", "", principle)));
    principles.append(principleList);

    const studentLink = element("a", "button button--primary", teacher.studentLinkLabel);
    studentLink.href = "index.html";
    article.append(schedule, principles, studentLink);
    main.append(article);
  }

  if (document.body.dataset.page === "teacher") renderTeacherPage();
  else renderStudentPage();
})();
