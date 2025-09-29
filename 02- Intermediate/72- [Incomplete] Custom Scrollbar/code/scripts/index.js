const $ = document;

const wrapper = $.querySelector("#wrapper");
const header = $.querySelector("header");
const img = $.querySelector("header img");
const customScroll = $.querySelector("#custom-scroll");
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

//const iHeight = wrapper.clientHeight;
//const iWidth = innerWidth;

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
