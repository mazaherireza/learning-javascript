import isSupported from "./utils.js";

let DB;

const createDatabase = () => {
  const NAME = "Learning";
  const VERSION = 1;
  const request = indexedDB.open(NAME, VERSION);
  request.onerror = (error) => {
    console.error("IndexedDB error: ", error);
  };
  request.onsuccess = (event) => {
    console.info("Successful DB connection."); // 2
    // Create the DB connection.
    DB = request.result;
    // Or DB = event.target.result
  };
  request.onupgradeneeded = (event) => {
    // DB Schema will be defined here.
    console.info("DB Created."); // 1
    DB = request.result;
  };
};

window.onload = () => {
  isSupported()
    ? createDatabase()
    : console.warn("Your browser doesn't support IndexedDB.");
};
