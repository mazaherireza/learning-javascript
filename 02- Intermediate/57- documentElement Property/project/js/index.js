const $ = document;

const btn = $.querySelector("button");

btn.addEventListener("click", () => {
  $.documentElement.style.setProperty("--primary-color", "green");
  // console.log($.html); <----------- undefined
  console.log($.documentElement.style); // <------------------- CSSStyleDeclaration
  console.log(
    `Now primary color is: ${$.documentElement.style.getPropertyValue(
      "--primary-color"
    )}`
  );
});

/*
  The documentElement property returns a document's element (as an Element object).
  ... is read-only.
  For HTML documents the returned object is the <html> element.
*/
