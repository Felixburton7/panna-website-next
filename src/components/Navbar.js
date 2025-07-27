import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/newLogo.png";
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

        {/* Right Section: Join Waitlist Button */}
        <div className="navbar-right">
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
