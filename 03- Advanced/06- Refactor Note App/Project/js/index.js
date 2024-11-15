const $ = document;

const note = $.querySelector("input#note");
const colors = $.querySelectorAll(".color");
const selectedColor = $.querySelector("#selected-color");

const notes = $.querySelector("#notes");

const addBtn = $.querySelector("#add");
const refreshBtn = $.querySelector("#refresh");

let backgroundColor = "#FFF";

const createNote = () => {
  const title = note.value.trim();
  if (title) {
    const div = $.createElement("div");
    const span = $.createElement("span");
    const icon = $.createElement("i");

    icon.className = "fa fa-trash";
    span.innerHTML = title;

    div.appendChild(span);
    div.appendChild(icon);

    div.style.background = backgroundColor;
    div.className = "card";
    notes.appendChild(div);
    note.value = "";
  }
};

notes.addEventListener("click", (event) => {
  if ((event.target.tagName = "I")) {
    event.target.parentElement.remove();
  }
});

note.addEventListener("keyup", (event) => {
  if (event.code == "Enter") {
    createNote();
  }
});

addBtn.addEventListener("click", () => {
  createNote();
});

refreshBtn.addEventListener("click", () => {
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
