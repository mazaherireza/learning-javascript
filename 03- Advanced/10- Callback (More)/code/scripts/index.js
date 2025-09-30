const books = [
  {
    id: globalThis.crypto.randomUUID(),
    title: "A Man Called Ove",
    author: "Fredrik Backman",
  },
  {
    id: globalThis.crypto.randomUUID(),
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
  },
];

const addBook = ({ title, author }, callback) => {
  setTimeout(() => {
    books.push({
      id: globalThis.crypto.randomUUID(),
      title,
      author,
    });
    callback();
  }, 5_000);
};

const display = () => {
  console.table(books);
};

addBook({ title: "1984", author: "George Orwell" }, display);
