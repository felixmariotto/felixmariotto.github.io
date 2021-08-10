!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.immersify=t():e.immersify=t()}(self,(function(){return(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);const t={requestSession:function(){return new Promise((e=>{navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor","hand-tracking","layers"]}).then((t=>{this.session=t,e()}))}))}},n=document.createElement("button");n.innerHTML="Enter VR",n.id="immersify-vrbutton",n.style.position="fixed",n.style.left="50%",n.style.bottom="20px",n.style.width="120px",n.style.height="50px",n.style.borderRadius="25px",n.style.borderColor="#333333",n.style.borderStyle="solid",n.style.color="#333333",n.style.transform="translateX( -50% )",n.style.fontFamily="Calibri",n.style.fontSize="1.4em",n.style.display="flex",n.style.alignItems="center",n.style.justifyContent="center",n.style.cursor="pointer";const o=function(){const e=document.createElement("canvas");e.width=28,e.height=28;const t=e.getContext("2d");return t.imageSmoothingQuality="high",t.beginPath(),t.arc(14,14,12,2*Math.PI*.7-Math.PI/2,-Math.PI/2,!0),t.lineWidth=2,t.strokeStyle="#333333",t.stroke(),e}();let i;function s(e){return new Promise(((t,n)=>{const o=document.createElement("script");o.src=e,o.addEventListener("load",t),o.addEventListener("error",(e=>n(e.error))),document.head.appendChild(o)}))}n.addEventListener("click",(async()=>{n.innerHTML="",n.append(o),i=setInterval((()=>{o.style.transform=`rotate( ${Date.now()%1e3/1e3*360}deg )`}),17),s("https://cdn.jsdelivr.net/npm/three@0.131.0/build/three.js").then((()=>{const e=[s("https://cdn.jsdelivr.net/npm/three@0.131.0/examples/js/geometries/BoxLineGeometry.js"),s("https://cdn.jsdelivr.net/npm/three@0.131.0/examples/js/controls/OrbitControls.js"),s("https://cdn.jsdelivr.net/npm/three@0.131.0/examples/js/interactive/HTMLMesh.js")];n.skipXR||e.push(t.requestSession()),Promise.all(e).then((()=>{!function(e,n){const o=window.innerWidth,i=window.innerHeight,s=document.createElement("canvas");s.style.width="100vw",s.style.height="100vh",s.style.position="fixed",s.style.left="0",s.style.top="0",s.style.zIndex="10000";const r=new THREE.Scene;r.background=new THREE.Color(5263440);const d=new THREE.PerspectiveCamera(60,o/i,.1,100),a=new THREE.WebGLRenderer({antialias:!0,canvas:s});a.setPixelRatio(window.devicePixelRatio),a.setSize(o,i),a.xr.enabled=!0,document.body.appendChild(s);const l=new THREE.OrbitControls(d,s);d.position.set(0,1.6,0),l.target=new THREE.Vector3(0,1,-1.8),l.update(),n&&async function(){await a.xr.setSession(t.session)}();const c=new THREE.LineSegments(new THREE.BoxLineGeometry(6,6,6,10,10,10).translate(0,3,0),new THREE.LineBasicMaterial({color:8421504})),m=new THREE.HTMLMesh(e);m.position.set(0,1,-2),m.rotation.x=-.2,r.add(c,m),a.setAnimationLoop((function(){a.render(r,d)})),window.addEventListener("resize",(function(){d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)}))}(document.body,!n.skipXR)})).catch((e=>{console.error(e)}))})).catch((e=>{console.error(e)}))}));const r=n;return window?window.addEventListener("load",(()=>{navigator.xr.isSessionSupported("immersive-vr").then((function(e){e&&document.body.append(r)}))})):console.warn("immersify can't find window object."),e})()}));