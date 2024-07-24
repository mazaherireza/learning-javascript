/*
  Service workers
  ---------------
  ... a PWA that can be distributed as a standalone app and works offline.
  ... we are creating sw.js, the service worker script, that will convert our Web App into a PWA. 
  
  ... we will create a relationship between the web app and its service worker by registering the service worker.
  ... works even when the user is offline.

  Service worker responsibilities
  -------------------------------
  The service worker is what makes the application work offline while making sure the application is always up to date. 
  To do this well, the service worker should include the following:
  Version number (or other identifier).
  List of resources to cache.
  Cache version name.
  
  The service worker is also responsible for: <---------------- ***
  Installing the cache when the app is installed.
  Updating itself and the other application file as needed.
  Removing cached files that are no longer used.

  We achieve these tasks by reacting to 3 service worker events, ...
  fetch, install, activate events.
  
  Version number
  --------------
  Once the PWA is installed on the user's machine, 
  the ONLY way to inform the browser that there are updated files to be retrieved is for there to be a change in the service worker. 
  If a change is made to any other PWA resource ... 
  the service worker of your installed PWA will not know it needs to download updated resources.
  
   Only when the service worker is altered in any way, will the PWA know it may be time to update the cache;  <------------- ***
   which is the service worker's task to initiate.
*/

const VERSION = "v1";

/*
  Offline resource list
  ---------------------
  ...  the list of cached files should include all the resources used within the PWA's offline experience.
  ... the application cache only needs to include the assets used by the app in offline mode.

  You don't need to include the various icons that are used by all the different OSes and devices in the list. 
  But do include any images that are used within the app, <---------------- *
  including assets to used within any splash pages that may be visible if the app is slow as the app loads or used in any 
  "you need to connect to the internet for the full experience" type pages.

  Do not include the service worker file in the list of resources to be cached.
*/

const APP_STATIC_RESOURCES = [];
/*
  Application cache name
  ----------------------
  We have a version number and we have the files that need to be cached. 
  Before caching the files, we need to create a name of the cache that will be used to store the app's static resources. 
  This cache name should be versioned to ensure that when the app is updated, a new cache will be created and the old one will be deleted.
  
*/

const CACHE_NAME = `something-${VERSION}`;

/*
  Saving the cache on PWA installation 
  ------------------------------------
  When a user installs or simply visits a website with a service worker, <---------------- **
  an install event is fired in the service worker scope. 
  We want to listen for this event, filling the cache with the PWA's static resources upon installation. 
  Every time the service worker version is updated, 
  the browser installs the new service worker and the install event occurs.

  The install event happens when the app is used for the first time, 
  or when a new version of the service worker is detected by the browser. 
  When an older service worker is being replaced by a new one, 
  the old service worker is used as the PWA's service worker until the new service work is activated. <--------------- ***
  ...
  The ExtendableEvent.waitUntil() method tells the browser that work is ongoing until the promise settles, <------------- *
  and it shouldn't terminate the service worker if it wants that work to complete.

   While browsers are responsible for executing and terminating service workers when necessary, 
   the waitUntil method is a request to the browser to not terminate the service worker while a task is being executed.
*/

self.addEventListener("install", (e) => {
  e.waitUntil(async () => {
    const cache = await caches.open(CACHE_NAME);
    cache.addAll(APP_STATIC_RESOURCES);
  })();
});

/*
  Updating the PWA and deleting old caches
  ----------------------------------------
  We use the activate event to delete old caches to avoid running out of space. 
  We iterate over named Cache objects, deleting all but the current one, 
  and then set the service worker as the controller for the PWA. <--------------------- *

  ...
  We use the Promise.all() method to iterate through that list of name cache promises. 
  The all() method takes as input a list of iterable promises and returns a single Promise.

  ... the await clients.claim() uses the claim() method of the Clients interface 
  to enable our service worker to set itself as the controller for our client; <------------------ **
  the "client" referring to a running instance of the PWA.
  The claim() method enables the service worker to "claim control" of all clients within its scope. 
  This way, clients loaded in the same scope don't need to be reloaded.
*/

self.addEventListener("activate", (e) => {
  e.waitUntil(async () => {
    const names = await caches.keys();
    await Promise.all(
      names.map((name) => {
        if (name !== CACHE_NAME) {
          return caches.delete(name);
        }
      })
    );
    await clients.claim();
  })();
});

/*
  The fetch event
  ---------------
  Listening to the fetch event makes it possible to intercept all requests and respond with cached responses instead of going to the network. 
  ..., for page navigation requests, ...
  If the Fetch API's Request readonly mode property is navigate, meaning it's looking for a web page,
  we use the FetchEvent's respondWith() method to prevent the browser's default fetch handling,  <----------------- ***
  providing our own response promise employing the caches.match() method.
*/

self.addEventListener("fetch", (e) => {
  if (e.request.mode == "navigate") {
    e.respondWith(caches.match("/"));
    return;
  }
  e.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cachedResponse = await cache.match(e.request.url);
      if (cachedResponse) {
        return cachedResponse;
      }
      return new Response(null, { status: 404 });
    })()
  );
});

/*
  ... any change in the content of the service worker script itself 
  will trigger the browser to install the new service worker. <---------- ***

  The version number, or any change to the service worker file, 
  is the only way to force an update of the app for your users. <------------------ **
*/

/*
  Register the service worker
  ---------------------------
  ... 
  ... checking that the browser supports the Service Worker API by using feature detection 
  for the presence of the serviceWorker property on the global navigator object.

*/

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

/*
  ... the register() method does return a Promise that resolves with a ServiceWorkerRegistration object. 
*/

/*
  Debugging service workers
  -------------------------
  ... 
  By updating the version number and doing a hard reset
  -----------------------------------------------------
  To get a new cache, you can change the version number and then do a hard browser refresh. <------------- **
  
  With developer tools
  --------------------
  ...  instead of changing the version number on save, you can unregister the service worker.
  ...
  Hard refreshing the page will re-register the service worker and create a new cache.
  ...
  "update on reload" option which sets the developer tools to reset and re-activate the service worker <-------------- **
  on every reload as long as the developer tools are open. 
  There is also an option to bypass the service worker and load resources from the network. <------------ ***
*/

