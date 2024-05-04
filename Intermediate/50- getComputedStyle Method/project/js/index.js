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
log(img.style.border); // 1px solid black, JUST for inline styles.
log(img.style.borderRadius); // Empty string

const imgStyles = getComputedStyle(img);
log(imgStyles.borderRadius); // 8px


