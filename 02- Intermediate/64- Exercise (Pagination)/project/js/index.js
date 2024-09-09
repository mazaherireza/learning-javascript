import { userList } from "./userList.js";

const PER_PAGE = 5;
let currentPage = 1;
const LEN = userList.length;

const $ = document;
const users = $.querySelector(".userList");
const pagination = $.querySelector(".pagination");

const renderUserList = (page) => {
  const start = (page - 1) * PER_PAGE;
  const end = start + PER_PAGE;
  const slicedUserList = userList.slice(start, end);
  users.innerHTML = "";
  slicedUserList.forEach((user) => {
    const div = $.createElement("div");
    div.innerHTML = `${user.firstName} ${user.lastName}`;
    div.className = "card";
    users.append(div);
  });
};

const setStyle = (number) => {
  for (const child of pagination.children) {
    child.className = child.innerHTML == number ? "btn active" : "btn";
  }
};

const renderPagination = (limit) => {
  for (let index = 0; index < limit; index++) {
    const btn = $.createElement("button");
    btn.innerHTML = index + 1;
    btn.className = currentPage == index + 1 ? "btn active" : "btn";
    btn.addEventListener("click", (event) => {
      const activeButton = event.target.innerHTML;
      setStyle(activeButton);
      currentPage = activeButton;
      renderUserList(currentPage);
    });
    pagination.append(btn);
  }
};

/* (Note)
  const prev = $.querySelector('button.active')
  prev.classList.remove('active')
 */

window.addEventListener("load", () => {
  const pages = Math.ceil(LEN / PER_PAGE);
  renderPagination(pages);
  renderUserList(currentPage);
});
