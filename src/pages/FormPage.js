import React from "react";
// import { Link } from "react-router-dom";
// import { CountryDropdown } from "react-country-region-selector";
import ResultsPage from "./ResultsPage";
import QuestionSet from "../components/Form/QuestionSet";
import ProgressBar from "../components/Form/ProgressBar";
import PanssSet from "../components/Form/PanssSet";
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
    data_names1.forEach(option => (answers[option] = 4));
    data_names2.forEach(option => (answers[option] = 4));
    data_names3.forEach(option => (answers[option] = 4));

    this.state = {
      country: "",
      system: "Imperial",
      answers: answers,
      response: [],
      results: false,
      page: 0,
      numPages: 7
    };

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  saveAnswer = (value, key) => {
    console.log(value, key);
    let copy = this.state.answers;
    copy[key] = parseInt(value);
    this.setState({
      answers: copy
    });
  };

  nextPage() {
    console.log(this.state.answers);
    this.setState(state => ({
      page: state.page < state.numPages - 1 ? state.page + 1 : state.page
    }));
    window.scroll({ top: 0, left: 0 });
  }

  previousPage() {
    this.setState(state => ({
      page: state.page > 0 ? state.page - 1 : state.page
    }));
    window.scroll({ top: 0, left: 0 });
  }

  handleChange = e => {
    let copy = this.state.answers;
    copy[e.target.name] = e.target.value;
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
    // const data = new FormData(event.target);
    // let json = {};

    // data.forEach((value, key) => {
    //   if (
    //     key !== "treatment_gender" &&
    //     key !== "treatment_DX_country" &&
    //     key !== "treatment_DX"
    //   ) {
    //     json[key] = parseInt(value);
    //   } else {
    //     json[key] = value;
    //   }
    // });

    // console.log(json);

    // const URL = "http://169.232.114.32:8000";
    // // const URL = "https://drugdecidertest.herokuapp.com";

    // const response = await fetch(`${URL}/api/v1/predict`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(json)
    // });

    // const results = await response.json();
    // let sortable = [];

    // for (let i in results) {
    //   sortable.push([i, parseFloat(results[i])]);
    // }
    // sortable.sort((a, b) => {
    //   return b[1] - a[1];
    // });

    // this.setState({
    //   response: sortable,
    //   results: true
    // });
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
            <div
              style={{
                border: "1px solid rgb(240,240,240,1)",
                borderRadius: "15px",
                backgroundColor: "rgba(221,221,221,.17)",
                padding: "2.5vh 5vw 5vh 5vw",
                width: "65vw"
              }}
            >
              <h1> Basic Information </h1>
              <ProgressBar numBars={num_pages} curBar={this.state.page} />
              <div style={{ marginTop: "10vh" }}>
                {this.state.page === 0 && (
                  <div>
                    <input
                      hidden
                      readOnly
                      type="number"
                      name="bp"
                      value={110}
                    />
                    <div className="question">
                      <p className="question-title">
                        Please select your gender.
                      </p>
                      <input
                        type="radio"
                        name="treatment_gender"
                        value="M"
                        onChange={this.handleChange}
                      />{" "}
                      Male
                      <br />
                      <input
                        type="radio"
                        name="treatment_gender"
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
                        type="number"
                        name="treatment_DX_Age"
                        min="18"
                        max="85"
                        style={{
                          width: 300,
                          borderRadius: 15,
                          height: 30,
                          border: "1px solid #DCDCDC"
                        }}
                      />
                    </div>
                    <div className="question">
                      <p className="question-title">How old are you now?</p>
                      <input
                        type="number"
                        name="treatment_age"
                        min="18"
                        max="85"
                        style={{
                          width: 300,
                          borderRadius: 15,
                          height: 30,
                          border: "1px solid #DCDCDC"
                        }}
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
                    <input
                      hidden
                      checked
                      readOnly
                      type="radio"
                      name="treatment_BMI"
                      value={22}
                    />
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
