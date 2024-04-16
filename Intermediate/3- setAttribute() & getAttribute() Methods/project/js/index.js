const main = document.getElementById("main");
main.setAttribute("class", "wrapper");

const listItems = document.getElementsByClassName("list-item");

const firstItem = listItems[0];
firstItem.setAttribute("id", "first");

const value = firstItem.getAttribute("id");
console.log("value of id is: ", value);
