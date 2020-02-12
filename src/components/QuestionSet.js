import React from "react";
import SliderQuestion from "../components/SliderQuestion";

function QuestionSet(props) {
  const data = props.data;
  const data_names = props.data_names;
  const answers = props.answers;

  const mapped_data = data.map((question, index) => (
    <SliderQuestion
      key={index + 1}
      index={index + 1}
      value={answers[data_names[index]]}
      name={data_names[index]}
      text={question}
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

export default QuestionSet;
