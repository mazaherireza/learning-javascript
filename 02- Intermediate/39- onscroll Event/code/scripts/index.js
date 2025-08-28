const $ = document;

const text = $.querySelector("#text");

const counter = $.querySelector("#counter");

let movement = 0;

text.addEventListener("scroll", (_) => {
  console.log(text.scrollTop);
  console.log(text.scrollLeft);
  movement++;
  counter.innerHTML = movement;
});

window.addEventListener("load", () => {
  counter.innerHTML = movement;
});
