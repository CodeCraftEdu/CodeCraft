const assert = require('node:assert/strict');
const { withBrowser } = require('./helpers/browser.cjs');
const lessons = [
  ['scratch-mission-commandes', 'Piloter le véhicule de Mission balises', 'limites'],
  ['scratch-mission-balises', 'Activer les balises et compter les points', 'alternance'],
  ['scratch-mission-vies', 'Ajouter des vies et un danger', 'contact'],
  ['scratch-mission-clones', 'Créer les obstacles mobiles de Mission balises', 'contact'],
  ['scratch-mission-messages', 'Changer de secteur avec des messages', 'declenchement'],
  ['scratch-mission-etats', 'Annoncer et verrouiller la fin de partie', 'decision'],
  ['scratch-mission-tests', 'Tester et personnaliser Mission balises', 'panne'],
];

withBrowser(async ({ navigate, call, evaluate, wait, pause, screenshot, origin }) => {
  for (const [id, title, focus] of lessons) {
    await navigate('index.html', '#module/' + id + '?parcours=scratch-avances', title);
    if (id.endsWith('commandes')) {
      await wait('document.querySelector(".lesson-illustration img").complete');
      assert.ok(
        await evaluate('document.querySelector(".lesson-illustration img").naturalWidth>0'),
      );
    }
    for (const width of [1280, 390, 320]) {
      await call('Emulation.setDeviceMetricsOverride', {
        width,
        height: 1100,
        deviceScaleFactor: 1,
        mobile: width < 500,
      });
      await evaluate(
        'document.querySelector(' +
          JSON.stringify('[data-activity-id="' + focus + '"]') +
          ').scrollIntoView({block:"start",behavior:"instant"})',
      );
      await pause(70);
      assert(
        await evaluate('document.documentElement.scrollWidth <= innerWidth'),
        id + '/' + width,
      );
      await screenshot(id + '-' + width);
    }
    await call('Emulation.clearDeviceMetricsOverride');
    if (!id.endsWith('commandes')) {
      const selector = '[data-activity-id="verification-variation"]';
      assert.equal(
        await evaluate('document.querySelector(' + JSON.stringify(selector) + ').open'),
        false,
      );
      for (const width of [1280, 390]) {
        await call('Emulation.setDeviceMetricsOverride', {
          width,
          height: 1100,
          deviceScaleFactor: 1,
          mobile: width < 500,
        });
        await evaluate(
          'document.querySelector("[data-activity-id=variation]").scrollIntoView({block:"start",behavior:"instant"})',
        );
        await screenshot(id + '-variation-' + width);
      }
      await evaluate(
        'document.querySelector(' + JSON.stringify(selector + ' summary') + ').click()',
      );
      assert(await evaluate('document.querySelector(' + JSON.stringify(selector) + ').open'));
      await evaluate(
        'document.querySelector(' +
          JSON.stringify(selector) +
          ').scrollIntoView({block:"start",behavior:"instant"})',
      );
      assert(await evaluate('document.documentElement.scrollWidth <= innerWidth'));
      await screenshot(id + '-verification');
      await call('Emulation.clearDeviceMetricsOverride');
    } else {
      await evaluate(
        'document.querySelector("[data-activity-id=variation]").scrollIntoView({block:"start",behavior:"instant"})',
      );
      await screenshot(id + '-sauvegarde');
    }
    // Download the actual archive served from the page, rather than only checking its label.
    const file = await evaluate(
      '(async()=>{const a=document.querySelector("[data-activity-id=depart] a[download]");const response=await fetch(a.href);const bytes=new Uint8Array(await response.arrayBuffer());return {status:response.status,signature:[...bytes.slice(0,4)]}})()',
    );
    assert.equal(file.status, 200);
    assert.deepEqual(file.signature, [80, 75, 3, 4]);
    await evaluate('document.querySelector("[data-activity-id=modeles] summary").click()');
    assert(await evaluate('document.querySelector("[data-activity-id=modeles]").open'));
    if (id.endsWith('clones')) {
      for (const width of [1280, 320]) {
        await call('Emulation.setDeviceMetricsOverride', {
          width,
          height: 1100,
          deviceScaleFactor: 1,
          mobile: width < 500,
        });
        for (const section of [
          'transition',
          'depart-clone',
          'mouvement',
          'hauteur',
          'fabrique',
          'modele-clone',
        ]) {
          await evaluate(
            'document.querySelector(' +
              JSON.stringify('[data-activity-id="' + section + '"]') +
              ').scrollIntoView({block:"start",behavior:"instant"})',
          );
          assert(
            await evaluate('document.documentElement.scrollWidth <= innerWidth'),
            section + '/' + width,
          );
          await screenshot(id + '-' + section + '-' + width);
        }
      }
      await call('Emulation.clearDeviceMetricsOverride');
    }
    if (id.endsWith('tests')) {
      for (const section of ['indices-panne', 'verification-panne', 'verification-comparaison']) {
        assert.equal(
          await evaluate(
            'document.querySelector(' +
              JSON.stringify('[data-activity-id="' + section + '"]') +
              ').open',
          ),
          false,
        );
      }
      const fault = await evaluate(
        '(async()=>{const a=document.querySelector("[data-activity-id=panne] a[download]");const r=await fetch(a.href);return {status:r.status,signature:[...new Uint8Array(await r.arrayBuffer()).slice(0,4)]}})()',
      );
      assert.equal(fault.status, 200);
      assert.deepEqual(fault.signature, [80, 75, 3, 4]);
      for (const width of [1280, 320]) {
        await call('Emulation.setDeviceMetricsOverride', {
          width,
          height: 1100,
          deviceScaleFactor: 1,
          mobile: width < 500,
        });
        for (const section of [
          'methode',
          'limites',
          'enquete',
          'comparaison',
          'variation',
          'recette-finale',
        ]) {
          await evaluate(
            'document.querySelector(' +
              JSON.stringify('[data-activity-id="' + section + '"]') +
              ').scrollIntoView({block:"start",behavior:"instant"})',
          );
          assert(
            await evaluate('document.documentElement.scrollWidth <= innerWidth'),
            section + '/' + width,
          );
          await screenshot(id + '-' + section + '-' + width);
        }
      }
      await call('Emulation.clearDeviceMetricsOverride');
    }
    if (id.endsWith('etats')) {
      await evaluate(
        'document.querySelector("[data-activity-id=verification-decision] summary").click()',
      );
      for (const width of [1280, 320]) {
        await call('Emulation.setDeviceMetricsOverride', {
          width,
          height: 1100,
          deviceScaleFactor: 1,
          mobile: width < 500,
        });
        for (const section of [
          'decision',
          'fabrique',
          'clones',
          'diagnostic',
          'annonce',
          'modele-scene',
          'modele-annonce',
        ]) {
          await evaluate(
            'document.querySelector(' +
              JSON.stringify('[data-activity-id="' + section + '"]') +
              ').scrollIntoView({block:"start",behavior:"instant"})',
          );
          assert(
            await evaluate('document.documentElement.scrollWidth <= innerWidth'),
            section + '/' + width,
          );
          await screenshot(id + '-' + section + '-' + width);
        }
        for (const section of ['clones', 'annonce']) {
          await evaluate(
            'document.querySelector(' +
              JSON.stringify('[data-activity-id="' + section + '"] .scratch-script') +
              ').scrollIntoView({block:"start",behavior:"instant"})',
          );
          await screenshot(id + '-' + section + '-blocs-' + width);
        }
      }
      await call('Emulation.clearDeviceMetricsOverride');
    }
    if (id.endsWith('messages')) {
      for (const width of [1280, 320]) {
        await call('Emulation.setDeviceMetricsOverride', {
          width,
          height: 1100,
          deviceScaleFactor: 1,
          mobile: width < 500,
        });
        for (const section of [
          'reception-decor',
          'envoi-manuel',
          'reception-vitesse',
          'envoi-unique',
          'modele-scene',
          'modele-vitesse',
        ]) {
          await evaluate(
            'document.querySelector(' +
              JSON.stringify('[data-activity-id="' + section + '"]') +
              ').scrollIntoView({block:"start",behavior:"instant"})',
          );
          assert(
            await evaluate('document.documentElement.scrollWidth <= innerWidth'),
            section + '/' + width,
          );
          await screenshot(id + '-' + section + '-' + width);
        }
        for (const section of ['declenchement', 'modele-scene']) {
          await evaluate(
            'document.querySelector(' +
              JSON.stringify('[data-activity-id="' + section + '"] .scratch-script') +
              ').scrollIntoView({block:"start",behavior:"instant"})',
          );
          await screenshot(id + '-' + section + '-blocs-' + width);
        }
      }
      await call('Emulation.clearDeviceMetricsOverride');
    }
    await evaluate(
      'document.querySelector("[data-activity-id=reprise]").scrollIntoView({behavior:"instant",block:"start"})',
    );
    await screenshot(id + '-reprise');
    await call('Page.navigate', { url: origin + 'prof.html#guide/' + id });
    await wait(
      'document.readyState === "complete" && document.body.textContent.includes(' +
        JSON.stringify('Guide professeur : ' + title) +
        ')',
    );
    assert(await evaluate('document.querySelector("main").textContent.includes("mission")'));
  }
  await navigate(
    'index.html',
    '#module/scratch-mission-vies?parcours=scratch-avances',
    lessons[2][1],
  );
  const original = await evaluate('location.href');
  await call('Runtime.evaluate', {
    expression: 'document.querySelector("[data-activity-id=aide-contact] a").click()',
    userGesture: true,
  });
  await pause(350);
  const { targetInfos } = await call('Target.getTargets');
  const help = targetInfos.find(
    (target) =>
      target.type === 'page' && target.url === origin + 'index.html#module/scratch-vies-contacts',
  );
  assert(help, 'Help opened in a separate tab');
  assert.equal(await evaluate('location.href'), original);
  await call('Target.closeTarget', { targetId: help.targetId });
  assert.equal(await evaluate('location.href'), original);
  assert.equal(
    await evaluate('document.querySelector(".module-navigation__previous").getAttribute("href")'),
    '#module/scratch-mission-balises?parcours=scratch-avances',
  );
  console.log(
    'Mission balises: chapters, downloads, teacher guides, three widths and help return passed.',
  );
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
