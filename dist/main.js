!function(e){var t={};function n(d){if(t[d])return t[d].exports;var o=t[d]={i:d,l:!1,exports:{}};return e[d].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(d,o,function(t){return e[t]}.bind(null,o));return d},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function d(){let e=document.getElementById("tabContent");null!=e&&e.remove()}function o(){d(),document.getElementById("header").innerText="Welcome to the Lighthouse Cafe";let e=document.getElementById("content"),t=document.createElement("div");t.id="tabContent",e.appendChild(t),e=document.getElementById("tabContent"),t=document.createElement("p"),t.innerText="Welcome to the lighthouse restauraunt. Please note that disruptful patrons will be sent to the songbird.",e.appendChild(t);let n=document.getElementById("tabContent"),o=document.createElement("img");o.src="Montauk_Point_Lighthouse.jpg",o.alt="Montauk_Point_Lighthouse",o.id="lightPic",n.appendChild(o),o=document.createElement("h1"),o.innerText="Lighthouse Cafe",n.appendChild(o),o=document.createElement("p"),o.innerText="Any food is better than no food.",n.appendChild(o)}function i(){d(),document.getElementById("header").innerText="Killer Entrees";let e=document.getElementById("content"),t=document.createElement("div");t.id="tabContent",e.appendChild(t),e=document.getElementById("tabContent"),t=document.createElement("p"),t.id="song",t.innerText="The SongBird Special",e.appendChild(t),t=document.createElement("img"),t.src="songBird.jpg",document.getElementById("song").appendChild(t)}function r(){d(),document.getElementById("header").innerText="Deadly Desserts";let e=document.getElementById("content"),t=document.createElement("div");t.id="tabContent",e.appendChild(t),e=document.getElementById("tabContent"),t=document.createElement("p"),t.id="murica",t.innerText="Father Freedom",e.appendChild(t),t=document.createElement("img"),t.src="patriot.jpg",document.getElementById("murica").appendChild(t)}n.r(t),function(){let e=document.getElementById("content"),t=document.getElementById("navBar"),n=document.createElement("li");n.innerText="HOME PAGE",n.id="tab1",t.appendChild(n),n=document.createElement("li"),n.innerText="ENTREES",n.id="tab2",t.appendChild(n),n=document.createElement("li"),n.innerText="DESSERTS",n.id="tab3",t.appendChild(n),n=document.createElement("h1"),n.id="header",n.innerText="Welcome to the Lighthouse Cafe!",t.appendChild(n),n=document.createElement("br"),e.appendChild(n),n=document.createElement("div"),n.id="tabContent",e.appendChild(n)}(),console.log("BS"),document.getElementById("tab1").addEventListener("click",o),document.getElementById("tab2").addEventListener("click",i),document.getElementById("tab3").addEventListener("click",r),o(),console.log("Basic Message")}]);