import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <div className="customFooter flex" id="footer">
      <hr className="customFooter__divider" />
      <div className="flex customFooter__links">
      
        <a className="footerLink" href="https://www.semel.ucla.edu/profile/ariana-anderson-phd">
          Our Research
        </a>
        <Link to="/privacy" className="footerLink">
          Privacy Policy
        </Link>
        <a className="footerLink" href="mailto:arianaanderson@mednet.ucla.edu">
          Contact Us
        </a>
        <Link to="/faq" className="footerLink">
          FAQ
        </Link>
      </div>
    </div>
  );
}

export default Footer;
