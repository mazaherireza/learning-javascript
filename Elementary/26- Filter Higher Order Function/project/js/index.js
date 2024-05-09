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

const prependWithCurrency = (arr, symbol = "€") => {
  return arr.map((book) => {
    const { price, ...other } = book;
    return {
      ...other,
      price: `${symbol}${price}`,
    };
  });
};

// Authors' Novels
const authorsNovels = (authorName = "Gabriel García Márquez") => {
  return availableBooks.filter((book) => book.author == authorName);
};
console.log(prependWithCurrency(authorsNovels("George Orwell"), "$"));
