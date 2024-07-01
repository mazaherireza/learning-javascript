import { books } from "./books.js";

// Promisification
const addBook = (title, author) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      books.push({
        title,
        author,
      });
      if (false) resolve();
      else reject("Failed!");
    }, 5_000);
  });
};
const displayBooks = () => {
  console.table(books);
};

addBook("Love in the Time of Cholera", "Gabriel García Márquez")
  .then(displayBooks)
  .catch((message) => console.error(message));
