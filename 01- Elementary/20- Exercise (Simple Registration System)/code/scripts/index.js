const users = [
  {
    _id: "USR_1",
    username: "rezamazaheri",
    firstName: "Reza",
    lastName: "Mazaheri",
    age: 36,
  },
];

const firstName = prompt("Enter Your First Name: ", "Name");
const lastName = prompt("Enter Your Last Name: ", "Last Name");

let age = prompt("Enter Your Age: ", 18);

while (isNaN(age) || age.length > 3 || +age <= 0) {
  alert("Your Age Is Invalid.");
  age = prompt("Enter Your Age: ", 18);
}
const MIN = 3;
const MAX = 15;

let username = prompt("Enter Your Username: ", "username");

while (username.length < MIN || username.length > MAX) {
  alert(`Username Must Be Between ${MIN} and ${MAX} Characters Long.`);
  username = prompt("Enter Your Username: ", "username");
}

users.push({
  _id: `USR_${users.length + 1}`,
  username,
  firstName,
  lastName,
  age,
});

console.log("Users: ", users);
