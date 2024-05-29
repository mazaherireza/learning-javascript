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
const container = $.querySelector("main .container");
const BASE_PATH = "./assets/images/";

const renderProduct = (product) => {
  const html = `
  <div class="product-detail-container">
    <div class="rating-container">
      <div class="rating">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
      </div>
      <div class="rating-count">(${product.ratingCount})</div>
    </div>
    <div class="headline">${product.title}</div>

    <div class="product-detail">
      <div class="col">
        <img class="product-image" src="${BASE_PATH}${product.img}" alt="${product.title}" />
      </div>
      <div class="col">
        <div class="description">${product.description}</div>
        <div class="buy-now-container">
          <h3 class="buy-now-headline">Shop Now</h3>

          <div class="store-container">
            <div class="online-stores">
              <img class="shop-image" src="${BASE_PATH}amazon.png" alt="Amazon" />
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 `;
  container.insertAdjacentHTML("beforeend", html);
};

window.addEventListener("load", () => {
  const parameter = new URLSearchParams(location.search);
  const id = parameter.get("productId");
  // console.log(typeof id) <------------- string
  const product = products.find((product) => product.id == id);
  if (product) {
    renderProduct(product);
  } else {
    splittedHref = location.href.split("/");
    splittedHref.splice(splittedHref.length - 1, 1);
    const newHref = `${splittedHref.join("/")}/404.html`;
    location.href = newHref;
  }
});
