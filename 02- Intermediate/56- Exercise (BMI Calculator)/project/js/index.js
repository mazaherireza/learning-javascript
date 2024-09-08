const $ = document;

const weight = $.querySelector("#weight");
const wValue = $.querySelector("#w-value");

const height = $.querySelector("#height");
const hValue = $.querySelector("#h-value");

const bmi = $.querySelector("#bmi");
const category = $.querySelector("#category");

const setStyle = (color = "lightblue") => {
  category.style.backgroundColor = color;
  bmi.style.color = color;
};

const getCategory = (BMI) => {
  if (BMI < 16) {
    setStyle("lightblue");
    return "Underweight (Severe thinness)";
  } else if (BMI >= 16 && BMI < 16.9) {
    setStyle("lightblue");
    return "Underweight (Moderate thinness)";
  } else if (BMI >= 17 && BMI < 18.4) {
    setStyle("lightblue");
    return "Underweight (Mild thinness)";
  } else if (BMI >= 18.5 && BMI < 24.9) {
    setStyle("green");
    return "Normal range";
  } else if (BMI >= 25 && BMI < 29.9) {
    setStyle("yellow");
    return "Overweight (Pre-obese)";
  } else if (BMI >= 30 && BMI < 34.9) {
    setStyle("purple");
    return "Obese (Class I)";
  } else if (BMI >= 35 && BMI < 39.9) {
    setStyle("purple");
    return "Obese (Class II)";
  } else {
    setStyle("purple");
    return "Obese (Class III)";
  }
};

const calculateBMI = () => {
  const weightValue = weight.value;
  wValue.innerHTML = `${weightValue} Kg`;

  let heightValue = height.value;
  hValue.innerHTML = `${heightValue} cm`;

  heightValue /= 100;
  const BMI = (weightValue / (heightValue * heightValue)).toFixed(1);
  bmi.innerHTML = BMI;
  category.innerHTML = getCategory(BMI);
};

window.addEventListener("load", () => {
  calculateBMI();
});

weight.addEventListener("input", calculateBMI);
height.addEventListener("input", calculateBMI);
