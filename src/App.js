

// export default App;
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import ComplaintsDisputes from "./pages/ComplaintsDisputes";
import SaferGambling from "./pages/SaferGambling";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Helmet>
        <title>Panna - The newest social sports betting app</title>
        <meta name="description" content="Panna provides a platform to connect and play your favourite fantasy sports games" />
      </Helmet>
      
      {/* Navigation Bar (always visible) */}
      <Navbar />

      {/* Main Content */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/complaints-disputes" element={<ComplaintsDisputes />} />
          <Route path="/safer-gambling" element={<SaferGambling />} />
        </Routes>
        <SpeedInsights />
      </div>

      {/* Footer (always visible) */}
      <Footer />

      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
}

export default App;
