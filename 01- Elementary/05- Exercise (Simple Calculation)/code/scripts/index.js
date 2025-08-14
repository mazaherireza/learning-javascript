const dateOfBirth = +prompt("Enter Your dateOfBirth: ", 1989);

if (isNaN(dateOfBirth)) {
  alert("Error!, (Invalid Input)");
} else {
  const now = new Date();
  let age = now.getFullYear() - dateOfBirth;
  alert(`You are ${age} year(s) old.`);
}
