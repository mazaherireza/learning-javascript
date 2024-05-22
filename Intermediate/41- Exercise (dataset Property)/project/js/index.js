const $ = document;

const buttons = $.querySelectorAll(".btn");

const VOWELS = ["a", "e", "i", "o", "u"];

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.table(event.target.dataset);
    const text = event.target.innerText;
    const len = text.length;
    let vowels = [];
    for (let index = 0; index < len; index++) {
      const char = text[index].toLowerCase();
      if (VOWELS.includes(char)) {
        vowels.push(char);
      }
    }
    const SEPARATOR = " ";
    event.target.dataset.vowelCharacters = vowels.join(SEPARATOR);
    console.table(event.target.dataset);
  });
});
