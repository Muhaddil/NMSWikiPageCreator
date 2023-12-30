import{ab as d,g as s,p as o,w as r,v as p,ap as f,s as g,q as y,aq as v,u as b,f as h,m as S,l as A}from"./links-mDRLx0Gj.js";import{p as E}from"./index-XeLuxaQb.js";import"./index-dOivl9Wz.js";import"./creatureData-7Bw7GDBc.js";import"./startup-6hh3q7dI.js";import"./gallery-tsfQy6qP.js";import"./Explanation.vue_vue_type_script_setup_true_lang-YWsNSsd9.js";import"./mineralDatalists-Gon6GDq6.js";const x={input:{moonInputs:"moonInputs",addMoonButton:"addMoonButton"},output:{}};function I(t){const n=t.parentElement,e=document.querySelectorAll("[data-moon]"),o=f(Array.from(e),"dataset.moon"),a="moon_input"+o,s=g(`<div class="table-cell text removable" data-moon="section${o}">\n\t\t<button class="button is-outlined is-danger icon is-small" title="Remove moon" type="button" data-evt-id="removeButton">&#10006</button>\n\t\t<label for="${a}">Moon name:</label>\n\t</div>\n\t<div class="table-cell data" data-moon="section${o}">\n\t\t<input type="text" id="${a}" data-evt-id="moonInput">\n\t</div>`,{},[{element:"moonInput",handler:"input",func:()=>i()},{element:"removeButton",handler:"click",func:()=>{v("section"+o,"moon"),L()}}]);y(s,n,"beforebegin"),document.querySelectorAll("[data-moon]").length/2+1>2&&(t.disabled=!0)}function L(){s.input.moonInputs.querySelector("button").disabled=!1,i()}function i(){const t=document.querySelectorAll("[data-moon] input"),n=[];for(const e of Array.from(t))e.value&&n.push(`[[${d(e.value)}]]`);s.output.moonList.innerText=n.join(", "),o.moons=n,M()}function M(){const t=(()=>{const t=o.moons;if(!t||0===t.length)return"This planet has no moons.";{const n=t.length;return`This planet's [[moon]]${n>1?"s":""} ${E(n)} ${t.join(" and ")}.`}})();r(t,"moonSentence")}function P(){const t=["","Landscape","Night View","Cave System","Analysis Visor","Planet Exploration Guide","Planet Page","System Page","Galaxy Map"],n=["Coast Area","Underwater"];if("Pangean"!==o.terrain){const e=t.indexOf("Analysis Visor");t.splice(e,0,...n)}o.galleryArray=t}function u(){const t=o.terrain;"string"==typeof t&&r("Pangean"!==t?"Yes":"No","water")}function w(){i();const t=s.input.terrainInput;t instanceof HTMLSelectElement&&p(t,"change")}const C=[{element:"addMoonButton",handler:"click",func:function(){I(this)}},{element:"terrainInput",func:()=>u()}];A.generateGalleryArray=()=>P(),document.addEventListener("pageReset",(()=>w())),b(x),h(C),i(),u(),S("galleryExplanationExternal","\nThere is a preferred order of pictures:\n\t<div class='dialog-center'>\n\t\t<ol class='dialog-list'>\n\t\t\t<li>Landscape</li>\n\t\t\t<li>Night View</li>\n\t\t\t<li>Cave System</li>\n\t\t\t<li>Coast Area</li>\n\t\t\t<li>Underwater</li>\n\t\t\t<li>Analysis Visor</li>\n\t\t\t<li>Planet Exploration Guide</li>\n\t\t\t<li>Planet Page</li>\n\t\t\t<li>System Page</li>\n\t\t\t<li>Galaxy Map</li>\n\t\t</ol>\n\t</div>");
