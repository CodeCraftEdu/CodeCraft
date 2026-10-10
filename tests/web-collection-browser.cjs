// Fixture de recette non publiée : pas de solution complète dans le projet élève.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const http = require('node:http');
const { execFile } = require('node:child_process');
const { promisify } = require('node:util');
const run = promisify(execFile);
const fixture = `<!doctype html><html lang="fr"><meta charset="utf-8"><title>Recette collection</title>
<style>body{margin:0}.cartes{display:flex;flex-direction:row;gap:20px;justify-content:flex-start;align-items:center;flex-wrap:wrap;width:520px;max-width:100%}.carte{box-sizing:border-box;width:160px;min-width:160px;margin:0;padding:12px;border:2px solid #52634a;background:#f5f2e8}</style>
<div class="cartes"><div class="carte"><h2>A</h2><p>Un texte court.</p></div><div class="carte"><h2>B</h2><p>Un texte plus long avec des mots ordinaires pour observer une hauteur différente sur la même ligne de cartes.</p></div><div class="carte"><h2>C</h2><p>Un autre texte.</p></div><div class="carte"><h2>D</h2><p>Une quatrième idée.</p></div></div>
<pre id="result"></pre><script>
addEventListener('load',()=>{try {
  const parent=document.querySelector('.cartes'), cards=()=>[...parent.children], rect=e=>e.getBoundingClientRect();
  const check=(condition,message)=>{if(!condition)throw Error(message)};
  const rows=()=>new Set(cards().map(e=>Math.round(rect(e).top+rect(e).height/2))).size;
  check(cards().length===4,'Quatre cartes au départ');
  const a=rect(cards()[0]), b=rect(cards()[1]);
  check(b.height>a.height+20,'Texte long : hauteur différente');
  check(Math.abs((a.top+a.height/2)-(b.top+b.height/2))<1,'Centrage transversal en row');
  check(rows()===2,'Largeur 520 : plusieurs lignes');
  const fifth=document.createElement('div');fifth.className='carte';fifth.innerHTML='<h2>E</h2><p>Une cinquième idée.</p>';parent.append(fifth);
  check(Math.abs(rect(fifth).width-160)<1,'Classe commune sur la cinquième carte');
  parent.style.width='300px';
  check(rows()===5,'Largeur 300 : retour à la ligne');
  check(parent.scrollWidth<=parent.clientWidth+1,'Pas de dépassement du parent à 300');
  cards()[0].querySelector('p').textContent+=' Une phrase supplémentaire avec des mots ordinaires permet de tester la lisibilité.';
  check(cards().every(e=>e.scrollHeight<=e.clientHeight+1),'Contenu visible après ajout du texte');
  parent.style.flexWrap='nowrap';
  check(parent.scrollWidth>parent.clientWidth,'Sans wrap : débordement observé');
  parent.style.flexWrap='wrap';parent.style.width='520px';parent.style.flexDirection='column';parent.style.alignItems='center';
  const offset=rect(cards()[0]).left-rect(parent).left;
  check(Math.abs(offset-180)<1,'Centrage horizontal en column');
  parent.style.alignItems='flex-start';
  check(Math.abs(rect(cards()[0]).left-rect(parent).left)<1,'Annulation du seul centrage');
  document.querySelector('#result').textContent='COLLECTION_OK';
}catch(error){document.querySelector('#result').textContent='COLLECTION_ERROR: '+error.message}});
</script></html>`;

(async () => {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'codecraft-collection-'));
  const profile = path.join(temp, 'profile');
  const server = http.createServer((req, res) => { res.setHeader('Content-Type', 'text/html; charset=utf-8'); res.end(fixture); });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  try {
    const { stdout } = await run('C:/Program Files/Google/Chrome/Application/chrome.exe', [
      '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
      '--user-data-dir=' + profile, '--window-size=900,1100', '--virtual-time-budget=1500', '--dump-dom',
      'http://127.0.0.1:' + server.address().port
    ], { windowsHide: true, timeout: 30000, maxBuffer: 2000000 });
    const result = stdout.match(/<pre id="result">([^<]*)<\/pre>/)?.[1];
    assert.equal(result, 'COLLECTION_OK');
    console.log('OK : parent, alignement row, cinquième carte, wrap 520/300, texte visible et axes en column.');
  } finally {
    await new Promise(resolve => server.close(resolve));
    assert.equal(path.dirname(path.resolve(profile)), path.resolve(temp));
    assert.equal(path.basename(profile), 'profile');
    try { fs.rmSync(profile, { recursive: true, force: true, maxRetries: 20, retryDelay: 100 }); }
    catch (error) {
      if (!['EPERM', 'EBUSY'].includes(error.code)) throw error;
      await run('powershell.exe', ['-NoProfile', '-Command', 'Remove-Item -LiteralPath $env:CODECRAFT_COLLECTION_PROFILE -Recurse -Force -ErrorAction Stop'],
        { windowsHide: true, timeout: 15000, env: { ...process.env, CODECRAFT_COLLECTION_PROFILE: profile } });
    }
    fs.rmdirSync(temp);
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
