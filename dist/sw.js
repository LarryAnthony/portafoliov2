const STATIC_CACHE="static-v2",DYNAMIC_CACHE="dynamic-v1",INMUTABLE_CACHE="inmutable-v1";function actualizarCacheDinamico(e,t,a){return a.ok?caches.open(e).then((e=>(e.put(t,a.clone()),a.clone()))):a}const APP_SHELL=["/","index.html","assets/images/fondo1.jpg","assets/images/anthonyopt.jpg","assets/images/anthonyfavicon.png"],APP_SHELL_INMUTABLE=[];self.addEventListener("install",(e=>{const t=caches.open("static-v2").then((e=>{e.addAll(APP_SHELL)}));e.waitUntil(Promise(t))})),self.addEventListener("activate",(e=>{const t=caches.keys().then((e=>{e.forEach((e=>{if("static-v2"!==e&&e.includes("static"))return caches.delete(e)}))}));e.waitUntil(t)})),self.addEventListener("fetch",(e=>{const t=caches.match(e.request).then((t=>t||fetch(e.request).then((t=>actualizarCacheDinamico("dynamic-v1",e.request,t)))));e.respondWith(t)}));