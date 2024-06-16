import {
  form,
  username,
  password,
  email,
  resetFields,
} from "./formElements.js";

// Save the connection to the DB in a global variable since it will later be used to carry out transactions.
let DB; // IndexedDB connection

const createDatabase = () => {
  const NAME = "CodeCademy";
  let version = 1;
  const request = indexedDB.open(NAME, version);
  // Event handling
  request.onerror = (error) => {
    console.error("IndexedDB error: ", error);
  };
  request.onsuccess = (event) => {
    console.info("Successful DB connection");
    DB = request.result;
  };

  request.onupgradeneeded = (event) => {
    DB = request.result;
    console.log(DB);
    DB.onerror = () => console.error("Error, loading DB.");
    const OBJECT_STORE = "Users";
    if (!DB.objectStoreNames.contains(OBJECT_STORE)) {
      const objectStore = DB.createObjectStore(OBJECT_STORE, {
        keyPath: "username",
      });
      // Define what data items the objectStore will contain.
      objectStore.createIndex("username", "username", { unique: true });
      objectStore.createIndex("password", "password", { unique: false });
      objectStore.createIndex("email", "email", { unique: false });

      objectStore.transaction.oncomplete = (event) => {
        console.info(`Object store ${OBJECT_STORE} created.`);
      };
    }
    if (DB.objectStoreNames.contains("Orders")) DB.deleteObjectStore("Orders");
  };
};

const addUser = (user) => {
  const transaction = DB.transaction("Users", "readwrite");
  transaction.onerror = (error) => {
    console.warn(error);
  };
  transaction.onsuccess = (event) => {
    console.info(event);
  };

  const store = transaction.objectStore("Users");
  const request = store.add(user);
  request.onerror = (error) => {
    console.warn(`Error to add new user: ${error}`);
  };
  request.onsuccess = (event) => {
    console.info(event);
    console.info(`New user added, username: ${request.result}`);
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
};

const indexedDBSupport = () => "indexedDB" in window;

window.onload = () => {
  indexedDBSupport()
    ? createDatabase()
    : console.warn("Your browser doesn't support IndexedDB.");
};
