const yearOfBirth = +prompt("Enter Your year of birth: ", 1989);

if (isNaN(yearOfBirth)) {
  alert("Error!, (Invalid Input)");
} else {
  const now = new Date();
  
  const age = now.getFullYear() - yearOfBirth;
  alert(`You are ${age} year(s) old.`);
}
