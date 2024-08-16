const scene = document.querySelector("#scene");
const parallaxInstance = new Parallax(scene, {
  relativeInput: true,
});

parallaxInstance.friction(0.25, 0.25);