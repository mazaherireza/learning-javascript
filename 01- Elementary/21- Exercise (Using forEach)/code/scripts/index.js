const users = [
  {
    _id: "USR_1001",
    username: "rezamazaheri",
    firstName: "Reza",
    lastName: "Mazaheri",
    age: new Date().getFullYear() - 1989,
  },
];

users.forEach((user) => {
  console.log(`Full Name: ${user.firstName} ${user.lastName}`);
});
