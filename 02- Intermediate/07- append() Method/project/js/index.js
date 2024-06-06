const $ = document;
const unorderedList = $.querySelector("ul");

const liElement = $.createElement("li");
liElement.innerHTML = "4th";
const CLASS_NAME = "list-item";
liElement.setAttribute("class", CLASS_NAME);
unorderedList.append(liElement);
/* 
 Or
 unorderedList.appendChild(liElement)
 */
