// for of statement loops through the values of an iterable object.
// ... iterable DSs such as Arrays, Strings, Maps, NodeList and more.

const evenNumbers = [100, 102, 104, 106, 108];
for (const num of evenNumbers) console.log(num);

const fullName = "Reza Mazaheri";
for (const char of fullName) console.log(char);
for (const char in fullName) console.log(char); // for in <------------ *

function sum() {
  let sum = 0;
  // arguments.forEach() <---------------- X
  for (const arg of arguments) // <-------------- Inside function ...
    sum += arg;
  return sum;
}

console.log(sum(...evenNumbers));
