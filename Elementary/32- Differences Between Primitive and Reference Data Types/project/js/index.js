let x = 1001;
let copy = x;
x = 1000;

console.log("x is: ", x);
console.log("copy is: ", copy); // copy is 1001 (Primitive data type)

if (true) {
  let programmingLanguages = ["Java", "PHP", "Python"];
  let copy = programmingLanguages;
  programmingLanguages.push("Go");
  console.log("programmingLanguages are: ", programmingLanguages);
  console.log("copy is: ", copy); // copy is ['Java', 'PHP', 'Python', 'Go'] (Reference type)
}
