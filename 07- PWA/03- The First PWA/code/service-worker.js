const ASSETS = [
  "/",
  "./assets/images/favicon.png",
  "./style/main.css",
  "./style/index.css",
  "./style/mobile.css",
  "./style/tablet.css",
  "./manifest.json",
  "./js/index.js",
];

const VERSION = 1;
const activeCaches = {
  Learning_PWA: `Learning_PWA${VERSION}`,
};

self.addEventListener("install", (event) => {
  self.skipWaiting();
  const promise = caches.open(activeCaches.Learning_PWA);
  event.waitUntil(
    promise.then((cache) => {
      cache.addAll(ASSETS);
    })
  );
});

self.addEventListener("activate", (event) => {
  const activeCache = Object.values(activeCaches);
  const promise = caches.keys();
  event.waitUntil(
    promise.then((keys) => {
      return Promise.all(
        keys.forEach((key) => {
          if (!activeCache.includes(key)) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  const promise = caches.match(event.request);
  /*
    The respondWith method ... prevents the browser's default fetch handling, 
    and allows you to provide a promise for a Response yourself.
  */
  event.respondWith(
    promise.then((response) => {
      if (response) return response;
      else return fetch(event.request);
    })
  );
});
