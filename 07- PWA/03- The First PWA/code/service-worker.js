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
const activeCaches = {
  static: `Static_${VERSION}`,
  dynamic: `Dynamic_${VERSION}`,
};

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(activeCaches).then((cache) => {
      cache.addAll(ASSETS);
    })
  );
});

self.addEventListener("activate", (event) => {
  const activeCache = Object.values(activeCaches);
  event.waitUntil(
    caches.keys().then((keys) => {
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
  /*
    The respondWith method ... prevents the browser's default fetch handling, 
    and allows you to provide a promise for a Response yourself.
  */
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) return response;
      else {
        return fetch(event.request).then((response) => {
          caches.open(activeCaches.dynamic).then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          }).catch(error => {
            console.error(error);
            return caches.match("/fallback.html")
          });
        });
      }
    })
  );
});
