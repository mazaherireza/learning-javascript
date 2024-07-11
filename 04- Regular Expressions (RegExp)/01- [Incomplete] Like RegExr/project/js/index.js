import { constructRegex } from "./utils.js";

const $ = document;
const regexInput = $.querySelector("#regex");
const text = $.querySelector("#text");

const applyRegex = (regex) => {
  const result = regex.exec(text.innerHTML);
  console.log(result);
};

regexInput.onkeyup = (event) => {
  if (event.key == "Enter") {
    const regex = constructRegex(regexInput.value);
    applyRegex(regex);
  }
};

const populateText = () => {
  text.innerHTML = `
    RegExr was created by gskinner.com.
    Edit the Expression & Text to see matches. Roll over matches or the expression for details. 
    PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode.

    The side bar includes a Cheatsheet, full Reference, and Help. 
    You can also Save & Share with the Community and view patterns you create or favorite in My Patterns.

    Explore results with the Tools below. Replace & List output custom results. 
    Details lists capture groups. Explain describes your expression in plain English.
  `;
};

window.onload = () => {
  populateText();
};
