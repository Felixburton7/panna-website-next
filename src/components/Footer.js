import React from "react";
import gamblingCommissionLogo from "../assets/gambling_commision_logo.png"; // Correct file name
import gamstopLogo from "../assets/gamstop_logo.png";
import begambleawareLogo from "../assets/begambleaware_logo.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        {/* Top Info */}
        <div className="footer-info">
          © 2024 Prosper Sports Limited. All rights reserved.
        </div>

        <div className="footer-company">
          <p>
            Prosper Sports Limited is a company registered in England and Wales
            (Company Number '15694810'). Prosper Sports Limited is licensed and
            regulated in Great Britain by the Gambling Commission under account
            number '64928'.
          </p>
        </div>

        {/* Footer Logos */}
        <div className="footer-logos">
          {/* 18+ */}
          <a
            href="https://www.begambleaware.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="age-restriction">18+</div>
          </a>

          {/* Gambling Commission Logo */}
          <a
            href="https://www.gamblingcommission.gov.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={gamblingCommissionLogo}
              alt="Gambling Commission"
              className="footer-logo"
            />
          </a>

          {/* Gamstop Logo */}
          <a
            href="https://www.gamstop.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gamstopLogo} alt="Gamstop" className="footer-logo" />
          </a>

          {/* BeGambleAware Logo */}
          <a
            href="https://www.begambleaware.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={begambleawareLogo}
              alt="Be Gamble Aware"
              className="footer-logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
