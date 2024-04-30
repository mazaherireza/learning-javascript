const $ = document;

const wrapper = $.querySelector("#wrapper");
const imgList = $.querySelectorAll("img");
const header = $.querySelector("header");
const anchorList = $.querySelectorAll(".anchor");
const THRESHOLD = 0;

const applyStyle = (color) => {
  anchorList.forEach((anchor) => {
    anchor.style.color = color;
  });
};

const resizeImg = (newSize) => {
  imgList[0].setAttribute("width", newSize);
  imgList[0].setAttribute("height", newSize);
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
    resizeImg("60")
  }
});
