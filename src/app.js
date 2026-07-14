import Chart from "chart.js/auto";

const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",

  data: {
    labels: ["月", "火", "水", "木", "金"],

    datasets: [{
      label: "お手伝い回数",

      data: [2, 5, 3, 6, 4]
    }]
  }
});