import React from "react";

function ProgressBar(props) {
  var i = 0,
    arr = [];
  for (i = 0; i < props.numBars; i += 1) {
    arr[i] = i;
  }

  const mapped_data = arr.map(index => (
    <div
      key={index}
      style={{
        width: "100%",
        height: 10,
        margin: "0px 10px",
        backgroundColor: index === props.curBar ? "#69B8F1" : "#DCDCDC",
        transition: "background-color 1s"
      }}
    ></div>
  ));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around"
      }}
    >
      {mapped_data}
    </div>
  );
}

export default ProgressBar;
