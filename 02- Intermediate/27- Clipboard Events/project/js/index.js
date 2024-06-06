const $ = document;

const editor = $.querySelector("#editor");

const copyHandler = (event) => {
  console.log(event.type);
  event.preventDefault();
};

const cutHandler = (event) => {
  console.log(event.type);
  event.preventDefault();
};

const pasteHandler = (event) => {
  console.log(event.type);
  event.preventDefault();
};

const ACTIONS = ["copy", "cut", "paste"];
ACTIONS.forEach((action) => {
  editor.addEventListener(action, (event) => {
    if (action == "copy") {
      copyHandler(event);
    } else if (action == "cut") {
      cutHandler(event);
    } else {
      pasteHandler(event);
    }
  });
});
