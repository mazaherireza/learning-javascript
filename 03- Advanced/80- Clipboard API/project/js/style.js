const applyClass = (selector = snackbar, cls = "show") => {
  selector.className = cls;
};

const INTERVAL = 5_000;
const removeClass = (selector = snackbar, cls = "show") => {
  setTimeout(() => {
    selector.className = selector.className.replace(cls, "");
  }, INTERVAL);
};

export { applyClass, removeClass };
