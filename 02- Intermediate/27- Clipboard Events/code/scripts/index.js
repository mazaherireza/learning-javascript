const $ = document;

const editor = $.querySelector("#editor");

const copyHandler = (event) => {
  console.log(event.type);
};

const cutHandler = (event) => {
  console.log(event.type);
};

const pasteHandler = (event) => {
  console.log(event.type);
};

const ACTIONS = ["copy", "cut", "paste"];

ACTIONS.forEach((action) => {
  editor.addEventListener(action, (event) => {
    if (action === "copy") {
      copyHandler(event);
    } else if (action === "cut") {
      cutHandler(event);
    } else {
      pasteHandler(event);
    }

    event.preventDefault();
  });
});
