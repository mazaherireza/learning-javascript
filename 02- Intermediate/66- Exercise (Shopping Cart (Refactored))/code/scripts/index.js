import { products } from "./products.js";

const $ = document;
const productList = $.querySelector(".product-list");
const table = $.querySelector("table");
const tbody = $.querySelector("tbody");
const totalWrapper = $.querySelector(".total-wrapper");
const totalPrice = $.querySelector("#total-price");

const cart = [];

table.style.visibility = "hidden";

const calculateTotal = () => {
  totalPrice.innerHTML = `$${cart.reduce(
    (accumulator, order) => accumulator + order.totalPrice,
    0
  )}`;
};

const deleteOrder = (orderIndex) => {
  const DELETE_COUNT = 1;

  cart.splice(orderIndex, DELETE_COUNT);

  if (!cart.length) {
    table.style.visibility = "hidden";

    totalWrapper.style.visibility = "hidden";
  } else {
    renderCart();
    calculateTotal();
  }
};

const getProductNodeById = (productId) => {
  for (let child of productList.children) {
    if (
      child.querySelector("button").getAttribute("data-product-id") ===
      productId
    ) {
      return child;
    }
  }
};

const getProductById = (productId) => {
  const product = products.find((product) => product.id === productId);
  return product;
};

const getOrderById = (orderId) => {
  const order = cart.find((order) => order.id === orderId);
  return order;
};

const decrease = (order, orderIndex) => {
  order.quantity--;
  order.totalPrice -= order.price;

  const product = getProductNodeById(order.productId);

  const button = product.querySelector("button");

  if (button.hasAttribute("disabled")) {
    button.removeAttribute("disabled");
  }

  if (order.quantity === 0) {
    deleteOrder(orderIndex);
  }
};

const decreaseQuantity = (order, index) => {
  decrease(order, index);
  calculateTotal();
  renderCart();
};

const BASE_PATH = "/assets/images/";

const addToCart = (button, product) => {
  const { id, img, title, price, max } = product;

  const index = cart.findIndex((order) => order.title === title);

  if (index >= 0) {
    const currentOrder = cart[index];
    if (currentOrder.quantity < max) {
      currentOrder.quantity++;
      currentOrder.totalPrice += price;
    }

    if (currentOrder.quantity === max) {
      button.setAttribute("disabled", "true");
    }
  } else {
    cart.push({
      id: `ORD_${cart.length}`,
      productId: id,
      img,
      title,
      price,
      quantity: 1,
      totalPrice: price,
      limitation: max,
    });
  }

  calculateTotal();

  totalWrapper.style.visibility = "visible";

  renderCart();
};

const renderProducts = () => {
  productList.innerHTML = products
    .map(
      (product) => `
    <li class="product-card">
      <img class="img" src=${BASE_PATH}${product.img}>
      <div class="product-title">${product.title}</div>
      <div>
        <span class="product-price">${product.price}</span>
        <span class="max">Max: ${product.max}</span>
        <button data-product-id=${product.id}>
          Add To Cart
        </button>
      </div>
    </li>
    `
    )
    .join("");
};

const renderCart = () => {
  table.style.visibility = "visible";

  tbody.innerHTML = cart
    .map(
      (order, index) => `
        <tr>
          <td>
            <img class="little-img" src=${BASE_PATH}${order.img} />
          </td>
          <td>
            ${order.title}
          </td>
          <td>
            ${order.price}
          </td>
          <td>
            ${order.quantity}
          </td>
          <td>
            ${order.price * order.quantity}
          </td>
          <td>
            <i 
              class="fa fa-minus fa-lg" 
              data-index=${index} 
              data-order-id=${order.id}></i>

            <i
              class="fa fa-trash fa-lg" 
              data-index=${index}></i>
            
            <i 
              class="fa fa-plus fa-lg" 
              data-index=${index} 
              data-order-id=${order.id} 
              style="visibility: ${
                order.quantity < order.limitation ? "visible" : "hidden"
              }"></i>

          </td>
        </tr>
      `
    )
    .join("");
};

window.addEventListener("load", () => {
  renderProducts();

  const buttons = $.querySelectorAll(".product-card button");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const productId = e.target.getAttribute("data-product-id");
      const product = getProductById(productId);

      addToCart(button, product);
    });
  });

  table.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("fa-minus")) {
      const orderId = e.target.getAttribute("data-order-id");
      const orderIndex = e.target.getAttribute("data-index");

      const order = getOrderById(orderId);

      decreaseQuantity(order, orderIndex);
    }

    if (e.target && e.target.classList.contains("fa-trash")) {
      const orderIndex = e.target.getAttribute("data-index");
      deleteOrder(orderIndex);
    }

    if (e.target && e.target.classList.contains("fa-plus")) {
      const orderId = e.target.getAttribute("data-order-id");

      const order = getOrderById(orderId);

      if (order.quantity < order.limitation) {
        order.quantity++;
        order.totalPrice += order.price;
      
        renderCart();
        calculateTotal();
      }

      if (order.quantity === order.limitation) {
        const product = getProductNodeById(order.productId);
        product.querySelector("button").setAttribute("disabled", "true");
      }
    }
  });
});
