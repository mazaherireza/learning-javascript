const $ = document;

const loginForm = $.querySelector(".login-form");
const form = $.querySelector("form");
const usernameInput = $.querySelector("#username");
const passwordInput = $.querySelector("#password");

const isValid = (identifier, input) => {
  const LIMITATION = identifier == "U" ? 10 : 8;
  return input.length >= LIMITATION;
};

let username;
let password;

const setInputs = () => {
  username = usernameInput.value;
  password = passwordInput.value;
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
  const notification = $.querySelector(".notification");
  notification.style.visibility = "visible";
  if (isValid("U", username) && isValid("P", password)) {
    manipulateNode(notification, "Welcome", {
      background: "linear-gradient(to left, #78ffd6, #a8ff78)",
    });
    loginForm.style.visibility = "hidden";
  } else {
    manipulateNode(notification, "Invalid!, Try Again.", {
      background: "linear-gradient(to left, #7C0A02, #fd5c63)",
    });
  }

  setTimeout(() => {
    notification.style.visibility = "hidden";
  }, 5_000);

  form.reset();
};
