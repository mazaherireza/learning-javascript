const users = [
  {
    _id: 'AERY_1001',
    username: 'rezamazaheri',
    firstName: "Reza",
    lastName: "Mazaheri",
    age: 35
  },
]

for (const user of users) {
  console.log(`Username: ${user.username}`)
  console.log(`FullName: ${user["firstName"]} ${user["lastName"]}`);
}
