import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as S,i as x}from"./assets/vendor-77e16229.js";const e=document.querySelector("[data-start]"),u=document.querySelector("[data-days]"),d=document.querySelector("[data-hours]"),i=document.querySelector("[data-minutes]"),l=document.querySelector("[data-seconds]"),m=document.querySelector("#datetime-picker");let o,f;e.disabled=!0;const T={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){o=t[0],o<Date.now()?(x.error({message:"Please choose a date in the future",position:"topRight"}),e.disabled=!0):e.disabled=!1}};S(m,T);e.addEventListener("click",()=>{o&&(b(),m.disabled=!0,e.disabled=!0)});function b(){f=setInterval(()=>{const t=o-Date.now();v(t),t<=0&&q()},1e3)}function q(){clearInterval(f),D()}function D(){u.textContent="00",d.textContent="00",i.textContent="00",l.textContent="00"}function v(t){const{days:r,hours:s,minutes:a,seconds:c}=E(t);u.textContent=n(r),d.textContent=n(s),i.textContent=n(a),l.textContent=n(c)}function n(t){return String(t).padStart(2,"0")}function E(t){const h=Math.floor(t/864e5),y=Math.floor(t%864e5/36e5),p=Math.floor(t%864e5%36e5/6e4),C=Math.floor(t%864e5%36e5%6e4/1e3);return{days:h,hours:y,minutes:p,seconds:C}}
//# sourceMappingURL=commonHelpers.js.map
