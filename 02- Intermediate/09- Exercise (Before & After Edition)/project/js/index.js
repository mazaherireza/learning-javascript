const $ = document;

const img = $.querySelector("#img");
const btn = $.querySelector("#btn");

let hasBeenEdited = false;

const toggleContents = () => {
  hasBeenEdited = !hasBeenEdited;

  if (hasBeenEdited) {
    img.setAttribute("src", "./assets/images/After.png");
    btn.innerHTML = "Before";
  } else {
    img.setAttribute("src", "./assets/images/Before.png");
    btn.innerHTML = "After";
  }
};
