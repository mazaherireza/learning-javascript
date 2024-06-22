/*
  Proxy and Reflect
  -----------------
  A Proxy object wraps another object and intercepts operations,
  like reading/writing properties and others, optionally handling them on its own, 
  or transparently allowing the object to handle them.

  The syntax:
  let proxy = new Proxy(target, handler)
  target: is an obejct to wrap, can be anything, inlcuding functions. <---------------- **
  handler: proxy configuration <-------------- *
  an object with "traps", methods that intercept operations. <------------- **
  e.g. "get" trap for reading a property of "target", "set" trap for writing a property into "target", ...

  For operations on proxy, if there's a corresponding trap in "handler", then it runs,
  and the proxy has a chance to handle it, O.W the operation is performed on "target".
*/

// ... a proxy without any traps:
let target = {};
let proxy = new Proxy(target, {}); // empty handler
proxy.test = "Test";
console.log(target.test); // the property appeared in target!
console.log(proxy.test); // we can read it from proxy too
for (let key in proxy) console.log(key);

/*
  As there are no traps, ALL operations on proxy are forwarded to target.
  1. A writing operation proxy.test =, sets the value on target.
  2. A reading operation proxy.test, returns the value from target.
  3. Iteration over proxy returns values from target.

  Without any traps, proxy is a transparent wrapper around target.
*/

/*
  Proxy is a special "exotic object". 
  It doesn't have own properties. <----------- **
  With an empty handler it transparently forwards operations to target.
  To activate more capabilities, let's add traps. 

  What can we intercept with them? <---------------- ***
  
  For most operations on objects, there's a so-called "internal method" in the JS specification 
  that describes how it works at the lowest level.
  
  ... [[Set]], the internal method to write a property, ... are only used on the specification,
  we can't call them directly by name.
  Proxy traps intercept invocation of these methods. 
*/

/*
  For every internal method, there's a trap in this table:
  the name of the method that we can add to the handler parameter of new Proxy to intercept the operation: <----- **

  Internal Method                 Handler method          Triggers when ...
  ------------------------------------------------------------------------
  [[HasProperty]]                     has                  in operator
  ...
  [[call]]                           apply                 function call
*/

/*
  Invariants 
  ----------
  JS enforces some invariants – conditions that must be fulfilled by internal methods and traps.
  Most of them are for return values: <---------- **
  [[Set]] must return true if the value was written successfully, otherwise false.
  [[Delete]] must return true if the value was deleted successfully, otherwise false.

  ...
  Traps can intercept these operations, but they must follow these rules.
*/
