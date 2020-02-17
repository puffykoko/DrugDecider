import React from "react";
// import Slider from "rc-slider";

import "rc-slider/assets/index.css";
import "./PanssQuestion.css";

function PanssQuestion(props) {
  // const sliderName = `q${props.index}`;
  return (
    <div
      className="question panss-question-container"
    >
      <label>
        <p className="panss-question-title"> {props.text} </p>
      </label>
      <input
        // required
        type="number"
        name={props.name}
        value={props.value}
        onChange={e => props.saveAnswer(e.target.value, props.name)}
        min="1"
        max="7"
        step="1"
        className="panss-question-input-number"
      />
    </div>
  );
}

export default PanssQuestion;
