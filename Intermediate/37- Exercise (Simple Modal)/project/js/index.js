const $ = document;

const btn = $.querySelector("#btn");
const modal = $.querySelector(".modal-wrapper");
const close = $.querySelector(".fa-close");

const main = $.querySelector("main");
const playground = $.querySelector("#playground");
const RADIUS = "0.1rem";

const setFilter = () => {
  main.style.filter = `blur(${RADIUS})`;
  playground.style.filter = `blur(${RADIUS})`;
};

btn.addEventListener("click", () => {
  modal.style.display = "block";
  setFilter();
});

const resetFilter = () => {
  main.style.filter = "blur(0)";
  playground.style.filter = "blur(0)";
};

const closeModal = () => {
  modal.style.display = "none";
  resetFilter();
};

close.addEventListener("click", closeModal);

$.body.addEventListener("keyup", (event) => {
  if (event.code == "Escape") {
    btn.blur();
    closeModal();
  }
});
