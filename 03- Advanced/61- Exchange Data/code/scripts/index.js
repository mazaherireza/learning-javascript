/*
  JSON.stringify()
  ----------------
  A common use of JSON is to exchange data to/from a web server.
  ...
  When sending data to a web server, the data has to be a string. <------------ *
*/

import { books } from "./books.js";
import { user } from "./user.js";

// Convert a JS object into a string with JSON.stringify()
console.log(JSON.stringify(books));

console.log(JSON.stringify(user)); // ... ready to be sent to a server.
console.log(typeof JSON.stringify(user)); // string

/* 
  Storing Data
  -------------
  When storing data, the data has to be a certain format, ... text is always one of the legal formats.
*/

localStorage.setItem("USER", JSON.stringify(user));

const USER = JSON.parse(localStorage.getItem("USER"));
console.log(`USER is: ${USER.firstName}`);
console.log(`USER is: ${USER}`); // <---------------------- X
console.log("USER is:", USER);

console.log(`Books are: ${books}`); // <---------------------- X
console.log(`The first book is: ${books[0]}`); // <---------------------- X
console.log(`Title of first book is: ${books[0].title}`);

const alphabet = ["A a", "B b", "C c", "...", "Z z"];
console.log(`English Alphabet: ${alphabet}`);

/*
  Exceptions 
  ----------
  Stringify Dates
  In JSON, date objects are NOT allowed. <--------------- ***

  Stringify Functions
  In JSON, functions are not allowed as object values.
  The JSON.stringify() function will remove any functions from a JS object, both the key and the value.

  Convert functions into strings to keep them in the JSON object.
  ... toString()
*/
