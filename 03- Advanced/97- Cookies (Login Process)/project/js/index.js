import { doesExist } from "./utils/cookie.js";
import { BASE_URL } from "./utils/constants.js";

window.onload = () => {
  if (!doesExist("username")) {
    location.href = `${BASE_URL}/login.html`;
  }
};
