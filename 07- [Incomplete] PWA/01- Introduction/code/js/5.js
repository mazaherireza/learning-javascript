/*
  Push
  ----
  The Push API, enables a PWA to receive messages pushed from the server, 
  whether the app is running or not. <------------- *

  When the message is received by the device, the app's service worker is started and handles the message, 
  and a notification is shown to the user. 
  ... "silent push" in which no notification is shown, but no browsers support this, 
  because of privacy concerns (for example, that push could then be used to track a user's location).  
*/

/*
  A common use case for push notifications is chat apps: 
  when the user receives a message from one of their contacts, 
  it is delivered as a push message and the app shows a notification.

  Push messages are NOT sent directly from the app server to the device. <------------- **
  Instead, your app server sends messages to a push service, <------------ **
  from which the device can retrieve them and deliver them to the app.

  ... messages from your server to the push service need to be encrypted and signed ... <------------ **

  The push service is operated by the browser vendor or by a third party, <------------- *
  and the app server communicates with it using the HTTP Push protocol. 
  The app server can use a third-party library such as web-push to take care of the protocol details.
*/

/*
  Subscribing to push messages
  ----------------------------
  1. ..., the app server needs to be provisioned with a public/private key pair, so it can sign push messages. 

  2. On the device, the app uses the PushManager.subscribe() method to subscribe to messages from the server. 
  The subscribe() method:
  Takes the app server's public key as an argument: 
  this is what the push service will use to verify the signature on messages from the app server.

  Returns a Promise that resolves to a PushSubscription object. 
  This object includes:
  The endpoint for the push service ...
  The public encryption key that your server will use to encrypt messages to the push service.

  3. The app sends the endpoint and public encryption key to your server (for example, using fetch()).

  After this, the app server is able to start sending push messages.
*/

/*
  Sending, delivering, and handling push messages
  -----------------------------------------------
  When an event happens on the server that the server wants the app to handle, the server can send messages, 
  and the sequence of steps is like this:

  1. The app server signs the message using its private signing key and encrypts the message 
  using the public encryption key for the push service.

  2. The app server sends the message to the endpoint for the push service, 
  using the HTTP Push protocol, ...

  3. The push service checks the signature on the message, and if the signature is valid, 
  the push service queues the message for delivery.

  4. When the device has network connectivity, the push service delivers the encrypted message to the browser.

  5. When the browser receives the encrypted message, it decrypts the message.

  6. The browser starts the service worker if necessary, and fires an event called push in the service worker's global scope. 
  The event handler is passed a PushEvent object, which contains the message data.

  7. In its event handler, the service worker does any processing of the message. 
  As usual, the event handler calls event.waitUntil() to ask the browser to keep the service worker running.

  8. In its event handler, the service worker creates a notification using registration.showNotification().

  9. If the user clicks the notification or closes it, 
  the notificationclick and notificationclose, respectively, are fired in the service worker's global scope. 
  These enable the app to handle the user's response to the notification.
*/

/*
  Permissions and restrictions
  ----------------------------
*/
