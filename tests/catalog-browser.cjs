const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { loadCatalog } = require('../scripts/catalog/load-catalog.cjs');
const { buildCatalog } = require('../scripts/build-catalog.cjs');
const { withBrowser } = require('./helpers/browser.cjs');
async function main() {
  buildCatalog({ check: true });
  const catalog = loadCatalog();
  await withBrowser(async ({ call, evaluate, wait, navigate, profile, errors, origin }) => {
    const checkBackgrounds = async () => {
      const results = await evaluate(`(async () => {
        const urls = new Set();
        for (const node of document.querySelectorAll('body, body *')) {
          for (const value of [getComputedStyle(node).backgroundImage,
            getComputedStyle(node, '::before').backgroundImage,
            getComputedStyle(node, '::after').backgroundImage]) {
            for (const match of value.matchAll(/url\\(["']?([^"')]+)["']?\\)/g)) urls.add(match[1]);
          }
        }
        return Promise.all([...urls].map(url => new Promise(resolve => {
          const image = new Image();
          const timer = setTimeout(() => resolve({url, loaded: false}), 5000);
          const finish = loaded => { clearTimeout(timer); resolve({url, loaded}); };
          image.onload = () => finish(image.naturalWidth > 0);
          image.onerror = () => finish(false);
          image.src = url;
        })));
      })()`);
      assert.ok(results.length > 0, 'Expected decorative background images');
      assert.deepEqual(
        results.filter((result) => !result.loaded),
        [],
        'Background images must load',
      );
    };
    await navigate('index.html', '', 'CodeCraft');
    await checkBackgrounds();
    const homeShot = await call('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(profile, 'home-banner.png'), Buffer.from(homeShot.data, 'base64'));
    assert.deepStrictEqual(
      await evaluate('Object.keys(window.CODECRAFT_DATA.modules)'),
      Object.keys(catalog.modules),
    );
    const pathwayEntry = (id) => ({
      title: catalog.modules[catalog.pathways[id].moduleIds[0]].title,
      hash: '#module/' + catalog.pathways[id].moduleIds[0] + '?parcours=' + id,
    });
    for (const [id, domain] of Object.entries(catalog.domains)) {
      const single = domain.pathwayIds.length === 1 && !(domain.diagnosticModuleIds || []).length;
      await navigate(
        'index.html',
        '#domaine/' + id,
        single ? pathwayEntry(domain.pathwayIds[0]).title : domain.title,
      );
      await checkBackgrounds();
    }
    for (const id of Object.keys(catalog.pathways)) {
      const entry = pathwayEntry(id);
      await navigate('index.html', '#parcours/' + id, entry.title);
      assert.equal(await evaluate('location.hash'), entry.hash);
    }
    for (const [id, module] of Object.entries(catalog.modules))
      await navigate('index.html', '#module/' + id, module.title);
    for (const [alias, route] of Object.entries(catalog.aliases)) {
      const [kind, id] = route.split('/');
      const entry =
        kind === 'parcours'
          ? pathwayEntry(id)
          : {
              title: { module: catalog.modules, domaine: catalog.domains }[kind][id].title,
              hash: '#' + route,
            };
      await navigate('index.html', '#' + alias, entry.title);
      assert.equal(await evaluate('location.hash'), entry.hash);
    }
    await navigate(
      'index.html',
      '#module/html-images?parcours=web-debutants',
      catalog.modules['html-images'].title,
    );
    await wait(
      'document.querySelector(".web-comparison iframe").contentDocument.querySelector("img")?.naturalWidth === 160',
    );
    await wait(
      'Array.from(document.querySelectorAll(".image-resource img")).every(image => image.complete && image.naturalWidth === 160)',
    );
    assert.equal(
      await evaluate('document.querySelectorAll(".image-resource a[download]").length'),
      2,
    );
    assert.equal(await evaluate('document.querySelectorAll(".image-resource button").length'), 0);
    for (const width of [1280, 390]) {
      await call('Emulation.setDeviceMetricsOverride', {
        width,
        height: 1000,
        deviceScaleFactor: 1,
        mobile: width < 500,
      });
      for (const variant of [0, 1]) {
        await evaluate(
          '(()=>{const select=document.querySelector(".web-comparison select");select.value=' +
            JSON.stringify(String(variant)) +
            ';select.dispatchEvent(new Event("change"));})()',
        );
        await wait(
          'document.querySelector(".web-comparison iframe").contentDocument.querySelector("img")?.complete',
        );
        assert.equal(
          await evaluate(
            'document.querySelector(".web-comparison iframe").contentDocument.querySelector("img").naturalWidth',
          ),
          variant === 0 ? 160 : 0,
        );
        await evaluate(
          'document.querySelector(".web-comparison").scrollIntoView({block:"start",behavior:"instant"});new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))',
        );
        assert(await evaluate('document.documentElement.scrollWidth <= innerWidth'));
        const shot = await call('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync(
          path.join(profile, 'images-' + width + '-' + variant + '.png'),
          Buffer.from(shot.data, 'base64'),
        );
      }
    }
    await call('Emulation.clearDeviceMetricsOverride');
    let guides = 0;
    for (const [id, module] of Object.entries(catalog.modules)) {
      if (!module.teacherGuide) continue;
      await call('Page.navigate', { url: origin + 'prof.html#guide/' + id });
      await wait(
        'document.querySelector("[data-guide-view] h2")?.textContent === ' +
          JSON.stringify('Guide professeur : ' + module.title),
      );
      guides++;
    }
    assert.deepStrictEqual(errors, []);
    console.log(
      'Browser checks passed: ' +
        Object.keys(catalog.modules).length +
        ' modules, ' +
        Object.keys(catalog.pathways).length +
        ' pathways, ' +
        Object.keys(catalog.domains).length +
        ' domains, aliases, images and ' +
        guides +
        ' teacher guides.',
    );
  });
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
