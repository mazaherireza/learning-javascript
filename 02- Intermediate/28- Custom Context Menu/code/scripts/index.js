const $ = document;

const playground = $.querySelector("#playground");
const contextMenu = $.querySelector("#context-menu");

playground.addEventListener("contextmenu", (event) => {
  event.preventDefault();

  if (contextMenu.style.display === "none") {
    contextMenu.style.display = "block";
  }

  contextMenu.style.insetInlineStart = event.offsetX + "px";
  contextMenu.style.insetBlockStart = event.offsetY + "px";
});

playground.addEventListener("click", () => {
  contextMenu.style.display = "none";
});

$.body.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    contextMenu.style.display = "none";
  }
});
