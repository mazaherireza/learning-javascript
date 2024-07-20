if ("serviceWorker" in navigator) {
  const promise = navigator.serviceWorker.register("../service-worker.js");
  promise
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
