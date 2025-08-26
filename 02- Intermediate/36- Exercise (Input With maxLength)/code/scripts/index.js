const $ = document;

const input = $.querySelector("#username");
const coutner = $.querySelector("#counter");
const MAX = +input.getAttribute("maxlength");

input.addEventListener("keyup", () => {
  coutner.innerHTML = MAX - input.value.length;
});

window.onload = () => {
  coutner.innerHTML = MAX;
};
