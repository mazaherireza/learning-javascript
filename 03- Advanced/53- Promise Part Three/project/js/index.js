import { books } from "./books.js";

// Promisification
const addBook = (title, author) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(); // <--------- Promise handlers are ALWAYS asynchronous.
      console.log("After resolve.");
      books.push({
        title,
        author,
      });
      reject("Fail!");
    }, 5_000);
  });
};

const displayBooks = () => {
  console.table(books);
};

addBook("Love in the Time of Cholera", "Gabriel García Márquez")
  .then(displayBooks)
  .catch((message) => console.error(message));
