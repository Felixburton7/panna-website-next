// src/components/Footer/Footer.tsx

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} ${styles.footerContent}`}>
        {/* Top Info */}
        <div className={styles.footerInfo}>
          © 2025 Prosper Sports Limited. All rights reserved.
        </div>

        <div className={styles.footerCompany}>
          <p>
            Prosper Sports Limited is a company registered in England and Wales
            (Company Number '15742284'). Prosper Sports Limited is licensed and
            regulated in Great Britain by the Gambling Commission under account
            number '64928'.
          </p>
        </div>

        {/* Footer Links */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', margin: '1rem 0', flexWrap: 'wrap' }}>
          <Link href="/privacy-policy" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>
            Privacy Policy
          </Link>
          <Link href="/terms-conditions" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>
            Terms & Conditions
          </Link>
          <Link href="/safer-gambling" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>
            Safer Gambling
          </Link>
          <Link href="/contact-us" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>
            Contact Us
          </Link>
        </div>

        {/* Footer Logos */}
        <div className={styles.footerLogos}>
          {/* 18+ */}
          <a
            href="https://www.begambleaware.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ageRestrictionLink}
            aria-label="BeGambleAware Age Restriction"
          >
            <div className={styles.ageRestriction} style={{ background: '#23AC55' }}>18+</div>
          </a>

          {/* Gambling Commission Logo */}
          <a
            href="https://www.gamblingcommission.gov.uk/public-register/business/detail/64928"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gambling Commission Website"
          >
            <Image
              src="/assets/ukgc.webp"
              alt="Gambling Commission"
              className={styles.footerLogo}
              width={100}
              height={50}
            />
          </a>

          {/* Gamstop Logo */}
          <a
            href="https://www.gamstop.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gamstop Website"
          >
            <Image
              src="/assets/gamstop_logo.png"
              alt="Gamstop"
              className={styles.footerLogo}
              width={100}
              height={50}
            />
          </a>

          {/* BeGambleAware Logo */}
          <a
            href="https://www.begambleaware.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="BeGambleAware Website"
          >
            <Image
              src="/assets/begambleaware_logo.png"
              alt="Be Gamble Aware"
              className={styles.footerLogo}
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
