import { serviceWorkerSupport } from "../utils.js";
const BASE_URL = "https://fakestoreapi.com";

const register = async () => {
  try {
    await navigator.serviceWorker.register("../service-worker.js");
  } catch (error) {
    console.error(error);
  }
};

if (serviceWorkerSupport()) {
  register();
} else {
  console.error("Service workers are not supported.");
}

const getProduct = async () => {
  const response = await fetch(`${BASE_URL}/products?limit=1`);
  const products = await response.json();
  console.table(products);
};

window.onload = () => {
  getProduct();
};
