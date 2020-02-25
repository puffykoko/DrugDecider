import React from "react";
// import { Link } from "react-router-dom";
// import { CountryDropdown } from "react-country-region-selector";
import ResultsPage from "./ResultsPage";
import QuestionSet from "../components/Form/QuestionSet";
import ProgressBar from "../components/Form/ProgressBar";
import PanssSet from "../components/Form/PanssSet";
import "./FormPage.css";
// import { template } from "@babel/core";

import {
  data1,
  data2,
  data3,
  data_names1,
  data_names2,
  data_names3
} from "../data.js";

class FormPage extends React.Component {
  constructor(props) {
    super(props);

    let answers = {};
    data_names1.forEach(option => {
      let opt = option.replace(/\s/g, "").toUpperCase();
      answers[opt] = 4;
      answers["PANSS_" + opt] = "";
    });
    data_names2.forEach(option => {
      let opt = option.replace(/\s/g, "").toUpperCase();
      answers[opt] = 4;
      answers["PANSS_" + opt] = "";
    });
    data_names3.forEach(option => {
      let opt = option.replace(/\s/g, "").toUpperCase();
      answers[opt] = 4;
      answers["PANSS_" + opt] = "";
    });

    answers["treatment_gender"] = "";
    answers["treatment_age"] = "";
    answers["treatment_DX_Age"] = "";

    answers["treatment_BMI"] = 22;
    answers["bp"] = 110;
    answers["treatment_DX_country"] = "USA";
    answers["treatment_DX"] = "SCHIZOPHRENIA";

    this.state = {
      country: "",
      system: "Imperial",
      answers: answers,
      response: [],
      results: false,
      page: 0,
      numPages: 7
    };

    // this.nextPage = this.nextPage.bind(this);
    // this.previousPage = this.previousPage.bind(this);
  }

  saveAnswer = (value, key) => {
    console.log(value, key);
    let copy = this.state.answers;
    copy[key] = parseInt(value);
    this.setState({
      answers: copy
    });
  };

  nextPage = e => {
    e.preventDefault();

    console.log(this.state.answers);
    this.setState(state => ({
      page: state.page < state.numPages - 1 ? state.page + 1 : state.page
    }));
    window.scroll({ top: 0, left: 0 });
  };

  previousPage = e => {
    e.preventDefault();

    this.setState(state => ({
      page: state.page > 0 ? state.page - 1 : state.page
    }));
    window.scroll({ top: 0, left: 0 });
  };

  handleChange = e => {
    // e.preventDefault();
    let copy = this.state.answers;
    if (
      e.target.name === "treatment_DX_Age" ||
      e.target.name === "treatment_age"
    ) {
      copy[e.target.name] = parseInt(e.target.value);
    } else {
      copy[e.target.name] = e.target.value;
    }

    this.setState({
      answers: copy
    });
  };

  handleCountryChange = e => {
    console.log(e);
    this.setState({ country: e });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const URL = "https://api.drugdecider.com";

    console.log(this.state.answers);

    const response = await fetch(`${URL}/api/v1/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.answers)
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
    const num_pages = this.state.numPages;

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
            <div className="FormContainer">
              <h1> Basic Information </h1>
              <ProgressBar numBars={num_pages} curBar={this.state.page} />
              <div style={{ marginTop: "10vh" }}>
                {this.state.page === 0 && (
                  <div>
                    <div className="question">
                      <p className="question-title">
                        Please select your gender.
                      </p>
                      <input
                        required
                        type="radio"
                        name="treatment_gender"
                        checked={this.state.answers["treatment_gender"] === "M"}
                        value="M"
                        onChange={this.handleChange}
                      />{" "}
                      Male
                      <br />
                      <input
                        required
                        type="radio"
                        name="treatment_gender"
                        checked={this.state.answers["treatment_gender"] === "F"}
                        value="F"
                        onChange={this.handleChange}
                      />{" "}
                      Female
                      <br />
                    </div>
                    <div className="question">
                      <p className="question-title">
                        How old were you when you were diagnosed?
                      </p>
                      <input
                        required
                        type="number"
                        name="treatment_DX_Age"
                        value={this.state.answers["treatment_DX_Age"]}
                        onChange={this.handleChange}
                        min="18"
                        max="85"
                        className="question-input"
                      />
                    </div>
                    <div className="question">
                      <p className="question-title">How old are you now?</p>
                      <input
                        required
                        type="number"
                        name="treatment_age"
                        value={this.state.answers["treatment_age"]}
                        onChange={this.handleChange}
                        min="18"
                        max="85"
                        className="question-input"
                      />
                    </div>

                    {/* <div className="question">
                      <p className="question-title">
                        Please enter your height and weight.
                      </p>
                      <input type="radio" name="system" value="Imperial" /> Imperial
                      <input type="radio" name="system" value="Metric" /> Metric
                      <input type="number" value={this.state.height} />
                    </div> */}
                    {/* <CountryDropdown
                      value={this.state.country}
                      onChange={this.handleCountryChange}
                      name="treatment_DX_country"
                      priorityOptions={["US"]}
                      valueType="short"
                      style={{
                        marginBottom: "80px"
                      }}
                    /> */}
                  </div>
                )}
              </div>
              <div
                style={{
                  marginTop: 20
                }}
              >
                {this.state.page === 1 && (
                  <PanssSet
                    data={data1}
                    data_names={data_names1}
                    start={0}
                    saveAnswer={this.saveAnswer}
                    answers={this.state.answers}
                  />
                )}
                {this.state.page === 2 && (
                  <PanssSet
                    data={data2}
                    data_names={data_names2}
                    start={10}
                    saveAnswer={this.saveAnswer}
                    answers={this.state.answers}
                  />
                )}
                {this.state.page === 3 && (
                  <PanssSet
                    data={data3}
                    data_names={data_names3}
                    start={20}
                    saveAnswer={this.saveAnswer}
                    answers={this.state.answers}
                  />
                )}
                {this.state.page === 4 && (
                  <QuestionSet
                    data={data1}
                    data_names={data_names1}
                    start={0}
                    saveAnswer={this.saveAnswer}
                    answers={this.state.answers}
                  />
                )}
                {this.state.page === 5 && (
                  <QuestionSet
                    data={data2}
                    data_names={data_names2}
                    start={10}
                    saveAnswer={this.saveAnswer}
                    answers={this.state.answers}
                  />
                )}
                {this.state.page === 6 && (
                  <QuestionSet
                    data={data3}
                    data_names={data_names3}
                    start={20}
                    saveAnswer={this.saveAnswer}
                    answers={this.state.answers}
                  />
                )}
              </div>
            </div>

            <div
              style={{
                display: "flex"
              }}
            >
              <button
                onClick={this.previousPage}
                className="startButton"
                style={{
                  border: "none",
                  cursor: "pointer",
                  marginRight: "5px",
                  backgroundColor: this.state.page === 0 ? "#DCDCDC" : "#1b9fff"
                }}
              >
                Back
              </button>

              <button
                onClick={this.nextPage}
                className="startButton"
                style={{
                  border: "none",
                  cursor: "pointer",
                  backgroundColor:
                    this.state.page === num_pages - 1 ? "#DCDCDC" : "#1b9fff"
                }}
              >
                Next
              </button>
            </div>

            {this.state.page === num_pages - 1 && (
              <button
                type="submit"
                // onClick={this.handleSubmit}
                className="startButton"
                style={{ border: "none", cursor: "pointer" }}
              >
                Submit
              </button>
            )}
          </form>
        </div>
      );
    } else {
      return <ResultsPage data={this.state.response} />;
    }
  }
}

export default FormPage;
