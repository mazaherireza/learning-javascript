const $ = document;

const message = $.getElementById("message");

const img = $.querySelector("img");

const coordination = $.getElementById("coordination");
const pageX = $.getElementById("pageX");
const pageY = $.getElementById("pageY");

const button = $.querySelector("button");

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

button.addEventListener("click", () => {
  if (hasEvent) {
    message.innerHTML = "mousemove Event Is Removed.";
    img.removeEventListener(EVENT, mousemoveHandler);

    coordination.style.visibility = "hidden";

    button.innerHTML = "Add Event";
  } else {
    message.innerHTML = "mousemove Event Is Added.";

    img.addEventListener(EVENT, mousemoveHandler);

    coordination.style.visibility = "visible";

    button.innerHTML = "Remove Event";
  }

  hasEvent = !hasEvent;
});
