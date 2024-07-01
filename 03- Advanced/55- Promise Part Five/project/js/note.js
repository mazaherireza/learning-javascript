/*
  Promisification
  ---------------
  ... it's the conversion of a function that accepts a callback into a function that returns a promise.
*/

const $ = document;

const loadScript = (source, callback) => {
  const script = $.createElement("script");
  script.src = source;
  script.onload = () => callback(null, script); // ... in case of successful loading.
  script.onerror = () => callback(new Error(`Script load error for ${source}`));
  $.head.append(script);
};

/*
  Let's promisify it.
  ... returns a promise instead of using callbacks.
*/

const loadScriptPromise = (source) => {
  return new Promise((resolve, reject) => {
    loadScript(source, (error, script) => {
      if (error) reject(error);
      else resolve(script);
    });
  });
};

/*
  Usage:
  loadScriptPromise('path/script.js').then(...)
  ...
  ... the new function is a wrapper around the original laodScript function.
  ... we may need to promisify more than one function, so it makes sense to use a helper.
*/

// ... it accepts a to-promisify function func and returns a wrapper function.
function promisify(func) {
  // A wrapper function
  return function (...args) {
    /*
      Function Rest Parameter
      ----------------------
      The rest parameter (...) allows a function to treat an indefinite number of arguments as an array.
    */
    return new Promise((resolve, reject) => {
      // Custom callback for func
      function callback(error, result) {
        if (error) reject(error);
        else resolve(result);
      }
      args.push(callback);
      func.call(this, ...args); // <---------- ****
      /*
        ... call() method is a predefined JS method.
        ... call a method with an owner object as an argument
      */
    });
  };
}

const test = promisify(loadScript);
loadScript("js/index.js", () => {});

// ... wrapper returns a promise and forwards the call to the original func, ...

/* 
  ... what if the original func expects a callback with more arguments, callback(err, res1, res2, ...)?
  ... for callbacks with many arguments.
*/

// anotherPromisify(func, true) to get array of results
function anotherPromisify(fun, manyArgs = false) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function callback(error, ...results) {
        if (error) reject(error);
        else {
          // resolve with all callback results if manyArgs is specified
          resolve(manyArgs ? results : results[0]);
        }
      }
      args.push(callback);
      fun.call(this, ...args);
    });
  };
}
