const numbers = [1001, 1002, 13, 15, 17, 0, 101, 202, 303, 1001, 1002];

const INDEX = 0;

console.log(Array.isArray(numbers)); // true
console.log(`${numbers.join(" ")}`);
console.log(`Index of ${numbers[INDEX]} is: `, numbers.indexOf(numbers[INDEX]));

console.log(
  `last index of ${numbers[INDEX]} is: ${numbers.lastIndexOf(numbers[INDEX])}`
); //9

const PROGRAMMING_LANGUAGE = "JavaScript";

console.log(`My favourite programming language is: ${PROGRAMMING_LANGUAGE}`);
console.log(PROGRAMMING_LANGUAGE.split(""));
