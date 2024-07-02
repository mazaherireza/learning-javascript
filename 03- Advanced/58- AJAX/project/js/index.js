/*
  AJAX: Asynchronous JavaScript And XML
  -------------------------------------
  AJAX is a technique for accessing web servers from a web page.
  ...
  AJAX just uses a combination of:
  A browser built-in XMLHttpRequest object (to request data from a web server)
  JS and HTML DOM (to display or use the data)
  ...
  AJAX applications might use XML to transport data,
  but it is equally common to transport data as plain text or JSON text.
  ...
  ... it is possible to update parts of a web page, without relaoding the whole page. <--------- **
*/

const $ = document;
const METHOD = "GET";

function display() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200)
      $.getElementById("demo").innerHTML = this.responseText;
  };
  xhttp.open(METHOD, "ajax-info.text", true);
  xhttp.send();
}

window.onload = () => {
  display();
};
