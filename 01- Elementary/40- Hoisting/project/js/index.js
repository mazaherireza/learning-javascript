// Hoisting

x = 1;
console.log(`x is: ${x}`); // x is: 1
// let x; <------- ReferenceError
var x;

console.log(`y is ${y}`); // y is: undefined
var y = 11;

test();

function test() {
  console.log("Test is called.");
}
