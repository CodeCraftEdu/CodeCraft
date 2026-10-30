const assert = require('node:assert/strict');
module.exports = async function recipeBookScenario({ navigate, evaluate, wait, call, screenshot }) {
  const ready = () =>
    wait('document.querySelector(".recipe-book")?.dataset.engine === "stpageflip"');
  const settled = () =>
    wait('document.querySelector(".recipe-book")?.dataset.flipState === "read"');
  const page = (n) => wait(`document.querySelector('.recipe-book')?.dataset.page === '${n}'`);
  await call('Emulation.setDeviceMetricsOverride', {
    width: 1280,
    height: 1000,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await navigate('index.html', '#parcours/scratch-recettes', 'Animer la marche de mon personnage');
  await ready();
  await page(0);
  await screenshot('scratch-livre-couverture');
  await evaluate('document.querySelector(".recipe-book__cover button").click()');
  await wait('document.querySelector(".recipe-book").dataset.flipState === "flipping"');
  assert.ok(await evaluate('document.querySelector(".stf__hardShadow") !== null'));
  await page(1);
  await settled();
  await evaluate('document.querySelector(".recipe-book__page[aria-hidden=false] a").click()');
  await page(3);
  await settled();
  assert.equal(await evaluate('document.querySelector(".course-sidebar")'), null);
  assert.ok(
    await evaluate(
      'document.querySelector(".recipe-book__page[data-recipe] .scratch-script__block") !== null || document.querySelector(".recipe-book__script-page .scratch-script__block") !== null',
    ),
  );
  assert.ok(
    await evaluate(
      'Array.from(document.querySelectorAll(".scratch-script__choice")).every(menu => getComputedStyle(menu).color === "rgb(51, 38, 0)")',
    ),
  );
  assert.equal(
    await evaluate(
      'document.querySelectorAll(".scratch-script__closing, .recipe-book img").length',
    ),
    0,
  );
  await screenshot('scratch-livre-double-page');
  // Native corner drag on the right paper, outside its scrollable text area.
  const bounds = await evaluate(
    '(() => {const b=document.querySelector(".recipe-book__host").getBoundingClientRect(); return {x:b.right-8,y:b.bottom-8,w:b.width};})()',
  );
  await call('Input.dispatchMouseEvent', { type: 'mouseMoved', x: bounds.x, y: bounds.y });
  await call('Input.dispatchMouseEvent', {
    type: 'mousePressed',
    x: bounds.x,
    y: bounds.y,
    button: 'left',
    clickCount: 1,
  });
  for (let step = 1; step <= 8; step++)
    await call('Input.dispatchMouseEvent', {
      type: 'mouseMoved',
      x: bounds.x - (step * bounds.w) / 10,
      y: bounds.y - 25,
      button: 'left',
      buttons: 1,
    });
  await call('Input.dispatchMouseEvent', {
    type: 'mouseReleased',
    x: bounds.x - bounds.w * 0.8,
    y: bounds.y - 25,
    button: 'left',
    clickCount: 1,
  });
  await page(5);
  await settled();
  await evaluate('document.querySelector(".recipe-book__toolbar button").click()');
  await page(3);
  await settled();
  await navigate(
    'index.html',
    '#module/scratch-recette-marche?parcours=scratch-recettes',
    'Animer la marche de mon personnage',
  );
  await ready();
  await page(3);
  for (const width of [390, 320]) {
    await call('Emulation.setDeviceMetricsOverride', {
      width,
      height: 900,
      deviceScaleFactor: 1,
      mobile: true,
    });
    await wait('document.querySelector(".recipe-book").dataset.orientation === "portrait"');
    if ((await evaluate('document.querySelector(".recipe-book").dataset.page')) !== '4') {
      await evaluate('document.querySelector(".recipe-book__toolbar button:nth-child(3)").click()');
      await page(4);
      await settled();
    }
    await evaluate(
      'document.querySelector(".recipe-book__script-page .recipe-book__body").scrollTop=100000',
    );
    assert.ok(
      await evaluate(
        'document.querySelector(".recipe-book__script-page .recipe-book__body").scrollTop > 0',
      ),
    );
    assert.ok(await evaluate('document.documentElement.scrollWidth <= innerWidth'));
    assert.ok(
      await evaluate(
        'getComputedStyle(document.querySelector(".scratch-script__block")).fontSize === "14px"',
      ),
    );
    await screenshot('scratch-livre-blocs-' + width);
  }
  await call('Emulation.setEmulatedMedia', {
    features: [{ name: 'prefers-reduced-motion', value: 'reduce' }],
  });
  await wait('!document.querySelector(".recipe-book__flat").hidden');
  assert.ok(await evaluate('document.querySelector(".recipe-book__stage").hidden'));
  assert.ok(
    await evaluate(
      'document.querySelector(".recipe-book__flat .scratch-script").getBoundingClientRect().height > 0',
    ),
  );
  await screenshot('scratch-livre-lecture-accessible');
  await call('Emulation.setEmulatedMedia', { features: [] });
  await call('Emulation.clearDeviceMetricsOverride');
};
