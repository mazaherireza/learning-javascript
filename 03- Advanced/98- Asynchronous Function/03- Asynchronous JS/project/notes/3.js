/*
  Async functions always return a promise. <-------------- *** 
  If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.
*/

async function f() {
  return 1;
}

// It is similar to

function fPrime() {
  return Promise.resolve(1);
}

/*
  Even though the return value of an async function behaves as if it's wrapped in a Promise.resolve, 
  they are not equivalent. <-------------------- ***

  An async function will return a different reference, <------------ *
  whereas Promise.resolve returns the same reference if the given value is a promise.

  It can be a problem when you want to check the equality of a promise and a return value of an async function.
*/

const promise = new Promise((resolve, reject) => {
  resolve(1);
});

async function asyncReturn() {
  return promise;
}

function basicReturn() {
  return Promise.resolve(promise);
}

console.log(promise === basicReturn()); // true
console.log(promise === asyncReturn()); // false

/*
  The body of an async function can be thought of as being split by zero or more await expressions. 

  Top-level code, up to and including the first await expression (if there is one), is run synchronously.
  In this way, an async function without an await expression will run synchronously.
  
  If there is an await expression inside the function body, however, 
  the async function will always complete asynchronously.
*/

async function f() {
  await 1;
}

// It is also equivalent to:

async function fPrime() {
  return Promise.resolve(1).then(() => undefined);
}

/*  
  Code after each await expression can be thought of as existing in a .then callback. 
  In this way a promise chain is progressively constructed with each re-entrant step through the function. 
  The return value forms the final link in the chain.
*/

/*
  ... we successively await two promises. 
  Progress moves through function foo in 3 stages.
*/

async function foo() {
  const result1 = await new Promise((resolve) => {
    setTimeout(() => resolve("One"), 5_000);
  });
  console.log(result1);
  const result2 = await new Promise((resolve) => {
    setTimeout(() => resolve("Two"), 5_000);
  });
  console.log(result2);
}

foo();

//  [Incomplete]

/*
  async function declarations behave similar to function declarations, 
  they are hoisted to the top of their scope and can be called anywhere in their scope, 
  and they can be redeclared only in certain contexts.
*/
