!function(e){function t(t){for(var r,i,c=t[0],a=t[1],s=t[2],u=0,y=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&y.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(d&&d(t);y.length;)y.shift()();return l.push.apply(l,s||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(r=!1)}r&&(l.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},l=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var d=a;l.push([0,1]),n()}([function(e,t,n){"use strict";n.r(t);n(1),n(4)},function(e,t,n){var r=n(2),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var l={insert:"head",singleton:!1};r(o,l);e.exports=o.locals||{}},,function(e,t,n){},function(e,t){const n=document.querySelectorAll(".list-card"),r=document.querySelector(".add__button-card"),o=document.querySelector(".form-add__card-btn"),l=document.querySelector(".form-cancel__card-btn"),i=document.querySelector(".app"),c=document.querySelector(".textarea"),a=document.querySelector(".form"),s=document.querySelector(".add-boards"),d=document.querySelector(".burger__menu"),u=document.querySelector(".settings__menu");let y,p=null;if(document.querySelectorAll(".settings__list-item").forEach(e=>{e.addEventListener("click",()=>{e.id||alert("Тут ничего пока нет!")})}),function(){const e=document.createElement("div");e.classList.add("list__image"),[1,2,3,4,5,6,7,8,9,10,11,12].forEach(t=>{const n=document.createElement("label"),r=document.createElement("input"),o=document.createElement("img");r.type="radio",r.name="bg-image",n.for="bg_"+t,r.id="bg_"+t,r.value=""+t,o.src=`/source/image/background/bg_${t}.jpg`,n.append(r),n.append(o),e.append(n)}),u.append(e)}(),d.addEventListener("click",(function(){const e=document.querySelector(".list__image");u.classList.add("active"),i.style.filter="blur(5px)",e.style.display="none"})),u.addEventListener("click",(function(e){const t=e.target,n=document.querySelector(".settings__list"),r=document.querySelector(".list__image");if(t.classList.contains("settings__close")&&("block"===r.style&&(r.style.display="none"),"none"===n.style.display&&(n.style.display="block"),i.style.filter="none",this.classList.remove("active")),"changeBgImg"===t.id){n.style.display="none";document.querySelector(".list__image").style.display="flex"}})),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){document.querySelector("nav").remove(),a.remove(),r.remove(),i.style.paddingTop="10px"}function f(){c.value="",y="",a.style.display="none",o.style.display="none",r.style.display="block"}function m(){document.querySelectorAll(".board__title").forEach(e=>{e.addEventListener("click",t=>{const n=t.target;if("Введите название"!==n.textContent)return!0;n.innerText="",e.addEventListener("keydown",(function(e){13===e.keyCode&&this.blur()}))})})}function g(){const e=document.querySelectorAll(".card"),t=document.querySelectorAll(".list-card");for(let n=0;n<e.length;n++){const r=e[n];r.addEventListener("dragstart",()=>{p=r,setTimeout(()=>{r.style.visibility="hidden"},0)}),r.addEventListener("dragend",()=>{setTimeout(()=>{r.style.visibility="visible",p=null},0)}),r.addEventListener("dblclick",()=>{r.remove()});for(let e=0;e<t.length;e++){const n=t[e];n.addEventListener("dragover",e=>e.preventDefault()),n.addEventListener("dragenter",(function(){this.style.backgroundColor="rgba(0,0,0, .3)"})),n.addEventListener("dragleave",(function(){this.style.backgroundColor="transparent"})),n.addEventListener("drop",(function(e){this.style.backgroundColor="transparent",this.append(p)}))}}}s.addEventListener("click",(function(){const e=document.querySelector(".boards"),t=document.createElement("div");t.classList.add("board"),t.innerHTML='\n        <h4 contenteditable="true" class="board__title">Введите название</h4>\n        <ul class="list-card"></ul>\n  ',e.append(t),m(),g()})),r.addEventListener("click",(function(){a.style.display="block",this.style.display="none"})),c.addEventListener("input",e=>{y=e.target.value,y.trim().length<1?o.style.display="none":o.style.display="block"}),o.addEventListener("click",()=>{const e=document.createElement("li");e.classList.add("card"),e.draggable=!0,e.innerText=y,e.title="кликни два раза чтобы удалить",n[0].append(e),f(),g()}),l.addEventListener("click",()=>{f()}),m(),g(),document.addEventListener("DOMContentLoaded",(function(){function e(e){i.style.backgroundImage=`url('/source/image/background/bg_${e}.jpg')`}document.querySelector(".list__image").addEventListener("click",(function(t){const n=document.querySelector(".settings__list");let r;r=t.target.value,e(r),this.style.display="none",n.style.display="block",i.style.filter="none",u.classList.remove("active")})),e(1)}))}]);