const fulfilledPromise = new Promise(function (resolve, reject) {
  // executor
  setTimeout(() => resolve("Done"), 2_000);
});

console.log(fulfilledPromise);

fulfilledPromise // Attach handlers to settled promise
  .then(
    (result) => {
      console.log(result);
    },
    (error) => {
      console.error(error);
    }
  )
  .finally(() => console.log("Stop Loading Indicator.")); // General cleanup

//.finally(f) ... f runs ALWAYS, when the promise is settled, be it resolve or reject.

new Promise((resolve, reject) => {
  reject(new Error("Error!")); // reject runs the SECOND function in then <------------- *
})
  .then(
    (result) => console.log(result),
    (error) => console.error(error)
  )
  .finally(() => console.log("***")); // runs when the promise is settled, doesn't matter successfully or not.

/*
  If we're interested only in successful completions,
  then we can provide only one function argument to .then
*/

const rejectedPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Error")), 5_000);
});

rejectedPromise.catch(alert);
// Or
//rejectedPromise.then(null, alert)

// A finally HANDLER has NO arguments,
// ... shouldn't return anything.
