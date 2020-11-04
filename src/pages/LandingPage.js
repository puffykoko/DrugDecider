import React from "react";
import { Link } from "react-router-dom";

import "./LandingPage.css";
import Graph from "../components/Graph";

function LandingPage() {
  return (
    <div className="landing-page-content flex">
      <div className="leftContent">
        <div className="text">
          <h2 className="largeText">Find what works for you.</h2>
          <p>
          Drug Decider helps patients find the right medication by analyzing their symptoms and health conditions.  Drug Decider algorithms predict how a patient would have responded to different medications and placebo treatment in previous clinical trials.
          </p>
          <p>
        Our current models are designed for Schizophrenia, but we are expanding to other disorders.  A clinician would evaluate a patient's symptoms using the PANSS (Positive and Negative Syndrome Scale).  Drug Decider statistical models use Schizophrenia clinical trial records to predict a patient's placebo response, called the Placebo Quantified Response Score (PQRS).  The PQRS is that individual patient's expected placebo response, which captures general therapeutic effects associated with treatment. The individual PANSS symptoms, the PQRS, and demographic information next predict a patient's unique response to active medications.
          </p>
          <p>
          Disclaimer:  Drug Decider technology personally predicts how a patient would have performed if they were enrolled in past clinical trials, after accounting for the placebo effect.  Any statistical predictions are meaningless without first being filtered through a licensed medical professional who can evaluate a patient holistically.  Artificial intelligence models are never a substitute for clinical care.  Please speak to your doctor if you have any concerns about your prescribed medications.
        </div>
        <Link to="/form" className="startButton">
          Let's get started!
        </Link>
      </div>

      <div className="imageContent flex">
        <Graph/>
      </div>
      {/*
      <div className="imageContent flex">
        <img
          src="https://nathanbrixius.files.wordpress.com/2013/02/image3.png"
          id="landingImage"
          alt="Graph of results"
        />
      </div>
    */}
    </div>
  );
}

export default LandingPage;
