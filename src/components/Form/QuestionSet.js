import React from "react";
import SliderQuestion from "./SliderQuestion";

function QuestionSet(props) {
  const data = props.data;
  const data_names = props.data_names;
  const mapped_data = data.map((question, index) => (
      <SliderQuestion
        key={props.start + index + 1}
        index={props.start + index + 1}
        name={data_names[index].replace(/\s/g, '')}
        text={question}
      />
    ));
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
    {mapped_data}
    </div>
  );
}


export default QuestionSet;
