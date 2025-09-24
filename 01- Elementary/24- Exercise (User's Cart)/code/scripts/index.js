const availableBooks = [
  {
    id: "BAR_1001_0",
    title: "1984",
    author: "George Orwell",
    price: 13,
  },
  {
    id: "BAR_1001_1",
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    price: 25,
  },
];

const selectedBook = prompt(
  "Enter Book's Title That You Want To Buy:",
  "Book's Title"
);

let temp = {};

const found = availableBooks.some((book) => {
  if (book.title === selectedBook) {
    const { id, ...other } = book;
    temp = { ...other };
    return true;
  }
});

const cart = [];

const calculateSum = () => {
  let sum = 0;

  cart.forEach((item) => {
    sum += item.price;
  });

  return sum;
};

const ID = "CRD_1001_";

if (found) {
  const index = cart.length;
  
  cart.push({
    id: `${ID}${index}`,
    ...temp,
  });

  console.log("Your Cart Is: ", cart);
  console.log("Total Price Is:", calculateSum());
} else {
  console.log("Not Found.");
}
