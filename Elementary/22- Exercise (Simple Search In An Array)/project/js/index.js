const users = [
  {
    _id: "AERY_1001",
    username: "rezamazaheri",
    firstName: "Reza",
    lastName: "Mazaheri",
    age: 35,
  },
  {
    _id: "AYRY_8008",
    username: "yo3ef_am",
    firstName: "Yousef",
    lastName: "Amini",
    age: 25,
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
if (!hasLoggedIn) console.log("Sign Up");
