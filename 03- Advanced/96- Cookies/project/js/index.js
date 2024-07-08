import { calculateExpirationDate } from "./utils.js";

const $ = document;
const deleteCookie = (key) => {
  $.cookie = `${key}=; path=/; expires=${calculateExpirationDate(1, "Past")}`;
};

window.onload = () => {
  const pairs = ["username=rezamazaheri", "fullname=Reza Mazaheri"];
  pairs.forEach((nameValue) => {
    $.cookie = `${nameValue}; path=/; expires=${calculateExpirationDate(
      2,
      "Future"
    )}`;
  });
  const splittedCookies = $.cookie.split("; ");
  const KEY = "fullname";
  const wantedPair = splittedCookies.find((cookie) => {
    return cookie.startsWith(`${KEY}=`);
  });
  const [key, value] = wantedPair.split("=");
  console.log(value);
};

const INTERVAL = 5_000;

const timeout = setTimeout(() => {
  deleteCookie("username");
}, INTERVAL);

window.onunload = () => {
  clearTimeout(timeout);
};
