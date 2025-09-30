"use strict";

x = 1001;
console.log(x); // Uncaught ReferenceError: x is not defined

let public = "PUBLIC"; // Uncaught SyntaxError: Unexpected strict mode reserved word

const firstName = "Reza";
delete firstName; // Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.
