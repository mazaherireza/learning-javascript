const $ = document;

const usernameInput = $.querySelector("#username");
const passwordInput = $.querySelector("#password");

const isValidUsername = (username) => {
  return username.length >= 10 ? true : false;
};

const isValidPassword = (password) => {
  return password.length >= 8 ? true : false;
};

let username;
let password;

const setInputs = () => {
  username = usernameInput.value;
  password = passwordInput.value;
};

const reset = () => {
  usernameInput.value = "";
  passwordInput.value = "";
};

const GENERAL_STYLE = {
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "small",
};

const manipulateNode = (node, message = "MESSAGE", style = {}) => {
  node.innerHTML = message;
  const augmentedStyle = { ...style, ...GENERAL_STYLE };
  const keys = Object.keys(augmentedStyle);
  keys.forEach((key) => {
    node.style[key] = augmentedStyle[key];
  });
};

const submitHandler = (event) => {
  event.preventDefault();
  setInputs();
  const modal = $.querySelector(".modal");
  modal.style.visibility = "visible";
  if (isValidUsername(username) && isValidPassword(password)) {
    manipulateNode(modal, "Welcome", {
      background: "linear-gradient(to left, #78ffd6, #a8ff78)",
    });
  } else {
    manipulateNode(modal, "Invalid!, Try Again.", {
      background: "linear-gradient(to left, #7C0A02, #fd5c63)",
    });
  }

  setTimeout(() => {
    modal.style.visibility = "hidden";
  }, 5_000);

  reset();
};
