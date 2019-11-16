import React from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Collapsible from "react-collapsible";
import Graph from "../components/Graph";
import Graph2 from "../components/Graph2";
import "./ResultsPage.css";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\
ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\
velit esse cillum dolore eu fugiat nulla pariatur.";

import "react-tabs/style/react-tabs.css";
import "./ResultsPage.css";

function ResultsPage() {
  return (
    <div>
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
      </div>
      <div className="sections">
        <div className="section-2">
          <p className="section__title">Medications</p>
          <Collapsible trigger="Sertraline">
            <p>
              Sertraline is an antidepressant in a group of drugs called
              selective serotonin reuptake inhibitors (SSRIs). Sertraline
              affects chemicals in the brain that may be unbalanced in people
              with depression, panic, anxiety, or obsessive-compulsive symptoms.
            </p>
            <a
              className="more-info"
              href="https://www.drugs.com/sertraline.html"
            >
              More information
            </a>
          </Collapsible>
          <Collapsible trigger="Alprazolam">
            <p>
              Alprazolam is a benzodiazepine. It affects chemicals in the brain
              that may be unbalanced in people with anxiety. Alprazolam is used
              to treat anxiety disorders, panic disorders, and anxiety caused by
              depression.
            </p>
            <a
              className="more-info"
              href="https://www.drugs.com/alprazolam.html"
            >
              More information
            </a>
          </Collapsible>
          <Collapsible trigger="Prozac">
            <p>
              Prozac (fluoxetine) is a selective serotonin reuptake inhibitor
              (SSRI) antidepressant. Fluoxetine affects chemicals in the brain
              that may be unbalanced in people with depression, panic, anxiety,
              or obsessive-compulsive symptoms. Prozac is used to treat major
              depressive disorder, bulimia nervosa (an eating disorder),
              obsessive-compulsive disorder, and panic disorder. Prozac is
              sometimes used together with another medication called olanzapine
              (Zyprexa) to treat manic depression caused by bipolar disorder.
              This combination is also used to treat depression after at least 2
              other medications have been tried without successful treatment of
              symptoms.
            </p>
            <a className="more-info" href="https://www.drugs.com/prozac.html">
              More information
            </a>
          </Collapsible>
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
