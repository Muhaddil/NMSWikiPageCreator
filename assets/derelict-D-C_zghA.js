import{bq as i,bn as u,bE as h,bF as T,bG as x,by as E,bo as s,bH as m,bI as I,bJ as d,bC as k}from"./links-V1_eT2ZR.js";import{e as A,f as v,g as p}from"./startup-Crbh4M3E.js";import"./gallery-n1rp3kue.js";import"./Explanation.vue_vue_type_script_setup_true_lang-DUvAc48Y.js";const b='| [[File:<output name="image"></output>|150px]] || [[<output name="system"></output>]] || <output name="rooms"></output> || <output name="enemies"></output> || {{gl/Small|<output name="portalglyphs"></output>}} || <output name="discoverer"></output><br>\n|-';function y(){const e=document.getElementsByName("enemiesInput"),t=[];for(const n of Array.from(e))n.checked&&t.push(n.value);i(t.join(", "),"enemies")}function L(){const e=h.link,{class:t}=u;return"album"===e?`${u.name}`:`Eisvana Starship Album - Derelict Freighter#${t}-Class`}function B(e){const t=e.value,n=t.substring(4),a=T(t).slice(0,-5);i(n,"regionglyphs"),i(a,"coordinates")}function g(){const{discovered:e,discoveredlink:t}=u;i(e||`{{Profile|${t}}}`,"discoverer")}const C=[{element:"portalglyphsInput",func:function(){B(this)}},{element:"enemiesInput",func:()=>y()},{element:["discoveredInput","discoveredlinkInput"],func:()=>g()}],F={input:{enemies:"enemies",classTableActions:"classTableActions",galaxyTableActions:"galaxyTableActions"},output:{portalglyphsPreview:"portalglyphsPreview",galaxyTable:"galaxyTable",galaxyTableEntry:"galaxyTableEntry",indexEntry:"indexEntry",albumText:"albumText"}},H=[{element:"copyButton",handler:"click",func:function(){A(this,"classTableEntry")}},{element:"openAlbumButton",handler:"click",func:function(){v(this)}}];k.albumLinkGen=()=>L(),x(F),E(C),s.output.galaxyTable.innerHTML=b,s.output.albumText.innerHTML=b;const f="galaxyTableActionsNote",G=`<p id="${f}">If the page already exists, just add an entry for the derelict freighter from your system</p>`;p.body.insertAdjacentHTML("afterbegin",G);const w=p.body.innerHTML;m(p,s.input.galaxyTableActions,"afterbegin");const l=I(w,{},H),r=l.getElementById(f);r&&(r.id="indexTableActionsNote",r.innerText="If the page doesn't exist yet, add an entry to the catalogue as well");const o=l.getElementById("albumBtn");o&&(o.id="tableBtn",o.dataset.link="classTableEntry",o.innerText="Copy Index Entry Code");const a=l.getElementById("albumLink");a&&(a.id="pageLink",a.dataset.link="classTableEntry",a.innerText="Open Index Page"),m(l,s.input.classTableActions,"afterbegin");const D=s.input.fileInput,M=s.input.portalglyphsInput;d(D,"input"),d(M,"input"),y(),g();
