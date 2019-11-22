import React from "react";
import { Link } from "react-router-dom";
import SliderQuestion from "../components/SliderQuestion";

// const createSliderWithTooltip = Slider.createSliderWithTooltip;

function FormPage() {
  const data = [
    "Emotional withdrawal",
    "Poor rapport",
    "Delusions",
    "Grandiosity"
  ];
  const mapped_data = data.map((question, index) => (
    <SliderQuestion key={index + 1} index={index + 1} text={question} />
  ));
  return (
    <div className="content">
      <p>This is the form page.</p>
      <form
        className="form"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {mapped_data}
      </form>
      <Link to="/results">Results</Link>
    </div>
  );
}

export default FormPage;
