const serviceWorkerSupport = () => "serviceWorker" in navigator;
const indexedDBSupport = () => "indexedDB" in window;

export { serviceWorkerSupport, indexedDBSupport };
