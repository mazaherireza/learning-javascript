const $ = document;

const temp = $.querySelector("#temp");
const result = $.querySelector('#result')
const info = $.querySelector('#info')

const convertBtn = $.querySelector("#convert");
const resetBtn = $.querySelector("#reset");
const calculateBtn = $.querySelector("#calculate");

convertBtn.addEventListener("click", () => {
  if (temp.placeholder == "Celsius") {
    temp.placeholder = "Fahrenheit";
    // temp.setAttribute('placeholder', 'Fahrenheit')
    info.innerHTML = 'Change Fahrenheit to Celsius'
  } else {
    temp.placeholder = "Celsius";
    info.innerHTML = 'Change Celsius to Fahrenheit'
  }
  result.innerHTML = ''
  result.style.visibility = 'hidden'

});

resetBtn.addEventListener("click", () => {
  temp.value = "";
  result.innerHTML = ''
  result.style.visibility = 'hidden'

});

calculateBtn.addEventListener("click", () => {
  let response = ''
  if (isNaN(temp.value) || temp.value.trim() == '') {
    response = 'Invalid Input!, Enter a Number'
    result.style.color = 'red'
  } else {
    if (temp.placeholder == "Celsius") {
      response = `${(temp.value * (9 / 5) + 32).toFixed(2)} F`;
    } else {
      response = `${ ((temp.value - 32) * (5 / 9)).toFixed(2)} C`
    }
  }
  result.innerHTML = response
  result.style.visibility = 'visible'
});
