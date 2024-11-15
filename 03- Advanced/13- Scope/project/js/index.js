let x = "Global Scope";
console.log(`In global scope x is: ${x}`);

const f = () => {
  let x = "Local Scope"
  console.log(`In f function x is: ${x}`);
};

f();
