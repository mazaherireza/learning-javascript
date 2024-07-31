import { indexedDBSupport } from "./utils";

self.importScripts("./constants.js");
self.importScripts("./database.js");

const VERSION = "v1";
const CACHE_NAME = `Learning-PWA-${VERSION}`;

// On install, cache the static resources.
self.addEventListener("install", (event) => {
  console.log(event.type);
  self.skipWaiting();
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      cache.addAll(STATIC_RESOURCES);
    })()
  );
});

// Delete old caches on activate.
self.addEventListener("activate", (event) => {
  console.log(event.type);
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
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

  const URL = event.request.url;
  if (URL.startsWith(BASE_URL)) {
    event.respondWith(
      (async () => {
        // External Resource(s)
        try {
          const serverResponse = await fetch(event.request);
          const response = await serverResponse.json();
          const { category, id, image, price, title } = response[0];
          if (indexedDBSupport()) {
            const DB_VERSION = 1;
            createDatabase("Learning-PWA", DB_VERSION, "Product");
            add("Product", {
              category,
              id,
              image,
              price,
              title,
            });
          }
          return serverResponse;
        } catch (error) {
          console.error(error);
          get("Proudct");
        }
      })()
    );
  } else {
    event.respondWith(
      (async () => {
        // Internal Resource(s)
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) {
          return cachedResponse;
        } else {
          try {
            const serverResponse = await fetch(event.request);
            const cache = await caches.open(CACHE_NAME);
            cache.put(event.request, serverResponse.clone());
            return serverResponse;
          } catch (error) {
            const fallbackResponse = await caches.match("/fallback.html");
            if (fallbackResponse) return fallbackResponse;
          }
        }
      })()
    );
  }
});
