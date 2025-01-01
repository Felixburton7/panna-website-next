import React, { useState, useEffect } from "react";
import "../pages/css/about.css";
import { Link } from "react-router-dom";

// Sample images (not used if not needed)
import director1 from "../assets/director1.jpeg";
import director2 from "../assets/directorWJ.png";
import director3 from "../assets/mockup2.png";
import joeyLevyPic from "../assets/joey_levy.png";

function FlickerStat({ finalValue, minValue, maxValue, prefix, suffix, flickerDuration = 7000 }) {
  const [currentValue, setCurrentValue] = useState(finalValue); // display value
  const [hasLanded, setHasLanded] = useState(false);

  useEffect(() => {
    // We'll flicker for 'flickerDuration' ms, then set final.
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;

      if (elapsed >= flickerDuration) {
        // Stop flickering, land on finalValue
        clearInterval(interval);
        setCurrentValue(finalValue);
        setHasLanded(true);
      } else {
        // Flicker: pick random number in [minValue, maxValue]
        const randomNum = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        setCurrentValue(randomNum);
      }
    }, 80); // update ~12 times per second

    return () => clearInterval(interval);
  }, [finalValue, minValue, maxValue, flickerDuration]);

  // If you have special formatting for “Top 10” vs. “#1”
  // you can just do prefix + currentValue + suffix:
  const displayText = `${prefix}${currentValue}${suffix}`;

  return (
    <h3 className="stat-value">
      {displayText}
    </h3>
  );
}

function About() {
  // Stats array for the "Why Social Gambling?" section
  // Each has final numeric value, plus min/max for flicker,
  // and optional prefix or suffix.
  const statsData = [
    {
      finalValue: 1,         // final number to display
      minValue: 0,           // random flicker lower bound
      maxValue: 10,           // random flicker upper bound
      prefix: "#",
      suffix: "",
      label: "Sports League",
    },
    {
      finalValue: 100,
      minValue: 0,
      maxValue: 100,
      prefix: "",
      suffix: "%",
      label: "For the players",
    },
    {
      finalValue: 10,
      minValue: 1,
      maxValue: 10,
      prefix: "Top ",
      suffix: "",
      label: "Social Gambling Platform in UK",
    },
    {
      finalValue: 20,
      minValue: 1,
      maxValue: 20,
      prefix: "",
      suffix: "%",
      label: "Engagement rate",
    },
  ];

  return (
    <div className="about-page">

      {/* ABOUT TOP SECTION */}
      <section className="about-top-section">
        <div className="about-header">
          <h1 className="about-header-title">
            <span className="neon-blue">Panna</span> challenges traditional gambling, creating a new platform that’s social, transparent, and fair.
          </h1>
          <div className="play-now-container">
            <Link to="/responsibility">
              <button className="learn-more-button">Learn more</button>
            </Link>
          </div>
        </div>

        <div className="container">
          <h1 className="about-top-heading purple-text">Our Mission</h1>
          <p className="about-top-subheading">
            Changing the gambling industry for the better. We believe in creating a more engaging, fair, and social experience for everyone.
          </p>

          <h2 className="about-top-why white-text">Why Social Gambling?</h2>
          <div className="about-stats">
            {statsData.map((stat, idx) => (
              <React.Fragment key={idx}>
                <div className="stat">
                  {/* FlickerStat displays the flickering number */}
                  <FlickerStat
                    finalValue={stat.finalValue}
                    minValue={stat.minValue}
                    maxValue={stat.maxValue}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    flickerDuration={1500} /* 1.5s flicker total */
                  />
                  <p className="stat-label">{stat.label}</p>
                </div>
                {idx < statsData.length - 1 && <div className="divider"></div>}
              </React.Fragment>
            ))}
          </div>

          <h2 className="about-top-stand-for">What We Stand For</h2>
          <p className="about-top-text">
            At Panna, we are redefining gambling by making it more social,
            transparent, and responsible. By fostering community connections
            and integrating modern tools, we aim to ensure that gambling is
            not only fun but also safe and within limits.
          </p>
          <p className="about-top-text">
            Our focus on innovation and community-driven gameplay creates a new
            type of experience that brings people together. We are here to make
            social gambling the preferred choice for millions of players.
          </p>

          <h2 className="about-top-follow">Follow our Journey</h2>
          <div className="about-top-socials">
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="TikTok"
            >
              <i className="fab fa-tiktok"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="Discord"
            >
              <i className="fab fa-discord"></i>
            </a>
          </div>

          {/* Divider */}
          <div className="about-divider"></div>
        </div>
      </section>

      {/* (Rest of your About page content) */}
      
      <section className="executive-section">
        <div className="container">
          <h2 className="exec-heading">Founders &amp; Executive Team</h2>
          <ul className="exec-list">
            <li>
              Felix Burton -{" "}
              <a
                href="https://www.linkedin.com/in/felix-burton-353a7016b/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              Will Jones —{" "}
              <a
                href="https://www.linkedin.com/in/will-jones-743967160/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              Caspar Raworth —{" "}
              <a
                href="https://www.linkedin.com/search/results/all/?keywords=caspar%20raworth"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="joey-levy-section">
        <div className="container joey-levy-container">
          <blockquote className="joey-levy-quote">
            <p>
              “If we believe that social-betting will be the predominant way
              people bet on sports in the UK, then someone should launch
              the world’s first social-betting-focused app. This is why we are
              starting Panna.”
            </p>
            <cite>Caspar Raworth, Founder &amp; Director</cite>
          </blockquote>
        </div>
      </section>

      <section className="join-team-section">
        <div className="container">
          <h2 className="join-team-heading">Join the team</h2>
          <p className="join-team-desc">
            Come build with us in Oxford, UK, as we make sports &amp; betting
            better.
          </p>
          <a href="#job-openings" className="job-openings-link">
            See job openings
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
