const img = document.querySelector("#img");
const btn = document.querySelector("#btn");

let beforeEdit = true;

const toggleImg = () => {
  if (beforeEdit) {
    img.setAttribute("src", "./assets/images/Before.png");
    btn.innerHTML = "After";
  } else {
    img.setAttribute("src", "./assets/images/After.png");
    btn.innerHTML = "Before";
  }
  beforeEdit = !beforeEdit;
};
