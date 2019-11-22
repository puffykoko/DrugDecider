import React from "react";
import Slider from "rc-slider";

import "rc-slider/assets/index.css";
import "./Question.css";

function SliderQuestion(props) {
  const sliderName = `q${props.index}`;
  return (
    <div className="question">
      <label>
        {props.index}. {props.text}
      </label>
      <Slider
        name={sliderName}
        min={1}
        max={7}
        marks={{ 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7 }}
        step={1}
        style={{ width: "300px" }}
      />
    </div>
  );
}

export default SliderQuestion;
