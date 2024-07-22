const VERSION = "v1";
const CACHE_NAME = `Learning-PWA-${VERSION}`;

const STATIC_RESOURCES = [
  "/",
  "/fallback.html",
  "/fallback.css",
  "./assets/images/favicon.png",
  "./style/main.css",
  "./style/index.css",
  "./style/mobile.css",
  "./style/tablet.css",
  "./js/index.js",
  "./manifest.json",
  "./assets/images/img_512.png",
];

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
  // Skip the request, if request is not made with http protocol.
  if (!event.request.url.indexOf("http") == 0) return;
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      } else {
        console.log(event.request.url);
        return fetch(event.request)
          .then((serverResponse) => {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, serverResponse.clone());
              return serverResponse;
            });
          })
          .catch(() => {
            return caches.match("/fallback.html");
          });
      }
    })
  );
});
