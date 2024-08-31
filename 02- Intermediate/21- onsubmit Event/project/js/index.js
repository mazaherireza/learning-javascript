const $ = document;

const form = $.querySelector("#form");
form.addEventListener("submit", () => {
  console.log("Form Is Submitted!");
});
