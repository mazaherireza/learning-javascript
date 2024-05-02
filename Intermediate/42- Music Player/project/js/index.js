const $ = document;

const icons = $.querySelectorAll("i");
const audioList = $.querySelectorAll("audio");
const singer = $.querySelector("#singer");

let key;
icons.forEach((mediaCard) => {
  mediaCard.addEventListener("click", (event) => {
    key = event.target.dataset.singer;
    audioList.forEach((audio) => {
      singer.innerHTML = key;
      if (audio.dataset.singer == key) {
        audio.currentTime = 0;
        audio.play();
      } else {
        audio.pause();
      }
    });
  });
});
