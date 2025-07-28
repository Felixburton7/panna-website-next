import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/newLogo.png";
import instagramLogo from "../assets/instagram_logo.png";
import whatsappLogo from "../assets/whatsapp_logo.png";
import xLogo from "../assets/x_logo.webp";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Section: Logo */}
        <div className="navbar-left">
          <Link to="/" className="navbar-logo-link">
            <img src={logo} alt="PANNA" className="navbar-logo" />
          </Link>
        </div>

        {/* Right Section: Social Icons and Join Waitlist Button */}
        <div className="navbar-right">
          <div className="social-icons">
            <a 
              href="https://www.instagram.com/panna.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-link"
            >
              <img src={instagramLogo} alt="Instagram" className="social-icon" />
            </a>
            <a 
              href="https://whatsapp.com/channel/0029VbAudnREQIatLdBnFf0O" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-link"
            >
              <img src={whatsappLogo} alt="WhatsApp" className="social-icon" />
            </a>
            <a 
              href="https://x.com/Panna_App" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-link"
            >
              <img src={xLogo} alt="X (Twitter)" className="social-icon" />
            </a>
          </div>
          
          <button 
            className="join-waitlist-btn"
            onClick={() => {
              // Scroll to the main CTA button or trigger form view
              const mainCta = document.querySelector('.hero-button');
              if (mainCta) {
                mainCta.click();
              }
            }}
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
