const $ = document;

const userList = [
  { id: "USR_1001", firstName: "Reza", lastName: "Mazaheri" },
  { id: "USR_1002", firstName: "Yousef", lastName: "Amini" },
  { id: "USR_1003", firstName: "Hossein", lastName: "Kalaei" },
  { id: "USR_1004", firstName: "Ahmad Reza", lastName: "Azizan" },
  { id: "USR_1005", firstName: "Mastan", lastName: "Shabkhosh" },
  { id: "USR_1006", firstName: "Mozhdeh", lastName: "Shadmand Hamedani" },
  { id: "USR_1007", firstName: "Anahita", lastName: "Karkhaneh" },
  { id: "USR_1008", firstName: "Sanaz", lastName: "Sadeghi" },
  { id: "USR_1009", firstName: "Fargol", lastName: "Mazaheri" },
  { id: "USR_10010", firstName: "Sima", lastName: "Shafaei" },
  { id: "USR_10011", firstName: "Sara", lastName: "Shafaei" },
  { id: "USR_10012", firstName: "Mahsa", lastName: "Shafaei" },
  { id: "USR_10013", firstName: "Mir Hossein", lastName: "Dezfoulian" },
  { id: "USR_10014", firstName: "Hassan", lastName: "Khotanlou" },
  { id: "USR_10015", firstName: "Mahlagha", lastName: "Afrasiabi" },
  { id: "USR_10016", firstName: "Siavash", lastName: "Akhash" },
  { id: "USR_10017", firstName: "Erfan", lastName: "Andesta" },
  { id: "USR_10018", firstName: "Amir", lastName: "Kheiri" },
  { id: "USR_10019", firstName: "Tomik", lastName: "Hacoupians" },
  { id: "USR_10020", firstName: "Mani", lastName: "Khodabakhshian" },
  { id: "USR_10021", firstName: "Ashraf", lastName: "Sarkhosh" },
];

const PER_PAGE = 5;
let currentPage = 1;
const LEN = userList.length;

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
      const activePage = event.target.innerHTML;
      setStyle(activePage);
      currentPage = activePage;
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
