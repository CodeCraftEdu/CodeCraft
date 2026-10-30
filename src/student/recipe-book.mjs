// HTML pages use the existing Scratch renderer; StPageFlip alone animates the book.
export function createRecipeBook({
  sequence,
  currentId,
  openCover,
  data,
  element,
  link,
  createBlock,
  moduleUrl,
  onRecipeChange = () => {},
}) {
  const root = element('article', 'recipe-book');
  const heading = element('h1', 'lesson-title', data.modules[currentId].title);
  const toolbar = element('nav', 'recipe-book__toolbar');
  toolbar.setAttribute('aria-label', 'Navigation du livre');
  const button = (label, action) => {
    const node = element('button', 'recipe-book__button', label);
    node.type = 'button';
    node.addEventListener('click', action);
    return node;
  };
  const stage = element('div', 'recipe-book__stage');
  const host = element('div', 'recipe-book__host');
  const flat = element('div', 'recipe-book__flat');
  const status = element('p', 'recipe-book__status', 'Lecture sans animation');
  status.setAttribute('role', 'status');
  let flip;
  let disposed = false;
  let linear = true;
  let selectedId = currentId;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const pages = [];
  const recipePages = new Map();
  const buttonPrev = button('← Précédente', () => flip?.flipPrev());
  const buttonNext = button('Suivante →', () => flip?.flipNext());
  const buttonToc = button('Sommaire', () => {
    if (linear) flat.querySelector('nav').scrollIntoView({ block: 'start' });
    else flip?.flip(1);
  });
  const mode = button('Vue livre', () => {
    const id = selectedId;
    setMode(!linear);
    if (!linear) flip.turnToPage(recipePages.get(id));
  });
  mode.setAttribute('aria-pressed', 'true');
  toolbar.append(buttonPrev, buttonToc, buttonNext, mode);

  function markRecipe(id) {
    selectedId = id;
    heading.textContent = data.modules[id].title;
    document.title = heading.textContent + ' : ' + data.site.name;
    onRecipeChange(id);
    history.replaceState(null, '', moduleUrl(id, 'scratch-recettes'));
  }
  function choose(id) {
    markRecipe(id);
    if (linear) {
      const target = flat.querySelector(`[data-recipe="${id}"]`);
      target.focus({ preventScroll: true });
      target.scrollIntoView({ block: 'start' });
    } else flip?.flip(recipePages.get(id));
  }
  function contents(ids, className = '') {
    const nav = element('nav', 'recipe-book__contents ' + className);
    nav.setAttribute('aria-label', 'Carnet de recettes');
    const list = element('ol');
    ids.forEach((id) => {
      const row = element('li');
      const anchor = link(data.modules[id].title, moduleUrl(id, 'scratch-recettes'), '');
      anchor.addEventListener('click', (event) => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        choose(id);
      });
      row.append(anchor);
      list.append(row);
    });
    nav.append(list);
    return nav;
  }
  function page(title, kind = '') {
    const node = element('section', 'recipe-book__page ' + kind);
    node.setAttribute('aria-label', title);
    const paper = element('div', 'recipe-book__paper');
    const body = element('div', 'recipe-book__body');
    body.tabIndex = 0;
    // Allow selection, scrolling and links inside a page; its margins remain draggable.
    for (const event of ['mousedown', 'touchstart'])
      body.addEventListener(event, (e) => e.stopPropagation());
    const number = element('span', 'recipe-book__number', String(pages.length));
    number.setAttribute('aria-hidden', 'true');
    paper.append(body, number);
    node.append(paper);
    pages.push(node);
    return { node, body };
  }
  const cover = page('Couverture', 'recipe-book__cover');
  cover.node.dataset.density = 'hard';
  cover.body.append(
    element('p', 'recipe-book__eyebrow', 'CodeCraft · Scratch'),
    element('h2', '', 'Le carnet de recettes Scratch'),
    element('p', '', 'Des idées à construire, bloc par bloc.'),
  );
  const open = button('Ouvrir le carnet →', () => flip?.flipNext());
  cover.body.append(open);
  // Two contents pages keep every recipe on a left/right spread, even with dozens of entries.
  const tocSheets = Math.max(2, Math.ceil(sequence.moduleIds.length / 12));
  const tocCount = tocSheets + (tocSheets % 2);
  for (let index = 0; index < tocCount; index++) {
    const sheet = page('Sommaire');
    sheet.body.append(
      element('p', 'recipe-book__eyebrow', 'Le carnet'),
      element('h2', '', index ? 'À ton rythme' : 'Sommaire'),
    );
    const ids = sequence.moduleIds.slice(index * 12, (index + 1) * 12);
    if (ids.length) sheet.body.append(contents(ids));
    else sheet.body.append(element('p', '', sequence.objective));
  }
  const addInformation = (parent, item) => {
    parent.append(
      element('p', 'recipe-book__eyebrow', 'Recette Scratch'),
      element('h2', '', item.title),
      element('p', 'recipe-book__objective', item.objective),
    );
    item.blocks.forEach((block) => {
      (block.paragraphs || []).forEach((text) => parent.append(element('p', '', text)));
    });
  };
  const addScripts = (parent, item) => {
    item.blocks.forEach((block) => {
      if (block.visualScript) parent.append(createBlock({ ...block, paragraphs: [] }, ''));
    });
  };
  sequence.moduleIds.forEach((id) => {
    const item = data.modules[id];
    recipePages.set(id, pages.length);
    const left = page(item.title);
    left.node.dataset.recipe = id;
    addInformation(left.body, item);
    const right = page('Les blocs : ' + item.title, 'recipe-book__script-page');
    right.node.dataset.recipe = id;
    right.body.append(element('p', 'recipe-book__eyebrow', 'Les blocs'));
    addScripts(right.body, item);
    right.body.append(
      button('Lire la recette sans animation', () => {
        setMode(true);
        choose(id);
      }),
    );
  });
  const back = page('Dos du carnet', 'recipe-book__cover');
  back.node.dataset.density = 'hard';
  back.body.append(
    element('p', 'recipe-book__eyebrow', 'CodeCraft'),
    element('h2', '', 'À toi de jouer.'),
  );
  host.append(...pages);
  stage.append(host);
  flat.append(contents(sequence.moduleIds));
  sequence.moduleIds.forEach((id) => {
    const section = element('section', 'recipe-book__linear-recipe');
    section.dataset.recipe = id;
    section.tabIndex = -1;
    addInformation(section, data.modules[id]);
    addScripts(section, data.modules[id]);
    flat.append(section);
  });
  root.append(heading, toolbar, status, stage, flat);

  function sync() {
    if (!flip) return;
    const index = flip.getCurrentPageIndex();
    const portrait = flip.getOrientation() === 'portrait';
    root.dataset.orientation = flip.getOrientation();
    root.dataset.page = String(index);
    const end = portrait || index === 0 || index === pages.length - 1 ? index : index + 1;
    status.textContent =
      index === pages.length - 1
        ? 'Dos du carnet'
        : index === 0
          ? 'Couverture'
          : `Page ${index}${end > index ? ' à ' + end : ''} sur ${pages.length - 2}`;
    buttonPrev.disabled = linear || index === 0;
    buttonNext.disabled = linear || end >= pages.length - 1;
    pages.forEach((node, n) => {
      const visible = n >= index && n <= end;
      node.inert = !visible;
      node.setAttribute('aria-hidden', String(!visible));
    });
    const id = pages[index]?.dataset.recipe;
    if (id && id !== selectedId) markRecipe(id);
  }
  function setMode(value) {
    linear = value || !flip || reduced.matches;
    stage.hidden = linear;
    flat.hidden = !linear;
    mode.textContent = linear ? 'Vue livre' : 'Lecture sans animation';
    mode.setAttribute('aria-pressed', String(linear));
    mode.disabled = reduced.matches || !flip;
    buttonPrev.disabled = linear;
    buttonNext.disabled = linear;
    if (linear) status.textContent = 'Lecture sans animation';
    else {
      flip.update();
      sync();
    }
  }
  const preferenceChange = () => {
    if (reduced.matches) setMode(true);
    else mode.disabled = !flip;
  };
  reduced.addEventListener('change', preferenceChange);
  const resize = () => {
    if (!flip) return;
    const settings = flip.getSettings();
    settings.maxHeight = Math.max(440, Math.min(820, window.innerHeight - 230));
    settings.maxWidth = (settings.maxHeight * 520) / 760;
    if (!linear) {
      flip.update();
      sync();
    }
  };
  window.addEventListener('resize', resize);
  const keyboard = (event) => {
    if (linear || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    if (event.target.closest('.recipe-book__body')) return;
    event.preventDefault();
    if (event.key === 'ArrowRight') flip.flipNext();
    else flip.flipPrev();
  };
  root.addEventListener('keydown', keyboard);
  setMode(true);
  requestAnimationFrame(async () => {
    try {
      const { PageFlip } = await import('./page-flip-vendor.mjs');
      if (disposed || !root.isConnected) return;
      // Mount while visible so StPageFlip can measure the actual available width.
      stage.hidden = false;
      const maxHeight = Math.max(440, Math.min(820, window.innerHeight - 230));
      flip = new PageFlip(host, {
        width: 520,
        height: 760,
        size: 'stretch',
        minWidth: 280,
        maxWidth: (maxHeight * 520) / 760,
        minHeight: 409,
        maxHeight,
        showCover: true,
        usePortrait: true,
        startPage: openCover ? 0 : recipePages.get(currentId),
        drawShadow: true,
        maxShadowOpacity: 0.4,
        flippingTime: 900,
        mobileScrollSupport: false,
        clickEventForward: true,
        disableFlipByClick: true,
        showPageCorners: true,
      });
      flip.on('flip', sync);
      flip.on('changeOrientation', sync);
      flip.on('changeState', (event) => {
        root.dataset.flipState = event.data;
      });
      flip.loadFromHTML(pages);
      root.dataset.engine = 'stpageflip';
      setMode(reduced.matches);
    } catch {
      flip?.destroy();
      flip = undefined;
      setMode(true);
    }
  });
  return {
    node: root,
    dispose() {
      disposed = true;
      reduced.removeEventListener('change', preferenceChange);
      window.removeEventListener('resize', resize);
      root.removeEventListener('keydown', keyboard);
      flip?.destroy();
    },
  };
}
