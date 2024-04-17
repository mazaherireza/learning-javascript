const main = document.getElementsByTagName("main")[0];
main.setAttribute("class", "wrapper");
console.log(main);

const listItems = document.getElementsByClassName("list-item");

const firstItem = listItems[0];
firstItem.setAttribute("id", "first");

const value = firstItem.getAttribute("id");
console.log(`Value of id is: ${value}`);
