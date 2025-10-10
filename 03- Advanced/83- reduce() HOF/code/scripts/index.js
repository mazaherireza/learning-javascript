import { names } from "./names.js";

const result = names.reduce((accumulator, current) => {
  return { ...accumulator, [current]: (accumulator[current] || 0) + 1 };
}, {});

console.log(result);
