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

self.addEventListener("install", (event) => {
  self.skipWaiting();
  const promise = caches.open("Learning_PWA");
  promise.then((cache) => {
    cache.addAll(ASSETS);
  });
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
