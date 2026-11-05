const assert = require('node:assert/strict');
module.exports = async ({ navigate, evaluate, wait, call, screenshot, focus, key }) => {
  const activate = async (id) => {
    await focus('[data-discovery-focus="' + id + '"]');
    await key();
  };
  const choose = async (id, value) => {
    if (await evaluate(`document.getElementById('${id}').tagName !== 'SELECT'`)) {
      await focus('#' + id + ' input[value="' + value + '"]');
      await key(' ', 'Space', 32);
      assert.equal(await evaluate(`document.querySelector('#${id} input:checked').value`), value);
      return;
    }
    const index = await evaluate(
      `Array.from(document.getElementById('${id}').options).findIndex(option=>option.value==='${value}')`,
    );
    assert.ok(index > 0);
    await focus('#' + id);
    await key('Home', 'Home', 36);
    for (let i = 0; i < index; i++) await key('ArrowDown', 'ArrowDown', 40);
    assert.equal(await evaluate(`document.getElementById('${id}').value`), value);
  };
  const capture = async (name) => {
    await evaluate(
      'document.querySelector(".ai-discovery").scrollIntoView({block:"start",behavior:"instant"})',
    );
    assert.ok(await evaluate('document.documentElement.scrollWidth <= innerWidth'));
    await screenshot(name);
  };
  await navigate('index.html', '#', 'CodeCraft');
  await focus('.home-domain--ia');
  await key();
  await wait('document.querySelector("main h1")?.textContent === "Que fait un système d’IA ?"');
  assert.equal(await evaluate('localStorage.getItem("codecraft.ai.decouverte.v1")'), null);
  assert.equal(await evaluate('document.querySelector(".ai-teacher-toggle")'), null);
  await activate('check');
  assert.equal(
    await evaluate('document.querySelectorAll(".ai-discovery .ai-lab__feedback--review").length'),
    4,
  );
  await choose('usage-videos', 'generer');
  await activate('check');
  assert.ok(
    await evaluate(
      'document.querySelector("[data-discovery-group=videos] .ai-lab__feedback").textContent.includes("À revoir")',
    ),
  );
  for (const [id, value] of [
    ['usage-videos', 'recommander'],
    ['usage-affiche', 'generer'],
    ['usage-photos', 'reconnaitre'],
    ['usage-cantine', 'predire'],
  ])
    await choose(id, value);
  await activate('check');
  assert.equal(
    await evaluate('document.querySelectorAll(".ai-discovery .ai-lab__feedback--review").length'),
    0,
  );
  await capture('ai-decouverte-usages-1280');
  await activate('next');
  for (const [id, value] of [
    ['audio-input', 'audio'],
    ['audio-output', 'transcription'],
    ['generation-input', 'texte'],
    ['generation-output', 'image'],
    ['animaux-input', 'photos'],
    ['animaux-output', 'categories'],
  ])
    await choose(id, value);
  await activate('check');
  assert.equal(
    await evaluate('document.querySelectorAll(".ai-discovery .ai-lab__feedback--review").length'),
    0,
  );
  await activate('next');
  await wait(
    'document.querySelector(".ai-discovery img").complete && document.querySelector(".ai-discovery img").naturalWidth === 1536',
  );
  for (const [id, value] of [
    ['image-joueurs', 'visible'],
    ['image-ballon', 'visible'],
    ['image-date', 'absent'],
    ['image-reel', 'indeducible'],
  ])
    await choose(id, value);
  await activate('check');
  assert.equal(
    await evaluate('document.querySelectorAll(".ai-discovery .ai-lab__feedback--review").length'),
    0,
  );
  for (const width of [1280, 390, 320]) {
    await call('Emulation.setDeviceMetricsOverride', {
      width,
      height: 1000,
      deviceScaleFactor: 1,
      mobile: width < 500,
    });
    await capture('ai-decouverte-image-' + width);
  }
  await activate('next');
  await choose('bilan-formuler', 'sait');
  await activate('check');
  assert.ok(
    await evaluate(
      'document.querySelector("[data-discovery-group=formuler] .ai-lab__feedback").textContent.includes("À revoir")',
    ),
  );
  for (const [id, value] of [
    ['bilan-capacites', 'tache'],
    ['bilan-verifier', 'audio'],
    ['bilan-formuler', 'precis'],
  ])
    await choose(id, value);
  await activate('check');
  await focus('#ai-discovery-answer');
  await call('Input.insertText', {
    text: 'Le service reçoit un enregistrement et produit du texte. Je le compare à l’audio.',
  });
  await activate('criteria');
  await call('Page.reload');
  await wait('document.querySelector("#ai-discovery-answer")?.value.includes("enregistrement")');
  assert.equal(
    await evaluate('document.querySelector(".ai-discovery [aria-current=step]").textContent'),
    'Bilan',
  );
  assert.equal(
    await evaluate('document.querySelectorAll(".ai-discovery .ai-lab__criteria li").length'),
    3,
  );
  await capture('ai-decouverte-bilan-320');
  await activate('reset');
  await activate('cancel-reset');
  assert.ok(
    await evaluate(
      'document.querySelector("#ai-discovery-answer").value.includes("enregistrement")',
    ),
  );
  await evaluate('localStorage.setItem("ai-other-chapter","keep")');
  await activate('reset');
  await activate('confirm-reset');
  assert.equal(await evaluate('localStorage.getItem("codecraft.ai.decouverte.v1")'), null);
  assert.equal(await evaluate('localStorage.getItem("ai-other-chapter")'), 'keep');
  await evaluate('localStorage.removeItem("ai-other-chapter")');
  await focus('.module-navigation__next');
  await key();
  await wait('document.querySelector("main h1")?.textContent === "Des règles aux données"');
  assert.ok(
    await evaluate(
      'document.querySelector(".module-navigation__previous").href.includes("ia-decouvrir")',
    ),
  );
  await call('Emulation.setDeviceMetricsOverride', {
    width: 1280,
    height: 1000,
    deviceScaleFactor: 1,
    mobile: false,
  });
  console.log(
    'Découverte IA : usages, chaînes, image, bilan, clavier, reprise, reset et passage au chapitre 2 vérifiés.',
  );
};
