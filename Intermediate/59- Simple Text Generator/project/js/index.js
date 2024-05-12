const $ = document;

const num = $.querySelector("#num");
const quoteList = $.querySelector("#quote-list");
const btn = $.querySelector("#btn");

const quotes = [
  "Travel, because Google can't answer all of your questions about life.",
  "Life is the train not the station.",
  "LIVE what you LOVE.",
  "Everything is beautiful if it gets me closer to you.",
  "You took the sun with you, when you left.",
];
const LEN = quotes.length;

const MIN = 1;
const MAX = 5;

const renderToDOM = () => {
  quoteList.innerHTML = "";
  const numValue = parseInt(num.value);
  if (numValue >= MIN && numValue <= MAX) {
    const slicedQuotes = quotes
      .slice(0, numValue)
      .map((quote) => `<div class="card quote">${quote}</div>`);
    quoteList.innerHTML = slicedQuotes;
  } else {
    const p = $.createElement("p");
    p.innerHTML = `Number must be between ${MIN} and ${MAX}`;
    p.className = "error card";
    quoteList.append(p);
  }
};

num.addEventListener("click", renderToDOM);

num.addEventListener("keydown", (event) => {
  if (event.code == "Enter") renderToDOM();
});

btn.addEventListener("click", () => {
  renderToDOM();
});
