/* 
  Nullish coalescing operator (??)
  --------------------------------
  ... null or undefined ... <-------------------- ***

  Relationship with the optional chaining operator (?.)
  ... which is useful to access a property of an object which may be null or undefined.

  Combining them, you can safely access a property of an object which may be nullish and 
  provide a default value if it is. <------------ **
*/

let counter = NaN;
const index = counter ?? 1;
console.log(index); // NaN

const user = {
  username: "rezamazaheri",
  firstName: "Reza",
  lastName: "Mazaheri",
};

console.log(user?.family ?? "Not Available");

// It is not possible to combine both && and || directly with ??. ... providing ()
