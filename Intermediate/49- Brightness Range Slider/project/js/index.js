const $ = document;

const img = $.querySelector("img");
const range = $.querySelector("#range");

range.addEventListener("change", (event) => {
  const value = event.target.value;
  img.style.filter = `brightness(${value}%)`;
});
