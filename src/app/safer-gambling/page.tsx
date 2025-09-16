import React from 'react';
import styles from './page.module.css';

export default function SaferGambling() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h1>Safer Gambling at Panna</h1>
        
        <section>
          <p>
            At Panna, we take safer gambling seriously. We're committed to promoting responsible play and protecting the well-being of our users. Gambling should be a fun and enjoyable experience—not a cause of stress or financial difficulty.
          </p>
          
          <p>
            To support this, we've built a range of tools and safeguards into our platform:
          </p>
          
          <div className={styles.safeguardsList}>
            <div className={styles.safeguardItem}>
              <h3>Age Verification</h3>
              <p>Strict age checks ensure that only adults can access our platform.</p>
            </div>
            
            <div className={styles.safeguardItem}>
              <h3>Self-Exclusion Tools</h3>
              <p>Set limits, take breaks, or opt out completely with easy-to-use self-exclusion features.</p>
            </div>
            
            <div className={styles.safeguardItem}>
              <h3>Support Resources</h3>
              <p>Access professional help and support through trusted organisations directly from the app.</p>
            </div>
            
            <div className={styles.safeguardItem}>
              <h3>Transparent Information</h3>
              <p>We provide clear and accessible information on the risks of gambling and how to gamble responsibly.</p>
            </div>

            <div className={styles.safeguardItem}>
              <h3>Deposit Limits</h3>
              <p>Set daily, weekly, or monthly deposit limits to control your spending.</p>
            </div>

            <div className={styles.safeguardItem}>
              <h3>Session Time Limits</h3>
              <p>Control how long you spend on the platform with customizable time limits.</p>
            </div>
          </div>
          
          <div className={styles.supportSection}>
            <h2>Get Help and Support</h2>
            <p>If you're struggling with gambling, help is available:</p>
            <ul>
              <li><a href="https://www.begambleaware.org/" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>BeGambleAware</a> - Information and support for safer gambling</li>
              <li><a href="https://www.gamstop.co.uk/" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>GamStop</a> - Free self-exclusion service</li>
              <li><a href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>GamCare</a> - Support, information and advice for anyone affected by gambling problems</li>
            </ul>
          </div>
          
          <p className={styles.closingStatement}>
            We believe in keeping gambling safe, informed, and balanced.
          </p>
        </section>
      </div>
    </div>
  );
}