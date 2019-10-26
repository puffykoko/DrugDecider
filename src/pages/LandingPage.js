import React from "react";

import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="container">
      <div className="content flex">
        <div className="textContent">
          <h2>Find what works for you.</h2>
          <p>
            Drug Decider helps patients find the right medication by analyzing
            their medical history. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed suscipit, massa sit amet euismod scelerisque.
          </p>
        </div>
        <div className="imageContent flex">
          <img
            src="https://nathanbrixius.files.wordpress.com/2013/02/image3.png"
            id="landingImage"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
