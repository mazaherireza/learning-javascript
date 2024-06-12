const getBook = () => ({
  title: "1984",
  author: "George Orwell",
  cost: "12",
  pages: 245,
  language: "English",
});

const prependCurrency = (cost, symbol = "€") => `${symbol}${cost}`;

const display = () => {
  const { title, author, cost } = getBook();
  console.log(
    `${title} witten by ${author}, ${prependCurrency(`${cost}`, "$")}`
  );
};

display();
