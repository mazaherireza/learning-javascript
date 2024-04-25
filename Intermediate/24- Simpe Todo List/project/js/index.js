const $ = document;

const todos = $.querySelector("#todos");
const newTodo = $.querySelector("#new-todo");
const trashes = $.querySelectorAll(".fa-trash");

const deleteTodo = (event) => {
  event.target.parentElement.remove();
  if (!todos.hasChildNodes()) {
    todos.classList.remove("bordered");
  }
};

const addNewTodo = () => {
  const li = $.createElement("li");
  li.classList.add("todo");
  // Or li.className = 'todo'
  const span = $.createElement("span");
  span.innerHTML = newTodo.value.trim();

  const i = $.createElement("i");
  i.classList.add("fa", "fa-trash");
  i.addEventListener("click", (event) => {
    deleteTodo(event);
  });

  li.append(span, i);
  todos.append(li);
};

newTodo.addEventListener("keydown", (event) => {
  // event.target.value or newTodo.value
  if (event.key == "Enter" && newTodo.value) {
    addNewTodo();
    newTodo.value = "";
    if (todos.hasChildNodes) {
      todos.classList.add("bordered");
    } else {
      todos.classList.remove("bordered");
    }
  }
});
