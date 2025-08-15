const NAME = "Reza";

setTimeout(
  (name) => {
    console.log(`Welcome ${name}`);
  },
  5_000,
  NAME // Parameter to pass to the function.
);
