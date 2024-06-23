/*
  Symbol Type
  -----------
  By specification, only 2 primitive types may serve as object property keys: string type, or symbol type.
  ... it's autoconverted to string. <----------- ***
  So that obj[1] is the same as obj["1"], and obj[true] is the same as obj["true"].

  ... let's explore symbols, ...
  A symbol represents a UNIQUE identifier. 
  A value of this type can be created using Symbol(). 
*/

const id = Symbol();
console.log(id); // Symbol()

/*
  Upon creation, we can give symbols a description (symbol name), 
  mostly useful for debugging purposes.

  Symbols are guaranteed to be unique. <--------------- **
  Even if we create many symbols with exactly the same description, they are different values <------------- *
  The description is just a label that doesn’t affect anything.
*/

const pCode1 = Symbol("Personnel Code");
const pCode2 = Symbol("Personnel Code");
console.log(pCode1 == pCode2); // false

// ..., a symbol is a "primitive unique value" with an optional description.

console.warn("Symbols don't auto-convert to a string");

/*
  Most values in JS support implicit conversion to a string.
  Symbols are special. They don't auto-convert. <-------------- **

  That's a "language guard" against messing up,
  because strings and symbols are fundamentally different and should not accidentally convert one into another.
*/

// If we really want to show a symbol, we need to explicitly call .toString() on it, like here:
console.log(id);
console.log(typeof id); // symbol
console.log(id.toString());
console.log(pCode1.toString()); // Symbol(Personnel Code)

// Or get symbol.description property to show the description only:
console.log(pCode1.description); // Personnel Code
