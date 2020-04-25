import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <div className="customFooter flex" id="footer">
      <hr className="customFooter__divider" />
      <div className="flex customFooter__links">
        <a
          className="footerLink"
          href="https://www.semel.ucla.edu/profile/ariana-anderson-phd"
        >
          Our Research
        </a>
        <a href="../Privacy_Policy_IRB.pdf" className="footerLink">
          Privacy Policy
        </a>

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
