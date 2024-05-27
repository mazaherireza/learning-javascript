console.time("Test");
console.log(
  "%cLearning JavaScript",
  "color: yellow; background-color: black; padding: 0.5rem; border-radius: 0.5rem;"
);

const book = {
  title: "1984",
  author: "George Orwell",
};

const books = [
  {
    title: "1984",
    author: "George Orwell",
  },
  {
    title: "Kafka on the Shore",
    author: "Huraki Murakami",
  },
];

console.table(book);
console.table(books);

console.error("Error!");
console.info("Information");
console.warn("Warning");

console.assert(false, "Learning JavaScript");

console.group("Grouping");
console.log("First");
console.log("Second");
console.groupEnd("Grouping");

console.timeEnd("Test");
