const PREFIX = "BK";

const books = [
  {
    id: "BK_0",
    title: "A Man Called Ove",
    author: "Fredrik Backman",
  },
  {
    id: "BK_1",
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
  },
];

const addBook = ({ title, author }, callback) => {
  const len = books.length;
  setTimeout(() => {
    books.push({
      id: `${PREFIX}_${len}`,
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
