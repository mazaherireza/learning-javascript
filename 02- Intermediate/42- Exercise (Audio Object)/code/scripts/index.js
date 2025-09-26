const $ = document;

const audio = $.querySelector("audio");
const playButton = $.querySelector("#play");
const pauseButton = $.querySelector("#pause");
const speedButton = $.querySelector("#speed");

const PLAY_SPEEDS = [1, 1.5, 2];
let playSpeedIndex = 1;

const icon = $.querySelector(".fa-music");

playButton.addEventListener("click", () => {
  audio.play();
  icon.style.visibility = "visible";
});

pauseButton.addEventListener("click", () => {
  audio.pause();
  icon.style.visibility = "hidden";
});

const changePlaySpeed = () => {
  playSpeedIndex++;
  if (playSpeedIndex > PLAY_SPEEDS.length - 1) {
    playSpeedIndex = 0;
  }

  speedButton.innerHTML = `${PLAY_SPEEDS[playSpeedIndex]}x`;
};

speedButton.addEventListener("click", () => {
  const speed = +speedButton.innerHTML.split("x")[0];
  audio.playbackRate = speed;

  changePlaySpeed();
});
