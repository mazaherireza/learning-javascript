const $ = document;
const divisions = $.querySelectorAll(".division");

divisions.forEach((division) => {
  division.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log(event.target);
    console.log(division.getAttribute("class").split(" ")[1]);
  });
});

// The stopPropagation() method, prevents propagation of the same event from being called.
