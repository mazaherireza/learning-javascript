const num1 = +prompt("Enter first number: ");
const num2 = +prompt("Enter second number: ");

const operator = prompt(`Enter the operator (Enter number, not sign):
  1. +
  2. -
  3. *
  4. /
  5. **
`);

switch (operator) {
  case "1":
    console.log(`Result is: ${num1 + num2}`);
    break;
  case "2":
    console.log(`Result is: ${num1 - num2}`);
    break;
  case "3":
    console.log(`Result is: ${num1 * num2}`);
    break;
  case "4":
    console.log(`Result is: ${num1 / num2}`);
    break;
  case "5":
    console.log(`Result is: ${num1 ** num2}`);
    break;
  default:
    console.log("Invalid operator!");
}
