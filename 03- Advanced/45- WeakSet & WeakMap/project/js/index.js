/*
  WeakMap and WeakSet
  -------------------
  ... Garbage collection, JS engine keeps a value in memory while it is "reachable" and can potentially be used.
  For instance:

  let john = { name: "John" }; // The object can be accessed, john is the reference to it.
  john = null; // overwrite the reference
  the object will be removed from memory. <------------------------- ***

  Usually, properties of an object or elements of an array or another DS
  are considered reachable and kept in memory while that DS is in memory. <---------- **
  For instance, if we put an object into an array, then WHILE the array is ALIVE, the object will be alive as well,
  even if there are NO other references to it. <---------------- ***
  Like this:

  let john = { name: "John" };
  let array = [ john ];
  john = null; <------------ Overwrite the reference.

  The object previously referenced by john, is stored inside the array, therefore it WON'T be garbage-collected.
  we can get it as array[0].

  Similar to that, if we use an object as the key in a regular Map, then WHILE the Map EXISTS, that object exists as well. 
  It occupies memory and may NOT be garbage collected. <----------- **
  For instance:

  let john = { name: "John" };
  let map = new Map();
  map.set(john, "...");

  john = null; // Overwrite the reference
  john IS stored inside the map, we can GET it by using map.keys() <--------- **

  WeakMap is fundamentally different in this aspect. 
  It DOESN'T PREVENT garbage-collection of key objects. <-------------- **

  WeakMap
  -------
  The first difference between Map and WeakMap is that keys MUST be objects, NOT primitive values:

  let weakMap = new WeakMap();
  let obj = {};
  weakMap.set(obj, "OK"); 

  Now, if we use an object as the KEY in it, and there are no other references to that object,
  it will be removed from memory (and from the map) automatically. <--------------------- ***
  
  let john = { name: "John" };
  let weakMap = new WeakMap();
  weakMap.set(john, "...");
  john = null; // Overwrite the reference
  john is removed from memory! <------------------------ **

  WeakMap does NOT support iteration and methods keys(), values(), entries(), <----------- ***
  so there's NO way to get ALL keys or values from it.
  
  WeakMap has ONLY the following methods:
  WeakMap.set(key, value)
  WeakMap.get(key)
  WeakMap.delete(key)
  WeakMap.has(key)

  Why such a limitation?
  ... WHEN the cleanup happens. The JS engine decides that.
  ... methods that access all keys/values are NOT supported.

  Where do we need such a data structure? <------------- ***
  Use case: additional data 
  The MAIN area of application for WeakMap is an additional data storage. <------------- ***

  If we're working with an object that "belongs" to another code, ... third-party library, 
  and would like to store some data associated with it, that should only exist while the object is alive...
  ...
  ... and when the object is garbage collected, that data will automatically disappear as well.
*/

let temp = { title: "Temp" };
let weakMap = new WeakMap();
weakMap.set(temp, "Secret Documents");
// If temp dies, Secret Documents will be destroyed automatically. <------------- ***

/*
  ... we have code that keeps a visit count for users.
  ...
  When a user leaves (its object gets garbage collected), we don't want to store their visit count anymore.
*/

/* 
  ... counting function with Map

  let visitsCountMap = new Map();
  function countUser(user) {
    let count = visitsCountMap.get(user) || 0; // Boolean(undefined) ------> false
    visitsCountMap.set(user, count + 1);
  }
*/

// ... another part of the code, maybe another file using it:

let vardan = { name: "Vardan" };
countUser(vardan);
// later vardan leaves us
vardan = null;

/* 
  Now, vardan object should be garbage collected, but REMAINS in memory, 
  as it's a key in visitsCountMap. <------------- ***
*/

let visitsCountMap = new WeakMap();
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

/*
  Now we don't have to clean visitsCountMap.
  After vardan object becomes unreachable, ... it gets removed from memory,
  along with the information by that key from WeakMap.
*/

/* 
  Use case: caching

  We can store (cache) results from a function, so that future calls on the same object can reuse it.
  ...
  For multiple calls of process(obj) with the same object, 
  it only calculates the result the first time, and then just takes it form cache.
*/

let cache = new WeakMap();
function process(obj) {
  if (!cache.has(obj)) {
    let result = "Something";
    cache.set(obj, result);
    return result;
  }
  return cache.get(obj);
}

let obj = {};
let result = process(obj);
obj = null;

/*
  Can't get cache.size, as it's a WeakMap, but it's 0 or soon be 0,
  When obj gets garbage collected, cached data will be removed as well.
*/

/*
  WeakSet
  -------
  It is analogous to Set, but we may ONLY add OBJECTS to WeakSet (not primitives).
  An object exists in the set while it is reachable from somewhere else.
  Like Set, it supports add, has and delete, but NOT size, keys() and no iterations.
  ...
  For instance, we can add users to WeakSet to keep track of those who visited our site:
*/

let visitedSet = new WeakSet();
let hayk = { name: "Hayk" };
let diran = { name: "Diran" };

visitedSet.add(hayk);
visitedSet.add(diran);

hayk = null; // visitedSet will be cleaned automatically.

/* 
  The most notable limitation of WeakMap and WeakSet is the absence if iterations, <--------- ***
  and the inability to get all current content.
  ... their MAIN job - be an "additional" storage of data for objects which are stored/managed at another place.
*/
