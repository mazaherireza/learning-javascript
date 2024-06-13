// Function Rest Parameter
// ... allows a function to treat an indefinite number of arguments as an array.

const sum = (...rest) => {
  let sum = 0;
  rest.forEach((num) => (sum += num));
  return sum;
};

const percentages = [10, 5, 10, 25, 10];
console.log(sum(...percentages));
