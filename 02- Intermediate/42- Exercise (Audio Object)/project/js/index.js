const $ = document;

const audio = $.querySelector("audio"); // HTMLAudioElement
const playBtn = $.querySelector("#play");
const pauseBtn = $.querySelector("#pause");
const rateBtn = $.querySelector("#rate");

const icon = $.querySelector(".fa-music");

playBtn.addEventListener("click", () => {
  audio.play();
  icon.style.visibility = "visible";
});

pauseBtn.addEventListener("click", () => {
  audio.pause();
  icon.style.visibility = "hidden";
});

rateBtn.addEventListener("click", () => {
  const num = +rateBtn.innerHTML.split("x")[0];
  audio.playbackRate = num;
});
