const $ = document;
const title = $.querySelector("#playground-title");
const button = $.querySelector("button");

button.addEventListener("click", () => {
  title.classList.toggle("highlight");
});
