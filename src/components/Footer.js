import React from "react";
import { Link } from "react-router-dom";
import gamblingCommissionLogo from "../assets/gambling_comission_logo.png";
import gamstopLogo from "../assets/gamstop_logo.png";
import begambleawareLogo from "../assets/begambleaware_logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Copyright */}
        <div className="footer-copyright">
          © 2025 Prosper Sports Limited
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <Link to="/privacy-policy" className="footer-link">
            Privacy Policy
          </Link>
          <Link to="/terms-conditions" className="footer-link">
            Terms & Conditions
          </Link>
          <Link to="/safer-gambling" className="footer-link">
            Safer Gambling
          </Link>
          <Link to="/contact-us" className="footer-link">
            Contact Us
          </Link>
        </div>

        {/* Regulatory Logos */}
        <div className="footer-logos">
          {/* Gambling Commission Logo */}
          <a
            href="https://www.gamblingcommission.gov.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="regulatory-link"
          >
            <img
              src={gamblingCommissionLogo}
              alt="Gambling Commission"
              className="regulatory-logo"
            />
          </a>

          {/* Gamstop Logo */}
          <a
            href="https://www.gamstop.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="regulatory-link"
          >
            <img 
              src={gamstopLogo} 
              alt="Gamstop" 
              className="regulatory-logo" 
            />
          </a>

          {/* BeGambleAware Logo */}
          <a
            href="https://www.begambleaware.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="regulatory-link"
          >
            <img
              src={begambleawareLogo}
              alt="Be Gamble Aware"
              className="regulatory-logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
