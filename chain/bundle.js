(()=>{"use strict";var t={884:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,"\r\n.button {\r\n\tbackground-color: #999999;\r\n\tcolor: white;\r\n\tpadding: 8px 14px;\r\n\tborder-radius: 5px;\r\n\tcursor: pointer;\r\n\ttransition: all 0.05s linear;\r\n}\r\n\r\n@media ( hover: hover ) {\r\n\t.button:hover {\r\n\t\tbackground-color: #666666;\r\n\t}\r\n}",""]);const i=o},316:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,"\r\n#code-input {\r\n\tposition: fixed;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate( -50%, -50% );\r\n\tz-index: 2000;\r\n\tpadding: 20px;\r\n\tborder-style: solid;\r\n\tborder-width: 2px;\r\n\tborder-color: black;\r\n\tborder-radius: 10px;\r\n\tbackground-color: grey;\r\n\tdisplay: none;\r\n}\r\n\r\n\t#code-input.enabled {\r\n\t\tdisplay: inherit;\r\n\t}\r\n\r\n\t#code-input textarea {\r\n\t\tmargin-bottom: 10px;\r\n\t\tpadding: 8px;\r\n\t}",""]);const i=o},121:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,"\r\n#tag-input {\r\n\tposition: fixed;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate( -50%, -50% );\r\n\tz-index: 2000;\r\n\tpadding: 20px;\r\n\tborder-style: solid;\r\n\tborder-width: 2px;\r\n\tborder-color: black;\r\n\tborder-radius: 10px;\r\n\tbackground-color: grey;\r\n\tdisplay: none;\r\n}\r\n\r\n\t#tag-input.enabled {\r\n\t\tdisplay: inherit;\r\n\t}\r\n\r\n\t#tag-input textarea {\r\n\t\tmargin-bottom: 10px;\r\n\t\tpadding: 8px;\r\n\t}",""]);const i=o},292:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,"\r\n#homepage {\r\n\tbackground-size: cover;\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n\t#homepage > * {\r\n\t\tmargin: 30px 0;\r\n\t\tpadding: 45px;\r\n\t\tborder-radius: 8px;\r\n\t\tbackground-color: black;\r\n\t}\r\n\r\n\t#homepage > h1 {\r\n\t\tcolor: white;\r\n\t\tfont-size: 3em;\r\n\t\tfont-family: 'Orelega One', cursive;\r\n\t}\r\n\r\n\t#homepage-picking-box {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t}\r\n\r\n\t\t#homepage-picking-box > button {\r\n\t\t\tpadding: 6px 11px;\r\n\t\t\tmargin: 8px 0;\r\n\t\t\tcursor: pointer;\r\n\t\t}\r\n\r\n\t\t#homepage-picking-box.hidden {\r\n\t\t\tdisplay: none;\r\n\t\t}",""]);const i=o},285:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,"\r\n#editor-bodies-toolbar {\r\n\theight: 40px;\r\n\twidth: 100%;\r\n\tpadding: 10px;\r\n\tbackground-color: #777777;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n\t#editor-bodies-toolbar .button {\r\n\t\theight: 30px;\r\n\t\twidth: 30px;\r\n\t\tfont-size: 1em;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\t}\r\n\r\n\t\t#editor-bodies-toolbar > * {\r\n\t\t\tmargin: 0 5px;\r\n\t\t}\r\n\r\n#editor-bodies-list-container {\r\n\tposition: relative;\r\n\theight: calc( 100% - 40px );\r\n\twidth: 100%;\r\n\tbackground-color: #999999;\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden;\r\n}\r\n\r\n\t#editor-bodies-list {\r\n\t\twidth: 100%;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t}\r\n\r\n\t\t.editor-body-line {\r\n\t\t\theight: 30px;\r\n\t\t\twidth: calc( 100% - 10px );\r\n\t\t\tbackground-color: #444444;\r\n\t\t\tmargin: 2.5px 5px;\r\n\t\t\tborder-radius: 5px;\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: center;\r\n\t\t\talign-items: center;\r\n\t\t\tcolor: white;\r\n\t\t\tcursor: pointer;\r\n\t\t}\r\n\r\n\t\t\t.editor-body-line.selected {\r\n\t\t\t\tborder-style: solid;\r\n\t\t\t\tborder-width: 2px;\r\n\t\t\t\tborder-color: black;\r\n\t\t\t}",""]);const i=o},538:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,"\r\n#editor-chain-point-options {\r\n\tbackground-color: red;\r\n}\r\n\r\n/* */\r\n\r\n#editor-chain-point-toolbar {\r\n\theight: 40px;\r\n\twidth: 100%;\r\n\tpadding: 10px;\r\n\tbackground-color: #777777;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n\t#editor-chain-point-toolbar .button {\r\n\t\theight: 30px;\r\n\t\twidth: 30px;\r\n\t\tfont-size: 1em;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\t}\r\n\r\n\t\t#editor-chain-point-toolbar > * {\r\n\t\t\tmargin: 0 5px;\r\n\t\t}\r\n\r\n/* */\r\n\r\n#editor-chain-point-list-container {\r\n\tposition: relative;\r\n\theight: calc( 100% - 40px );\r\n\twidth: 100%;\r\n\tbackground-color: #999999;\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden;\r\n}\r\n\r\n\t#editor-chain-point-list {\r\n\t\tposition: relative;\r\n\t\twidth: 100%;\r\n\t\tpadding: 4px;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t}\r\n\r\n\t\t.editor-chain-point-line {\r\n\t\t\twidth: 100%;\r\n\t\t\tmargin-bottom: 5px;\r\n\t\t\tborder-radius: 7px;\r\n\t\t}\r\n\r\n\t\t\t.editor-chain-point-line.selected {\r\n\t\t\t\tborder-width: 2px;\r\n\t\t\t\tborder-style: solid;\r\n\t\t\t\tborder-color: black;\r\n\t\t\t}\r\n\r\n\t\t\t.editor-chain-point-section {\r\n\t\t\t\tpadding: 10px;\r\n\t\t\t\tmargin-bottom: 10px;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\tborder-radius: 7px;\r\n\t\t\t}\r\n\r\n\t\t\t\t.editor-chain-point-section > * {\r\n\t\t\t\t\tmargin-bottom: 5px;\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\tjustify-content: space-between;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.editor-chain-point-section input {\r\n\t\t\t\t\twidth: 250px;\r\n\t\t\t\t\tpadding: 0 10px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.editor-chain-point-section p {\r\n\t\t\t\t\tmargin-bottom: 10px;\r\n\t\t\t\t}\r\n",""]);const i=o},410:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,"\r\n#editor-console {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: flex-end;\r\n\tpadding: 10px;\r\n}",""]);const i=o},933:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,"\r\n#editor-files-options {\r\n\tbackground-color: #111111;\r\n\tpadding: 20px;\r\n}\r\n\r\n#editor-files-options > * {\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n#editor-files-options > * > * {\r\n\tmargin-right: 10px;\r\n}",""]);const i=o},59:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,"\r\n.ui-panel {\r\n\tbackground-color: black;\r\n\tborder-radius: 5px;\r\n\tborder-style: solid;\r\n\tborder-color: white;\r\n\tborder-width: 1px;\r\n\toverflow: hidden;\r\n}\r\n\r\n#editor-page {\r\n\tdisplay: flex;\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tbackground-color: black;\r\n}\r\n\r\n\t/* LEFT PANEL */\r\n\r\n\t#editor-left-panel {\r\n\t\tposition: relative;\r\n\t\theight: 100%;\r\n\t\twidth: calc( 100% - 400px );\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t}\r\n\r\n\t\t#editor-console {\r\n\t\t\tposition: relative;\r\n\t\t\theight: 100px;\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n\r\n\t\t#editor-viewport {\r\n\t\t\twidth: 100%;\r\n\t\t\theight: calc( 100% - 100px );\r\n\t\t}\r\n\r\n\t/* RIGHT PANEL */\r\n\r\n\t#editor-right-panel {\r\n\t\tposition: relative;\r\n\t\theight: 100%;\r\n\t\twidth: 400px;\r\n\t}\r\n\r\n\t\t/* TOOLS BUTTONS */\r\n\r\n\t\t#editor-tools {\r\n\t\t\theight: 400px;\r\n\t\t\twidth: 100%;\r\n\t\t\tpadding: 10px;\r\n\t\t\tbackground-color: #333333;\r\n\t\t}\r\n\r\n\t\t\t#editor-tools > * {\r\n\t\t\t\tmargin: 5px 0;\r\n\t\t\t}\r\n\r\n\t\t/* TOOLS OPTIONS */\r\n\r\n\t\t#editor-tools-options {\r\n\t\t\tposition: relative;\r\n\t\t\theight: calc( 100% - 400px );\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n\r\n\t\t\t.tool-options {\r\n\t\t\t\theight: 100%;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\tbackground-color: black;\r\n\t\t\t\tdisplay: none;\r\n\t\t\t}",""]);const i=o},430:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,"\r\n#editor-player-options {\r\n\tbackground-color: #111111;\r\n\tpadding: 20px;\r\n}\r\n\r\n\t.editor-player-input-container {\r\n\t\tmargin-bottom: 5px;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\tbackground-color: grey;\r\n\t\tpadding: 8px;\r\n\t}\r\n\r\n\t\t.editor-player-input-container input {\r\n\t\t\twidth: 250px;\r\n\t\t\tpadding: 0 10px;\r\n\t\t}\r\n\r\n\t\t.editor-player-input-container p {\r\n\t\t\tmargin-bottom: 10px;\r\n\t\t}",""]);const i=o},73:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,"\r\n#editor-shapes-options {\r\n\tposition: relative;\r\n\tbackground-color: #777777;\r\n\tpadding: 10px;\r\n}\r\n\r\n\t#editor-add-shape-toolbar {\r\n\t\twidth: 100%;\r\n\t\tdisplay: flex;\r\n\t}\r\n\r\n\t\t#editor-add-shape-toolbar > * {\r\n\t\t\tmargin: 0 5px;\r\n\t\t}",""]);const i=o},229:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,"\r\n\r\n\r\n* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\theight: 100vh;\r\n\twidth: 100vw;\r\n}\r\n\r\n.game-container {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tz-index: 1000;\r\n}",""]);const i=o},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},379:(t,e,n)=>{var r,o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function a(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},r=[],o=0;o<t.length;o++){var s=t[o],c=e.base?s[0]+e.base:s[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var p=a(d),u={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(i[p].references++,i[p].updater(u)):i.push({identifier:d,updater:f(u,e),references:1}),r.push(d)}return r}function c(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=o(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,d=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function p(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=d(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function u(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,g=0;function f(t,e){var n,r,o;if(e.singleton){var i=g++;n=h||(h=c(e)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=c(e),r=u.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var c=s(t,e),l=0;l<n.length;l++){var d=a(n[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=c}}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{var t=n(379),e=n.n(t),r=n(229);e()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var o=n(292);function i(t){const e=(t=t||{}).tagName||"DIV",n=document.createElement(e);return t.id&&(n.id=t.id),t.html&&n.append(t.html),t.classes&&n.classList.add(...t.classes.split(" ")),n}function a(t){return i({type:"I",classes:t})}e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const s=i({id:"game-page",classes:"game-container"});s.start=function(){engine.core.init(s),engine.levelManager.loadLevel("playground"),engine.on("gate",(t=>{const e=t.detail;engine.levelManager.loadLevel(e)}))};const c=s;var l=n(884);function d(t){return i({classes:"button",html:t})}e()(l.Z,{insert:"head",singleton:!1}),l.Z.locals;var p=n(59);e()(p.Z,{insert:"head",singleton:!1}),p.Z.locals;var u=n(410);e()(u.Z,{insert:"head",singleton:!1}),u.Z.locals;const h=i({id:"editor-console",classes:"ui-panel"});function g(t,e){const n=i({html:t});n.style.color=e,h.append(n)}h.log=t=>g(t,"white"),h.warn=t=>g(t,"yellow"),h.error=t=>g(t,"red");const f=h;var m=n(316);e()(m.Z,{insert:"head",singleton:!1}),m.Z.locals;const b=document.createElement("DIV");b.id="code-input";const w=document.createElement("TEXTAREA");w.placeholder="this.position.x = Math.sin( time / 200 );",w.rows="10",w.cols="150";const y=d("validate");y.style.width="100px",y.onclick=()=>{const t=new CustomEvent("validate",{detail:w.value});b.dispatchEvent(t)},b.append(w,y),document.body.append(b);let v=!1;b.toggle=function(){v?b.classList.remove("enabled"):b.classList.add("enabled"),v=!v},b.reset=function(){w.value=""},b.setContent=function(t){w.value=t};const E=b;var x=n(121);e()(x.Z,{insert:"head",singleton:!1}),x.Z.locals;const T=document.createElement("DIV");T.id="tag-input";const k=document.createElement("TEXTAREA");k.placeholder='{ "foo": 42, "bar: "baz" }',k.rows="10",k.cols="150";const L=d("validate");L.style.width="100px",L.onclick=()=>{const t=new CustomEvent("validate",{detail:k.value});T.dispatchEvent(t)},T.append(k,L),document.body.append(T);let O=!1;T.toggle=function(){O?T.classList.remove("enabled"):T.classList.add("enabled"),O=!O},T.reset=function(){k.value=""},T.setContent=function(t){k.value=t};const C=T;var S=n(285);e()(S.Z,{insert:"head",singleton:!1}),S.Z.locals;var H=n(73);e()(H.Z,{insert:"head",singleton:!1}),H.Z.locals;const j=[];let N=[],R=[];setTimeout((()=>{engine.core.callInLoop((()=>{if(N.length){const t=.2*Math.sin(Date.now()/100)+.2;N.forEach((e=>{e.emissive.setScalar(t)}))}}))}),500);const M=i({id:"editor-shapes-options",classes:"tool-options"}),V=i({id:"editor-add-shape-toolbar"});function I(t,e){const n=d(a(t));return n.onclick=e,n}function Z(t){P();const e=(()=>{switch(t){case"sphere":return new engine.THREE.IcosahedronGeometry(1,3);case"cylinder":return new engine.THREE.CylinderGeometry(1,1,1,16);default:return new engine.THREE.BoxGeometry}})(),n=new engine.THREE.Mesh(e,A());return n.isEditorShape=!0,n.shapeType=t,j.push(n),engine.core.scene.add(n),D(n),n.getInfo=function(){switch(t){case"box":return{pos:n.position,rot:n.rotation,width:n.scale.x,height:n.scale.y,depth:n.scale.z,type:"box"};case"sphere":return{pos:n.position,rot:n.rotation,radius:n.scale.x,type:"sphere"};case"cylinder":return{pos:n.position,rot:n.rotation,radius:n.scale.x,height:n.scale.y,type:"cylinder"}}},n}function P(){if(!R.length)return;N.forEach((t=>t.emissive.setScalar(0))),N=[],R=[];const t=new CustomEvent("end-transform");window.dispatchEvent(t)}function D(t){N.push(t.material),R.push(t);const e=new CustomEvent("transform-shape",{detail:R});window.dispatchEvent(e)}function z(t){const e=Z(t.type);switch(t.type){case"box":e.scale.set(t.width,t.height,t.depth);break;case"sphere":e.scale.setScalar(t.radius);break;case"cylinder":e.scale.set(t.radius,t.height,t.radius)}return t.rot&&e.rotation.copy(t.rot),t.pos&&e.position.copy(t.pos),P(),e}function A(){return new engine.THREE.MeshPhongMaterial({color:5592405})}V.append(I("fas fa-circle",(function(){Z("sphere")})),I("far fa-cube",(function(){Z("box")})),I("fal fa-ring",(function(){Z("cylinder")}))),M.append("Add a shape :",V),window.addEventListener("keydown",(t=>{"Escape"===t.code?P():"Delete"===t.code&&function(){if(R.length){const t=R.slice(0);P(),t.forEach((t=>{t.parent.remove(t),t.material.dispose(),t.geometry.dispose()})),f.log("Shapes deleted")}else f.warn("No shape is selected, nothing to delete")}()}));const F={shapes:j,domOptions:M,selectShape:D,getSelected:function(){return R},fromInfo:z,duplicateSelected:function(){if(R.length){const t=[];R.forEach((e=>{const n=z(e.getInfo());n.scale.copy(e.scale),t.push(n)})),t.forEach((t=>D(t))),f.log("duplicated shapes")}else f.warn("no shape selected, impossible to duplicate.")},DefaultShapeMaterial:A},G=[];let B=null;const U=i({classes:"tool-options"}),q=i({id:"editor-bodies-toolbar"});function J(t,e){const n=d(a(t));return n.onclick=()=>e(),n}U.append(q),q.append(J("far fa-plus-square",(function(){const t=et();G.push(t),$.append(t.domElement),t.domElement.onclick=()=>{_(t)},_(t)})),J("far fa-trash-alt",(function(){B&&window.confirm("Are you sure to delete this body ?")&&(G.splice(G.indexOf(B),1),B.clear(),B=null)})),J("fas fa-file-import",X),J("fas fa-file-export",Y),J("fas fa-lightbulb-on",(function(){B&&(B.threeObj.visible=!0)})),J("far fa-lightbulb",(function(){B&&(B.threeObj.visible=!1)})),J("fas fa-code",(function(){B&&(window.addEventListener("keydown",tt),E.toggle(),E.setContent(B.transformCode))})),J("fas fa-tags",(function(){B&&(window.addEventListener("keydown",Q),C.toggle(),C.setContent(B.tags||""))})));const W=i({id:"editor-bodies-list-container"}),$=i({id:"editor-bodies-list"});function _(t){G.forEach((t=>t.domElement.classList.remove("selected"))),B=null,t.domElement.classList.add("selected"),B=t}function X(t,e){const n=t?[t]:F.getSelected();(e=e||B)&&n.length&&(n.forEach((t=>{t.parent&&!t.parent.isTransformContainer&&e.threeObj.attach(t)})),n.forEach((t=>t.owner=e)),e.color&&n.forEach((t=>t.material.color.set(e.color))))}function Y(t){if(t&&!t.shapeType)return;const e=t?[t]:F.getSelected();B&&e.length&&(e.forEach((t=>t.owner=void 0)),engine.core.scene.attach(...e),e.forEach((t=>t.material=F.DefaultShapeMaterial())))}function K(){const t=new engine.THREE.Color;return t.r=.4+.6*Math.random(),t.g=.4+.6*Math.random(),t.b=.4+.6*Math.random(),t}function Q(t){"Escape"===t.code&&(C.reset(),C.toggle(),window.removeEventListener("keydown",Q))}function tt(t){"Escape"===t.code&&(E.reset(),E.toggle(),window.removeEventListener("keydown",tt))}function et(t){t=t||Math.random().toString(36).substring(8);const e=new engine.THREE.Object3D;engine.core.scene.add(e);const n=K(),r=i({classes:"editor-body-line",html:t});return r.style.backgroundColor="#"+new engine.THREE.Color(n).getHexString(),r.style.color="black",{name:t,color:n,clear:function(){this.domElement.remove();for(let t=this.threeObj.children.length;t>-1;t--)Y(this.threeObj.children[t]);this.threeObj.parent.remove(this.threeObj)},threeObj:e,isBody:!0,transformCode:null,domElement:r}}U.append(W),W.append($),C.addEventListener("validate",(t=>{const e=t.detail;C.reset(),C.toggle(),B&&(B.tags=e),window.removeEventListener("keydown",tt)})),E.addEventListener("validate",(t=>{const e=t.detail;E.reset(),E.toggle(),B&&(B.transformCode=e,B.transformFunction=Function("time",e)),window.removeEventListener("keydown",tt)}));const nt={bodies:G,domOptions:U,fromInfo:function(t){const e=et(t.name);e.transformCode=t.trans,e.tags=t.tags,e.color=t.color||K(),t.trans&&(e.transformFunction=Function("time",t.trans)),G.push(e),$.append(e.domElement),e.domElement.onclick=()=>{_(e)},e.domElement.style.backgroundColor="#"+new engine.THREE.Color(e.color).getHexString(),e.domElement.style.color="black",t.shapes.forEach((t=>{X(F.fromInfo(t),e)}))},getFromName:function(t){return G.find((e=>e.name===t))}};var rt=n(933);e()(rt.Z,{insert:"head",singleton:!1}),rt.Z.locals;const ot=i({id:"editor-files-options",classes:"tool-options"});function it(t,e,n){const r=d(a(t));return r.append(e),r.onclick=n,r}ot.append(it("fas fa-upload","import JSON",(function(){if(window.confirm("Are you sure to import a scene and erase the current scene ?")){const t=document.createElement("INPUT");t.type="file",t.addEventListener("change",(t=>{t.target.files[0].text().then((t=>function(t){const e=new CustomEvent("scene-graph-loaded",{detail:t});window.dispatchEvent(e)}(JSON.parse(t))))})),t.click()}})),it("fas fa-download","save map graph",(function(){const t=new CustomEvent("scene-graph-request");window.dispatchEvent(t)})),it("fas fa-download","save map as GLTF",(function(){const t=new CustomEvent("gltf-request");window.dispatchEvent(t)})));const at={domOptions:ot,saveAsJSON:function(t){try{let e="game-map-"+(new Date).toLocaleString()+".txt";e=e.replace(/:/g,"_");const n=JSON.stringify(t),r=new Blob([n],{type:"text/plain"}),o=document.createElement("a");o.href=URL.createObjectURL(r),o.download=e,o.click(),f.log("the scene has been successfully saved as "+e)}catch(t){console.error(t),console.log(t)}},saveAsGLTF:function(t){try{let e="game-map-"+(new Date).toLocaleString()+".glb";e=e.replace(/:/g,"_");const n=new Blob([t],{type:"application/octet-stream"}),r=document.createElement("a");r.href=URL.createObjectURL(n),r.download=e,r.click(),f.log("the scene has been successfully saved as "+e)}catch(t){console.error(t),console.log(t)}}};var st=n(538);e()(st.Z,{insert:"head",singleton:!1}),st.Z.locals;const ct=[];let lt;const dt=i({id:"editor-chain-point-options",classes:"tool-options"}),pt=i({id:"editor-chain-point-toolbar"});function ut(t,e){const n=d(a(t));return n.onclick=()=>e(),n}dt.append(pt),pt.append(ut("far fa-plus-square",ft),ut("far fa-trash-alt",(function(){lt?lt.clear():f.warn("no chain point selected for removal")})));const ht=i({id:"editor-chain-point-list-container"}),gt=i({id:"editor-chain-point-list"});function ft(t){const e=function(t){const e={setRadius:function(t){this.inner.scale.setScalar(t)},setLength:function(t){this.outer.scale.setScalar(t/20)},getParams:function(){return{bodyName:r.getValue(),x:o.getValue(),y:a.getValue(),z:s.getValue(),length:c.getValue(),radius:l.getValue(),enabled:d.getValue(),init:p.getValue(),color:e.color.getHexString()}},clear:function(){this.domElement.remove(),this.object3D.parent.remove(this.object3D),this.inner.material.dispose(),this.inner.geometry.dispose(),this.outer.material.dispose(),this.outer.geometry.dispose(),this.core.material.dispose(),this.core.geometry.dispose(),ct.splice(ct.indexOf(this),1)}};e.color=t?new engine.THREE.Color("#"+t.color):function(){const t=new engine.THREE.Color;return t.r=.4+.6*Math.random(),t.g=.4+.6*Math.random(),t.b=.4+.6*Math.random(),t}(),e.object3D=new engine.THREE.Group,e.outer=new engine.THREE.Mesh(new engine.THREE.IcosahedronGeometry(20,3),new engine.THREE.MeshPhongMaterial({wireframe:!0,color:e.color,transparent:!0,opacity:.3})),e.inner=new engine.THREE.Mesh(new engine.THREE.IcosahedronGeometry(1,1),new engine.THREE.MeshPhongMaterial({wireframe:!0,color:e.color})),e.core=new engine.THREE.Mesh(new engine.THREE.IcosahedronGeometry(.3),new engine.THREE.MeshPhongMaterial({color:e.color})),e.object3D.add(e.inner,e.outer,e.core),engine.core.scene.add(e.object3D),e.domElement=i({classes:"editor-chain-point-line"}),e.domElement.style.backgroundColor="#"+new engine.THREE.Color(e.color).getHexString(),e.domElement.style.color="black",e.domElement.onclick=()=>{return t=e,lt&&lt.classList.remove("selected"),t.domElement.classList.add("selected"),void(lt=t);var t};const n=i({classes:"editor-chain-point-section"}),r=mt("body name",""),o=mt("x",0),a=mt("y",0),s=mt("z",0),c=mt("length",20),l=mt("attach radius",1),d=bt("enabled"),p=bt("initial chain");return p.setValue(!1),n.append(r,o,a,s,c,l,d,p),e.domElement.append(n),t&&(r.setValue(t.bodyName),o.setValue(t.x),a.setValue(t.y),s.setValue(t.z),c.setValue(t.length),l.setValue(t.radius),d.setValue(t.enabled),p.setValue(t.init)),e}(t);ct.push(e),gt.append(e.domElement)}function mt(t,e){const n=i(),r=i({tagName:"INPUT"});return r.value=e,n.append(t,r),n.getValue=()=>r.value,n.setValue=t=>r.value=t,r.onchange=wt,n}function bt(t){const e=i(),n=i({tagName:"INPUT"});return n.type="checkbox",n.checked=!0,e.append(t,n),e.getValue=()=>n.checked,e.setValue=t=>n.checked=t,n.onchange=wt,e}function wt(){ct.map((t=>{const e=t.getParams(),n=nt.getFromName(e.bodyName);return n&&n.threeObj.add(t.object3D),t.object3D.position.set(Number(e.x),Number(e.y),Number(e.z)),t.setRadius(Number(e.radius)),t.setLength(Number(e.length)),e})).filter((t=>t.init)).length>1&&f.warn("There is more than one initial chain point.");const t=new CustomEvent("update-chain");window.dispatchEvent(t)}dt.append(ht),ht.append(gt);const yt={domOptions:dt,chainPoints:ct,getParams:function(){return ct.map((t=>t.getParams()))},fromInfo:function(t){t&&(t.forEach((t=>ft(t))),wt())}};var vt=n(430);e()(vt.Z,{insert:"head",singleton:!1}),vt.Z.locals;const Et=i({id:"editor-player-options",classes:"tool-options"}),xt=Lt("x"),Tt=Lt("y"),kt=Lt("z");function Lt(t){const e=i({classes:"editor-player-input-container"}),n=i({tagName:"INPUT"});return e.append(t,n),e.getValue=()=>n.value,e.setValue=t=>n.value=t,n.onchange=Ot,e}function Ot(){const t=new CustomEvent("update-player",{detail:Ct()});window.dispatchEvent(t)}function Ct(){return{x:xt.getValue(),y:Tt.getValue(),z:kt.getValue()}}Et.append(xt,Tt,kt);const St={domOptions:Et,getPosition:Ct,fromInfo:function(t){xt.setValue(t.x),Tt.setValue(t.y),kt.setValue(t.z),Ot()}};let Ht,jt,Nt,Rt,Mt;const Vt=[nt,F,at,yt,St],It=i({id:"editor-page",classes:"game-container"}),Zt=i({id:"editor-left-panel"}),Pt=i({id:"editor-right-panel"});It.append(Zt,Pt);const Dt=i({id:"editor-viewport",classes:"ui-panel"});Zt.append(f,Dt);const zt=i({id:"editor-tools",classes:"ui-panel"}),At=i({id:"editor-tools-options",classes:"ui-panel"});function Ft(t,e){const n=d(t);return n.onclick=()=>{e.isEnabled||(Vt.forEach((t=>{t.domOptions.style.display="none",t.isEnabled=!1})),e.isEnabled=!0,e.domOptions.style.display="inherit")},n}Pt.append(zt,At),zt.append(Ft("files",at),"//",Ft("bodies",nt),Ft("shapes",F),"//",Ft("chain points",yt),Ft("player",St)),At.append(nt.domOptions,F.domOptions,at.domOptions,yt.domOptions,St.domOptions);let Gt=!1;window.addEventListener("keydown",(t=>{switch("Escape"===t.code&&document.activeElement.blur(),t.keyCode){case 83:qt();break;case 68:Gt&&F.duplicateSelected();break;case 16:Gt=!0}})),window.addEventListener("keyup",(t=>{switch(t.keyCode){case 16:Gt=!1}})),window.addEventListener("gltf-request",(()=>{engine.core.scene.traverse((t=>{t.position&&(t.position.set(Number(t.position.x),Number(t.position.y),Number(t.position.z)),t.updateMatrix(),t.updateMatrixWorld(!0))})),(new engine.GLTFExporter).parse(engine.core.scene,(function(t){at.saveAsGLTF(t)}),{binary:!0})})),window.addEventListener("scene-graph-request",(()=>{const t={chainPoints:yt.getParams(),player:St.getPosition()};t.bodies=nt.bodies.map((t=>{const e={name:t.name,trans:t.transformCode,color:t.color,tags:t.tags};return e.shapes=t.threeObj.children.filter((t=>t.shapeType)).map((t=>t.getInfo())),e})),at.saveAsJSON(t)})),window.addEventListener("scene-graph-loaded",(t=>{try{const e=t.detail;engine.core.scene.traverse((t=>{(t.shapeType||t.isBody)&&(t.material.dispose(),t.geometry.dispose())})),engine.core.scene.clear(),engine.core.scene.add(Ht,jt,Nt,Rt),Wt(),$t(),e.bodies.forEach((t=>{nt.fromInfo(t)})),yt.fromInfo(e.chainPoints),St.fromInfo(e.player),Rt&&Rt.updateHelper(),f.log("a scene has been successfully imported")}catch(t){f.error(t),console.log(t)}})),window.addEventListener("update-player",(t=>{Nt.position.copy(t.detail),Rt.updateHelper()})),window.addEventListener("update-chain",(()=>{Rt.updateHelper()}));const Bt=["translate","rotate","scale"];let Ut=0;function qt(){if(!Ht)return;const t=jt.children.length>1?2:3;Ut=(Ut+1)%t,Ht.setMode(Bt[Ut])}function Jt(){for(let t=jt.children.length-1;t>-1;t--)jt.children[t].owner?jt.children[t].owner.threeObj.attach(jt.children[t]):engine.core.scene.attach(jt.children[t]);Ht.detach(jt),jt.rotation.set(0,0,0),jt.scale.setScalar(1)}function Wt(){const t=new engine.THREE.AxesHelper(100),e=new engine.InfiniteGridHelper(1,10,new engine.THREE.Color(15592941));engine.core.scene.add(e,t)}function $t(){const t=new engine.THREE.AmbientLight(4210752),e=new engine.THREE.DirectionalLight(16777215,.5),n=new engine.THREE.DirectionalLight(16777215,.5);e.position.set(.4,1,-.2),n.position.set(.2,1,.2),engine.core.scene.add(e,n,t)}window.addEventListener("transform-shape",(t=>{Jt(),function(t){const e=new engine.THREE.Box3;e.setFromObject(t[0]),t.forEach((t=>e.expandByObject(t))),e.getCenter(jt.position)}(t.detail),t.detail.length>1&&"scale"===Bt[Ut]&&qt(),1===t.detail.length&&jt.rotation.copy(t.detail[0].rotation),Ht.attach(jt),t.detail.forEach((t=>jt.attach(t)))})),window.addEventListener("end-transform",Jt),It.start=function(){try{const t=new engine.THREE.Vector3,e=new engine.THREE.Vector3;engine.core.init(Dt),$t(),Ht=new engine.TransformControls(engine.core.camera,Dt),Ht.setSpace("local"),jt=new engine.THREE.Group,jt.isTransformContainer=!0,Nt=new engine.THREE.Mesh(new engine.THREE.SphereGeometry,engine.materials.characterMaterial),engine.core.scene.add(Ht,jt,Nt);const n=new engine.THREE.LineBasicMaterial({color:16711935}),r=[new engine.THREE.Vector3(0,0,0),new engine.THREE.Vector3(0,0,0)],o=(new engine.THREE.BufferGeometry).setFromPoints(r);Rt=new engine.THREE.Line(o,n),engine.core.scene.add(Rt),Rt.updateHelper=function(){const t=yt.getParams().filter((t=>t.init));if(t.length){Rt.visible=!0;const e=t[0];Mt=nt.getFromName(e.bodyName);const n=St.getPosition();Nt.updateMatrixWorld(),r[0].set(Number(n.x),Number(n.y),Number(n.z)),e&&r[1].set(Number(e.x),Number(e.y),Number(e.z))}else Rt.visible=!1},engine.core.callInLoop((()=>{t.copy(r[0]),e.copy(r[1]),Mt&&Mt.threeObj.localToWorld(e),o.setFromPoints([t,e])})),Wt();const i=engine.cameraControls.orbitObj(engine.core.scene);Ht.addEventListener("mouseDown",(()=>i.enabled=!1)),Ht.addEventListener("mouseUp",(()=>i.enabled=!0)),Ht.addEventListener("change",(t=>{if(!t.target||!t.target.object||1!==t.target.object.children.length)return;const e=t.target.object.scale,n=t.target.object.children[0];if("sphere"===n.shapeType)e.setScalar((e.x+e.y+e.z)/3);else if("cylinder"===n.shapeType){const t=(e.x+e.z)/2;e.x=t,e.z=t}})),engine.core.listenClick((t=>{if(!Gt)return;const e=t.find((t=>t.object.isEditorShape&&t.object.parent.visible));e&&F.selectShape(e.object)})),engine.core.callInLoop((()=>{const t=Date.now();nt.bodies.forEach((e=>{e.transformFunction&&e.transformFunction.call(e.threeObj,t)}))})),f.log("editor initialized. shift+click to select a shape. press S to switch transform mode. press shift+D to duplicate a shape.")}catch(t){f.error(t),console.log(t)}};const _t=It,Xt=i({id:"map-test-page",classes:"game-container"});Xt.start=function(){engine.core.init(Xt),engine.files.loadLocalMapFile((t=>{const e=engine.physics.World(t,!0,!0);engine.cameraControls.orbitDynamicObj(e.player),engine.characterControls.controlVelocity(e),engine.on("item-collected",(t=>{switch(t.detail.collectible){case"chain-extension-5":e.addChainLength(5);break;case"chain-extension-30":e.addChainLength(30);break;case"chain-extension-35":e.addChainLength(35)}})),engine.on("switch-change",(t=>{const e=t.detail;console.log("switch state changed : ",e)}))}))};const Yt=Xt,Kt=n.p+"de6260a6c9c8937fe0c4c29616a8acb0.png",Qt=i({id:"homepage"});Qt.style.backgroundImage=`url(${Kt})`;const te=i({tagName:"H1",html:"Chain Dungeon Game"}),ee=i({id:"homepage-picking-box",classes:"hidden"});function ne(t,e,n){const r=i({tagName:"BUTTON",html:t});if(n){const t=a(n);t.style.fontSize="1.5em",r.prepend(" "),r.prepend(t)}return r.onclick=()=>{document.body.append(e),e.start(),r.blur()},r}ee.append(ne("PLAY GAME",c,"fas fa-play-circle"),ne("EDIT map",_t,"fas fa-edit"),ne("TEST map",Yt,"fas fa-gamepad")),Qt.append(te,ee),ee.setInitState=function(){ee.classList.remove("hidden")},window.addEventListener("engine-loaded",(()=>{ee.setInitState()}));const re=Qt;document.body.append(re)})()})();