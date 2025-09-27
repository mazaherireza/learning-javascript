const $ = document;

const button = $.querySelector("button");

button.addEventListener("click", () => {
  $.documentElement.style.setProperty("--primary-color", "green");
  // console.log($.html); <----------- undefined
  console.log($.documentElement.style); // <------------------- CSSStyleDeclaration
  console.log(
    `Now primary color is: ${$.documentElement.style.getPropertyValue(
      "--primary-color"
    )}`
  );
});
