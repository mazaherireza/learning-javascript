import {
  form,
  username,
  password,
  email,
  resetFields,
} from "./formElements.js";

// Save the connection to the DB in a global variable since it will later be used to carry out transactions.
let DB; // IndexedDB connection
const STORE_NAME = "Users";

const createDatabase = () => {
  const NAME = "Learning";
  const VERSION = 1;
  const request = indexedDB.open(NAME, VERSION);

  request.onsuccess = (event) => {
    // Create DB connection
    DB = request.result;
    getUsers();
  };

  request.onerror = (error) => {
    console.error(error);
  };

  request.onupgradeneeded = (event) => {
    DB = request.result;
    DB.onerror = () => console.error("Error, loading DB.");
    console.log(DB);
    if (!DB.objectStoreNames.contains(STORE_NAME)) {
      const objectStore = DB.createObjectStore(STORE_NAME, {
        keyPath: "username",
      });
      // Define what data items the objectStore will contain.
      objectStore.createIndex("username", "username", { unique: true });
      objectStore.createIndex("password", "password", { unique: false });
      objectStore.createIndex("email", "email", { unique: false });

      objectStore.transaction.oncomplete = (event) => {
        console.info(`Object store ${STORE_NAME} created.`);
      };
    }
    if (DB.objectStoreNames.contains("Orders")) DB.deleteObjectStore("Orders");
  };
};

const addUser = (user) => {
  const transaction = DB.transaction(STORE_NAME, "readwrite");
  transaction.onerror = (error) => {
    console.warn(error);
  };
  transaction.onsuccess = (event) => {
    console.info(event);
  };

  const store = transaction.objectStore(STORE_NAME);
  const request = store.add(user);
  request.onerror = (error) => {
    console.warn(`Error to add new user: ${error}`);
  };
  request.onsuccess = (event) => {
    console.info(event);
    console.info(`New user added, username: ${request.result}`);
  };
};

const tbody = document.querySelector("tbody");

const populateTable = (users) => {
  const userTemplate = users
    .map(
      (user) => `
      <tr>
        <td>${user.username}</td>
        <td><i class="fa fa-trash"></td>
      </tr>
    `
    )
    .join("");
  tbody.innerHTML = userTemplate;
};

const getUsers = () => {
  const transaction = DB.transaction(STORE_NAME, "readonly");
  transaction.onerror = (error) => {
    console.warn(error);
  };
  transaction.oncomplete = (event) => {
    console.info(event);
  };

  const store = transaction.objectStore(STORE_NAME);
  const request = store.getAll();
  request.onerror = (error) => {
    console.warn("Error to get Users: ", error);
  };
  request.onsuccess = (event) => {
    console.info(event);
    console.info("Got all the users.");
    const users = request.result;
    console.table(users);
    populateTable(users);
  };
};

form.onsubmit = (event) => {
  event.preventDefault();
  addUser({
    username: username.value,
    password: password.value,
    email: email.value,
  });
  resetFields();
  username.focus();
  getUsers();
};

const indexedDBSupport = () => "indexedDB" in window;

window.onload = () => {
  indexedDBSupport()
    ? createDatabase()
    : console.warn("Your browser doesn't support IndexedDB.");
};
