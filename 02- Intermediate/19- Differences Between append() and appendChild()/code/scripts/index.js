const $ = document;

const unorderedList = $.querySelector(".list");
const addButton = $.querySelector("#add-button");

addButton.addEventListener("click", () => {
  const input = $.querySelector("#input");
  const item = input.value.trim();

  const li = $.createElement("li");
  li.innerHTML = item;
  /* input: node
  output: HTMLElement */
  unorderedList.appendChild(li);

  /* input: strings or nodes
  output: void
  unorderedList.append() */
  input.value = "";
});
