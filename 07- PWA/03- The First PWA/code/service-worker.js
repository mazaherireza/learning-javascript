self.addEventListener("install", (event) => {
  /*
    An install event is always the first one sent to a service worker 
    (this can be used to start the  process of populating an IndexedDB, and caching site assets)
    During this step, the application is preparing to make everything available for use offline.
  */
  console.log(event);
  /*
    The skipWaiting() method of the ServiceWorkerGlobalScope interface, forces the waiting service worker 
    to become the active service worker.
  */
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  /*
    ... newly installed service worker, receives an activate event.
    The primary use of activate is to clean up resources used in previous versions of the service worker.
    The new service worker can call skipWaiting() to ask to be activated immediately 
    without waiting for open pages to be closed.
    ...
  */
  console.log(event);
});
