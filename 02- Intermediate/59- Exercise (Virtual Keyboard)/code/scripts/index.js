import { ALPHANUMERIC_KEYS } from "./keys.js";

const $ = document;
const text = $.querySelector("#text");

const renderToDOM = (event, key) => {
  const { code } = event;
  if (code == "Backspace") {
    text.innerHTML = text.innerHTML.slice(0, -1);
  } else if (code == "Space") {
    text.innerHTML += " ";
  } else if (ALPHANUMERIC_KEYS.includes(code)) {
    const childCount = key.childElementCount;
    if (childCount) {
      /*
      like this: 
      <div class="key multi-key" id="Digit8">
        <div>*</div>
        <div>8</div>
      </div>
      */
      if (event.shiftKey) {
        text.innerHTML += key.firstElementChild.innerHTML; // like this: <div>*</div>
      } else {
        text.innerHTML += key.lastElementChild.innerHTML; // like this: <div>8</div>
      }
    } else text.innerHTML += key.innerHTML;
  }
};

$.body.addEventListener("keyup", (event) => {
  const { code } = event;
  const key = $.querySelector(`#${code}`);
  if (key) {
    renderToDOM(event, key);
    key.classList.add("animate");
    key.addEventListener("animationend", () => {
      key.classList.remove("animate");
    });
  }
});
