const $ = document;
const title = $.querySelector("#playground-title");
const btn = $.querySelector("#btn");

btn.addEventListener("click", () => {
  title.classList.toggle("highlight");
});
