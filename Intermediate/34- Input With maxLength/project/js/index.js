const $ = document;

const input = $.querySelector("#username");
const coutner = $.querySelector("#counter");
const MAX = +input.getAttribute("maxlength");

input.addEventListener("keyup", () => {
  const len = input.value.length;
  coutner.innerHTML = MAX - len;
});


