const $ = document;

const information = $.querySelector(".information");

const audioName = $.querySelector("#audio-name");
const singerName = $.querySelector("#singer-name");

const img = $.querySelector("#img");
const audio = $.querySelector("audio"); // HTMLAudioElement

const prevBtn = $.querySelector("#prev");
const minus = $.querySelector("#minus");
const playBtn = $.querySelector("#play");
const pauseBtn = $.querySelector("#pause");
const plus = $.querySelector("#plus");
const nextBtn = $.querySelector("#next");

const BASE_IMG_PATH = "./assets/images/";
const imgList = ["First.png", "Second.png"];

const BASE_AUDIO_PATH = "./media/";
const audioList = ["Hayedeh_Soghati.mp3", "Viguen_Mahtab.mp3"];

const MAX = audioList.length;

let index = 0;

const extractName = () => {
  const currentAudio = audioList[index];
  const dotPosition = currentAudio.lastIndexOf(".");
  return currentAudio.slice(0, dotPosition);
};

const updateContent = () => {
  const fullName = extractName();
  const [_singerName, _audioName] = fullName.split("_");

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

prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) index = MAX - 1;
  updateContent();
  hideInformation();
});

minus.addEventListener("click", () => {
  audio.currentTime -= 10;
});

playBtn.addEventListener("click", () => {
  showInformation();
  audio.play();
});

pauseBtn.addEventListener("click", () => {
  hideInformation();
  audio.pause();
});

plus.addEventListener("click", () => {
  audio.currentTime += 10;
});

nextBtn.addEventListener("click", () => {
  index++;
  if (index > MAX - 1) index = 0;
  updateContent();
  hideInformation();
});

window.addEventListener("load", () => {
  updateContent();
});
