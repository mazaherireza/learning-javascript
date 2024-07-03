const $ = document;
const wrapper = $.querySelector(".wrapper");

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
    //deleteUser(id)
  });

  const edit = $.createElement("i");
  edit.className = "fa fa-edit fa-lg";
  edit.addEventListener("click", () => {
    //openEditModal(user)
  });

  const actions = $.createElement("div");
  actions.append(trash, edit);

  const information = $.createElement("div");
  information.append(heading, email);

  userWrapper.append(information, actions);
  wrapper.append(userWrapper);
};

export { renderToDOM };
