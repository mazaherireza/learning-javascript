const $ = document;
const typing = $.querySelector("#typing");

const typewriter = new Typewriter(typing, {
  loop: true,
});

const FULL_NAME = "Reza Mazaheri";
const OCCUPATION = "Frontend Developer";

typewriter
  .typeString("Hello World!")
  .pauseFor(2_000)
  .deleteAll()
  .typeString(`I'm ${FULL_NAME}`)
  .pauseFor(2_500)
  .deleteChars(FULL_NAME.length)
  .typeString(`a ${OCCUPATION}.`)
  .pauseFor(3_000)
  .start();
