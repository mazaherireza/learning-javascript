// Error handling with promises

/* 
  promise chains are great at error handling. <------------- ***
  When a promise rejects, the control jumps to the closest rejection handler.
*/

fetch("https://no-such-server.xyz") // rejects
  .then((response) => response.json())
  .catch((error) => console.error(error)); // It may appear after one or maybe several .then

/*
  The easiest way to catch all errors is to append .catch to the end of chain.
  ... if any of the promises above rejects (a network problem or invalid json or whatever)
  then it would catch it.
*/

// The code of a promise executor and promise handlers has an "invisible try...catch" around it.
// ... catches the error and turns it into rejected promise.

// This happens for all errors, not just those caused by the throw statement.

new Promise((resolve, reject) => {
  resolve("OK");
})
  .then((result) => {
    //throw new Error("Error!");
    sum(); // No such function
  })
  .catch((error) => {
    // ... not only catches explicit rejections, but also accidental errors in the handlers above.
    console.error(error);
  });

// Rethrowing

/*
  If we throw inside .catch, then the control goes to the next closest error handler.
  And if we handle the error and finish normally, then it continues to the next closest successful .then handler.
*/

new Promise((resolve, reject) => {
  throw new Error("Error!");
})
  .catch((error) => {
    if (error instanceof URIError) {
      // handle it
    } else {
      console.error("Can't handle such error");
      throw error;
    }
  })
  .then(() => {
    // doesn't run here
    console.log("Code in then section");
  })
  .catch((error) => {
    console.log(`The unknown error has occured: ${error}`);
  });

/* 
  Unhandled rejection
  What happens when an error is not handled? 
  ... so the error gets "stuck". There's no code to handle it.
*/

// ... The script dies with a message in the console.
// The JS engine tracks such rejections and generates a global error ...

// In the browser we can catch such errors using the event ...

window.onunhandledrejection = (event) => {
  console.log(event.promise);
  console.log(event.reason);
};

new Promise(() => {
  throw new Error("E");
});
