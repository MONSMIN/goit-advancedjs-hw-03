import{a as d,i as p,S as h}from"./assets/vendor-43ae9e23.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();d.defaults.headers.common["x-api-key"]="live_387Mr5NSdTViGuSkWsWNpNhx7HXBFt6TTwyYgidC1P2hjqMqtkVYhdbmUqjWvBhp";async function m(){return await d.get("https://api.thecatapi.com/v1/breeds").then(t=>t.data)}async function g(t){return await d.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${t}`).then(r=>r.data[0])}const u=document.querySelector("#breed-select"),a=document.querySelector(".cat-info"),l=document.querySelector(".loader");function f(){p.show({title:"Error",message:"❌ Oops! Something went wrong! Try reloading the page!",position:"topCenter",color:"red"})}function n(t,r){t.classList.toggle("hidden",!r)}function y(t){t&&(n(a,!1),n(l,!0),g(t).then(S).catch(f).finally(()=>{n(l,!1)}))}function S(t){const{name:r,description:i,temperament:s}=t.breeds[0],e=t.url;a.innerHTML=`
      <img class="cat-img" src="${e}" alt="${r}"/>
      <div class="cat-description">
        <h2>${r}</h2>
        <p>${i}</p>
        <p><b>Temperament:</b> ${s}</p>
      </div>
  `,n(a,!0)}function v(t){n(u,!0),new h({select:u,settings:{placeholderText:"Search breed"},data:[{placeholder:!0,text:""},...t],events:{afterChange:r=>{var i;return y((i=r[0])==null?void 0:i.value)}}})}function b(){m().then(t=>{v(t.map(({id:r,name:i})=>({text:i,value:r})))}).catch(f).finally(()=>{n(l,!1)})}b();
//# sourceMappingURL=commonHelpers.js.map
