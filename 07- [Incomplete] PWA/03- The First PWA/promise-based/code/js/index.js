if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../service-worker.js")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
} else {
  console.error("Service workers are not supported.");
}
