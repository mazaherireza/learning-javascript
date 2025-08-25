import { information } from "./information.js";

const $ = document;

const searchBtn = $.querySelector("#search-btn");

const resetNodes = (...args) => {
  for (const arg of args) {
    arg.innerHTML = "";
  }
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
    city.innerHTML = selectedCity.name;
    weather.innerHTML = `Weather: ${selectedCity.weather}`;
    temp.innerHTML = `Temperature: ${selectedCity.temp} °C`;
  } else {
    message.innerHTML = "Not Found!";
  }
});

const playground = $.querySelector("#playground");
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
