const $ = document;

const text = $.querySelector("#text");
const destination = $.querySelector("#destination");

text.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("_id", event.target.id);
});

destination.addEventListener("dragover", (event) => {
  event.preventDefault();
});

destination.addEventListener("drop", (event) => {
  const element = $.querySelector(`#${event.dataTransfer.getData("_id")}`);
  event.target.append(element);
});
