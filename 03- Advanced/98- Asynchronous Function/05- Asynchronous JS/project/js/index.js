import { BASE_URL } from "./URL.js";

async function getPosts() {
  try {
    const response = await fetch(BASE_URL);
    const posts = await response.json();
    console.table(posts);
  } catch (error) {
    console.error(error);
  }
}

window.onload = () => {
  getPosts();
};
