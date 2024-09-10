const renderProduct = (product) => {
  const productNode = `
    <div class="product-card">
      <img class="img" src="${BASE_PATH}${product.img}">
      <div class="product-title">${product.title}</div>
      <div>
        <span class="product-price">${product.price}</span>
        <span class="max">Max: ${product.max}</span>
        <button class="btn">
          Add To Cart
        </button>
      </div>
    </div>`;

  const btn = productNode.querySelector("button");
  // TypeError: productNode.querySelector is not a function
  if (!product.max) btn.setAttribute("disabled", "true");

  btn.addEventListener("click", () => {
    addToCart(btn, product);
  });

  productList.insertAdjacentHTML("beforeend", productNode);
};
