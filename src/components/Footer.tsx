

// src/app/components/Footer.tsx

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css"; // CSS Module

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
            <Image
              src="/assets/gambling_commission_logo.png"
              alt="Gambling Commission"
              className="footer-logo"
              width={100} // Adjust as needed
              height={50} // Adjust as needed
            />
          </a>

          {/* Gamstop Logo */}
          <a
            href="https://www.gamstop.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/gamstop_logo.png"
              alt="Gamstop"
              className="footer-logo"
              width={100}
              height={50}
            />
          </a>

          {/* BeGambleAware Logo */}
          <a
            href="https://www.begambleaware.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/begambleaware_logo.png"
              alt="Be Gamble Aware"
              className="footer-logo"
              width={100}
              height={50}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

