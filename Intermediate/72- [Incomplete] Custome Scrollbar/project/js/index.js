const $ = document;

const wrapper = $.querySelector("#wrapper");
const img = $.querySelector("header img");
const header = $.querySelector("header");
const customScroll = $.querySelector("#custom-scroll");
const anchorList = $.querySelectorAll(".anchor");

const THRESHOLD = 0;

const applyStyle = (color) => {
  anchorList.forEach((anchor) => {
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
  //console.log(wrapper.clientHeight);
  //console.log(wrapper.scrollTop);
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
