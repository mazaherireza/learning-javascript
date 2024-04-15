const main = document.getElementById("main");
console.log(`main is: ${main}`); // main is: [object HTMLElement]

const listItems = document.getElementsByClassName("list-item");
console.log(`listItems are: ${listItems}`); // listItems are: [object HTMLCollection]

console.log(listItems);
console.log(listItems[0]);

const section = document.getElementsByTagName("section");
console.log("section is: ", section);

// querySelector(CSSSelector)
const firstLiElement = document.querySelector(".list-item");
console.log(`firstLiElement is: ${firstLiElement}`); // firstLiElement is: [object HTMLLIElement]
console.log("firstLiElement is: ", firstLiElement);

const liElements = document.querySelectorAll(".list-item");
console.log(`liElements are: ${liElements}`); // liElements are: [object NodeList]
console.log("liElements are: ", liElements);

const playground = document.querySelector("#playground");
console.log(`playground is: ${playground}`); // playground is: [object HTMLElement]
console.log("playground is: ", playground);
