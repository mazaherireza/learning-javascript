const $ = document;

const buttons = $.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(event.target.dataset); // DOMStringMap ...
  });
});
