const assert = require('node:assert/strict');
const { loadCatalog } = require('../scripts/catalog/load-catalog.cjs');
const { withBrowser } = require('./helpers/browser.cjs');
const data = loadCatalog();
const { studentScope } = require('./helpers/student-scope.cjs');
const scope = studentScope(data);
withBrowser(async ({ navigate, evaluate, wait, call, screenshot }) => {
  const open = (id, query = '') =>
    navigate('index.html', '#module/' + id + query, data.modules[id].title);
  // The sidebar must stay pinned when the document reaches its lower scroll limit.
  const [sidebarPathwayId, sidebarPathway] =
    scope.pathways.find(([id]) => id === 'web-debutants') || scope.pathways[0] || [];
  if (sidebarPathway) {
    await open(sidebarPathway.moduleIds[0], '?parcours=' + sidebarPathwayId);
    for (const height of [900, 600]) {
      await call('Emulation.setDeviceMetricsOverride', {
        width: 1280,
        height,
        deviceScaleFactor: 1,
        mobile: false,
      });
      const positions = [];
      for (const position of ['middle', 'bottom']) {
        await evaluate(
          `window.scrollTo({top:document.documentElement.scrollHeight${position === 'middle' ? '/2' : ''},behavior:'instant'});new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))`,
        );
        positions.push(
          await evaluate('document.querySelector(".course-sidebar").getBoundingClientRect().top'),
        );
      }
      assert.ok(Math.abs(positions[0] - 20) < 1, 'Sidebar pinned mid-page');
      assert.ok(Math.abs(positions[1] - positions[0]) < 1, 'Sidebar stays pinned at page end');
      await screenshot('sidebar-page-end-' + height);
    }
    await call('Emulation.clearDeviceMetricsOverride');
  }
  if (scope.includes('html-titres-paragraphes')) {
    await open('html-titres-paragraphes', '?parcours=web-debutants');
    for (const width of [1280, 390, 320]) {
      await call('Emulation.setDeviceMetricsOverride', {
        width,
        height: 1000,
        deviceScaleFactor: 1,
        mobile: width < 500,
      });
      assert.equal(
        await evaluate('document.querySelector("details.support-card--done").open'),
        false,
      );
      assert.ok(
        await evaluate(
          `Math.abs(document.querySelector('.support-grid').getBoundingClientRect().width - document.querySelector('.lesson-checkpoint').getBoundingClientRect().width) < 1`,
        ),
      );
      await evaluate('document.querySelector("details.support-card--done summary").click()');
      assert.ok(
        await evaluate(
          'document.querySelector("details.support-card--done").open && document.querySelector("details.support-card--done p").getBoundingClientRect().height > 0',
        ),
      );
      await evaluate(
        'document.querySelector("details.support-card--done summary").click();document.querySelector(".lesson-checkpoint").scrollIntoView({block:"start",behavior:"instant"})',
      );
      await evaluate(
        'new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))',
      );
      assert.ok(await evaluate('document.documentElement.scrollWidth <= innerWidth'));
      await screenshot('course-ending-' + width);
    }
    await call('Emulation.clearDeviceMetricsOverride');
  }
  for (const [id, pathway] of scope.pathways) {
    const order = pathway.moduleIds;
    await navigate('index.html', '#parcours/' + id, data.modules[order[0]].title);
    for (let i = 0; i < order.length; i++) {
      await wait(
        'document.querySelector("main h1")?.textContent === ' +
          JSON.stringify(data.modules[order[i]].title),
      );
      const expected = [order[i - 1], order[i + 1]]
        .filter(Boolean)
        .map((module) => '#module/' + module + '?parcours=' + id);
      const neighbours = await evaluate(
        'Array.from(document.querySelectorAll(".module-navigation a"), a => a.getAttribute("href")).filter(href => href.startsWith("#module/"))',
      );
      assert.deepEqual(neighbours, expected, 'Neighbours: ' + id + '/' + order[i]);
      if (i + 1 < order.length)
        await evaluate('document.querySelector(".module-navigation__next").click()');
    }
  }
  if (scope.includes('html-images')) {
    await open('html-images', '?activite=depannage&tache=source-incorrecte');
    await wait('document.activeElement.dataset.taskId === "source-incorrecte"');
    await call('Page.reload');
    await wait('document.activeElement.dataset.taskId === "source-incorrecte"');
    await evaluate('document.querySelector("main input[type=checkbox]").click()');
    assert(await evaluate('document.querySelector("main input[type=checkbox]").checked'));
    await call('Page.reload');
    await wait('document.querySelector("main h1")?.textContent === "Images HTML"');
    assert.equal(
      await evaluate('document.querySelector("main input[type=checkbox]").checked'),
      false,
    );
    assert.equal(await evaluate('localStorage.length + sessionStorage.length'), 0);
  }
  if (scope.includes('css-flexbox')) {
    await open('css-flexbox', '?parcours=web-avances');
    await evaluate(
      '(()=>{const select=document.querySelector(".flex-display-demo select");select.value="flex";select.dispatchEvent(new Event("change"));})()',
    );
    assert.equal(
      await evaluate(
        'getComputedStyle(document.querySelector(".flex-display-demo .cartes")).display',
      ),
      'flex',
    );
    assert(
      (await evaluate('document.querySelector(".flex-display-demo code").textContent')).includes(
        'display: flex',
      ),
    );
    await call('Page.reload');
    await wait('document.querySelector(".flex-display-demo select")?.value === "block"');
  }
  const sampleIds = scope.modules;
  for (const width of [1280, 390, 320]) {
    await call('Emulation.setDeviceMetricsOverride', {
      width,
      height: 900,
      deviceScaleFactor: 1,
      mobile: width < 500,
    });
    for (const id of sampleIds) {
      await open(id);
      assert(
        await evaluate('document.documentElement.scrollWidth <= innerWidth'),
        id + ' overflows at ' + width,
      );
      assert.equal(await evaluate('document.querySelectorAll("main h1").length'), 1);
    }
    for (const [id, name] of [
      ['scratch-boucles', 'scratch'],
      ['python-affichage', 'python'],
      ['css-flexbox', 'flexbox'],
      ['robotique-lumiere', 'robotics'],
      ['gdevelop-projet', 'gdevelop'],
    ]) {
      if (scope.includes(id)) {
        await open(id);
        await screenshot(name + '-' + width);
      }
    }
  }
  await navigate('index.html', '#module/missing', 'Ce contenu est introuvable.');
  console.log(
    'Student checks passed: ' +
      sampleIds.length +
      ' modules, ' +
      scope.pathways.length +
      ' pathways, applicable interactions and responsive layouts (1280/390/320).',
  );
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
