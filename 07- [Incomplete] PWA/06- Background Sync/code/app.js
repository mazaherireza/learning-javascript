import { serviceWorkerSupport } from "./utils.js"

const register = async () => {
  try {
    await navigator.serviceWorker.register("./service-worker.js");
  } catch (error) {
    console.error(error);
  }
};

if (serviceWorkerSupport()) {
  register();
} else {
  console.error("Service workers are not supported.");
}
