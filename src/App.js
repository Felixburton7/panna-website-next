// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Media from "./pages/Media";
import About from "./pages/About";
import Responsibility from "./pages/Responsibility";
import GameRules from "./pages/GameRules";
import Careers from "./pages/Careers";
import Shop from "./pages/Shop";
import Partners from "./pages/Partners";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* Navigation Bar (always visible) */}
      <Navbar />

      {/* Main Content */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/media" element={<Media />} />
          <Route path="/about" element={<About />} />
          <Route path="/responsibility" element={<Responsibility />} />
          <Route path="/rules" element={<GameRules />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
      </div>

      {/* Footer (always visible) */}
      <Footer />
    </div>
  );
}

export default App;
