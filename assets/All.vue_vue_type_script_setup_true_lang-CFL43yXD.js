import{d as y,ae as M,e as i,o as e,c as t,b as n,f as l,g as _,k as L,a as k,F as h,i as f,ab as v,j as $,n as I,t as x,s as H,E as w,ag as S,ah as N,ai as A}from"./index-BejVI0v1.js";const P={key:0,class:"text-center",mt:"2"},R=["href"],z={class:"text-monospace"},B=y({__name:"Footer",props:{footer:{}},setup(p){const o=M(p,"footer");return(a,s)=>i(o)?(e(),t("div",P,[n("a",{href:i(o).link,target:"_blank"},[n("small",z,l(i(o).link),1)],8,R)])):_("",!0)}}),E={class:"icon-container"},O=["data-icon"],g=y({__name:"IconifyIcon",props:{icon:{default:"ri:question-mark"}},setup(p){const c=p;return(o,a)=>(e(),t("span",E,[n("span",{class:"iconify","data-icon":c.icon},null,8,O)]))}}),V=["href"],W={class:"resume-contact-label","inline-flex":""},F=y({__name:"Phone",props:{contact:{}},setup(p){const c=p,o=L(()=>{const a=c.contact.label.toString();return a.length!==11?a:[a.slice(0,3),a.slice(3,7),a.slice(7,11)]});return(a,s)=>{const u=g;return e(),t("a",{class:"text-decoration-none font-medium",href:a.contact.href,target:"_blank","inline-flex":""},[k(u,{icon:a.contact.icon},null,8,["icon"]),n("span",W,[Array.isArray(i(o))?(e(!0),t(h,{key:0},f(i(o),(d,r)=>(e(),t("span",{key:r,ml:"1"},l(d),1))),128)):(e(),t(h,{key:1},[v(l(i(o)),1)],64))])],8,V)}}}),D={key:0},Y={key:0,class:"flex justify-between items-center"},q={class:"font-normal flex flex-col gap-2"},K={class:"text-4xl"},G={"text-xs":""},J=["src"],Q={key:1,class:"font-normal text-center text-4xl"},U={"text-xs":""},X={class:"flex justify-center mt-2 wr-basic-info text-xs"},Z={key:0},ee={key:1},te={key:2},se={key:3},ne={class:"my-4 text-center list-none",flex:"~ wrap",justify:"center",items:"center",text:"0.9em"},oe=["href"],ie={"inline-flex":"",class:"resume-contact-label",ml:"1"},re=y({__name:"Header",props:{resume:{}},setup(p){const c=p,o=M(c,"resume"),a=L(()=>c.resume.name||c.resume.basics.name);return(s,u)=>{const d=F,r=g;return i(o)?(e(),t("div",D,[i(o).basics.avatar?(e(),t("div",Y,[n("div",q,[n("span",K,l(i(a)||"Your Name"),1),n("small",G,l(i(o).basics.label),1)]),n("img",{src:i(o).basics.avatar,class:"max-h-3cm max-w-3cm"},null,8,J)])):(e(),t("h1",Q,[v(l(i(a)||"Your Name")+" ",1),u[0]||(u[0]=n("br",null,null,-1)),n("small",U,l(i(o).basics.label),1)])),n("small",X,[i(o).basics.age?(e(),t("span",Z,l(i(o).basics.age),1)):_("",!0),i(o).basics.sex?(e(),t("span",ee,l(i(o).basics.sex),1)):_("",!0),i(o).basics.birth?(e(),t("span",te,l(i(o).basics.birth),1)):_("",!0),i(o).basics.location?(e(),t("span",se,l(i(o).basics.location),1)):_("",!0)]),n("ul",ne,[(e(!0),t(h,null,f(i(o).contact,(m,b)=>(e(),t("li",{key:m.label,class:"mx-3","inline-flex":"",justify:"center",items:"center"},[b==="phone"?(e(),$(d,{key:0,contact:m},null,8,["contact"])):(e(),t("a",{key:1,class:"text-decoration-none font-medium",href:m.href,target:"_blank","inline-flex":"",justify:"center",items:"center"},[m.icon.startsWith("i-")?(e(),t("div",{key:0,"inline-flex":"",class:I(m.icon)},null,2)):(e(),$(r,{key:1,icon:m.icon},null,8,["icon"])),n("span",ie,l(m.label),1)],8,oe))]))),128))])])):_("",!0)}}}),ce={key:0},le={class:"font-black text-kaiti"},ae={key:0},ue={class:"float-right",font:"mono"},_e=y({__name:"Item",props:{history:{}},setup(p){const o=M(p,"history");return(a,s)=>{const u=g;return i(o)?(e(),t("li",ce,[n("span",le,l(i(o).name),1),i(o).place?(e(),t("span",ae,[k(u,{class:"position-icon",icon:"ri:map-pin-line"}),v(" "+l(i(o).place),1)])):_("",!0),n("span",ue,l(i(o).time),1)])):_("",!0)}}}),pe={class:"text-2xl font-medium"},j=y({__name:"Title",props:{icon:{},title:{}},setup(p){const c=p,{icon:o,title:a}=x(c);return(s,u)=>{const d=g;return e(),t("div",null,[n("h2",pe,[i(o)?(e(),$(d,{key:0,icon:i(o),class:"title-icon"},null,8,["icon"])):_("",!0),n("span",null,l(i(a)),1)]),u[0]||(u[0]=n("hr",null,null,-1))])}}}),me={key:0},de={class:"list-disc"},he=y({__name:"Certificate",props:{certificate:{default:null}},setup(p){return(c,o)=>{const a=j,s=_e;return c.certificate?(e(),t("div",me,[k(a,{icon:c.certificate.icon,title:c.certificate.title},null,8,["icon","title"]),n("ul",de,[(e(!0),t(h,null,f(c.certificate.histories,(u,d)=>(e(),$(s,{key:d,history:u},null,8,["history"]))),128))])])):_("",!0)}}}),fe={key:0},ye=["src"],ke={key:1,class:"mr-1"},$e={class:"float-right"},be={"mt-0.5":"","text-sm":""},ge={key:0},ve=y({__name:"Education",props:{education:{default:null}},setup(p){return(c,o)=>{const a=j;return c.education?(e(),t("div",fe,[k(a,{icon:c.education.icon,title:c.education.title},null,8,["icon","title"]),(e(!0),t(h,null,f(c.education.histories,(s,u)=>(e(),t("div",{key:u,class:"ml-2 mb-2"},[n("div",null,[s.logo?(e(),t("img",{key:0,class:"school-logo",src:s.logo},null,8,ye)):s.icon?(e(),t("span",ke,[k(g,{icon:s.icon},null,8,["icon"])])):_("",!0),n("span",null,[n("strong",null,l(s.school),1),k(g,{class:"position-icon",icon:"ri:map-pin-line"}),v(" "+l(s.city),1)]),n("span",$e,l(`${s.start} ~ ${s.end}`),1)]),n("div",be,[n("span",null,l(s.studyType),1),o[0]||(o[0]=v("， ")),n("span",null,l(s.area),1),s.grade?(e(),t("span",ge,"，"+l(s.grade),1)):_("",!0)])]))),128))])):_("",!0)}}}),je={key:0},xe={class:"list-disc"},Te=y({__name:"Other",props:{other:{default:null}},setup(p){return(c,o)=>{const a=j;return c.other?(e(),t("div",je,[k(a,{icon:c.other.icon,title:c.other.title},null,8,["icon","title"]),n("ul",xe,[(e(!0),t(h,null,f(c.other.info,(s,u)=>(e(),t("li",{key:u},l(s),1))),128))])])):_("",!0)}}}),Le=["open"],Me={key:1},He=["src"],we={class:"project-name font-bold"},Ce=["href"],Ie={key:0,class:"count"},Se={class:"float-right text-xs font-serif"},Ne={class:"project-content"},Ae={key:0,class:"resume-project-keywords",op:"80",m:"l-3 y-1"},Pe={key:0},Re={key:1},ze={key:0,mr:"1"},Be={key:1},Ee=["src"],Oe={class:"float-right"},Ve=["href"],We={class:"ml-3 my-1"},Fe=["src","alt"],De=["innerHTML"],Ye={key:1,class:"list-disc mb-2"},qe=["innerHTML"],Ke=y({__name:"Item",props:{set:{}},setup(p){const c=p;async function o(s){return(await fetch(`https://api.github.com/repos/${s}`).then(d=>d.json())).stargazers_count}const a=H(0);return w(async()=>{c.set.repo&&(a.value=await o(c.set.repo))}),(s,u)=>{const d=g;return e(),t(h,null,[(e(),t("details",{key:s.set.name,open:s.set.open??!0},[n("summary",null,[s.set.logo.startsWith("http")?(e(),t("span",Me,[n("img",{src:s.set.logo,class:"brand-favicon"},null,8,He)])):(e(),$(d,{key:0,icon:s.set.logo},null,8,["icon"])),n("span",we,l(s.set.name),1),n("span",null,l(`，${s.set.type}`),1),s.set.repo?(e(),t("a",{key:2,href:`https://github.com/${s.set.repo}`,target:"_blank",class:"repo-star",m:"l-2"},[u[0]||(u[0]=n("div",{class:"inline-block align-sub","i-ri-github-line":""},null,-1)),i(a)?(e(),t("span",Ie,l(i(a)),1)):_("",!0)],8,Ce)):_("",!0),n("span",Se,l(`${s.set.start} ~ ${s.set.end}`),1)]),n("div",Ne,[s.set.keywords?(e(),t("div",Ae,[(e(!0),t(h,null,f(s.set.keywords,(r,m)=>(e(),t("span",{key:m,border:"1px solid black","rounded-full":"",p:"x-6px y-2px",text:"xs","inline-flex":"",justify:"center",items:"center","scale-92":""},[typeof r=="string"?(e(),t("span",Pe,l(r),1)):(e(),t("span",Re,[r.icon?(e(),t("span",ze,[k(d,{icon:r.icon},null,8,["icon"])])):r.logo?(e(),t("span",Be,[n("img",{src:r.logo,class:"brand-favicon"},null,8,Ee)])):_("",!0),n("span",null,l(r.name),1)]))]))),128)),n("span",Oe,[n("a",{class:"text-decoration-none",href:s.set.url,target:"_blank"},l(s.set.url),9,Ve)])])):_("",!0),n("div",We,[s.set.badges?(e(!0),t(h,{key:0},f(s.set.badges,(r,m)=>(e(),t("span",{key:m,class:"mr-1"},[n("img",{src:r,alt:m.toString()},null,8,Fe)]))),128)):_("",!0),n("span",{innerHTML:s.set.summary},null,8,De)]),s.set.highlights?(e(),t("ul",Ye,[(e(!0),t(h,null,f(s.set.highlights,r=>(e(),t("li",{key:r,"mb-1":""},[n("span",{innerHTML:r},null,8,qe)]))),128))])):_("",!0)])],8,Le)),u[1]||(u[1]=n("hr",{"last:hidden":""},null,-1))],64)}}}),Ge={key:0,class:"resume-projects"},Je=y({__name:"Project",props:{project:{}},setup(p){const c=p,{project:o}=x(c);return(a,s)=>{const u=j,d=Ke;return i(o)?(e(),t("div",Ge,[k(u,{icon:i(o).icon,title:i(o).title},null,8,["icon","title"]),(e(!0),t(h,null,f(i(o).sets,r=>(e(),$(d,{key:r.name,set:r},null,8,["set"]))),128))])):_("",!0)}}}),Qe={key:0},Ue={key:0},Xe=["src"],Ze=y({__name:"Skill",props:{skill:{}},setup(p){const c=p,{skill:o}=x(c);return(a,s)=>{const u=j,d=g;return i(o)?(e(),t("div",Qe,[k(u,{icon:i(o).icon,title:i(o).title},null,8,["icon","title"]),n("div",null,[n("ul",null,[(e(!0),t(h,null,f(i(o).sets,(r,m)=>(e(),t("li",{key:m},[r.title?(e(),t("span",Ue,l(r.title)+"：",1)):_("",!0),(e(!0),t(h,null,f(r.keywords,b=>(e(),t("span",{key:b.name},[b.icon?(e(),$(d,{key:0,icon:b.icon},null,8,["icon"])):_("",!0),b.logo?(e(),t("img",{key:1,src:b.logo,class:"brand-favicon"},null,8,Xe)):_("",!0),v(" "+l(b.name),1)]))),128))]))),128))])])])):_("",!0)}}}),et=["open"],tt={class:"project-name font-bold"},st=["href"],nt={key:0,class:"count"},ot={class:"float-right text-xs font-serif"},it={class:"project-content"},rt={key:0,class:"resume-project-keywords",op:"80",m:"l-3 y-1"},ct={key:0},lt={key:1},at={key:0,mr:"1"},ut={key:1},_t=["src"],pt={class:"float-right"},mt=["href"],dt={class:"ml-3 my-1"},ht=["src","alt"],ft=["innerHTML"],yt={key:1,class:"list-disc mb-2"},kt=["innerHTML"],$t=y({__name:"Item",props:{set:{}},setup(p){const c=p;async function o(s){return(await fetch(`https://api.github.com/repos/${s}`).then(d=>d.json())).stargazers_count}const a=H(0);return w(async()=>{c.set.repo&&(a.value=await o(c.set.repo))}),(s,u)=>{const d=g;return e(),t(h,null,[(e(),t("details",{key:s.set.name,open:s.set.open??!0},[n("summary",null,[k(d,{icon:s.set.logo},null,8,["icon"]),n("span",tt,l(s.set.name),1),n("span",null,l(`，${s.set.type}`),1),s.set.repo?(e(),t("a",{key:0,href:`https://github.com/${s.set.repo}`,target:"_blank",class:"repo-star",m:"l-2"},[u[0]||(u[0]=n("div",{class:"inline-block align-sub","i-ri-github-line":""},null,-1)),i(a)?(e(),t("span",nt,l(i(a)),1)):_("",!0)],8,st)):_("",!0),n("span",ot,l(`${s.set.start} ~ ${s.set.end}`),1)]),n("div",it,[s.set.keywords?(e(),t("div",rt,[(e(!0),t(h,null,f(s.set.keywords,(r,m)=>(e(),t("span",{key:m,border:"1px solid black","rounded-full":"",p:"x-6px y-2px",text:"xs","inline-flex":"",justify:"center",items:"center","scale-92":""},[typeof r=="string"?(e(),t("span",ct,l(r),1)):(e(),t("span",lt,[r.icon?(e(),t("span",at,[k(d,{icon:r.icon},null,8,["icon"])])):r.logo?(e(),t("span",ut,[n("img",{src:r.logo,class:"brand-favicon"},null,8,_t)])):_("",!0),n("span",null,l(r.name),1)]))]))),128)),n("span",pt,[n("a",{class:"text-decoration-none",href:s.set.url,target:"_blank"},l(s.set.url),9,mt)])])):_("",!0),n("div",dt,[s.set.badges?(e(!0),t(h,{key:0},f(s.set.badges,(r,m)=>(e(),t("span",{key:m,class:"mr-1"},[n("img",{src:r,alt:m.toString()},null,8,ht)]))),128)):_("",!0),n("span",{innerHTML:s.set.summary},null,8,ft)]),s.set.highlights?(e(),t("ul",yt,[(e(!0),t(h,null,f(s.set.highlights,r=>(e(),t("li",{key:r,innerHTML:r},null,8,kt))),128))])):_("",!0)])],8,et)),u[1]||(u[1]=n("hr",{"last:hidden":""},null,-1))],64)}}}),bt={key:0,class:"resume-work"},gt=y({__name:"Work",props:{work:{}},setup(p){const c=p,{work:o}=x(c);return(a,s)=>{const u=j,d=$t;return i(o)?(e(),t("div",bt,[k(u,{icon:i(o).icon,title:i(o).title},null,8,["icon","title"]),(e(!0),t(h,null,f(i(o).sets,r=>(e(),$(d,{key:r.name,set:r},null,8,["set"]))),128))])):_("",!0)}}}),vt={key:0,class:"resume"},xt=y({__name:"All",props:{resume:{}},setup(p){const c=p,o=["education","project","certificate","skill","work","other"],a={education:ve,project:Je,certificate:he,skill:Ze,work:gt,other:Te},{resume:s}=x(c),u=L(()=>Object.keys(c.resume).filter(m=>o.includes(m))),d=L(()=>{const r=[];return u.value.forEach(m=>{r.push({attr:m,component:a[m],props:s.value[m]})}),r});return(r,m)=>{const b=re,C=B;return Object.keys(c.resume).length?(e(),t("div",vt,[k(b,{resume:i(s)},null,8,["resume"]),(e(),$(S,null,[(e(!0),t(h,null,f(i(d),T=>(e(),$(N(T.component),A({key:T.attr,class:"mt-3",[T.attr||""]:T.props}),null,16))),128))],1024)),i(s).footer?(e(),$(C,{key:0,footer:i(s).footer},null,8,["footer"])):_("",!0)])):_("",!0)}}});export{xt as _};
