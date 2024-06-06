const $ = document;
const playground = $.querySelector("#playground");

const colors = [
  "#ffc300",
  "#ff5733",
  "#daf7a6",
  "#2874a6",
  "#aed6f1",
  "#1b4f72",
];
const len = colors.length;
const DELAY = 5_000;

setInterval(() => {
  const index = Math.floor(Math.random() * len);
  playground.style.background = colors[index];
}, DELAY);
