const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let n;function d(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}function o(){t.disabled=!t.disabled,e.disabled=!e.disabled}e.disabled=!0,t.addEventListener("click",(function(){d(),n=setInterval(d,1e3),o()})),e.addEventListener("click",(function(){clearInterval(n),o()}));
//# sourceMappingURL=01-color-switcher.9b4f11b6.js.map