const $ = document;

const btn = $.querySelector("button");
const h6 = $.querySelector("h6");

btn.addEventListener("click", () => {
  h6.style.cssText =
    "width: 8em; font-size: 18px; border-radius: 0.5em; background-color: yellow; padding: 1em;";
});
