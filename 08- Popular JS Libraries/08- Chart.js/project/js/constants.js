const data = {
  datasets: [
    {
      label: "Demo",
      data: [9, 7, 6, 5],
      backgroundColor: ["#097969", "#228B22", "#90EE90", "#7CFC00"],
    },
  ],
};

const plugins = {
  responsive: true,
  title: {
    display: true,
    text: "Learning Chart.js",
    color: "#000",
    font: {
      family: "Times New Roman",
      weight: "bold",
      size: 14,
    },
  },
  subtitle: {
    display: true,
    text: "Doughnut Chart",
    color: "#000",
    font: {
      family: "Times New Roman",
      weight: "bold",
      size: 12,
    },
  },
};

export { data, plugins };
