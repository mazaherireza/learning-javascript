/*
  JavaScript Async
  ----------------
  "async and await make promises easier to write" <-------------- ***
  async makes a function return a Promise
  await makes a function wait for a Promise 
 
  The keyword async before a function makes the function return a promise:
*/

async function salutation() {
  return "Salut!";
}

/* 
  Is the same as:
  
  function salutation() {
    return Promise.resolve("Salut!");
  }
*/

// Here is how to use the Promise.

salutation.then(
  function (value) {},
  function (error) {}
);

/*
  The await keyword can only be used inside an async function.
  The await keyword makes the function pause the execution and wait for a resolved promise before it continues.
*/

const $ = document;
const flirtation = async () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("❤");
    }, 5_000);
  });
  $.querySelcector("#love").innerHTML = await promise;
};
