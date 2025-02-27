// src/app/about/page.tsx

"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css"; // Importing CSS Module
import Link from "next/link";
import { FaTiktok, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa"; // Using react-icons

interface FlickerStatProps {
  finalValue: number;
  minValue: number;
  maxValue: number;
  prefix: string;
  suffix: string;
  flickerDuration?: number;
}

const FlickerStat: React.FC<FlickerStatProps> = ({
  finalValue,
  minValue,
  maxValue,
  prefix,
  suffix,
  flickerDuration = 8000,
}) => {
  const [currentValue, setCurrentValue] = useState(finalValue);
const [hasLanded, setHasLanded] = useState(false);


  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;

      if (elapsed >= flickerDuration) {
        clearInterval(interval);
        setCurrentValue(finalValue);
        setHasLanded(true);
      } else {
        const randomNum = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        setCurrentValue(randomNum);
      }
    }, 80); // update ~12 times per second

    return () => clearInterval(interval);
  }, [finalValue, minValue, maxValue, flickerDuration]);

  const displayText = `${prefix}${currentValue}${suffix}`;

  return <h3 className={styles["stat-value"]}>{displayText}</h3>;
};

const About: React.FC = () => {
  const statsData = [
    {
      finalValue: 1,
      minValue: 0,
      maxValue: 10,
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
    <div className={styles["about-page"]}>

      {/* ABOUT TOP SECTION */}
      <section className={styles["about-top-section"]}>
        <div className={styles["about-header"]}>
          <h1 className={styles["about-header-title"]}>
            <span className={styles["neon-blue"]}>Panna</span> challenges traditional gambling, creating a new platform that’s social, transparent, and fair.
          </h1>
          <div className={styles["play-now-container"]}>
            <Link href="/responsibility">
              <button className={styles["learn-more-button"]}>Learn more</button>
            </Link>
          </div>
        </div>
  {/* Divider */}
  <div className={styles["about-divider"]}></div>
  
        <div className={styles.container}>
          <h1 className={`${styles["about-top-heading"]} ${styles["purple-text"]}`}>Our Mission</h1>
          <p className={styles["about-top-subheading"]}>
            Changing the gambling industry for the better. We believe in creating a more engaging, fair, and social experience for everyone.
          </p>

          <h2 className={`${styles["about-top-why"]} ${styles["white-text"]}`}>Why Social Gambling?</h2>
          <div className={styles["about-stats"]}>
            {statsData.map((stat, idx) => (
              <React.Fragment key={idx}>
                <div className={styles.stat}>
                  {/* FlickerStat displays the flickering number */}
                  <FlickerStat
                    finalValue={stat.finalValue}
                    minValue={stat.minValue}
                    maxValue={stat.maxValue}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    flickerDuration={1500} /* 1.5s flicker total */
                  />
                  <p className={styles["stat-label"]}>{stat.label}</p>
                </div>
                {idx < statsData.length - 1 && <div className={styles.divider}></div>}
              </React.Fragment>
            ))}
          </div>

          <h2 className={styles["about-top-stand-for"]}>What We Stand For</h2>
          <p className={styles["about-top-text"]}>
            At Panna, we are redefining gambling by making it more social,
            transparent, and responsible. By fostering community connections
            and integrating modern tools, we aim to ensure that gambling is
            not only fun but also safe and within limits.
          </p>
          <p className={styles["about-top-text"]}>
            Our focus on innovation and community-driven gameplay creates a new
            type of experience that brings people together. We are here to make
            social gambling the preferred choice for millions of players.
          </p>

          <h2 className={styles["about-top-follow"]}>Follow our Journey</h2>
          <div className={styles["about-top-socials"]}>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              className={styles["social-icon"]}
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className={styles["social-icon"]}
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className={styles["social-icon"]}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className={styles["social-icon"]}
              aria-label="Discord"
            >
              <FaDiscord />
            </a>
          </div>

          {/* Divider */}
          <div className={styles["about-divider"]}></div>
        </div>
      </section>

      {/* EXECUTIVE SECTION */}
      <section className={styles["executive-section"]}>
        <div className={styles.container}>
          <h2 className={styles["exec-heading"]}>Founders &amp; Executive Team</h2>
          <ul className={styles["exec-list"]}>
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
      

      {/* JOEY LEVY QUOTE */}
      <section className={styles["joey-levy-section"]}>
        <div className={`${styles.container} ${styles["joey-levy-container"]}`}>
          <blockquote className={styles["joey-levy-quote"]}>
            
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

      {/* JOIN TEAM SECTION */}
      <section className={styles["join-team-section"]}>
        <div className={styles.container}>
          <h2 className={styles["join-team-heading"]}>Join the team</h2>
          <p className={styles["join-team-desc"]}>
            Come build with us in Oxford, UK, as we make sports &amp; betting
            better.
          </p>
          <a href="#job-openings" className={styles["job-openings-link"]}>
            See job openings
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;