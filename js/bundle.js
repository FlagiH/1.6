!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(6)},function(e,t,n){},function(e,t){for(var n=document.querySelector(".menu__container").querySelectorAll(".menu__container-button"),o=function(e){n[e].addEventListener("click",(function(){for(var t=0;t<n.length;t++)n[t].classList.contains("menu__container-button--active")&&n[t].classList.remove("menu__container-button--active");n[e].classList.contains("menu__container-button--active")||n[e].classList.add("menu__container-button--active")}))},c=0;c<n.length;c++)o(c)},function(e,t){for(var n=document.querySelector(".nav").querySelectorAll(".nav__button"),o=function(e){n[e].addEventListener("click",(function(){for(var t=0;t<n.length;t++)n[t].classList.contains("nav__button--active")&&n[t].classList.remove("nav__button--active");n[e].classList.contains("nav__button--active")||n[e].classList.add("nav__button--active")}))},c=0;c<n.length;c++)o(c)},function(e,t){var n=document.querySelector(".section__button"),o=document.querySelector(".section__text-read-more");n.addEventListener("click",(function(){o.classList.contains("section__text-read-more--active")?(o.classList.remove("section__text-read-more--active"),n.classList.remove("brands__box-read-more--rotated"),n.textContent="Показать все"):(o.classList.add("section__text-read-more--active"),n.classList.add("brands__box-read-more--rotated"),n.textContent="Скрыть")}))},function(e,t){for(var n=document.querySelector(".contacts__lang").querySelectorAll(".contacts__lang-button"),o=function(e){n[e].addEventListener("click",(function(){for(var t=0;t<n.length;t++)n[t].classList.contains("contacts__lang-button--active")&&n[t].classList.remove("contacts__lang-button--active");n[e].classList.contains("contacts__lang-button--active")||n[e].classList.add("contacts__lang-button--active")}))},c=0;c<n.length;c++)o(c)},function(e,t,n){"use strict";n.r(t);n(1);for(var o=document.querySelectorAll(".button-icon--sms"),c=document.querySelector(".modal-feedback"),a=c.querySelector(".button-icon--back"),r=document.querySelector(".body__content"),s=document.querySelector(".menu-container"),i=0;i<o.length;i++)o[i].addEventListener("click",(function(e){e.stopPropagation(),console.log("click feedback"),c.classList.contains("modal-feedback--hidden")&&(c.classList.remove("modal-feedback--hidden"),s.classList.add("menu-container--blur"),r.classList.add("body__content--blur"),q.push("modal-feedback"))}));var l=function(e){e&&e.stopPropagation(),c.classList.contains("modal-feedback--hidden")||(c.classList.add("modal-feedback--hidden"),q.pop(),E())};a.addEventListener("click",l);for(var d=l,u=document.querySelectorAll(".button-icon--phone"),_=document.querySelector(".modal-call"),b=_.querySelector(".button-icon--back"),m=document.querySelector(".body__content"),v=document.querySelector(".menu-container"),f=0;f<u.length;f++)u[f].addEventListener("click",(function(e){e.stopPropagation(),_.classList.contains("modal-call--hidden")&&(_.classList.remove("modal-call--hidden"),v.classList.add("menu-container--blur"),m.classList.add("body__content--blur"),q.push("modal-call"))}));var L=function(e){e&&e.stopPropagation(),_.classList.contains("modal-call--hidden")||(_.classList.add("modal-call--hidden"),q.pop(),E())};b.addEventListener("click",L);var y=L,p=document.querySelector(".button-icon--burger"),h=document.querySelector(".menu-container"),g=h.querySelector(".button-icon--back"),S=document.querySelector(".body__content");function k(e){e&&e.stopPropagation(),S.classList.contains("body__content--hidden")||(h.classList.add("menu-container--hidden"),q.pop(),E())}p.addEventListener("click",(function(e){e.stopPropagation(),h.classList.contains("menu-container--hidden")&&(h.classList.remove("menu-container--hidden"),S.classList.add("body__content--blur"),q.push("menu-modal"))})),g.addEventListener("click",k);var q=[];function x(e,t){for(var n=0;n<t.length;n+=1){if(e===t.slice(n,e.length+n))return!0}return!1}var E=function(){var e=document.querySelector(".body__content");0===q.length?e.classList.remove("body__content--blur"):h.classList.remove("menu-container--blur")},w=["menu-modal","modal-call","modal-feedback"];document.querySelector(".body__container").addEventListener("click",(function(e){for(var t=e.target.classList,n=!1,o=0;o<t.length;o++)for(var c=0;c<w.length;c++)x(w[c],t[o])&&(n=!0);q.length&&!n&&P[q[q.length-1]]()}));var P={"menu-modal":k,"modal-feedback":d,"modal-call":y},j=(n(2),n(3),n(4),n(5),{slidesPerView:"auto",allowTouchMove:!0,breakpoints:{768:{enabled:!1}},pagination:{el:".swiper-pagination",type:"bullets"}}),O=new Swiper(".brands__swiper",j),C=new Swiper(".technics__swiper",j);new Swiper(".prices",j);addEventListener("resize",(function(e){e.currentTarget.innerWidth>=768&&(O.slideTo(0),C.slideTo(0))}));var T=document.querySelector(".brands__box-read-more"),A=document.querySelector(".brands__block");T.addEventListener("click",(function(){A.classList.contains("brands__block--cut")?(A.classList.remove("brands__block--cut"),T.classList.add("brands__box-read-more--rotated"),T.textContent="Скрыть"):(A.classList.add("brands__block--cut"),T.classList.remove("brands__box-read-more--rotated"),T.textContent="Показать все")}));var M=document.querySelector(".technics__box-read-more"),z=document.querySelector(".technics__block--cut");M.addEventListener("click",(function(){z.classList.contains("technics__block--cut")?(z.classList.remove("technics__block--cut"),M.classList.add("technics__box-read-more--rotated"),M.textContent="Скрыть"):(z.classList.add("technics__block--cut"),M.classList.remove("technics__box-read-more--rotated"),M.textContent="Показать все")}))}]);
//# sourceMappingURL=bundle.js.map