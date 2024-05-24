const $ = document;

const img = $.querySelector("img");

const log = (something) => {
  console.log(something);
};

log(img);
log(img.src);
log(img.alt);
log(img.width);
log(img.height);
log(img.style.border); // Empty string (Used for inline styles).
log(img.style.borderRadius); // Empty string

const imgStyles = getComputedStyle(img);
log(imgStyles.borderRadius); // 4px

const figcaption = $.querySelector("figcaption");
const cssObj = window.getComputedStyle(figcaption, ":first-letter");
const size = cssObj.fontSize; // Or cssObj.getPropertyValue("font-size")
log(size);
