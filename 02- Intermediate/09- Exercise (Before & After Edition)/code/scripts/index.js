const $ = document;

const img = $.querySelector("#img");
const btn = $.querySelector("#btn");

let hasBeenEdited = false;

const toggleContents = () => {
  hasBeenEdited = !hasBeenEdited;

  if (hasBeenEdited) {
    img.setAttribute("src", "/assets/images/after.png");
    btn.innerHTML = "Before";
  } else {
    img.setAttribute("src", "/assets/images/before.png");
    btn.innerHTML = "After";
  }
};
