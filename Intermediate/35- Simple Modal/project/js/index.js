const $ = document;
const btn = $.querySelector("#btn");
const modal = $.querySelector(".modal-wrapper");
const close = $.querySelector(".fa-close");

btn.addEventListener("click", () => {
  modal.style.display = "block";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

$.addEventListener("keyup", (event) => {
  if (event.code == "Escape") {
    modal.style.display = "none";
  }
});
