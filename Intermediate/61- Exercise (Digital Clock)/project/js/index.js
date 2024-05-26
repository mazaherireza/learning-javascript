const $ = document;

const hour = $.querySelector(".hour");
const minute = $.querySelector(".minute");
const second = $.querySelector(".second");

const fullDate = $.querySelector("#date");

const prependLeadingZero = (value) => `0${value}`;

let timer;

const setTimer = () => {
  timer = setInterval(() => {
    const now = new Date();

    const h = now.getHours();
    hour.innerHTML = h < 10 ? prependLeadingZero(h) : h;

    const m = now.getMinutes();
    minute.innerHTML = m < 10 ? prependLeadingZero(m) : m;

    const s = now.getSeconds();
    second.innerHTML = s < 10 ? prependLeadingZero(s) : s;
  }, 1_000);
};

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const WEEK_DAY = [
  "Sunday",
  "Monday",
  "Tuseday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const populateDate = () => {
  const now = new Date();
  const date = now.getDate();
  const weekDay = WEEK_DAY[now.getDay()];
  const month = MONTHS[now.getMonth()];
  const year = now.getFullYear();
  fullDate.innerHTML = `${weekDay}, ${date} ${month} ${year}`;
};

window.addEventListener("unload", () => {
  clearInterval(timer);
});

window.addEventListener("load", () => {
  setTimer();
  populateDate();
});
