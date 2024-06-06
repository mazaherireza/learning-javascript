const cart = [
  {
    id: "BAR_1001_0",
    name: "Sunscreen",
    price: 13,
  },
  {
    id: "YAR_1001_1",
    name: "Book",
    price: 10,
  },
  {
    id: "BAR_1001_2",
    name: "Mineral Water",
    price: 2,
  },
  {
    id: "RPR_1001_2",
    name: "Wardrobe",
    price: 502,
  },
];

const POSTAGE_FEE = 12;

let postage = 0;
const POSTAGE_THRESHOLD = 10;
const isSubjectedToPostage = cart.filter(
  (product) => product.price > POSTAGE_THRESHOLD
);
console.log(
  "Products that are subjected to postage are:",
  isSubjectedToPostage.map((product) => product.name)
);

isSubjectedToPostage.forEach((product) => {
  postage += product.price * (POSTAGE_FEE / 100);
});

console.log("Postage is: ", postage);
