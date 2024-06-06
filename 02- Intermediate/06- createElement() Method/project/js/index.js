const firstName = prompt("Enter your first name: ");

const divisionElement = document.createElement("div");
divisionElement.setAttribute("class", firstName); // <-------- * Assign dynamic class name.
divisionElement.innerHTML = firstName;

console.log(divisionElement);
