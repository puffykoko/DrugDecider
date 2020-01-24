import React from "react";
// import { Link } from "react-router-dom";
// import { CountryDropdown } from "react-country-region-selector";
//import SliderQuestion from "../components/SliderQuestion";
import ResultsPage from "./ResultsPage";
import QuestionSet from "../components/QuestionSet"
import ProgressBar from "../components/ProgressBar"
// import { template } from "@babel/core";

// const createSliderWithTooltip = Slider.createSliderWithTooltip;

class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      system: "Imperial",
      response: [],
      results: false,
      page: 0,
      numPages: 4,
    };

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }


  nextPage() {
    this.setState(state => ({
    page : state.page + 1,
  }));
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
  }

  previousPage() {
    this.setState(state => ({
    page : state.page - 1,
  }));
  }

  handleChange = e => {
    console.log(e);
    this.setState({ country: e });
  };

  handleSubmit = async event => {
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

    const URL = "http://169.232.114.32:8000";
    // const URL = "https://drugdecidertest.herokuapp.com";

    const response = await fetch(`${URL}/api/v1/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(json)
    });

    const results = await response.json();
    let sortable = [];

    for (let i in results) {
      sortable.push([i, parseFloat(results[i])]);
    }
    sortable.sort((a, b) => {
      return b[1] - a[1];
    });

    this.setState({
      response: sortable,
      results: true
    });

  };

  render() {

    const data1 = [
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
    ];

    const data2 = [

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
    ];

    const data3 = [
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

    const data_names1 = [
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
    ];

    const data_names2 = [

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
    ];

    const data_names3 = [
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

    const num_pages = 4;

    if (!this.state.results) {
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

            <div
              style={{
                border: "1px solid rgb(240,240,240,1)",
                borderRadius: "15px",
                backgroundColor: "rgba(221,221,221,.17)",
                padding: "2.5vh 5vw 5vh 5vw",
                width: "65vw",
              }}
            >
              <h1> Basic Information </h1>
              <ProgressBar numBars = {num_pages} curBar = {this.state.page}/>
              <div style = {{marginTop: "10vh"}}>
                  {this.state.page === 0 &&
                    <div>
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
                <input
                  type="number"
                  name="treatment_DX_Age"
                  min="18"
                  max="85"
                  style = {{width: 300, borderRadius: 15, height: 30, border: "1px solid #DCDCDC"}}
                />
              </div>
              <div className="question">
                <p className="question-title">How old are you now?</p>
                <input type="number" name="treatment_age" min="18" max="85"
                  style = {{
                    width: 300, borderRadius: 15, height: 30, border: "1px solid #DCDCDC"
                  }}/>
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
              </div>}

              <div style = {{
                marginTop: 20,
              }}>
              {this.state.page === 1 && <QuestionSet data = {data1} data_names = {data_names1}/>}
              {this.state.page === 2 && <QuestionSet data = {data2} data_names = {data_names2}/>}
              {this.state.page === 3 && <QuestionSet data = {data3} data_names = {data_names3}/>}
              </div>

            </div>
            </div>




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

            <div style={{
              display: "flex",
            }}>


            <button
              onClick = {this.previousPage}
              className="startButton"
              style={{ border: "none", cursor: "pointer", marginRight: "5px",
              backgroundColor: this.state.page === 0 ? "#DCDCDC" : "#1b9fff"}}
            >
              Back
            </button>

            <button
              onClick = {this.nextPage}
              type="submit"
              className="startButton"
              style={{ border: "none", cursor: "pointer", backgroundColor: this.state.page === num_pages - 1 ? "#DCDCDC" : "#1b9fff"}}
            >
              Next
            </button>

          </div>



            {this.state.page === num_pages - 1 &&
            <button
              type="submit"
              className="startButton"
              style={{ border: "none", cursor: "pointer" }}
            >
              Submit
            </button>
          }
          </form>
        </div>
      );
    } else {
      return <ResultsPage data={this.state.response} />;
    }
  }
}

export default FormPage;
