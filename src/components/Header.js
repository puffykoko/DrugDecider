import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <div className="customHeader flex">
      <div className="logoGroup flex">
        <Link to="/" id="DrugDecider">
          DrugDecider
        </Link>
        <img
          src="https://www.trzcacak.rs/myfile/full/528-5283927_grey-circle-png-circle.png"
          className="ddLogo"
          alt="Logo"
        />
      </div>
      <div className="flex">
        <Link to="/form" className="headerLink">
          Get Started
        </Link>
        <Link to="/about" className="headerLink">
          About Us
        </Link>
      </div>
    </div>
  );
}

export default Header;
