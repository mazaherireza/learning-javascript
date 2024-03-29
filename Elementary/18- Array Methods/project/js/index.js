const fruits = ["Apple", "Cucumber", "Banana", "Kiwi"];

console.log(fruits.at(-1)); // <---------- **** Kiwi Same as fruits[fruits.length - 1] (a bit cumbersome)

console.log(`The first element is: ${fruits.at(0)}`); // Apple
// * Note: Arrays in JavaScript can work both as a queue and as a stack. (... deque)

// Methods that work with the beginning of the array:
// shift <----------------- Extracts the first element of the array and returns it
// unshift <---------------- Add the element(s) to the beginning of the array

// An array is a special kind of object.
// ... it is copied by reference
// ... but what makes arrays really special is their internal representation.

// To be precise, it is actually not the count of values in the array, but the greatest numeric index plus one.

// So, the simplest way to clear the array is: arr.length = 0;.

// Arrays have their own implementation of toString method that returns a comma-separated list of elements.

// ... they implement only toString conversion.

// Don’t compare arrays with ==

// Arrays in JavaScript, unlike some other programming languages, shouldn’t be compared with operator ==.
// This operator has no special treatment for arrays, it works with them as with any objects.

// The strict comparison === is even simpler, as it doesn’t convert types.

// So, how to compare arrays?
// That’s simple: don’t use the == operator.
// Instead, compare them item - by - item in a loop or using iteration methods

// That’s because arrays are objects. So both shoppingCart and fruits are the references to the same array.

/* let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2]();  a,b,function(){...}
*/

/*
The call arr[2]() is syntactically the good old obj[method](), in the role of obj we have arr, and in the role of method we have 2.
So we have a call of the function arr[2] as an object method. Naturally, it receives this referencing the object arr and outputs the array:
*/

// Should we cancel?
// if (value === "" || value === null || !isFinite(value)) break;
/*
  for(let number of numbers)
    sum += number
*/

// A maximal subarray //<---------------------------- *
// https://javascript.info/array
