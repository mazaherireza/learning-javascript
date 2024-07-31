const VERSION = "v1";
const CACHE_NAME = `Learning-PWA-${VERSION}`;

const STATIC_RESOURCES = [
  "/",
  "/fallback.html",
  "./style/fallback.css",
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
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(STATIC_RESOURCES);
    })()
  );
});

// Delete old caches on activate.
self.addEventListener("activate", (event) => {
  console.log(event.type);
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      console.log(names);
      await Promise.all(
        names.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
      await clients.claim();
    })()
  );
});

// On fetch, intercept server requests and respond with cached responses instead of going to network.
self.addEventListener("fetch", (event) => {
  // Skip the request, if request is not made with http protocol.
  if (!event.request.url.indexOf("http") == 0) return;

  event.respondWith(
    (async () => {
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse) {
        return cachedResponse;
      } else {
        console.log(event.request.url);
        try {
          const serverResponse = await fetch(event.request);
          const cache = await caches.open(CACHE_NAME);
          cache.put(event.request, serverResponse.clone());
          console.log(serverResponse);
          return serverResponse;
        } catch (error) {
          const fallbackResponse = await caches.match("/fallback.html");
          console.log(fallbackResponse);
          if (fallbackResponse) return fallbackResponse;
        }
      }
    })()
  );
});
