import { Toast } from "./constants.js";

const display = () => {
  Toast.fire({
    title: "Salut!",
  });
};

window.onload = () => {
  display();
};
