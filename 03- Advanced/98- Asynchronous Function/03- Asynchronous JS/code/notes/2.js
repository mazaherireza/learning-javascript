/*
  async function
  --------------
  The async function declaration creates a binding of a new async function to a given name. 
  The await keyword is permitted within the function body, enabling asynchronous, 
  promise-based behavior to be written in a cleaner style and avoiding the need to explicitly configure promise chains.
*/

function resolveAfter2s() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("[resolvedAfter2s] Resolved."), 2_000);
  });
}

async function asyncCall() {
  const result = await resolveAfter2s();
  console.log(result);
}

asyncCall();

// There cannot be a line terminator between async and function, otherwise a semicolon is automatically inserted, ...

/*
  Description
  -----------
  An async function declaration creates an AsyncFunction object. <------------ ***

  Each time when an async function is called, 
  it returns a new Promise which will be resolved with the value returned by the async function, 
  or rejected with an exception uncaught within the async function.

  Async functions can contain zero or more await expressions. 
  Await expressions make promise-returning functions behave as though they're synchronous <----------- ***
  by suspending execution until the returned promise is fulfilled or rejected.

  The resolved value of the promise is treated as the return value of the await expression. <---------- ***

  Use of async and await enables the use of ordinary try / catch blocks around asynchronous code.
  
  The await keyword is only valid inside async functions within regular JavaScript code.

  await can be used on its own with JavaScript modules.

  The purpose of async/await is to simplify the syntax necessary to consume promise-based APIs.
  The behavior of async/await is similar to combining generators and promises.
*/
