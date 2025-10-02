/*
  JS Function bind()
  ------------------
  Function Borrowing <----------------- **
  With the bind() method, an object can BORROW a method from another object. <---------- **
*/

import { person } from "./person.js";
import { teachers } from "./teachers.js";

const INDEX = 0;
const teacher = teachers[INDEX];

const { city, country } = teacher;
console.log(person.fullName.bind(teacher, city, country)());
// The teacher object borrows the fullName method from the person object.
// It returns your target function with the correct "this". <---------- ****

/*
  Preserving "this"
  Sometimes the bind() method HAS TO be used to prevent losing "this". <-------------- ***
  When a function is used as a callback, "this" is lost. <----------------- ***
*/
const INTERVAL = 5_000;
setTimeout(person.fullName, INTERVAL); // person.fullName NOT person.fullName() (used as a callback)

// Solution:
const fullName = person.fullName.bind(person);
setTimeout(fullName, INTERVAL);
