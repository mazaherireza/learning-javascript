/*
  Background fetch
  ----------------
  Background sync is useful for relatively short background operations, <----------------- *
  but as we just saw: if a service worker doesn't finish handling a sync event in a relatively short time, 
  the browser will stop the service worker. <------------ *

  This is an intentional measure to conserve battery life and protect the user's privacy 
  by minimizing the time for which the user's IP address is exposed to the server while the app is in the background.
  
  This makes background sync unsuitable for longer operations - downloading a movie, for example. 
  For this scenario, you need the Background Fetch API. <---------------- *

  With background fetch, 
  network requests can be performed while BOTH the main app UI and the service worker are closed. <---------- ***
  
  With background fetch:
  The request is initiated from the main app UI

  Whether or not the main app is open, 
  the browser displays a persistent UI element that notifies the user about the ongoing request, 
  and enables them to cancel it or check its progress

  When the request is completed with success or failure, or the user has asked to check the request's progress, 
  then the browser starts the service worker (if necessary) and fires the appropriate event in the service worker's scope.
*/

/*
  Making a background fetch request
  ---------------------------------
  A background fetch request is initiated in the main app code, <------------ *
  by calling backgroundFetch.fetch() on the ServiceWorkerRegistration object, like this:
*/

const requestBackgroundFetch = async (movieData) => {
  const swRegistration = await navigator.serviceWorker.ready;
  const fetchRegistration = await swRegistration.backgroundFetch.fetch(
    "Download-Movie",
    [],
    {
      icons: "",
      title: "Downloading 'The Invisible Guest'",
      downloadTotal: 60 * 1024 * 1024,
    }
  );
};

/*
  We're passing three arguments into backgroundFetch.fetch():
  1) An identifier for this fetch request
  2) An array of Request objects or URLs. 
  (A single background fetch request can include multiple network requests.)
  3) An object containing data for the UI that the browser uses to show the existence and progress of the request.
*/

/*
  The backgroundFetch.fetch() call, returns a Promise that resolves to a BackgroundFetchRegistration object. 
  This enables the main app to update its own UI as the request progresses. 
  However, if the main app is closed, the fetch will continue in the background. <------------ **

  The browser will display a persistent UI element reminding the user that the request is ongoing, 
  giving them the chance to find out more about the request and cancel it if they wish. 
  The UI will include an icon and title taken from the icons and title arguments, 
  and uses downloadTotal as an estimate of the total download size, to show the request's progress.
*/

/*
  Handling request outcomes
  -------------------------
  When the fetch has finished with success or failure, or the user has clicked the progress UI, 
  then the browser starts the app's service worker, if necessary, and fires an event in the service worker's scope. 
 
  The following events can be fired:
  backgroundfetchsuccess: all requests were successful
  backgroundfetchfail: at least one request failed
  backgroundfetchabort: the fetch was canceled by the user or by the main app
  backgroundfetchclick: the user clicked on the progress UI element that the browser is showing
*/

/*
  Retrieving response data
  ------------------------
  In the handlers for the backgroundfetchsuccess, backgroundfetchfail, and backgroundfetchabort events, 
  the service worker can retrieve the request and response data.

  To get the response, the event handler accesses the event's registration property. 
  This is a BackgroundFetchRegistration object, 
  which has matchAll() and match() methods that return BackgroundFetchRecord objects matching the given URL 
  (or, in the case of matchAll() all records if no URL is given).  

  Each BackgroundFetchRecord has a responseReady property that is a Promise which resolves with the Response, 
  once the response is available.
  So to access response data, the handler could do something like:
*/

self.addEventListener("backgroundfetchsuccess", (event) => {
  event.waitUntil(async () => {
    const registration = event.registration;
    const records = await registration.matchAll();
    const responsePromises = records.map(async (record) => {
      await record.responseReady;
    });
    const responses = Promise.all(responsePromises);
  });
});

/*
  Since the response data won't be available after the handler exits, 
  the handler should store the data (for example, in the Cache) if the app still wants it.
*/

/*
  Updating the browser's UI
  -------------------------
  The event object passed into backgroundfetchsuccess and backgroundfetchfail also has an updateUI() method, 
  which can be used to update the UI that the browser shows to keep the user informed about the fetch operation. 
  With updateUI(), the handler can update the UI element's title and icon:
*/

self.addEventListener("backgroundfetchsuccess", (event) => {
  event.updateUI({
    title: "",
  });
});

/*
  Responding to user interaction
  ------------------------------
  The backgroundfetchclick event is fired when the user has clicked on the UI element 
  that the browser shows while the fetch is ongoing.

  The expected response here is to open a window giving the user more information about the fetch operation, 
  which can be done from the service worker using clients.openWindow(). 
  For example:
*/

self.addEventListener("backgroundfetchclick", (event) => {
  const registration = event.registration;
  if (registration.result == "success") clients.openWindow("play-movie");
});
