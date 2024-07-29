/*
  Background operation
  --------------------
  While offline operations are the most common use for service workers, 
  they also enable a PWA to operate even while the main app is closed. <--------------- ***
  This is possible because the service worker can run while the main app is not running.
  
  This doesn't mean service workers run all the time: 
  browsers may stop service workers when they think it is appropriate. 
  For example, if a service worker has been inactive for a while, it will be stopped. 
  However, the browser will restart the service worker when an event has happened that it needs to take care of. 
  
  This enables a PWA to implement background operations in the following way:
  In the main app, register a request for the service worker to perform some operation <--------- *
  At the appropriate time, the service worker will be restarted if necessary, 
  and an event will fire in the service worker's scope
  The service worker will perform the operation

  ... a few different features that use this pattern to enable a PWA to work while the main app isn't open.
*/

/*
  Background Sync
  ---------------
  Suppose a user composes an email and presses "Send". 
  In a traditional website, they must keep the tab open until the app has sent the email: 
  if they close the tab, or the device loses connectivity, then the message will not be sent. 
  Background sync, defined in the Background Synchronization API, is the solution to this problem for PWAs. <------- *
  
  Background sync enables the app to ask its service worker to perform a task on its behalf. <--------- *
  As soon as the device has network connectivity, the browser will restart the service worker
  if necessary, and fire an event named sync in the service worker's scope. <----------- **
  The service worker can then attempt to execute the task. 
  If the task can't be completed, then the browser may retry a limited number of times by firing the event again.
*/

/*
  Registering a sync event <-------------- *
  ------------------------
  To ask the service worker to perform a task, the main app can access navigator.serviceWorker.ready, 
  which resolves with a ServiceWorkerRegistration object. 
  The app then calls sync.register() on the ServiceWorkerRegistration object, like this:
*/

const registerSync = async () => {
  const swRegistration = await navigator.serviceWorker.ready;
  swRegistration.sync.register("Send-Message");
};

// Note that the app passes a name for the task: "Send-Message" in this case.

/*
  Handling a sync event
  ---------------------
  As soon as the device has network connectivity, the sync event fires in the service worker scope. <-------- *
  The service worker checks the name of the task and runs the appropriate function, sendMessage() in this case:
*/

self.addEventListener("sync", (event) => {
  if (event.tag == "Send-Message") event.waitUntil(sendMessage());
});

/*
  ... we pass the result of the sendMessage() function into the event's waitUntil() method. 
  The waitUntil() method takes a Promise as a parameter and asks the browser not to stop the service worker until the promise has settled. 
  This is also how the browser knows whether the operation succeeded or not: 
  if the promise rejects, then the browser may retry by firing the sync event again. <-------------- **

  The waitUntil() method is not a guarantee that the browser will not stop the service worker: <-------------- **
  if the operation takes too long, the service worker will be stopped anyway. 
  If this happens, then the operation is aborted, and next time a sync event is fired, 
  then the handler runs again from the start - it does not resume from where it left off. <------------ ***
  ...
*/
