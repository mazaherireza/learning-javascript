/*
  JS Function apply()
  -------------------
  Method Reuse <------------------- **
  With the apply() method, you can write A method that can be used on DIFFERENT objects. 

  The call() method takes arguments separately. 
  The apply() method takes arguments as an array. <------------------- **

  Simulate a Max Method on Arrays
  ...
  Since JS arrays do not have a max() method, you can apply the Math.max() method instead.
*/

console.log(Math.max.apply(Math, [1001, 1000, 1003]));
