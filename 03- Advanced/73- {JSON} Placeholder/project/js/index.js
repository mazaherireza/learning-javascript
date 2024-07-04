import { generateRandom } from "./random.js";
import { populateJSON } from "./populate.js";

const $ = document;
const loading = $.querySelector("#loading");
const _JSON = $.querySelector(".JSON");

window.onload = () => {
  const albumId = generateRandom();
  loading.style.visibility = "visible";
  fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      populateJSON(data);
      loading.style.visibility = "hidden";
    })
    .catch((error) => {
      console.error(error);
      _JSON.innerHTML = error;
    });
};
