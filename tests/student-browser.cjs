const assert = require('node:assert/strict');
const { loadCatalog } = require('../scripts/catalog/load-catalog.cjs');
const { withBrowser } = require('./helpers/browser.cjs');
const data = loadCatalog();
withBrowser(async ({ navigate, evaluate, wait, call, screenshot }) => {
  const open = (id, query = '') => navigate('index.html', '#module/' + id + query, data.modules[id].title);
  for (const [id, pathway] of Object.entries(data.pathways)) {
    const order = pathway.moduleIds;
    await navigate('index.html', '#parcours/' + id, data.modules[order[0]].title);
    for (let i = 0; i < order.length; i++) {
      await wait('document.querySelector("main h1")?.textContent === ' + JSON.stringify(data.modules[order[i]].title));
      const expected = [order[i - 1], order[i + 1]].filter(Boolean).map(module => '#module/' + module + '?parcours=' + id);
      const neighbours = await evaluate('Array.from(document.querySelectorAll(".module-navigation a"), a => a.getAttribute("href")).filter(href => href.startsWith("#module/"))');
      assert.deepEqual(neighbours, expected, 'Neighbours: ' + id + '/' + order[i]);
      if (i + 1 < order.length) await evaluate('document.querySelector(".module-navigation__next").click()');
    }
  }
  await open('html-images', '?activite=depannage&tache=source-incorrecte');
  await wait('document.activeElement.dataset.taskId === "source-incorrecte"');
  await call('Page.reload');
  await wait('document.activeElement.dataset.taskId === "source-incorrecte"');
  await evaluate('document.querySelector("main input[type=checkbox]").click()');
  assert(await evaluate('document.querySelector("main input[type=checkbox]").checked'));
  await call('Page.reload');
  await wait('document.querySelector("main h1")?.textContent === "Images HTML"');
  assert.equal(await evaluate('document.querySelector("main input[type=checkbox]").checked'), false);
  assert.equal(await evaluate('localStorage.length + sessionStorage.length'), 0);
  await open('css-flexbox', '?parcours=web-avances');
  await evaluate('(()=>{const select=document.querySelector(".flex-display-demo select");select.value="flex";select.dispatchEvent(new Event("change"));})()');
  assert.equal(await evaluate('getComputedStyle(document.querySelector(".flex-display-demo .cartes")).display'), 'flex');
  assert((await evaluate('document.querySelector(".flex-display-demo code").textContent')).includes('display: flex'));
  await call('Page.reload');
  await wait('document.querySelector(".flex-display-demo select")?.value === "block"');
  const sampleIds = Object.keys(data.modules);
  for (const width of [1280, 390, 320]) {
    await call('Emulation.setDeviceMetricsOverride', { width, height: 900, deviceScaleFactor: 1, mobile: width < 500 });
    for (const id of sampleIds) {
      await open(id);
      assert(await evaluate('document.documentElement.scrollWidth <= innerWidth'), id + ' overflows at ' + width);
      assert.equal(await evaluate('document.querySelectorAll("main h1").length'), 1);
    }
    await open('scratch-boucles');
    await screenshot('scratch-' + width);
    await open('python-affichage');
    await screenshot('python-' + width);
    await open('css-flexbox');
    await screenshot('flexbox-' + width);
    await open('robotique-lumiere');
    await screenshot('robotics-' + width);
    await open('gdevelop-projet');
    await screenshot('gdevelop-' + width);
  }
  await navigate('index.html', '#module/missing', 'Ce contenu est introuvable.');
  console.log('Student checks passed: every pathway transition, deep links, reload, temporary checks, Flexbox and responsive Python/Scratch/Web/robotics.');
}).catch(error => { console.error(error); process.exitCode = 1; });
