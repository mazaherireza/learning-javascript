const $ = document;

const min = $.querySelector("#min");
const max = $.querySelector("#max");

const input = $.querySelector('input[type="number"]');
const btn = $.querySelector("#btn");
const quoteList = $.querySelector("#quote-list");

const quotes = [
  "Travel, because Google can't answer all of your questions about life.",
  "Life is the train not the station.",
  "LIVE what you LOVE.",
  "Everything is beautiful if it gets me closer to you.",
  "You took the sun with you, when you left.",
  "Even the darkest night will end and the sun will rise!",
  "Be loyal to your future not to your past.",
  "Choose to be optimistic, it feels better.",
  "The first wealth is health.",
  "One day you'll laugh at the problems you have today.",
];

const LEN = quotes.length;

const MIN = 1;
const MAX = 10;

const renderToDOM = () => {
  quoteList.innerHTML = "";
  const numValue = parseInt(input.value);
  if (numValue >= MIN && numValue <= MAX) {
    const slicedQuotes = quotes
      .slice(0, numValue)
      .map((quote) => `<div class="card quote">${quote}</div>`);
    quoteList.innerHTML = slicedQuotes.join("");
  } else {
    const p = $.createElement("p");
    p.innerHTML = `Number must be between ${MIN} and ${MAX}`;
    p.className = "error card";
    quoteList.append(p);
  }
};

input.addEventListener("click", renderToDOM);

input.addEventListener("keydown", (event) => {
  if (event.code == "Enter") renderToDOM();
});

btn.addEventListener("click", () => {
  renderToDOM();
});

window.addEventListener("load", () => {
  min.innerHTML = MIN;
  max.innerHTML = MAX;
  input.setAttribute("min", MIN);
  input.setAttribute("max", MAX);
});