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
          Drug Decider helps patients find the right medication by analyzing their symptoms and health conditions.  Drug Decider simulates a patients’ experience in previous clinical trials, and predicts how a patient would have responded to a number of different medications in those trials.
     
          </p>
          <p>
           To predict how a patient with Schizophrenia would respond to medications, a clinician should first evaluate the patient using the PANSS (Positive and Negative Syndrome Scale) which measures the severity of individual symptoms.  Our models first predict how a patient would have responded to a placebo intervention, creating a Placebo Quantified Response Score (PQRS).  The PQRS is that individual patients expected placebo response, which captures general therapeutic effects associated with an intervention.
          </p>
          <p>
          Artifical intelligence models then use the individual PANSS symptoms, the PQRS, and demographic information to predict responses to individual medications using clinical trial records.  These machine learning models simulate how a patient would have performed if they were enrolled in any of these clinical trials, after accounting for the placebo effect.
          </p>
          <p>
          Disclaimer:  Drug Decider technology predicts medication response using statistical models.  Any statistical predictions are meaningless without first being filtered through a licensed medical professional who can evaluate a patient holistically.  Artificial intelligence models are never a substitute for clinical care, and should not be used as such.  Please speak to your doctor if you have any concerns about your prescribed medications.
          </p>
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
