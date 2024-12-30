import React from "react";

// Sample images for directors (replace with real images)
import director1 from "../assets/director1.jpeg";
import director2 from "../assets/mockup2.png";
import director3 from "../assets/mockup2.png";
import joeyLevyPic from "../assets/joey_levy.png"; // Joey Levy picture

function About() {
  return (
    <div className="about-page">

      {/* MISSION STATEMENT */}
      <section className="mission-section">
        <div className="container">
          <h1 className="mission-heading">
            Our Mission Statement
          </h1>
          <p className="mission-paragraph">
            Gambling and skill-based gaming can be an exciting way to pass
            the time, but it needs to be enjoyed in moderation and within a
            budget. Responsible play is the better way to play.
          </p>
        </div>
      </section>

      {/* DIRECTORS SECTION */}
      <section className="directors-section">
        <div className="container">
          <h2 className="directors-heading">Directors</h2>
          <div className="directors-row">
            {/* Director 1 */}
            <div className="director-card">
              <img src={director1} alt="Director 1" className="director-img" />
              <h3 className="director-name">Felix Burton</h3>
              <p className="director-description">
                Overseeing strategic development<br />
                and product innovation
              </p>
              <a
                href="https://www.linkedin.com/in/felix-burton-353a7016b/"
                target="_blank"
                rel="noreferrer"
                className="director-linkedin"
              >
                LinkedIn
              </a>
            </div>

            {/* Director 2 */}
            <div className="director-card">
              <img src={director2} alt="Director 2" className="director-img" />
              <h3 className="director-name">John Smith</h3>
              <p className="director-description">
                Leading corporate finance<br />
                and legal operations
              </p>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="director-linkedin"
              >
                LinkedIn
              </a>
            </div>

            {/* Director 3 */}
            <div className="director-card">
              <img src={director3} alt="Director 3" className="director-img" />
              <h3 className="director-name">Alex Brown</h3>
              <p className="director-description">
                Driving marketing initiatives<br />
                and brand partnerships
              </p>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="director-linkedin"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS & EXECUTIVE TEAM */}
      <section className="executive-section">
        <div className="container">
          <h2 className="exec-heading">Founders &amp; Executive Team</h2>
          <ul className="exec-list">
            <li>Oliver Hunt — Founder &amp; CEO <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li>Emily Rose — Co-Founder <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li>Charlie Lane — Head of Gaming <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li>Lucas Green — Head of Media <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li>Amelia Clarke — Head of Finance <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li>Isla Reed — Head of Media Revenue <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li>Ella Walker — Head of Marketing <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>

          <h3 className="board-heading">Board of Directors</h3>
          <ul className="board-list">
            <li>Oliver Hunt</li>
            <li>Sarah White</li>
            <li>James Black</li>
            <li>Sophia Davis</li>
            <li>Thomas Evans</li>
            <li>Grace Wilson</li>
            <li>Liam Hall</li>
            <li>Chloe Adams</li>
            <li>Lucas Green</li>
            <li>Amelia Clarke</li>
          </ul>
        </div>
      </section>

      {/* JOEY LEVY QUOTE */}
      <section className="joey-levy-section">
        <div className="container joey-levy-container">
          <img
            src={joeyLevyPic}
            alt="Oliver Hunt"
            className="joey-levy-pic"
          />
          <blockquote className="joey-levy-quote">
            <p>
              “If we believe that micro-betting will be the predominant way
              people bet on sports in the UK, then someone should launch
              the world’s first micro-betting-focused app. This is why we are
              starting Panna.”
            </p>
            <cite>Oliver Hunt, Founder &amp; CEO</cite>
            <a href="#read-note" className="read-note-link">
              Read full note
            </a>
          </blockquote>
        </div>
      </section>

      {/* JOIN THE TEAM */}
      <section className="join-team-section">
        <div className="container">
          <h2 className="join-team-heading">Join the team</h2>
          <p className="join-team-desc">
            Come build with us in Oxford, UK, as we make sports &amp; betting better.
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
