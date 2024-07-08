import { getCookie, setCookie } from "./utils/cookie.js";
import { BASE_URL } from "./utils/constants.js";

const $ = document;
const form = $.querySelector("form");
const username = $.querySelector("#username");
const checkBox = $.querySelector("input[type='checkbox']");

form.onsubmit = (event) => {
  event.preventDefault();
  if (checkBox.checked) {
    setCookie("username", username.value);
  }
  location.href = `${BASE_URL}/index.html`;
};

window.onload = () => {
  if (getCookie("username")) {
    location.href = `${BASE_URL}/index.html`;
  }
};
