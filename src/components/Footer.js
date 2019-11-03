import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <div className="customFooter" id="footer">
      <hr className="customFooter__divider" />
      <div className="customFooter__links flex">
        <Link to="/research" className="footerLink">
          Our Research
        </Link>
        <Link to="/privacy" className="footerLink">
          Privacy Policy
        </Link>
        <Link to="/contact" className="footerLink">
          Contact Us
        </Link>
        <Link to="/faq" className="footerLink">
          FAQ
        </Link>
      </div>
    </div>
  );
}

export default Footer;
