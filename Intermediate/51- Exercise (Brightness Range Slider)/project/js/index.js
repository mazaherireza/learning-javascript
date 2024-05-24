const $ = document;

const img = $.querySelector("img");
const range = $.querySelector('input[type="range"]');

range.addEventListener("change", (event) => {
  img.style.filter = `brightness(${event.target.value}%)`;
});
