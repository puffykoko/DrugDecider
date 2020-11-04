import React from "react";
import { Bar } from "react-chartjs-2";
import "./Graph.css";

function ResultsGraph(props) {
  const sortable = props.data;
  //   let sortable = [];
  //   for (let i in results) {
  //     sortable.push([i, parseFloat(results[i])]);
  //   }
  //   sortable.sort((a, b) => {
  //     return b[1] - a[1];
  //   });

  const labels = sortable.map(element => {
    switch (element[0]) {
      case "O":
        return "Olanzapine";
      case "P":
        return "Paliperidone";
      case "PP":
        return "Paliperidone Palmitate";
      case "Q":
        return "Quetiapine";
      case "RC":
        return "Risperdal Consta";
      case "Pl":
        return "Placebo";
      default:
        return "";
    }
  });
  const values = sortable.map(element => {
    return element[1];
  });

  console.log(values);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Estimated improvement in PANSS score",
        data: values,
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

export default ResultsGraph;
