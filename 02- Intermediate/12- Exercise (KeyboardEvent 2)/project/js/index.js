const $ = document;

const form = $.querySelector("form");
const usernameInput = $.querySelector("#username");
const passwordInput = $.querySelector("#password");

const isValid = (identifier, input) => {
  const LIMITATION = identifier == "U" ? 10 : 8;
  return input.length >= LIMITATION;
};

let username;
let password;

const setUsername = () => {
  username = usernameInput.value;
};

const setPassword = () => {
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
  setUsername();
  setPassword();
  const modal = $.querySelector(".modal");
  modal.style.visibility = "visible";
  if (isValid("U", username) && isValid("P", password)) {
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

  form.reset();
};

const usernameValidationInfo = $.querySelector("#username-validation");
const passwordValidationInfo = $.querySelector("#password-validation");

const changeVisibility = (node, value = "visible") => {
  node.style.visibility = value;
};

const usernameKeyLog = () => {
  setUsername();
  if (isValid("U", username)) {
    changeVisibility(usernameValidationInfo, "hidden");
  } else {
    changeVisibility(usernameValidationInfo);
  }
};

const passwordKeyLog = () => {
  setPassword();
  if (isValid("P", password)) {
    changeVisibility(passwordValidationInfo, "hidden");
  } else {
    changeVisibility(passwordValidationInfo);
  }
};
