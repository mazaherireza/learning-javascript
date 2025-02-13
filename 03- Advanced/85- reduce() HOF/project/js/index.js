import { books } from "./books.js";

const result = books.reduce((prev, current) => {
  if (prev.grade >= current.grade) return prev;
  else return current;
});
console.log(result.grade);

const compare = ({ grade: gradeA }, { grade: gradeB }) => gradeB - gradeA;
const sorted = books.sort(compare);
console.log(sorted);
