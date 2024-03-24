const motto = "I Love JavaScript & VueJS";

console.log(
  motto.slice(
    motto.indexOf("JavaScript"),
    motto.indexOf("JavaScript") + "JavaScript".length
  )
);
console.log("Motto is: ", motto); // slice doesn't mutate original text.

console.log(
  motto.substring(motto.indexOf("VueJS"), "I Love JavaScript & VueJS".length)
);
console.log("Motto is: ", motto); // substring doesn't mutate original text.
