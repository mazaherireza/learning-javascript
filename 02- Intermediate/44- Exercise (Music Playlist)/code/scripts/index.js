const $ = document;

const icons = $.querySelectorAll("i.fa");
const audios = $.querySelectorAll("audio");
const singerWrapper = $.querySelector(".singer-wrapper");
const singer = $.querySelector("#singer-name");

let key;

icons.forEach((icon) => {
  icon.addEventListener("click", (event) => {
    key = event.target.dataset.singer;

    singer.innerHTML = key;
    singerWrapper.style.visibility = "visible";

    audios.forEach((audio) => {
      if (audio.dataset.singer === key) {
        audio.currentTime = 0;
        audio.play();
      } else {
        audio.pause();
      }
    });
  });
});
