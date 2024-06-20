/*
  Object.entries()
  ----------------
  JS Object.entries() static method returns an array of the key/value pairs of an object.
  ... does NOT change the original object. <------------- **
*/

const employee = {
  firstName: "Reza",
  lastName: "Mazaheri",
  occupation: "Frontend Developer",
};

for (let key in employee) console.log(employee[key]);

console.table(employee);

console.log(Object.entries(employee)); // ["firstName", "Reza"], ...

console.log(
  Object.entries({
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "TypeScript",
    e: "VueJS",
    f: "ReactJS",
  })
);

// ["a", "HTML"], ...

/* 
  The first element is the property key (which is ALWAYS a string), and the second element is the property value.
*/

const scores = {
  Reading: 7.5,
  Writing: 6.5,
  Speaking: 7.1,
  Listening: 7.5,
};

for (let [topic, score] of Object.entries(scores))
  console.log(`${topic}: ${score}`);
