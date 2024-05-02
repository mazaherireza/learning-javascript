const $ = document;

const todoInput = $.querySelector("#todo-input");

const todoBox = $.querySelector("#todo-box");
const doingBox = $.querySelector("#doing-box");
const doneBox = $.querySelector("#done-box");

const createTodo = (todoTitle) => {
  const div = $.createElement("div");
  div.classList.add("todo-card");
  div.setAttribute("draggable", "true");
  const i = $.createElement("i");
  i.className = "fa fa-trash";
  i.addEventListener("click", (event) => {
    event.target.parentNode.remove();
  });
  const span = $.createElement("span");
  span.innerHTML = todoTitle;
  div.append(span, i);
  todoBox.appendChild(div);
};

todoInput.addEventListener("keydown", (event) => {
  const todoTitle = todoInput.value.trim();
  if (event.key == "Enter" && todoTitle) {
    createTodo(todoTitle);
    todoInput.value = "";
  }
});

[todoBox, doingBox, doneBox].forEach((selector) => {
  selector.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
});

[todoBox, doingBox, doneBox].forEach((todoCard) => {
  todoCard.addEventListener("dragstart", (event) => {
    event.target.setAttribute("id", "moved");
    event.dataTransfer.setData("todoCard", event.target.id);
  });
});

[todoBox, doingBox, doneBox].forEach((selector) => {
  selector.addEventListener("drop", (event) => {
    const element = $.querySelector(
      `#${event.dataTransfer.getData("todoCard")}`
    );
    selector.appendChild(element);
    element.removeAttribute("id");
  });
});
