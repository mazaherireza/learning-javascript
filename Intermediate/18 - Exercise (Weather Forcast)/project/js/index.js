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

searchBtn.addEventListener("click", () => {
  const keySearch = $.querySelector("#key-search").value.toLowerCase();
  const selectedCity = response[keySearch];
  if (selectedCity) {
    const city = $.querySelector("#city");
    const weather = $.querySelector("#weather");
    const temp = $.querySelector("#temp");
    city.innerHTML = selectedCity.name;
    weather.innerHTML = `Weather: ${selectedCity.weather}`;
    temp.innerHTML = `Temperature: ${selectedCity.temp} C`;
  } else {
    const information = $.querySelector("#information");
    information.innerHTML = "Not Found!";
  }
});
