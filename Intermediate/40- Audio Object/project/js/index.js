const $ = document;

const audio = $.querySelector("audio"); // HTMLAudioElement
const playBtn = $.querySelector("#play");
const pauseBtn = $.querySelector("#pause");
const rateBtn = $.querySelector("#rate");

playBtn.addEventListener("click", () => {
  audio.play();
});

pauseBtn.addEventListener("click", () => {
  audio.pause();
});

rateBtn.addEventListener("click", () => {
  audio.playbackRate = 1.5;
});
