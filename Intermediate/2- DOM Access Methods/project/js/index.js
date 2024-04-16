const main = document.getElementById("main");

const listItems = document.getElementsByClassName("list-item");

console.log(listItems);
console.log(listItems[0]);

const section = document.getElementsByTagName("section");
console.log("section is: ", section);

const firstLiElement = document.querySelector(".list-item");
console.log("firstLiElement is: ", firstLiElement);

const liElements = document.querySelectorAll(".list-item");
console.log("liElements are: ", liElements);

const playground = document.querySelector("#playground");
console.log("playground is: ", playground);
