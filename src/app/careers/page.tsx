"use client";

import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { FaArrowRight, FaClock, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

export default function Careers() {
    return (
        <div className={styles["careers-page"]}>
            {/* Header Section */}
            <div className={styles.header}>
                <div className={styles.container}>
                    <h1 className={styles["header-title"]}>Join Our Team</h1>
                    <p className={styles["header-subtitle"]}>
                        We're looking for passionate individuals to help us redefine the sports betting experience.
                    </p>
                </div>

            </div>

            {/* Content Section */}
            <div className={styles.container}>
                <div className={styles["job-card"]}>

                    <div className={styles.jobHeader}>
                        <h2 className={styles.jobTitle}>Sales Internship</h2>
                        <div className={styles.jobHighlights}>
                            <div className={styles.highlightItem}>
                                <FaClock className={styles.highlightIcon} />
                                <span>Part-time</span>
                            </div>
                            <div className={styles.highlightItem}>
                                <FaCalendar className={styles.highlightIcon} />
                                <span>1-3 Months (ASAP)</span>
                            </div>
                            <div className={styles.highlightItem}>
                                <FaMapMarkerAlt className={styles.highlightIcon} />
                                <span>Flexible</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.jobSection}>
                        <p className={styles.introText}>
                            We're looking for a motivated student or early-career candidate to help drive outbound sales for <span className={styles.brandName}>Panna</span>.
                        </p>

                        <ul className={styles.jobList}>
                            <li>Earn commission on every deal</li>
                            <li>Get real-world sales experience (perfect for your CV)</li>
                            <li>Love football/sports? You'll fit right in</li>
                            <li>Experience with GTM tools (like Clay.com) is a plus, but we're happy to teach you if you're ready to learn</li>
                        </ul>

                        <p className={styles.idealFor}>
                            <strong>Who we need:</strong> Students, grads, or anyone hungry to break into sales.
                        </p>
                    </div>

                    <div className={styles.applySection}>
                        <a
                            href="mailto:info@panna-app.uk?subject=Sales Internship Application"
                            className={styles.applyButton}
                        >
                            Apply via Email <FaArrowRight style={{ marginLeft: '0.5rem' }} />
                        </a>
                        <p className={styles.emailNote}>
                            Or email us directly at <a href="mailto:info@panna-app.uk">info@panna-app.uk</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
