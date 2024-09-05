const $ = document;

const switchElement = $.querySelector("#switch");
const label = $.querySelector("#label");
const content = $.querySelector("#content");

let theme = "";

label.addEventListener("click", () => {
  if (switchElement.checked) {
    // Apply Dark Mode
    content.classList.add("dark");
    theme = "dark";
  } else {
    // Apply Light Mode
    content.classList.remove("dark");
    theme = "light";
  }
  localStorage.setItem("theme", theme);
});

window.addEventListener("load", () => {
  theme = localStorage.getItem("theme");
  if (theme === "light") {
    content.classList.remove("dark");
    switchElement.checked = true; // Is this correct?!
  }
});
