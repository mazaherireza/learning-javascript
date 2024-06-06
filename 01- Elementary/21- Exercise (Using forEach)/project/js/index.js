const users = [
  {
    _id: "AERY_1001",
    username: "rezamazaheri",
    firstName: "Reza",
    lastName: "Mazaheri",
    age: 35,
  },
];
users.forEach((user) => {
  console.log(`Full Name: ${user.firstName} ${user.lastName}`);
});
