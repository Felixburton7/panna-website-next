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
                            Looking for a motivated student or early-career candidate to support outbound sales for <span className={styles.brandName}>Panna</span>, a new sports betting app.
                        </p>

                        <ul className={styles.jobList}>
                            <li>Strong commission upside</li>
                            <li>Hands-on sales experience (great for CV)</li>
                            <li>Interest in football/sport is a bonus</li>
                            <li>Experience with GTM tools (e.g. Clay.com) helpful but not required - willingness to learn is key</li>
                        </ul>

                        <p className={styles.idealFor}>
                            <strong>Ideal for:</strong> students, recent grads, or job-seekers looking to break into sales.
                        </p>
                    </div>

                    <div className={styles.applySection}>
                        <a
                            href="mailto:info@panna-app.uk?subject=Sales Internship Application"
                            className={styles.applyButton}
                        >
                            Apply via Email <FaArrowRight style={{ marginLeft: '0.5rem' }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
