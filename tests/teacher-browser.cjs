/* Test d’intégration Chrome isolé. Sélecteurs simulés ; vrais handles OPFS,
 * flux File System Access, IndexedDB et téléchargements du navigateur.
 * Aucun accès au Drive ni aux fichiers personnels. */
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const http = require('node:http');
const { spawn } = require('node:child_process');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
(async () => {
  const allowed = new Set(['prof.html', 'prof-conducteur-historique.html', 'styles.css', 'teacher.css', 'lesson-data.js', 'teacher-model.js', 'teacher-file-access.js', 'teacher-app.js', 'index.html', 'app.js']);
  const server = http.createServer((req, res) => {
    const name = new URL(req.url, 'http://localhost').pathname.slice(1);
    if (!allowed.has(name)) { res.writeHead(404); res.end(); return; }
    res.setHeader('Content-Type', name.endsWith('.js') ? 'text/javascript; charset=utf-8' : name.endsWith('.css') ? 'text/css; charset=utf-8' : 'text/html; charset=utf-8');
    res.end(fs.readFileSync(path.join(root, name)));
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = 'http://127.0.0.1:' + server.address().port + '/';
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'codecraft-teacher-qa-'));
  const profile = path.join(directory, 'profile');
  const executable = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
  const chrome = spawn(executable, ['--headless=new', '--disable-gpu', '--no-first-run', '--disable-background-networking', '--remote-debugging-port=0', '--user-data-dir=' + profile, 'about:blank'], { windowsHide: true, stdio: 'ignore' });
  let ws;
  let launchError;
  chrome.on('error', error => { launchError = error; });
  try {
    const portFile = path.join(profile, 'DevToolsActivePort');
    for (let i = 0; i < 100 && !fs.existsSync(portFile) && !launchError; i++) await pause(100);
    if (launchError) throw launchError;
    const port = fs.readFileSync(portFile, 'utf8').split('\n')[0];
    const targets = await (await fetch('http://127.0.0.1:' + port + '/json')).json();
    ws = new WebSocket(targets.find(t => t.type === 'page').webSocketDebuggerUrl);
    await new Promise((resolve, reject) => { ws.onopen = resolve; ws.onerror = reject; });
    let seq = 0;
    const pending = new Map(), errors = [];
    ws.onmessage = event => {
      const message = JSON.parse(event.data);
      if (message.id) {
        const request = pending.get(message.id); pending.delete(message.id);
        message.error ? request.reject(new Error(JSON.stringify(message.error))) : request.resolve(message.result);
      }
      if (message.method === 'Runtime.exceptionThrown') errors.push(message.params);
    };
    const call = (method, params = {}) => new Promise((resolve, reject) => {
      const id = ++seq; pending.set(id, { resolve, reject }); ws.send(JSON.stringify({ id, method, params }));
    });
    const evaluate = async expression => {
      const result = await call('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
      if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
      return result.result.value;
    };
    const wait = async expression => {
      for (let i = 0; i < 100; i++) { if (await evaluate(expression)) return; await pause(50); }
      throw new Error('Timeout: ' + expression + '\n' + await evaluate('document.body.innerText'));
    };
    await call('Runtime.enable'); await call('Page.enable');
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
    await call('Page.reload');
    await wait('document.readyState === "complete" && !!document.getElementById("reopen-space") && !document.getElementById("reopen-space").disabled');
    assert.equal(await evaluate('document.getElementById("save-state").textContent'), 'Aucun Espace CodeCraft ouvert');
    await evaluate('document.getElementById("reopen-space").click()');
    await wait('document.getElementById("save-state").textContent === "Enregistré dans le fichier local"');
    assert.equal(await evaluate('document.getElementById("workspace-label").value'), 'Test navigateur isolé');
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
    await evaluate('overwriteTestFile(' + JSON.stringify(JSON.stringify(initial)) + ');');
    await evaluate('document.getElementById("reload-space").click()');
    await wait('document.getElementById("workspace-label").value === ""');
    await call('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
    assert(await evaluate('document.documentElement.scrollWidth <= innerWidth'), 'Mobile overflow');
    fs.writeFileSync(path.join(directory, 'teacher-mobile.png'), Buffer.from((await call('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true })).data, 'base64'));
    await call('Emulation.setDeviceMetricsOverride', { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false });
    fs.writeFileSync(path.join(directory, 'teacher-desktop.png'), Buffer.from((await call('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true })).data, 'base64'));
    await call('Page.navigate', { url: base + 'prof-conducteur-historique.html' });
    await wait('document.querySelectorAll(".teacher-slot").length === 9');
    await call('Page.navigate', { url: base + 'index.html' });
    await wait('document.querySelectorAll(".route-card").length === 4');
    assert.equal(errors.length, 0, JSON.stringify(errors));
    console.log('PASS Chrome : création, flux réels OPFS, sauvegarde, handle IndexedDB, rechargement/réouverture, téléchargement réel, conflit, JSON/version invalides, responsive, archive 9 créneaux et accueil élève.');
    console.log('Sélecteurs natifs simulés : les permissions OS et Google Drive restent à tester manuellement.');
    console.log('Captures et profil isolé : ' + directory);
    await call('Browser.close');
  } finally {
    if (ws) ws.close(); chrome.kill(); server.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
