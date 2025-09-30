const display = (text) => {
  console.log(text);
};

const first = () => {
  display("Start");
  display("One");
};

const middle = (callback) => {
  setTimeout(() => {
    display("Two");
    callback();
  }, 5_000);
};

const last = () => {
  display("Three");
  display("End");
};

first();
middle(last);
