import{p as e,g as o,i as d,j as I,k as h,w as y,t as b,f as E,l as i,m as s}from"./links-2Xiv7j2s.js";import{a as C,b as $,c as x,d as v}from"./startup-bj4-9ElY.js";import"./gallery-4OYtP-H-.js";import"./Explanation.vue_vue_type_script_setup_true_lang-cgalF9KB.js";function u(){const t=e.region;o.output.regNr.innerText=d(t)}function m(){const e=I();o.output.addInfo.innerText=`${e}`}function w(){const t=e.system;e.catalogue=`Category: ${t}`}function c(){const t=e.name,n=e.tentacles,a=e.mainColour,r=e.secColour,i=o.input.appearanceInput;if(!(a.trim()||r.trim()||n.trim()))return;const s=`${t} is ${a.trim()?`${h(a)} ${a.trim()}`:""} organic frigate${r.trim()?` with ${r} accents`:""} with ${n}.`;i.value=s,y(i)}function T(){return`{{Class|${e.class}}}`}function F(){return"Organic Frigate Album"}const k=[{element:"nameInput",func:()=>{C(),c()}},{element:"portalglyphsInput",func:()=>u()},{element:["mainColourInput","secColourInput","tentacleInput"],func:()=>c()},{element:"researchTeam",func:()=>m()},{element:"classInput",func:()=>$()},{element:"hideAppearanceButton",handler:"click",func:function(){b("appearance",this)}},{element:["discoveredInput","discoveredlinkInput"],func:()=>x()}];i.albumOtherExternal=()=>T(),i.albumItemTypeExternal=()=>F(),s("galleryExplanationExternal","\n\tThere is a preferred order of gallery pictures:\n\t<div class='dialog-center'>\n\t\t<ol class='dialog-list'>\n\t\t\t<li>Rear view of frigate</li>\n\t\t\t<li>Interaction screen</li>\n\t\t\t<li>System Page</li>\n\t\t</ol>\n \t</div>"),s("galleryArray",["","Rear view of frigate","Interaction screen","System Page"]),E(k),u(),w(),m(),v();
