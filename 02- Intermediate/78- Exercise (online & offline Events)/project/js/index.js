const $ = document;
const state = $.querySelector(".status");

// Connection Events

window.addEventListener("online", () => {
  state.className = "status online";
});

// Fired when the browser has lost access to the network and the value of navigator.onLine has switched to false.
window.addEventListener("offline", () => {
  state.className = "status offline";
});
