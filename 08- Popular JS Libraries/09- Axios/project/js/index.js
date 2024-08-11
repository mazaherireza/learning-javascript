import {
  editBookAPI,
  getBooksAPI,
  postBookAPI,
  deleteBookAPI,
} from "./services.js";

const $ = document;
const form = $.querySelector("form");
const titleElem = $.querySelector("#book-title");
const authorElem = $.querySelector("#book-author");

const tbody = $.querySelector("tbody");

const modal = $.querySelector(".modal");

const closeEditModal = () => {
  modal.style.display = "none";
};

const openEditModal = (id, book) => {
  modal.style.display = "block";

  const closeBtn = $.querySelector(".modal-header .fa-close");
  closeBtn.onclick = () => {
    closeEditModal();
  };

  const bookTitle = $.querySelector(".modal-content #modal-book-title");
  const bookAuthor = $.querySelector(".modal-content #modal-book-author");

  bookTitle.value = book.title;
  bookAuthor.value = book.author;

  const confirmBtn = $.querySelector(".modal-footer .btn-confirm");
  const cancelBtn = $.querySelector(".modal-footer .btn-cancel");

  confirmBtn.onclick = async () => {
    const obj = {
      title: bookTitle.value,
      author: bookAuthor.value,
    };

    try {
      await editBookAPI(id, obj);
      closeEditModal();
      fetchBooks();
    } catch (error) {
      console.error(error);
    }
  };

  cancelBtn.onclick = () => {
    closeEditModal();
  };
};

const deleteBook = async (id) => {
  try {
    await deleteBookAPI(id);
    fetchBooks();
  } catch (error) {
    console.error(error);
  }
};

const populateTable = ([id, book]) => {
  const row = $.createElement("tr");

  const titleElement = $.createElement("td");
  titleElement.innerHTML = book.title;

  const authorElement = $.createElement("td");
  authorElement.innerHTML = book.author;

  const operation = $.createElement("td");
  operation.className = "operation";

  const trash = $.createElement("i");
  trash.className = "fa fa-trash fa-lg";
  trash.addEventListener("click", () => {
    deleteBook(id);
  });

  const edit = $.createElement("i");
  edit.className = "fa fa-edit fa-lg";
  edit.addEventListener("click", () => {
    openEditModal(id, book);
  });
  operation.append(trash, edit);

  row.append(titleElement, authorElement, operation);
  tbody.append(row);
};

const postBook = async (book) => {
  try {
    await postBookAPI(book);
  } catch (error) {
    console.error(error);
  } finally {
    form.reset();
  }
};

form.onsubmit = (event) => {
  event.preventDefault();
  const title = titleElem.value;
  const author = authorElem.value;
  const book = {
    title,
    author,
  };
  postBook(book);
  fetchBooks();
};

const fetchBooks = async () => {
  try {
    const { data } = await getBooksAPI();
    const books = Object.entries(data);
    tbody.innerHTML = "";
    books.forEach((book) => {
      populateTable(book);
    });
  } catch (error) {
    console.error(error);
  }
};

window.onload = () => {
  fetchBooks();
};
