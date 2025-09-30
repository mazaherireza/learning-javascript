const $ = document;

const note = $.querySelector("input#note");
const colors = $.querySelectorAll(".color");
const selectedColor = $.querySelector("#selected-color");

const notes = $.querySelector("#notes");

const addButton = $.querySelector("#add");
const refreshButton = $.querySelector("#refresh");

let backgroundColor = "#FFF";

const createNote = () => {
  const title = note.value.trim();

  if (title) {
    const listItem = $.createElement("li");
    const span = $.createElement("span");
    const icon = $.createElement("i");

    icon.className = "fa fa-trash";
    span.innerHTML = title;

    listItem.appendChild(span);
    listItem.appendChild(icon);

    listItem.style.background = backgroundColor;
    listItem.className = "card";

    notes.appendChild(listItem);
    
    note.value = "";
  }
};

notes.addEventListener("click", (event) => {
  if ((event.target.tagName = "I")) {
    event.target.parentElement.remove();
  }
});

note.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
    createNote();
  }
});

addButton.addEventListener("click", () => {
  createNote();
});

refreshButton.addEventListener("click", () => {
  note.value = "";

  backgroundColor = "#FFF";

  selectedColor.style.backgroundColor = backgroundColor;
});

colors.forEach((color) => {
  color.addEventListener("click", () => {
    backgroundColor = color.style.backgroundColor;
    selectedColor.style.backgroundColor = backgroundColor;
  });
});
