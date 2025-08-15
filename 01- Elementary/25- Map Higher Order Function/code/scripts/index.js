const availableBooks = [
  {
    id: "BK_1001_0",
    title: "1984",
    author: "George Orwell",
    price: 13,
  },
  {
    id: "BK_1001_1",
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    price: 25,
  },
];

console.log(
  availableBooks.map((book) => ({
    ...book,
    price: `€${book.price}`,
  }))
);
