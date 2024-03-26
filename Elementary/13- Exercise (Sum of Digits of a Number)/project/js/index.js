let n = Number(prompt("Enter Number: ", 0));
let sum = 0;

while (n > 0) {
  const digit = n % 10;
  sum += digit;
  n = Math.floor(n / 10);
}

console.log(`Sum of digit(s) is: ${sum}.`);
