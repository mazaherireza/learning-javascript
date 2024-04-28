const $ = document;

const img = $.getElementById("img");
const btn = $.getElementById("btn");

const EVENT = "mousemove";

const mousemoverHandler = () => {
  console.log("Mousemove Event Occured.");
};

img.addEventListener(EVENT, mousemoverHandler);

btn.addEventListener("click", () => {
  img.removeEventListener(EVENT, mousemoverHandler);
});
