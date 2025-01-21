// src/app/shop/page.jsx

"use client";

import React from "react";
import styles from "./page.module.css"; // Correct import for CSS Modules

function Shop() {
  return (
    <div className={styles.shopPage}>
      <header className={styles.shopHeader}>
        <h1>Panna Shop</h1>
        <p>Your go-to place for official Panna merchandise. Coming soon!</p>
      </header>
      <main className={styles.shopContent}>
        <div className={styles.productGrid}>
          {/* Placeholder for product items */}
          <div className={styles.productPlaceholder}>
            <p></p>
            <span>Coming Soon</span>
          </div>
          <div className={styles.productPlaceholder}>
            <p></p>
            <span>Coming Soon</span>
          </div>
          <div className={styles.productPlaceholder}>
            <p></p>
            <span>Coming Soon</span>
          </div>
          <div className={styles.productPlaceholder}>
            <p></p>
            <span>Coming Soon</span>
          </div>
          <div className={styles.productPlaceholder}>
            <p></p>
            <span>Coming Soon</span>
          </div>
          {/* ... other placeholders */}
        </div>
      </main>
    </div>
  );
}

export default Shop;
