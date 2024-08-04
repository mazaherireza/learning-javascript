const programmingLanguages = [
  "C",
  "C++",
  "JavaScript",
  "PHP",
  "Golang",
  "Python",
];
console.log(_.chunk(programmingLanguages, 2));
console.log(_.dropRight(programmingLanguages, 2));

const nums = [1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010];
console.log(_.filter(nums, (num) => num % 5 == 0));
console.log(_.pull(nums, 1000, 1005, 1009));

const user = {
  id: "USR_100180008",
  firstName: "Reza",
  lastName: "Mazahei",
  email: "rezamazaheri.email@gmail.com",
  occupation: "Frontend Developer",
};
console.log(_.pick(user, ["firstName", "lastName", "email"]));

console.log(_.random(10, 45));

// _.merge, _.debounce, _.flow, ...
