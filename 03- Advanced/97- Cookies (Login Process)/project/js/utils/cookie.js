import { calculateExpirationDate } from "./expire.js";

const $ = document;

const doesExist = (key) => {
  const keyValues = $.cookie.split("; ");
  const index = keyValues.findIndex((keyValue) => keyValue.startsWith(key));
  return index == -1 ? false : true;
};

const setCookie = (key, value) => {
  if (!doesExist(key))
    $.cookie = `${key}=${value}; path=/; expires=${calculateExpirationDate(100)}"`;
};

export { doesExist, setCookie };
