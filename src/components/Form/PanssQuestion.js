import React from "react";
// import Slider from "rc-slider";

import "rc-slider/assets/index.css";
import "./Question.css";

function PanssQuestion(props) {
  // const sliderName = `q${props.index}`;
  return (

      <div className="question"
        style={{display: "flex", justifyContent: "space-between"}}>
        <label className="question-title">
          {props.index}. {props.text}
        </label>
        <input
            type="number"
            name={props.name}
            min="1"
            max="7"
            step="1"
            style={{width: 100, height: 30, borderRadius: 5, border: "0.25px solid grey"}}
        />
      </div>

  );
}

export default PanssQuestion;
