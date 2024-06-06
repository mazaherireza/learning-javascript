let n = parseInt(prompt("Enter number: ", 0)); // parseInt deletes leading zeros. (021 converts to 21)
let count = 0;

if (n == 0) count = 1;
else
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }

console.log(`Count of digit(s) is: ${count}.`);
