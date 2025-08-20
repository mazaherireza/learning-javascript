const $ = document;
const main = $.querySelector("main");
console.log(main);
main.setAttribute("class", "wrapper");

const listItems = $.getElementsByClassName("list-item");

const firstItem = listItems[0];
firstItem.setAttribute("id", "first");

const attributes = firstItem.getAttributeNames();
const ATTRIBUTE = "id";
const index = attributes.findIndex((attribute) => attribute === ATTRIBUTE);
if (index >= 0) {
  const value = firstItem.getAttribute("id");
  console.log("Value of id is: ", value);
}
