const $ = document;

const hour = $.querySelector(".hour");
const minute = $.querySelector(".minute");
const second = $.querySelector(".second");

let timer;

const prependLeadinZero = (value) => `0${value}`;
const setTimer = () => {
  timer = setInterval(() => {
    const now = new Date();
    hour.innerHTML =
      now.getHours() < 10 ? prependLeadinZero(now.getHours()) : now.getHours();
    minute.innerHTML =
      now.getMinutes() < 10
        ? prependLeadinZero(now.getMinutes())
        : now.getMinutes();
    second.innerHTML =
      now.getSeconds() < 10
        ? prependLeadinZero(now.getSeconds())
        : now.getSeconds();
  }, 1000);
};

window.addEventListener("unload", () => {
  clearInterval(timer);
});

window.addEventListener("load", () => {
  setTimer();
});
