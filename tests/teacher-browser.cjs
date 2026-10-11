// Native file pickers are simulated; OPFS, IndexedDB and streams are real.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { withBrowser } = require('./helpers/browser.cjs');
withBrowser(async ({ call, evaluate, wait: poll, origin: base, profile: directory, errors, pause }) => {
    const wait = expression => poll(expression, { transient: ['NotFoundError', 'NotReadableError'] });
    await call('Browser.setDownloadBehavior', { behavior: 'allow', downloadPath: directory });
    await call('Page.addScriptToEvaluateOnNewDocument', { source: `
      window.testFile = async () => (await navigator.storage.getDirectory()).getFileHandle('espace-codecraft.json', {create:true});
      window.showSaveFilePicker = window.testFile;
      window.showOpenFilePicker = async () => [await window.testFile()];
      window.readTestFile = async () => (await (await window.testFile()).getFile()).text();
      window.overwriteTestFile = async text => { const stream = await (await window.testFile()).createWritable(); await stream.write(text); await stream.close(); };
    ` });
    await call('Page.navigate', { url: base + 'prof.html' });
    await wait('document.readyState === "complete" && !document.getElementById("create-space").disabled');
    assert.equal(await evaluate('document.getElementById("save-state").textContent'), 'Aucun Espace CodeCraft ouvert');
    await evaluate('document.getElementById("create-space").click()');
    await wait('document.getElementById("save-state").textContent === "Enregistré dans le fichier local"');
    const initial = JSON.parse(await evaluate('readTestFile()'));
    assert.equal(initial.schemaVersion, 1); assert.equal(initial.revision, 1);
    await evaluate('document.getElementById("workspace-label").value="Test navigateur isolé"; document.getElementById("workspace-label").dispatchEvent(new Event("input",{bubbles:true}))');
    assert.equal(await evaluate('document.getElementById("save-state").textContent'), 'Modifications non enregistrées');
    await wait('document.getElementById("save-state").textContent === "Enregistré dans le fichier local"');
    assert.equal(JSON.parse(await evaluate('readTestFile()')).metadata.label, 'Test navigateur isolé');
    await evaluate('document.getElementById("new-class-name").value="Classe fictive dimanche";document.getElementById("new-class-context").value="Contexte fictif";document.querySelector(".teacher-inline-form").requestSubmit()');
    await wait('!!document.getElementById("new-student-name") && document.getElementById("save-state").textContent === "Enregistré dans le fichier local"');
    const frameworkPackage = { fileType: 'codecraft-external-framework', formatVersion: 1, framework: {
      id: 'framework-browser-test', name: 'Référentiel privé fictif', version: 'Version test', commonObjectives: [],
      levels: [{ id: 'level-browser-test', code: 'Niveau test', name: 'Niveau fictif', order: 1, stages: [{
        id: 'stage-browser-test', code: 'Étape test', name: 'Étape fictive', order: 1,
        objectives: [{ id: 'objective-browser-test', code: 'D1.1', title: 'Objectif fictif', kind: 'objective', mapping: { skillIds: ['html.lists'], coverage: 'covered' } }]
      }]}]
    } };
    await evaluate(`(()=>{const input=document.getElementById('framework-import');const file=new File([${JSON.stringify(JSON.stringify(frameworkPackage))}],'referentiel-prive.json',{type:'application/json'});Object.defineProperty(input,'files',{value:[file],configurable:true});input.dispatchEvent(new Event('change',{bubbles:true}));})()`);
    await wait('(async()=>{try{return JSON.parse(await readTestFile()).frameworks.length === 1}catch{return false}})()');
    await evaluate('document.getElementById("class-framework").value="framework-browser-test";document.getElementById("class-framework").dispatchEvent(new Event("change",{bubbles:true}))');
    await wait('(async()=>{try{return JSON.parse(await readTestFile()).classes[0]?.frameworkId === "framework-browser-test"}catch{return false}})()');
    await evaluate('document.getElementById("new-student-name").value="Élève fictif A";document.querySelector(".teacher-add-student").requestSubmit()');
    await wait('document.querySelectorAll(".teacher-skill").length === Object.keys(CODECRAFT_DATA.skills).length && document.getElementById("save-state").textContent === "Enregistré dans le fichier local"');
    assert.equal(await evaluate('document.querySelector(".teacher-framework-panel summary").textContent'), 'Référentiel externe : Référentiel privé fictif');
    assert.equal(await evaluate('document.querySelector(' + JSON.stringify('[data-framework-objective-id] [data-mapped-skill-id="html.lists"]') + ').textContent'), 'À voir');
    await evaluate('document.querySelector(' + JSON.stringify('[data-framework-objective-id] [data-status="in-progress"]') + ').click()');
    await wait('(async()=>{try{return JSON.parse(await readTestFile()).frameworkProgress[0]?.status === "in-progress"}catch{return false}})()');
    assert.equal(JSON.parse(await evaluate('readTestFile()')).progress.length, 0);
    const lists = '.teacher-skill[data-skill-id="html.lists"]';
    await evaluate('document.querySelector(' + JSON.stringify(lists + ' [data-status="in-progress"]') + ').click()');
    await wait('(async()=>JSON.parse(await readTestFile()).progress[0]?.status === "in-progress")()');
    await evaluate('document.querySelector(' + JSON.stringify(lists + ' [data-status="acquired"]') + ').click()');
    await wait('(async()=>JSON.parse(await readTestFile()).progress[0]?.status === "acquired")()');
    assert.equal(await evaluate('document.querySelector(' + JSON.stringify('[data-framework-objective-id] [data-mapped-skill-id="html.lists"]') + ').textContent'), 'Acquis');
    const acquiredOn = JSON.parse(await evaluate('readTestFile()')).progress[0].acquiredOn;
    const today = await evaluate('[new Date().getFullYear(),String(new Date().getMonth()+1).padStart(2,"0"),String(new Date().getDate()).padStart(2,"0")].join("-")');
    assert.equal(acquiredOn, today);
    await evaluate('document.getElementById("skill-note-html.lists").value="Remarque fictive";document.getElementById("skill-note-html.lists").dispatchEvent(new Event("input"));document.getElementById("student-note").value="Note générale fictive";document.getElementById("student-note").dispatchEvent(new Event("input"))');
    await wait('document.getElementById("save-state").textContent === "Enregistré dans le fichier local"');
    const classroomSaved = JSON.parse(await evaluate('readTestFile()'));
    assert.equal(classroomSaved.progress[0].note, 'Remarque fictive');
    assert.equal(classroomSaved.progress[0].acquiredOn, acquiredOn);
    assert.equal(classroomSaved.students[0].note, 'Note générale fictive');
    assert.equal(classroomSaved.memberships[0].classId, classroomSaved.classes[0].id);
    await call('Page.reload');
    await wait('document.readyState === "complete" && document.getElementById("save-state").textContent === "Enregistré dans le fichier local"');
    await wait('document.getElementById("save-state").textContent === "Enregistré dans le fichier local"');
    assert.equal(await evaluate('document.getElementById("workspace-label").value'), 'Test navigateur isolé');
    await evaluate('document.querySelector("[data-student-id]").click()');
    assert.equal(await evaluate('document.getElementById("skill-note-html.lists").value'), 'Remarque fictive');
    assert.equal(await evaluate('document.querySelector(' + JSON.stringify(lists + ' [data-status="acquired"]') + ').getAttribute("aria-pressed")'), 'true');
    await evaluate('document.getElementById("class-name").value="Classe renommée";document.getElementById("class-name").dispatchEvent(new Event("change"));document.getElementById("student-name").value="Nom fictif modifié";document.getElementById("student-name").dispatchEvent(new Event("change"))');
    await wait('document.getElementById("save-state").textContent === "Enregistré dans le fichier local"');
    const renamed = JSON.parse(await evaluate('readTestFile()'));
    assert.equal(renamed.classes[0].name, 'Classe renommée'); assert.equal(renamed.students[0].name, 'Nom fictif modifié');
    await evaluate('document.querySelector(' + JSON.stringify(lists + ' [data-status="in-progress"]') + ').click()');
    await wait('(async()=>JSON.parse(await readTestFile()).progress[0]?.acquiredOn === null)()');
    assert.equal(JSON.parse(await evaluate('readTestFile()')).progress[0].note, 'Remarque fictive');
    await evaluate('document.getElementById("download-space").click()');
    let backup;
    for (let i = 0; i < 100; i++) { backup = fs.readdirSync(directory).find(f => f.endsWith('.json')); if (backup) break; await pause(50); }
    assert(backup, 'Backup downloaded');
    assert.equal(JSON.parse(fs.readFileSync(path.join(directory, backup))).metadata.label, 'Test navigateur isolé');
    // Modification externe avec un autre flux sur le même fichier de test.
    await evaluate('(async()=>{const d=JSON.parse(await readTestFile());d.metadata.label="External";await overwriteTestFile(JSON.stringify(d));})()');
    await evaluate('document.getElementById("workspace-label").value="Local non enregistré";document.getElementById("workspace-label").dispatchEvent(new Event("input"))');
    await wait('document.getElementById("save-state").textContent === "Erreur de sauvegarde"');
    assert.equal(JSON.parse(await evaluate('readTestFile()')).metadata.label, 'External');
    assert((await evaluate('document.getElementById("operation-error").textContent')).includes('Conflit'));
    // Accepter uniquement la confirmation de perte des données fictives de ce profil de test.
    await evaluate('window.confirm=()=>true;document.getElementById("reload-space").click()');
    await wait('document.getElementById("workspace-label").value === "External"');
    await evaluate('overwriteTestFile("{invalid")');
    await evaluate('document.getElementById("open-space").click()');
    await wait('document.getElementById("operation-error").textContent.includes("JSON illisible")');
    assert.equal(await evaluate('readTestFile()'), '{invalid');
    await evaluate('overwriteTestFile(JSON.stringify({schemaVersion:999}))');
    await evaluate('document.getElementById("open-space").click()');
    await wait('document.getElementById("operation-error").textContent.includes("Version de schéma")');
    await evaluate('overwriteTestFile(' + JSON.stringify(JSON.stringify(classroomSaved)) + ');');
    await evaluate('document.getElementById("reload-space").click()');
    await wait('document.getElementById("workspace-label").value === "Test navigateur isolé"');
    await evaluate('document.querySelector("[data-student-id]").click()');
    await call('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
    assert(await evaluate('document.documentElement.scrollWidth <= innerWidth'), 'Mobile overflow');
    fs.writeFileSync(path.join(directory, 'teacher-mobile.png'), Buffer.from((await call('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true })).data, 'base64'));
    await call('Emulation.setDeviceMetricsOverride', { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false });
    fs.writeFileSync(path.join(directory, 'teacher-desktop.png'), Buffer.from((await call('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true })).data, 'base64'));
    await require('./teacher-session-scenario.cjs')({ evaluate, wait, call, directory });
    await call('Page.navigate', { url: base + 'prof-conducteur-historique.html' });
    await wait('document.querySelectorAll(".teacher-slot").length === 9');
    await call('Page.navigate', { url: base + 'index.html' });
    await wait('document.querySelectorAll(".route-card").length === 4');
    assert.equal(errors.length, 0, JSON.stringify(errors));
    console.log('PASS Chrome : suivi, séances, présences, créneaux, snapshots, impression/PDF, rechargement ; flux OPFS, IndexedDB, secours, conflits, responsive, archive et accueil élève.');
    console.log('Sélecteurs natifs simulés : les permissions OS et Google Drive restent à tester manuellement.');
    console.log('Captures et profil isolé : ' + directory);

}).catch(error => { console.error(error); process.exitCode = 1; });
