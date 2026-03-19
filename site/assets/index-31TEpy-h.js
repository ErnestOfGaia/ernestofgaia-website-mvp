import{r as c,j as e,c as v}from"./vendor-EfEd6_uT.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=(...t)=>t.filter((r,n,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,n,o)=>o?o.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=t=>{const r=w(t);return r.charAt(0).toUpperCase()+r.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var C={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=t=>{for(const r in t)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=c.forwardRef(({color:t="currentColor",size:r=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:s="",children:a,iconNode:d,...u},m)=>c.createElement("svg",{ref:m,...C,width:r,height:r,stroke:t,strokeWidth:o?Number(n)*24/Number(r):n,className:b("lucide",s),...!a&&!N(u)&&{"aria-hidden":"true"},...u},[...d.map(([f,g])=>c.createElement(f,g)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=(t,r)=>{const n=c.forwardRef(({className:o,...s},a)=>c.createElement(k,{ref:a,iconNode:r,className:b(`lucide-${j(y(t))}`,`lucide-${t}`,o),...s}));return n.displayName=y(t),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],I=h("chevron-left",L);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],_=h("chevron-right",S);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],$=h("linkedin",E);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],R=h("youtube",A),z="+15036640564",O="https://www.linkedin.com/in/ernestofgaia/",P="https://x.com/ErnestOfGaia",U="https://www.youtube.com/@ErnestOfGaia",M=()=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.259 5.627 5.905-5.627zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),T=()=>e.jsx("header",{"aria-label":"Site header",style:{position:"relative",width:"100%",background:"transparent",zIndex:10},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"1.25rem 2.5rem"},children:[e.jsxs("div",{style:{display:"flex",gap:"0.6rem",alignItems:"center"},children:[e.jsx("a",{href:O,target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",className:"social-btn",children:e.jsx($,{size:18})}),e.jsx("a",{href:P,target:"_blank",rel:"noopener noreferrer","aria-label":"X / Twitter",className:"social-btn",children:e.jsx(M,{})}),e.jsx("a",{href:U,target:"_blank",rel:"noopener noreferrer","aria-label":"YouTube",className:"social-btn",children:e.jsx(R,{size:18})})]}),e.jsx("a",{href:`sms:${z}`,className:"sketch-btn",children:"Leave a text message"})]})}),p=["/slide1.png","/slide2.png","/slide3.png"],B=()=>{const[t,r]=c.useState(0),[n,o]=c.useState(-1),[s,a]=c.useState("next"),[d,u]=c.useState(!0),m=()=>{u(!1),a("next"),o(t),r(i=>i===p.length-1?0:i+1)},f=()=>{u(!1),a("prev"),o(t),r(i=>i===0?p.length-1:i-1)},g=i=>{i!==t&&(u(!1),a(i>t?"next":"prev"),o(t),r(i))};return e.jsxs("div",{style:{position:"relative",width:"100%",maxWidth:"1200px",margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"center"},children:[e.jsx("button",{className:"carousel-nav prev",onClick:f,"aria-label":"Previous slide",style:{position:"absolute",left:"0",zIndex:10},children:e.jsx(I,{size:32})}),e.jsx("div",{"aria-live":"polite","aria-atomic":"true",style:{position:"relative",width:"100%",height:"75vh",display:"flex",justifyContent:"center"},children:p.map((i,l)=>{let x="inactive";return l===t?x=d?"active initial-fade":`active ${s}-in`:l===n&&(x=`outgoing ${s}-out`),e.jsx("img",{src:i,alt:`Content slide ${l+1}`,className:`gallery-slide ${x}`},l)})}),e.jsx("button",{className:"carousel-nav next",onClick:m,"aria-label":"Next slide",style:{position:"absolute",right:"0",zIndex:10},children:e.jsx(_,{size:32})}),e.jsx("div",{className:"carousel-indicators",role:"tablist","aria-label":"Slide indicators",style:{position:"absolute",bottom:"-40px",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"8px"},children:p.map((i,l)=>e.jsx("button",{role:"tab","aria-selected":l===t,"aria-label":`Go to slide ${l+1}`,className:`indicator ${l===t?"active":""}`,onClick:()=>g(l),style:{width:"10px",height:"10px",borderRadius:"50%",padding:0}},l))})]})},H=()=>e.jsx("footer",{"aria-label":"Site footer",style:{background:"transparent",padding:"1rem 0"}}),q="/assets/background-CgEs_v2A.png";function W(){return e.jsxs("div",{className:"app-wrapper",children:[e.jsx("div",{className:"bg-layer",style:{backgroundImage:`url(${q})`}}),e.jsxs("div",{className:"app-content",children:[e.jsx(T,{}),e.jsx("main",{className:"main-content",children:e.jsx(B,{})}),e.jsx(H,{})]})]})}v.createRoot(document.getElementById("root")).render(e.jsx(c.StrictMode,{children:e.jsx(W,{})}));
