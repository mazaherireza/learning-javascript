/*
  JS Function call()
  ------------------
  Method Reuse <------------- **
  With the call() method, you can write A method that can be used on DIFFERENT objects. <----------- ***
  
  In JS, all functions are object methods. <---------------- **
  ... it is a function of the global object.
  ...
  The "this" keyword refers to different objects depending on how it is used.
  ...
  Methods like call(), apply() and bind() can refer "this" to ANY OBJECT. <-------------- *
  
  The call() method is a predefined JS method.
  It can be used to invoke a method with an owner object as an argument(parameter).

  With call(), an object can use a method belonging to another object.
*/

import { person } from "./person.js";
import { developers } from "./developers.js";

const INDEX = 0;
const developer = developers[INDEX];
console.log(person.fullName.call(developer, developer.city, developer.country));
