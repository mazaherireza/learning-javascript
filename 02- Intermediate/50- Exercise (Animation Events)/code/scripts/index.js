const $ = document;

const button = $.querySelector("button");
const img = $.querySelector("img");
const heading = $.querySelector("h4");
const message = $.querySelector("h5");
const count = $.querySelector("#count");
const time = $.querySelector("#time");

button.addEventListener("click", () => {
  img.style.animation = "change 2s 3";

  message.style.visibility = "hidden";
});

img.addEventListener("animationstart", () => {
  heading.innerHTML = "Animation Starts";

  button.setAttribute("disabled", "disabled");
});

let counter = 1;
let elapsedTime;

img.addEventListener("animationiteration", (event) => {
  counter++;
  heading.innerHTML = "Animation Iterates";
  elapsedTime = event.elapsedTime;
});

img.addEventListener("animationend", () => {
  heading.innerHTML = "Animation Ended";
  message.style.visibility = "visible";
  count.innerHTML = counter;
  time.innerHTML = elapsedTime + 2;

  button.removeAttribute("disabled");

  img.style.animation = "none";
});
