(()=>{"use strict";(e=>{const t=document.getElementById("timer-days"),n=document.getElementById("timer-hours"),s=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");let i;const l=()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,seconds:Math.floor(t%60),minutes:Math.floor(t/60%60),hours:Math.floor(t/60/60%24),days:Math.floor(t/60/60/24)}};i=setInterval((()=>{l().timeRemaining>0?(()=>{let e=l();t.textContent=e.days<10?`0${e.days} :`:`${e.days} :`,n.textContent=e.hours<10?`0${e.hours} :`:`${e.hours} :`,s.textContent=e.minutes<10?`0${e.minutes} :`:`${e.minutes} :`,o.textContent=e.seconds<10?`0${e.seconds}`:e.seconds})():(clearInterval(i),t.textContent="00",n.textContent="00",s.textContent="00",o.textContent="00")}),1e3)})("1 may 2022"),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),s=t.querySelectorAll("ul>li>a"),o=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",o),n.addEventListener("click",o),s.forEach((e=>{e.addEventListener("click",o)}))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),n=t.querySelector(".popup-close"),s=t.querySelector(".popup-content");let o=document.documentElement.clientWidth;const i=()=>{o<768?(t.style.cssText+="\n      display: none;\n      opacity: 1;\n      visibility: visible;\n      pointer-events: all;\n      transition: none;\n      ",s.style.cssText+="\n      transition: none;\n      transform: translate(-50px, 0);\n      "):(t.style.cssText+="\n      display: block;\n      opacity: 0;\n      visibility: hidden;\n      pointer-events: none;\n      transition: 0.5s ease;\n      ",s.style.cssText+="\n      transition: 0.5s ease;\n      transform: translate(-50px,-100%);\n      ")},l=()=>{o<768?(t.style.cssText+="\n      display: block;\n      opacity: 1;\n      visibility: visible;\n      pointer-events: all;\n      transition: none;\n      ",s.style.cssText+="\n      transition: none;\n      transform: translate(-50px, 0);\n      "):(t.style.cssText+="\n      display: block;\n      opacity: 1;\n      visibility: visible;\n      pointer-events: all;\n      transition: 0.5s ease;\n      ",s.style.cssText+="\n      transition: 0.5s ease;\n      transform: translate(-50px, 0);\n      ")};i(),e.forEach((e=>{e.addEventListener("click",l)})),n.addEventListener("click",i),window.addEventListener("click",(e=>{e.target==t&&i()})),window.addEventListener("resize",(()=>{o=document.documentElement.clientWidth}))})(),[...document.querySelectorAll("menu>ul>li>a"),document.querySelector("main>a")].forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const n=e.getAttribute("href"),s=document.querySelector(n);s&&s.scrollIntoView({block:"start",behavior:"smooth"})}))}))})();