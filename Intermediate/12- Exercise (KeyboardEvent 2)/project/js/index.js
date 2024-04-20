const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

const isValidUsername = (username) => {
  return username.length >= 10 ? true : false;
};

const isValidPassword = (password) => {
  return password.length >= 8 ? true : false;
};

const validate = (event) => {
  event.preventDefault();
  let username = usernameInput.value;
  let password = passwordInput.value;

  const modal = document.querySelector(".modal");
  modal.style.visibility = "visible";
  if (isValidUsername(username) && isValidPassword(password)) {
    modal.innerHTML = "Welcome";
    modal.style.background = "linear-gradient(to left, #78ffd6, #a8ff78)";
  } else {
    modal.innerHTML = "Invalid!, Try Again.";
    modal.style.background = "linear-gradient(to left, #7C0A02, #fd5c63)";
  }
  setTimeout(() => {
    modal.style.visibility = "hidden";
  }, 5000);
};

const usernameValidationInfo = document.querySelector("#username-validation");
const passwordValidationInfo = document.querySelector("#password-validation");
console.log(usernameValidationInfo, passwordValidationInfo);
const usernameKeyLog = () => {
  const username = usernameInput.value;
  if (username.length < 12) {
    usernameValidationInfo.style.visibility = "visible";
    usernameValidationInfo.style.color = "#7C0A02";
  } else {
    usernameValidationInfo.style.visibility = "hidden";
  }
};
const passwordKeyLog = () => {
  const password = passwordInput.value;
  if (password.length < 8) {
    passwordValidationInfo.style.visibility = "visible";
    passwordValidationInfo.style.color = "#7C0A02";
  } else {
    passwordValidationInfo.style.visibility = "hidden";
  }
};
