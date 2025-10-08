import { KelvinToCelsius, fullDate } from "./utils.js";

const $ = document;

const renderToDOM = (data) => {
  const location = $.querySelector("#location");
  const date = $.querySelector("#date");
  const temp = $.querySelector("#temp");
  const weather = $.querySelector("#weather");
  const tempRange = $.querySelector("#temp-range");

  location.innerHTML = `${data.name}, ${data.sys.country}`;
  date.innerHTML = `${fullDate()}`;
  temp.innerHTML = `${KelvinToCelsius(data.main.temp)}°C`;
  weather.innerHTML = data.weather[0].main;
  tempRange.innerHTML = `${KelvinToCelsius(
    data.main.temp_min
  )}°C / ${KelvinToCelsius(data.main.temp_max)}°C`;
};

export { renderToDOM };
