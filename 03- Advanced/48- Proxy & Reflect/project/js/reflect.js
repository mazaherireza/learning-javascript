/*
  Reflect
  -------
  Reflect is a built-in object that simplifies creatin of Proxy.
  
  ... internal methods such as [[Get]], [[Set]] and others are specification-only, they can't be called directly.
  The Reflect object makes that somewhat possible.
  Its methods are minimal wrappers around the internal methods. <---------- **

  Operation                     Reflect call                Internal method
  -----------------------------------------------------------------------------
  obj[prop]                  Reflect.get(obj, prop)             [[Get]]
  obj[prop] = value          Reflect.set(obj, prop, value)      [[Set]]
  ...
*/

const user = {};
Reflect.set(user, "firstName", "Reza");
console.log(user.firstName);

/*
  Reflect allows us to call operators (new, delete ...) as functions (Reflect.construct, Reflect.deleteProperty, ...)

  For every internal method, trappable by Proxy, there's a corresponding method in Reflect, 
  with the same name and arguments as the Proxy trap. 
  So we can use Reflect to forward an operation to the original object. <-------- **
*/

// ... both traps get and set transparently forward reading/writting operations to the object.
const movie = {
  title: "Green Book",
};

movie = new Proxy(movie, {
  get(target, prop, receiver) {
    console.log(`GET ${prop}`);
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    console.log(`SET ${prop} = ${value}`);
    return Reflect.set(target, prop, value, receiver);
  },
});

const favourite = movie.title;
movie.title = "Her";

/*
  Here:
  Reflect.get reads an object property.
  Reflect.set writes an object property and returns true if successful, false otherwise.
  
  ...  if a trap wants to forward the call to the object, 
  it’s enough to call Reflect.<method> with the same arguments.
*/
