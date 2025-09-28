const $ = document;

const todoInput = $.querySelector("#todo-input");

const todoBox = $.querySelector("#todo-box");
const doingBox = $.querySelector("#doing-box");
const doneBox = $.querySelector("#done-box");

const createTodo = (todoTitle) => {
  const div = $.createElement("div");
  div.classList.add("todo-card");
  div.setAttribute("draggable", "true");

  const icon = $.createElement("i");
  icon.className = "fa fa-times";
  icon.addEventListener("click", (event) => {
    event.target.parentNode.remove();
  });

  const title = $.createElement("span");
  title.innerHTML = todoTitle;

  div.append(title, icon);
  todoBox.appendChild(div);
};

todoInput.addEventListener("keydown", (event) => {
  const todoTitle = todoInput.value.trim();

  if (event.key == "Enter" && todoTitle) {
    createTodo(todoTitle);
    todoInput.value = "";
  }
});

const BOXES = [todoBox, doingBox, doneBox];

BOXES.forEach((box) => {
  box.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
});

BOXES.forEach((box) => {
  box.addEventListener("dragstart", (event) => {
    event.target.setAttribute("id", "unique");
    event.dataTransfer.setData("card", event.target.id);
  });
});

BOXES.forEach((box) => {
  box.addEventListener("drop", (event) => {
    const element = $.querySelector(`#${event.dataTransfer.getData("card")}`);
    box.appendChild(element);
    element.removeAttribute("id");
  });
});
