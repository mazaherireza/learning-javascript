import { applyClass, removeClass } from "./style.js";

const $ = document;

const heading = $.querySelector("h5");
const copy = $.querySelector("#copy");
const paste = $.querySelector("#paste");
const snackbar = $.querySelector("#snackbar");

const populateSnackbar = (message = "Message") => {
  snackbar.innerHTML = message;
};

copy.onclick = () => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(heading.innerHTML);
    populateSnackbar("Copied to clipboard.");
    applyClass();
    removeClass();
  }
};

paste.onclick = () => {
  if (navigator.clipboard) {
    navigator.clipboard.readText().then((text) => console.log(text));
    populateSnackbar("Pasted to console.");
    applyClass();
    removeClass();
  }
};
