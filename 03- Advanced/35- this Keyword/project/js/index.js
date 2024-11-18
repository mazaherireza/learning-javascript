/*
The "this" keyword refers to different objects depending on how it is used.
In an object method, "this" refers to the object.

Alone, "this" refers to the global object.

In a function, "this" refers to the global object.
In a function, in strict mode, "this" is undefined. <----------- **

In an event, "this" refers to the element that received the event.
*/

// "this" is not a variable. It is a keyword. <------------- **

const person = {
  firstName: "Reza",
  lastName: "Mazaheri",
  fullName: function () {
    // <----------- Object method
    return `${this.firstName} ${this.lastName}`;
  },
};
// "this" refers to the person object, because fullName is a method of the person object.

/* 
When used alone, this refers to the global object. 
Because this is running in the global scope. <-------------------- ***
In strict mode, when used alone, "this" also refers to the global object. 
*/
console.log(this); // Window

// In a function, the global object is the default binding for "this". <---------- **
function test() {
  "use strict";
  console.log(this); // undefined
}
test();

/* 
JS strict mode, does not allow default binding. <------------------ ***
So, when used in a function, in strict mode, "this" is undefined.
*/

// In HTML event handlers, "this" refers to the HTML element that received the event.

/* The handling of "this" is different in arrow functions compared to regular functions.
  ... with arrow functions there are NO binding of this. <--------------- ***
  
  In regular functions the "this" keyword represented the object that CALLED the function,
  which could be the window, the document, a button or whatever.

  With arrow functions the "this" keyword always represents the object that DEFINED the arrow function.
*/

const func = () => {
  "use strict";
  console.log(this); // Window
};

func();

const title = "Title"; // <-------------- ***
const book1 = {
  title: "Dr. Jekyll and Mr. Hyde",
  author: "Robert Louis Stevenson",
  log: function () {
    console.log(title);
  },
};

const log = book1.log;
log(); // Title
book1.log(); // Title

const book2 = {
  title: "Dr. Jekyll and Mr. Hyde",
  author: "Robert Louis Stevenson",
  log: function () {
    console.log(this.title);
  },
};

const anotherLog = book2.log;
anotherLog(); // undefined <---------- Why? (this references to Window)
book2.log(); // Dr. Jekyll and Mr. Hyde
