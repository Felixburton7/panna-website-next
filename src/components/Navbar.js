// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaTiktok,
//   FaBars,
//   FaTimes,
//   FaLinkedinIn,
// } from "react-icons/fa";
// import logo from "../assets/logo.png";

// /**
//  * Updated:
//  * - Removed YouTube, replaced with LinkedIn
//  * - Fixed Instagram icon to a white version
//  * - "Play now" is same size + style as other links, not uppercase
//  * - Aligned all items horizontally
//  */
// function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         {/* Left Section: Logo */}
//         <div className="navbar-left">
//           <Link to="/" className="navbar-logo-link">
//             <img src={logo} alt="Logo" className="navbar-logo" />
//           </Link>
//         </div>

//         {/* Center Navigation Links (Desktop Only) */}
//         <div className="navbar-center">
//           <Link to="/media">Media</Link>
//           <Link to="/about">About</Link>
//           <Link to="/responsibility">Responsibility</Link>
//           <Link to="/careers">Careers</Link>
//           <Link to="/shop">Shop</Link>
//           <Link to="/partners">Partners</Link>
//         </div>

//         {/* Right Section: Social Icons + "Play now" (Desktop Only) */}
//         <div className="navbar-right">
//           {/* Social Icons */}
//           <a
//             href="https://www.tiktok.com"
//             target="_blank"
//             rel="noreferrer"
//             aria-label="TikTok"
//           >
//             <FaTiktok size={20} />
//           </a>
//           <a
//             href="https://www.linkedin.com"
//             target="_blank"
//             rel="noreferrer"
//             aria-label="LinkedIn"
//           >
//             <FaLinkedinIn size={20} />
//           </a>
//           <a
//             href="https://www.instagram.com"
//             target="_blank"
//             rel="noreferrer"
//             aria-label="Instagram"
//           >
//             {/* White Instagram icon */}
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
//               alt="Instagram"
//               style={{ width: 20, height: 20 }}
//             />
//           </a>
//           <a
//             href="https://twitter.com"
//             target="_blank"
//             rel="noreferrer"
//             aria-label="Twitter"
//           >
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
//               alt="Twitter"
//               style={{ width: 20, height: 20 }}
//             />
//           </a>

//           {/* "Play now" link — same size & style as other links */}
//           <Link to="/play" className="navbar-play-link">
//             Play now
//           </Link>
//         </div>

//         {/* Burger Icon (Mobile Only) */}
//         <div className="burger-icon" onClick={toggleMobileMenu}>
//           {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </div>

//         {/* Mobile Dropdown Menu */}
//         {isMobileMenuOpen && (
//           <div className="mobile-menu">
//             <Link to="/media" onClick={closeMobileMenu}>
//               Media
//             </Link>
//             <Link to="/about" onClick={closeMobileMenu}>
//               About
//             </Link>
//             <Link to="/responsibility" onClick={closeMobileMenu}>
//               Responsibility
//             </Link>
//             <Link to="/careers" onClick={closeMobileMenu}>
//               Careers
//             </Link>
//             <Link to="/shop" onClick={closeMobileMenu}>
//               Shop
//             </Link>
//             <Link to="/partners" onClick={closeMobileMenu}>
//               Partners
//             </Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTiktok,
  FaBars,
  FaTimes,
  FaLinkedinIn,
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
            to="/media"
            className={isActive("/media") ? "active-link" : ""}
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
            href="https://www.linkedin.com"
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
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
              style={{ width: 20, height: 20 }}
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
              style={{ width: 20, height: 20 }}
            />
          </a>
          <Link to="/play" className="navbar-play-link">
            Play now
          </Link>
        </div>

        {/* Burger Icon (Mobile Only) */}
        <div className="burger-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <Link to="/media" onClick={closeMobileMenu}>
              Mission
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
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
