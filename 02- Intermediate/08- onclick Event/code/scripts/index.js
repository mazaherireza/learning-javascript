const $ = document;

const hidden = () => {
  const btn = $.querySelector("button");
  btn.style.visibility = "hidden";
};

const applyStyle = () => {
  const title = $.querySelector("#playground-title");
  title.style.color = "#78ffd6";
  title.style.backgroundColor = "#000";
  title.style.padding = "0.5rem";
  title.style.borderRadius = "0.25rem";
  title.style.fontWeight = "bold";
};

const handler = () => {
  applyStyle();
  hidden();
};
