const assert = require('node:assert/strict');
const { loadCatalog } = require('../scripts/catalog/load-catalog.cjs');
const { withBrowser } = require('./helpers/browser.cjs');
const data = loadCatalog();
const { studentScope } = require('./helpers/student-scope.cjs');
const scope = studentScope(data);
withBrowser(async ({ navigate, evaluate, wait, call, screenshot }) => {
  const open = (id, query = '') =>
    navigate('index.html', '#module/' + id + query, data.modules[id].title);
  await navigate('index.html', '#', data.site.name);
  for (const width of [1280, 320]) {
    await call('Emulation.setDeviceMetricsOverride', {
      width,
      height: 1000,
      deviceScaleFactor: 1,
      mobile: width < 500,
    });
    await evaluate(
      'document.querySelector(".site-footer").scrollIntoView({block:"end",behavior:"instant"})',
    );
    assert.equal(await evaluate('document.querySelectorAll("footer").length'), 1);
    assert.equal(
      await evaluate('document.querySelector(".site-footer__contact").getAttribute("href")'),
      'mailto:admin.codecraft@gmail.com',
    );
    assert.equal(
      await evaluate('document.querySelector(".site-footer__email").textContent.trim()'),
      'admin.codecraft@gmail.com',
    );
    assert.ok(await evaluate('document.documentElement.scrollWidth <= innerWidth'));
    await screenshot('site-footer-' + width);
  }
  await call('Emulation.clearDeviceMetricsOverride');
  if (scope.includes('python-affichage')) {
    await open('python-affichage', '?parcours=python-debutants');
    for (const width of [1280, 320]) {
      await call('Emulation.setDeviceMetricsOverride', {
        width,
        height: 1000,
        deviceScaleFactor: 1,
        mobile: width < 500,
      });
      const panel = '[data-activity-id=exemple] .code-diagram__console';
      assert.equal(await evaluate(`document.querySelector('${panel}').tagName`), 'DIV');
      assert.equal(await evaluate(`document.querySelector('${panel} summary')`), null);
      assert.equal(
        await evaluate(`document.querySelector('${panel} .code-diagram__header').textContent`),
        'Console',
      );
      await evaluate(
        'document.querySelector("[data-activity-id=exemple] .code-diagram").scrollIntoView({block:"start",behavior:"instant"})',
      );
      assert.equal(
        await evaluate(`document.querySelector('${panel} pre').textContent`),
        data.modules['python-affichage'].blocks.find((block) => block.id === 'exemple')
          .consoleOutput,
      );
      assert.ok(await evaluate('document.documentElement.scrollWidth <= innerWidth'));
      await screenshot('python-editeur-console-' + width);
    }
    await call('Emulation.clearDeviceMetricsOverride');
  }
  if (scope.includes('minecraft-trajets')) {
    await open('minecraft-trajets', '?parcours=minecraft-algorithmes');
    await evaluate('document.querySelector("[data-activity-id=entree-scratch] a").click()');
    await wait(
      'location.hash.includes("activite=niveau-trois") && Math.abs(document.querySelector("[data-activity-id=niveau-trois]").getBoundingClientRect().top - 16) < 3',
    );
    await screenshot('minecraft-entree-codeorg');
  }
  // The sidebar stays pinned through the course; the public footer follows outside its grid.
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
          `(()=>{const end=document.querySelector('.course-layout').getBoundingClientRect().bottom+scrollY;window.scrollTo({top:${position === 'middle' ? 'end/2' : 'end-innerHeight'},behavior:'instant'});return new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))})()`,
        );
        positions.push(
          await evaluate('document.querySelector(".course-sidebar").getBoundingClientRect().top'),
        );
      }
      assert.ok(Math.abs(positions[0] - 20) < 1, 'Sidebar pinned mid-page');
      assert.ok(Math.abs(positions[1] - positions[0]) < 1, 'Sidebar stays pinned at course end');
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
      assert.equal(
        await evaluate(`Array.from(document.querySelectorAll('.code-editor, .web-comparison__source, .flex-display-demo__source, .flex-property-demo__source')).every(editor => {
          const header = editor.querySelector('.code-diagram__header');
          const zone = header?.querySelector('.code-diagram__zone')?.textContent;
          const file = header?.querySelector('.code-diagram__file');
          return zone === 'Arborescence' ? !file : zone === 'Éditeur' && Boolean(file?.textContent);
        })`),
        true,
        'Shared editor headers: ' + order[i],
      );
      if (i + 1 < order.length)
        await evaluate('document.querySelector(".module-navigation__next").click()');
    }
  }
  if (scope.includes('html-images')) {
    await open('html-images');
    assert.equal(
      await evaluate(`(() => {
        const tree = document.querySelector('.image-resource .code-editor');
        tree.scrollIntoView({block:'center',behavior:'instant'});
        return tree.querySelector('.code-diagram__zone').textContent === 'Arborescence' && !tree.querySelector('.code-diagram__file');
      })()`),
      true,
    );
    await screenshot('html-images-arborescence');
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
      ['minecraft-trajets', 'minecraft-trajets'],
      ['minecraft-repetitions', 'minecraft-repetitions'],
      ['minecraft-passage', 'minecraft-passage'],
      ['minecraft-procedures', 'minecraft-procedures'],
      ['minecraft-motifs', 'minecraft-motifs'],
      ['minecraft-decisions', 'minecraft-decisions'],
      ['minecraft-strategies', 'minecraft-strategies'],
      ['minecraft-automatisation', 'minecraft-automatisation'],
    ]) {
      if (scope.includes(id)) {
        await open(id);
        await screenshot(name + '-' + width);
        if (width !== 390 && ['scratch-boucles', 'gdevelop-projet'].includes(id)) {
          await evaluate(
            `document.querySelector(${JSON.stringify(id === 'scratch-boucles' ? '.scratch-script, .scratch-scripts' : '.game-window')}).scrollIntoView({block:'center',behavior:'instant'})`,
          );
          await screenshot(name + '-window-' + width);
        }
        if (['html-images', 'css-flexbox', 'gdevelop-projet'].includes(id)) {
          const target = await evaluate(`(() => {
            const node = document.querySelector('.code-editor, .flex-display-demo__source, .inline-code');
            if (!node) return false;
            node.scrollIntoView({block:'center',behavior:'instant'});
            return true;
          })()`);
          if (target) await screenshot(name + '-code-' + width);
        }
        if (id.startsWith('minecraft-')) {
          const activity = {
            'minecraft-trajets': 'agent-joueur',
            'minecraft-repetitions': 'niveau-quatre',
            'minecraft-passage': 'reparer',
            'minecraft-procedures': 'choisir-dix',
            'minecraft-motifs': 'guide',
            'minecraft-decisions': 'transfert',
            'minecraft-strategies': 'transfert',
            'minecraft-automatisation': 'essai',
          }[id];
          await evaluate(
            `document.querySelector('[data-activity-id="${activity}"]').scrollIntoView({block:'start',behavior:'instant'})`,
          );
          await screenshot(name + '-activity-' + width);
        }
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
