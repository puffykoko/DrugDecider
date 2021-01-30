import React from "react";
import CustomCollapsible from "../components/CustomCollapsible";
import ResultsGraph from "../components/ResultsGraph";

import "./ResultsPage.css";

const text =
  "Drug Decider has simulated this patients' experience in the clinical trial database.  Please speak to your doctor if you have any concerns about your prescribed medications.  Never discontinue or change your prescribed medications without your doctor's recommendation.";

class ResultsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { response: null };
    this.fetchData = this.fetchData.bind(this);
    this.fetchData();
  }

  componentWillMount() {
    this.setState({
      response: null
    });
  }

  fetchData = async () => {
    const info = await fetch(
      "https://api.drugdecider.com/api/v1/druginfo",
      {
        method: "GET"
      }
    );
    const response = await info.json();
    console.log(response);
    this.setState({
      response: response
    });
  };

  render() {
    return (
      this.state.response && (
        <div className="content">
          <div className="section flex">
            <div className="graphContainer">
              <ResultsGraph data={this.props.data} />
            </div>
            <div className="mainText">
              <h1> Your Results </h1>
              <p> {text} </p>
            </div>
          </div>
          <div className="sections">
            <div className="section-2">
              <p className="section__title">Medications</p>
              {Object.keys(this.state.response).map((key, index) => (
                <CustomCollapsible
                  drug={key
                    .replace("_", " ")
                    .split(" ")
                    .map(
                      word => word.charAt(0).toUpperCase() + word.substring(1)
                    )
                    .join(" ")}
                  text={this.state.response[key]["description"]}
                  link={this.state.response[key]["link"]}
                />
              ))}
              {/* <CustomCollapsible
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
                drug="Paliperidone Palmitate"
                text="This medication is used to treat certain mental/mood disorders (such as schizophrenia, schizoaffective disorder). Paliperidone is an antipsychotic drug (atypical type). It works by helping to restore the balance of certain natural chemicals (neurotransmitters) in the brain. This medication can decrease hallucinations and help you to think more clearly and positively about yourself, feel less agitated, and take a more active part in everyday life."
                link="https://www.webmd.com/drugs/2/drug-152780/paliperidone-palmitate-intramuscular/details"
              />
              <CustomCollapsible
                drug="Quetiapine"
                text="Quetiapine is an antipsychotic medicine that is used to treat schizophrenia in adults and children who are at least 13 years old. Quetiapine is used to treat bipolar disorder (manic depression) in adults and children who are at least 10 years old. Quetiapine is also used together with antidepressant medications to treat major depressive disorder in adults."
                link="https://www.drugs.com/mtm/quetiapine.html"
              />
              <CustomCollapsible
                drug="Risperdal Consta"
                text="Risperdal Consta (risperidone) is an antipsychotic medication. It works by changing the effects of chemicals in the brain. Risperdal Consta is a long-acting injection used to treat schizophrenia and symptoms of bipolar disorder (manic depression). Risperdal Consta injection is sometimes given with lithium or valproate (Depakene). Risperdal Consta is not approved for use in psychotic conditions related to dementia. Risperidone may increase the risk of death in older adults with dementia-related conditions."
                link="https://www.drugs.com/risperdal_consta.html"
              /> */}
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
      )
    );
  }
}

export default ResultsPage;
