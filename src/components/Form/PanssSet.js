import React from "react";
import PanssQuestion from "./PanssQuestion";

const disclaimer = "Please note: Medication response predictions require symptom scores from the PANSS, which must be performed by a clinician who interviews the patient. These scores are used to evaluate how symptomatic a patient may be in several domains. A higher score implies more severe symptoms, while a lower score implies more mild.";

function PanssSet(props) {
  const data = props.data;
  const data_names = props.data_names;
  const answers = props.answers;

  const mapped_data = data.map((question, index) => (
    <PanssQuestion
      key={props.start + index + 1}
      index={props.start + index + 1}
      value={answers["PANSS_" + data_names[index].replace(/\s/g, "").toUpperCase()]}
      name={"PANSS_" + data_names[index].replace(/\s/g, "").toUpperCase()}
      text={data_names[index]}
      saveAnswer={props.saveAnswer}
    />
  ));
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
      }}
    >
      <div className="disclaimer">
        {disclaimer}
      </div>
      {mapped_data}
    </div>
  );
}

export default PanssSet;
