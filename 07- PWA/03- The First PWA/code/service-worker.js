/*
  The skipWaiting() method of the ServiceWorkerGlobalScope interface, forces the waiting service worker 
  to become the active service worker.
*/

self.addEventListener("install", (event) => {
  console.log(event);
  self.skipWaiting();
});
