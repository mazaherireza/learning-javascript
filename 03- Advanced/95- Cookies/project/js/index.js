import { calculateExpirationDate } from "./utils.js";

const $ = document;
window.onload = () => {
  const exdays = calculateExpirationDate(2);
  const pairs = ["username=rezamazaheri", "fullname=Reza Mazaheri"];
  pairs.forEach((nameValue) => {
    $.cookie = `${nameValue}; path=/; expires=${exdays}`;
  });
  console.log($.cookie); // username=rezamazaheri; fullname=Reza Mazaheri
  const splittedCookies = $.cookie.split("; ");
  const KEY = "fullname";
  const wantedPair = splittedCookies.find((cookie) => {
    console.log(cookie);
    return cookie.startsWith(`${KEY}=`);
  });
  const value = wantedPair.split("=")[1];
  console.log(value);
};
