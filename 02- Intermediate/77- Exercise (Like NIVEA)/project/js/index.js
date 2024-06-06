const products = [
  {
    id: "PRT_1001",
    title: "NIVEA Creme",
    img: "NIVEA_Creme.webp",
    description:
      "NIVEA® Creme is a rich, intensively moisturizing formula perfect for all skin types that you can use all over for moisturized and protected skin, in our original tin.",
    price: 15,
    category: "Body Care",
    ratingCount: 25,
  },
  {
    id: "PRT_1002",
    title: "NIVEA Soft",
    img: "NIVEA_Soft.webp",
    description:
      "NIVEA® Soft is a lightweight, non-greasy cream infused with Jojoba Oil and Vitamin E to deliver soft, supple skin in a travel size for moisturizing on the go.",
    price: 14,
    category: "Body Care",
    ratingCount: 88,
  },
];

const $ = document;
const productList = $.querySelector(".product-list");

const BASE_PATH = "./assets/images/";
const STAR_COUNT = 5;

const renderProducts = () => {
  const fragment = $.createDocumentFragment();
  products.forEach((product) => {
    const container = $.createElement("div");
    container.className = "product-card";
    container.addEventListener("click", (_) => {
      splittedHref = location.href.split("/");
      splittedHref.splice(splittedHref.length - 1, 1);
      const newHref = `${splittedHref.join("/")}/product.html?productId=${
        product.id
      }`;
      location.href = newHref;
    });

    const img = $.createElement("img");
    img.setAttribute("src", `${BASE_PATH}${product.img}`);
    img.className = "img";

    const ratingSection = $.createElement("div");
    let icon = "";
    for (let index = 0; index < STAR_COUNT; index++) {
      icon = $.createElement("i");
      icon.className = "fa fa-star";
      ratingSection.append(icon);
    }

    const ratingCount = $.createElement("span");
    ratingCount.innerHTML = `(${product.ratingCount})`;
    ratingCount.className = "rating-count";

    const ratingContainer = $.createElement("div");
    ratingContainer.className = "rating-container";

    ratingContainer.append(ratingSection, ratingCount);

    const subline = $.createElement("span");
    subline.innerHTML = `${product.category}`;
    subline.className = "subline";

    const headline = $.createElement("span");
    headline.innerHTML = product.title;
    headline.className = "headline";

    const buyButton = $.createElement("i");
    buyButton.className = "fa fa-shopping-bag fa-2x buyButton";

    container.append(img, ratingContainer, buyButton, subline, headline);
    fragment.append(container);
  });
  productList.append(fragment);
};

window.addEventListener("load", () => {
  renderProducts();
});
