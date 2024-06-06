const $ = document;

const main = $.getElementsByTagName("main");

const listItems = $.getElementsByClassName("list-item");
console.log(`listItems are: ${listItems}`); // listItems are: [object HTMLCollection]

console.log(main);
console.log(listItems);
console.log(listItems[0]);

const section = $.getElementsByTagName("section");
console.log("section is: ", section);

const firstLiElement = $.querySelector(".list-item");
console.log(`firstLiElement is: ${firstLiElement}`); // firstLiElement is: [object HTMLLIElement]
console.log("firstLiElement is: ", firstLiElement);

const liElements = $.querySelectorAll(".list-item");
console.log(`liElements are: ${liElements}`); // liElements are: [object NodeList]
console.log("liElements are: ", liElements);

const playground = $.querySelector("#playground");
console.log(`playground is: ${playground}`); // playground is: [object HTMLElement]
console.log("playground is: ", playground);
