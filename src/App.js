// // src/App.js
// import React from "react";

// import { Routes, Route } from "react-router-dom";
// import { SpeedInsights } from "@vercel/speed-insights/react";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Games from "./pages/Games"; 
// import TermsAndConditions from "./components/terms_and_conditions";

// import About from "./pages/About";
// import Responsibility from "./pages/Responsibility";
// import GameRules from "./pages/GameRules";
// import Careers from "./pages/Careers";
// import Shop from "./pages/Shop";
// import Partners from "./pages/Partners";
// import { Helmet } from "react-helmet";


// import "./App.css";

// function App() {
//   return (
//     <div className="app-container">
//        <Helmet>
//         <title>Panna</title>
//       </Helmet>
//       {/* Navigation Bar (always visible) */}
//       <Navbar />

//       {/* Main Content */}
//       <div className="main-content">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/games" element={<Games />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/responsibility" element={<Responsibility />} />
//           <Route path="/rules" element={<GameRules />} />
//           <Route path="/careers" element={<Careers />} />
//           <Route path="/shop" element={<Shop />} />
//           <Route path="/partners" element={<Partners />} />
//           <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

//         </Routes>
//         <SpeedInsights />

//       </div>

//       {/* Footer (always visible) */}
//       <Footer />
//     </div>
//   );
// }

// export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react"; // Import Vercel Analytics
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Games from "./pages/Games";
import TermsAndConditions from "./components/terms_and_conditions";
import About from "./pages/About";
import Responsibility from "./pages/Responsibility";
import GameRules from "./pages/GameRules";
import Careers from "./pages/Careers";
import Shop from "./pages/Shop";
import Partners from "./pages/Partners";
import { Helmet } from "react-helmet";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Helmet>
        <title>Panna</title>
      </Helmet>
      {/* Navigation Bar (always visible) */}
      <Navbar />

      {/* Main Content */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/about" element={<About />} />
          <Route path="/responsibility" element={<Responsibility />} />
          <Route path="/rules" element={<GameRules />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
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
