import { calculateExpirationDate } from "./utils.js";

const $ = document;
window.onload = () => {
  const exdays = calculateExpirationDate(10);
  $.cookie = `username=rezamazaheri;path=/;expires=${exdays}`;
  console.log($.cookie); // username=rezamazaheri
};
