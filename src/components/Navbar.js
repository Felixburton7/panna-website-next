import React, { useState, useEffect } from "react";
import "../pages/css/navbar.css";
import { Link, useLocation } from "react-router-dom";
import {
  FaTiktok,
  FaBars,
  FaTimes,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import logo from "../assets/logo.png";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

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
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Section: Logo */}
        <div className="navbar-left">
          <Link to="/" className="navbar-logo-link">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Link>
        </div>

        {/* Center Navigation Links (Desktop Only) */}
        <div className="navbar-center">
          <Link
            to="/games"
            className={isActive("/games") ? "active-link" : ""}
          >
            Games
          </Link>
          <Link
            to="/about"
            className={isActive("/about") ? "active-link" : ""}
          >
            About
          </Link>
          <Link
            to="/responsibility"
            className={isActive("/responsibility") ? "active-link" : ""}
          >
            Responsibility
          </Link>
          <Link
            to="/careers"
            className={isActive("/careers") ? "active-link" : ""}
          >
            Careers
          </Link>
          <Link
            to="/shop"
            className={isActive("/shop") ? "active-link" : ""}
          >
            Shop
          </Link>
          <Link
            to="/partners"
            className={isActive("/partners") ? "active-link" : ""}
          >
            Partners
          </Link>
        </div>
 {/* Play Now Link */}
 <div className="navbar-play-wrapper">
      <Link to="/play" className="navbar-play-link">
        Play now
      </Link>
    </div>
        {/* Right Section: Social Icons + "Play now" (Desktop Only) */}
        <div className="navbar-right">
      
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
          >
            <FaTiktok size={20} />
          </a>
          <a
            href="https://www.linkedin.com/company/105347341"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={20} color="#fff" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter size={20} color="#fff" />
          </a>
         
        </div>

        {/* Burger Icon (Mobile Only) */}
        <div className="burger-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
  <div className="mobile-menu">
    <Link to="/games" onClick={closeMobileMenu}>
      Games
    </Link>
    <Link to="/about" onClick={closeMobileMenu}>
      About
    </Link>
    <Link to="/responsibility" onClick={closeMobileMenu}>
      Responsibility
    </Link>
    <Link to="/careers" onClick={closeMobileMenu}>
      Careers
    </Link>
    <Link to="/shop" onClick={closeMobileMenu}>
      Shop
    </Link>
    <Link to="/partners" onClick={closeMobileMenu}>
      Partners
    </Link>
    {/* Single Divider Above Social Icons */}
    <div className="social-divider"></div>
    {/* Horizontal Social Icons */}
    {/* <div className="social-icons">
      <a
        href="https://www.tiktok.com"
        target="_blank"
        rel="noreferrer"
        aria-label="TikTok"
      >
        <FaTiktok />
      </a>
      <a
        href="https://www.linkedin.com"
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
    </div> */}
    {/* Play Now Button */}
    <button
      className="play-now-button"
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
