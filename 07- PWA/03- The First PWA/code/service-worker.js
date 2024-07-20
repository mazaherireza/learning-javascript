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
  /*
    waitUntil() tells the browser that work is ongoing until the promise settles, 
    and it shouldn't terminate the service worker if it wants that work to complete.
  */
  event.waitUntil(
    promise.then((cache) => {
      cache.addAll(ASSETS);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log(event);
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
