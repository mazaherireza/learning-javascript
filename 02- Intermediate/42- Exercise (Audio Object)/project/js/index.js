const $ = document;

const audio = $.querySelector("audio"); // HTMLAudioElement
const playBtn = $.querySelector("#play");
const pauseBtn = $.querySelector("#pause");
const speedBtn = $.querySelector("#speed");

const icon = $.querySelector(".fa-music");

playBtn.addEventListener("click", () => {
  audio.play();
  icon.style.visibility = "visible";
});

pauseBtn.addEventListener("click", () => {
  audio.pause();
  icon.style.visibility = "hidden";
});

speedBtn.addEventListener("click", () => {
  const speed = +speedBtn.innerHTML.split("x")[0];
  audio.playbackRate = speed;
});
