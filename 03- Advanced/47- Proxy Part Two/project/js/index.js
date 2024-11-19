/*
  Default value with "get" trap
  -----------------------------
  The most common traps are for reading/writing properties.

  To intercept reading, the handler should have a method get(target, property, receiver).
  It triggers when a property is read, with following arguments:
  target: is the target object, the one passed as the first argument to new Proxy
  property: property name
  receiver: if the target property is a getter, 
  then receiver is the object that's going to be used as "this" in its call.
  Usually that's the proxy object itself.

  Let's use "get" to implement default values for an object. <---------- **
 */

// ... we'll wrap a regular array into the proxy that traps reading and returns 0 if there's no such property.
let numbers = [1_001, 1_002, 1_003];
numbers = new Proxy(numbers, {
  get(target, property) {
    return property in target ? target[property] : 0; // returns 0 for nonexistent values.
    // 0: default value
  },
});
console.log(numbers[8]);
console.log(numbers[0]);

// We can use Proxy to implement any logic for "default" values. <-------------- **

// ... we’ll wrap dictionary in a proxy that intercepts reading operations:
let dictionary = {
  Hello: "Hola",
  Bye: "Adiós",
  Friend: "Amiga/Amigo",
};

dictionary = new Proxy(dictionary, {
  get(target, phrase) {
    phrase = phrase.charAt(0).toUpperCase() + phrase.slice(1);
    return phrase in target ? target[phrase] : phrase;
  },
});

console.log(dictionary["Welcome"]);
console.log(dictionary["friend"]);

/*
  The proxy should totally replace the target object everywhere. <---------- **
  No one should ever reference the target object after it got proxied.
*/
