const $ = document;

const todoInput = $.querySelector("input");
const addBtn = $.querySelector("button#add");

const todoWrapper = $.querySelector(".todo-wrapper");

let todoList = [];
const PREFIX = "TD";
const DELETE_COUNT = 1;

const applyDynamicClass = (selector, flag) => {
  const cls = flag ? "green" : "red";
  selector.className = `status ${cls}`;
};

const updateStatus = (event, id) => {
  const index = todoList.findIndex((todo) => todo.id === id);
  if (index >= 0) {
    const status = !todoList[index].isCompleted;
    todoList[index].isCompleted = status;
    localStorage.setItem("todoList", JSON.stringify(todoList));
    event.target.innerHTML = status ? "Completed" : "Uncompleted";
    applyDynamicClass(event.target, status);
    const title = event.target.parentElement.previousElementSibling;
    if (status) title.className = "lineThrough";
    else title.className = "";
  }
};

const removeTodo = (event, id) => {
  const index = todoList.findIndex((todo) => todo.id === id);
  if (index >= 0) {
    todoList.splice(index, DELETE_COUNT);
    localStorage.setItem("todoList", JSON.stringify(todoList));
    event.target.parentElement.parentElement.remove();
  }
};

const representOnDOM = (todo) => {
  const { id, title, isCompleted } = todo;
  const todoCard = $.createElement("div");
  const todoTitle = $.createElement("p");
  const actions = $.createElement("div");
  const status = $.createElement("button");
  const icon = $.createElement("i");

  todoCard.classList.add("card");

  todoTitle.innerHTML = title;

  actions.classList.add("actions");

  status.innerHTML = isCompleted ? "Completed" : "Uncompleted";
  applyDynamicClass(status, isCompleted);
  if (isCompleted) todoTitle.className = "lineThrough";

  status.addEventListener("click", (event) => {
    updateStatus(event, id);
  });

  icon.setAttribute("class", "fa fa-times");
  icon.addEventListener("click", (event) => {
    removeTodo(event, id);
  });

  actions.append(status, icon);
  todoCard.append(todoTitle, actions);
  todoWrapper.append(todoCard);
};

const eventHandler = (title) => {
  todoInput.value = "";
  const todo = {
    id: `${PREFIX}_${todoList.length}`,
    title,
    isCompleted: false,
  };
  todoList.push(todo);
  representOnDOM(todo);
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

todoInput.addEventListener("keyup", (event) => {
  const title = todoInput.value.trim();
  if (title && event.code == "Enter") {
    eventHandler(title);
  }
});

addBtn.addEventListener("click", () => {
  const title = todoInput.value.trim();
  if (title) {
    eventHandler(title);
  }
});

window.addEventListener("load", () => {
  todoList = JSON.parse(localStorage.getItem("todoList")) ?? [];
  todoList.forEach((todo) => {
    representOnDOM(todo);
  });
});
