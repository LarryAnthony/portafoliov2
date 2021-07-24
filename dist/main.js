/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={757:(t,e,n)=>{t.exports=n(666)},617:function(t){t.exports=function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}var r={defaults:{init:!1,duration:5e3,type:"default",modal:!1,interaction:!1,interactionTimeout:null,actionText:"OK",action:function(){this.hide()},callbacks:{}},toastOpenClass:"mdtoast--open",toastModalClass:"mdtoast--modal"};function o(){var t={},e=!1,n=0,r=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(var a=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e&&"[object Object]"===Object.prototype.toString.call(n[r])?t[r]=o(!0,t[r],n[r]):t[r]=n[r])};n<r;n++)a(arguments[n]);return t}function a(t,e,n,r){var o=document.createElement(t);return o.className=e,void 0!==n&&(o[r?"innerHTML":"innerText"]=n),o}function i(){var t,e,n=this,r=n.options,o=function(t){t.target.matches(".mdt-action")&&("click"===t.type||"keypress"===t.type&&13===t.keyCode)&&r.action&&r.action.call(n,t)};n.docFrag=document.createDocumentFragment(),n.toast=a("div","mdtoast mdt--load"),n.toast.tabIndex=0,n.docFrag.appendChild(n.toast),"default"!==r.type&&n.toast.classList.add("mdt--"+r.type),t=a("div","mdt-message",n.message,!0),n.toast.appendChild(t),e=a("span","mdt-action"),r.interaction&&(e.innerText=r.actionText,e.tabIndex=0,n.toast.classList.add("mdt--interactive"),n.toast.appendChild(e)),n.toast.addEventListener("click",o,!1),n.toast.addEventListener("keypress",o,!1),n.toast.mdtoast=n,n.options.init||n.show()}function c(t){var e=this,n=document.body,o=e.options.callbacks;n.appendChild(e.docFrag),setTimeout((function(){e.toast.classList.remove("mdt--load"),setTimeout((function(){o&&o.shown&&o.shown.call(e),t&&"function"==typeof t&&t.call(e)}),e.animateTime),e.options.interaction?e.options.interactionTimeout&&(e.timeout=setTimeout((function(){e.hide()}),e.options.interactionTimeout)):e.options.duration&&(e.timeout=setTimeout((function(){e.hide()}),e.options.duration)),n.classList.add(r.toastOpenClass),e.options.modal&&n.classList.add(r.toastModalClass)}),15)}var s=function(){function e(n,a){t(this,e);var c=arguments;this.animateTime=230,this.message=c[0],this.options=o(!0,r.defaults,c[1]),this.timeout=null,this.options.init||i.call(this)}return n(e,[{key:"show",value:function(t){var e=this,n=document.getElementsByClassName("mdtoast");if(!document.body.contains(e.toast))if(e.options.init&&i.apply(e),n.length>0)for(var r=n.length-1;r>=0;r--)n[r].mdtoast.hide((function(){r<0&&c.call(e,t)}));else c.call(e,t)}},{key:"hide",value:function(t){var e=this,n=e.options.callbacks,o=document.body;clearTimeout(e.timeout),e.toast.classList.add("mdt--load"),o.classList.remove(r.toastOpenClass),o.classList.remove(r.toastModalClass),setTimeout((function(){o.removeChild(e.toast),n&&n.hidden&&n.hidden.call(e),t&&"function"==typeof t&&t.call(e)}),e.animateTime)}}]),e}();function l(t,e){return e||(e={}),new s(t,e)}return Object.defineProperties(l,{INFO:{value:"info"},ERROR:{value:"error"},WARNING:{value:"warning"},SUCCESS:{value:"success"}}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=e.length;--n>=0&&e.item(n)!==this;);return n>-1}),l}()},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new k(r||[]);return a._invoke=function(t,e,n){var r=d;return function(o,a){if(r===h)throw new Error("Generator is already running");if(r===m){if("throw"===o)throw a;return I()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=C(i,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=u(t,e,n);if("normal"===s.type){if(r=n.done?m:f,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=m,n.method="throw",n.arg=s.arg)}}}(t,n,i),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d="suspendedStart",f="suspendedYield",h="executing",m="completed",p={};function v(){}function y(){}function g(){}var b={};b[a]=function(){return this};var E=Object.getPrototypeOf,w=E&&E(E(j([])));w&&w!==n&&r.call(w,a)&&(b=w);var L=g.prototype=v.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(o,a,i,c){var s=u(t[o],t,a);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function C(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,C(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=u(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function j(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:I}}function I(){return{value:e,done:!0}}return y.prototype=L.constructor=g,g.constructor=y,y.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},x(S.prototype),S.prototype[i]=function(){return this},t.AsyncIterator=S,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new S(l(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(L),s(L,c,"Generator"),L[a]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:j(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r].call(a.exports,a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function e(e){return function(){var n=this,r=arguments;return new Promise((function(o,a){var i=e.apply(n,r);function c(e){t(i,o,a,c,s,"next",e)}function s(e){t(i,o,a,c,s,"throw",e)}c(void 0)}))}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a,i=n(757),c=n.n(i),s=n(617),l=n.n(s),u="https://new.larry-jacobo.com/api/email",d="https://larry-jacobo.com",f=null,h=null;navigator.serviceWorker&&window.addEventListener("load",(function(){navigator.serviceWorker.register("sw.js").then((function(t){(a=t).pushManager.getSubscription().then(Z)}))}));var m=document.getElementById("hamburguer-box"),p=document.getElementsByClassName("line-hamburguer"),v=document.getElementById("toggle-bar"),y=document.querySelector(".image-intro"),g=document.querySelector("#wrap");m.addEventListener("click",(function(){p[1].classList.toggle("middle-line"),p[0].classList.toggle("first-line"),p[2].classList.toggle("last-line"),v.classList.toggle("visible")})),o(document.querySelector("#toggle-bar ul").children).forEach((function(t){t.addEventListener("click",(function(e){o(t.parentElement.children).forEach((function(t){t.children[0].removeAttribute("style","font-weight: bold"),t.children[0].classList.remove("green-text")}));var n=e.target.hash,r=t.querySelectorAll('a[href="'.concat(n,'"]'));r[0].classList.add("green-text"),r[0].setAttribute("style","font-weight: bold")}))})),g.addEventListener("click",(function(){v.classList.remove("visible"),p[1].classList.remove("middle-line"),p[0].classList.remove("first-line"),p[2].classList.remove("last-line")})),window.onload=function(t){if(y.style.backgroundImage="url('assets/images/fondo1.jpg')",t.target.location.hash){var e=t.target.location.hash,n=document.querySelectorAll('a[href="'.concat(e,'"]'));n[0].classList.add("green-text"),n[0].setAttribute("style","font-weight: bold")}navigator.geolocation.getCurrentPosition((function(t){f=t.coords.latitude,h=t.coords.longitude}))};!function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=t.split("");r.innerHTML="";var a=0,i=t.length,c=t;setInterval((function(){a>=0&&a<o.length?(r.innerHTML+=o[a],a++):a===o.length&&(r.innerHTML=c.substring(0,i),0===--i&&(r.innerHTML="",a=0,i=(c=c===t?e:t).length,o=c.split("")))}),n)}("a developer      ","Larry Jácobo      ",150,document.getElementById("type"));var b=document.getElementsByClassName("experience-count")[0],E=document.getElementsByClassName("happy-count")[0],w=document.getElementsByClassName("project-count")[0],L=document.getElementsByClassName("award-count")[0],x=function(t){return t.isIntersecting},S=function(t){var e=0,n=parseInt(t.target.dataset.value),r=parseInt(t.target.getAttribute("data-speed"));setInterval((function(){e<=n?(t.target.innerHTML=e,e++):clearInterval()}),1e3*r/n);C.unobserve(t.target)},C=new IntersectionObserver((function(t){t.filter(x).forEach(S)}));C.observe(b),C.observe(E),C.observe(w),C.observe(L),o(document.getElementsByClassName("nav-link")).forEach((function(t){t.addEventListener("click",(function(){o(t.parentElement.parentElement.children).forEach((function(t){t.children[0].classList.remove("active")})),t.classList.add("active")}))})),o(document.querySelectorAll(".bar .increasing-bar")).forEach((function(t){var e=t.dataset.percent;t.style.width=e}));var O,T=document.getElementsByClassName("card-carrusel"),k=T.length,j=new ResizeObserver((function(t){O=window.innerWidth<=992?k:Math.ceil(k/2);var e=document.getElementsByClassName("select-carrusel")[0];e.textContent="";for(var n=1;n<=O;n++){var r=document.createElement("div");r.classList.add("button-carrusel"),1===n&&r.classList.add("active"),r.dataset.number=n;var a=document.createElement("span");r.appendChild(a),e.appendChild(r)}o(document.getElementsByClassName("button-carrusel")).forEach((function(t){t.addEventListener("click",(function(){o(t.parentElement.children).forEach((function(t){t.classList.remove("active")}));var e=parseInt(t.dataset.number);t.classList.add("active"),o(T).forEach((function(t){var n;n=window.innerWidth<=992?100*(-(e-1)-3*(e-1)/100):100*-(e-1),t.style.left="".concat(n,"%")}))}))}))})),I=document.getElementsByTagName("body");j.observe.apply(j,o(I));var B=new Date,N=B.getFullYear(),A=new Date(1988,4,23),M=Math.floor((B-A)/1e3/60/60/24/365);document.getElementById("age").textContent=M,document.getElementById("year").textContent=N;var _=document.getElementById("email-form"),P=document.getElementById("name-form"),q=document.getElementById("content-form"),F=document.getElementById("button-form"),G=document.getElementById("errorMessage"),H=document.getElementById("send-email"),R=document.querySelector(".spinner");function W(t){var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;if(t.target.value.length>0){var n=document.querySelector("p.error");n&&n.remove(),t.target.style.borderColor=""}else t.target.style.borderColor="red",z("All fields are required");if("email"===t.target.type){t.target.value.indexOf("@");if(e.test(t.target.value)){var r=document.querySelector("p.error");r&&r.remove(),t.target.style.borderColor=""}else t.target.style.borderColor="red",z("Email not valid")}e.test(_.value)&&""!==P.value&&""!==q.value?(F.classList.remove("button-disable"),F.disabled=!1):console.log("no pasaste la validación del formulario")}function z(t){var e=document.createElement("p");e.textContent=t,e.classList.add("error"),0===document.querySelectorAll(".error").length&&G.appendChild(e)}P.addEventListener("blur",W),_.addEventListener("blur",W),q.addEventListener("blur",W),H.addEventListener("submit",(function(t){return J.apply(this,arguments)}));var D=document.createElement("p");function J(){return(J=e(c().mark((function t(e){var n,r,o,a,i;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),F.classList.add("button-disable"),F.disabled=!0,n=document.getElementById("name-form").value,r=document.getElementById("email-form").value,o=document.getElementById("content-form").value,R.style.display="flex",a={asunto:"Email sent by ".concat(n),remitentes:"ajacobozare@gmail.com",cuerpo:"Email send from ".concat(r," with this content: ").concat(o,". \n\t\t\tlatitud: ").concat(f,"\n\t\t\tLongitud: ").concat(h," \n\t\t")},t.next=10,fetch(u,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",body:JSON.stringify(a)});case 10:i=t.sent,setTimeout((function(){F.classList.remove("button-disable"),F.disabled=!1,R.style.display="none",i.ok?(D.innerHTML="Sent successfully",D.style.backgroundColor="var(--secondary-color)",D.style.color="white"):(D.innerHTML="Sent with errors, try again",D.style.backgroundColor="red",D.style.color="white"),G.appendChild(D),setTimeout((function(){D.remove()}),3e3)}),1e3),H.reset();case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function K(){navigator.onLine?(R.style.display="none",l()("Online",{interaction:!0,actionText:"OK"})):l()("Offline",{interaction:!0,actionText:"OK",type:"warning"})}D.classList.add("error"),window.addEventListener("online",K),window.addEventListener("offline",K),K();var U=document.querySelector(".btn-noti-activated"),Y=document.querySelector(".btn-noti-disactivated");function Z(t){t?(U.classList.remove("oculto"),Y.classList.add("oculto")):(U.classList.add("oculto"),Y.classList.remove("oculto"))}function $(){a.pushManager.getSubscription().then((function(t){t.unsubscribe().then((function(){return Z(!1)}))}))}Y.addEventListener("click",(function(){if(!a)return console.log("No hay registro de SW");fetch("".concat(d,"/api/notification/key"),{headers:{Accept:"application/json","Content-Type":"application/json","api-key":"c9a95004-ac91-4349-97c3-d5928d436669"},method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin"}).then((function(t){return t.arrayBuffer()})).then((function(t){return new Uint8Array(t)})).then((function(t){a.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:t}).then((function(t){return t.toJSON()})).then((function(t){fetch("".concat(d,"/api/notification/subscribe"),{headers:{Accept:"application/json","Content-Type":"application/json","api-key":"c9a95004-ac91-4349-97c3-d5928d436669"},method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",body:JSON.stringify(t)}).then(Z).catch($)}))}))})),U.addEventListener("click",(function(){$()}))})()})();