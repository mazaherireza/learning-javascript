import { suggestions } from "./suggestions.js";

const $ = document;
const keySearch = $.querySelector("#key-search");
const form = $.querySelector("form");

const isMatched = (key, word, limit) => {
  return word.substring(0, limit).toUpperCase() == key.toUpperCase();
};

const populateMatchedText = (word, limit) => {
  return `<b>${word.substring(0, limit)}</b>${word.substring(limit)}`;
};

const clearSuggestionList = () => {
  let fragment = $.createDocumentFragment();
  fragment = $.querySelector(".wrapper");
  for (const child of fragment.children) {
    if (child.classList.contains("suggestion-wrapper")) child.remove();
  }
  currentFocus = -1;
};

const fillKeySearch = (selected) => {
  keySearch.value = selected;
  clearSuggestionList();
};

const populateSuggestionList = (key, parent) => {
  const fragment = $.createDocumentFragment();
  const LIMIT = key.length;
  suggestions.forEach((suggestion) => {
    if (isMatched(key, suggestion, LIMIT)) {
      const matchedElement = $.createElement("div");
      matchedElement.className = "matched-element";
      const matchedText = populateMatchedText(suggestion, LIMIT);
      matchedElement.innerHTML = matchedText;
      fragment.append(matchedElement);
      matchedElement.addEventListener("click", () => {
        fillKeySearch(suggestion);
      });
    }
  });
  parent.append(fragment);
};

keySearch.addEventListener("input", (event) => {
  const key = keySearch.value.trim();
  if (key) {
    clearSuggestionList();
    const division = $.createElement("div");
    division.className = "suggestion-wrapper";
    event.target.parentNode.appendChild(division);
    populateSuggestionList(key, division);
  }
});

const removeHighlight = (list) => {
  for (const child of list.children) {
    if (child.classList.contains("highlight"))
      child.classList.remove("highlight");
  }
};

const highlightSuggestion = (index, list) => {
  list.children[index].classList.add("highlight");
};

let currentFocus = -1;
keySearch.addEventListener("keydown", (event) => {
  const suggestionWrapper = $.querySelector(".suggestion-wrapper");
  if (suggestionWrapper) {
    if (event.code == "ArrowDown") {
      currentFocus++;
      const len = suggestionWrapper.children.length;
      if (currentFocus < len) {
        removeHighlight(suggestionWrapper);
        highlightSuggestion(currentFocus, suggestionWrapper);
      }
    }
    if (event.code == "ArrowUp") {
      currentFocus--;
      if (currentFocus >= 0) {
        removeHighlight(suggestionWrapper);
        highlightSuggestion(currentFocus, suggestionWrapper);
      }
    }
    if (event.code == "Enter") {
      event.preventDefault();
      if (currentFocus > -1)
        // Simulate click ...
        suggestionWrapper.childNodes[currentFocus].click();
    }
  }
});

$.addEventListener("click", () => {
  clearSuggestionList();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  keySearch.value = "";
});
