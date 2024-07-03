/*
  Response: json() method
  -----------------------
  Return value
  A Promise that resolves to a JavaScript object.
*/

const request = new Request("/js/books.json"); // Starts with / NOT ./
fetch(request)
  .then((response) => response.json())
  .then((data) => {
    console.table(data.books);
    for (const book of data.books) console.log(book.title);
  });

/*
  Using the Fetch API
  -------------------
  ...
  Aborting a fetch
  ----------------
  To abort incomplete fetch() operations, use the AbortController and AbortSignal interfaces.
*/

const URL = "/resource/Audio.mp3";
const controller = new AbortController();
const signal = controller.signal;

const $ = document;
const downloadBtn = $.querySelector("#download");
const abortBtn = $.querySelector("#abort");
abortBtn.setAttribute("disabled", true);

downloadBtn.addEventListener("click", async () => {
  abortBtn.removeAttribute("disabled");
  try {
    const response = await fetch(URL, { signal }); // <------------ ***
    console.log("Download Complete", response);
  } catch (error) {
    console.error(`Download error: ${error.message}`);
  }
});

abortBtn.addEventListener("click", () => {
  abortBtn.setAttribute("disabled", true);
  controller.abort(); // <----------------- ***
  console.log("Download aborted");
});

/*
  Sending a request with credentials included
  -------------------------------------------
  To cause browsers to send a request with credentials included on both same-origin and cross-origin calls,
  add credentials: 'include' to the init object ...

  If you only want to send credentials if the reuqest URL is on the same origin as the calling script,
  add credentials: 'same-origin'.
*/

fetch("https://example.com", {
  credentials: "same-origin",
});

/*
  Uploading JSON data
  -------------------
  Use fetch to POST JSON-encoded data.
*/
