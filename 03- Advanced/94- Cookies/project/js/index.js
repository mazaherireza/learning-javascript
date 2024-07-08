import { calculateExpirationDate } from "./utils.js";

const $ = document;
window.onload = () => {
  const exday = calculateExpirationDate(10);
  $.cookie = `username=rezamazaheri;path=/;expires=${exday}`;
  console.log($.cookie); // username=rezamazaheri
};
