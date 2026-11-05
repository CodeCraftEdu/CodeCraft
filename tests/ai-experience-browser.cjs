const assert = require('node:assert/strict');
const { withBrowser } = require('./helpers/browser.cjs');
const { STORAGE_KEY } = require('../src/student/ai-rules.mjs');
withBrowser(async ({ navigate, evaluate, wait, call, screenshot }) => {
  await call('Page.bringToFront');
  await call('Emulation.setFocusEmulationEnabled', { enabled: true });
  const key = async (name = 'Enter', code = 'Enter', number = 13) => {
    for (const type of ['keyDown', 'keyUp'])
      await call('Input.dispatchKeyEvent', {
        type,
        key: name,
        code,
        windowsVirtualKeyCode: number,
        text:
          type === 'keyDown'
            ? name === 'Enter'
              ? '\r'
              : name === ' '
                ? ' '
                : undefined
            : undefined,
      });
  };
  const focus = async (selector) =>
    evaluate(`document.querySelector(${JSON.stringify(selector)}).focus()`);
  const activate = async (id) => {
    await focus('[data-focus="' + id + '"]');
    await key();
  };
  const select = async (id) => {
    await focus('[data-focus="' + id + '"]');
    await key(' ', 'Space', 32);
  };
  const capture = async (name) => {
    await evaluate(
      'document.querySelector(".ai-lab").scrollIntoView({block:"start",behavior:"instant"})',
    );
    assert.ok(await evaluate('document.documentElement.scrollWidth <= innerWidth'));
    await screenshot(name);
  };
  await call('Emulation.setDeviceMetricsOverride', {
    width: 1280,
    height: 1000,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await require('./ai-discovery-scenario.cjs')({
    navigate,
    evaluate,
    wait,
    call,
    screenshot,
    focus,
    key,
  });
  await navigate(
    'index.html',
    '#module/ia-regles-donnees?parcours=ia-experience',
    'Des règles aux données',
  );
  await wait('document.querySelector("main h1")?.textContent === "Des règles aux données"');
  assert.equal(await evaluate('localStorage.length'), 0);
  assert.ok(
    await evaluate(`document.querySelector('.lesson-checkpoint').nextElementSibling.matches('.ai-sources') &&
      !document.querySelector('.ai-teacher-toggle, .ai-teacher-panel, [data-activity-id=enseignant]')`),
  );
  for (const step of [0, 1, 2, 3]) {
    await activate('step-' + step);
    assert.equal(await evaluate('Boolean(document.querySelector(".ai-lab__board"))'), step === 0);
    assert.equal(
      await evaluate(
        'Boolean(document.querySelector(".ai-lab").parentElement.querySelector(":scope > p"))',
      ),
      false,
      'Aucune consigne de morpion dans l’en-tête commun des onglets.',
    );
  }
  await screenshot('ai-bilan-sans-consigne-morpion-1280');
  await activate('step-0');
  assert.ok(
    await evaluate(`document.querySelector('.ai-lab__navigation').contains(
      document.querySelector('[data-focus=reset-chapter]')) &&
      document.querySelector('.ai-lab__navigation').getBoundingClientRect().height < 70`),
  );
  await evaluate(
    'document.querySelector(".ai-lab__navigation").scrollIntoView({block:"center",behavior:"instant"})',
  );
  await screenshot('ai-bas-page-1280');
  assert.ok(
    await evaluate(`(() => {
      const mode = document.querySelector('.ai-lab__mode').getBoundingClientRect();
      const reveal = document.querySelector('[data-focus=reveal-x]').getBoundingClientRect();
      const board = document.querySelector('.ai-lab__board').getBoundingClientRect();
      return mode.bottom <= reveal.top && reveal.top - mode.bottom < 120 &&
        reveal.bottom <= board.top && board.width <= 320;
    })()`),
    'Les commandes restent regroupées au-dessus de la grille compacte.',
  );
  await activate('cell-8');
  await activate('reveal-x');
  assert.deepEqual(await evaluate(`JSON.parse(localStorage.getItem('${STORAGE_KEY}')).moves`), [8]);
  assert.equal(
    await evaluate(
      'document.querySelector("[data-rule=first-corner]").classList.contains("is-applied")',
    ),
    true,
  );
  assert.equal(await evaluate('document.querySelector("[data-focus=cell-8]").disabled'), true);
  await activate('cell-4');
  await capture('ai-morpion-premiers-coups-1280');
  for (let turn = 0; turn < 9; turn++) {
    if (await evaluate('document.querySelectorAll(".ai-lab__question").length === 3')) break;
    if (await evaluate('Boolean(document.querySelector("[data-focus=reveal-x]"))'))
      await activate('reveal-x');
    else {
      await focus('.ai-lab__cell:not(:disabled)');
      await key();
    }
  }
  assert.equal(await evaluate('document.querySelectorAll(".ai-lab__question").length'), 3);
  await select('strategy-player');
  await activate('check-strategy');
  assert.ok(
    await evaluate(
      'document.querySelector(".ai-lab__feedback--review").textContent.includes("modifient pas")',
    ),
  );
  await select('strategy-designers');
  await activate('check-strategy');
  assert.ok(
    await evaluate(
      'document.querySelector(".ai-lab__question .ai-lab__feedback--correct") !== null',
    ),
  );
  await activate('step-1');
  for (const id of [
    'Monter-data',
    'Monter-train',
    'Monter-train',
    'Monter-evaluate',
    'Monter-evaluate',
  ])
    await activate(id);
  await activate('check-order');
  assert.ok(
    await evaluate(
      'document.querySelector(".ai-lab__feedback--correct").textContent.includes("Ordre retrouvé")',
    ),
  );
  await activate('step-2');
  assert.equal(await evaluate('document.querySelectorAll(".ai-lab__corpus-column li").length'), 15);
  assert.equal(await evaluate('document.querySelectorAll(".ai-lab__test").length'), 0);
  assert.equal(
    await evaluate(
      'document.querySelector(".ai-lab__content").textContent.includes("Sophie ne répondit rien.")',
    ),
    false,
  );
  await capture('ai-corpus-1280');
  await activate('lock-rule');
  assert.equal(await evaluate('document.querySelectorAll(".ai-lab__fixed-rule").length'), 0);
  await select('hypothesis-prefix-et');
  await activate('lock-rule');
  assert.equal(await evaluate('document.querySelectorAll("input[name=ai-hypothesis]").length'), 0);
  await activate('reveal-message');
  assert.equal(await evaluate('document.querySelectorAll(".ai-lab__test").length'), 0);
  await capture('ai-prevision-emoji-1280');
  await select('emoji-guess-joie');
  for (let i = 0; i < 4; i++) await activate('reveal-message');
  assert.deepEqual(
    await evaluate(
      'Array.from(document.querySelectorAll(".ai-lab__test dd:first-of-type"),node=>node.textContent)',
    ),
    ['😃 Joie', '😢 Tristesse', '😡 Colère', '😃 Joie'],
  );
  assert.ok(
    await evaluate('document.querySelector("[data-test=attente]").textContent.includes("ambigu")'),
  );
  await call('Page.reload');
  await wait('document.querySelectorAll(".ai-lab__test").length === 4');
  assert.equal(
    await evaluate('document.querySelector(".ai-lab__nav [aria-current=step]").dataset.step'),
    '2',
  );
  for (const width of [1280, 390, 320]) {
    await call('Emulation.setDeviceMetricsOverride', {
      width,
      height: 1000,
      deviceScaleFactor: 1,
      mobile: width < 500,
    });
    await capture('ai-tests-' + width);
    await activate('step-0');
    await capture('ai-morpion-' + width);
    await activate('step-2');
    if (width === 390) {
      await focus('.course-sidebar__toggle');
      await key();
      assert.equal(
        await evaluate('document.querySelector(".course-sidebar__contents").hidden'),
        false,
      );
      assert.equal(await evaluate('document.querySelector(".ai-teacher-toggle")'), null);
      await focus('.course-sidebar__toggle');
      await key();
      await focus('.ai-sources > summary');
      await key();
      assert.equal(await evaluate('document.querySelector(".ai-sources").open'), true);
      assert.equal(await evaluate('document.querySelectorAll(".ai-sources a").length'), 3);
      await key();
      assert.equal(await evaluate('document.querySelector(".ai-sources").open'), false);
      await evaluate(
        'document.querySelector(".ai-lab__navigation").scrollIntoView({block:"center",behavior:"instant"})',
      );
      await screenshot('ai-bas-page-390');
    }
  }
  await activate('step-3');
  await select('training-adjust');
  await activate('check-training');
  await focus('#ai-free-answer');
  await call('Input.insertText', {
    text: 'Je chercherais un message commençant par Sophie qui exprime une déception.',
  });
  await activate('show-criteria');
  assert.equal(await evaluate('document.querySelectorAll(".ai-lab__criteria li").length'), 3);
  await capture('ai-bilan-320');
  await activate('reset-chapter');
  await activate('cancel-reset');
  assert.ok(
    await evaluate('document.querySelector("#ai-free-answer").value.includes("déception")'),
  );
  await activate('reset-chapter');
  await activate('confirm-reset');
  assert.equal(await evaluate(`localStorage.getItem('${STORAGE_KEY}')`), null);
  assert.equal(
    await evaluate('document.querySelector(".ai-lab__nav [aria-current=step]").dataset.step'),
    '0',
  );
  assert.equal(
    await evaluate('document.querySelector(".ai-lab__reset .ai-lab__confirmation")'),
    null,
  );
  console.log(
    'IA : morpion, clavier, corrections, ordre, émojis, reprise et reset vérifiés à 1280/390/320.',
  );
  await navigate(
    'index.html',
    '#module/ia-classification?parcours=ia-experience',
    'Classer et vérifier une prédiction',
  );
  const discovery = async (id) => {
    await focus('[data-discovery-focus="' + id + '"]');
    await key();
  };
  await discovery('step-2');
  await focus('#taux-reussite');
  await key('Home', 'Home', 36);
  await key('ArrowDown', 'ArrowDown', 40);
  await key('ArrowDown', 'ArrowDown', 40);
  await key('ArrowDown', 'ArrowDown', 40);
  await key('Tab', 'Tab', 9);
  assert.equal(await evaluate('document.querySelector("#taux-reussite").value'), 'quatre');
  await discovery('check');
  await call('Page.reload');
  await wait('document.querySelector(".ai-discovery__table tbody tr")');
  assert.equal(
    await evaluate('document.querySelectorAll(".ai-discovery__table tbody tr").length'),
    5,
  );
  for (const width of [1280, 390, 320]) {
    await call('Emulation.setDeviceMetricsOverride', {
      width,
      height: 1000,
      deviceScaleFactor: 1,
      mobile: width < 500,
    });
    await evaluate(
      'document.querySelector(".ai-discovery__figure").scrollIntoView({block:"start",behavior:"instant"})',
    );
    assert.ok(await evaluate('document.documentElement.scrollWidth <= innerWidth'));
    assert.ok(
      await evaluate('document.querySelector(".ai-discovery__figure img").naturalWidth > 0'),
    );
    await screenshot('ai-classification-scores-' + width);
  }
  await discovery('step-3');
  await focus('#ai-discovery-answer');
  await call('Input.insertText', {
    text: 'Je testerais une tasse sans anse, avec la réponse tasse.',
  });
  await discovery('criteria');
  assert.equal(await evaluate('document.querySelectorAll(".ai-lab__criteria li").length'), 3);
  console.log(
    'Classification : navigation, reprise, tableau, illustration et bilan à trois largeurs.',
  );
  await navigate(
    'index.html',
    '#module/ia-entrainement?parcours=ia-experience',
    'Entraîner un modèle et examiner ses erreurs',
  );
  const training = async (id) => {
    await focus('[data-training-action="' + id + '"]');
    await key();
  };
  await training('step-1');
  await focus('[data-training-result]');
  await key('Home', 'Home', 36);
  await key('ArrowDown', 'ArrowDown', 40);
  await key('Tab', 'Tab', 9);
  assert.equal(
    await evaluate('document.querySelector("[data-training-result]").value'),
    'Cuillères',
  );
  assert.ok(
    await evaluate('document.querySelector(".ai-training__summary").textContent.includes("1/4")'),
  );
  await training('step-2');
  assert.equal(await evaluate('document.querySelector(".ai-training__reminder").hidden'), false);
  await training('complete-before');
  assert.equal(
    await evaluate('document.querySelector(".ai-training [aria-current=step]").textContent'),
    'Entraîner',
  );
  await training('step-2');
  await focus('[data-training-photo]');
  await key(' ', 'Space', 32);
  await focus('#ai-training-reason');
  await call('Input.insertText', { text: 'Je veux varier les orientations.' });
  await call('Page.reload');
  await wait('document.querySelector("#ai-training-reason")');
  assert.equal(
    await evaluate('document.querySelector("#ai-training-reason").value'),
    'Je veux varier les orientations.',
  );
  assert.equal(await evaluate('document.querySelector("[data-training-photo]").checked'), true);
  for (const width of [1280, 390, 320]) {
    await call('Emulation.setDeviceMetricsOverride', {
      width,
      height: 1000,
      deviceScaleFactor: 1,
      mobile: width < 500,
    });
    await evaluate(
      'document.querySelector(".ai-training__table-wrap").scrollIntoView({block:"start",behavior:"instant"})',
    );
    assert.ok(await evaluate('document.documentElement.scrollWidth <= innerWidth'));
    assert.equal(
      await evaluate('document.querySelectorAll(".ai-training table tbody tr").length'),
      8,
    );
    await screenshot('ai-entrainement-comparaison-' + width);
  }
  await training('step-3');
  assert.ok(
    await evaluate(
      'document.querySelector(".ai-training__recap").textContent.includes("Je veux varier les orientations.")',
    ),
  );
  assert.ok(
    await evaluate(
      'document.querySelector(".ai-training__recap").textContent.includes("Avant : 1/4")',
    ),
  );
  await focus('.ai-training__bias summary');
  await key();
  assert.equal(await evaluate('document.querySelector(".ai-training__bias").open'), true);
  for (const width of [1280, 320]) {
    await call('Emulation.setDeviceMetricsOverride', {
      width,
      height: 1000,
      deviceScaleFactor: 1,
      mobile: width < 500,
    });
    await evaluate(
      'document.querySelector(".ai-training__recap").scrollIntoView({block:"start",behavior:"instant"})',
    );
    assert.ok(await evaluate('document.documentElement.scrollWidth <= innerWidth'));
    await screenshot('ai-entrainement-bilan-' + width);
  }
  await focus('#ai-training-answer');
  await call('Input.insertText', {
    text: 'Les mêmes essais réussissent ; je testerais une autre tasse.',
  });
  await focus('.ai-training details.ai-lab__criteria:not(.ai-training__bias) summary');
  await key();
  assert.equal(
    await evaluate(
      'document.querySelector(".ai-training details.ai-lab__criteria:not(.ai-training__bias)").open',
    ),
    true,
  );
  await training('reset');
  await training('confirm-reset');
  assert.equal(await evaluate("localStorage.getItem('codecraft.ai.entrainement.v1')"), null);
  console.log('Entraînement : clavier, relevé, reprise, reset et trois largeurs vérifiés.');
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
