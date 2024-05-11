const $ = document;

const btn = $.querySelector("#btn");

btn.addEventListener("click", () => {
  $.documentElement.style.setProperty("--primary-color", "green");
  console.log(
    `Now primary color is: ${$.documentElement.style.getPropertyValue(
      "--primary-color"
    )}`
  );
});
