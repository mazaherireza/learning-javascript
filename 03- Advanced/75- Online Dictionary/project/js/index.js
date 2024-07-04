import { fetchTranslation } from "./fetch.js";
import { populate } from "./populate.js";

const $ = document;
const input = $.querySelector('input[type="text"]');
const icon = $.querySelector("i.fa");
const audio = $.querySelector("audio");

input.onkeypress = async (event) => {
  if (event.code == "Enter") {
    const word = input.value;
    const translation = await fetchTranslation(word);
    populate(translation);
  }
};

icon.onclick = () => {
  audio.play();
};
