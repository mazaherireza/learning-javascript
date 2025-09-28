import { users } from "./users.js";

const PER_PAGE = 5;
let currentPage = 1;
const LEN = users.length;

const $ = document;
const userList = $.querySelector(".users");
const pagination = $.querySelector(".pagination");

const renderUserList = (page) => {
  const start = (page - 1) * PER_PAGE;
  const end = start + PER_PAGE;

  const slicedUsers = users.slice(start, end);

  userList.innerHTML = "";

  slicedUsers.forEach((user) => {
    const li = $.createElement("li");
    li.innerHTML = `${user.firstName} ${user.lastName}`;
    li.className = "card";

    userList.append(li);
  });
};

const setStyle = (number) => {
  for (const child of pagination.children) {
    child.className = child.innerHTML == number ? "button active" : "button";
  }
};

const renderPagination = (pages) => {
  for (let index = 0; index < pages; index++) {
    const button = $.createElement("button");
    button.innerHTML = index + 1;
    button.className = currentPage === index + 1 ? "button active" : "button";

    button.addEventListener("click", (event) => {
      const activeButton = event.target.innerHTML;
      setStyle(activeButton);
      currentPage = activeButton;
      renderUserList(currentPage);
    });

    const li = $.createElement("li");
    li.append(button);

    pagination.append(li);
  }
};

window.addEventListener("load", () => {
  const pages = Math.ceil(LEN / PER_PAGE);

  renderPagination(pages);
  renderUserList(currentPage);
});
