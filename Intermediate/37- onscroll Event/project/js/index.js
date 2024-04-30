const $ = document;

const text = $.querySelector("#text");

text.addEventListener("scroll", (event) => {
  console.log(event);
  console.log(text.scrollTop);
  console.log(text.scrollLeft);
});
