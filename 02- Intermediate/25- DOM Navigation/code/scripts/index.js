const $ = document;

const wrapper = $.querySelector("#wrapper");
const heading3 = $.querySelector("#heading3");

console.log(heading3.parentElement);
console.log(heading3.parentNode);
console.log(wrapper.childNodes);
console.log(wrapper.childElementCount);
console.log(wrapper.children);
console.log("First child is: ", wrapper.firstChild);
console.log("Last element child is", wrapper.lastElementChild);

const paragraph = $.querySelector("#paragraph");

console.log(paragraph.previousElementSibling);
console.log(paragraph.previousSibling);
console.log(paragraph.previousSibling.previousSibling);
console.log(paragraph.nextElementSibling);
console.log(paragraph.nextSibling);
