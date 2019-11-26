import React from "react";
import { Bar } from "react-chartjs-2";
import "./Graph.css";

const data = {
  labels: [
    "Olanzapine",
    "Paliperidone",
    "Quetiapine",
    "Placebo",
    "Risperdal Consta",
    "Paliperidone Palmitate"
  ],
  datasets: [
    {
      label: "Estimated decrease in PANSS score",
      data: [7, 6, 4, 3, 3, 1],
      backgroundColor: [
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(22, 171, 67, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(22, 171, 67, 1)"
      ]
    }
  ]
};

function Graph() {
  return (
    <Bar
      data={data}
      options={{
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              stacked: true
            }
          ],
          yAxes: [
            {
              stacked: true
            }
          ]
        }
      }}
    />
  );
}

export default Graph;
