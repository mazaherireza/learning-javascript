const $ = document;

const bookTitle = $.querySelector("#book-title");
const bookAuthor = $.querySelector("#book-author");
const bookTitleError = $.querySelector("#book-title-error");
const bookAuthorError = $.querySelector("#book-author-error");
const num = $.querySelector("#num");
const tbody = $.querySelector("tbody");

const PREFIX = "BK";
let bookList = [];

const addBtn = $.querySelector("#add-btn");

const isValid = (value, input = "title") => {
  let _isValid = true;
  try {
    if (!value.length) {
      _isValid = false;
      throw "Invalid Input";
    }
  } catch (error) {
    if (input == "title") {
      bookTitleError.innerHTML = error;
    } else {
      bookAuthorError.innerHTML = error;
    }
  } finally {
    return _isValid;
  }
};

const createTd = () => $.createElement("td");
const showNum = () => {
  num.innerHTML = bookList.length;
};

const deleteRow = (event, { id }) => {
  const index = bookList.findIndex((book) => book.id === id);
  if (index >= 0) {
    bookList.splice(index, 1);
    localStorage.setItem("bookList", JSON.stringify(bookList));
  }
  const td = event.target.parentElement;
  const tr = td.parentElement;
  tr.remove();
  showNum();
};

const representOnDOM = (book) => {
  const tr = $.createElement("tr");
  const t = createTd();
  t.innerHTML = book.title;
  const a = createTd();
  a.innerHTML = book.author;
  const action = createTd();
  const btn = $.createElement("button");
  btn.innerHTML = "Delete";
  action.append(btn);
  btn.addEventListener("click", (event) => {
    deleteRow(event, book);
  });
  tr.append(t, a, action);
  tbody.append(tr);
  showNum();
};

const doSomeCleanUp = () => {
  bookTitle.focus();
  bookTitle.value = "";
  bookAuthor.value = "";
};

addBtn.addEventListener("click", () => {
  const title = bookTitle.value.trim();
  const author = bookAuthor.value.trim();
  const titleValidation = isValid(title, "title");
  if (titleValidation) {
    bookTitleError.style.visibility = "hidden";
  } else {
    bookTitleError.style.visibility = "visible";
  }
  const authorValidation = isValid(author, "author");
  if (authorValidation) {
    bookAuthorError.style.visibility = "hidden";
  } else {
    bookAuthorError.style.visibility = "visible";
  }
  if (titleValidation && authorValidation) {
    const book = {
      id: `${PREFIX}${bookList.length}`,
      title,
      author,
    };
    bookList.push(book);
    representOnDOM(book);
    localStorage.setItem("bookList", JSON.stringify(bookList));
    doSomeCleanUp();
  }
});

window.addEventListener("load", () => {
  bookList = JSON.parse(localStorage.getItem("bookList")) ?? [];
  bookList.forEach((book) => {
    representOnDOM(book);
  });
});
