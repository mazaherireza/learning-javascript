const title = "Adidas";

const router = {
  "/men": {
    template: "../pages/men.html",
    title: `${title} | Men`,
  },
  "/women": {
    template: "../pages/women.html",
    title: `${title} | Women`,
  },
  "/kids": {
    template: "../pages/kids.html",
    title: `${title} | Kids`,
  },
  404: {
    template: "../pages/404.html",
    title: "404",
  },
};

export default router;
