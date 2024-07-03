/*
  Using the Fetch API
  -------------------
  ... It also provides a global fetch method ... to fetch resources asynchronously across the network.
  ... XMLHttpRequest that is a callback-based API, Fetch is promise-based. <----------- ***
  ... integrates advanced HTTP concepts such as CORS ...
*/

const display = (books) => {
  // printing the data to the console
  console.table(books);
};

// Fetch is based on async and await. <---------------- ***
async function getBooks() {
  // fetch a JSON file across the network
  const response = await fetch("URL");
  // parsing it
  const books = await response.json();
  display(books);
}

/*
  The simplest use of fetch(), takes one argument (the path to the resource you want to fetch)
  and does NOT directly return the JSON response body ...
  ... a promise that resolves with a Response object.

  The Response object, ... does NOT directly contain the actual JSON response body
  but is instead a representation of the entire HTTP response.
  ... to extract the JSON body content from the Response object, we use the json() method
  which returns a second promise that resolves with the result of parsing the response body text as JSON.
*/

// The fetch() method can optionally accept a second parameter, an init object ...
async function post(URL = "", data = {}) {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // body DT must match "Content-Type" header
    body: JSON.stringify(data),
  });
  // parses JSON response into native JS objects <-------------- ***
  return response.json();
}

post("fake-url", { fullname: "Reza Mazaheri" }).then((data) => {
  // JSON data parsed by data.json() call <--------------- ***
  console.log(data);
});

// =========================================================

const URL = "localhost:3000/fake-api/users";

const init = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "rezamazaheri",
    firstName: "Reza",
    lastName: "Mazaheri",
  }),
};

fetch(URL, init)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => console.log(data));
