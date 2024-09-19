import { information } from "./information.js";

const $ = document;

const searchBtn = $.querySelector("#search-btn");
const playground = $.querySelector("#playground");

const resetNodes = (...args) => {
  for (let arg of args) arg.innerHTML = "";
};

searchBtn.addEventListener("click", () => {
  const keySearch = $.querySelector("#key-search").value.toLowerCase();
  const selectedCity = information[keySearch];
  const city = $.querySelector("#city");
  const weather = $.querySelector("#weather");
  const temp = $.querySelector("#temp");
  const message = $.querySelector("#message");

  resetNodes(city, weather, temp, message);
  if (selectedCity) {
    const { name, weather: W, temp: T } = selectedCity;
    city.innerHTML = name;
    weather.innerHTML = `Weather: ${W}`;
    temp.innerHTML = `Temperature: ${T} °C`;
  } else {
    message.innerHTML = "Not Found!";
  }
});

// IIFE
(() => {
  const colors = [
    "#7DF9FF",
    "#228B22",
    "#98FB98",
    "#2E8B57",
    "#009E60",
    "#40E0D0",
  ];
  const len = colors.length;
  const index = Math.floor(Math.random() * len);
  playground.style.backgroundColor = colors[index];
})();
