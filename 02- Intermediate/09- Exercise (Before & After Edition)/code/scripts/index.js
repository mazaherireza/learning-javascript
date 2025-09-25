const $ = document;

const image = $.querySelector("img");
const button = $.querySelector("button");

let hasBeenEdited = false;

const toggleContents = () => {
  hasBeenEdited = !hasBeenEdited;

  if (hasBeenEdited) {
    image.setAttribute("src", "/assets/images/after.png");
    button.innerHTML = "Before";
  } else {
    image.setAttribute("src", "/assets/images/before.png");
    button.innerHTML = "After";
  }
};
