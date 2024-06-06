const $ = document;

const message = $.getElementById("message");

const img = $.getElementById("img");

const coordination = $.getElementById("coordination");
const pageX = $.getElementById("pageX");
const pageY = $.getElementById("pageY");

const btn = $.getElementById("btn");

const EVENT = "mousemove";

const setPageX = (value) => {
  pageX.innerHTML = `pageX: ${value}`;
};

const setPageY = (value) => {
  pageY.innerHTML = `pageY: ${value}`;
};

const mousemoveHandler = (event) => {
  const { pageX, pageY } = event;
  setPageX(pageX);
  setPageY(pageY);
};

img.addEventListener(EVENT, mousemoveHandler);

let hasEvent = true;
btn.addEventListener("click", () => {
  if (hasEvent) {
    message.innerHTML = "mousemove Event Is Removed.";
    img.removeEventListener(EVENT, mousemoveHandler);
    coordination.style.visibility = "hidden";
    btn.innerHTML = "Add Event";
  } else {
    message.innerHTML = "mousemove Event Is Added.";
    img.addEventListener(EVENT, mousemoveHandler);
    coordination.style.visibility = "visible";
    btn.innerHTML = "Remove Event";
  }
  hasEvent = !hasEvent;
});
