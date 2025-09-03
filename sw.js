const CACHE_NAME = "calculadora/v1";
const LISTA = [
   "/PWA_calculadora/icons/256.png",
   "/PWA_calculadora/icons/512.png",
   "/PWA_calculadora/manifest.json",
   "/PWA_calculadora/style.css",
   "/PWA_calculadora/sw.js",
   "/PWA_calculadora/index.html",
   "/PWA_calculadora/calculadora.js"
]

 

self.addEventListener('install', event => {
    console.log('Service Worker instalado');
    caches.open(CACHE_NAME).then((cache) => {
        cache.addAll(LISTA)
     })
});
 

self.addEventListener('fetch', event => {
    event.respondWith(
       caches.match(event.request).then((response)=>{
        return response ||  fetch(event.request).catch(() => new Response("Você está offline"))
       })
    );
});