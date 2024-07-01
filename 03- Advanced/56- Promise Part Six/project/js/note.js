/*
  Microtasks
  ----------
  Promise handlers, .then/.catch/.finally are always asynchronous. <------------ ***
  Even when a Promise is immediately resolved, the code on the lines below .then/...
  will still execute BEFORE these handlers.
*/

const promise = Promise.resolve(); // the promise is definitely done from the beginning.
promise.then(() => console.log("Promise done!"));
console.log("End of code!");

// Why did the .then trigger afterwards? What's going on?

/*
  Microtasks Queue
  ----------------
  ... the ECMA standard, specifies an internal queue PromiseJobs <-------------- **
  ... when a promise is ready, its .then/... handlers are put into the queue.

  What if the order matters for us?
  How can we make "End of Code!" appear after "Promise done!"?
  ... put it into the queue with .then <-------------- *
*/

// Promise.resolve()
//   .then(() => console.log("Promise done!"))
//   .then(() => console.log("End of Code!")); <-------------- **

/*
  Unhandled rejection
  -------------------
  An "unhandled rejection" occurs when a promise error is not handled at the end of the microtask queue.
  ..., if we expect an error, we add .catch to the promise chain to handle it:
  ...
  But if we forget to add .catch, then, after the microtask queue is empty, <------------ **
  the engine triggers the event;
*/

const p = Promise.reject(new Error("Promise Failed!"));
window.onunhandledrejection = (event) => {
  console.log("event.reason is: ", event.reason);
};
