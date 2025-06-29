/* empty css                      */import{a as h,S as g,i as a}from"./assets/vendor-Dy2ZTtfi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const L="50850315-f0f392daf437796dee68f08e0",b="https://pixabay.com/api/",c=15;async function w(r,o=1){const t={key:L,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:c,page:o},{data:i}=await h.get(b,{params:t});return i}const u=document.querySelector(".gallery"),f=document.querySelector(".loader"),v=new g(".gallery a");function S(r){const o=r.map(t=>`
    <li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <ul class="info">
      <li class="info-item">
        <p class="info-title">Likes</p>
        <p class="info-p">${t.likes}</p>
      </li>
      <li class="info-item">
        <p class="info-title">Views</p>
        <p class="info-p">${t.views}</p>
      </li>
      <li class="info-item">
        <p class="info-title">Comments</p>
        <p class="info-p">${t.comments}</p>
      </li>
      <li class="info-item">
        <p class="info-title">Downloads</p>
        <p class="info-p">${t.downloads}</p>
      </li>
    </ul>
    </li>
  `).join("");u.insertAdjacentHTML("beforeend",o),v.refresh()}function q(){u.innerHTML=""}function E(){f.classList.add("visible")}function M(){f.classList.remove("visible")}const d=document.querySelector(".load-more-btn");function R(){d.classList.add("visible")}function p(){d.classList.remove("visible")}const B=document.querySelector(".form"),P=document.querySelector(".search-inp"),$=document.querySelector(".load-more-btn");let m="",n=1;B.addEventListener("submit",O);$.addEventListener("click",A);async function O(r){r.preventDefault();const o=P.value.trim();if(!o){a.warning({message:"Введіть щось для пошуку!",position:"topRight"});return}m=o,n=1,q(),p(),await y()}async function A(){n+=1,await y()}async function y(){E();try{const{hits:r,totalHits:o}=await w(m,n);if(r.length===0&&n===1){a.info({message:"На жаль, нічого не знайдено. Спробуйте інший запит!",position:"topRight",color:"red"});return}S(r);const t=Math.ceil(o/c);if(n<t?R():(p(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),n>1){const{height:i}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:i*2,behavior:"smooth"})}}catch(r){a.error({message:"Error",position:"topRight"}),console.error(r)}finally{M()}}
//# sourceMappingURL=index.js.map
