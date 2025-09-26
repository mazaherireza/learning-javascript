const $ = document;

const note = $.querySelector("#note");
const colors = $.querySelectorAll(".color");
const selectedColor = $.querySelector("#selected-color");

const notes = $.querySelector("#notes");

const addButton = $.querySelector("#add");
const refreshButton = $.querySelector("#refresh");

let backgroundColor = "#FFF";

const deleteNote = (event) => {
  event.target.parentElement.remove();
};

const createNote = () => {
  const title = note.value.trim();

  if (title) {
    const div = $.createElement("div");
    const span = $.createElement("span");
    const icon = $.createElement("i");

    icon.className = "fa fa-times";
    span.innerHTML = title;

    icon.addEventListener("click", (event) => {
      deleteNote(event);
    });

    div.appendChild(span);
    div.appendChild(icon);

    div.style.background = backgroundColor;
    div.className = "card";
    notes.appendChild(div);
    note.value = "";
  }
};

note.addEventListener("keyup", (event) => {
  if (event.code == "Enter") {
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
