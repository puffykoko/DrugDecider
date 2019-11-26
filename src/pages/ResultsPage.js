import React from "react";
import CustomCollapsible from "../components/CustomCollapsible";
import Graph from "../components/Graph";
// import Graph2 from "../components/Graph2";

import "./ResultsPage.css";

const text =
  "Based on your responses, there is a high chance that antipsychotic medicine would be effective for you. Please consult your doctor for additional advice.";

function ResultsPage() {
  return (
    <div className="content">
      <div className="section flex">
        <div className="graphContainer">
          <Graph />
        </div>
        <div className="mainText">
          <h1> Your Results </h1>
          <p> {text} </p>
        </div>
      </div>
      <div className="sections">
        <div className="section-2">
          <p className="section__title">Medications</p>
          <CustomCollapsible
            drug="Olanzapine"
            text="Olanzapine is an antipsychotic medication that affects chemicals in the brain. Olanzapine is used to treat the symptoms of psychotic conditions such as schizophrenia and bipolar disorder (manic depression) in adults and children who are at least 13 years old. Olanzapine is sometimes used together with other antipsychotic medications or antidepressants."
            link="https://www.drugs.com/mtm/olanzapine.html"
          />
          <CustomCollapsible
            drug="Paliperidone"
            text="Paliperidone is an antipsychotic medicine that is used to treat schizophrenia in adults and teenagers who are at least 12 years old."
            link="https://www.drugs.com/mtm/paliperidone.html"
          />
          <CustomCollapsible
            drug="Quetiapine"
            text="Quetiapine is an antipsychotic medicine that is used to treat schizophrenia in adults and children who are at least 13 years old. Quetiapine is used to treat bipolar disorder (manic depression) in adults and children who are at least 10 years old. Quetiapine is also used together with antidepressant medications to treat major depressive disorder in adults."
            link="https://www.drugs.com/mtm/quetiapine.html"
          />
        </div>
        {/* <div className="section-1">
          <p className="section__title">Other</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            tortor sem, fringilla sed maximus eu, dictum tristique lacus. In hac
            habitasse platea dictumst. Nam rhoncus id diam non tempor. Nulla
            lobortis ullamcorper lorem, sit amet blandit est venenatis sit amet.
            Morbi id posuere sem.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default ResultsPage;
