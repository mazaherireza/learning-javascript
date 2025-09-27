const $ = document;

const button = $.querySelector("button");
const h6 = $.querySelector("h6");

button.addEventListener("click", () => {
  h6.style.cssText =
    "inline-size: 8rem; font-size: medium; border-radius: 0.5rem; background-color: yellow; padding: 0.5rem 0.75rem;";
});
