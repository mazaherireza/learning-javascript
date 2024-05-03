const $ = document;

const btn = $.querySelector("button");
const img = $.querySelector("img");
const heading = $.querySelector("h4");

btn.addEventListener("click", () => {
  img.style.animation = "move 2s 2";
});

img.addEventListener("animationstart", () => {
  heading.innerHTML = "Animation Starts";
});

img.addEventListener("animationiteration", () => {
  heading.innerHTML = "Animation Iterates";
});

img.addEventListener("animationend", () => {
  heading.innerHTML = "Animation Ended";
});
