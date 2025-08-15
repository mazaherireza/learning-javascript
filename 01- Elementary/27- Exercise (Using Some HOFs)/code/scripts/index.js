const cart = [
  {
    id: "CRT_1001_0",
    name: "Sunscreen",
    price: 13,
  },
  {
    id: "CRT_1001_1",
    name: "Book",
    price: 10,
  },
  {
    id: "CRT_1001_2",
    name: "Mineral Water",
    price: 2,
  },
  {
    id: "CRT_1001_3",
    name: "Wardrobe",
    price: 102,
  },
];

const POSTAGE_FEE = 12;

let postage = 0;

const POSTAGE_THRESHOLD = 10;

const isSubjectedToPostage = cart.filter(
  (product) => product.price >= POSTAGE_THRESHOLD
);

console.log(
  "Products that are subjected to postage:",
  isSubjectedToPostage.map((product) => product.name)
);

isSubjectedToPostage.forEach((product) => {
  postage += product.price * (POSTAGE_FEE / 100);
});

console.log("Postage is: ", postage);
