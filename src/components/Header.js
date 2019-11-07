import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/Logo-01.jpg";
import "./Header.css";

function Header() {
  return (
    <div className="customHeader flex">
      <div className="logoGroup flex">
        <img src={logo} className="ddLogo" alt="Logo" />
        <Link to="/" id="DrugDecider">
          DrugDecider
        </Link>
      </div>
      <div className="navBar flex">
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
