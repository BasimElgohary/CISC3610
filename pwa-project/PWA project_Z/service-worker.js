const CACHE_NAME = "poke-facts-cache-v1";
const FILES_TO_CACHE = [
  "index.html",
  "scripts.js",
  "style.css",
  "manifest.json",
  "data.json",
  "images/icon-192.png",
  "images/icon-512.png",
  "images/alakazam.png",
  "images/bulbasaur.png",
  "images/charmander.png",
  "images/diglett.png",
  "images/dragonite.png",
  "images/emolga.png",
  "images/haunter.png",
  "images/mew.png",
  "images/piplup.png",
  "images/scizor.png",
  "images/squirtle.png",
  "images/togepi.png",
  "images/voltorb.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
