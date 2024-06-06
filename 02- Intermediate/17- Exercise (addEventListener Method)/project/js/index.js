const response = {
  Iran: ["Tehran", "Isfahan", "Rasht", "Shiraz", "Kerman", "Yazd"],
  France: ["Paris", "Marseille", "Lyon"],
  England: ["London", "Oxford", "Liverpool"],
};

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
    const cities = response[selectedCountry];
    cities.forEach((cityItem) => {
      city.innerHTML += `<option value=${cityItem}>${cityItem}</option>`;
    });
  }
});
