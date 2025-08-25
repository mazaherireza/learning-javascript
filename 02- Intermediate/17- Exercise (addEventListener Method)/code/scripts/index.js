import { countries } from "./countries.js";

const $ = document;
const country = $.querySelector("#country");
const city = $.querySelector("#city");

country.addEventListener("change", () => {
  const selectedCountry = country.value;
  city.innerHTML = "";
  if (selectedCountry == -1) {
    city.setAttribute("disabled", "disabled");
  } else {
    city.removeAttribute("disabled");
    const cities = countries[selectedCountry];
    cities.forEach((item) => {
      city.innerHTML += `<option value=${item}>${item}</option>`;
    });
  }
});
