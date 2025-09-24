let n = Number(prompt("Enter a  Number: ", 0));
let sum = 0;

let digit;
while (n > 0) {
  digit = n % 10;
  sum += digit;
  n = Math.floor(n / 10);
}

console.log(`Sum of digit(s) is: ${sum}.`);
