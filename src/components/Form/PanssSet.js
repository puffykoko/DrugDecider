import React from "react";
import PanssQuestion from "./PanssQuestion";

function PanssSet(props) {
  const data = props.data;
  const data_names = props.data_names;
  const answers = props.answers;

  const mapped_data = data.map((question, index) => (
    <PanssQuestion
      key={props.start + index + 1}
      index={props.start + index + 1}
      value={answers["PANSS_" + data_names[index].replace(/\s/g, "")]}
      name={"PANSS_" + data_names[index].replace(/\s/g, "")}
      text={data_names[index].toLowerCase()}
      saveAnswer={props.saveAnswer}
    />
  ));
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
      }}
    >
      {mapped_data}
    </div>
  );
}

export default PanssSet;
