import React from "react";
import Graph from "../components/Graph";
import Graph2 from "../components/Graph2";
import "./ResultsPage.css";

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\
ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\
velit esse cillum dolore eu fugiat nulla pariatur.";


function ResultsPage() {
  return (
    <div className="content">

      <div className="section flex">
        <div className="graphContainer">
          <Graph/>
        </div>
        <div className="mainText">
          <h1> Your Results </h1>
          <p> {text} </p>
        </div>
      </div>
    </div>
  );
}

export default ResultsPage;
