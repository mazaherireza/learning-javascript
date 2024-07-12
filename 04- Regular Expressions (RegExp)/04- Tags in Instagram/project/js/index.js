const $ = document;
const form = $.querySelector("form");
const textarea = $.querySelector("textarea");
const paragraph = $.querySelector("form p");

const regex = /@([\w\.])+/g;

form.onsubmit = (event) => {
  event.preventDefault();
  paragraph.innerHTML = textarea.value.replace(regex, (matched) => {
    const reference = matched.slice(1);
    return `<a href="${reference}">${matched}</a>`;
  });
};
