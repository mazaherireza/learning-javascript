const $ = document;

const unorderedList = $.querySelector(".list");
const btn = $.querySelector("#add-btn");

btn.addEventListener("click", () => {
  const item = $.querySelector("#item").value;
  const li = $.createElement("li");
  li.innerHTML = item;
  // input: node
  // output: HTMLElement
  unorderedList.appendChild(li);
  // input: strings or nodes
  // output: void
  // unorderedList.append()
});
