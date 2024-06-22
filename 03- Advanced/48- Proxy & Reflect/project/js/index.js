/*
  Validation with "set" trap
  --------------------------
  Let’s say we want an array exclusively for numbers. 
  If a value of another type is added, there should be an error.

  The set trap triggers when a property is writtern. 

  set(target, property, value, receiver):
  target: is the target object, the one passed as the first argument to new Proxy
  property: property name
  value: property value
  receiver: similar to get trap, matters only for setter properties 

  The set trap should return true if setting is successful, and false O.W (tirggers TypeError).
  Let's use it to validate new values:
*/

let numbers = [];
numbers = new Proxy(numbers, {
  // To intercept property writing.
  set(target, property, value) {
    if (typeof value == "number") {
      target[property] = value;
      return true;
    } else {
      return false;
    }
  },
});

numbers.push(1);
/*
  numbers.push("Two");
  TypeError: 'set' on proxy: trap returned falsish for property '1' at Proxy.push (<anonymous>)
*/

/*
  The built-in functionality of arrays is still working!
  Values are added by push.
  The length property auto-increases when values are added. 
  Our proxy doesn't break anything. <------------ *

  We don't have to override value-adding array methods like push and unshift, to add checks in there,
  ... internally they use the [[Set]] operation that's intercepted by the proxy. <------------- **
  
  Don't forget to return true
  ---------------------------
  ... there are invariants to be held.
  For set, it MUST return true for a successful write.
*/

// [Incomplete]

/*
  Iteration with "ownKeys" and "getOwnPropertyDescriptor"
  -----------------------------------------------------
  Object.keys, for...in loop and most other methods that iterate over object properties use 
  [[OwnPropertyKeys]] internal method (intercepted by ownKeys trap) to get a list of properties.
*/

/*
  Protected properties with "deleteProperty" and other traps
  ----------------------------------------------------------
  There's a widespread convention that properties and mehthods prefixed by underscore _ are internal. 
  They shouldn't be accessed from outside the object.
  
*/

/*
  "In range" with "has" trap
  --------------------------

*/

/*  
  Wrapping functions: "apply"
  --------------------------
  We can wrap a proxy around a function as well.
  
*/
