/*
  AOS (Animate On Scroll) Library
  https://michalsnik.github.io/aos/
*/

const $ = document;
const container = $.querySelector("#container-content");

const imgs = [
  "./assets/images/1.png",
  "./assets/images/2.png",
  "./assets/images/3.png",
];

const renderToDOM = () => {
  imgs.forEach((img) => {
    container.insertAdjacentHTML(
      "beforeend",
      `<div data-aos="fade-up">
            <img src=${img} alt="Portrait" />
        </div>`
    );
  });
};

window.onload = () => {
  renderToDOM();
};
