let counter = 0;

const firstChar = (text) => {
  counter++; // <--------------------- X firstChar is not a pure function
  // doSomething
  return text.split("")[0].toUpperCase();
};

console.log(firstChar("Reza Mazaheri"));
