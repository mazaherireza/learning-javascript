import { URL } from "./URL.js";
import { renderToDOM } from "./render.js";

const fetchUsers = () => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const users = Object.entries(data);
      users.forEach((user) => {
        renderToDOM(user);
      });
    });
};

window.onload = () => {
  fetchUsers();
};
