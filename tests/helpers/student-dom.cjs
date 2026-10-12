const { runScripts } = require('./script-context.cjs');
const { bindGlobals } = require('./fixtures.cjs');
const { JSDOM } = require('jsdom');
const { loadCatalog } = require('../../scripts/catalog/load-catalog.cjs');
const { createTextTools } = require('../../src/student/text.mjs');
const { createCodeTools } = require('../../src/student/code.mjs');
const { createDemonstrations } = require('../../src/student/demonstrations.mjs');
const { createBlockRenderer } = require('../../src/student/blocks.mjs');
const { createRouteUrls } = require('../../src/student/routes.mjs');
const { createRouter } = require('../../src/student/router.mjs');

// A real DOM for module tests. Layout, image loading and iframe sizing stay in Chrome tests.
function studentDom(data = loadCatalog()) {
  const dom = new JSDOM('<body><main id="main-content" tabindex="-1"></main></body>', {
    url: 'https://codecraft.example.org/',
  });
  const { window } = dom;
  const mediaListeners = new Set();
  window.matchMedia = () => ({
    matches: false,
    addEventListener: (_, fn) => mediaListeners.add(fn),
    removeEventListener: (_, fn) => mediaListeners.delete(fn),
  });
  window.scrollTo = () => {};
  const bindings = {
    window,
    document: window.document,
    location: window.location,
    history: window.history,
    requestAnimationFrame: () => {},
  };
  const restoreGlobals = bindGlobals(bindings);
  try {
    window.CODECRAFT_DATA = data;
    runScripts(['pedagogy.js'], {
      window,
      document: window.document,
      URL,
      URLSearchParams,
    });
    const pedagogy = window.CodeCraftPedagogy;
    const text = createTextTools();
    const code = createCodeTools(text);
    const demoCleanups = [];
    const demonstrations = createDemonstrations({ ...text, ...code, demoCleanups });
    const routes = createRouteUrls(data);
    const link = (label, href, cls = '') => {
      const node = text.element('a', cls, label);
      node.href = href;
      return node;
    };
    const blocks = createBlockRenderer({
      data,
      pedagogy,
      checks: new Set(),
      ...text,
      ...code,
      link,
      ...routes,
      demonstrations,
    });
    const main = window.document.getElementById('main-content');
    const router = createRouter({
      data,
      pedagogy,
      main,
      demoCleanups,
      ...text,
      link,
      ...blocks,
      routes,
    });
    window.CodeCraftInlineText = text.appendInlineText;
    window.CodeCraftHighlightCode = code.highlightCode;
    window.CodeCraftCreateCode = code.createCode;
    return {
      window,
      main,
      routes,
      blocks,
      demonstrations,
      mediaListeners,
      navigate(hash) {
        window.history.replaceState(null, '', hash || '/');
        router.navigate();
      },
      close() {
        try {
          window.history.replaceState(null, '', '/');
          router.navigate();
        } finally {
          try {
            dom.window.close();
          } finally {
            restoreGlobals();
          }
        }
      },
    };
  } catch (error) {
    try {
      dom.window.close();
    } finally {
      restoreGlobals();
    }
    throw error;
  }
}
module.exports = { studentDom };
