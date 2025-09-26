const $ = document;

const information = $.querySelector(".information");

const audioName = $.querySelector("#audio-name");
const singerName = $.querySelector("#singer-name");

const img = $.querySelector("img");
const audio = $.querySelector("audio");

const prevButton = $.querySelector("#prev");
const minusButton = $.querySelector("#minus");
const playButton = $.querySelector("#play");
const pauseButton = $.querySelector("#pause");
const plusButton = $.querySelector("#plus");
const nextButton = $.querySelector("#next");

const BASE_IMG_PATH = "/assets/images/";
const imgList = ["artists-1.png", "artists-2.png"];

const BASE_AUDIO_PATH = "/media/";
const audioList = ["hayedeh-soghati.mp3", "viguen-mahtab.mp3"];

const MAX = audioList.length;

let index = 0;

const extractName = () => {
  const currentAudio = audioList[index];
  const dotPosition = currentAudio.lastIndexOf(".");
  return currentAudio.slice(0, dotPosition);
};

const updateContent = () => {
  const fullName = extractName();
  const [_singerName, _audioName] = fullName.split("-");

  audioName.innerHTML = _audioName;
  singerName.innerHTML = _singerName;
  
  img.setAttribute("src", `${BASE_IMG_PATH}${imgList[index]}`);
  audio.setAttribute("src", `${BASE_AUDIO_PATH}${audioList[index]}`);
};

const showInformation = () => {
  information.style.visibility = "visible";
};

const hideInformation = () => {
  information.style.visibility = "hidden";
};

prevButton.addEventListener("click", () => {
  index--;
  if (index < 0) index = MAX - 1;
  updateContent();
  hideInformation();
});

minusButton.addEventListener("click", () => {
  audio.currentTime -= 10;
});

playButton.addEventListener("click", () => {
  showInformation();
  audio.play();
});

pauseButton.addEventListener("click", () => {
  hideInformation();
  audio.pause();
});

plusButton.addEventListener("click", () => {
  audio.currentTime += 10;
});

nextButton.addEventListener("click", () => {
  index++;
  if (index > MAX - 1) index = 0;
  updateContent();
  hideInformation();
});

window.addEventListener("load", () => {
  updateContent();
});
