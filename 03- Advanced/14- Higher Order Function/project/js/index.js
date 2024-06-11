const me = {
  firstName: "Reza",
  lastName: "Mazaheri",
  job: "Frontend Developer",
  age: 35,
  favourites: [
    "Learning European languages",
    "Books",
    "Body building",
    "Photography",
    "Carpet",
    "❤",
  ],
};

const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

const introduction = () => {
  // <----------- HOF (Higher Order Function)
  const salutation = () => {
    const { firstName, lastName } = me;
    console.log(`Salut!, I'm ${fullName(firstName, lastName)}.`);
  };
  return salutation;
};

introduction()();
