import React from "react";
import "./SliderQuestion.css";

const slider_options_text = [
"Strongly Disagree",
"Disagree",
"Slightly Disagree",
"Neutral",
"Slightly Agree",
"Agree",
"Strongly Agree"
];

const slider_options =   slider_options_text.map((text) => (<p className="slider-text">{text}</p>));

function SliderQuestion(props) {

  return (
    <div className="question">
      <label className="question-title">
        {props.index}. {props.text}
      </label>
      <div className="slider">
        <input
          className="bar"
          type="range"
          name={props.name}
          value={props.value}
          onChange={e => props.saveAnswer(e.target.value, props.name)}
          min="1"
          max="7"
          step="1"
          style={{}}
        />
        <div
          className = "slider-text-container"
        >
            {slider_options}
        </div>
      </div>
      </div>
  );
}

export default SliderQuestion;
