const $ = document;

const input = $.querySelector("#input");

input.addEventListener("keydown", (event) => {
  const keyCode = $.querySelector("#key-code");
  const key = $.querySelector("#key");
  const location = $.querySelector("#location");
  const which = $.querySelector("#which");
  const code = $.querySelector("#code");

  const { key: _key } = event;
  if (_key == "F5" || _key == "F12") event.preventDefault();

  keyCode.innerHTML = event.keyCode;
  keyCode.style.visibility = "visible";
  key.innerHTML = event.key;
  location.innerHTML = event.location;
  which.innerHTML = event.which;
  code.innerHTML = event.code;
});
