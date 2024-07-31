/*
  Periodic background sync
  ------------------------
  The Periodic Background Synchronization API enables a PWA to periodically update its data in the background, 
  while the main app is closed. <------------- **

  This can greatly improve the offline experience offered by a PWA. <------------ *

  Consider an app that depends on reasonably fresh content, like a news app. 
  If the device is offline when the user opens the app, 
  then even with service worker-based caching, the stories will only be as fresh as the last time the app was opened. 

  With periodic background sync, 
  the app could have refreshed its stories in the background, when the device had connectivity, <------------- *
  and so could be able to show relatively fresh content to the user.

  This, takes advantage of the fact that on a mobile device especially, connectivity is not poor so much as intermittent: 
  by taking advantage of the times that the device has connectivity, the app can smooth over the connectivity gaps.
*/

/*
  Registering a periodic sync event
  ---------------------------------
  The code for registering a periodic sync event follows the same pattern as that for registering a sync event. 
  The ServiceWorkerRegistration has a periodicSync property, 
  which has a register() method taking the name of the periodic sync as a parameter.

  However, periodicSync.register() takes an extra argument, which is an object with a minInterval property. 
  This, represents the minimum interval, in milliseconds, between synchronization attempts:
*/

const registerPeriodicSync = async () => {
  const swRegistration = navigator.serviceWorker.ready;
  swRegistration.periodicSync.register("Update-News", {
    // try to update every 24 hours
    minInterval: 24 * 60 * 60 * 1000,
  });
};

/*
  Handling a periodic sync event
  ------------------------------
  Although the PWA asks for a particular interval in the register() call, 
  it's up to the browser how often to generate periodic sync events. <------------------ **
  Apps that users open and interact with, often will be more likely to receive periodic sync events, 
  and will receive them more often, than apps which the user rarely or never interacts with.

  When the browser has decided to generate a periodic sync event, the pattern is the following: 
  it starts the service worker, if necessary, and fires a periodicSync event in the service worker's global scope.

  The service worker's event handler checks the name of the event, 
  and calls the appropriate function inside the event's waitUntil() method:
*/

self.addEventListener("periodicsycn", (event) => {
  if (event.tag == "Update-News") {
    event.waitUntil(updateNews());
  }
});

/*
  Inside updateNews(), the service worker can fetch and cache the latest stories. 
  The updateNews() function should complete relatively quickly: 
  if the service worker takes too long updating its content, the browser will stop it.
*/

/*
  Unregistering a periodic sync
  -----------------------------
  When the PWA no longer needs periodic background updates, 
  (for example, because the user has switched them off in the app's settings) 
  then the PWA should ask the browser to stop generating periodic sync events, 
  by calling the unregister() method of periodicSync:
*/

swRegistration.periodicSync.unregister("update-news");
