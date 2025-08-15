// https://good.js.org/

const medicines = ["Minoxidle", "Dimact", "Famotidine"];

// You should use forEach instead of for, while or do while (for arrays).
medicines.forEach((medicine, index) => {
  console.log(`${index + 1}: ${medicine}`);
});

// You should use default parameters.
const sum = (a = 0, b = 0) => {
  return a + b;
};

console.log(`${sum(13)}`);
