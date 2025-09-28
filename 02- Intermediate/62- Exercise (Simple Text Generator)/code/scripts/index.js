import { quotes } from "./quotes.js";

const $ = document;

const min = $.querySelector("#min");
const max = $.querySelector("#max");

const input = $.querySelector('input[type="number"]');
const button = $.querySelector("button");
const quotes = $.querySelector("#quote-list");

const MIN = 1;
const MAX = 10;

const renderToDOM = () => {
  quotes.innerHTML = "";

  const numValue = parseInt(input.value);

  if (numValue >= MIN && numValue <= MAX) {
    const slicedQuotes = quotes
      .slice(0, numValue)
      .map((quote) => `<div class="card quote">${quote}</div>`);
      
    quotes.innerHTML = slicedQuotes.join("");
  } else {
    const p = $.createElement("p");

    p.innerHTML = `Number must be between ${MIN} and ${MAX}`;

    p.className = "error card";

    quotes.append(p);
  }
};

input.addEventListener("keydown", (event) => {
  const { code } = event;

  if (code === "Enter") {
    renderToDOM();
  }
});

input.addEventListener("change", () => {
  renderToDOM();
});

button.addEventListener("click", () => {
  renderToDOM();
});

window.addEventListener("load", () => {
  min.innerHTML = MIN;
  max.innerHTML = MAX;

  input.setAttribute("min", MIN);
  input.setAttribute("max", MAX);
});
