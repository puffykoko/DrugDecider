import React from "react";
import Collapsible from "react-collapsible";

import triangle from "../assets/triangle.svg";

function CustomCollapsible(props) {
  return (
    <Collapsible
      trigger={
        <span className="collapsible-text">
          <span>{props.drug}</span>
          <img
            src={triangle}
            alt="Dropdown arrow"
            style={{
              float: "right",
              width: "15px",
              transition: "0.5s"
            }}
          />
        </span>
      }
      triggerWhenOpen={
        <span className="collapsible-text">
          <span>{props.drug}</span>
          <img
            src={triangle}
            alt="Dropdown arrow"
            style={{
              float: "right",
              width: "15px",
              transform: "rotate(-180deg)",
              transition: "0.5s"
            }}
          />
        </span>
      }
      transitionTime={300}
      easing="ease"
    >
      <p>{props.text}</p>
      <a className="more-info" href={props.link}>
        More information
      </a>
    </Collapsible>
  );
}

export default CustomCollapsible;
