// A closure is a function, having access to the parent scope, even after the parent function has closed.

const makeCounter = () => {
  let counter = 0;
  return () => ++counter; // Closure
};

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
