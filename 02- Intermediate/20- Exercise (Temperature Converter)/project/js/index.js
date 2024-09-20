const $ = document;

const temp = $.querySelector("#temp");
const result = $.querySelector("#result");
const info = $.querySelector("#info");

const convertBtn = $.querySelector("#convert");
const resetBtn = $.querySelector("#reset");
const calculateBtn = $.querySelector("#calculate");

const resetContent = () => {
  temp.value = "";
  result.innerHTML = "";
  result.style.visibility = "hidden";
};

convertBtn.addEventListener("click", () => {
  if (temp.placeholder == "Celsius") {
    temp.placeholder = "Fahrenheit";
    // temp.setAttribute('placeholder', 'Fahrenheit')
    info.innerHTML = "Change Fahrenheit to Celsius";
  } else {
    temp.placeholder = "Celsius";
    info.innerHTML = "Change Celsius to Fahrenheit";
  }
  resetContent();
});

resetBtn.addEventListener("click", resetContent);

const resetStyle = () => {
  result.style.color = "black";
  result.style.fontSize = "x-large";
};

calculateBtn.addEventListener("click", () => {
  resetStyle();
  let response = "";
  if (isNaN(temp.value) || temp.value.trim() == "") {
    response = "Invalid Input!, Enter a Number.";
    result.style.color = "red";
    result.style.fontSize = "small";
    temp.value = "";
  } else {
    if (temp.placeholder == "Celsius") {
      response = `${(+temp.value * (9 / 5) + 32).toFixed(2)} °F`;
    } else {
      response = `${((+temp.value - 32) * (5 / 9)).toFixed(2)} °C`;
    }
  }
  result.innerHTML = response;
  result.style.visibility = "visible";
});
