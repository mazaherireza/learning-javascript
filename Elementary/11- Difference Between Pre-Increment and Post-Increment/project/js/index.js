let x = 0;
let y = x + 1;

const print = () => {
  console.log(`x is ${x} and y is ${y}.`);
};

print();

x = 0;
// Post-Increment
y = x++; // <-------------------------- 1. Assignment 2. Increment

print(); // x is 1 and y is 1.

x = 0;
// Pre-Increment
y = ++x; // <-------------------------- 1.Increment 2.Assignment
print(); // x is 1 and y is 1
