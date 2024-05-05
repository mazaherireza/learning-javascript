const $ = document;

const img = $.querySelector("#img");
const num = $.querySelector("#num");
const total = $.querySelector("#total");
const prev = $.querySelector("#prev");
const next = $.querySelector("#next");

const PATH = "./assets/images/";
const photos = [
  "Vivian_Maier_Self_Portrait.jpg",
  "Vivian_Maiter_Street_Photgraphy1.jpg",
  "Vivian_Maiter_Street_Photgraphy2.jpg",
  "Vivian_Maiter_Street_Photgraphy3.jpg",
  "Vivian_Maiter_Street_Photgraphy4.jpg",
];

let selectedIndex = 0;
const TOTAL = photos.length;

total.innerHTML = TOTAL;

const showSlide = () => {
  img.src = `${PATH}${photos[selectedIndex]}`;
  img.style.visibility = "visible";
  num.innerHTML = selectedIndex + 1;
};

showSlide();

prev.addEventListener("click", () => {
  selectedIndex--;
  if (selectedIndex < 0) selectedIndex = TOTAL - 1;
  showSlide();
});

const goToNext = () => {
  selectedIndex++;
  if (selectedIndex > TOTAL - 1) selectedIndex = 0;
  showSlide();
};

next.addEventListener("click", goToNext);

const interval = setInterval(() => {
  showSlide();
  goToNext();
}, 2_500);

window.addEventListener("unload", () => {
  clearInterval(interval);
});
