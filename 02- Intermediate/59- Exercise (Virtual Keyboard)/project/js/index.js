const $ = document;
const text = $.querySelector("#text");

const ALPHANUMERIC_KEYS = [
  "Backquote",
  "Digit1",
  "Digit2",
  "Digit3",
  "Digit4",
  "Digit5",
  "Digit6",
  "Digit7",
  "Digit8",
  "Digit9",
  "Digit0",
  "Minus",
  "Equal",
  "KeyQ",
  "KeyW",
  "KeyE",
  "KeyR",
  "KeyT",
  "KeyY",
  "KeyU",
  "KeyI",
  "KeyO",
  "KeyP",
  "BracketLeft",
  "BracketRight",
  "Backslash",
  "KeyA",
  "KeyS",
  "KeyD",
  "KeyF",
  "KeyG",
  "KeyH",
  "KeyJ",
  "KeyK",
  "KeyL",
  "Semicolon",
  "Quote",
  "KeyZ",
  "KeyX",
  "KeyC",
  "KeyV",
  "KeyB",
  "KeyN",
  "KeyM",
  "KeyZ",
  "Comma",
  "Period",
  "Slash",
];

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
