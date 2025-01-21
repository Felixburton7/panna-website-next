// src/app/components/Navbar.js

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css"; // CSS Module

import {
  FaTiktok,
  FaBars,
  FaTimes,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import logo from "../../public/assets/newLogo.png";

import { usePathname } from "next/navigation"; // Importing usePathname

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Using usePathname to get current path

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => pathname === path;

  // Close mobile menu if the screen widens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* Left Section: Logo */}
        <div className={styles.navbarLeft}>
          <Link href="/" className={styles.navbarLogoLink}>
            <Image src={logo} alt="Logo" className={styles.navbarLogo} width={150} height={50} />
          </Link>
        </div>

        {/* Center Navigation Links (Desktop Only) */}
        <div className={styles.navbarCenter}>
          <Link
            href="/games"
            className={isActive("/games") ? styles.activeLink : ""}
          >
            Games
          </Link>
          <Link
            href="/about"
            className={isActive("/about") ? styles.activeLink : ""}
          >
            About
          </Link>
          <Link
            href="/responsibility"
            className={isActive("/responsibility") ? styles.activeLink : ""}
          >
            Responsibility
          </Link>
          <Link
            href="/careers"
            className={isActive("/careers") ? styles.activeLink : ""}
          >
            Careers
          </Link>
          <Link
            href="/shop"
            className={isActive("/shop") ? styles.activeLink : ""}
          >
            Shop
          </Link>
          <Link
            href="/partners"
            className={isActive("/partners") ? styles.activeLink : ""}
          >
            Partners
          </Link>
        </div>

        {/* Play Now Link */}
        <div className={styles.navbarPlayWrapper}>
          <Link href="/play" className={styles.navbarPlayLink}>
            Play now
          </Link>
        </div>

        {/* Right Section: Social Icons (Desktop Only) */}
        <div className={styles.navbarRight}>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
            className={styles.socialIcon}
          >
            <FaTiktok size={20} />
          </a>
          <a
            href="https://www.linkedin.com/company/105347341"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className={styles.socialIcon}
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className={styles.socialIcon}
          >
            <FaInstagram size={20} color="#fff" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className={styles.socialIcon}
          >
            <FaTwitter size={20} color="#fff" />
          </a>
        </div>

        {/* Burger Icon (Mobile Only) */}
        <div className={styles.burgerIcon} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <Link href="/games" onClick={closeMobileMenu} className={styles.mobileLink}>
              Games
            </Link>
            <Link href="/about" onClick={closeMobileMenu} className={styles.mobileLink}>
              About
            </Link>
            <Link href="/responsibility" onClick={closeMobileMenu} className={styles.mobileLink}>
              Responsibility
            </Link>
            <Link href="/careers" onClick={closeMobileMenu} className={styles.mobileLink}>
              Careers
            </Link>
            <Link href="/shop" onClick={closeMobileMenu} className={styles.mobileLink}>
              Shop
            </Link>
            <Link href="/partners" onClick={closeMobileMenu} className={styles.mobileLink}>
              Partners
            </Link>
            {/* Single Divider Above Social Icons */}
            <div className={styles.socialDivider}></div>
            {/* Play Now Button */}
            <button
              className={styles.playNowButton}
              onClick={() => {
                closeMobileMenu();
                window.location.href = "/play";
              }}
            >
              Play Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
