const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Doz3lAha.js","assets/yamlWorker-Cx1HNfLM.js","assets/monaco-D_himP8N.js","assets/monaco-D6kYW_CN.css"])))=>i.map(i=>d[i]);
import{i as v}from"./dark-C4Ub5OCq.js";import{_ as d}from"./monaco-D_himP8N.js";import{ac as M,E as k,d as y,s as x,C as P,o as a,c as l,ad as F,y as R,z as E,aa as V,u as D,ae as S,r as z,e as r,b as c,n as m,j as h,g as f,w as A,v as I,a as g,x as B}from"./index-BejVI0v1.js";import{u as b}from"./editor-DfJt4eli.js";import{_ as L}from"./All.vue_vue_type_script_setup_true_lang-CFL43yXD.js";import"./yamlWorker-Cx1HNfLM.js";import"./user-B6FIWLqE.js";async function W(){if(window.monaco)return{monaco:window.monaco};const{configureMonacoYaml:_}=await d(async()=>{const{configureMonacoYaml:e}=await import("./index-Doz3lAha.js");return{configureMonacoYaml:e}},__vite__mapDeps([0,1,2,3])),o=await d(()=>import("./monaco-D_himP8N.js").then(e=>e.e),__vite__mapDeps([2,3])),i=_(o,{});return window.monaco=o,await Promise.all([(async()=>{const[{default:e},{default:t}]=await Promise.all([d(()=>import("./editor.worker-D3YEaI5b.js"),[]),d(()=>import("./workaround-yaml.worker-SRyNAxIp.js"),[])]);window.MonacoEnvironment={getWorker(n,s){switch(s){case"editorWorkerService":return new e;case"yaml":return new t;default:throw new Error(`Unknown label ${s}`)}}}})()]),i.update({enableSchemaRequest:!0,hover:!0,completion:!0,validate:!0,format:!0,schemas:[{uri:"/schema/resume.schema.json",fileMatch:["*.yml","*.yaml"]}]}),M()&&await new Promise(e=>k(e)),{monaco:o}}const J=y({__name:"MonacoEditor",setup(_){const o=b(),i=x();async function e(){if(F){const t=R(),{monaco:n}=await W();i.value&&!o.codeEditor&&(t.value=n.editor.create(i.value,{language:"yaml",theme:v.value?"vs-dark":"vs",wordWrap:"on",model:n.editor.createModel(o.resumeText,"yaml",n.Uri.parse("resume.yml")),value:o.resumeText}),globalThis.addEventListener("resize",()=>{var s;(s=t.value)==null||s.layout()}),o.setEditor(t.value),t.value.onDidChangeModelContent(s=>{t.value&&o.setResumeText(t.value.getValue())})),E(v,s=>{n.editor.setTheme(s?"vs-dark":"vs")})}}return k(()=>{e()}),P(()=>{var t,n,s;(n=(t=o.codeEditor)==null?void 0:t.getModel())==null||n.dispose(),(s=o.codeEditor)==null||s.dispose(),o.codeEditor=null}),(t,n)=>(a(),l("div",{id:"editor-container",ref_key:"container",ref:i},null,512))}}),O={key:0,class:"editor-page text-center",relative:""},Y={key:0,"i-ri-fullscreen-line":""},j={key:1,"i-ri-fullscreen-exit-line":""},N={class:"editor-container w-1/2 h-full lt-sm:w-full lt-sm:h-1/2"},U={key:1,"z-101":"",relative:"","bg-white":"","dark:bg-black":""},$={overflow:"auto",class:"bg-white dark:bg-black w-full"},ee=y({__name:"editor",setup(_){const o=b(),i=x(o.resumeText);V(async()=>{o.resumeText||await o.reset()});const e=D(),t=S(e,"isFullscreen");let n=!1;return E(()=>e.isPrinting,s=>{s?(n=e.isFullscreen,e.isFullscreen=s):e.isFullscreen=n}),(s,u)=>{const p=L,C=J,T=z("client-only");return r(t)?(a(),l("div",U,[c("div",$,[r(o).resumeJson?(a(),h(p,{key:0,class:"resume min-w-500px",resume:r(o).resumeJson},null,8,["resume"])):f("",!0)]),r(e).isPrinting?f("",!0):(a(),l("button",{key:0,transition:"",absolute:"","top-2":"","right-2":"",p:"2",op:"60",hover:"bg-gray text-white","rounded-full":"",onClick:u[1]||(u[1]=(...w)=>r(e).toggleFullscreen&&r(e).toggleFullscreen(...w))},u[2]||(u[2]=[c("div",{"i-ri-fullscreen-exit-line":""},null,-1)])))])):(a(),l("div",O,[c("div",{class:m(["<sm:flex-col",{"preview-container":!r(t)}]),flex:"~","text-left":"",justify:"center",items:"center"},[c("div",{class:m(["shadow h-full",r(t)?"z-101":"z-99 resume-container w-1/2 lt-sm:w-full lt-sm:h-1/2"]),relative:"",overflow:"hidden"},[c("div",{overflow:"auto",class:m({"fixed top-0 left-0 right-0 bottom-0 bg-white dark:bg-black w-full":r(t),"w-full h-full absolute":!r(t)})},[r(o).resumeJson?(a(),h(p,{key:0,class:"resume min-w-500px",resume:r(o).resumeJson},null,8,["resume"])):f("",!0)],2),r(e).isPrinting?f("",!0):(a(),l("button",{key:0,transition:"",class:m(r(t)?"fixed":"absolute"),"top-2":"","right-2":"",p:"2",op:"60",hover:"bg-gray text-white","rounded-full":"",onClick:u[0]||(u[0]=(...w)=>r(e).toggleFullscreen&&r(e).toggleFullscreen(...w))},[r(t)?(a(),l("div",j)):(a(),l("div",Y))],2))],2),A(c("div",N,[g(T,null,{default:B(()=>[g(C,{text:r(i)},null,8,["text"])]),_:1})],512),[[I,!r(t)]])],2)]))}}});export{ee as default};
