const programmingLanguage = "JavaScript";
const version = 12;

console.log(`${programmingLanguage} ${version}`);

console.log(isNaN(programmingLanguage + version)); // true
console.log(isNaN(13 / 4)); // false
console.log(isNaN(NaN)); // true
console.log(isNaN("")); // false <---- Converts the value to a number before testing it. Number("") becomes 0
