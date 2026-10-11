const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const context = {window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root,'lesson-data.js'),'utf8'),context);
const data = context.window.CODECRAFT_DATA;
const examples = data.pathways['web-debutants'].moduleIds.map(id=>({id,
  demo:data.modules[id].blocks.find(b=>b.demonstration?.type==='web-comparison')?.demonstration}));
const foundationExamples = data.pathways['web-fondations'].moduleIds.flatMap(id=>
  data.modules[id].blocks.filter(b=>b.demonstration?.type==='web-comparison').map(b=>({id,demo:b.demonstration})));
class Node {
  constructor(tag,cls='',text='') {this.tag=tag;this.cls=cls;this.textContent=text;this.children=[];this.style={};this.attrs={};this.events={};}
  append(...items){this.children.push(...items);}
  replaceChildren(...items){this.children=items;}
  setAttribute(name,value){this.attrs[name]=value;}
  addEventListener(name,fn){this.events[name]=fn;}
}
const nodes=n=>[n,...n.children.filter(x=>x instanceof Node).flatMap(nodes)];
const text=n=>typeof n==='string'?n:n.textContent+n.children.map(text).join('');
const app=fs.readFileSync(path.join(root,'app.js'),'utf8');
const fn=app.slice(app.indexOf('  function createWebComparison('),app.indexOf('  function createScratchScript('));
const render=vm.runInNewContext(fn+'\ncreateWebComparison;',{element:(tag,cls,text)=>new Node(tag,cls,text),demoCleanups:[]});

test('Web débutant : les 18 modules ont un support ciblé, sans nouvel exercice obligatoire',()=>{
  assert.equal(examples.length,18);
  for(const {id,demo} of examples){
    assert(demo,id); assert(demo.title && demo.intro && demo.note,id);
    assert(demo.variants.length>=2,id);
    assert(demo.variants.every(v=>v.label && v.html && v.feedback),id);
    for(const v of demo.variants){
      assert.doesNotMatch(v.html+v.css,/<script|on\w+\s*=|(?:src|href)\s*=\s*["']https?:|url\s*\(\s*["']?https?:|@import|<iframe|<form|<link/i,id);
    }
    assert(data.modules[id].blocks.some(b=>['tasks','checklist'].includes(b.type)),id);
  }
});
test('Web : chaque version synchronise code, aperçu isolé et retour ; remise au départ',()=>{
  for(const {demo} of [...examples,...foundationExamples]){
    const tree=render(demo),all=nodes(tree);
    const select=all.find(n=>n.tag==='select'),frame=all.find(n=>n.tag==='iframe');
    const code=all.find(n=>n.tag==='code'),feedback=all.find(n=>n.attrs.role==='status');
    assert(all.find(n=>n.tag==='label').children.includes(select));
    assert.equal(frame.attrs.sandbox,'allow-same-origin'); assert.equal(frame.attrs.referrerpolicy,'no-referrer');
    assert(frame.title.includes(demo.title));
    const initial=frame.srcdoc;
    demo.variants.forEach((v,i)=>{
      select.value=String(i);select.events.change();
      assert(frame.srcdoc.includes(v.html));assert(frame.srcdoc.includes(v.css || ''));
      assert.match(frame.srcdoc,/default-src 'none'/);
      assert.equal(text(code),v.code);assert.equal(feedback.textContent,v.feedback);
      assert.equal(all.find(n=>n.cls==='web-comparison__source').hidden,!v.code);
    });
    all.find(n=>n.tag==='button').events.click();
    assert.equal(select.value,'0');assert.equal(frame.srcdoc,initial);
  }
});
test('Web : les projets autonomes ont des repères, pas une page solution à recopier',()=>{
  for(const id of ['html-revision','html-mini-page','web-carte-personnelle']){
    const demo=examples.find(e=>e.id===id).demo;
    assert(demo.variants.every(v=>v.code===''));
  }
  assert.match(examples.find(e=>e.id==='html-multipage').demo.note,/simule.*vrais liens/);
  assert.match(examples.find(e=>e.id==='css-feuille-style').demo.note,/simulée.*fichiers/);
  assert.match(examples.find(e=>e.id==='html-fichiers-chemins').demo.note,/ne lit ni ne crée/);
  assert.match(examples.find(e=>e.id==='html-images').demo.note,/représente une image absente/);
  assert.match(examples.find(e=>e.id==='css-boites-espacements').demo.note,/margin: 0/);
});

test('Web : code avant aperçu, coloration sans altérer le texte et hauteur adaptée',()=>{
  for(const {demo} of examples){
    const tree=render(demo),all=nodes(tree);
    const layout=all.find(n=>n.cls==='web-comparison__layout');
    assert.equal(layout.children[0].cls,'web-comparison__source');
    assert.equal(layout.children[1].cls,'web-comparison__result');
    const frame=all.find(n=>n.tag==='iframe');
    let height=48;
    frame.contentDocument={body:{getBoundingClientRect:()=>({height})}};
    frame.events.load();assert.equal(frame.style.height,'96px');
    height=180;frame.events.load();assert.equal(frame.style.height,'212px');
    height=600;frame.events.load();assert.equal(frame.style.height,'440px');
    const code=all.find(n=>n.tag==='code');
    assert.equal(text(code),demo.variants[0].code);
    if(demo.variants[0].code.includes('<p>')) assert(nodes(code).some(n=>n.cls==='web-code-token--property'));
    assert(!frame.attrs.sandbox.includes('allow-scripts'));
  }
  const css=fs.readFileSync(path.join(root,'student-lowpoly.css'),'utf8');
  assert.match(css,/web-comparison__layout[^\n]*grid-template-columns: minmax\(0, 1fr\)/);
  assert.match(css,/web-code-token--string[^\n]*#f2d399/);
});

test('Fondations : neuf modules couverts et projets personnels sans modèle complet',()=>{
  assert.equal(new Set(foundationExamples.map(e=>e.id)).size,9);
  for(const id of data.pathways['web-fondations'].moduleIds){
    assert(foundationExamples.some(e=>e.id===id),id);
  }
  const brief = data.modules['html-mini-page-fondations'].blocks.find(b=>b.id==='repere-visuel');
  assert(brief.demonstration.variants.every(v=>v.code===''));
  assert(data.modules['html-mini-page-fondations'].blocks.findIndex(b=>b.id==='defi') < data.modules['html-mini-page-fondations'].blocks.findIndex(b=>b.id==='repere-visuel'));
  assert.equal(foundationExamples.filter(e=>e.id==='css-decouverte').length,2);
  assert.match(foundationExamples.find(e=>e.id==='web-affiche-numerique').demo.note,/pas une affiche finale/);
});
