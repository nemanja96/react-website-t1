import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="website-info">
        <h1>Website</h1>
        <p>
          2021 OWW Studio by Nemanja.
          <br />
          <br />
          Terms of Service | Privacy Policy
        </p>
      </div>
      <div className="footer-links">
        <h2>Support</h2>
        <ul>
          <li>Tutorial</li>
          <li>Presentation</li>
          <li>Messages</li>
          <li>Management</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer-links">
        <h2>About us</h2>
        <ul>
          <li>Our Team</li>
          <li>Support Us</li>
          <li>Developer</li>
          <li>Design Team</li>
        </ul>
      </div>
      <div className="footer-links">
        <h2>Resources</h2>
        <ul>
          <li>Pricing Feature</li>
          <li>Help Center</li>
          <li>Server status</li>
          <li>Carers</li>
        </ul>
      </div>
      <div className="footer-links">
        <h2>Get in touch</h2>
        <p>Have a question for us?</p>
        <p>We'll answer your problem here!</p>
      </div>
    </div>
  );
}

export default Footer;
