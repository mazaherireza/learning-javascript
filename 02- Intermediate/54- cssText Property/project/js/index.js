const $ = document;

const btn = $.querySelector("button");
const h6 = $.querySelector("h6");

btn.addEventListener("click", () => {
  h6.style.cssText =
    "width: 8rem; font-size: medium; border-radius: 0.5rem; background-color: yellow; padding: 0.5rem 0.75rem;";
});

// The cssText property sets or returns the contents of a style declaration as a string.
