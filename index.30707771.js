var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("9dxg1");document.addEventListener("DOMContentLoaded",(()=>{let e;const n=document.querySelector(".breed-select");n.addEventListener("change",(e=>{const n=e.target.value;n&&(0,r.fetchCatByBreed)(n)})),(0,r.fetchBreeds)().then((o=>{e=o;const t=o.map((e=>`<option value="${e.id}">${e.name}</option>`)).join("");n.innerHTML=t,n.style.display="block",document.querySelector(".loader").style.display="none"})).catch((e=>{console.error(e),document.querySelector(".error").style.display="block"}))}));
//# sourceMappingURL=index.30707771.js.map
