const employees = [
  {
    _id: "EMP_1001",
    firstName: "Yousef",
    lastName: "Amini",
    personnelCode: "9800880088",
    position: "FullStack Developer",
  },
  {
    _id: "EMP_1002",
    firstName: "Reza",
    lastName: "Mazaheri",
    personnelCode: "9900887788",
    position: "Frontend Developer",
  },
];

const employee = employees.find(
  // Anonymous function
  (employee) => employee._id === "EMP_1001"
);

// IIFE (Immediately Invoked Function Expression)
// A soon as function is created, it invokes itself doesn’t need to invoke explicitly.

(() => {
  console.log("1) IIFE function is called.");
})();

(function () {
  console.log("2) IIFE function is called.");
})();

// Or

const iife = (function () {
  return "Immediately Invoked Function Expression is called.";
})();

console.log(`iife is: ${iife}`);

// https://www.freecodecamp.org/news/iife-in-javascript-what/

/*
 This ensures that code inside IIFE does not interfere with other code or be interfered by another code and so code is safe.

 One way to prevent the functions and variables from polluting the global object is to use immediately invoked function expressions.
*/
