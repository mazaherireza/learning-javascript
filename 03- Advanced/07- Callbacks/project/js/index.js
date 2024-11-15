const nums = [1_001, 1_002, 1_003, 1_004, 1_005];

const iterate = (callback) => {
  const result = [];
  nums.forEach((num) => {
    result.push(callback(num));
  });
  return result;
};

const double = (x) => x * 2;

console.log(iterate(double));
// double is called a callback function, it is passed to iterate as an argument.
