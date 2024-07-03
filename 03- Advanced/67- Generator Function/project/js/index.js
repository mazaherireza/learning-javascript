/*
  function*
  ---------
  ...
  A generator function can be exited and later re-entered with its context saved across re-entrances.

  ... do NOT have arrow function counterparts.

  A function* declaration creates a GeneratorFunction object.
  ... a done property which indicates whether the generator had yielded its last value, as a boolean.
*/

function* generator(start) {
  yield start;
  yield start * 2;
  yield start * 3;
  return start * 4;
  yield "Unreachable";
}

const generation = generator(8);
for (let result of generation) console.log(result);
