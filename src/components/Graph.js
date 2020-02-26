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

function Graph(props) {
  return (
    <Bar
      data={data}
      options={{
        title: {
          display: true,
          text: "Estimated Decrease in PANSS score",
          fontFamily: "Calibri",
          fontSize: 20,
          fontColor: "black",
          fontStyle: "normal"
        },
        maintainAspectRatio: false,
        legend:{
          display: false,
        },
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
