/*
  "Hidden" Properties
  -------------------
  Symbols allow us to create "hidden" properties of an object, <----------- *
  that no other part of code can accidentally access or overwrite.
  
  ..., if we're working with user objects, that belong to a third-party code.
  We'd like to add identifiers to them.

  ... use a symbol key for it:
*/

// Belongs to another code.
const user = {
  firstName: "Reza",
  lastName: "Mazaheri",
};

const id = Symbol("id");
console.log(id); // Symbol(id)
user[id] = "USR_1001AEH";
user.age = 35;
// user.id = "USR_1001AEH"; <----------------- *********** Wrong *************
console.log(user); // { ..., age: 35, Symbol(id): "USR_1001AEH" }
console.log(user.id); // undefined <----------------- ************ Wrong **************
console.log(user[id]); // USR_1001AEH, We can access the data using the symbol as the key.

/*
  What's the benefit of using Symbol("id") over a string "id"? <----------------- ***

  As user objects belong to another codebase, it's unsafe to add fields to them,
  since we might affect pre-defined behavior in that other codebase.
  However, symbols cannot be accessed accidentally. <----------------- ***
  
  The third-party code won't be aware of newly defined symbols, <----------- ***
  so it's safe to add symbols to the user objects.

  Also, imagine that another script wants to have its own identifier inside user, for its own purposes.
  .... can create its own Symbol("id"), like this:
  
  let id = Symbol("id")
  user[id] = "Their id value"
*/

/*
  There will be no conflict between our and their identifiers, 
  because symbols are ALWAYS different, even if they have the same name.

  But if we used a string "id" instead of a symbol for the same purpose, then there would be a conflict.
*/

/* 
  Symbols in an object literal
  ---------------------------- 
  If we want to use a symbol in an object literal { ... }, we need [] around it. <----------- ***
*/

const identifier = Symbol("identifier");
let friend = {
  name: "Yousef",
  [identifier]: "FRD_1001AMI", // NOT identtifier: "FRD_1001AMI"
};

/*
  That's because we need the VALUE from the VARIABLE "identifier" as the key, 
  NOT the string "identifier". <---------------- ***
*/
console.log(friend); // {name: 'Yousef', Symbol(identifier): 'FRD_1001AMI'}

/* 
  Symbols are skipped by for...in
  -------------------------------
  Symbolic properties do NOT participate in for...in loop: <------------- *
*/

for (let key in friend) console.log(key);

// the direct access by the symbol works <------------ **
console.log(`Direct: ${friend[identifier]}`);

/*
  Object.keys() also ignores them. <------------- **

  That's a part of the general "hiding symbolic properties" principle. <---------------- *
  If another script or library loops over our object, it won't unexpectedly access a symbolic property.
*/

// Object.assign copies both string and symbol properties: <-------- ***

const clone = Object.assign({}, user);
console.log(clone[id]);

/*
  Global Symbols
  --------------
  ..., usually all symbols are different, even if they have the same name. 
  But sometimes we want same-named symbols to be same entities. <-------------- **
  For instance, different parts of our application want to access symbol "id" meaning exactly the same property.

  To achieve that, there exists a global symbol registry. 
  We can create symbols in it and access them later, 
  and it guarantees that repeated accesses by the same name return exactly the same symbol.

  In order to read (create if absent) a symbol from the registry, use symbol.for(key). <--------------- **
  That call checks the global registry, and if there's a symbol described as key, then returns it,
  O.W creates a new symbol Symbol(key) and stores it in the registry by the given key. <------ ***
*/

const key = Symbol.for("NC"); // <------------ get symbol by name (from global registry)
const anotherKey = Symbol.for("NC");
console.log(key == anotherKey); // true

/*
  Symbols inside the registry are called global symbols. 
  If we want an application-wide symbol, accessible everywhere in the code that's what they are for.
*/

/*
  Symbol.keyFor
  -------------
  ... for global symbols, Symbol.for(key) returns a symbol by name. 
  To do the opposite, return a name by global symbol - we can use Symbol.keyFor(sym)
*/

console.log(Symbol.keyFor(key)); // NC
console.log(Symbol.keyFor(anotherKey)); // NC

/*
  The Symbol.keyFor internally uses the global symbol registry to look up the key for the symbol. 
  So it doesn’t work for non-global symbols. <--------------- ***
  If the symbol is not global, it won’t be able to find it and returns undefined.
*/

const globalSymbol = Symbol.for("label");
const localSymbol = Symbol("label");
console.log(Symbol.keyFor(globalSymbol)); // label
console.log(Symbol.keyFor(localSymbol)); // undefined, Not global
