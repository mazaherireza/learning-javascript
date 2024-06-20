/*
  JS Sets
  -------
  A JavaScript Set is a collection of UNIQUE values. <--------------- *
  A Set can hold any value of any data type.  
*/

// Passing an array to new Set()
const vowels = new Set(["a", "e", "i", "o", "u"]);
vowels.add(5);
console.log(vowels); // Set(6) {"a", "e", "i", "o", "u', 5}

const size = vowels.size;
console.log(size); // 6

// vowels.delete(6);

// Sets are objects.

// entries() Returns an Iterator with the [value, value] pairs from a Set.
console.log(vowels.entries()); // SetIterator { "a" => "a", ... }

console.log(vowels.keys()); // SetIterator

// values() Returns an Iterator object containing all the values in a Set.
console.log(vowels.values()); // SetIterator {"a", "e", "i", ...}

const iterator = vowels.values();
for (const value of iterator) console.log(value);

vowels.forEach((char) => {
  console.log(char);
});

const vowelsArray = [...vowels];
console.log(vowelsArray);

// vowels.clear()

const prenom = new Set("Reza Mazaheri");
console.log(prenom);

const person = { firstName: "Reza", lastName: "Mazaheri" };
const persons = new Set();
persons.add(person);
console.log(persons.has(person)); // true
console.log(persons.has({ firstName: "Reza", lastName: "Mazaheri" })); // false
