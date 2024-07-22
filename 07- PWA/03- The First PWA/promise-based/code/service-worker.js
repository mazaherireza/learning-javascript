const STATIC_RESOURCES = [
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

const VERSION = "v1";
const CACHE_NAME = `Learning-PWA-${VERSION}`;

// On install, cache the static resources.
self.addEventListener("install", (event) => {
  console.log(event.type);
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(STATIC_RESOURCES);
    })
  );
});

// Delete old caches on activate.
self.addEventListener("activate", (event) => {
  console.log(event.type);
  event.waitUntil(
    caches.keys().then((names) => {
      console.log(names);
      return Promise.all(
        names.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    })
  );
});

// On fetch, intercept server requests and respond with cached responses instead of going to network.
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      } else {
        console.log(event.request.url);
        return fetch(event.request).then((serverResponse) => {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, serverResponse.clone());
            return serverResponse;
          });
        });
      }
    })
  );
});
