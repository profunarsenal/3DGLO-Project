(()=>{"use strict";(e=>{const t=document.getElementById("timer-days"),n=document.getElementById("timer-hours"),a=document.getElementById("timer-minutes"),s=document.getElementById("timer-seconds");let l;const o=()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,seconds:Math.floor(t%60),minutes:Math.floor(t/60%60),hours:Math.floor(t/60/60%24),days:Math.floor(t/60/60/24)}};l=setInterval((()=>{o().timeRemaining>0?(()=>{let e=o();t.textContent=e.days<10?`0${e.days} :`:`${e.days} :`,n.textContent=e.hours<10?`0${e.hours} :`:`${e.hours} :`,a.textContent=e.minutes<10?`0${e.minutes} :`:`${e.minutes} :`,s.textContent=e.seconds<10?`0${e.seconds}`:e.seconds})():(clearInterval(l),t.textContent="00",n.textContent="00",a.textContent="00",s.textContent="00")}),1e3)})("22 may 2022"),(()=>{const e=document.querySelector("menu");document.addEventListener("click",(t=>{t.target.closest(".menu")?e.classList.add("active-menu"):(t.target.classList.contains("close-btn")||t.target.matches("ul>li>a")||!t.target.closest("menu"))&&e.classList.remove("active-menu")}))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),n=t.querySelector(".popup-content");let a=document.documentElement.clientWidth;const s=()=>{a<768?(t.style.cssText+="\n      display: none;\n      opacity: 1;\n      visibility: visible;\n      pointer-events: all;\n      transition: none;\n      ",n.style.cssText+="\n      transition: none;\n      transform: translate(-50px, 0);\n      "):(t.style.cssText+="\n      display: block;\n      opacity: 0;\n      visibility: hidden;\n      pointer-events: none;\n      transition: 0.5s ease;\n      ",n.style.cssText+="\n      transition: 0.5s ease;\n      transform: translate(-50px,-100%);\n      ")},l=()=>{a<768?(t.style.cssText+="\n      display: block;\n      opacity: 1;\n      visibility: visible;\n      pointer-events: all;\n      transition: none;\n      ",n.style.cssText+="\n      transition: none;\n      transform: translate(-50px, 0);\n      "):(t.style.cssText+="\n      display: block;\n      opacity: 1;\n      visibility: visible;\n      pointer-events: all;\n      transition: 0.5s ease;\n      ",n.style.cssText+="\n      transition: 0.5s ease;\n      transform: translate(-50px, 0);\n      ")};s(),e.forEach((e=>{e.addEventListener("click",l)})),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||s()})),window.addEventListener("resize",(()=>{a=document.documentElement.clientWidth}))})(),[...document.querySelectorAll("menu>ul>li>a"),document.querySelector("main>a")].forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const n=e.getAttribute("href"),a=document.querySelector(n);a&&a.scrollIntoView({block:"start",behavior:"smooth"})}))})),(()=>{const e=document.querySelectorAll(".calc-item"),t=document.querySelector("#form1"),n=document.querySelector("#form2"),a=document.querySelector("#form3"),s=document.querySelectorAll(".form-email"),l=document.querySelectorAll(".form-phone"),o=document.querySelectorAll(".form-name"),r=e=>{e.preventDefault();const t=e.target.querySelector(".form-email"),n=e.target.querySelector(".form-phone"),a=e.target.querySelector("#form2-message");let s=!1;a&&/[^а-яА-Я]/g.test(a.value)&&(s=!0),/[^\w\@\.\~\-\!\'\*]/g.test(t.value)&&(s=!0),/[^\d\(\)\-]/g.test(n.value)&&(s=!0),s||console.log("Данные отправлены")};t.addEventListener("submit",r),n.addEventListener("submit",r),a.addEventListener("submit",r),e.forEach(((e,t)=>{t>0&&e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D/,"")}))})),s.forEach((e=>{e.addEventListener("blur",(()=>{e.value=e.value.replace(/[^\w\@\.\~\-\!\'\*\s]/g,""),e.value=e.value.replace(/(^\s+|\s+$)|(^\-+|\-+$)/g,""),e.value=e.value.replace(/-{2,}/g,"-"),e.value=e.value.replace(/\s{2,}/g," ")}))})),l.forEach((e=>{e.addEventListener("blur",(()=>{e.value=e.value.replace(/[^\d\(\)\-\s]/g,""),e.value=e.value.replace(/(^\s+|\s+$)|(^\-+|\-+$)/g,""),e.value=e.value.replace(/-{2,}/g,"-"),e.value=e.value.replace(/\s{2,}/g," ")}))})),o.forEach((e=>{e.addEventListener("blur",(()=>{e.value=e.value.replace(/(^\s+|\s+$)|(^\-+|\-+$)/g,""),e.value=e.value.replace(/-{2,}/g,"-"),e.value=e.value.replace(/\s{2,}/g," "),e.value=e.value.replace(/[а-яa-z]+/gi,(e=>e[0].toUpperCase()+e.slice(1)))}))}))})(),(()=>{const e=document.querySelectorAll(".service-tab"),t=document.querySelector(".service-header"),n=document.querySelectorAll(".service-header-tab");t.addEventListener("click",(t=>{if(t.target.closest(".service-header-tab")){const a=t.target.closest(".service-header-tab");n.forEach(((t,n)=>{t===a?(t.classList.add("active"),e[n].classList.remove("d-none")):(t.classList.remove("active"),e[n].classList.add("d-none"))}))}}))})(),((e,t)=>{const n=document.querySelector(e),a=document.querySelectorAll(t);let s,l=0,o=[];const r=(e,t,n)=>{e[t].classList.remove(n)},c=(e,t,n)=>{e[t].classList.add(n)},i=()=>{r(a,l,"slide-active"),r(o,l,"dot-active"),l++,l>=a.length&&(l=0),c(a,l,"slide-active"),c(o,l,"dot-active")},u=(e=1500)=>{s=setInterval(i,e)};n&&0!==a.length&&((()=>{const e=document.createElement("style");e.textContent="\n    .slide-active {\n      opacity: 1;\n      -webkit-transition: opacity .5s;\n      transition: opacity .5s\n    }\n    ",document.head.append(e),a[0].classList.add("slide-active")})(),n.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(r(a,l,"slide-active"),r(o,l,"dot-active"),e.target.matches("#arrow-left")?l--:e.target.matches("#arrow-right")?l++:e.target.matches(".dot")&&o.forEach(((t,n)=>{e.target===t&&(l=n)})),l>=a.length&&(l=0),l<0&&(l=a.length-1),c(a,l,"slide-active"),c(o,l,"dot-active"))})),n.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(s)}),!0),n.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&u(2e3)}),!0),u(2e3),(()=>{const e=document.createElement("ul");e.classList.add("portfolio-dots"),a.forEach((t=>{const n=document.createElement("li");n.classList.add("dot"),o.push(n),o[0].classList.add("dot-active"),e.append(n)})),n.append(e)})())})(".portfolio-content",".portfolio-item"),((e=100)=>{const t=document.querySelector(".calc-block"),n=t.querySelector(".calc-type"),a=t.querySelector(".calc-square"),s=t.querySelector(".calc-count"),l=t.querySelector(".calc-day"),o=t.querySelector("#total");t.addEventListener("input",(t=>{t.target!==n&&t.target!==a&&t.target!==s&&t.target!==l||(()=>{const t=+n.options[n.selectedIndex].value,r=+a.value;let c=0,i=1,u=1;l.value&&l.value<5?u=2:l.value&&l.value<10&&(u=1.5),s.value>1&&(i+=+s.value/10),c=t&&r?e*t*r*i*u:0,((e,t)=>{if(e>0){let n=0,a=Math.round(1e3/(e/100)),s=setInterval((()=>{n+=100,n==e&&clearInterval(s),t.textContent=n}),a)}})(c,o)})()}))})()})();