const $ = document;

const something = $.querySelector("#something");

const errorWrapper = $.querySelector(".error-wrapper");
const errorHeading = $.querySelector("#error-heading");
const errorContent = $.querySelector("#error-content");

const THRESHOLD = 12;

const handler = () => {
  try {
    if (something.value.length >= THRESHOLD) {
      throw "Too Long!";
    } else {
      throw "Too Short!";
    }
  } catch (error) {
    errorWrapper.style.visibility = "visible";
    errorContent.innerHTML = error;
  } finally {
    something.value = "";
  }
};

something.addEventListener("keyup", (event) => {
  if (event.code == "Enter") handler();
});
