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
                    <div className={styles["job-header"]}>
                        <h2 className={styles["job-title"]}>Sales Internship</h2>
                        <div className={styles["job-meta"]}>
                            <span>Part-time</span>
                            <span>1-3 Months (ASAP)</span>
                            <span>Flexible</span>
                        </div>
                    </div>

                    <div className={styles["job-section"]}>
                        <p>
                            Looking for a motivated student or early-career candidate to support outbound sales for a <span style={{ fontWeight: 'bold', color: '#0A674A' }}>Panna</span>, a new sports betting app.
                        </p>

                        <ul className={styles["job-list"]}>
                            <li>Strong commission upside</li>
                            <li>Hands-on sales experience (great for CV)</li>
                            <li>Interest in football/sport is a bonus</li>
                            <li>Experience with GTM tools (e.g. Clay.com) helpful but not required - willingness to learn is key</li>
                        </ul>

                        <p>
                            <strong>Ideal for:</strong> students, recent grads, or job-seekers looking to break into sales.
                        </p>
                    </div>

                    <div className={styles["apply-section"]}>
                        <a
                            href="mailto:info@panna-app.uk?subject=Sales Internship Application"
                            className={styles["apply-button"]}
                        >
                            Apply via Email <FaArrowRight style={{ marginLeft: '0.5rem', verticalAlign: 'middle' }} />
                        </a>
                        <p style={{ marginTop: '1rem', color: '#666', fontSize: '0.9rem' }}>
                            Or send your CV to <strong style={{ color: '#333' }}>info@panna-app.uk</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
