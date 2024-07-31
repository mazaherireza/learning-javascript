let DB;

const createDatabase = (name, version, storeName) => {
  const request = indexedDB.open(name, version);

  request.onsuccess = (event) => {
    DB = request.result;
  };

  request.onerror = (error) => {
    console.error(error);
  };

  request.onupgradeneeded = (event) => {
    DB = request.result;
    DB.onerror = () => console.error("Error, loading DB.");
    if (!DB.objectStoreNames.contains(storeName)) {
      const objectStore = DB.createObjectStore(storeName, {
        keyPath: "id",
      });
      objectStore.createIndex("id", "id", { unique: true });
      objectStore.createIndex("firstName", "firstName", { unique: false });
      objectStore.createIndex("lastName", "lastName", { unique: false });
      objectStore.createIndex("email", "email", { unique: false });

      objectStore.transaction.oncomplete = (event) => {
        console.info(`Object store ${storeName} created.`);
      };
    }
  };
};

const add = (storeName, item) => {
  const transaction = DB.transaction(storeName, "readwrite");
  transaction.onerror = (error) => {
    console.warn(error);
  };
  transaction.onsuccess = (event) => {
    console.info(event);
  };

  const store = transaction.objectStore(storeName);
  store.add(item);
};

const get = (storeName) => {
  const transaction = DB.transaction(storeName, "readonly");
  transaction.onerror = (error) => {
    console.warn(error);
  };
  transaction.oncomplete = (event) => {
    console.info(event);
  };

  const store = transaction.objectStore(storeName);
  const request = store.getAll();
  console.table(request.result);
  return request.result;
};