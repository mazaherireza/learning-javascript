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

const username = "yo3ef_am";
const hasAccount = users.some((user) => user.username == username);
hasAccount ? console.log("Welcome") : console.log("Sign Up");
