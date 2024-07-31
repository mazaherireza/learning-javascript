import { form, firstname, lastname, email } from "./form.js";
import { serviceWorkerSupport } from "../utils.js";

const $ = document;
const snackbar = $.querySelector("#snackbar");
const INTERVAL = 5_000;

const populateSnackbar = (message = "Message") => {
  snackbar.innerHTML = message;
  snackbar.className = "show";
  setTimeout(() => {
    snackbar.className = snackbar.className.replace("show", "");
  }, INTERVAL);
};

const { serviceWorker: SW } = navigator;
SW.onmessage = (event) => {
  const { data } = event;
  if (data && data.type == "MANIPULATE") {
    populateSnackbar(data.data);
  }
};

form.onsubmit = (event) => {
  event.preventDefault();
  const user = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
  };
  const DB_VERSION = 1;
  createDatabase("Learning-PWA", DB_VERSION, "Users");
  add("Users", user);

  swRegistration.sync.register("Create-User");
  form.reset();
};

let swRegistration;
const ready = async () => {
  if (serviceWorkerSupport()) swRegistration = await SW.ready;
};

window.onload = () => {
  ready();
};
