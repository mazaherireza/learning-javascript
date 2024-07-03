/*
  JS Fetch API
  ------------
  The fetch() method, starts the process of fetching a resource from a server.
  ... returns a Promise that resolves to a Response object.

  No need for XMLHttpRequest anymore. <------------- *
*/

/*
  Response: json() method
  -----------------------
  The json() method of the Response interface, takes a Response stream and reads it to completion.
  It returns a promise which resolves with the result of parsing the body text as JSON.

  ... despite the method being named json(), the result is NOT JSON <------------ ***
  but is instead the result of taking JSON as input and parsing it to produce a JS object.

  Return value
  A Promise that resolves to a JS object. <------------ *
*/

import { BASE_URL } from "./URL.js";

const $ = document;

const fullname = $.querySelector("#fullname");

const populateName = ({ first, last }) => {
  fullname.innerHTML = `${first} ${last}`;
};

window.onload = () => {
  const INDEX = 0;
  fetch(BASE_URL)
    .then((response) => {
      if (response.status == 200) {
        // When the fetch is successful, we read and parse the data using json() <--------- ***
        return response.json();
      }
    })
    .then((data) => {
      populateName(data.results[INDEX].name);
    })
    .catch(console.error);
};
