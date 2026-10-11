const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { loadCatalog } = require('../scripts/catalog/load-catalog.cjs');
const { withBrowser } = require('./helpers/browser.cjs');
withBrowser(async ({ call, evaluate, wait, navigate, origin, screenshot, profile }) => {
  const data = loadCatalog();
  for (const module of Object.values(data.modules))
    for (const resource of module.resources || []) resource.imageURL = origin + resource.path;
  await navigate('index.html', '', 'CodeCraft');
  const block = (id, activity) => data.modules[id].blocks.find((b) => b.id === activity);
  const mountExample = async (html, cssText) => {
    await evaluate('document.getElementById("pedagogy-test")?.remove()');
    await evaluate(
      `new Promise(resolve => { const f=document.createElement('iframe'); f.id='pedagogy-test'; f.onload=resolve; f.srcdoc=${JSON.stringify('<style>' + cssText + '</style>' + html)}; document.body.append(f); })`,
    );
  };
  const exampleEval = (js) =>
    evaluate(
      `(() => { const doc=document.getElementById('pedagogy-test').contentDocument; const style=el=>doc.defaultView.getComputedStyle(el); ${js} })()`,
    );
  // Dimensions : utiliser les extraits et les sources réels, sans code d'image fictif.
  const circle = data.modules['html-images'].resources.find((r) => r.id === 'cercle-orange');
  const square = data.modules['html-images'].resources.find((r) => r.id === 'carre-bleu');
  const sizingHTML = block('css-dimensions-images', 'html')
    .code.replace('src=""', 'src="' + circle.imageURL + '"')
    .replace('alt=""', 'alt="Un cercle orange"');
  const sizingCSS = block('css-dimensions-images', 'css').code;
  const near = (value, expected) =>
    assert(Math.abs(value - expected) < 0.1, value + ' attendu ' + expected);
  const resizeExample = async (width) => {
    await evaluate(
      'document.getElementById("pedagogy-test").style.width=' + JSON.stringify(width + 'px'),
    );
    await exampleEval(
      'return new Promise(resolve=>doc.defaultView.requestAnimationFrame(()=>resolve()));',
    );
  };
  const sizes = () =>
    exampleEval(
      'const c=doc.querySelector(".carte"),i=doc.querySelector("img"),cr=c.getBoundingClientRect(),ir=i.getBoundingClientRect();return {card:cr.width,image:ir.width,height:ir.height,ratio:i.naturalWidth/i.naturalHeight,parent:doc.body.clientWidth,overflows:doc.documentElement.scrollWidth>doc.documentElement.clientWidth};',
    );
  await mountExample(sizingHTML, sizingCSS);
  await resizeExample(500);
  let measured = await sizes();
  near(measured.card, 320);
  near(measured.image, 284);
  near(measured.height, 213);
  assert.equal(measured.overflows, false);
  await exampleEval('doc.styleSheets[0].cssRules[0].style.width="240px";');
  measured = await sizes();
  near(measured.card, 240);
  near(measured.image, 204);
  near(measured.height, 153);
  await exampleEval('doc.styleSheets[0].cssRules[0].style.width="320px";');
  for (const width of [260, 390, 500]) {
    await resizeExample(width);
    measured = await sizes();
    near(measured.card, Math.min(320, measured.parent));
    near(measured.image, measured.card - 36);
    near(measured.image / measured.height, measured.ratio);
    assert.equal(measured.overflows, false, 'Exemple contenu dans ' + width + 'px');
  }
  await exampleEval(
    'const i=doc.querySelector("img");i.src=' +
      JSON.stringify(square.imageURL) +
      ';i.alt="Un carré bleu";return i.decode();',
  );
  await exampleEval(
    'const s=doc.styleSheets[0].cssRules[0].style;s.width="280px";s.padding="24px";',
  );
  measured = await sizes();
  near(measured.card, 280);
  near(measured.image, 228);
  near(measured.height, 171);
  // Panne déformation, puis réparation par la seule hauteur.
  await mountExample(sizingHTML, sizingCSS + '\n' + block('css-dimensions-images', 'panne').code);
  await resizeExample(500);
  measured = await sizes();
  near(measured.height, 80);
  assert(Math.abs(measured.image / measured.height - measured.ratio) > 0.5);
  await exampleEval('doc.styleSheets[0].cssRules[2].style.height="auto";');
  measured = await sizes();
  near(measured.image / measured.height, measured.ratio);
  // La carte peut dépasser même avec une image proportionnée.
  await exampleEval('doc.styleSheets[0].cssRules[0].style.removeProperty("max-width");');
  await resizeExample(260);
  assert.equal((await sizes()).overflows, true);
  await exampleEval('doc.styleSheets[0].cssRules[0].style.maxWidth="100%";');
  assert.equal((await sizes()).overflows, false);
  // Bonus naturel : pas d'agrandissement, puis réduction quand le contenu manque.
  const naturalCSS = block('css-dimensions-images', 'bonus-detail').blocks[0].code;
  await mountExample(sizingHTML, sizingCSS + '\n' + naturalCSS);
  await resizeExample(500);
  measured = await sizes();
  near(measured.image, 160);
  near(measured.height, 120);
  await exampleEval('doc.styleSheets[0].cssRules[0].style.width="160px";');
  measured = await sizes();
  near(measured.image, 124);
  near(measured.height, 93);
  // Réalisation possible décrite dans le guide : ajout du second texte et style partagé.
  const projectHTML = sizingHTML
    .replace('<h2>Un dessin à observer</h2>', '<h1 class="titre">Un signal orange</h1>')
    .replace('<p>', '<p class="lecture">')
    .replace(
      '</p>',
      '</p><p class="lecture">Ce signe imaginaire invite à observer les détails.</p>',
    );
  const projectCSS =
    sizingCSS +
    '\n.lecture { font-family: sans-serif; font-size: 18px; line-height: 1.5; }\n.titre { font-size: 28px; }\n.carte { color: black; }';
  await mountExample(projectHTML, projectCSS);
  for (const width of [500, 260]) {
    await resizeExample(width);
    measured = await sizes();
    assert.equal(measured.overflows, false);
    near(measured.image / measured.height, measured.ratio);
  }
  const previousHeight = await exampleEval(
    'return doc.querySelector(".carte").getBoundingClientRect().height;',
  );
  assert(
    (await exampleEval(
      'const p=doc.querySelector("p");p.textContent+=" Je complète mon observation avec plusieurs mots ordinaires pour raconter ce que je vois.";return doc.querySelector(".carte").getBoundingClientRect().height;',
    )) > previousHeight,
  );
  assert.equal(await exampleEval('return doc.querySelectorAll(".lecture").length;'), 2);
  await exampleEval(
    'doc.styleSheets[0].cssRules[2].style.lineHeight="1.7";doc.styleSheets[0].cssRules[0].style.width="280px";',
  );
  assert.deepEqual(
    await exampleEval(
      'return Array.from(doc.querySelectorAll(".lecture"),p=>[style(p).fontSize,style(p).lineHeight]);',
    ),
    [
      ['18px', '30.6px'],
      ['18px', '30.6px'],
    ],
  );
  await resizeExample(500);
  near((await sizes()).card, 280);
  // Zones : vérifier l'arbre réel, pas seulement une page qui s'affiche.
  await mountExample(block('html-zones', 'exemple').code, '');
  assert.deepEqual(await exampleEval('return Array.from(doc.body.children,e=>e.tagName);'), [
    'HEADER',
    'MAIN',
    'FOOTER',
  ]);
  assert.equal(
    await exampleEval('return doc.querySelector("h1").parentElement.tagName;'),
    'HEADER',
  );
  assert.equal(await exampleEval('return doc.querySelector("h2").parentElement.tagName;'), 'MAIN');
  const sectionVariant = block('html-zones', 'sections').code;
  await mountExample(
    block('html-zones', 'exemple').code.replace(/<main>[\s\S]*?<\/main>/, sectionVariant),
    '',
  );
  assert.equal(await exampleEval('return doc.querySelectorAll("main").length;'), 1);
  assert.equal(await exampleEval('return doc.querySelectorAll("main > section > h2").length;'), 2);
  assert.deepEqual(
    await exampleEval(
      'const m=doc.querySelector("main");m.append(m.firstElementChild.cloneNode(true));return Array.from(m.children,s=>[s.tagName,s.parentElement.tagName,s.querySelector("h2").parentElement.tagName]);',
    ),
    Array(3).fill(['SECTION', 'MAIN', 'SECTION']),
  );
  await mountExample(block('html-zones', 'panne').code, '');
  assert.equal(
    await exampleEval('return doc.querySelector("main").parentElement.tagName;'),
    'HEADER',
  );
  assert.equal(
    await exampleEval(
      'const h=doc.querySelector("header"),m=doc.querySelector("main");h.after(m);return m.parentElement.tagName;',
    ),
    'BODY',
  );
  const navCode = block('html-zones', 'bonus-navigation').blocks[0].code;
  await mountExample(navCode, '');
  assert.deepEqual(
    await exampleEval(
      'return Array.from(doc.querySelectorAll("nav a"),a=>a.getAttribute("href"));',
    ),
    ['https://developer.mozilla.org/fr/', 'https://www.w3.org/'],
  );
  // Typographie : mêmes textes, vrais styles calculés et consigne sans nom de propriété.
  await mountExample(
    block('css-textes-lisibles', 'html').code,
    block('css-textes-lisibles', 'css').code,
  );
  await evaluate('document.getElementById("pedagogy-test").style.width="360px"');
  assert.deepEqual(
    await exampleEval(
      'return Array.from(doc.querySelectorAll("p"),p=>[style(p).fontSize,style(p).lineHeight,style(p).textAlign]);',
    ),
    Array(2).fill(['18px', '27px', 'left']),
  );
  assert(
    await exampleEval(
      'const p=doc.querySelector("p");return p.getBoundingClientRect().height>=3*parseFloat(style(p).lineHeight);',
    ),
    'Au moins trois lignes réellement visibles',
  );
  const setReading = (value) =>
    exampleEval(
      'doc.styleSheets[0].cssRules[1].style.lineHeight=' +
        JSON.stringify(value) +
        ';const p=doc.querySelector("p");return [style(p).fontSize,style(p).lineHeight,p.getBoundingClientRect().height];',
    );
  const tight = await setReading('1'),
    airy = await setReading('1.5');
  assert.deepEqual(tight.slice(0, 2), ['18px', '18px']);
  assert.deepEqual(airy.slice(0, 2), ['18px', '27px']);
  assert(airy[2] > tight[2], 'Interligne observable, lettres inchangées');
  const transferred = await setReading('1.7');
  assert.equal(transferred[0], '18px');
  assert(Math.abs(parseFloat(transferred[1]) - 30.6) < 0.01);
  assert.deepEqual(
    await exampleEval(
      'const h=doc.querySelector("h1");return [style(h).fontSize,style(h).lineHeight,style(h).textAlign];',
    ),
    ['28px', '33.6px', 'center'],
  );
  assert.deepEqual(
    await exampleEval(
      'const p=doc.querySelector("p").cloneNode(true);doc.body.append(p);return [style(p).fontSize,style(p).lineHeight];',
    ),
    ['18px', '30.6px'],
  );
  // Alignement des mots : la boîte ne se déplace pas.
  const boxBefore = await exampleEval(
    'const r=doc.querySelector("h1").getBoundingClientRect();return [r.x,r.width];',
  );
  assert.deepEqual(
    await exampleEval(
      'doc.styleSheets[0].cssRules[0].style.textAlign="right";const r=doc.querySelector("h1").getBoundingClientRect();return [r.x,r.width];',
    ),
    boxBefore,
  );
  await mountExample(
    block('css-textes-lisibles', 'html').code,
    block('css-textes-lisibles', 'panne').code,
  );
  assert.deepEqual(
    await exampleEval('const s=style(doc.querySelector("p"));return [s.fontSize,s.lineHeight];'),
    ['24px', '19.2px'],
  );
  assert.deepEqual(
    await exampleEval(
      'doc.styleSheets[0].cssRules[0].style.lineHeight="1.5";const s=style(doc.querySelector("p"));return [s.fontSize,s.lineHeight];',
    ),
    ['24px', '36px'],
  );
  // Boîtes : distances mesurées à gauche, sans dimensions/Flexbox injectés.
  await mountExample(
    block('css-boites-espacements', 'html').code,
    block('css-boites-espacements', 'css').code,
  );
  const boxGeometry = () =>
    exampleEval(
      'const a=doc.querySelector(".atelier"),c=doc.querySelector(".carte"),h=c.querySelector("h2"),ar=a.getBoundingClientRect(),cr=c.getBoundingClientRect(),hr=h.getBoundingClientRect();return {outside:cr.x-ar.x-parseFloat(style(a).borderLeftWidth),inside:hr.x-cr.x-parseFloat(style(c).borderLeftWidth),border:parseFloat(style(c).borderLeftWidth),parent:style(a).backgroundColor,card:style(c).backgroundColor,childMargin:style(h).marginLeft};',
    );
  const baseBox = await boxGeometry();
  assert.deepEqual(baseBox, {
    outside: 12,
    inside: 16,
    border: 2,
    parent: 'rgb(211, 211, 211)',
    card: 'rgb(255, 255, 255)',
    childMargin: '0px',
  });
  await exampleEval('doc.styleSheets[0].cssRules[1].style.padding="24px";');
  assert.deepEqual(await boxGeometry(), { ...baseBox, inside: 24 });
  await exampleEval('doc.styleSheets[0].cssRules[1].style.margin="24px";');
  assert.deepEqual(await boxGeometry(), { ...baseBox, outside: 24, inside: 24 });
  await exampleEval('doc.styleSheets[0].cssRules[1].style.borderWidth="6px";');
  assert.deepEqual(await boxGeometry(), { ...baseBox, outside: 24, inside: 24, border: 6 });
  assert.equal(
    await exampleEval(
      'const a=doc.querySelector(".atelier");a.append(a.firstElementChild.cloneNode(true));return Array.from(a.children).filter(c=>style(c).paddingLeft==="24px" && style(c).marginLeft==="24px").length;',
    ),
    3,
  );
  await mountExample(
    block('css-boites-espacements', 'html').code,
    block('css-boites-espacements', 'css').code +
      '\n' +
      block('css-boites-espacements', 'panne').code,
  );
  assert.deepEqual(await boxGeometry(), { ...baseBox, outside: 32, inside: 0 });
  await exampleEval('doc.styleSheets[0].cssRules[4].style.padding="16px";');
  assert.deepEqual(await boxGeometry(), { ...baseBox, outside: 32, inside: 16 });
  // Deux variantes facultatives : ne changent ni police ni épaisseur.
  await mountExample(
    block('css-boites-espacements', 'html').code,
    block('css-boites-espacements', 'css').code,
  );
  for (const [padding, margin] of [
    [8, 8],
    [24, 20],
  ]) {
    await exampleEval(
      'const s=doc.styleSheets[0].cssRules[1].style;s.padding=' +
        JSON.stringify(padding + 'px') +
        ';s.margin=' +
        JSON.stringify(margin + 'px') +
        ';',
    );
    assert.deepEqual(await boxGeometry(), { ...baseBox, outside: margin, inside: padding });
  }
  await mountExample(
    block('css-decouverte', 'html').code,
    block('css-decouverte', 'regle').code + block('css-decouverte', 'paragraphes').code,
  );
  assert.deepEqual(
    await exampleEval(
      'return [style(doc.querySelector("h1")).color, style(doc.querySelector("h1")).backgroundColor, ...Array.from(doc.querySelectorAll("p"),p=>style(p).backgroundColor)];',
    ),
    ['rgb(0, 0, 255)', 'rgb(255, 255, 255)', 'rgb(255, 255, 224)', 'rgb(255, 255, 224)'],
  );
  assert.deepEqual(
    await exampleEval(
      'const p=doc.createElement("p");p.textContent="Troisième";doc.body.append(p);return [style(p).color,style(p).backgroundColor];',
    ),
    ['rgb(0, 0, 0)', 'rgb(255, 255, 224)'],
  );
  assert.deepEqual(
    await exampleEval(
      'doc.styleSheets[0].cssRules[1].style.backgroundColor="white";return [style(doc.querySelector("p")).color,style(doc.querySelector("p")).backgroundColor];',
    ),
    ['rgb(0, 0, 0)', 'rgb(255, 255, 255)'],
  );
  await mountExample(
    block('css-classes-couleurs', 'panne').code,
    block('css-classes-couleurs', 'panne-css').code,
  );
  assert.deepEqual(
    await exampleEval('return Array.from(doc.querySelectorAll("p"),p=>style(p).color);'),
    ['rgb(0, 128, 0)', 'rgb(0, 0, 0)'],
  );
  assert.deepEqual(
    await exampleEval(
      'doc.querySelectorAll("p")[1].className="info";return Array.from(doc.querySelectorAll("p"),p=>style(p).color);',
    ),
    ['rgb(0, 128, 0)', 'rgb(0, 128, 0)'],
  );
  await mountExample(
    block('web-affiche-numerique', 'exemple-html').code,
    block('web-affiche-numerique', 'exemple-css').code,
  );
  assert.deepEqual(
    await exampleEval(
      'return [style(doc.querySelector("h1")).color,style(doc.querySelector("h1")).backgroundColor];',
    ),
    ['rgb(255, 255, 255)', 'rgb(0, 0, 128)'],
  );
  assert.deepEqual(
    await exampleEval(
      'const p=doc.querySelector("p");doc.body.append(p.cloneNode(true),p.cloneNode(true));doc.styleSheets[0].cssRules[1].style.backgroundColor="white";return Array.from(doc.querySelectorAll("p"),p=>[style(p).color,style(p).backgroundColor]);',
    ),
    Array(3).fill(['rgb(0, 0, 0)', 'rgb(255, 255, 255)']),
  );
  // Le cadre local fourni donne le même résultat après insertion des extraits.
  const local = block('css-decouverte', 'projet-local')
    .blocks[0].code.replace(
      '/* Colle les règles CSS ici. */',
      block('css-decouverte', 'regle').code,
    )
    .replace('<!-- Colle le contenu HTML ici. -->', block('css-decouverte', 'html').code);
  await mountExample(local, '');
  assert.equal(await exampleEval('return style(doc.querySelector("h1")).color;'), 'rgb(0, 0, 255)');
  await evaluate('document.getElementById("pedagogy-test").remove()');

  const files = path.join(profile, 'local-project');
  fs.mkdirSync(path.join(files, 'images'), { recursive: true });
  const image = path.join(files, 'images/carre-bleu.png');
  fs.copyFileSync(path.resolve(__dirname, '../assets/exercices/carre-bleu.png'), image);
  const htmlFile = path.join(files, 'index.html');
  const source = block('html-fichiers-chemins', 'exemple').code;
  fs.writeFileSync(htmlFile, source);
  const openFile = async () => {
    await call('Page.navigate', { url: pathToFileURL(htmlFile).href });
    await wait('document.readyState === "complete" && location.protocol === "file:"');
  };
  await openFile();
  await wait('document.querySelector("img")?.naturalWidth === 160');
  assert.equal(await evaluate('document.querySelector("a").href'), pathToFileURL(image).href);
  fs.renameSync(image, path.join(files, 'images/forme.png'));
  await call('Page.reload', { ignoreCache: true });
  await wait(
    'document.querySelector("img")?.complete && document.querySelector("img").naturalWidth === 0',
  );
  fs.writeFileSync(htmlFile, source.replaceAll('images/carre-bleu.png', 'images/forme.png'));
  await openFile();
  await wait('document.querySelector("img")?.naturalWidth === 160');
  await screenshot('local-image-path');
  fs.writeFileSync(htmlFile, block('css-feuille-style', 'html').code);
  fs.writeFileSync(path.join(files, 'style.css'), block('css-feuille-style', 'css').code);
  await openFile();
  await wait('document.title === "Mon premier style externe"');
  assert.equal(
    await evaluate('getComputedStyle(document.querySelector("h1")).color'),
    'rgb(0, 0, 255)',
  );
  fs.writeFileSync(path.join(files, 'style.css'), 'h1 { color: green; }');
  await call('Page.reload', { ignoreCache: true });
  await wait('getComputedStyle(document.querySelector("h1")).color === "rgb(0, 128, 0)"');
  await screenshot('local-stylesheet');
  console.log(
    'Web examples passed: real catalogue snippets, image proportions, sizing, selectors, boxes and local CSS.',
  );
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
