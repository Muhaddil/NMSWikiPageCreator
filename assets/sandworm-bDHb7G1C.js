import{p as n,w as m,g as s,b as c,j as g,C as b,a as i,m as w,u as y,f as h,l as o}from"./links-5eN29t_u.js";import{a as u,b as x,c as S,d as E}from"./startup-TrBOK8Du.js";import"./gallery-7wpMFgwp.js";import"./Explanation.vue_vue_type_script_setup_true_lang-9SfaQCwW.js";function p(){const t=n.planet,a=n.moon;if(!t)return void(n.name="");const e=a||t;m(e,"bodyName"),n.name=`Immortal Worm ${e}`}function d(){const n=(()=>{const n=s.input.autoSpawn;for(const t of Array.from(n))if(t.checked)return t.value;return""})(),t=`This creature ${n} automatically spawn on game reload`,a=s.output.autoSpawn;a.style.display=n?"":"none",n&&(a.innerText=t),c()}function f(){const t=g(),a="Eisvana Rare Fauna Album";m(`[[${a}]]${t}`,"addInfo"),c(),n.catalogue=a}function I(){return n.catalogue.split("|").at(-1)}function v(){b();const{name:t,wormclass:a}=n;return`${t}|${"Unstoppable Nematode"===a?"Unstopp. Nematode":a}`}function P(){const{wormmaxdepth:t,wormstomach:a}=n;return`(${t}ku)<br>${"Consumed waypoints"===a?"Stom.":"Stomach"}: ${a}`}function $(){return n.catalogue.split("|")[0]}function N(){const t=["","Worm scan","Moon Page","Planet Page","System Page","Galaxy Map"];if(!n.moon){const n=t.findIndex((n=>n.toLowerCase().includes("moon")));t.splice(n,1)}n.galleryArray=t}const k=[{element:["planetInput","moonInput"],func:()=>{p(),i(void 0,void 0,!0),u()}},{element:"autoSpawn",func:()=>d()},{element:"researchTeam",func:()=>f()},{element:"wormclassInput",func:()=>u()},{element:["wormmaxdepthInput","wormstomachInput"],func:()=>x()},{element:["discoveredInput","discoveredlinkInput"],func:()=>S()}],G={input:{autoSpawn:"autoSpawnInput"}};o.generateGalleryArray=()=>N(),o.albumLinkGen=()=>$(),o.albumOtherExternal=()=>P(),o.albumNameExternal=()=>v(),o.albumItemTypeExternal=()=>I(),w("galleryExplanationExternal","\n\tThe preferred order of pictures is as follows:\n\t<div class='dialog-center'>\n\t\t<ol class='dialog-list'>\n\t\t\t<li>Worm scan</li>\n\t\t\t<li>Moon Page</li>\n\t\t\t<li>Planet Page</li>\n\t\t\t<li>System Page</li>\n\t\t\t<li>Galaxy Map</li>\n\t\t</ol>\n\t</div>"),y(G),h(k),p(),i(void 0,void 0,!0),f(),d(),E();
