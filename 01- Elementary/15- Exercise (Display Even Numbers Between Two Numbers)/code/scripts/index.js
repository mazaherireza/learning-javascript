let first = parseInt(prompt("Enter The First Number: ", 0));
let second = parseInt(prompt("Enter The Second Number: ", 0));

if (first === second) {
  console.log("Two numbers are the same.");
} else {
  if (first > second) {
    const temp = first;
    first = second;
    second = temp;
  }

  let counter = (first + 1) % 2 == 0 ? first + 1 : first + 2;

  for (counter; counter < second; counter += 2) {
    console.log(counter);
  }
}
