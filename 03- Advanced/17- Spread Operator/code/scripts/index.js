const evenNumbers = [100, 102, 104];
const oddNumbers = [1_001, 1_003, 1_005];

const mixedNumbers = [...evenNumbers, "Delimiter", ...oddNumbers];
console.log(mixedNumbers);

const x = ["A"];

const copy = [...x];
copy.push("B");

console.log(x);
console.log(copy);

const sum = (first, second, third) => first + second + third;
console.log(sum(...evenNumbers));
