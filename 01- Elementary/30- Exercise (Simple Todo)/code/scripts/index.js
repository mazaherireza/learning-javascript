const todos = [
  {
    id: "RXS_1",
    title: "Hit the Gym",
    isDone: true,
  },
  {
    id: "RXS_2",
    title: "Learn JS",
    isDone: false,
  },
  {
    id: "RXS_3",
    title: "Learn English",
    isDone: false,
  },
];

const option = prompt(`What do you want to do?
  (Enter Number)
  1. Add to todo list
  2. Remove from todo list
  3. Do a specific todo
`);

const PREFIX = "RXS_";

const getUsersInput = () => {
  const title = prompt("Enter title of todo");
  return title;
};

const addTodo = () => {
  const title = getUsersInput();

  const len = todos.length;

  todos.push({
    id: `${PREFIX}${len + 1}`,
    title,
    isDone: false,
  });
};

const removeTodo = () => {
  const title = getUsersInput();

  const index = todos.findIndex((todo) => todo.title === title);

  const DELETE_COUNT = 1;

  if (index !== -1) {
    todos.splice(index, DELETE_COUNT);
  }
};

const doTodo = () => {
  const title = getUsersInput();

  const index = todos.findIndex((todo) => todo.title === title);

  if (index !== -1) {
    todos[index].isDone = true;
  }
};

switch (option) {
  case "1":
    addTodo();
    break;
  case "2":
    removeTodo();
    break;
  case "3":
    doTodo();
    break;
  default:
    alert("Invalid Number!");
}

console.log("Todos is: ", todos);
