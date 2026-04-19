const dscc = window.dscc;

function drawViz(data) {
  const ctx = document.getElementById("chart").getContext("2d");

  const labels = data.tables.DEFAULT.map(row => row.dimension[0]);
  const values = data.tables.DEFAULT.map(row => row.metric[0]);

  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Values',
        data: values
      }]
    },
    options: {
      responsive: true,
      scales: {
        r: {
          beginAtZero: true
        }
      }
    }
  });
}

dscc.subscribeToData(drawViz, { transform: dscc.tableTransform });