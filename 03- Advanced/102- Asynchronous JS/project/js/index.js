import { BASE_URL } from "./URL.js";

async function getPosts() {
  try {
    const response = await fetch(BASE_URL);
    const posts = await response.json();
    console.log(posts);
  } catch (error) {
    console.error(error);
  }
}

window.onload = () => {
  getPosts();
};
