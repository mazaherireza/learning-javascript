const $ = document;

const note = $.querySelector("#note");
const colors = $.querySelectorAll(".color");
const selectedColor = $.querySelector("#selected-color");
const notes = $.querySelector("#notes");
const addBtn = $.querySelector("#add");
const refreshBtn = $.querySelector("#refresh");

let backgrounColor = "#FFF";

const appendNote = (span) => {
  notes.appendChild(span);
};

const deleteNote = (event) => {
  event.target.parentElement.remove();
};

const createNote = () => {
  if (note.value.trim()) {
    const div = $.createElement("div");
    const span = $.createElement("span");
    const i = $.createElement("i");

    i.className = "fa fa-trash";
    span.innerHTML = note.value.trim();

    i.addEventListener("click", (event) => {
      deleteNote(event);
    });
    div.appendChild(span);
    div.appendChild(i);

    div.style.background = backgrounColor;
    div.className = "card";
    appendNote(div);
    note.value = "";
  }
};

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
  backgrounColor = "#FFF";
  selectedColor.style.backgroundColor = backgrounColor;
});

colors.forEach((color) => {
  color.addEventListener("click", () => {
    backgrounColor = color.style.backgroundColor;
    selectedColor.style.backgroundColor = backgrounColor;
  });
});
