import isSupported from "./utils.js";

let DB;

const createDatabase = () => {
  const NAME = "Learning";
  const VERSION = 1;
  const request = indexedDB.open(NAME, VERSION);
  // Event handling
  request.onerror = (error) => {
    console.error("IndexedDB error: ", error);
  };
  request.onsuccess = (event) => {
    console.info("Successful DB connection");
    DB = request.result;
  };

  request.onupgradeneeded = (event) => {
    console.info("DB created.");
    DB = request.result;
    DB.onerror = () => console.error("Error, loading DB.");
    if (!DB.objectStoreNames.contains("Users")) {
      const OBJECT_STORE = "Users";
      const objectStore = DB.createObjectStore(OBJECT_STORE, {
        keyPath: "username",
      });
      // Define what data items the objectStore will contain.
      objectStore.createIndex("username", "username", { unique: true });
      objectStore.createIndex("password", "password", { unique: false });
      objectStore.createIndex("email", "email", { unique: false });

      objectStore.transaction.oncomplete = () => {
        // Transaction completed
        console.info(`Object Store ${OBJECT_STORE} created.`);
      };
    }
    if (DB.objectStoreNames.contains("Orders")) DB.deleteObjectStore("Orders");
  };
};

window.onload = () => {
  isSupported()
    ? createDatabase()
    : console.warn("Your browser doesn't support IndexedDB.");
};
