class Todo {
  constructor(title) {
    this.title = title;
    this.isCompleted = false;
  }
}

const $ = document;

class Controler {
  constructor() {
    this.message = $.querySelector("#message");
    this.done = $.querySelector("#done");
    this.total = $.querySelector("#total");

    this.todoInput = $.querySelector("input");
    this.addBtn = $.querySelector("button#add");
    this.clearBtn = $.querySelector("button#clear");
    this.todoWrapper = $.querySelector(".todo-wrapper");

    this.todoList = JSON.parse(localStorage.getItem("todoList")) ?? [];

    this.iterate();
  }

  representOnDOM(todo) {
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
    this.todoWrapper.append(todoCard);
  }

  iterate() {
    this.todoList.forEach((todo) => {
      this.representOnDOM(todo);
    });
  }
}

const applyDynamicClass = (selector, flag) => {
  const cls = flag ? "green" : "red";
  selector.className = `status ${cls}`;
};

const doneTodos = () => {
  const doneTodos = controler.todoList.filter((todo) => todo.isCompleted);
  return doneTodos.length;
};

const updateTitle = (event, flag) => {
  const title = event.target.parentElement.previousElementSibling;
  if (flag) title.className = "lineThrough";
  else title.className = "";
};

const updateStatus = (event, title) => {
  const index = controler.todoList.findIndex((todo) => todo.title === title);
  if (index >= 0) {
    const status = !controler.todoList[index].isCompleted;
    controler.todoList[index].isCompleted = status;
    localStorage.setItem("todoList", JSON.stringify(controler.todoList));
    event.target.innerHTML = status ? "Completed" : "Uncompleted";
    applyDynamicClass(event.target, status);
    updateTitle(event, status);
    populateMessage();
  }
};

const DELETE_COUNT = 1;
const removeTodo = (event, title) => {
  const index = controler.todoList.findIndex((todo) => todo.title === title);
  if (index >= 0) {
    controler.todoList.splice(index, DELETE_COUNT);
    localStorage.setItem("todoList", JSON.stringify(controler.todoList));
    event.target.parentElement.parentElement.remove();
  }
  populateMessage();
};

const afterValidationHandler = (title) => {
  controler.todoInput.value = "";
  const todo = new Todo(title);
  controler.todoList.push(todo);
  populateMessage();
  controler.representOnDOM(todo);
  localStorage.setItem("todoList", JSON.stringify(controler.todoList));
};

const controler = new Controler();

const populateMessage = () => {
  const len = controler.todoList.length;
  if (len) {
    controler.done.innerHTML = doneTodos();
    controler.total.innerHTML = len;
    controler.message.style.visibility = "visible";
  } else {
    controler.message.style.visibility = "hidden";
  }
};

populateMessage();

controler.todoInput.onkeyup = (event) => {
  const title = controler.todoInput.value.trim();
  if (title && event.code == "Enter") {
    afterValidationHandler(title);
  }
};

controler.addBtn.onclick = () => {
  const title = controler.todoInput.value.trim();
  if (title) {
    afterValidationHandler(title);
  }
};

controler.clearBtn.onclick = () => {
  localStorage.removeItem("todoList");
  controler.todoList = [];
  controler.todoWrapper.innerHTML = "";
  populateMessage();
};
