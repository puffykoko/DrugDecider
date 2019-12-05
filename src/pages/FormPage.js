import React from "react";
// import { Link } from "react-router-dom";
// import { CountryDropdown } from "react-country-region-selector";
import SliderQuestion from "../components/SliderQuestion";
// import { template } from "@babel/core";

// const createSliderWithTooltip = Slider.createSliderWithTooltip;

class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      system: "Imperial"
    };
  }

  handleChange = e => {
    console.log(e);
    this.setState({ country: e });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    let json = {};

    data.forEach((value, key) => {
      if (
        key !== "treatment_gender" &&
        key !== "treatment_DX_country" &&
        key !== "treatment_DX"
      ) {
        json[key] = parseInt(value);
      } else {
        json[key] = value;
      }
    });

    console.log(json);

    // json = {
    //   bp: 110,
    //   treatment_gender: "M",
    //   treatment_age: 21,
    //   treatment_DX_Age: 16,
    //   treatment_BMI: 25.96803329,
    //   BLUNTEDAFFECT: 2,
    //   EMOTIONALWITHDRAWAL: 3,
    //   POORRAPPORT: 3,
    //   PASSIVEAPATHETICSOCIALWITHDRAWAL: 2,
    //   LACKOFSPONTANEITYANDFLOWOFCONVERSATION: 3,
    //   MOTORRETARDATION: 1,
    //   ACTIVESOCIALAVOIDANCE: 2,
    //   DELUSIONS: 6,
    //   HALLUCINATORYBEHAVIOUR: 6,
    //   GRANDIOSITY: 2,
    //   SUSPICIOUSNESSPERSECUTION: 5,
    //   STEREOTYPEDTHINKING: 4,
    //   SOMATICCONCERN: 1,
    //   UNUSUALTHOUGHTCONTENT: 5,
    //   LACKOFJUDGEMENTANDINSIGHT: 3,
    //   CONCEPTUALDISORGANISATION: 6,
    //   DIFFICULTYINABSTRACTTHINKING: 5,
    //   MANNERISMSANDPOSTURING: 4,
    //   POORATTENTION: 4,
    //   DISTURBANCEOFVOLITION: 2,
    //   PREOCCUPATION: 4,
    //   DISORIENTATION: 2,
    //   EXCITEMENT: 6,
    //   HOSTILITY: 6,
    //   UNCOOPERATIVENESS: 5,
    //   POORIMPULSECONTROL: 5,
    //   ANXIETY: 5,
    //   GUILTFEELINGS: 3,
    //   TENSION: 4,
    //   DEPRESSION: 1,
    //   treatment_DX_country: "USA",
    //   treatment_DX: "SCHIZOPHRENIA"
    // };

    // console.log(json);

    // json = JSON.stringify(json, function(k, v) {
    //   if (Number.isInteger(v)) {
    //     return v + 0.0;
    //   }
    //   return v;
    // }).replace(/\.0000000001/g, ".0");
    const URL = "";

    fetch(`${URL}/api/v1/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(json)
    });
  };

  render() {
    const data = [
      "I hardly feel anything when someone expresses strong emotions in front of me, like excitement or sadness. I find it pretty dull.",
      "I feel bored when people express emotions to me, even if from my loved ones. I try not to engage in relationships that might trigger such communications.",
      "I can't trust anyone.",
      "I feel bored of any interaction with people and don’t want to participate in any social activity.",
      "I don’t like talking. When other people ask me questions, I often don’t respond.",
      "I often think and speak slowly.",
      "I feel anxious when talking to a group of people, and I often escape from events or appointments that demand me to speak in front of the public.",
      "I often can’t tell what’s true from what is imagined.",
      "I often see, hear or feel things that other people would not sense.",
      "I believe that I am superior to others in a lot of aspects, but few people can understand me.",
      "I often feel that others have vicious intention to me. I am or will be persecuted or betrayed by someone.",
      "I often use stereotypes as directions of my actions and believe that they are generally true.",
      "I feel overly anxious and distressed about my current physical pain or fatigue.",
      "I often imagine things that other people call bizarre.",

      "I have at least one close and secure relationship that helps me when I am stressed (relatives or non-relatives that you feel at ease with, can talk to about private matters, and can call on for help).",
      "I give my best effort no matter what the outcome may be.",
      "I think of myself as a strong person when dealing with life’s challenges and difficulties.",
      "I feel in control of my life.",
      "I sometimes worry so much that it affects my day-to-day life.",
      "I am able to handle unpleasant or painful feelings like sadness, fear, and anger.",
      "I lost trust in humanity and myself and began expecting the worst of others and of situations.",
      "I started tackling multiple goals/activities at once (more than I usually would) or jump from one interest to another in an attempt to do it all. ",
      "I am tense, anxious and distracted when it comes to public speaking because of a hear of embarrassment or rejection.",
      "I have trouble focusing, concentrating, or remembering things.",
      "I tend to stay focused during conversations with other people.",
      "I lost interest in the activities that I used to enjoy.",
      "I feel restless, agitated, frantic or tense.",
      "The sadness I feel makes it difficult for me to function in my personal, social, or work life.",
      "I am scared that I will lose control of myself, go crazy, or die.",
      "I frequently feel fear, guilt, shame or blame myself or others for what happened in past events."
    ];
    const data_names = [
      "BLUNTEDAFFECT",
      "EMOTIONALWITHDRAWAL",
      "POORRAPPORT",
      "PASSIVEAPATHETICSOCIALWITHDRAWAL",
      "LACKOFSPONTANEITYANDFLOWOFCONVERSATION",
      "MOTORRETARDATION",
      "ACTIVESOCIALAVOIDANCE",
      "DELUSIONS",
      "HALLUCINATORYBEHAVIOUR",
      "GRANDIOSITY",
      "SUSPICIOUSNESSPERSECUTION",
      "STEREOTYPEDTHINKING",
      "SOMATICCONCERN",
      "UNUSUALTHOUGHTCONTENT",

      "TENSION",
      "EXCITEMENT",
      "DEPRESSION",
      "DISORIENTATION",
      "ANXIETY",
      "LACKOFJUDGEMENTANDINSIGHT",
      "CONCEPTUALDISORGANISATION",
      "DIFFICULTYINABSTRACTTHINKING",
      "MANNERISMSANDPOSTURING",
      "POORATTENTION",
      "PREOCCUPATION",
      "DISTURBANCEOFVOLITION",
      "HOSTILITY",
      "UNCOOPERATIVENESS",
      "POORIMPULSECONTROL",
      "GUILTFEELINGS"
    ];
    const mapped_data = data.map((question, index) => (
      <SliderQuestion
        key={index + 1}
        index={index + 1}
        name={data_names[index]}
        text={question}
      />
    ));

    return (
      <div className="content">
        <form
          onSubmit={this.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "15%"
          }}
        >
          <input hidden readOnly type="number" name="bp" value={110} />
          <div className="question">
            <p className="question-title">Please select your gender.</p>
            <input type="radio" name="treatment_gender" value="M" /> Male
            <br />
            <input type="radio" name="treatment_gender" value="F" /> Female
            <br />
          </div>
          <div className="question">
            <p className="question-title">
              How old were you when you were diagnosed?
            </p>
            <input type="number" name="treatment_DX_age" min="18" max="85" />
          </div>
          <div className="question">
            <p className="question-title">How old are you now?</p>
            <input type="number" name="treatment_age" min="18" max="85" />
          </div>
          {/* <div className="question">
            <p className="question-title">
              Please enter your height and weight.
            </p>
            <input type="radio" name="system" value="Imperial" /> Imperial
            <input type="radio" name="system" value="Metric" /> Metric
            <input type="number" value={this.state.height} />
          </div> */}
          <input
            hidden
            checked
            readOnly
            type="radio"
            name="treatment_BMI"
            value={22}
          />
          <hr
            style={{
              border: "none",
              height: "1px",
              width: "80%",
              backgroundColor: "#ddd",
              marginBottom: "50px"
            }}
          />
          {mapped_data}
          {/* <CountryDropdown
            value={this.state.country}
            onChange={this.handleChange}
            name="treatment_DX_country"
            priorityOptions={["US"]}
            valueType="short"
            style={{
              marginBottom: "80px"
            }}
          /> */}
          <input
            hidden
            checked
            readOnly
            type="radio"
            name="treatment_DX_country"
            value="USA"
          />
          <input
            hidden
            checked
            readOnly
            type="radio"
            name="treatment_DX"
            value="SCHIZOPHRENIA"
          />
          <button
            type="submit"
            className="startButton"
            style={{ border: "none", cursor: "pointer" }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default FormPage;
