import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as h,i as p}from"./assets/vendor-77e16229.js";let i,n;const l={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]),i=t[0],n=i-l.defaultDate,n<1?p.error({color:"red",position:"topRight",title:"Error",message:"Illegal operation",titleColor:"white",messageColor:"white",icon:"white"}):(e.disabled=!1,a.disabled=!0,e.classList.add("btn-active"))}};function f(t){const c=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:d,minutes:u,seconds:m}}h("#datetime-picker",l);const a=document.querySelector("#datetime-picker"),e=document.querySelector("button"),r=document.querySelectorAll(".value");console.log(r);e.disabled=!0;e.addEventListener("click",t=>{const s=setInterval(()=>{if(n=i-new Date,t.preventDefault(),a.disabled=!0,e.classList.remove("btn-active"),n<1){e.disabled=!0,a.disabled=!1,clearInterval(s);return}const o=f(n);r[0].innerText=o.days.toString().padStart(2,"0"),r[1].innerText=o.hours.toString().padStart(2,"0"),r[2].innerText=o.minutes.toString().padStart(2,"0"),r[3].innerText=o.seconds.toString().padStart(2,"0")},1e3)});
//# sourceMappingURL=commonHelpers.js.map
