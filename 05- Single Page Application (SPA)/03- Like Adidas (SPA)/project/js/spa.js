import router from "./router.js";

const $ = document;

const render = async ({ template }) => {
  const file = await fetch(template).then((response) => response.text());
  $.querySelector("#content").innerHTML = file;
};

const links =
  $.querySelector("the-header").shadowRoot.querySelectorAll(".nav-link");

const populateRoute = () => {
  const loc = location.pathname;
  const route = router[loc] || router[404];
  $.title = route.title;
  return route;
};

links.forEach((link) => {
  link.onclick = (event) => {
    event.preventDefault();
    const reference = event.target.href;
    history.pushState({}, "", reference);
    const route = populateRoute();
    render(route);
  };
});

onpopstate = () => {
  const route = populateRoute();
  render(route);
};
