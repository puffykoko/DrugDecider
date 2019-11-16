import React from "react";
import { Bar } from "react-chartjs-2";
import "./Graph.css";

const data = {
  labels: ["Blue", "Yellow", "Green"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 10, 0],
      backgroundColor: [
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(22, 171, 67, 1)"
      ],
      borderColor: [
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(21, 171, 67, 1)"
      ],
      borderWidth: 1
    }
  ]
};

function Graph() {
  return (
    <Bar
      data={data}
      width={100}
      height={50}
      options={{ maintainAspectRatio: true }}
    />
  );
}

export default Graph;
