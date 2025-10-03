/*
  JavaScript Maps 
  ---------------
  A Map holds key-value pairs where the keys can be ANY datatype. <------------- **
  ... create a Map by passing an Array to the new Map() constructor.
*/

const books = new Map([
  // <-------- ORDERED collection of key/value pairs.
  ["Animal Farm", 4.4],
  ["One Hundred Years of Solitude", 4.9],
  ["1984", 5],
]);

books.set("خانه‌ی ادریسی‌ها", 5);
books.set("1984", 4.8);
console.log(books);
console.log(books[0]); // undefined <------------ X
console.log(books.get("Animal Farm"));
console.log(books instanceof Map); // true

/*
  JS Objects vs Maps
  ------------------
  Object
  Keys must be Strings (or Symbols) <--------------- ***

  Map
  Keys can be ANY datatype
  Have a size property <--------------- *
  Keys are ordered by insertion <------------ **
*/

// entries() returns an iterator object, with the [key, value] pairs in a Map.
console.log(books.entries()); // MapIterator
console.log(books.keys()); // MapIterator
console.log(books.values()); // MapIterator

books.forEach((value, key) => console.log(`${key}: ${value}`));

// Being able to use objects as keys, is an important Map feature. <---------- **
const user = {
  firstName: "Reza",
  lastName: "Mazaheri",
  email: "rezamazaheri.email@gmail.com",
};

const MappedUser = new Map(Object.entries(user)); // <--------------------- *
console.log(MappedUser);

// The fromEntries() method, creates an object from a list of key/value pairs.
console.log(Object.fromEntries(MappedUser)); // <--------------------- ***
