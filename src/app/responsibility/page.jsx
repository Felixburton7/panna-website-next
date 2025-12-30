// responsibility/page.jsx
import React from "react";
import styles from "./page.module.css";

export default function Responsibility() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        {/* Hero */}
        <div className={styles.hero}>
          <h1>Responsible Gambling</h1>
          <p>
            We keep play safe, simple, and in your control. Use our built-in tools
            and UK-wide protections to set limits, take breaks, or block access
            entirely when needed.
          </p>
        </div>

        {/* Core Tools */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>⚙</div>
            <h2 className={styles.sectionTitle}>Core Tools</h2>
          </div>
          <div className={styles.toolsList}>
            <div className={styles.toolItem}>
              <span className={styles.toolNumber}>01</span>
              <div className={styles.toolContent}>
                <h3>Deposit Limits</h3>
                <p>Set daily, weekly, or monthly caps on what you can add.</p>
              </div>
            </div>
            <div className={styles.toolItem}>
              <span className={styles.toolNumber}>02</span>
              <div className={styles.toolContent}>
                <h3>Time Limits</h3>
                <p>Control session length and get reminders to take a break.</p>
              </div>
            </div>
            <div className={styles.toolItem}>
              <span className={styles.toolNumber}>03</span>
              <div className={styles.toolContent}>
                <h3>Cool-off</h3>
                <p>Pause access instantly for short periods when you need it.</p>
              </div>
            </div>
            <div className={styles.toolItem}>
              <span className={styles.toolNumber}>04</span>
              <div className={styles.toolContent}>
                <h3>Self-exclusion</h3>
                <p>Lock your account for longer periods directly in the app.</p>
              </div>
            </div>
          </div>
        </section>

        {/* GAMSTOP */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>🛡</div>
            <h2 className={styles.sectionTitle}>GAMSTOP Integration</h2>
          </div>
          <div className={styles.infoBox}>
            <p>
              PANNA checks every login and deposit against{" "}
              <a
                href="https://www.gamstop.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.externalLink}
              >
                GAMSTOP
              </a>
              . If you're registered, access is blocked across PANNA and other UK operators.
            </p>
            <ul className={styles.checkList}>
              <li>Real-time checks on sign-in and deposits</li>
              <li>Immediate blocking for registered users</li>
              <li>Multi-operator coverage across the UK</li>
            </ul>
          </div>
        </section>

        {/* Get Support */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>💬</div>
            <h2 className={styles.sectionTitle}>Get Support</h2>
          </div>
          <div className={styles.supportLinks}>
            <a
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.supportLink}
            >
              <span className={styles.supportLinkText}>GamCare</span>
              <span className={styles.supportLinkArrow}>→</span>
            </a>
            <a
              href="https://www.begambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.supportLink}
            >
              <span className={styles.supportLinkText}>BeGambleAware</span>
              <span className={styles.supportLinkArrow}>→</span>
            </a>
            <div className={styles.helpline}>
              <div>
                <div className={styles.helplineLabel}>UK Freephone Helpline</div>
                <div className={styles.helplineNumber}>0808 8020 133</div>
              </div>
              <span className={styles.helplineBadge}>24/7</span>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <div className={styles.footerNote}>
          <p><strong>18+ only.</strong> Please play responsibly.</p>
        </div>
      </div>
    </div>
  );
}
