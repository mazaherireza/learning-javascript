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
const DELAY = 2_500;

setInterval(() => {
  const index = Math.floor(Math.random() * len);
  playground.style.backgroundColor = colors[index];
}, DELAY);
