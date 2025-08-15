const following = document.querySelector("#following");

const MAX = 2_065;

let i = 0;

const counter = setInterval(() => {
  if (i > MAX) clearInterval(counter);
  else {
    following.innerHTML = i;
    i++;
  }
}, 0.1);
