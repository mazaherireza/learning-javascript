const $ = document;

const bookTitle = $.querySelector("#book-title");
const bookAuthor = $.querySelector("#book-author");

const bookTitleError = $.querySelector("#book-title-error");
const bookAuthorError = $.querySelector("#book-author-error");

const num = $.querySelector("#num");

const tbody = $.querySelector("tbody");

const addBtn = $.querySelector("#add-btn");

let bookList = [];

const isValid = (value, input = "title") => {
  let validation = true;
  try {
    if (!value.length) {
      validation = false;
      throw `Invalid ${input}`;
    }
  } catch (error) {
    if (input == "title") {
      bookTitleError.innerHTML = error;
    } else {
      bookAuthorError.innerHTML = error;
    }
  } finally {
    return validation;
  }
};

const showNum = () => {
  num.innerHTML = bookList.length;
};

const deleteRow = (event, { title }) => {
  const index = bookList.findIndex((book) => book.title === title);
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

  const title = $.createElement("td");
  title.innerHTML = book.title;

  const author = $.createElement("td");
  author.innerHTML = book.author;

  const action = $.createElement("td");
  const btn = $.createElement("button");
  btn.innerHTML = "Delete";
  action.append(btn);

  btn.addEventListener("click", (event) => {
    deleteRow(event, book);
  });

  tr.append(title, author, action);
  tbody.append(tr);
  showNum();
};

const doSomeCleanUp = () => {
  bookTitle.value = "";
  bookAuthor.value = "";
  bookTitle.focus();
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
