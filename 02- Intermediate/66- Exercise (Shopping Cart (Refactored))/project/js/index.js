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
  totalPrice.innerHTML = `$${cart
    .map((order) => order.totalPrice)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)}`;
};

const deleteOrder = (orderIndex) => {
  const product = findProduct(orderIndex);
  const btn = product.querySelector("button");
  if (btn.hasAttribute("disabled")) btn.removeAttribute("disabled");
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

const findProduct = (orderIndex) => {
  const orderTitle = cart[orderIndex].title;
  for (let child of productList.children) {
    if (child.querySelector("div").innerHTML == orderTitle) {
      return child;
    }
  }
};

const decrease = (order, orderIndex) => {
  order.quantity--;
  order.totalPrice -= order.price;
  const product = findProduct(orderIndex);
  const btn = product.querySelector("button");
  if (btn.hasAttribute("disabled")) btn.removeAttribute("disabled");
  if (order.quantity == 0) {
    deleteOrder(orderIndex);
  }
};

const decreaseQuantity = (order) => {
  const { id } = order;
  const index = cart.findIndex((order) => order.id == id);
  if (index >= 0) {
    decrease(order, index);
    calculateTotal();
    renderCart();
  }
};

const BASE_PATH = "./assets/images/";

const addToCart = (btn, product) => {
  const { img, title, price, max } = product;
  const index = cart.findIndex((order) => order.title == title);
  if (index >= 0) {
    const currentOrder = cart[index];
    if (currentOrder.quantity < max) {
      currentOrder.quantity++;
      currentOrder.totalPrice += price;
    }
    if (currentOrder.quantity == max) {
      btn.setAttribute("disabled", "true");
    }
  } else {
    cart.push({
      id: `ORD_${cart.length}`,
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

const renderProduct = (product) => {
  const container = $.createElement("div");
  container.className = "product-card";

  const img = $.createElement("img");
  img.setAttribute("src", `${BASE_PATH}${product.img}`);
  img.className = "img";

  const title = $.createElement("div");
  title.innerHTML = product.title;
  title.className = "product-title";

  const price = $.createElement("span");
  price.innerHTML = `$${product.price}`;
  price.className = "product-price";

  const max = $.createElement("span");
  max.innerHTML = `Max: ${product.max}`;
  max.className = "max";

  const btn = $.createElement("button");
  btn.innerHTML = "Add To Cart";
  btn.className = "btn";
  if (!product.max) btn.setAttribute("disabled", "true");

  btn.addEventListener("click", () => {
    addToCart(btn, product);
  });

  const division = $.createElement("div");

  division.append(price, max, btn);
  container.append(img, title, division);
  productList.append(container);
};

const renderCart = () => {
  table.style.visibility = "visible";
  tbody.innerHTML = "";
  cart.forEach((order) => {
    const tr = $.createElement("tr");

    const imageContainer = $.createElement("td");
    const img = $.createElement("img");
    img.setAttribute("src", `${BASE_PATH}${order.img}`);
    img.className = "little-img";
    imageContainer.appendChild(img);

    const title = $.createElement("td");
    title.innerHTML = order.title;

    const price = $.createElement("td");
    price.innerHTML = `$${order.price}`;

    const quantity = $.createElement("td");
    quantity.innerHTML = order.quantity;

    const totalPrice = $.createElement("td");
    totalPrice.innerHTML = `$${order.price * +quantity.innerHTML}`;

    const icon = $.createElement("td");

    const minus = $.createElement("i");
    minus.className = "fa fa-minus fa-lg";
    minus.addEventListener("click", (_) => {
      if (plus.style.visibility == "hidden") plus.style.visibility = "visible";
      decreaseQuantity(order);
    });

    const trash = $.createElement("i");
    trash.className = "fa fa-trash fa-lg";
    trash.addEventListener("click", (_) => {
      const orderIndex = cart.findIndex((_order) => _order.id == order.id);
      deleteOrder(orderIndex);
    });

    const plus = $.createElement("i");
    plus.className = "fa fa-plus fa-lg";
    if (order.quantity == order.limitation) {
      plus.style.visibility = "hidden";
    }
    plus.addEventListener("click", (_) => {
      if (minus.style.visibility == "hidden")
        minus.style.visibility = "visible";
      if (order.quantity < order.limitation) {
        order.quantity++;
        order.totalPrice += order.price;
        renderCart();
        calculateTotal();
      }
      if (order.quantity == order.limitation) {
        const orderIndex = cart.findIndex((_order) => _order.id == order.id);
        const product = findProduct(orderIndex);
        product.querySelector("button").setAttribute("disabled", "true");
      }
    });

    icon.append(minus, trash, plus);
    tr.append(imageContainer, title, price, quantity, totalPrice, icon);
    tbody.append(tr);
  });
};

window.addEventListener("load", () => {
  products.forEach((product) => {
    renderProduct(product);
  });
});
