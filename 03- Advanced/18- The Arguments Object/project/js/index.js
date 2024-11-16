/* 
  const sum = (first, second) => {
    console.log(arguments); <--------- Uncaught ReferenceError: arguments is not defined
    
    The arguments object is a local variable available within all non-arrow functions. 
  };
*/

function sum() {
  /* 
    If a function is called with too many arguments (more than declared),
    these arguments can be reached using the "arguments" object. 
  */

  console.log(arguments);
  console.log(typeof arguments); // object
  // arguments.forEach((element) => { <---------- Uncaught TypeError: arguments.forEach is not a function
  //   console.log(element);
  // });
  const len = arguments.length;
  let sum = 0;
  for (let index = 0; index < len; index++) {
    sum += arguments[index];
  }
  return sum;
}

const percentages = [10, 20, 5, 40, 10, 35];
console.log(sum(...percentages));
