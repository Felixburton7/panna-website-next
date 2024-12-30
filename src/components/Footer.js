import React from "react";

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
            (Company Number '' ). Prosper Sports Limited is licensed and
            regulated in Great Britain by the Gambling Commission under account
            number '' .
          </p>
        </div>

        {/* Pages/links */}
        <div className="footer-links">
          <h4>Pages</h4>
          <a href="/rules">Rules</a>
          <a href="/terms-and-conditions">Terms & Conditions</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
