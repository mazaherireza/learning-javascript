const users = [
  {
    _id: "USR_1001",
    username: "rezamazaheri",
    firstName: "Reza",
    lastName: "Mazaheri",
    age: new Date().getFullYear() - 1989,
  },
];

for (const user of users) {
  console.log(`Username: ${user.username}`);
  console.log(`FullName: ${user["firstName"]} ${user["lastName"]}`);
}
