const $ = document;

const unorderedList = $.querySelector(".list");
const btn = $.querySelector("#add-btn");

btn.addEventListener("click", () => {
  const optional = $.querySelector("#optional").value;
  const li = $.createElement("li");
  li.innerHTML = optional;
  // input: node
  // output: HTMLElement
  unorderedList.appendChild(li);
  // input: strings or nodes
  // output: void
  // unorderedList.append()
});
