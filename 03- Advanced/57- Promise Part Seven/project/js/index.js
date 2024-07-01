const $ = document;

const loadStyle = (path) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const link = $.createElement("link");
      link.rel = "stylesheet";
      link.href = path;
      link.onload = () => resolve("Loaded");
      link.onerror = () => reject("Error");
      $.head.append(link);
    }, 2_000);
  });
};

const log = (response) => console.log(response);

loadStyle("./style/mobile.css").then(log).catch(log);
