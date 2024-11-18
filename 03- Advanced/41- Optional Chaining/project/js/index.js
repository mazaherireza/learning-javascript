/*
  Optional chaining (?.)
  ----------------------
  The optional chaining (?.) operator accesses an object's property or calls a function.
  If the object accessed or function called using this operator is undefined or null,
  ... evaluates to undefined instead of throwing an error. <----------- **

  JS
  obj.val?.prop
  obj.val?.[expr]
  obj.func?.(args)
*/

const user = {
  username: "rezamazaheri",
  firstName: "Reza",
  lastName: "Mazaheri",
};

console.log(user.courses); // undefiend
console.log(user.courses[0]); // Uncaught TypeError: Cannot read properties of undefined (reading '0')
console.log(user.courses?.[0]); // undefined
console.log(user.courses?.[0].title); // undefined

console.log(undefined?.name); // undefined
