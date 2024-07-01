const TIMEOUT = 2_000;

const fetch = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetch");
      resolve({ id: "F_1001", message: "FETCH_SUCCESS" });
    }, TIMEOUT);
  });
};

const parse = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Parse");
      console.log(`ID is: ${data.id}`);
      resolve({ id: "P_1001" });
    }, TIMEOUT);
  });
};

const display = (response) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Display");
      console.log(`ID is: ${response.id}`);
      resolve(response);
    }, TIMEOUT);
  });
};

fetch().then(parse).then(display);
