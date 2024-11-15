const $ = document;

$.addEventListener(
  "click",
  (event) => {
    console.log(event);
  },
  { once: true }
);
