import{y as u,D as _}from"./preact.module.dec703d8.js";const y="modulepreload",E=function(t){return"/shri2023-task/"+t},m={},w=function(o,s,c){if(!s||s.length===0)return o();const f=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=E(e),e in m)return;m[e]=!0;const a=e.endsWith(".css"),d=a?'[rel="stylesheet"]':"";if(!!c)for(let n=f.length-1;n>=0;n--){const l=f[n];if(l.href===e&&(!a||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${d}`))return;const r=document.createElement("link");if(r.rel=a?"stylesheet":y,a||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),a)return new Promise((n,l)=>{r.addEventListener("load",n),r.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o()).catch(e=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=e,window.dispatchEvent(a),!a.defaultPrevented)throw e})},v=({value:t,name:o,hydrate:s=!0})=>t?u(s?"astro-slot":"astro-static-slot",{name:o,dangerouslySetInnerHTML:{__html:t}}):null;v.shouldComponentUpdate=()=>!1;var g=v;const h=new Map;var k=t=>async(o,s,{default:c,...f})=>{if(!t.hasAttribute("ssr"))return;for(const[i,r]of Object.entries(f))s[i]=u(g,{value:r,name:i});if(t.dataset.preactSignals){const{signal:i}=await w(()=>import("./signals.module.cf4d8c17.js"),["_astro/signals.module.cf4d8c17.js","_astro/preact.module.dec703d8.js","_astro/hooks.module.ecbc82b6.js"]);let r=JSON.parse(t.dataset.preactSignals);for(const[n,l]of Object.entries(r)){if(!h.has(l)){const p=i(s[n]);h.set(l,p)}s[n]=h.get(l)}}function a({children:i}){let r=Object.fromEntries(Array.from(t.attributes).map(n=>[n.name,n.value]));return u(t.localName,r,i)}let d=t.parentNode;_(u(a,null,u(o,s,c!=null?u(g,{value:c}):c)),d,t)};export{k as default};