"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './WritersSidebar.module.css';

export default function WritersSidebar() {
  const [isOpen, setIsOpen] = useState(true); // Sidebar is visible by default

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar if the user clicks on the overlay
  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Burger Icon: always visible */}
      <button
        className={styles.burgerIcon}
        onClick={toggleSidebar}
        aria-label={isOpen ? 'Close Sidebar' : 'Open Sidebar'}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar: toggle 'hidden' class based on isOpen */}
      <nav className={`${styles.sidebar} ${!isOpen ? styles.hidden : ''}`}>
        <ul>
          <li>
            <Link href="/writers-home/articles">Articles</Link>
          </li>
          <li>
            <Link href="/writers-home/drafts">Drafts</Link>
          </li>
          <li>
            <Link href="/writers-home/help">Help</Link>
          </li>
          <li>
            <Link href="/writers-home/writers">Other Writers</Link>
          </li>
          <li>
            <Link href="/writers-home/account">Account</Link>
          </li>
        </ul>
      </nav>

      {/* Overlay: only shows when sidebar is open */}
      {isOpen && <div className={styles.overlay} onClick={handleOverlayClick} />}
    </>
  );
}
