const users = [
  {
    _id: "USR_1001",
    username: "rezamazaheri",
    firstName: "Reza",
    lastName: "Mazaheri",
    age: 36,
  },
  {
    _id: "USR_8008",
    username: "yo3ef_am",
    firstName: "Yousef",
    lastName: "Amini",
    age: 26,
  },
];

const username = prompt("Enter Your Username: ", "Username");

let hasLoggedIn = false;

for (const user of users) {
  if (user.username == username) {
    console.log("Welcome");
    hasLoggedIn = true;
    break;
  }
}

if (!hasLoggedIn) {
  console.log("Sign Up");
}
