/*
  Promise API
  -----------
  There are 6 static methods in the Promise class.
*/

/*
  Promise.all
  -----------
  ... we want many promises to execute in parallel and wait until all of them are ready.

  const promise = Promise.all(iterable)
  Promise.all takes an iterable (usually, an array of promises) and returns a new promise.
  The new promise resolves when all listed promises are resolved, and the array of their results becomes its result.

  ... the order of the resulting array members is the same as in its source promises.
  Even though the first promise takes the lognest time to resolve, ...

  ... map an array of job data into an array of promises, ...
*/

const URLs = ["First URL", "Second URL"];
const requests = URLs.map((URL) => fetch(URL)); // ... promise of the fetch
Promise.all(requests) // Waits until ALL jobs are resolved
  .then((responses) => responses.forEach((response) => console.log(response)));

/*
  If any of the promises is rejected, the promise returned by Promise.all, immediately rejects with that error.

  In case of an error, other promises are ignored <--------------- ***
  ...
  Promise.all does nothing to cancel them, as there's no concept of "cancellation" in promises.

  Promise.all(iterable), allows non-promise "regular" values in iterable <---------------- **
  ... it's passed to the resulting array "as is".
*/

/*
  Promise.allSettled
  ------------------
  ... just waits for all promises to settle, regardless of the result. <-------------- **
  The resulting array has:
  {status: "fulfilled", value: result} for successful responses
  {status: "rejected", reason: error} for errors
*/

Promise.allSettled(URLs.map((URL) => fetch(URL))).then((results) => {
  results.forEach((result, index) => {
    if (result.status == "fulfilled") {
      //
    }
    if (result.status == "rejected") {
      //
    }
  });
});

/*
  Polyfill
  --------
  If the browser doesn't support Promise.allSettled, it's easy to polyfill:
*/

if (!Promise.allSettled) {
  const rejectedHandler = (reason) => ({
    status: "rejected",
    reason,
  });
  const resolveHandler = (value) => ({
    status: "fulfilled",
    value,
  });

  Promise.allSettled = (promises) => {
    const convertedPromises = promises.map((promise) => {
      Promise.resolve(promise).then(resolveHandler, rejectedHandler);
    });
    return Promise.all(convertedPromises);
  };
}

/*
  Promise.race
  ------------
  Similar to Promise.all, but waits ONLY for the FIRST SETTLED promise and gets its result (or error).
  Promise.race(iterable)

  ... After the first settled promise "wins the race", all furthur results/errors are ignored.
*/

/*
  Promise.any
  -----------
  Similar to Promise.race, but waits ONLY for the FIRST FULFILLED promise and gets its result.
  If all of the given promises are rejected, then the returned promise is rejected with AggregateError

  ... Promise.any(iterable)
  ... error.constructor.name // AggregateError
*/
