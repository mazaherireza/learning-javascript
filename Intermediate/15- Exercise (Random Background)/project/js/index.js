const $ = document;
const playground = $.querySelector("#playground");

const colors = [
  "#230a0d",
  "#340e14",
  "#46131a",
  "#571821",
  "#682f37",
  "#895d64",
  "#ab8c90",
];
const len = colors.length;
const DELAY = 5_000;
setInterval(() => {
  const index = Math.floor(Math.random() * len);
  playground.style.background = colors[index];
}, DELAY);
