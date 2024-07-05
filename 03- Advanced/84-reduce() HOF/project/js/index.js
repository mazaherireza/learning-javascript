import { names } from "./names.js";

const result = names.reduce((accumulator, current) => {
  return [...accumulator, ...current];
  // return accumulator.concat(current)
});

console.log(result);
