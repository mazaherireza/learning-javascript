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

const username = "yo3ef_am";

const hasAccount = users.some((user) => user.username == username);
hasAccount ? console.log("Welcome") : console.log("Sign Up");
