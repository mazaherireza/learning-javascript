const first = parseInt(prompt("Enter The First Number: ", 1)); // parseInt deletes leading zeros. (021 converts to 21)
const second = parseInt(prompt("Enter The Second Number: ", 0));

let multiplication = 1;
let counter = second;

while (counter > 0) {
  multiplication *= first;
  counter--;
}

console.log(`${first}^${second} is: ${multiplication}`);
