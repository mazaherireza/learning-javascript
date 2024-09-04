const $ = document;

const buttons = $.querySelectorAll(".btn");
const VOWELS = ["a", "e", "i", "o", "u"];
const SEPARATOR = " ";

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const text = event.target.innerText;
    const len = text.length;
    let vowels = [];
    let char;
    for (let index = 0; index < len; index++) {
      char = text[index].toLowerCase();
      if (VOWELS.includes(char)) {
        vowels.push(char);
      }
    }
    event.target.dataset.vowelCharacters = vowels.join(SEPARATOR);
    console.table(event.target.dataset);
  });
});
