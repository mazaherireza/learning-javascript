import { books } from "./books.js";

// Promisification
const addBook = (title, author) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (
        books.push({
          title,
          author,
        })
      )
        resolve("Resolved");
    }, 5_000);
  });
};

const displayBooks = () => {
  console.table(books);
};

addBook("Love in the Time of Cholera", "Gabriel García Márquez").then(
  displayBooks
);
