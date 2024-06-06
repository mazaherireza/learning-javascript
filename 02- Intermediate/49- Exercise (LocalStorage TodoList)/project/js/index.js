const $ = document;

const todoInput = $.querySelector("input");
const addBtn = $.querySelector("button#add");
const clearBtn = $.querySelector("button#clear");

const todoWrapper = $.querySelector(".todo-wrapper");

const message = $.querySelector("#message");
const done = $.querySelector("#done");
const total = $.querySelector("#total");

let todoList = [];
const DELETE_COUNT = 1;

const doneTodos = () => {
  const doneTodos = todoList.filter((todo) => todo.isCompleted);
  return doneTodos.length;
};

const populateMessage = () => {
  const len = todoList.length;
  if (len) {
    done.innerHTML = doneTodos();
    total.innerHTML = len;
    message.style.visibility = "visible";
  } else {
    message.style.visibility = "hidden";
  }
};

const applyDynamicClass = (selector, flag) => {
  const cls = flag ? "green" : "red";
  selector.className = `status ${cls}`;
};

const updateTitle = (event, flag) => {
  const title = event.target.parentElement.previousElementSibling;
  if (flag) title.className = "lineThrough";
  else title.className = "";
};

const updateStatus = (event, title) => {
  const index = todoList.findIndex((todo) => todo.title === title);
  if (index >= 0) {
    const status = !todoList[index].isCompleted;
    todoList[index].isCompleted = status;
    localStorage.setItem("todoList", JSON.stringify(todoList));
    event.target.innerHTML = status ? "Completed" : "Uncompleted";
    applyDynamicClass(event.target, status);
    updateTitle(event, status);
    populateMessage();
  }
};

const removeTodo = (event, title) => {
  const index = todoList.findIndex((todo) => todo.title === title);
  if (index >= 0) {
    todoList.splice(index, DELETE_COUNT);
    localStorage.setItem("todoList", JSON.stringify(todoList));
    event.target.parentElement.parentElement.remove();
  }
  populateMessage();
};

const representOnDOM = (todo) => {
  const { title, isCompleted } = todo;
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
    updateStatus(event, title);
  });

  icon.setAttribute("class", "fa fa-times");
  icon.addEventListener("click", (event) => {
    removeTodo(event, title);
  });

  actions.append(status, icon);
  todoCard.append(todoTitle, actions);
  todoWrapper.append(todoCard);
};

const afterValidationHandler = (title) => {
  todoInput.value = "";
  const todo = {
    title,
    isCompleted: false,
  };
  todoList.push(todo);
  populateMessage();
  representOnDOM(todo);
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

todoInput.addEventListener("keyup", (event) => {
  const title = todoInput.value.trim();
  if (title && event.code == "Enter") {
    afterValidationHandler(title);
  }
});

addBtn.addEventListener("click", () => {
  const title = todoInput.value.trim();
  if (title) {
    afterValidationHandler(title);
  }
});

clearBtn.addEventListener("click", () => {
  localStorage.removeItem("todoList");
  todoList = [];
  todoWrapper.innerHTML = "";
  populateMessage();
});

window.addEventListener("load", () => {
  todoList = JSON.parse(localStorage.getItem("todoList")) ?? [];
  todoList.forEach((todo) => {
    representOnDOM(todo);
  });
  populateMessage();
});
