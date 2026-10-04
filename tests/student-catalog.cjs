/* Tests élève sans dépendance : catalogue et navigation réelle dans Chrome isolé.
 * Exécuter : node tests/student-catalog.cjs (CHROME_PATH facultatif). */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const http = require('node:http');
const vm = require('node:vm');
const { pathToFileURL } = require('node:url');
const { spawn } = require('node:child_process');
const root = path.join(__dirname, '..');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'lesson-data.js'), 'utf8'), context);
const data = JSON.parse(JSON.stringify(context.window.CODECRAFT_DATA));
const orders = {
  'scratch-debutants': ['scratch-decouverte', 'scratch-actions', 'scratch-pilotage', 'scratch-boucles', 'scratch-reactions', 'scratch-variables', 'scratch-fin-partie', 'scratch-mini-jeu', 'scratch-coordination', 'scratch-blocs-personnalises'],
  'web-fondations': ['html-titres-paragraphes', 'html-listes', 'html-mini-page-fondations', 'html-liens', 'html-images', 'html-mini-page', 'css-decouverte', 'css-classes-couleurs', 'web-affiche-numerique'],
  'web-debutants': ['html-titres-paragraphes', 'html-listes', 'html-liens', 'html-revision', 'html-images', 'css-classes-couleurs', 'html-mini-page', 'html-document', 'html-fichiers-chemins', 'css-feuille-style', 'html-parent-enfants', 'html-zones', 'css-textes-lisibles', 'css-boites-espacements', 'css-dimensions-images', 'web-carte-personnelle', 'html-multipage', 'web-mini-site'],
  'web-avances': ['web-projet-cartes', 'html-parent-enfants', 'css-flexbox']
};
for (const [id, order] of Object.entries(orders)) assert.deepEqual(data.pathways[id].moduleIds, order);
for (const domain of Object.values(data.domains)) {
  for (const id of domain.pathwayIds) assert(data.pathways[id]);
  for (const id of domain.diagnosticModuleIds || []) assert.equal(data.modules[id].type, 'diagnostic');
}
for (const module of Object.values(data.modules)) {
  assert(data.domains[module.domainId]);
  assert(data.moduleTypes[module.type]);
  for (const skill of module.skillIds) assert(data.skills[skill], skill);
  const ids = module.blocks.flatMap(block => (block.items || []).map(item => item.id));
  assert.equal(new Set(ids).size, ids.length, module.title + ': identifiants de tâches uniques');
}
const css = data.modules['css-classes-couleurs'];
assert.deepEqual(css.skillIds, ['css.selectors', 'css.colors']);
assert(!/margin|padding|border|hover|flexbox/i.test(JSON.stringify(css)));
assert.equal(Object.values(data.modules).filter(module => module.title === css.title).length, 1);
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
const moduleRoute = (id, pathway) => '#module/' + id + (pathway ? '?parcours=' + pathway : '');
(async () => {
  const allowed = new Set(['index.html', 'styles.css', 'app.js', 'lesson-data.js', 'pedagogy.js', 'teacher-guides.js', 'prof.html', 'teacher.css', 'teacher-model.js', 'teacher-file-access.js', 'teacher-sessions.js', 'teacher-classroom.js', 'teacher-app.js', 'assets/exercices/carre-bleu.svg', 'assets/exercices/cercle-orange.svg']);
  allowed.add('pedagogy.css');
  allowed.add('images/logo-transparent.png');
  const server = http.createServer((req, res) => {
    const name = decodeURIComponent(new URL(req.url, 'http://localhost').pathname.slice(1));
    if (!allowed.has(name)) { res.writeHead(404); res.end(); return; }
    res.setHeader('Content-Type', name.endsWith('.png') ? 'image/png' : name.endsWith('.svg') ? 'image/svg+xml' : name.endsWith('.js') ? 'text/javascript; charset=utf-8' : name.endsWith('.css') ? 'text/css; charset=utf-8' : 'text/html; charset=utf-8');
    res.end(fs.readFileSync(path.join(root, name)));
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = 'http://127.0.0.1:' + server.address().port + '/index.html';
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'codecraft-student-qa-'));
  const chrome = spawn(process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    ['--headless=new', '--force-device-scale-factor=1', '--disable-gpu', '--no-first-run', '--disable-background-networking', '--remote-debugging-port=0', '--user-data-dir=' + profile, 'about:blank'],
    { windowsHide: true, stdio: 'ignore' });
  let ws, launchError;
  chrome.on('error', error => { launchError = error; });
  try {
    const portFile = path.join(profile, 'DevToolsActivePort');
    for (let i = 0; i < 100 && !fs.existsSync(portFile) && !launchError; i++) await pause(100);
    if (launchError) throw launchError;
    const port = fs.readFileSync(portFile, 'utf8').split('\n')[0];
    const targets = await (await fetch('http://127.0.0.1:' + port + '/json')).json();
    ws = new WebSocket(targets.find(target => target.type === 'page').webSocketDebuggerUrl);
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
      const result = await call('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
      if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
      return result.result.value;
    };
    const wait = async expression => {
      for (let i = 0; i < 100; i++) {
        if (await evaluate(expression)) return;
        await pause(50);
      }
      throw new Error('Timeout: ' + expression);
    };
    const readyTitle = title => wait('document.readyState === "complete" && document.querySelector("main h1")?.textContent === ' + JSON.stringify(title));
    const navigate = async (route, title) => {
      await call('Page.navigate', { url: base + route });
      await readyTitle(title);
    };
    const click = async (route, title) => {
      const selector = 'main a[href="' + route + '"]';
      assert(await evaluate('!!document.querySelector(' + JSON.stringify(selector) + ')'), route);
      await evaluate('document.querySelector(' + JSON.stringify(selector) + ').click()');
      await readyTitle(title);
    };
    await call('Runtime.enable'); await call('Page.enable');
    for (const [pathway, order] of Object.entries(orders)) {
      await navigate('', 'CodeCraft');
      await click('#domaine/' + data.pathways[pathway].domainId, data.domains[data.pathways[pathway].domainId].title);
      await click('#parcours/' + pathway, data.pathways[pathway].title);
      const links = await evaluate(`Array.from(document.querySelectorAll('main a[href^="#module/"]'), a => a.getAttribute('href'))`);
      assert.deepEqual(links, order.map(id => moduleRoute(id, pathway)));
      await click(moduleRoute(order[0], pathway), data.modules[order[0]].title);
      for (let i = 0; i < order.length; i++) {
        const nav = await evaluate('Array.from(document.querySelectorAll(".module-navigation a"), a => a.getAttribute("href"))');
        assert(await evaluate('!!document.querySelector(' + JSON.stringify('main a[href="#parcours/' + pathway + '"]') + ')'));
        const neighbours = nav.filter(href => href.startsWith('#module/'));
        assert.deepEqual(neighbours, [order[i - 1], order[i + 1]].filter(Boolean).map(id => moduleRoute(id, pathway)));
        if (i + 1 < order.length) await click(moduleRoute(order[i + 1], pathway), data.modules[order[i + 1]].title);
      }
      for (let i = order.length - 2; i >= 0; i--) await click(moduleRoute(order[i], pathway), data.modules[order[i]].title);
      await click('#parcours/' + pathway, data.pathways[pathway].title);
    }
    for (const [id, module] of Object.entries(data.modules)) {
      await navigate(moduleRoute(id), module.title);
      if (id.startsWith('scratch-')) {
        assert.equal(await evaluate('document.querySelector(".lesson-intro a").textContent'), 'Ouvrir Scratch');
        assert.equal(await evaluate('document.querySelector(".lesson-intro a").href'), 'https://scratch.mit.edu/projects/editor/');
        assert.equal(await evaluate('document.querySelectorAll("main h1").length'), 1);
        assert.equal(await evaluate('document.querySelectorAll("main a[href*=codepen]").length'), 0);
        const box = await evaluate('document.querySelector(".task-list input").checked');
        assert.equal(box, false);
        await evaluate('document.querySelector(".task-list input").click()');
        await call('Page.reload'); await readyTitle(module.title);
        assert.equal(await evaluate('document.querySelector(".task-list input").checked'), false);
        for (const width of [320, 390]) {
          await call('Emulation.setDeviceMetricsOverride', { width, height: 844, deviceScaleFactor: 1, mobile: true });
          assert(await evaluate('document.documentElement.scrollWidth <= window.innerWidth'), id + ': mobile');
        }
        await call('Emulation.clearDeviceMetricsOverride');
      }
    }
    for (const [alias, route] of Object.entries(data.aliases)) {
      const id = route.split('/')[1];
      await navigate('#' + alias, (data.pathways[id] || data.modules[id]).title);
    }
    await navigate(moduleRoute('css-classes-couleurs', 'web-debutants'), css.title);
    assert.equal(await evaluate('document.querySelectorAll("main .code-block").length'), 5);
    assert.equal(await evaluate('document.querySelectorAll("main input[type=checkbox]").length'), 18);
    await evaluate('document.querySelector("main input[type=checkbox]").click()');
    assert.equal(await evaluate('document.querySelector("main input[type=checkbox]").checked'), true);
    await call('Page.reload'); await readyTitle(css.title);
    assert.equal(await evaluate('document.querySelector("main input[type=checkbox]").checked'), false);
    assert.equal(await evaluate('localStorage.length + sessionStorage.length'), 0);
    // Détour C1 accessible avant les classes, retour explicite, aucun faux contexte Débutants.
    await click('#module/css-decouverte', 'Découvrir le CSS');
    assert.equal(await evaluate('location.hash'), '#module/css-decouverte');
    await click('#module/css-classes-couleurs', css.title);
    await navigate('#module/html-mini-page?parcours=web-debutants', 'Mini-page HTML complète');
    await click('#module/web-affiche-numerique', 'Mon affiche numérique');
    await click('#module/html-mini-page', 'Mini-page HTML complète');
    await navigate('#module/css-decouverte?activite=squelette-local', 'Découvrir le CSS');
    assert.equal(await evaluate('document.querySelector("[data-activity-id=projet-local]").open'), true);
    await call('Page.reload'); await readyTitle('Découvrir le CSS');
    assert.equal(await evaluate('document.activeElement.dataset.activityId'), 'squelette-local');
    // Exécuter les exemples du catalogue, pas une reconstruction indépendante du cours.
    const block = (id, activity) => data.modules[id].blocks.find(b => b.id === activity);
    const mountExample = async (html, cssText) => {
      await evaluate('document.getElementById("pedagogy-test")?.remove()');
      await evaluate(`new Promise(resolve => { const f=document.createElement('iframe'); f.id='pedagogy-test'; f.onload=resolve; f.srcdoc=${JSON.stringify('<style>' + cssText + '</style>' + html)}; document.body.append(f); })`);
    };
    const exampleEval = js => evaluate(`(() => { const doc=document.getElementById('pedagogy-test').contentDocument; const style=el=>doc.defaultView.getComputedStyle(el); ${js} })()`);
    // Dimensions : utiliser les extraits et les sources réels, sans code d'image fictif.
    const circle = data.modules['html-images'].resources.find(r=>r.id==='cercle-orange');
    const square = data.modules['html-images'].resources.find(r=>r.id==='carre-bleu');
    const sizingHTML = block('css-dimensions-images','html').code.replace('src=""','src="'+circle.codepenSrc+'"').replace('alt=""','alt="Un cercle orange"');
    const sizingCSS = block('css-dimensions-images','css').code;
    const near = (value,expected) => assert(Math.abs(value-expected)<0.1,value+' attendu '+expected);
    const resizeExample = async width => {
      await evaluate('document.getElementById("pedagogy-test").style.width='+JSON.stringify(width+'px'));
      await exampleEval('return new Promise(resolve=>doc.defaultView.requestAnimationFrame(()=>resolve()));');
    };
    const sizes = () => exampleEval('const c=doc.querySelector(".carte"),i=doc.querySelector("img"),cr=c.getBoundingClientRect(),ir=i.getBoundingClientRect();return {card:cr.width,image:ir.width,height:ir.height,ratio:i.naturalWidth/i.naturalHeight,parent:doc.body.clientWidth,overflows:doc.documentElement.scrollWidth>doc.documentElement.clientWidth};');
    await mountExample(sizingHTML,sizingCSS);
    await resizeExample(500);
    let measured=await sizes();
    near(measured.card,320); near(measured.image,284); near(measured.height,213);
    assert.equal(measured.overflows,false);
    await exampleEval('doc.styleSheets[0].cssRules[0].style.width="240px";');
    measured=await sizes(); near(measured.card,240);near(measured.image,204);near(measured.height,153);
    await exampleEval('doc.styleSheets[0].cssRules[0].style.width="320px";');
    for(const width of [260,390,500]) {
      await resizeExample(width); measured=await sizes();
      near(measured.card,Math.min(320,measured.parent));
      near(measured.image,measured.card-36);near(measured.image/measured.height,measured.ratio);
      assert.equal(measured.overflows,false,'Exemple contenu dans '+width+'px');
    }
    await exampleEval('const i=doc.querySelector("img");i.src='+JSON.stringify(square.codepenSrc)+';i.alt="Un carré bleu";return i.decode();');
    await exampleEval('const s=doc.styleSheets[0].cssRules[0].style;s.width="280px";s.padding="24px";');
    measured=await sizes();near(measured.card,280);near(measured.image,228);near(measured.height,171);
    // Panne déformation, puis réparation par la seule hauteur.
    await mountExample(sizingHTML,sizingCSS+'\n'+block('css-dimensions-images','panne').code);
    await resizeExample(500);
    measured=await sizes();near(measured.height,80);assert(Math.abs(measured.image/measured.height-measured.ratio)>0.5);
    await exampleEval('doc.styleSheets[0].cssRules[2].style.height="auto";');
    measured=await sizes();near(measured.image/measured.height,measured.ratio);
    // La carte peut dépasser même avec une image proportionnée.
    await exampleEval('doc.styleSheets[0].cssRules[0].style.removeProperty("max-width");');
    await resizeExample(260);assert.equal((await sizes()).overflows,true);
    await exampleEval('doc.styleSheets[0].cssRules[0].style.maxWidth="100%";');
    assert.equal((await sizes()).overflows,false);
    // Bonus naturel : pas d'agrandissement, puis réduction quand le contenu manque.
    const naturalCSS=block('css-dimensions-images','bonus-detail').blocks[0].code;
    await mountExample(sizingHTML,sizingCSS+'\n'+naturalCSS);
    await resizeExample(500);
    measured=await sizes();near(measured.image,160);near(measured.height,120);
    await exampleEval('doc.styleSheets[0].cssRules[0].style.width="160px";');
    measured=await sizes();near(measured.image,124);near(measured.height,93);
    // Réalisation possible décrite dans le guide : ajout du second texte et style partagé.
    const projectHTML=sizingHTML.replace('<h2>Un dessin à observer</h2>','<h1 class="titre">Un signal orange</h1>').replace('<p>','<p class="lecture">').replace('</p>','</p><p class="lecture">Ce signe imaginaire invite à observer les détails.</p>');
    const projectCSS=sizingCSS+'\n.lecture { font-family: sans-serif; font-size: 18px; line-height: 1.5; }\n.titre { font-size: 28px; }\n.carte { color: black; }';
    await mountExample(projectHTML,projectCSS);
    for(const width of [500,260]) {
      await resizeExample(width);measured=await sizes();
      assert.equal(measured.overflows,false);near(measured.image/measured.height,measured.ratio);
    }
    const previousHeight=await exampleEval('return doc.querySelector(".carte").getBoundingClientRect().height;');
    assert(await exampleEval('const p=doc.querySelector("p");p.textContent+=" Je complète mon observation avec plusieurs mots ordinaires pour raconter ce que je vois.";return doc.querySelector(".carte").getBoundingClientRect().height;')>previousHeight);
    assert.equal(await exampleEval('return doc.querySelectorAll(".lecture").length;'),2);
    await exampleEval('doc.styleSheets[0].cssRules[2].style.lineHeight="1.7";doc.styleSheets[0].cssRules[0].style.width="280px";');
    assert.deepEqual(await exampleEval('return Array.from(doc.querySelectorAll(".lecture"),p=>[style(p).fontSize,style(p).lineHeight]);'),[['18px','30.6px'],['18px','30.6px']]);
    await resizeExample(500);near((await sizes()).card,280);
    // Zones : vérifier l'arbre réel, pas seulement une page qui s'affiche.
    await mountExample(block('html-zones','exemple').code, '');
    assert.deepEqual(await exampleEval('return Array.from(doc.body.children,e=>e.tagName);'), ['HEADER','MAIN','FOOTER']);
    assert.equal(await exampleEval('return doc.querySelector("h1").parentElement.tagName;'), 'HEADER');
    assert.equal(await exampleEval('return doc.querySelector("h2").parentElement.tagName;'), 'MAIN');
    const sectionVariant = block('html-zones','sections').code;
    await mountExample(block('html-zones','exemple').code.replace(/<main>[\s\S]*?<\/main>/, sectionVariant), '');
    assert.equal(await exampleEval('return doc.querySelectorAll("main").length;'), 1);
    assert.equal(await exampleEval('return doc.querySelectorAll("main > section > h2").length;'), 2);
    assert.deepEqual(await exampleEval('const m=doc.querySelector("main");m.append(m.firstElementChild.cloneNode(true));return Array.from(m.children,s=>[s.tagName,s.parentElement.tagName,s.querySelector("h2").parentElement.tagName]);'), Array(3).fill(['SECTION','MAIN','SECTION']));
    await mountExample(block('html-zones','panne').code, '');
    assert.equal(await exampleEval('return doc.querySelector("main").parentElement.tagName;'), 'HEADER');
    assert.equal(await exampleEval('const h=doc.querySelector("header"),m=doc.querySelector("main");h.after(m);return m.parentElement.tagName;'), 'BODY');
    const navCode = block('html-zones','bonus-navigation').blocks[0].code;
    await mountExample(navCode,'');
    assert.deepEqual(await exampleEval('return Array.from(doc.querySelectorAll("nav a"),a=>a.getAttribute("href"));'), ['https://developer.mozilla.org/fr/','https://www.w3.org/']);
    // Typographie : mêmes textes, vrais styles calculés et consigne sans nom de propriété.
    await mountExample(block('css-textes-lisibles','html').code, block('css-textes-lisibles','css').code);
    await evaluate('document.getElementById("pedagogy-test").style.width="360px"');
    assert.deepEqual(await exampleEval('return Array.from(doc.querySelectorAll("p"),p=>[style(p).fontSize,style(p).lineHeight,style(p).textAlign]);'), Array(2).fill(['18px','27px','left']));
    assert(await exampleEval('const p=doc.querySelector("p");return p.getBoundingClientRect().height>=3*parseFloat(style(p).lineHeight);'), 'Au moins trois lignes réellement visibles');
    const setReading = value => exampleEval('doc.styleSheets[0].cssRules[1].style.lineHeight='+JSON.stringify(value)+';const p=doc.querySelector("p");return [style(p).fontSize,style(p).lineHeight,p.getBoundingClientRect().height];');
    const tight = await setReading('1'), airy = await setReading('1.5');
    assert.deepEqual(tight.slice(0,2),['18px','18px']);
    assert.deepEqual(airy.slice(0,2),['18px','27px']);
    assert(airy[2]>tight[2], 'Interligne observable, lettres inchangées');
    const transferred = await setReading('1.7');
    assert.equal(transferred[0],'18px');
    assert(Math.abs(parseFloat(transferred[1])-30.6)<0.01);
    assert.deepEqual(await exampleEval('const h=doc.querySelector("h1");return [style(h).fontSize,style(h).lineHeight,style(h).textAlign];'), ['28px','33.6px','center']);
    assert.deepEqual(await exampleEval('const p=doc.querySelector("p").cloneNode(true);doc.body.append(p);return [style(p).fontSize,style(p).lineHeight];'), ['18px','30.6px']);
    // Alignement des mots : la boîte ne se déplace pas.
    const boxBefore = await exampleEval('const r=doc.querySelector("h1").getBoundingClientRect();return [r.x,r.width];');
    assert.deepEqual(await exampleEval('doc.styleSheets[0].cssRules[0].style.textAlign="right";const r=doc.querySelector("h1").getBoundingClientRect();return [r.x,r.width];'),boxBefore);
    await mountExample(block('css-textes-lisibles','html').code, block('css-textes-lisibles','panne').code);
    assert.deepEqual(await exampleEval('const s=style(doc.querySelector("p"));return [s.fontSize,s.lineHeight];'),['24px','19.2px']);
    assert.deepEqual(await exampleEval('doc.styleSheets[0].cssRules[0].style.lineHeight="1.5";const s=style(doc.querySelector("p"));return [s.fontSize,s.lineHeight];'),['24px','36px']);
    // Boîtes : distances mesurées à gauche, sans dimensions/Flexbox injectés.
    await mountExample(block('css-boites-espacements','html').code, block('css-boites-espacements','css').code);
    const boxGeometry = () => exampleEval('const a=doc.querySelector(".atelier"),c=doc.querySelector(".carte"),h=c.querySelector("h2"),ar=a.getBoundingClientRect(),cr=c.getBoundingClientRect(),hr=h.getBoundingClientRect();return {outside:cr.x-ar.x-parseFloat(style(a).borderLeftWidth),inside:hr.x-cr.x-parseFloat(style(c).borderLeftWidth),border:parseFloat(style(c).borderLeftWidth),parent:style(a).backgroundColor,card:style(c).backgroundColor,childMargin:style(h).marginLeft};');
    const baseBox = await boxGeometry();
    assert.deepEqual(baseBox,{outside:12,inside:16,border:2,parent:'rgb(211, 211, 211)',card:'rgb(255, 255, 255)',childMargin:'0px'});
    await exampleEval('doc.styleSheets[0].cssRules[1].style.padding="24px";');
    assert.deepEqual(await boxGeometry(),{...baseBox,inside:24});
    await exampleEval('doc.styleSheets[0].cssRules[1].style.margin="24px";');
    assert.deepEqual(await boxGeometry(),{...baseBox,outside:24,inside:24});
    await exampleEval('doc.styleSheets[0].cssRules[1].style.borderWidth="6px";');
    assert.deepEqual(await boxGeometry(),{...baseBox,outside:24,inside:24,border:6});
    assert.equal(await exampleEval('const a=doc.querySelector(".atelier");a.append(a.firstElementChild.cloneNode(true));return Array.from(a.children).filter(c=>style(c).paddingLeft==="24px" && style(c).marginLeft==="24px").length;'),3);
    await mountExample(block('css-boites-espacements','html').code, block('css-boites-espacements','css').code+'\n'+block('css-boites-espacements','panne').code);
    assert.deepEqual(await boxGeometry(),{...baseBox,outside:32,inside:0});
    await exampleEval('doc.styleSheets[0].cssRules[4].style.padding="16px";');
    assert.deepEqual(await boxGeometry(),{...baseBox,outside:32,inside:16});
    // Deux variantes facultatives : ne changent ni police ni épaisseur.
    await mountExample(block('css-boites-espacements','html').code, block('css-boites-espacements','css').code);
    for (const [padding,margin] of [[8,8],[24,20]]) {
      await exampleEval('const s=doc.styleSheets[0].cssRules[1].style;s.padding='+JSON.stringify(padding+'px')+';s.margin='+JSON.stringify(margin+'px')+';');
      assert.deepEqual(await boxGeometry(),{...baseBox,outside:margin,inside:padding});
    }
    await mountExample(block('css-decouverte','html').code, block('css-decouverte','regle').code + block('css-decouverte','paragraphes').code);
    assert.deepEqual(await exampleEval('return [style(doc.querySelector("h1")).color, style(doc.querySelector("h1")).backgroundColor, ...Array.from(doc.querySelectorAll("p"),p=>style(p).backgroundColor)];'), ['rgb(0, 0, 255)','rgb(255, 255, 255)','rgb(255, 255, 224)','rgb(255, 255, 224)']);
    assert.deepEqual(await exampleEval('const p=doc.createElement("p");p.textContent="Troisième";doc.body.append(p);return [style(p).color,style(p).backgroundColor];'), ['rgb(0, 0, 0)','rgb(255, 255, 224)']);
    assert.deepEqual(await exampleEval('doc.styleSheets[0].cssRules[1].style.backgroundColor="white";return [style(doc.querySelector("p")).color,style(doc.querySelector("p")).backgroundColor];'), ['rgb(0, 0, 0)','rgb(255, 255, 255)']);
    await mountExample(block('css-classes-couleurs','panne').code,block('css-classes-couleurs','panne-css').code);
    assert.deepEqual(await exampleEval('return Array.from(doc.querySelectorAll("p"),p=>style(p).color);'), ['rgb(0, 128, 0)','rgb(0, 0, 0)']);
    assert.deepEqual(await exampleEval('doc.querySelectorAll("p")[1].className="info";return Array.from(doc.querySelectorAll("p"),p=>style(p).color);'), ['rgb(0, 128, 0)','rgb(0, 128, 0)']);
    await mountExample(block('web-affiche-numerique','exemple-html').code,block('web-affiche-numerique','exemple-css').code);
    assert.deepEqual(await exampleEval('return [style(doc.querySelector("h1")).color,style(doc.querySelector("h1")).backgroundColor];'), ['rgb(255, 255, 255)','rgb(0, 0, 128)']);
    assert.deepEqual(await exampleEval('const p=doc.querySelector("p");doc.body.append(p.cloneNode(true),p.cloneNode(true));doc.styleSheets[0].cssRules[1].style.backgroundColor="white";return Array.from(doc.querySelectorAll("p"),p=>[style(p).color,style(p).backgroundColor]);'), Array(3).fill(['rgb(0, 0, 0)','rgb(255, 255, 255)']));
    // Le cadre local fourni donne le même résultat après insertion des extraits.
    const local = block('css-decouverte','projet-local').blocks[0].code.replace('/* Colle les règles CSS ici. */',block('css-decouverte','regle').code).replace('<!-- Colle le contenu HTML ici. -->',block('css-decouverte','html').code);
    await mountExample(local, '');
    assert.equal(await exampleEval('return style(doc.querySelector("h1")).color;'), 'rgb(0, 0, 255)');
    await evaluate('document.getElementById("pedagogy-test").remove()');
    // Vrais fichiers temporaires : pas de srcdoc ni de CSS injecté pour le lot local.
    const filesRoot = path.join(profile, 'cours-fichiers');
    fs.mkdirSync(filesRoot);
    const sourceOf = (id, activity) => block(id, activity).code;
    const openLocal = async (file, title) => {
      await call('Page.navigate', { url: pathToFileURL(file).href });
      await wait('document.readyState === "complete" && location.protocol === "file:" && document.title === ' + JSON.stringify(title));
    };
    const docFile = path.join(filesRoot, 'document.html');
    const documentHTML = sourceOf('html-document','exemple');
    fs.writeFileSync(docFile, documentHTML);
    await openLocal(docFile, 'Mon carnet');
    assert.equal(await evaluate('document.querySelector("h1").textContent'), 'Ma page locale');
    assert.equal(await evaluate('document.querySelectorAll("head").length + document.querySelectorAll("body").length'), 2);
    fs.writeFileSync(docFile, documentHTML.replace('Mon carnet','Carnet des idées'));
    await call('Page.reload', { ignoreCache:true });
    await wait('document.title === "Carnet des idées"');
    assert.equal(await evaluate('document.querySelector("h1").textContent'), 'Ma page locale');
    fs.writeFileSync(docFile, documentHTML.replace('Mon carnet','Carnet des idées').replace('Ma page locale','Mes découvertes'));
    await call('Page.reload', { ignoreCache:true });
    await wait('document.querySelector("h1")?.textContent === "Mes découvertes"');
    assert.equal(await evaluate('document.title'), 'Carnet des idées');
    const imageDir = path.join(filesRoot, 'images'); fs.mkdirSync(imageDir);
    const imageFile = path.join(imageDir,'carre-bleu.svg');
    fs.copyFileSync(path.join(root,'assets/exercices/carre-bleu.svg'),imageFile);
    const pathsFile = path.join(filesRoot,'ressources.html');
    const pathsHTML = sourceOf('html-fichiers-chemins','exemple');
    fs.writeFileSync(pathsFile,pathsHTML);
    await openLocal(pathsFile,'Mes ressources');
    await wait('document.querySelector("img")?.complete && document.querySelector("img").naturalWidth === 160');
    assert.equal(await evaluate('document.querySelector("a").href'),pathToFileURL(imageFile).href);
    await evaluate('document.querySelector("a").click()');
    await wait('document.documentElement.tagName.toLowerCase() === "svg"');
    await openLocal(pathsFile,'Mes ressources');
    fs.renameSync(imageFile,path.join(imageDir,'forme.svg'));
    const renamedPathsHTML = pathsHTML.replaceAll('images/carre-bleu.svg','images/forme.svg');
    fs.writeFileSync(pathsFile,renamedPathsHTML);
    await call('Page.reload',{ignoreCache:true});
    await wait('document.querySelector("img")?.getAttribute("src") === "images/forme.svg" && document.querySelector("img").complete && document.querySelector("img").naturalWidth === 160');
    assert.equal(await evaluate('document.querySelector("img").alt'),'Un carré bleu');
    assert.equal(await evaluate('document.querySelector("a").href'),pathToFileURL(path.join(imageDir,'forme.svg')).href);
    await evaluate('document.querySelector("a").click()');
    await wait('document.documentElement.tagName.toLowerCase() === "svg"');
    fs.writeFileSync(pathsFile,renamedPathsHTML.replace('src="images/forme.svg"','src="forme.svg"'));
    await openLocal(pathsFile,'Mes ressources');
    await wait('document.querySelector("img")?.complete && document.querySelector("img").naturalWidth === 0');
    assert.equal(await evaluate('document.querySelector("a").getAttribute("href")'),'images/forme.svg');
    const mediaImages = path.join(filesRoot,'media','images'); fs.mkdirSync(mediaImages,{recursive:true});
    fs.copyFileSync(path.join(imageDir,'forme.svg'),path.join(mediaImages,'forme.svg'));
    fs.writeFileSync(pathsFile,renamedPathsHTML.replaceAll('images/forme.svg','media/images/forme.svg'));
    await call('Page.reload',{ignoreCache:true});
    await wait('document.querySelector("img")?.getAttribute("src") === "media/images/forme.svg" && document.querySelector("img").naturalWidth === 160');
    const sheetHTML = sourceOf('css-feuille-style','html');
    const sheetFile = path.join(filesRoot,'style.css'), themedFile = path.join(filesRoot,'theme.css');
    const styledPage = path.join(filesRoot,'style-externe.html');
    fs.writeFileSync(styledPage,sheetHTML);
    fs.writeFileSync(sheetFile,sourceOf('css-feuille-style','css'));
    await openLocal(styledPage,'Mon premier style externe');
    await wait('getComputedStyle(document.querySelector("h1")).color === "rgb(0, 0, 255)"');
    fs.writeFileSync(sheetFile,sourceOf('css-feuille-style','css').replace('blue','purple'));
    await call('Page.reload',{ignoreCache:true});
    await wait('getComputedStyle(document.querySelector("h1")).color === "rgb(128, 0, 128)"');
    fs.renameSync(sheetFile,themedFile);
    await call('Page.reload',{ignoreCache:true});
    await wait('getComputedStyle(document.querySelector("h1")).color === "rgb(0, 0, 0)"');
    fs.writeFileSync(styledPage,sheetHTML.replace('href="style.css"','href="theme.css"'));
    fs.writeFileSync(themedFile,'h1 { color: purple; }\np { color: darkgreen; }');
    await call('Page.reload',{ignoreCache:true});
    await wait('getComputedStyle(document.querySelector("h1")).color === "rgb(128, 0, 128)" && getComputedStyle(document.querySelector("p")).color === "rgb(0, 100, 0)"');
    fs.writeFileSync(themedFile,'h2 { color: purple; }\np { color: darkgreen; }');
    await call('Page.reload',{ignoreCache:true});
    await wait('getComputedStyle(document.querySelector("h1")).color === "rgb(0, 0, 0)" && getComputedStyle(document.querySelector("p")).color === "rgb(0, 100, 0)"');
    fs.writeFileSync(styledPage,sheetHTML.replace('href="style.css"','href="absent.css"'));
    await call('Page.reload',{ignoreCache:true});
    await wait('document.querySelector("link").getAttribute("href") === "absent.css" && getComputedStyle(document.querySelector("p")).color === "rgb(0, 0, 0)"');
    const cssDir = path.join(filesRoot,'css');fs.mkdirSync(cssDir);
    fs.writeFileSync(path.join(cssDir,'theme.css'),'h1 { color: purple; }\np { color: darkgreen; }');
    fs.writeFileSync(styledPage,sheetHTML.replace('href="style.css"','href="css/theme.css"'));
    await call('Page.reload',{ignoreCache:true});
    await wait('getComputedStyle(document.querySelector("h1")).color === "rgb(128, 0, 128)" && getComputedStyle(document.querySelector("p")).color === "rgb(0, 100, 0)"');
    // Variante locale du nouveau cours : image relative et feuille externe réellement chargées.
    fs.copyFileSync(path.join(root,circle.path),path.join(imageDir,'cercle-orange.svg'));
    const sizingLocal=path.join(filesRoot,'carte.html');
    const sizingLocalHTML='<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>Carte locale</title><link rel="stylesheet" href="carte.css"></head><body>'+sizingHTML.replace(circle.codepenSrc,'images/cercle-orange.svg')+'</body></html>';
    fs.writeFileSync(sizingLocal,sizingLocalHTML);
    fs.writeFileSync(path.join(filesRoot,'carte.css'),sizingCSS);
    await openLocal(sizingLocal,'Carte locale');
    await wait('document.querySelector("img").complete && document.querySelector("img").naturalWidth===160');
    near(await evaluate('document.querySelector(".carte").getBoundingClientRect().width'),320);
    near(await evaluate('document.querySelector("img").getBoundingClientRect().height'),213);
    await call('Page.reload',{ignoreCache:true});
    await wait('document.querySelector("img").complete && document.querySelector("img").naturalWidth===160');
    assert.equal(await evaluate('document.querySelector("img").alt'),'Un cercle orange');
    // Ressources partagées : boutons utilisables, source seule copiée, données repliées.
    for(const [id,resourceId,count] of [['css-dimensions-images','source-cercle',2],['web-carte-personnelle','source-image',1]]) {
      await navigate(moduleRoute(id,'web-debutants')+'&activite='+resourceId,data.modules[id].title);
      assert.equal(await evaluate('document.activeElement.dataset.activityId'),resourceId);
      await wait('Array.from(document.querySelectorAll("main img")).every(i=>i.complete && i.naturalWidth>0)');
      assert.equal(await evaluate('document.querySelectorAll(".image-source").length'),count);
      assert.equal(await evaluate('document.querySelectorAll(".image-source details[open]").length'),0);
      await evaluate('Object.defineProperty(navigator,"clipboard",{configurable:true,value:{writeText:async text=>{window.copiedSource=text;}}});document.querySelector(".image-source button").click();');
      await wait('!!window.copiedSource');
      assert.equal(await evaluate('window.copiedSource'),circle.codepenSrc);
      await call('Page.reload');await readyTitle(data.modules[id].title);
      assert.equal(await evaluate('document.activeElement.dataset.activityId'),resourceId);
      assert.equal(await evaluate('document.querySelectorAll(".image-source details[open]").length'),0);
    }
    await navigate('#module/css-flexbox?parcours=web-avances','Flexbox');
    await click('#module/css-dimensions-images','Dimensions et images dans une carte');
    assert.equal(await evaluate('location.hash'),'#module/css-dimensions-images');

    // Lot multipage : documents du catalogue ouverts comme de vrais fichiers voisins.
    const multiDir=path.join(profile,'mini-navigation'); fs.mkdirSync(multiDir);
    const multiFiles=['index.html','decouvertes.html'];
    const multiTitles=['Accueil du carnet','Découvertes du carnet'];
    const multiHTML=[sourceOf('html-multipage','accueil'),sourceOf('html-multipage','seconde')];
    multiFiles.forEach((file,i)=>fs.writeFileSync(path.join(multiDir,file),multiHTML[i]));
    const followFileLink=async (dir,file,title) => {
      await evaluate('document.querySelector('+JSON.stringify('nav a[href="'+file+'"]')+').click()');
      await wait('document.readyState==="complete" && location.href==='+JSON.stringify(pathToFileURL(path.join(dir,file)).href)+' && document.title==='+JSON.stringify(title));
    };
    for(let from=0;from<2;from++) for(let to=0;to<2;to++) {
      await openLocal(path.join(multiDir,multiFiles[from]),multiTitles[from]);
      await followFileLink(multiDir,multiFiles[to],multiTitles[to]);
      assert.equal(await evaluate('document.querySelector("h1").textContent'),to?'Mes découvertes':'Mon carnet');
    }
    const relabelled=multiHTML.map(html=>html.replace('>Découvertes</a>','>Mes idées</a>'));
    multiFiles.forEach((file,i)=>fs.writeFileSync(path.join(multiDir,file),relabelled[i]));
    await openLocal(path.join(multiDir,'index.html'),multiTitles[0]);
    assert.equal(await evaluate('document.querySelectorAll("nav a")[1].textContent'),'Mes idées');
    await followFileLink(multiDir,'decouvertes.html',multiTitles[1]);
    fs.renameSync(path.join(multiDir,'decouvertes.html'),path.join(multiDir,'idees.html'));
    const missing=await call('Page.navigate',{url:pathToFileURL(path.join(multiDir,'decouvertes.html')).href});
    assert.equal(missing.errorText,'net::ERR_FILE_NOT_FOUND');
    const repaired=relabelled.map(html=>html.replaceAll('decouvertes.html','idees.html'));
    multiFiles[1]='idees.html';
    multiFiles.forEach((file,i)=>fs.writeFileSync(path.join(multiDir,file),repaired[i]));
    for(let from=0;from<2;from++) for(let to=0;to<2;to++) {
      await openLocal(path.join(multiDir,multiFiles[from]),multiTitles[from]);
      await followFileLink(multiDir,multiFiles[to],multiTitles[to]);
    }
    // Le retour appartient à la page, pas à l'historique du navigateur.
    fs.writeFileSync(path.join(multiDir,'idees.html'),repaired[1].replace('<a href="index.html">Accueil</a>',''));
    await openLocal(path.join(multiDir,'idees.html'),multiTitles[1]);
    assert.equal(await evaluate('!!document.querySelector(\'nav a[href="index.html"]\')'),false);
    fs.writeFileSync(path.join(multiDir,'idees.html'),repaired[1]);
    await openLocal(path.join(multiDir,'idees.html'),multiTitles[1]);
    await followFileLink(multiDir,'index.html',multiTitles[0]);
    const third=repaired[1].replace('Découvertes du carnet','Observations du carnet').replace('Mes découvertes','Mes observations');
    const threeHTML=[...repaired,third].map(html=>html.replace('</nav>','  <a href="observations.html">Observations</a>\n  </nav>'));
    const threeFiles=[...multiFiles,'observations.html'],threeTitles=[...multiTitles,'Observations du carnet'];
    threeFiles.forEach((file,i)=>fs.writeFileSync(path.join(multiDir,file),threeHTML[i]));
    for(let from=0;from<3;from++) for(let to=0;to<3;to++) {
      await openLocal(path.join(multiDir,threeFiles[from]),threeTitles[from]);
      await followFileLink(multiDir,threeFiles[to],threeTitles[to]);
    }
    // Projet : une solution possible du guide, pas une solution supplémentaire publiée.
    const siteDir=path.join(profile,'mon-mini-site'); fs.mkdirSync(siteDir);
    fs.mkdirSync(path.join(siteDir,'images'));
    fs.copyFileSync(path.join(root,'assets/exercices/carre-bleu.svg'),path.join(siteDir,'images','carre-bleu.svg'));
    const siteHTML=repaired.map(html=>html.replace('</head>',sourceOf('web-mini-site','liaison')+'\n</head>')
      .replace('<body>','<body><div class="page">').replace('</body>','</div></body>')
      .replace('<h1>','<h1 class="titre">').replace('<p>','<p class="lecture">')
      .replace('</p>','</p><img class="illustration" src="images/carre-bleu.svg" alt="Un carré bleu">'));
    multiFiles.forEach((file,i)=>fs.writeFileSync(path.join(siteDir,file),siteHTML[i]));
    const commonCSS=sourceOf('web-mini-site','partage')+'\n.lecture {font-size:18px;line-height:1.5;}\n.page {width:640px;max-width:100%;box-sizing:border-box;padding:16px;}\n.illustration {width:100%;height:auto;}';
    const commonFile=path.join(siteDir,'style.css');
    fs.writeFileSync(commonFile,commonCSS);
    for(let i=0;i<2;i++) {
      await openLocal(path.join(siteDir,multiFiles[i]),multiTitles[i]);
      await wait('document.querySelector("img").complete && document.querySelector("img").naturalWidth===160');
      assert.equal(await evaluate('getComputedStyle(document.querySelector("h1")).color'),'rgb(0, 0, 128)');
    }
    const changedCSS=commonCSS.replace('navy','darkgreen').replace('line-height:1.5','line-height:1.7');
    fs.writeFileSync(commonFile,changedCSS);
    for(let i=0;i<2;i++) {
      await openLocal(path.join(siteDir,multiFiles[i]),multiTitles[i]);
      await call('Page.reload',{ignoreCache:true});
      await wait('getComputedStyle(document.querySelector("h1")).color==="rgb(0, 100, 0)"');
      assert.deepEqual(await evaluate('[getComputedStyle(document.querySelector("p")).fontSize,getComputedStyle(document.querySelector("p")).lineHeight]'),['18px','30.6px']);
      assert.equal(fs.readFileSync(path.join(siteDir,multiFiles[i]),'utf8'),siteHTML[i], 'aucun changement HTML pour le style commun');
    }
    fs.writeFileSync(path.join(siteDir,'idees.html'),siteHTML[1].replace('href="style.css"','href="absent.css"'));
    await openLocal(path.join(siteDir,'idees.html'),multiTitles[1]);
    assert.equal(await evaluate('getComputedStyle(document.querySelector("h1")).color'),'rgb(0, 0, 0)');
    await openLocal(path.join(siteDir,'index.html'),multiTitles[0]);
    assert.equal(await evaluate('getComputedStyle(document.querySelector("h1")).color'),'rgb(0, 100, 0)');
    fs.writeFileSync(path.join(siteDir,'idees.html'),siteHTML[1].replace('class="titre"','class="autre"'));
    await openLocal(path.join(siteDir,'idees.html'),multiTitles[1]);
    assert.deepEqual(await evaluate('[getComputedStyle(document.querySelector("h1")).color,getComputedStyle(document.querySelector("p")).lineHeight]'),['rgb(0, 0, 0)','30.6px']);
    fs.writeFileSync(path.join(siteDir,'idees.html'),siteHTML[1].replace('src="images/carre-bleu.svg"','src="absent.svg"'));
    await openLocal(path.join(siteDir,'idees.html'),multiTitles[1]);
    await wait('document.querySelector("img").complete && document.querySelector("img").naturalWidth===0');
    fs.writeFileSync(path.join(siteDir,'idees.html'),siteHTML[1]);
    await openLocal(path.join(siteDir,'idees.html'),multiTitles[1]);
    await wait('document.querySelector("img").complete && document.querySelector("img").naturalWidth===160');
    for(const width of [500,260]) {
      await call('Emulation.setDeviceMetricsOverride',{width,height:800,deviceScaleFactor:1,mobile:false});
      assert(await evaluate('document.documentElement.scrollWidth<=innerWidth'));
      assert(await evaluate('Math.abs(document.querySelector("img").width/document.querySelector("img").height-4/3)<0.02'));
    }
    await call('Emulation.setDeviceMetricsOverride',{width:1280,height:900,deviceScaleFactor:1,mobile:false});
    await followFileLink(siteDir,'index.html',multiTitles[0]);
    await navigate('#module/web-mini-site?parcours=web-debutants&activite=source-image','Mon mini-site');
    assert.equal(await evaluate('document.activeElement.dataset.activityId'),'source-image');
    assert.equal(await evaluate('document.querySelectorAll(".image-source").length'),1);
    assert.equal(await evaluate('document.querySelectorAll(".image-source details[open]").length'),0);

    // Retour au vrai parcours et accès aux reprises CSS depuis une ouverture directe.
    await navigate('#module/css-feuille-style','Relier une feuille de style');
    await click('#module/css-decouverte','Découvrir le CSS');
    // Le même module partagé garde sa couleur et son contexte de navigation.
    for (const pathway of ['web-fondations', 'web-debutants']) {
      await navigate(moduleRoute('html-images', pathway), 'Images HTML');
      assert.equal(await evaluate('document.body.dataset.route'), data.pathways[pathway].theme);
      await wait('Array.from(document.querySelectorAll("main img")).every(img => img.complete && img.naturalWidth > 0)');
      await click(moduleRoute('html-images', pathway) + '&activite=depannage', 'Images HTML');
      await wait('document.activeElement.dataset.activityId === "depannage"');
      assert.equal(await evaluate('location.hash'), moduleRoute('html-images', pathway) + '&activite=depannage');
    }
    // Une cible imbriquée doit ouvrir son panneau ; une tâche garde sa route après F5.
    await navigate('#module/html-images?activite=squelette', 'Images HTML');
    assert.equal(await evaluate('document.querySelector("[data-activity-id=aide-fondations]").open'), true);
    await navigate('#module/html-images?activite=depannage&tache=source-incorrecte', 'Images HTML');
    await call('Page.reload'); await readyTitle('Images HTML');
    assert.equal(await evaluate('document.activeElement.dataset.taskId'), 'source-incorrecte');
    assert.equal(await evaluate('document.querySelectorAll("[data-activity-id=depannage] .hint > details").length'), 8);
    // Les sources data: destinées à CodePen se décodent réellement, sans service distant.
    for (const resource of data.modules['html-images'].resources) {
      assert(await evaluate(`new Promise(resolve => { const img = new Image(); img.onload = () => resolve(img.naturalWidth === 160); img.onerror = () => resolve(false); img.src = ${JSON.stringify(resource.codepenSrc)}; })`));
    }
    // Presse-papiers simulé : seul le payload source est transmis, jamais la balise ni alt.
    assert.equal(await evaluate('document.querySelectorAll(".image-source details[open]").length'), 0);
    assert.equal(await evaluate('document.querySelectorAll(".image-alternative").length'), 2);
    await evaluate('Object.defineProperty(navigator, "clipboard", { configurable:true, value:{ writeText:async text => { window.copiedSource=text; } } }); document.querySelector(".image-source button").click()');
    await wait('!!window.copiedSource');
    assert.equal(await evaluate('window.copiedSource'), data.modules['html-images'].resources[0].codepenSrc);
    assert(!(await evaluate('window.copiedSource')).includes('<img'));
    assert.equal(await evaluate('document.querySelector(".image-source details").open'), false);
    await evaluate('navigator.clipboard.writeText=async()=>{throw new Error("refus simulé");}; document.querySelector(".image-source button").click()');
    await wait('document.querySelector(".image-source details").open');
    assert.equal(await evaluate('document.querySelector(".image-source code").textContent'), data.modules['html-images'].resources[0].codepenSrc);
    await evaluate('document.querySelector("main img").dispatchEvent(new Event("error"))');
    assert((await evaluate('document.querySelector("[data-activity-id=ressource-carre]").textContent')).includes('pas une faute'));
    // Prototype ciblé : le choix modifie uniquement display du parent et son code visible.
    await navigate('#module/css-flexbox?parcours=web-avances&activite=cours', 'Flexbox');
    const demoState=()=>evaluate(`(() => {
      const demo=document.querySelector('.flex-display-demo'), parent=demo.querySelector('.cartes');
      return {value:demo.querySelector('select').value,display:getComputedStyle(parent).display,
        code:demo.querySelector('code').textContent,highlight:demo.querySelector('code strong').textContent,
        children:Array.from(parent.children,c=>{const r=c.getBoundingClientRect();return {x:r.x,y:r.y,w:r.width,h:r.height,display:getComputedStyle(c).display,inline:c.getAttribute('style')};})};
    })()`);
    assert.equal(await evaluate('document.querySelectorAll(".flex-display-demo").length'),1);
    assert.equal(await evaluate('document.querySelector(".flex-display-demo").closest("[data-activity-id]").dataset.activityId'),'cours');
    assert.equal(await evaluate('document.querySelector(".flex-display-demo select").labels.length'),1);
    assert.equal(await evaluate('document.querySelector(".flex-display-demo [role=status]").textContent'),data.modules['css-flexbox'].blocks.find(b=>b.id==='cours').demonstration.options[0].feedback);
    const initialDemo=await demoState();
    assert.equal(initialDemo.value,'block'); assert.equal(initialDemo.display,'block');
    assert(initialDemo.children[1].y>initialDemo.children[0].y);
    assert.equal(initialDemo.children[0].x,initialDemo.children[2].x);
    // Vraies touches clavier sur le select natif, sans remplacement du DOM.
    const demoKey=async(key,codeNumber)=>{
      await call('Input.dispatchKeyEvent',{type:'keyDown',key,code:key,windowsVirtualKeyCode:codeNumber});
      await call('Input.dispatchKeyEvent',{type:'keyUp',key,code:key,windowsVirtualKeyCode:codeNumber});
    };
    await evaluate('document.querySelector(".flex-display-demo select").focus()');
    await demoKey('End',35); await demoKey('Enter',13);
    await wait('document.querySelector(".flex-display-demo select").value==="flex"');
    const flexDemo=await demoState();
    assert.equal(flexDemo.display,'flex');
    assert.equal(flexDemo.code,'.cartes {\n  display: flex;\n}');
    assert.equal(flexDemo.highlight,'flex');
    assert.equal(flexDemo.children[0].y,flexDemo.children[2].y);
    assert(flexDemo.children[1].x>flexDemo.children[0].x);
    assert.deepEqual(flexDemo.children.map(c=>[c.w,c.h,c.display,c.inline]),initialDemo.children.map(c=>[c.w,c.h,c.display,c.inline]));
    assert.equal(await evaluate('document.activeElement.tagName'),'SELECT');
    assert.equal(await evaluate('document.activeElement.matches(":focus-visible")'),true);
    await demoKey('Home',36); await demoKey('Enter',13);
    assert.equal((await demoState()).display,'block');
    assert.equal((await demoState()).code,'.cartes {\n  display: block;\n}');
    assert.equal(await evaluate('location.hash'),'#module/css-flexbox?parcours=web-avances&activite=cours');
    const chooseDisplay=async value=>evaluate('(()=>{const s=document.querySelector(".flex-display-demo select");s.value='+JSON.stringify(value)+';s.dispatchEvent(new Event("change",{bubbles:true}));})()');
    const captureDemo=async name=>{
      await evaluate('document.querySelector(".flex-display-demo").scrollIntoView({block:"start",behavior:"instant"});new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)))');
      const shot=await call('Page.captureScreenshot',{format:'png'});
      fs.writeFileSync(path.join(profile,name+'.png'),Buffer.from(shot.data,'base64'));
    };
    await captureDemo('flex-display-block-desktop');
    await chooseDisplay('flex'); await captureDemo('flex-display-flex-desktop');
    for(const width of [390,320]) {
      await call('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:true});
      for(const value of ['block','flex']) {
        await chooseDisplay(value);
        const state=await demoState();
        assert.equal(state.display,value);
        if(value==='flex') assert.equal(state.children[0].y,state.children[2].y);
        else assert(state.children[2].y>state.children[0].y);
        assert(await evaluate('document.documentElement.scrollWidth<=innerWidth'),'Démo sans débordement à '+width);
        assert(await evaluate('(()=>{const p=document.querySelector(".flex-display-demo .cartes");return p.scrollWidth<=p.clientWidth;})()'),'Cartes contenues');
        await captureDemo('flex-display-'+value+'-'+width);
      }
    }
    await call('Emulation.setDeviceMetricsOverride',{width:1280,height:900,deviceScaleFactor:1,mobile:false});
    await call('Page.reload'); await readyTitle('Flexbox');
    assert.equal((await demoState()).display,'block','Choix temporaire, pas de sauvegarde');
    assert.equal(await evaluate('localStorage.length+sessionStorage.length'),0);
    assert.equal(await evaluate('document.querySelectorAll("main input:checked").length'),0);
    await navigate('#module/html-parent-enfants','Parent et enfants');
    assert.equal(await evaluate('document.querySelectorAll(".flex-display-demo").length'),0);
    // Comportement réel des exemples Flexbox dans un iframe isolé.
    await navigate('#module/css-flexbox', 'Flexbox');
    assert(await evaluate('!!(document.querySelector("[data-activity-id=apparence]").compareDocumentPosition(document.querySelector("[data-activity-id=diagnostic]")) & Node.DOCUMENT_POSITION_FOLLOWING)'), 'Le code est fourni avant le diagnostic');
    const exampleHTML = data.modules['web-projet-cartes'].blocks.find(b => b.id === 'secours').blocks[0].code;
    const appearance = data.modules['css-flexbox'].blocks.find(b => b.id === 'apparence').code;
    await evaluate(`new Promise(resolve => { const f = document.createElement('iframe'); f.id='layout-test'; f.style.width='1000px'; f.onload=resolve; f.srcdoc=${JSON.stringify('<style>' + appearance + '</style>' + exampleHTML)}; document.body.append(f); })`);
    const layout = async css => evaluate(`(() => { const doc=document.getElementById('layout-test').contentDocument; const parent=doc.querySelector('.cartes'); parent.style.cssText=${JSON.stringify(css)}; return Array.from(parent.children, item => {const r=item.getBoundingClientRect();return {x:r.x,y:r.y,w:r.width,h:r.height};}); })()`);
    const row = await layout('display:flex;gap:20px;align-items:flex-start;');
    assert.equal(row[0].y, row[2].y); assert.equal(Math.round(row[1].x - row[0].x - row[0].w), 20);
    const column = await layout('display:flex;flex-direction:column;gap:20px;align-items:flex-start;');
    assert.equal(column[0].x, column[2].x); assert(column[1].y > column[0].y);
    const center = await layout('display:flex;justify-content:center;align-items:center;');
    assert(center[0].x > row[0].x); assert(center[0].y > row[0].y);
    const wrap = await layout('display:flex;flex-wrap:wrap;width:340px;gap:20px;align-items:flex-start;');
    assert(wrap[2].y > wrap[0].y);
    // Réglages réellement proposés à l’élève, sans dimensions injectées par le test.
    const observation = data.modules['css-flexbox'].blocks.find(b => b.id === 'reglages-observation').code;
    await evaluate(`(() => { const d=document.getElementById('layout-test').contentDocument; const s=d.createElement('style'); s.textContent=${JSON.stringify(observation)}; d.head.append(s); d.querySelector('.cartes').style.cssText=''; })()`);
    const leftColumn = await layout('flex-direction:column;align-items:flex-start;');
    const centeredColumn = await layout('flex-direction:column;align-items:center;');
    assert.equal(centeredColumn[0].w, 160);
    assert(centeredColumn[1].y > centeredColumn[0].y);
    assert(Math.abs(centeredColumn[0].x - leftColumn[0].x - 180) < 0.1, 'Le centrage horizontal est visible sur 520px');
    assert.equal(centeredColumn[0].x, centeredColumn[2].x);
    await evaluate('(() => { const p=document.getElementById("layout-test").contentDocument.querySelector(".cartes"); Array.from(p.children).forEach(c=>p.append(c.cloneNode(true))); })()');
    const sixNoWrap = await layout('');
    assert.equal(sixNoWrap.length, 6);
    assert(sixNoWrap.every(c => c.y === sixNoWrap[0].y));
    assert(await evaluate('(() => {const p=document.getElementById("layout-test").contentDocument.querySelector(".cartes");return p.scrollWidth>p.clientWidth;})()'), 'Six cartes dépassent sans wrap');
    const sixWrap = await layout('flex-wrap:wrap;');
    assert.equal(new Set(sixWrap.map(c => c.y)).size, 2);
    assert(sixWrap.slice(0, 3).every(c => c.y === sixWrap[0].y));
    assert(sixWrap.slice(3).every(c => c.y === sixWrap[3].y));
    assert(Math.abs(sixWrap[2].x + sixWrap[2].w - sixWrap[0].x - 520) < 0.1);
    assert(Math.abs(sixWrap[5].x + sixWrap[5].w - sixWrap[3].x - 520) < 0.1);
    await evaluate('document.getElementById("layout-test").remove()');
    // Les anciens modules restent lisibles et ne déclarent pas leurs prérequis acquis.
    await navigate('#module/html-listes', 'Listes HTML');
    assert((await evaluate('document.querySelector(".pedagogy-panel").textContent')).includes('ne signifie pas qu’ils sont acquis'));
    // Guides consultables sans fichier professeur, pas de mutation du suivi.
    await call('Page.navigate', { url: base.replace('index.html', 'prof.html') });
    await wait('document.readyState === "complete" && !!document.querySelector("#teacher-guides nav a")');
    await evaluate('document.querySelector(\'a[href="#guides"]\').click()');
    await wait('document.querySelector("#teacher-guides").open');
    for (const id of Object.keys(data.modules).filter(id => data.modules[id].teacherGuide)) {
      await evaluate(`document.querySelector('a[href="#guide/${id}"]').click()`);
      await wait('document.querySelector("[data-guide-view] h2")?.textContent === ' + JSON.stringify('Guide professeur — ' + data.modules[id].title));
      assert.equal(await evaluate('document.querySelector("#teacher-guides").open'), true);
      assert.equal(await evaluate('document.getElementById("save-state").textContent'), 'Aucun Espace CodeCraft ouvert');
      assert((await evaluate('document.querySelector("[data-guide-view]").textContent')).includes('Conducteur rapide — sans horaires imposés'));
      assert.equal(await evaluate('document.querySelectorAll("[data-guide-view] input").length'), 0);
    }
    await call('Page.reload');
    await wait('document.querySelector("[data-guide-view] h2")?.textContent === "Guide professeur — Flexbox"');
    assert(await evaluate('!!document.querySelector(\'a[href="prof-conducteur-historique.html"]\')'));
    await navigate('#module/html-images', 'Images HTML');
    await call('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
    assert(await evaluate('document.documentElement.scrollWidth <= window.innerWidth'), 'Pas de débordement horizontal mobile');
    for (const id of ['html-mini-page','css-decouverte','css-classes-couleurs','web-affiche-numerique','html-document','html-fichiers-chemins','css-feuille-style','html-zones','css-textes-lisibles','css-boites-espacements','css-dimensions-images','web-carte-personnelle','html-multipage','web-mini-site']) {
      await navigate(moduleRoute(id, 'web-fondations'), data.modules[id].title);
      assert(await evaluate('document.documentElement.scrollWidth <= window.innerWidth'), id + ': largeur mobile');
      assert.equal(await evaluate('document.querySelectorAll("main h1").length'), 1);
    }
    await call('Emulation.setDeviceMetricsOverride', { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false });
    await navigate('#module/css-decouverte?activite=regle', 'Découvrir le CSS');
    const capture = async (name, selector) => {
      await evaluate(`document.querySelector(${JSON.stringify(selector)}).scrollIntoView({block:'start',behavior:'instant'}); new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))`);
      const shot = await call('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(profile, name + '.png'), Buffer.from(shot.data, 'base64'));
    };
    await capture('decouverte-css', '[data-activity-id=regle]');
    for (const id of orders['scratch-debutants']) {
      await navigate(moduleRoute(id, 'scratch-debutants'), data.modules[id].title);
      await capture(id, '.lesson-intro');
      await navigate(moduleRoute(id, 'scratch-debutants') + '&activite=exemple', data.modules[id].title);
      assert.equal(await evaluate('document.activeElement.dataset.activityId'), 'exemple');
      await capture(id + '-exemple', '[data-activity-id=exemple]');
      {
        const countBlocks = blocks => blocks.reduce((sum, block) => sum + 1 + countBlocks(block.children || []), 0);
        const expected = data.modules[id].blocks.filter(b => b.visualScript).reduce((sum, b) => sum + (b.visualScript.stacks ? b.visualScript.stacks.reduce((n, s) => n + countBlocks(s.blocks), 0) : countBlocks(b.visualScript.blocks)), 0);
        assert.equal(await evaluate('document.querySelectorAll(".scratch-script__block").length'), expected);
        assert.equal(await evaluate('document.querySelectorAll("[data-activity-id=exemple] .scratch-quick-steps li").length'), 3);
        assert.equal(await evaluate('document.querySelector("[data-activity-id=exemple] .scratch-explanations").open'), false);
        assert(await evaluate('document.querySelector("[data-activity-id=exemple] .scratch-quick-steps").compareDocumentPosition(document.querySelector("[data-activity-id=exemple] figure")) & Node.DOCUMENT_POSITION_FOLLOWING'));
        await evaluate('document.querySelector("[data-activity-id=exemple] .scratch-explanations").open = true');
        assert(await evaluate('document.querySelector("[data-activity-id=exemple] .scratch-explanations").textContent.length > 100'));
        await evaluate('document.querySelector("[data-activity-id=exemple] .scratch-explanations").open = false');
        for (const width of [320, 390]) {
          await call('Emulation.setDeviceMetricsOverride', { width, height: 844, deviceScaleFactor: 1, mobile: true });
          assert(await evaluate('document.documentElement.scrollWidth <= innerWidth'), 'Modèle Scratch sans débordement');
          await capture(id + '-visuel-' + width, '[data-activity-id=exemple] figure');
        }
        await call('Emulation.setDeviceMetricsOverride', { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false });
      }
      if (id === 'scratch-pilotage') {
        await navigate(moduleRoute(id, 'scratch-debutants') + '&activite=position', data.modules[id].title);
        assert.equal(await evaluate('document.querySelectorAll(".scratch-coordinates").length'), 1);
        assert((await evaluate('document.querySelector(".scratch-coordinates__center").textContent')).includes('x = 0'));
        await capture('scratch-coordonnees', '.scratch-coordinates');
        await call('Emulation.setDeviceMetricsOverride', { width: 320, height: 844, deviceScaleFactor: 1, mobile: true });
        assert(await evaluate('document.documentElement.scrollWidth <= innerWidth'), 'Coordonnées sans débordement');
        await capture('scratch-coordonnees-mobile', '.scratch-coordinates');
        await call('Emulation.setDeviceMetricsOverride', { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false });
      }
      await call('Page.navigate', { url: base.replace('index.html', 'prof.html') + '#guide/' + id });
      await wait('document.querySelector("[data-guide-view] h2")?.textContent === ' + JSON.stringify('Guide professeur — ' + data.modules[id].title));
      await capture('guide-' + id, '[data-guide-view] h2');
    }
    await navigate('#module/web-affiche-numerique?activite=cahier-charges', 'Mon affiche numérique');
    await capture('affiche', '[data-activity-id=cahier-charges]');
    await call('Page.navigate', { url: base.replace('index.html','prof.html') + '#guide/css-decouverte' });
    await wait('document.querySelector("[data-guide-view] h2")?.textContent === "Guide professeur — Découvrir le CSS"');
    await capture('guide-css', '[data-guide-view] h2');
    await navigate('#module/html-fichiers-chemins?activite=arbre','Fichiers et chemins');
    await capture('fichiers-chemins','[data-activity-id=arbre]');
    await navigate('#module/css-feuille-style?activite=liaison','Relier une feuille de style');
    await capture('feuille-style','[data-activity-id=liaison]');
    await call('Page.navigate', { url: base.replace('index.html','prof.html') + '#guide/html-document' });
    await wait('document.querySelector("[data-guide-view] h2")?.textContent === "Guide professeur — Structure d’un document HTML"');
    await capture('guide-document','[data-guide-view] h2');
    for (const [id,activity] of [['html-zones','sections'],['css-textes-lisibles','css'],['css-boites-espacements','css'],['css-dimensions-images','css'],['web-carte-personnelle','cahier-charges'],['html-multipage','navigation'],['web-mini-site','cahier-charges']]) {
      await navigate(moduleRoute(id,'web-debutants')+'&activite='+activity,data.modules[id].title);
      assert.equal(await evaluate('document.activeElement.dataset.activityId'),activity);
      await capture(id,'[data-activity-id='+activity+']');
      await call('Page.navigate',{url:base.replace('index.html','prof.html')+'#guide/'+id});
      await wait('document.querySelector("[data-guide-view] h2")?.textContent === '+JSON.stringify('Guide professeur — '+data.modules[id].title));
      await capture('guide-'+id,'[data-guide-view] h2');
    }
    await mountExample(projectHTML,projectCSS);
    await evaluate('document.getElementById("pedagogy-test").style.height="650px"');
    await resizeExample(500);
    await capture('carte-exemple-large','#pedagogy-test');
    await resizeExample(260);
    await capture('carte-exemple-etroit','#pedagogy-test');
    await evaluate('document.getElementById("pedagogy-test").remove()');
    assert.deepEqual(errors, []);
    console.log('OK : domaines Web/Jeu vidéo, parcours, alias, activités, 23 guides sans fichier privé, Scratch (outil, blocs imbriqués, conditions, navigation, cases temporaires, mobile), ressources partagées, dimensions/proportions/limites/bonus naturel, projet et transfert, zones, typographie, espacements, vrais fichiers locaux, Flexbox et aucune exception JS.');
    console.log('Captures de contrôle : ' + profile);
  } finally {
    if (ws) ws.close();
    chrome.kill();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
