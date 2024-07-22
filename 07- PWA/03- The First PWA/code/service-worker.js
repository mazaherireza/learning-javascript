const ASSETS = [
  "/",
  "/fallback.html",
  "./assets/images/favicon.png",
  "./style/main.css",
  "./style/index.css",
  "./style/mobile.css",
  "./style/tablet.css",
  "./manifest.json",
  "./js/index.js",
];

const VERSION = 1;
const activeCache = {
  learning: `Learning-V${VERSION}`,
};

self.addEventListener("install", (event) => {
  console.log(event.type);
  self.skipWaiting();
  event.waitUntil(
    caches.open(activeCache.learning).then((cache) => {
      cache.addAll(ASSETS);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log(event.type);
  const CACHE_KEY = activeCache.learning;
  event.waitUntil(
    caches.keys().then((cacheKeys) => {
      console.log(cacheKeys)
      return Promise.all(
        cacheKeys.forEach((cacheKey) => {
          if (CACHE_KEY != cacheKey) {
            caches.delete(cacheKey);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      } else {
        console.log(event.request.url);
        return fetch(event.request).then((serverResponse) => {
          caches.open(activeCache.learning).then((cache) => {
            cache.put(event.request, serverResponse.clone());
            return serverResponse;
          });
        });
      }
    })
  );
});
