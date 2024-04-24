const $ = document;

const input = $.querySelector("#input");

input.addEventListener("keydown", (event) => {
  const key = $.querySelector("#key");
  const location = $.querySelector("#location");
  const which = $.querySelector("#which");
  const code = $.querySelector("#code");
  const keyCode = $.querySelector('#key-code')
  
  keyCode.innerHTML = event.keyCode
  key.innerHTML = event.key
  location.innerHTML = event.location
  which.innerHTML = event.which
  code.innerHTML = event.code
});
