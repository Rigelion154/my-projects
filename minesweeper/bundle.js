(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>h});var s=t(81),o=t.n(s),r=t(645),i=t.n(r),c=t(667),a=t.n(c),l=new URL(t(665),t.b),d=new URL(t(786),t.b),u=i()(o()),p=a()(l),m=a()(d);u.push([e.id,'\n* {\n    box-sizing: border-box;\n    user-select: none;\n    margin: 0;\n}\n\nbody {\n    font-family: "Roboto", sans-serif;\n    font-weight: bolder;\n    background: gainsboro;\n}\n\n.aside {\n    background: lightgray;\n    width: 50%;\n    padding: 10px;\n    display: flex;\n    justify-content: space-around;\n    row-gap: 5px;\n    border: 10px double gray;\n    border-radius: 5px;\n    margin: auto;\n}\n\n.buttons__wrapper {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n}\n\n.second-row {\n    display: flex;\n    flex-direction: column;\n    row-gap: 5px;\n}\n\n.set-mines {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    row-gap: 5px;\n}\n\n.set-mines__input {\n    min-width: 120px;\n    text-align: center;\n}\n\n\n.container {\n    max-width: 1100px;\n    height: 100%;\n    margin: 20px auto;\n}\n\n.header {\n    width: 50%;\n    margin: auto;\n    font-size: 20px;\n    display: flex;\n    flex-wrap: wrap;\n    border: 10px double gray;\n    background: lightgray;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    column-gap: 30px;\n    row-gap: 5px;\n    padding: 10px;\n    border-radius: 5px;\n}\n\n.buttons,\n.theme {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    row-gap: 5px;\n}\n\n\n.button,\n.score {\n    background: lightgray;\n    border: 3px outset darkgray;\n    padding: 5px;\n    font-size: 15px;\n    cursor: pointer;\n    border-radius: 5px;\n    text-align: center;\n}\n\n.center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    column-gap: 30px;\n}\n\n.timer,\n.progress,\n.mines__count,\n.flags__count,\n.set-mines__input::placeholder {\n    color: red;\n}\n\n.reset {\n    width: 50px;\n    height: 50px;\n    display: flex;\n    background: lightgray;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    background-size: cover;\n    padding: 5px;\n    border: 3px outset darkgray;\n    z-index: 2;\n    border-radius: 10px;\n}\n\n\n.field {\n    width: 50%;\n    display: flex;\n    flex-wrap: wrap;\n    margin: auto;\n    background: lightgray;\n    border: 10px double gray;\n    border-radius: 5px;\n}\n\n.cell {\n    display: flex;\n    width: 10%;\n    height: 10%;\n    background: lightgray;\n    border: 3px outset darkgray;\n    line-height: 15px;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    border-radius: 5px;\n}\n\n.big {\n    width: 4%;\n    height: 4%;\n    border-radius: 1px;\n}\n\n.medium-cell {\n    width: 6.6%;\n    height: 6.6%;\n}\n\n.open {\n    background: white;\n    border: 1px solid darkgrey;\n}\n\n.popup {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: -1;\n    display: flex;\n    opacity: 0;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    font-size: 40px;\n    color: red;\n    background: rgba(0, 0, 0, 0.8);\n    transition: opacity 0.3s ease-in;\n}\n\n.score-menu {\n    position: relative;\n    width: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: rgba(0, 0, 0, 0.8);\n    opacity: 0;\n    z-index: -1;\n    color: white;\n    border-radius: 10px;\n    margin: -45% auto;\n    transition: all 0.8s;\n}\n\n.menu-open {\n    z-index: 1;\n    opacity: 1;\n}\n\n.score__list {\n    font-size: 12px;\n    border: 10px double white;\n    padding: 20px 20px 20px 40px;\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    row-gap: 10px;\n    width: 100%;\n    text-align: center;\n}\n\n.score__item {\n    border-bottom: 1px solid white;\n}\n\n\n.dark-theme {\n    background: rgba(0, 0, 0, 0.8);\n    color: white;\n}\n\n.dark-theme .open {\n    background: gray;\n}\n\n.button-active {\n    background: darkgray;\n}\n\n.bomb:hover {\n    background: url('+p+");\n    background-size: cover;\n}\n\n.bomb {\n    background: url("+p+") !important;\n    background-size: cover !important;\n}\n\n.flag {\n    background: url("+m+");\n    background-size: cover;\n}\n\n.flag:hover {\n    background: url("+m+") !important;\n    background-size: cover !important;\n}\n\n.clicked {\n    border: 4px solid gray;\n}\n\n.cell-1 {\n    color: blue;\n}\n\n.cell-2 {\n    color: green;\n}\n\n.cell-3 {\n    color: red;\n}\n\n.cell-4 {\n    color: darkblue;\n}\n\n.cell-5 {\n    color: brown;\n}\n\n.cell-6 {\n    color: turquoise;\n}\n\n.cell-7 {\n    color: black;\n}\n\n.cell-8 {\n    color: gray;\n}\n\n.cell:hover,\n.button:hover {\n    background: grey;\n}\n\n@media screen and (max-width: 800px) {\n    .header {\n        column-gap: 10px;\n    }\n}\n\n@media screen and (max-width: 650px) {\n    .field {\n        width: 90%;\n        font-size: 12px;\n    }\n\n    .cell {\n        border-radius: 1px;\n    }\n\n    .header {\n        width: 90%;\n        column-gap: 5px;\n    }\n\n    .aside {\n        margin: 10px auto;\n        min-width: 90%;\n        float: none;\n        font-size: 12px;\n        padding: 5px;\n        row-gap: 5px;\n        flex-direction: row;\n        justify-content: space-around;\n          }\n\n    .reset {\n        width: 45px;\n        height: 45px;\n    }\n\n    .set-mines__input {\n        width: 30%;\n    }\n\n    .container {\n        margin: 0 auto;\n    }\n\n    .buttons {\n        text-align: center;\n        row-gap: 1px;\n    }\n\n    .theme {\n        row-gap: 5px;\n    }\n    .score-menu {\n        width: 90%;\n        margin: -87% auto;\n    }\n    .score__list {\n        padding: 10px 10px 10px 20px;\n    }\n}",""]);const h=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",s=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),s&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),s&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,s,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(s)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(i[a]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);s&&i[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,s=0;s<n.length;s++)if(n[s].identifier===e){t=s;break}return t}function s(e,s){for(var r={},i=[],c=0;c<e.length;c++){var a=e[c],l=s.base?a[0]+s.base:a[0],d=r[l]||0,u="".concat(l," ").concat(d);r[l]=d+1;var p=t(u),m={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=o(m,s);s.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=s(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=t(r[i]);n[c].references--}for(var a=s(e,o),l=0;l<r.length;l++){var d=t(r[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}r=a}}},569:e=>{var n={};e.exports=function(e,t){var s=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var s="";t.supports&&(s+="@supports (".concat(t.supports,") {")),t.media&&(s+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(s+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),s+=t.css,o&&(s+="}"),t.media&&(s+="}"),t.supports&&(s+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(s,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},665:(e,n,t)=>{e.exports=t.p+"assets/bombad25e700aa157603adf0.png"},786:(e,n,t)=>{e.exports=t.p+"assets/flag23fe45d06e9e149d6961.png"}},n={};function t(s){var o=n[s];if(void 0!==o)return o.exports;var r=n[s]={id:s,exports:{}};return e[s](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var s in n)t.o(n,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:n[s]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var s=n.getElementsByTagName("script");if(s.length)for(var o=s.length-1;o>-1&&!e;)e=s[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),s=t(795),o=t.n(s),r=t(569),i=t.n(r),c=t(565),a=t.n(c),l=t(216),d=t.n(l),u=t(589),p=t.n(u),m=t(426),h={};function g(){document.body.innerHTML='\n      <div class="container">\n       <aside class="aside">\n        <div class="buttons">\n          <h3 class="buttons__title">Field Size</h3>\n          <div class="buttons__wrapper">\n            <button class="small button active button-active">10x10</button>\n            <button class="medium button">15x15</button>\n            <button class="large button">25x25</button>\n          </div>\n        </div>\n          <div class="set-mines">\n            <h3 class="set-mines__title">Mines Count</h3>\n            <input class="set-mines__input" type="number" value="10" min="10" max="99" placeholder="min 10 max 99">\n            <button class="set-mines__button button" type="submit">Ok</button>\n          </div>\n        <div class="second-row">\n        <div class="theme">\n          <h3 class="theme__title">Theme</h3>\n          <button class="dark button">Dark</button>\n          <div class="score button">Score</div>\n        </div>\n\n     </div>\n        \n      </aside>\n        <div class="header">\n          <div class="time">\n            <h5 class="time__title">Time</h5>\n            <div class="timer"></div>\n          </div>\n          <div class="steps">\n            <h5 class="steps__title">Step</h5>\n            <div class="progress"></div>\n          </div>\n          <div class="center">\n            <img src= \'\' alt="smile" class="reset">\n          </div>\n          <div class="mines">\n            <h5 class="mines__title">Mines</h5>\n            <div class="mines__count">10</div>\n          </div>\n          <div class="flags">\n            <h5 class="flags__title">Flags</h5>\n            <div class="flags__count">0</div>\n          </div>\n          \n        </div>\n        <div class="field-wrapper">\n        </div>\n        <div class="popup-loose popup">Game over. Try again!</div>\n        <div class="popup-win popup">You Win</div>\n        <div class="score-menu">\n          <ol class="score__list">\n            <li class="score__item"></li>\n            <li class="score__item"></li>\n            <li class="score__item"></li>\n            <li class="score__item"></li>\n            <li class="score__item"></li>\n            <li class="score__item"></li>\n            <li class="score__item"></li>\n            <li class="score__item"></li>\n            <li class="score__item"></li>\n            <li class="score__item"></li>\n</ol>\n        </div>\n      </div>\n'}h.styleTagTransform=p(),h.setAttributes=a(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals,g();const f=t.p+"assets/smile77b005be436cc6022a4f.png",b=t.p+"assets/restartdcee50f673ba3201399c.mp3";let v;const y=new Audio(b);let x=0,w=0;function _(){const e=document.querySelector(".timer");x++,x>60&&(w++,x=0),e.innerHTML=`${w}`.padStart(2,"0")+":"+`${x}`.padStart(2,"0")}function S(){document.body.classList.toggle("dark-theme"),document.querySelector(".aside").classList.toggle("dark-theme"),document.querySelector(".header").classList.toggle("dark-theme"),document.querySelector(".reset").classList.toggle("dark-theme"),document.querySelector(".dark").classList.toggle("is-dark"),document.querySelector(".dark").classList.toggle("button-active"),document.querySelectorAll(".cell").forEach((e=>{e.classList.toggle("dark-theme")})),document.querySelectorAll(".button").forEach((e=>{e.classList.toggle("dark-theme")}))}const L=t.p+"assets/sada80ef50ec843f378a714.png",k=t.p+"assets/boom42857d5ea7461b8a6c24.mp3",q=t.p+"assets/clickb496964d8b70cd49ccdc.mp3";let C=[];class E{constructor(e,n,t){this.width=e,this.height=n,this.bombsCount=t,this.cellsCount=e*n,this.timerStart=!0,this.bombs=[...Array(this.cellsCount).keys()].sort((()=>Math.random()-.5)).slice(0,this.bombsCount),this.progressCounter=0,this.openedCells=this.cellsCount,this.boomSound=new Audio(k),this.clickSound=new Audio(q),this.fieldDiv=document.querySelector(".field"),this.mines=document.querySelector(".mines__count"),this.flags=document.querySelector(".flags__count"),this.progress=document.querySelector(".progress")}getField(){this.cells=[...this.fieldDiv.children],this.progress.innerHTML="000",this.mines.textContent=this.bombsCount,this.flags.textContent="0",this.fieldDiv.addEventListener("click",(e=>{const n=this.cells.indexOf(e.target),t=Math.floor(n/this.width),s=n%this.width;e.target.classList.contains("open")||e.target.classList.contains("field")||e.target.classList.contains("flag")||(this.progressCounter++,this.progress.innerHTML=`${this.progressCounter}`.padStart(3,"0")),this.timerStart&&(clearInterval(v),v=setInterval(_,1e3),this.timerStart=!1),this.bombClickHandler(t,s)}))}isValid(e,n){return e>=0&&e<this.height&&n>=0&&n<this.width}isBomb(e,n){if(!this.isValid(e,n))return!1;const t=e*this.width+n;return this.bombs.includes(t)}getBombCount(e,n){let t=0;for(let s=-1;s<=1;s++)for(let o=-1;o<=1;o++)this.isBomb(e+o,n+s)&&t++;return t}bombClickHandler(e,n){if(!this.isValid(e,n))return;const t=e*this.width+n,s=this.cells[t];if(s.classList.contains("open")||s.classList.contains("flag"))return;if(s.classList.add("open"),this.isBomb(e,n))return document.querySelector(".popup-loose").style.zIndex="1",document.querySelector(".popup-loose").style.opacity="1",document.querySelector(".reset").src=`${L}`,this.boomSound.play(),clearInterval(v),void this.bombs.forEach((e=>{this.cells[e].classList.add("bomb"),this.cells[e].classList.add("open")}));this.openedCells--,this.openedCells<=this.bombs.length&&(this.bombs.forEach((e=>{this.cells[e].classList.add("bomb"),this.cells[e].classList.add("open")})),document.querySelector(".popup-win").textContent=`Hooray! You found all mines in ${document.querySelector(".timer").textContent}\n       seconds and ${this.progress.textContent} moves!`,document.querySelector(".popup-win").style.zIndex="1",document.querySelector(".popup-win").style.opacity="1",clearInterval(v),function(){const e=document.querySelectorAll(".score__item");let n="";const t=new Date,s=document.querySelector(".timer");n=`${t.toTimeString().slice(0,5)} ${t.toDateString().slice(4,16)} - Your time ${s.textContent}`,C.length<10?(C.push(n),localStorage.setItem("score",JSON.stringify(C))):(C.shift(),C.push(n),localStorage.setItem("score",JSON.stringify(C))),e.forEach(((e,n)=>{e.textContent=C[n]}))}());const o=this.getBombCount(e,n);if(0!==o)return this.clickSound.play(),s.textContent=o,void s.classList.add(`cell-${o}`);for(let t=-1;t<=1;t++)for(let s=-1;s<=1;s++)this.bombClickHandler(e+s,n+t)}}const z=document.createElement("div");function T(e){for(z.className="field",z.innerHTML="";e;){const n=document.createElement("div");n.className="cell",document.querySelector(".dark").classList.contains("is-dark")&&n.classList.add("dark-theme"),z.append(n),e--}document.querySelector(".field-wrapper").innerHTML="",document.querySelector(".field-wrapper").append(z),z.style.height=`${z.offsetWidth}px`}function I(e){document.querySelector(".popup-loose").style.zIndex="-1",document.querySelector(".popup-loose").style.opacity="0",document.querySelector(".popup-win").style.zIndex="-1",document.querySelector(".popup-win").style.opacity="0",document.querySelector(".reset").src=`${f}`,document.querySelector(".score-menu").classList.remove("menu-open"),clearInterval(v),e.getField(),function(){document.querySelector(".timer").textContent="00:00",x=0;const e=document.querySelector(".reset");e.addEventListener("click",$),e.addEventListener("mousedown",(()=>{y.play(),e.classList.add("clicked")})),e.addEventListener("mouseup",(()=>{e.classList.remove("clicked")}))}(),function(){const e=document.querySelector(".medium"),n=document.querySelector(".small"),t=document.querySelector(".large"),s=document.querySelector(".set-mines__button"),o=document.querySelector(".set-mines__input");e.addEventListener("click",(()=>{e.classList.add("active"),e.classList.add("button-active"),n.classList.remove("active"),n.classList.remove("button-active"),t.classList.remove("active"),t.classList.remove("button-active"),$()})),n.addEventListener("click",(()=>{n.classList.add("active"),n.classList.add("button-active"),t.classList.remove("active"),t.classList.remove("button-active"),e.classList.remove("active"),e.classList.remove("button-active"),$()})),t.addEventListener("click",(()=>{t.classList.add("active"),t.classList.add("button-active"),n.classList.remove("active"),n.classList.remove("button-active"),e.classList.remove("active"),e.classList.remove("button-active"),$()})),s.addEventListener("click",(()=>{o.value<10||o.value>99?o.value="":$()}))}(),document.querySelector(".dark").addEventListener("click",S)}function $(){const e=document.querySelector(".medium"),n=document.querySelector(".small"),t=document.querySelector(".large"),s=document.querySelector(".set-mines__input");(function(){const e=document.querySelectorAll(".score__item");null!==localStorage.getItem("score")&&(C=JSON.parse(localStorage.getItem("score"))),e.forEach(((e,n)=>{e.textContent=C[n]}))})(),""===s.value&&(s.value=10),n.classList.contains("active")?(T(100),I(new E(10,10,s.value))):e.classList.contains("active")?(T(225),I(new E(15,15,s.value)),document.querySelectorAll(".cell").forEach((e=>{e.classList.add("medium-cell")}))):t.classList.contains("active")&&(T(625),I(new E(25,25,s.value)),document.querySelectorAll(".cell").forEach((e=>{e.classList.add("big")})))}!function(){g(),$(),function(){const e=document.querySelector(".mines__count"),n=document.querySelector(".flags__count");document.querySelector(".field").addEventListener("contextmenu",(t=>{e.textContent>0&&(t.target.classList.contains("open")||t.target.classList.contains("field")||(t.target.classList.toggle("flag"),t.preventDefault()),t.target.classList.contains("flag")&&(e.textContent=""+(e.textContent-1),n.textContent=`${Number(n.textContent)+1}`),t.target.classList.contains("flag")||t.target.classList.contains("open")||t.target.classList.contains("field")||(e.textContent=`${Number(e.textContent)+1}`,n.textContent=""+(Number(n.textContent)-1)))}))}(),window.addEventListener("resize",(()=>{const e=document.querySelector(".field");e.style.height=`${e.offsetWidth}px`,document.querySelectorAll(".cell").forEach((e=>{e.style.height=`${e.offsetWidth}px`}))}));const e=document.querySelector(".score-menu");document.querySelector(".score").addEventListener("click",(()=>{e.classList.toggle("menu-open")}))}()})()})();