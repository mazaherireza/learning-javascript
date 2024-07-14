import router from "./router.js";

const $ = document;

const render = async (template) => {
  const file = await fetch(template).then((response) => response.text());
  $.querySelector("#content").innerHTML = file;
};

const returnRoute = () => {
  const loc = location.pathname;
  const route = router[loc] || router[404];
  return route;
};

const handler = (event) => {
  event.preventDefault();
  const reference = event.target.href;
  history.pushState({}, "", reference);
  const { template, title } = returnRoute();
  $.title = title;
  render(template);
};

const links =
  $.querySelector("the-header").shadowRoot.querySelectorAll(".nav-link");

$.onclick = (event) => {
  if (event.target.className.includes("nav-link")) {
    // "a" tag in 404.html is clicked.
    handler(event);
  }
};

links.forEach((link) => {
  link.onclick = (event) => {
    // "a" tag in the-header component is clicked.
    handler(event);
  };
});

onpopstate = () => {
  const { template, _ } = returnRoute();
  render(template);
};
