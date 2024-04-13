x = 100; 
console.log(`x is: ${x}`);
var x; // Hoisting

// var x = 200 // Redeclare is OK.

// y = 10
// console.log(`y is: ${y}`) // Error: Cannot access 'y' before initialization
// let y

// let z = 'Z'
// let z = 'Redeclare' <--------------------- Uncaught SyntaxError: Identifier 'z' has already been declared

if (true) {
  let insideIf = 'Inside'
}

// console.log(`insideIf is: ${insideIf}`) // <-------------------  Uncaught ReferenceError: insideIf is not defined

if (1001) {
  var insideAnotherIf = 'Inside'
}
console.log(`insideAnotherIf is: ${insideAnotherIf}`)