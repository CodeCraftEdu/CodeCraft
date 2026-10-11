import { createTextTools } from './src/student/text.mjs';
import { createCodeTools } from './src/student/code.mjs';
import { createDemonstrations } from './src/student/demonstrations.mjs';
import { createBlockRenderer } from './src/student/blocks.mjs';
import { createRouteUrls } from './src/student/routes.mjs';
import { createRouter } from './src/student/router.mjs';

const data = window.CODECRAFT_DATA;
const pedagogy = window.CodeCraftPedagogy;
const main = document.getElementById('main-content');
if (data && main) {
  const text = createTextTools();
  const code = createCodeTools(text);
  const demoCleanups = [];
  const demonstrations = createDemonstrations({ ...text, ...code, demoCleanups });
  const routes = createRouteUrls(data);
  const link = (label, href, className = 'button button--secondary') => {
    const node = text.element('a', className, label);
    node.href = href;
    return node;
  };
  const blocks = createBlockRenderer({ data, pedagogy, checks: new Set(), ...text, ...code, link, ...routes, demonstrations });
  const { navigate } = createRouter({ data, pedagogy, main, demoCleanups, ...text, link, ...blocks, routes });
  window.CodeCraftInlineText = text.appendInlineText;
  window.CodeCraftHighlightCode = code.highlightCode;
  window.CodeCraftCreateCode = code.createCode;
  document.querySelector('.skip-link').addEventListener('click', event => {
    event.preventDefault();
    main.focus();
  });
  if (location.hash === '#main-content') history.replaceState(null, '', location.pathname + location.search);
  window.addEventListener('hashchange', navigate);
  navigate();
}
