const user = {
  firstName: "Reza",
  lastName: "Mazaheri",
  position: "Frontend Developer",
  nationality: "Iran",
};

console.log("Before Delete");
console.log(user);

console.log("After Delete");
delete user.nationality;
console.log(user);

const books = ["1984", "Animal Farm"];
delete books[1];

console.log(books);
console.log(typeof books[1]); // undefined
