// src/pages/Shop.js
import React from "react";
import "./css/shop.css"; // Add custom styles if needed

function Shop() {
  return (
    <div className="shop-page">
      <header className="shop-header">
        <h1>Panna Shop</h1>
        <p>Your go-to place for official Panna merchandise. Coming soon!</p>
      </header>
      <main className="shop-content">
        <div className="product-grid">
          {/* Placeholder for product items */}
          <div className="product-placeholder">
            <p></p>
            <span>Coming Soon</span>
          </div>
          <div className="product-placeholder">
            <p></p>
            <span>Coming Soon</span>
          </div>
          <div className="product-placeholder">
            <p></p>
            <span>Coming Soon</span>
          </div>
          <div className="product-placeholder">
            <p></p>
            <span>Coming Soon</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Shop;
