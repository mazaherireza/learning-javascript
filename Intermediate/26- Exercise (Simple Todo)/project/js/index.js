const $ = document;

const warning = $.querySelector("#warning");
const newTodo = $.querySelector("#new-todo");
const todos = $.querySelector("#todos");

const deleteTodo = (event) => {
  event.target.parentElement.remove();
  if (!todos.hasChildNodes()) {
    todos.classList.remove("bordered");
  }
};

const addNewTodo = (value) => {
  const li = $.createElement("li");
  li.classList.add("todo");
  // Or li.className = 'todo'
  const title = $.createElement("span");
  title.innerHTML = value;

  const icon = $.createElement("i");
  icon.classList.add("fa", "fa-times");
  icon.addEventListener("click", (event) => {
    deleteTodo(event);
  });

  li.append(title, icon);
  todos.append(li);
};

newTodo.addEventListener("keydown", (event) => {
  warning.style.visibility = "hidden";
  if (event.key == "Enter") {
    // event.target.value or newTodo.value
    const trimmedValue = newTodo.value.trim();
    if (trimmedValue) {
      addNewTodo(trimmedValue);
      newTodo.value = "";
      if (todos.hasChildNodes()) todos.classList.add("bordered");
      else todos.classList.remove("bordered");
    } else {
      warning.innerHTML = "Todo must have at least one character.";
      warning.style.visibility = "visible";
    }
  }
});
