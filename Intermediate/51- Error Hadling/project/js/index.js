const $ = document;

const something = $.querySelector("#something");
const btn = $.querySelector("button");
const errorHeading = $.querySelector("#error-heading");
const errorContent = $.querySelector("#error-content");

const THRESHOLD = 12;

const workHorse = () => {
  try {
    if (something.value.length >= THRESHOLD) {
      throw "Too Long!";
    } else {
      throw "Too Short!";
    }
  } catch (error) {
    errorHeading.style.visibility = "visible";
    errorContent.innerHTML = error;
  } finally {
    something.value = "";
    something.focus();
  }
};

btn.addEventListener("click", () => {
  workHorse();
});

something.addEventListener("keydown", (event) => {
  if (event.code == "Enter") {
    workHorse();
  }
});
