// Promises Chaining

// The idea is that the result is passed through the chain of .then handlers.

new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 2_000); // The initial promise, resolves in 2 seconds
})
  .then((result) => {
    // ... creates a new promise ... <------------- ***
    console.log(result);
    return result * 2;
  })
  .then((result) => {
    console.log(result);
    return result * 2;
  })
  .then((result) => {
    console.log(result);
  });

// ... 1 -> 2 -> 4

/* 
  ... every call to a .then, returns a new promise, ... <--------------- ***
  When a handler returns a value, it becomes the result of that promise, so the next .then is called with it.
*/

// .. we can also add many .then (or .catch) to a single promise. This is NOT chaining.

// ... add several handlers to ONE promise ...
const rejectedPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject("REJECTED"), 5_000);
});

rejectedPromise.catch((result) => {
  console.log(result);
  return `%${result}%`;
});
rejectedPromise.catch((result) => {
  console.log(result);
  return `%${result}%`;
});

// ... they proccess it independently.

// Returning promises <------------ *
// A handler used in .then (handler) may create and return a promise.
// ... further handlers WAIT until it settles, and then get its result. <---------------- **

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 2_000);
})
  .then(function (result) {
    console.log(result);
    return new Promise(function (resolve, reject) {
      setTimeout(() => resolve(result * 2), 2_000);
    });
  })
  .then(function (result) {
    console.log(result); // 2
  });

// Returning promises allows us to build chains of asynchronous actions.

/*
  ... promisified loadScript, ...
  ... there are no signs of "pyramid of doom".
  ... the nested function has access to the outer scope. <--------------- **
*/

// Thenables
/*
  ... a handler may return not exactly a promise, but a so-called "thenable" object.
  The idea is that 3rd-party libraries may implement "promise-compatible" objects of their own.
*/

class Thenable {
  constructor(response) {
    this.response = response;
  }
  then(resolve, reject) {
    console.log(resolve);
    setTimeout(() => resolve(this.response * 5), 1_000);
  }
}

new Promise((resolve) => resolve(1))
  .then((result) => {
    return new Thenable(result); // (*)
  })
  .then((result) => {
    console.log(result);
  });

// JS checks the object returned by the .then handler in line (*)
// if it has a callable method named then, ...

// This feature allows us to integrate custom objects with promise chains without having to inherit from Promise.
