/*
  Using promises
  --------------
  A Promise is an object representing the eventual completion or failure of an "asynchronous" operation. <---------- ***

  Essentially, a promise is a returned object to which you attach callbacks, 
  instead of passing callbacks into a function.
*/

function success(result) {
  console.log(`Result: ${result}`);
}

function failure(error) {
  console.error(error);
}

doSomethingAsync(settings, success, failure);

// If doSomethingAsync() were rewritten to return a promise, you would attach your callbacks to it instead:
doSomethingAsync(settings).then(success, failure);

// This convention has several advantages. We will explore each one.

/*
  (1) - Chaining
  --------------
  A common need is to execute 2 or more asynchronous operations back to back, 
  where each subsequent operation starts when the previous operation succeeds, 
  with the result from the previous step. 
  
  In the old days, doing several asynchronous operations in a row would lead to the classic callback hell

  With promises, we accomplish this by creating a promise chain. <------------- **
  The API design of promises makes this great, 
  because callbacks are attached to the returned promise object, <-------------- ***
  instead of being passed into a function.
  ...
  the then() function returns a new promise, different from the original. <----------------- ***
*/

const promise = doSomething();
const promisePrime = promise.then(success, failure);

/*
  This second promise (promisePrime) represents the completion not just of doSomething(),
  but also of the success or failure you passed in — which can be other asynchronous functions returning a promise.
  When that's the case, any callbacks added to promisePrime 
  get queued behind the promise returned by either success or failure.

  ...  if your error handling code is the same for all steps, you can attach it to the end of the chain:
*/

doSomething()
  .then((result) => doSomethingElse(result))
  .then((newReault) => doThirdThing(newReault))
  .then((finalResult) => {
    console.log(`Final Result: ${finalResult}`);
  })
  .catch(failure);

/*
  doSomethingElse and doThirdThing can return any value — if they return promises, 
  that promise is first waited until it settles, <------------------- ***
  and the next callback receives the fulfillment value, not the promise itself.

  It is important to always return promises from then callbacks, <---------------------- ***
  even if the promise always resolves to undefined. 

  If the previous handler started a promise but did not return it, 
  there's no way to track its settlement anymore, and the promise is said to be "floating".
*/

doSomething()
  .then((url) => {
    // Missing "return" keyword in front of fetch(url).
    fetch(url);
  })
  .then((result) => {
    /* 
      result is undefined, because nothing is returned from the previous handler. 
      There's no way to know the return value of the fetch() call anymore, 
      or whether it succeeded at all. 
    */
  });

/*
  By returning the result of the fetch call (which is a promise), 
  we can both track its completion and receive its value when it completes.
*/

doSomething()
  .then((url) => {
    return fetch(url);
  })
  .then((result) => {
    // result is a Response object
  });

/*
  Floating promises could be worse if you have race conditions,
  if the promise from the last handler is not returned, the next then handler will be called early, 
  and any value it reads may be incomplete. <----------------------- ***   
*/

const listOfIngredients = [];
doSomething()
  .then((url) => {
    // Missing "return" keyword in front of fetch(url).
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        listOfIngredients.push(data);
      });
  })
  .then(() => {
    console.log(listOfIngredients);
    // listOfIngredients will always be [], because the fetch request hasn't completed yet.
  });

/*
  Therefore, as a rule of thumb, whenever your operation encounters a promise, 
  return it and defer its handling to the next then handler. <------------------- **
  (defer: to postpone)
*/

doSomething()
  .then((url) => {
    // "return" keyword now included in front of fetch call.
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        listOfIngredients.push(data);
      });
  })
  .then(() => {
    console.log(listOfIngredients);
    // listOfIngredients will now contain data from fetch call.
  });

/*
  Even better, you can flatten the nested chain into a single chain, 
  which is simpler and makes error handling easier. 
*/

doSomething()
  .then((url) => fetch(url))
  .then((res) => res.json())
  .then((data) => {
    listOfIngredients.push(data);
  })
  .then(() => {
    console.log(listOfIngredients);
  });

/*
  Using async/await can help you write code that's more intuitive and resembles synchronous code.
*/

async function logIngredients() {
  const url = await doSomething();
  const res = await fetch(url);
  const data = await res.json();
  listOfIngredients.push(data);
  console.log(listOfIngredients);
}

/*
  Note how the code looks exactly like synchronous code, except for the await keywords in front of promises. <------ **
  One of the only tradeoffs is that it may be easy to forget the await keyword, 
  which can only be fixed when there's a type mismatch (e.g. trying to use a promise as a value).
   
  async/await builds on promises ...
  so there's minimal refactoring needed to change from promises to async/await.
*/

/*
  async/await has the same concurrency semantics as normal promise chains.
  await within one async function does NOT stop the entire program, <--------------------- **
  only the parts that depend on its value, 
  so other async jobs can still run while the await is pending. <--------------------- **
*/

/*
  (2) - Error Handling
  --------------------
  ... seeing failure ... times in the pyramid of doom earlier, compared to only once at the end of the promise chain:
  If there's an exception, the browser will look down the chain for .catch() handlers or onRejected. 
  This is very much modeled after how synchronous code works:
*/

try {
  const result = syncDoSomething();
  const newResult = syncDoSomethingElse(result);
  const finalResult = syncDoThirdThing(newResult);
  console.log(`Got the final result: ${finalResult}`);
} catch (error) {
  failure(error);
}
