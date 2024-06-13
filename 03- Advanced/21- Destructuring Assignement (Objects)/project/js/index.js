const users = [
  {
    id: "FR_1001",
    username: "yo3ef_am",
    firstName: "Yousef",
    occupation: "Backend Developer",
    degree: "Bachelor's Degree",
  },
  {
    id: "FR_1002",
    username: "reza.mazaher",
    firstName: "Reza",
    occupation: "Frontend Developer",
    degree: "Bachelor's Degree",
  },
];

const { firstName = "Anonymous", id: userID } = users.find(
  (user) => user.id === "FR_1001"
);
console.log(firstName);

// const { keyCode, target: input } = event
