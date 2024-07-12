import { emojis } from "./emojis.js";

const $ = document;
const textarea = $.querySelector("textarea");

const regex = /:\)/g;

textarea.onkeyup = () => {
  emojis.keys().forEach((characters) => {
    if (textarea.value.includes(characters))
      textarea.value = textarea.value.replace(regex, emojis.get(characters));
  });
};
