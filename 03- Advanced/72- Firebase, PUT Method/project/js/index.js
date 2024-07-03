import { URL } from "./URL.js";

const $ = document;
const wrapper = $.querySelector(".wrapper");
const snackbar = $.querySelector("#snackbar");

const modal = $.querySelector(".modal");

const INTERVAL = 5_000;
const deleteUser = (userID) => {
  fetch(`${URL}/users/${userID}.json`, {
    method: "DELETE",
  })
    .then(() => {
      populateSnackbar("User Deleted.");
      fetchUsers();
    })
    .catch(() => {
      populateSnackbar("Error: [Delete] User");
    })
    .finally(() => {
      snackbar.className = "show";
      setTimeout(() => {
        snackbar.className = snackbar.className.replace("show", "");
      }, INTERVAL);
    });
};

const closeEditModal = () => {
  modal.style.display = "none";
};

const openEditModal = ({ id, user }) => {
  modal.style.display = "block";

  const closeBtn = $.querySelector(".modal-header .fa-close");
  closeBtn.onclick = () => {
    closeEditModal();
  };

  const firstname = $.querySelector(".modal-content #firstname");
  const lastname = $.querySelector(".modal-content #lastname");
  const email = $.querySelector(".modal-content #email");

  firstname.value = user.firstname;
  lastname.value = user.lastname;
  email.value = user.email;

  const confirmBtn = $.querySelector(".modal-footer .btn-confirm");
  const cancelBtn = $.querySelector(".modal-footer .btn-cancel");

  confirmBtn.onclick = () => {
    fetch(`${URL}/users/${id}.json`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
      }),
    }).then((response) => {
      closeEditModal();
      fetchUsers();
    });
  };

  cancelBtn.onclick = () => {
    closeEditModal();
  };
};

const renderToDOM = ([id, user]) => {
  const userWrapper = $.createElement("div");
  userWrapper.className = "user-wrapper";

  const heading = $.createElement("h4");
  const email = $.createElement("p");

  heading.innerHTML = `${user.firstname} ${user.lastname}`;
  email.innerHTML = `${user.email}`;

  const trash = $.createElement("i");
  trash.className = "fa fa-trash fa-lg";
  trash.addEventListener("click", () => {
    deleteUser(id);
  });
  const edit = $.createElement("i");
  edit.className = "fa fa-edit fa-lg";
  edit.addEventListener("click", () => {
    openEditModal({ id, user });
  });
  const actions = $.createElement("div");
  actions.append(trash, edit);

  const information = $.createElement("div");
  information.append(heading, email);

  userWrapper.append(information, actions);
  wrapper.append(userWrapper);
};

const fetchUsers = () => {
  fetch(`${URL}/users.json`)
    .then((response) => response.json())
    .then((data) => {
      const users = Object.entries(data);
      wrapper.innerHTML = "";
      users.forEach((user) => {
        renderToDOM(user);
      });
    });
};

const populateSnackbar = (message = "Message") => {
  snackbar.innerHTML = message;
};

window.onload = () => {
  fetchUsers();
};
