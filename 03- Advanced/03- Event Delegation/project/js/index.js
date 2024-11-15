const $ = document;
const divisions = $.querySelectorAll(".division");

divisions.forEach((division) => {
  division.addEventListener("click", (event) => {
    console.log(event.target);
    console.log(division.getAttribute("class").split(" ")[1]);
  });
});
