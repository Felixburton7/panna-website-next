"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

import {
  FaTiktok,
  FaBars,
  FaTimes,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import logo from "../../../public/assets/newLogo.png";

import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string): boolean => pathname === path;

  // Close mobile menu if the screen widens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
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
      {/* Container */}
      <div className={styles["navbar-container"]}>
        {/* Left Section: Logo */}
        <div className={styles["navbar-left"]}>
          <Link href="/" className={styles["navbar-logo"]}>
            <Image
              src={logo}
              alt="Logo"
              height={42}
              style={{ marginTop: "10px" }} // or define in .navbar-logo
            />
          </Link>
        </div>

        {/* Center Navigation (Desktop Only) */}
        <div className={styles["navbar-center"]}>
          <Link
            href="/games"
            className={`${styles["games-link"]} ${
              isActive("/games") ? styles["active-link"] : ""
            }`}
          >
            Games
          </Link>
          <Link
            href="/about"
            className={isActive("/about") ? styles["active-link"] : ""}
          >
            About
          </Link>
          <Link
            href="/responsibility"
            className={isActive("/responsibility") ? styles["active-link"] : ""}
          >
            Responsibility
          </Link>
          <Link
            href="/careers"
            className={isActive("/careers") ? styles["active-link"] : ""}
          >
            Careers
          </Link>
          <Link
            href="/shop"
            className={isActive("/shop") ? styles["active-link"] : ""}
          >
            Shop
          </Link>
          <Link
            href="/partners"
            className={isActive("/partners") ? styles["active-link"] : ""}
          >
            Partners
          </Link>
        </div>

        {/* Play Now Link */}
        <div className={styles["navbar-play-wrapper"]}>
          <Link href="/play" className={styles["navbar-play-link"]}>
            Play now
          </Link>
        </div>

        {/* Right Section: Social Icons (Desktop Only) */}
        <div className={styles["navbar-right"]}>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
            className={styles["social-icon"]}
          >
            <FaTiktok size={20} />
          </a>
          <a
            href="https://www.linkedin.com/company/105347341"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className={styles["social-icon"]}
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className={styles["social-icon"]}
          >
            <FaInstagram size={20} color="#fff" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className={styles["social-icon"]}
          >
            <FaTwitter size={20} color="#fff" />
          </a>
        </div>

        {/* Burger Icon (Mobile) */}
        <div
          className={styles["burger-icon"]}
          onClick={toggleMobileMenu}
          role="button"
          tabIndex={0}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className={styles["mobile-menu"]}>
            <Link
              href="/games"
              onClick={closeMobileMenu}
              className={styles["mobile-link"]}
            >
              Games
            </Link>
            <Link
              href="/about"
              onClick={closeMobileMenu}
              className={styles["mobile-link"]}
            >
              About
            </Link>
            <Link
              href="/responsibility"
              onClick={closeMobileMenu}
              className={styles["mobile-link"]}
            >
              Responsibility
            </Link>
            <Link
              href="/careers"
              onClick={closeMobileMenu}
              className={styles["mobile-link"]}
            >
              Careers
            </Link>
            <Link
              href="/shop"
              onClick={closeMobileMenu}
              className={styles["mobile-link"]}
            >
              Shop
            </Link>
            <Link
              href="/partners"
              onClick={closeMobileMenu}
              className={styles["mobile-link"]}
            >
              Partners
            </Link>

            {/* Social Icons Row (Optional) */}
            <div className={styles["social-icons"]}>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.linkedin.com/company/105347341"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>

            {/* "Play Now" Button */}
            <button
              className={styles["play-now-button"]}
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
};

export default Navbar;
