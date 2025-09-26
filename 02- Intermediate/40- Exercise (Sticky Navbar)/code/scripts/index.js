const $ = document;

const wrapper = $.querySelector("#wrapper");
const img = $.querySelector("header .logo img");
const header = $.querySelector("header");
const anchors = $.querySelectorAll(".anchor");

const THRESHOLD = 0;

const applyStyle = (color) => {
  anchors.forEach((anchor) => {
    anchor.style.color = color;
  });
};

const resizeImg = (size) => {
  img.setAttribute("width", size);
  img.setAttribute("height", size);
};

wrapper.addEventListener("scroll", () => {
  if (wrapper.scrollTop > THRESHOLD) {
    if (!header.classList.contains("threshold")) {
      header.classList.add("threshold");
      applyStyle("black");
      resizeImg("50");
    }
  } else {
    header.classList.remove("threshold");
    applyStyle("white");
    resizeImg("60");
  }
});
