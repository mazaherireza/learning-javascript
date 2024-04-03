const availableBooks = [
  {
    id: "BK_1001_0",
    title: "1984",
    author: "George Orwell",
    price: 13,
  },
  {
    id: "BK_1001_1",
    title: "Animal Farm",
    author: "George Orwell",
    price: 10,
  },
  {
    id: "BK_1001_2",
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    price: 25,
  },
];

const prependWithCurrency = (symbol = "€") => {
  return availableBooks.map((book) => `${symbol}${book.price}`);
};

const pricesWithCurrency = prependWithCurrency("$");

const authorNovels = (authorName = "Gabriel García Márquez") => {
  return availableBooks.filter((book) => book.author == authorName);
};
const GeorgeOrwellsNovels = authorNovels("George Orwell");
