const response = {
  tehran: {
    name: "Tehran",
    weather: "Sunny",
    temp: "25",
  },
  paris: {
    name: "Paris",
    weather: "Sunny",
    temp: "22",
  },
  bern: {
    name: "Bern",
    weather: "Cloudy",
    temp: "21",
  },
  rome: {
    name: "Rome",
    weather: "Sunny",
    temp: "22",
  },
};

const $ = document;

const searchBtn = $.querySelector("#search-btn");
const playground = $.querySelector("#playground");

const resetNodes = () => {
  city.innerHTML = "";
  weather.innerHTML = "";
  temp.innerHTML = "";
  message.innerHTML = "";
};

searchBtn.addEventListener("click", () => {
  const keySearch = $.querySelector("#key-search").value.toLowerCase();
  const selectedCity = response[keySearch];
  const city = $.querySelector("#city");
  const weather = $.querySelector("#weather");
  const temp = $.querySelector("#temp");
  const message = $.querySelector("#message");

  resetNodes();
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
    "#ffc300",
    "#ff5733",
    "#daf7a6",
    "#2874a6",
    "#aed6f1",
    "#1b4f72",
  ];
  const len = colors.length;
  const index = Math.floor(Math.random() * len);
  playground.style.background = colors[index];
})();
