import React from "react";
// import Slider from "rc-slider";

import "rc-slider/assets/index.css";
import "./Question.css";

function SliderQuestion(props) {
  // const sliderName = `q${props.index}`;
  return (
    <div className="question">
      <label className="question-title">
        {props.index}. {props.text}
      </label>
      <div className="slider">
        <input
          type="range"
          name={props.name}
          min="1"
          max="7"
          defaultValue="4"
          step="1"
          style={{ width: "600px" }}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            textAlign: "center",
            fontSize: "12px",
            width: "680px"
          }}
        >
          <p>Strongly disagree</p>
          <p>Disagree</p>
          <p>Slightly disagree</p>
          <p>Neutral</p>
          <p>Slightly agree</p>
          <p>Agree</p>
          <p>Strongly agree</p>
        </div>
      </div>
      {/* <Slider
        name={sliderName}
        min={1}
        max={7}
        defaultValue={4}
        marks={{
          1: "Strongly disagree",
          2: "Disagree",
          3: "Slightly disagree",
          4: "Neutral",
          5: "Slightly agree",
          6: "Agree",
          7: "Strongly agree"
        }}
        step={1}
        trackStyle={{ backgroundColor: "transparent" }}
        activeDotStyle={{ border: "solid 2px #e9e9e9" }}
        style={{ width: "600px" }}
      /> */}
    </div>
  );
}

export default SliderQuestion;
