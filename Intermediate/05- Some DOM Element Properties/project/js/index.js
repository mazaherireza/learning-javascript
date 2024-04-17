const title = document.querySelector("#playground-title");
title.style.color = "#78ffd6";
title.style.background = "#000";
title.style.padding = "0.5em";
title.style.borderRadius = "0.25em";
title.style.fontWeight = "bold";

const items = document.querySelectorAll(".list-item");

// innerHTML, innerText, textContent (for headings, paragraph, ...)
items[0].innerHTML = "First";
items[1].innerText = "Second";
items[2].textContent = "Third";

const input = document.querySelector("#programming-language");
input.value = "VueJS";
