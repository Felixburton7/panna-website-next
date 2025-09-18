// responsibility/page.jsx
import React from "react";
import styles from "./page.module.css";

export default function Responsibility() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h1>Responsible Gambling at PANNA</h1>

        <section>
          <p>
            We keep play safe, simple, and in your control. Use our built-in tools
            and UK-wide protections to set limits, take breaks, or block access
            entirely when needed.
          </p>
        </section>

        <section>
          <h2>Core Tools</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Deposit limits</h3>
              <p>Set daily, weekly, or monthly caps on what you can add.</p>
            </div>
            <div className={styles.card}>
              <h3>Time limits</h3>
              <p>Control session length and get reminders to take a break.</p>
            </div>
            <div className={styles.card}>
              <h3>Cool‑off</h3>
              <p>Pause access instantly for short periods when you need it.</p>
            </div>
            <div className={styles.card}>
              <h3>Self‑exclusion</h3>
              <p>Lock your account for longer periods directly in the app.</p>
            </div>
          </div>
        </section>

        <section>
          <h2>GAMSTOP integration</h2>
          <p>
            PANNA checks every login and deposit against <a href="https://www.gamstop.co.uk/" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>GAMSTOP</a>.
            If you’re registered, access is blocked across PANNA and other UK
            operators.
          </p>
          <ul>
            <li>Real‑time checks on sign‑in and deposits</li>
            <li>Immediate blocking for registered users</li>
            <li>Multi‑operator coverage across the UK</li>
          </ul>
        </section>

        <section>
          <h2>Get support</h2>
          <ul>
            <li><a href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>GamCare</a></li>
            <li><a href="https://www.begambleaware.org/" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>BeGambleAware</a></li>
            <li>Helpline: 0808 8020 133 (24/7, UK freephone)</li>
          </ul>
        </section>

        <section>
          <p className={styles.note}>18+ only. Please play responsibly.</p>
        </section>
      </div>
    </div>
  );
}
