import{w as d,p as r,g as s,e as c,r as g,c as v,a as y,h as l,d as h,b as E,t as b,f as C}from"./links-mDRLx0Gj.js";import"./startup-6hh3q7dI.js";import"./gallery-tsfQy6qP.js";import"./Explanation.vue_vue_type_script_setup_true_lang-YWsNSsd9.js";function S(n){const e=n.value,t=n.dataset.destNoauto;d(e.replaceAll("-","/"),t)}function k(n){const e=(new Date).getFullYear();d(e.toString(),n)}function w(){const n=s.input.censusDiscordInput,e=n.value,t=/^[a-z0-9._]+$/.test(e);c(n,!e||t?"":"Invalid Discord tag. Please give your username, not your display name.")}function H(){const n=s.input.censusRedditInput,e=n.value.trim(),t=e.toLowerCase().startsWith("u/")?e.substring(2):e;if(t.includes(" "))return void c(n,"Reddit name must not include spaces");c(n);const u=n.dataset.destNoauto;d(t,u)}function F(){const n=s.input.censusFriendInput;n.value=n.value.toUpperCase();const e=n.dataset.destNoauto;d(n,e)}function M(){const n=s.input.censusFriendInput,e=n.value,t=new RegExp(/(?:[0-9A-Za-z]{4}-){2}[0-9A-Za-z]{5}/);!e||g(e,t)?c(n):c(n,"Wrong friend code format")}function P(){const n=s.input.censusShowInput,e=!!s.input.censusPlayerInput.value;n.checked!==e&&(n.checked=e,v(n))}function R(){const n=s.input.censusSocialInput,e=r.censussocial;if("string"!=typeof e||!(n instanceof HTMLInputElement))return;const t=!e||D(e);c(n,t?void 0:"Please provide the full link")}function D(n){try{const e=new URL(n);return"http:"===e.protocol||"https:"===e.protocol}catch{return!1}}function f(n="",e=""){if(!n&&!e){const n=["censussocial","censusreddit"];if(n.map((n=>!!r[n])).every((n=>!n)))c();else for(const e of n){const n=s.output[e];if(!(n instanceof HTMLOutputElement))continue;const t=n.parentElement;t&&(t.style.display=r[e]?"":"none")}return}if(!r[n])return void c();const t=s.output[n],u=s.output[e];function c(){const n=s.output.censussocial,e=s.output.censusreddit;if(!(n instanceof HTMLOutputElement&&e instanceof HTMLOutputElement))return;const t=n.parentElement,u=e.parentElement;t&&(t.style.display=""),u&&(u.style.display="none")}t instanceof HTMLOutputElement&&u instanceof HTMLOutputElement&&(t.parentElement&&(t.parentElement.style.display=""),u.parentElement&&(u.parentElement.style.display="none"))}const L=[{element:["planetInput","moonInput"],func:()=>y()},{element:"censusRedditInput",func:()=>{H(),l("censusRedditInput","censusSocialInput"),f("censusreddit","censussocial")}},{element:"censusSocialInput",func:()=>{l("censusSocialInput","censusRedditInput"),f("censussocial","censusreddit")}},{element:"censusSocialInput",handler:"change",func:()=>R()},{element:"censusFriendInput",func:()=>F()},{element:"censusFriendInput",handler:"change",func:()=>M()},{element:"censusPlayerInput",func:()=>P()},{element:"builderInput",func:()=>{l("builderInput","builderlinkInput"),h()}},{element:"builderlinkInput",func:()=>{l("builderlinkInput","builderInput"),h()}},{element:"addInfoInput",func:()=>E()},{element:"censusDiscordInput",handler:"change",func:()=>w()},{element:"censusArrivalInput",handler:"change",func:function(){S(this)}},{element:"censusHideButton",handler:"click",func:function(){b("census",this)}}];C(L),k("censusrenewal"),f();
