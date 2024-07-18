/*
  Offline and background operation
  --------------------------------
  Usually, websites are very dependent on both reliable network connectivity and 
  on the user having their pages open in a browser. 
  Without network connectivity, most websites are just unusable, 
  and if the user does not have the site open in a browser tab, most websites are unable to do anything.
  
  However, consider the following scenarios:
  ...

  The user composes a long email, presses "Send", and then loses network connectivity. 
  The device sends the email in the background, as soon as the network is available again.

  The user's chat app receives a message from one of their contacts, and although the app is not open, 
  it displays a badge on the app icon to let the user know they have a new message.

  These are the kinds of features that users expect from installed apps. 
  ..., we'll introduce a set of technologies that enable a PWA to:

  Provide a good user experience even when the device has intermittent network connectivity
  Update its state when the app is not running
  Notify the user about important events that have happened while the app was not running
*/

/*
  Websites and workers
  --------------------
  The foundation of all the technologies ... is the service worker. <---------------- **
  ... a little background about workers and how they change the architecture of a web app.

  Normally, an entire website runs in a single thread. <----------------- ***
  This includes the website's own JavaScript, and all the work to render the website's UI. 
  One consequence of this is that if your JavaScript runs some long-running operation, 
  the website's main UI is blocked, and the website appears unresponsive to the user. <------------ **

  A service worker is a specific type of web worker that's used to implement PWAs. 
  Like all web workers, a service worker runs in a separate thread to the main JavaScript code. <---------- ***
  
  The main code creates the worker, <--------------- ***
  passing in a URL to the worker's script. <------------------- **

  The worker and the main code can't directly access each other's state, 
  but can communicate by sending each other messages. <------------------- ***
  
  Workers can be used to run computationally expensive tasks in the background: 
  because they run in a separate thread, the main JavaScript code in the app, 
  that implements the app's UI, can stay responsive to the user. <---------------- **

  So a PWA always has a high level architecture split between:
  
  The main app, with the HTML, CSS, and the part of the JavaScript that implements the app's UI 
  (by handling user events, for example)

  The service worker, which handles offline and background tasks <------------- *
*/

/*
  Offline operation
  -----------------
  Offline operation allows a PWA to provide a good user experience even when the device does not have network connectivity. 
  This is enabled by adding a service worker to an app. <-------------- ***

  A service worker controls some or all of the app's pages. 
  When the service worker is installed, it can fetch the resources from the server for the pages it controls 
  (including pages, styles, scripts, and images, for example) and add them to a local cache. <---------- **
  The Cache interface is used to add resources to the cache. 
  Cache instances are accessible through the WorkerGlobalScope.caches property in the service worker global scope.

  Then whenever the app requests a resource (for example, because the user opened the app or clicked an internal link), 
  the browser fires an event called fetch in the service worker's global scope. 
  By listening for this event, the service worker can intercept the request.

  The event handler for the fetch event is passed a FetchEvent object, which:
  Provides access to the request as a Request instance
  Provides a respondWith() method to send a response to the request.

  One way a service worker can handle requests is a "cache-first" strategy. 
  ...  
*/

const CACHE_NAME = "version_1";
const putInCache = async (request, response) => {
  const cache = await caches.open(CACHE_NAME);
  await cache.put(request, response);
};

const cacheFirst = async ({ request, fallbackURL }) => {
  // First try to get the resource from the cache.
  const responseFromCache = await caches.match(request);
  if (responseFromCache) return responseFromCache;

  // If the response was not found in the cache, try to get the resource from the network.
  try {
    const responseFromNetwork = await fetch(request);
    /* 
      If the network request succeeded, clone the response:
      - put one copy in the cache, for the next time
      - return the original to the app

      Cloning is needed because a response can only be consumed once. <----------- **
    */
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
  } catch (error) {
    // If the network request failed, get the fallback response from the cache.
    const fallbackResponse = await caches.match(fallbackURL);
    if (fallbackResponse) return fallbackResponse;
    // When even the fallback response is not available, there is nothing we can do, but we must always return a Response object.
    return new Response("Netword error happend", {
      status: 408,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
};

self.addEventListener("fetch", (event) => {
  event.respondWith(
    cacheFirst({
      request: event.request,
      fallbackURL: "",
    })
  );
});

/*
  This means that in many situations, the web app will function well even if network connectivity is intermittent. 
  From the point of view of the main app code, it is completely transparent: 
  the app just makes network requests and gets responses. 
  Also, because the service worker is in a separate thread, 
  the main app code can stay responsive to user input while resources are fetched and cached.
  ...
*/

/*
  An alternative would be a network first strategy, in which we try to fetch the resource from the server first, 
  and fall back to the cache if the device is offline.
*/

/*
  Background operation
  --------------------
  While offline operations are the most common use for service workers, 
  they also enable a PWA to operate even while the main app is closed. <--------------- **
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
