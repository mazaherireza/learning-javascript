import { products } from "./constants.js";

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
      const splittedHref = location.href.split("/");
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
