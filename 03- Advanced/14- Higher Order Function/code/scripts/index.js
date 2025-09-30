const me = {
  firstName: "Reza",
  lastName: "Mazaheri",
  occupation: "Frontend Developer",
  age: 36,
  favourites: [
    "Learning European languages",
    "Books",
    "Body building",
    "Photography",
    "Carpets",
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
