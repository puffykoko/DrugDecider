import React from "react";
import { Link } from "react-router-dom";
import SliderQuestion from "../components/SliderQuestion";
// import { template } from "@babel/core";

// const createSliderWithTooltip = Slider.createSliderWithTooltip;

function FormPage() {
  const data = [
    "I hardly feel anything when someone expresses strong emotions in front of me, like excitement or sadness. I find it pretty dull.",
    "I feel bored when people express emotions to me, even if from my loved ones. I try not to engage in relationships that might trigger such communications.",
    "Poor rapport",
    "Passive apathetic social withdrawal",
    "Lack of spontaneity and flow of conversation",
    "Motor retardation",
    "Active social avoidance",
    "Delusions",
    "Halucinatory behavior",
    "Grandiosity",
    "Suspiciousness persecution",
    "Stereotyped thinking",
    "Somatic concern",
    "Unusual thought content",
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
    "I feel restless, agitated, frantic or tense.",
    "The sadness I feel makes it difficult for me to function in my personal, social, or work life.",
    "I am scared that I will lose control of myself, go crazy, or die.",
    "I frequently feel fear, guilt, shame or blame myself or others for what happened in past events."
  ];
  const mapped_data = data.map((question, index) => (
    <SliderQuestion key={index + 1} index={index + 1} text={question} />
  ));
  return (
    <div className="content">
      <form
        className="form"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div className="question">
          <p className="question-title">Please select your gender.</p>
          <input type="radio" name="gender" value="male" /> Male
          <br />
          <input type="radio" name="gender" value="female" /> Female
          <br />
        </div>
        <div className="question">
          <p className="question-title">How old are you?</p>
          <input type="number" name="age" min="18" max="85" />
        </div>
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
      </form>
      <Link to="/results">
        <input type="submit" value="Submit" />
      </Link>
    </div>
  );
}

export default FormPage;
