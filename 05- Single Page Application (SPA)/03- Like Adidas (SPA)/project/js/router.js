const TITLE = "Adidas";

const router = {
  "/": {
    template: "../index.html",
    title: `${TITLE} | Home`,
  },
  "/men": {
    template: "../pages/men.html",
    title: `${TITLE} | Men`,
  },
  "/women": {
    template: "../pages/women.html",
    title: `${TITLE} | Women`,
  },
  "/kids": {
    template: "../pages/kids.html",
    title: `${TITLE} | Kids`,
  },
  404: {
    template: "../pages/404.html",
    title: "Page Not Found",
  },
};

export default router;
