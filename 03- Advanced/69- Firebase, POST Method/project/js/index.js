import { URL } from "./URL.js";
import { form, firstname, lastname, email, clearForm } from "./form.js";

const snackbar = document.querySelector("#snackbar");

const populateSnackbar = (message = "Message") => {
  snackbar.innerHTML = message;
};

const INTERVAL = 5_000;

form.onsubmit = async (event) => {
  event.preventDefault();

  const init = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
    }),
  };
  
  fetch(URL, init)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      populateSnackbar("Registered Successfully.");
    })
    .catch((error) => {
      console.error(error);
      populateSnackbar("Error!");
    })
    .finally(() => {
      clearForm();
      snackbar.className = "show";
      setTimeout(() => {
        snackbar.className = snackbar.className.replace("show", "");
      }, INTERVAL);
    });
};
