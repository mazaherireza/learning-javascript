const display = (text) => {
  console.log(text);
};

display("One");
display("Two");
setTimeout(() => {
  display("Delayed Three!");
}, 5_000);

display("Four");
