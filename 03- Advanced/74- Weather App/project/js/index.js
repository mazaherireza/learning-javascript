/* 
  Usage
  -----
  Built-in API request by city name
  API Call
  https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
*/

import { renderToDOM } from "./render.js";
import { BASE_URL, API_KEY } from "./constants.js";

const $ = document;
const city = $.querySelector("#city");
const result = $.querySelector(".result");
const loading = $.querySelector("#loading");

city.onkeypress = (event) => {
  console.log(event.code);
  if (event.code == "Enter") {
    loading.style.visibility = "visible";
    const keySearch = city.value;
    fetch(`${BASE_URL}?q=${keySearch}&appid=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        renderToDOM(data);
        loading.style.visibility = "hidden";
      })
      .catch((error) => console.error(error));
  }
};
