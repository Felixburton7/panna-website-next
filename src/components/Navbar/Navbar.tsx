// src/components/Navbar/Navbar.tsx

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
              src="/assets/newLogo.png"
              alt="Panna Logo"
              width={50}
              height={50}
              style={{ 
                objectFit: "contain",
                width: "auto",
                height: "42px",
                maxWidth: "150px"
              }}
            />
          </Link>
        </div>

        {/* Center Navigation (Desktop Only) */}
        <div className={styles["navbar-center"]}>
          <Link
            href="/about"
            className={isActive("/about") ? styles["active-link"] : ""}
          >
            About
          </Link>
          <Link
            href="/games"
            className={`${styles["games-link"]} ${
              isActive("/games") ? styles["active-link"] : ""
            }`}
          >
            Games
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
        </div>

        {/* Play Now Link */}
        <div className={styles["navbar-play-wrapper"]}>
          <Link href="https://panna-app.uk" className={styles["navbar-play-link"]}>
            Play now
          </Link>
        </div>

        {/* Right Section: Social Icons (Desktop Only) */}
        <div className={styles["navbar-right"]}>
          <a
            href="https://www.instagram.com/panna.app/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className={styles["social-icon"]}
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://whatsapp.com/channel/0029VbAudnREQIatLdBnFf0O"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className={styles["social-icon"]}
          >
            {/* Using a generic icon since WhatsApp icon isn't in react-icons/fa */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
            </svg>
          </a>
          <a
            href="https://x.com/Panna_App"
            target="_blank"
            rel="noreferrer"
            aria-label="X (Twitter)"
            className={styles["social-icon"]}
          >
            <FaTwitter size={20} />
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
              href="/about"
              onClick={closeMobileMenu}
              className={styles["mobile-link"]}
            >
              About
            </Link>
            <Link
              href="/games"
              onClick={closeMobileMenu}
              className={styles["mobile-link"]}
            >
              Games
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

            {/* Social Icons Row */}
            <div className={styles["social-icons"]}>
              <a
                href="https://www.instagram.com/panna.app/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://whatsapp.com/channel/0029VbAudnREQIatLdBnFf0O"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                </svg>
              </a>
              <a
                href="https://x.com/Panna_App"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
              >
                <FaTwitter />
              </a>
            </div>

            {/* "Play Now" Button */}
            <button
              className={styles["play-now-button"]}
              onClick={() => {
                closeMobileMenu();
                window.location.href = "https://panna-app.uk";
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
