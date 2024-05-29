const $ = document;

const btn = $.querySelector("#go-back");

btn.addEventListener("click", () => {
  history.back();
});
