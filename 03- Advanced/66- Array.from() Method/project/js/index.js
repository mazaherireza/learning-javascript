/*
  Array.from()
  ------------
  ... static method creates a new, shallow-copied Array instance from an iterable or array-like object.
  
  Parameters
  arrayLike <------------- objects with length property and indexed elements.
  An iterable or array-like object convert to an array.
  ...
  Return value 
  A new Array instance.
*/

// Array from a Nodelist <----------------- *
import { range } from "./utils.js";

const $ = document;
const images = $.querySelectorAll("img");
const mapFn = (img) => img.src;
const sources = Array.from(images, mapFn);
const insecureSources = sources.filter((link) => link.startsWith("http://"));

console.log(range(1, 17, 3));

const alphabets = range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map((num) =>
  String.fromCharCode(num)
);
console.log(alphabets);
