const $ = document;

const form = $.querySelector("#form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // <-------------------- *
  /*
    The preventDefault() method of the Event interface, tells the user agent that,
    if the event does not get explicitly handled, its default action should not be taken as
    it normally would be.
  */
  console.log(event);
});

const username = $.querySelector("#username");
username.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.key == "F12") {
    // event.cancelable is true so ...
    event.preventDefault();
  }
});
