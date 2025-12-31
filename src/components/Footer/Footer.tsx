// src/components/Footer/Footer.tsx

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

// Import Assets
import logoImg from "../../assets/newLogo.png";
import yaspaImg from "../../assets/Yaspa.png";
import ukgcImg from "../../assets/gambling_comission_logo.png";
import gamstopImg from "../../assets/gamstop_logo.png";
import begambleawareImg from "../../assets/begambleaware_logo.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>

        {/* TOP ROW: Logo and Compliance Logos */}
        <div className={styles.topRow}>
          <div className={styles.logoSection}>
            <Image
              src={logoImg}
              alt="Panna Logo"
              width={120}
              height={50}
              className={styles.pannaLogo}
              style={{ width: "auto", height: "40px" }}
            />
          </div>
          <div className={styles.complianceLogos}>
            <a
              href="https://www.begambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.complianceLink}
            >
              <Image src={begambleawareImg} alt="BeGambleAware" className={styles.complianceLogo} width={100} height={30} />
            </a>
            <a
              href="https://www.gamstop.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.complianceLink}
            >
              <Image src={gamstopImg} alt="Gamstop" className={`${styles.complianceLogo} ${styles.gamstopLogo}`} width={100} height={30} />
            </a>
            <div className={styles.ageRestriction}>18+</div>
          </div>
        </div>

        <hr className={styles.divider} />

        {/* MIDDLE ROW: Social, Links, Payment */}
        <div className={styles.middleRow}>
          <div className={styles.middleLeft}>
            {/* Social Icons */}
            <div className={styles.socialIcons}>
              <a href="https://x.com/Panna_App" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/panna.app/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <FaLinkedinIn />
              </a>
              <a href="https://whatsapp.com/channel/0029VbAudnREQIatLdBnFf0O" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <FaWhatsapp />
              </a>
            </div>

            {/* Navigation Links */}
            <nav className={styles.navLinks}>
              <Link href="/terms-conditions" className={styles.navLink}>Terms</Link>
              <Link href="/privacy-policy" className={styles.navLink}>Privacy</Link>
              <Link href="/safer-gambling" className={styles.navLink}>Responsible Gaming</Link>
              <Link href="/contact-us" className={styles.navLink}>Contact us</Link>
            </nav>
          </div>

          <div className={styles.middleRight}>
            {/* Payment Logo */}
            <Image src={yaspaImg} alt="Yaspa" className={styles.paymentLogo} width={80} height={40} />
          </div>
        </div>

        {/* BOTTOM ROW: Company Info */}
        <div className={styles.bottomRow}>
          <p className={styles.companyText}>
            Prosper Sports Limited ("Panna") is a company registered in England and Wales (Company Number '15742284').
            <br />
            Prosper Sports Limited is licensed and regulated in Great Britain by the Gambling Commission under account number <a href="https://www.gamblingcommission.gov.uk/public-register/business/detail/64928" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>64928</a>.
          </p>
          <p className={styles.copyright}>
            ©2025 Prosper Sports Limited. All rights reserved.
          </p>
        </div>

        {/* Extra Bottom Space/Logo if needed - e.g. GC Logo */}
        <div className={styles.gcLogoRow}>
          <a
            href="https://www.gamblingcommission.gov.uk/public-register/business/detail/64928"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={ukgcImg} alt="Gambling Commission" width={120} height={50} style={{ width: "auto", height: "40px" }} />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
