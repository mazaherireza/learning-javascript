self.importScripts("./constants.js", "./database.js");

const VERSION = "v1";
const CACHE_NAME = `Learning-PWA-${VERSION}`;

const BASE_URL = "https://learning-5378b-default-rtdb.firebaseio.com";

const INTERVAL = 5_000;
let content;
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
          const { id, firstName, lastName, email } = response[0];
          const DB_VERSION = 1;
          createDatabase("Learning-PWA", DB_VERSION, "Users");
          add("Users", {
            id,
            firstName,
            lastName,
            email,
          });
          return serverResponse;
        } catch (error) {
          console.error(error);
          get("Users");
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

self.addEventListener("sync", (event) => {
  const { tag } = event;
  switch (tag) {
    case "Create-User":
      event.waitUntil(createUser());
      break;
  }
});

const createUser = () => {
  const users = get("Users");
  users.forEach(async (user) => {
    const init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    try {
      const response = await fetch(`${BASE_URL}/users.json`, init);
      const data = await response.json();
      content = "Registered Successfully.";
    } catch (error) {
      console.error(error);
      content = "Error!";
    } finally {
      manipulateDOM();
    }
  });
};

const manipulateDOM = () => {
  Client.postMessage({
    type: "MANIPULATE",
    data: DATA,
  });
};
