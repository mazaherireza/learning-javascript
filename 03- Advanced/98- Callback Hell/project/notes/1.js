/*
  Callback Hell in JavaScript
  ---------------------------
  JavaScript is an asynchronous (non-blocking) and single-threaded programming language, 
  meaning only one process can be run at a time.

  ... callback hell generally refers to an ineffective way of writing code with asynchronous calls. 
  It is also known as the Pyramid of Doom.

  ... a situation where an excessive amount of nested callback functions are being executed.

  Callbacks in JavaScript
  -----------------------
  ... the callback concept allows us to pass the function as an argument to another function.
*/

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const calculateResult = (callback, x, y) => callback(x, y);

calculateResult(add, 100, 101);

/*
  Asynchronous JavaScript
  -----------------------
  ... to enhance the application's performance. 

  ...  a typical JavaScript engine consists of a heap memory and a call stack. 
  The heap memory is responsible for allocating the memory for objects and functions at runtime whenever they are needed.

  ... the event loop in JavaScript handles the asynchronous tasks.
*/

/*
  JS, a single-threaded language, relies on callbacks for handling asynchronous tasks.
  ... nested callbacks stacked below one another forming a pyramid strucutre.
*/

const words = document.querySelectorAll(".word");
const INTERVAL = 1_000;
const animateAll = (animate) => {
  setTimeout(() => {
    animate(words[0]);
    setTimeout(() => {
      animate(words[1]);
      setTimeout(() => {
        animate(words[2]);
      }, INTERVAL);
    }, INTERVAL);
  }, INTERVAL);
};

const animate = (word) => {
  word.classList.add("animate");
};

animateAll(animate);
