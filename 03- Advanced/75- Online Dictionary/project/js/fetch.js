const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";

const result = document.querySelector(".result");

const fetchTranslation = async (word) => {
  try {
    result.style.visibility = "hidden";
    const response = await fetch(`${BASE_URL}/${word}`);
    const data = await response.json();
    result.style.visibility = "visible";
    return Object.entries(data)[0][1];
  } catch (error) {
    console.error(error);
  }
};

export { fetchTranslation };
