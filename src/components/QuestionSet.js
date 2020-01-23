import React from "react";
import SliderQuestion from "../components/SliderQuestion";

function QuestionSet(props) {
  const data = props.data;
  const data_names = props.data_names;
  const mapped_data = data.map((question, index) => (
      <SliderQuestion
        key={index + 1}
        index={index + 1}
        name={data_names[index]}
        text={question}
      />
    ));
  return (
    <div
      style={{
        border: "1px solid rgb(240,240,240,1)",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(253,253,253,.5)",
        paddingTop: "70px",
        marginBottom: "30px",
        width: "70vw"
      }}
    >
    {mapped_data}
    </div>
  );
}


export default QuestionSet;
