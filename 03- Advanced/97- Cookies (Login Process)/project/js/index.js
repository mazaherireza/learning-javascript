import { getCookie } from "./utils/cookie.js";
import { BASE_URL } from "./utils/constants.js";

window.onload = () => {
  if (!getCookie("username")) {
    location.href = `${BASE_URL}/login.html`;
  }
};
