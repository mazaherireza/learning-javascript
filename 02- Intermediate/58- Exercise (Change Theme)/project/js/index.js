const $ = document;

const themeList = $.querySelectorAll(".theme");

const setTheme = (theme) => {
  $.documentElement.style.setProperty("--theme-color", theme);
  // Or
  // $.body.style.setProperty("--theme-color", theme);
};

const setStyle = (key) => {
  themeList.forEach((theme) => {
    if (theme.getAttribute("data-id") === key) {
      theme.classList.add("shadowed");
    } else {
      theme.classList.remove("shadowed");
    }
  });
};

themeList.forEach((theme) => {
  theme.addEventListener("click", (event) => {
    setTheme(event.target.style.backgroundColor);
    setStyle(event.target.dataset.id);
  });
});
