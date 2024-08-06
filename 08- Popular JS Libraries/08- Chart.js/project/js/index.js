import { data, plugins } from "./constants.js";

const canvas = document.querySelector("#chart");

new Chart(canvas, {
  type: "doughnut",
  data,
  options: {
    plugins,
  },
});
