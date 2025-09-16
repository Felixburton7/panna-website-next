// responsibility/page.jsx
'use client'

import React, { useEffect } from "react";
import styles from "./page.module.css";

function Responsibility() {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${styles.animateUp}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => {
      observer.observe(el);
    });

    // Cleanup on unmount
    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [styles.animateUp, styles.visible]);

  return (
    <div className={styles.responsibilityPage}>
      <div className={styles.container}>
        {/* Introductory Text */}
        <h1 className={`${styles.introLarge} ${styles.animateUp}`}>
          Gambling and skill-based gaming can be an exciting way to pass the
          time, but it needs to be enjoyed in moderation and within a budget.
        </h1>
        <p className={`${styles.introGrey} ${styles.animateUp}`}>
          Responsible play is the better way to play. That means setting and
          sticking to a budget, taking frequent breaks, and using the provided
          tools to help keep your play fun and within your limits.
        </p>
        <p className={`${styles.introGrey} ${styles.animateUp}`}>
          All gambling activities and skill gaming carry risks, and it’s important
          to understand that, over time, you will lose more often than you win.
          That is why the better way to play is to see gambling and skillful gaming
          as a form of entertainment and use responsible play strategies to keep
          play within your spending budget.
        </p>

        {/* Tips Section */}
        <h2 className={`${styles.tipsHeading} ${styles.animateUp}`}>
          Tips for responsible play
        </h2>
        <div className={styles.tipsContainer}>
          {/* Tips Grey Box */}
          <div className={styles.greyBox}>
            {/* Left Column: Tips 1–5 */}
            <div className={styles.tipsColumn}>
              <div className={`${styles.tip} ${styles.animateUp}`}>
                <span className={styles.tipNumber}>01</span>
                <p>
                  Measure the success of your session based on the amount of fun
                  you had
                </p>
              </div>
              <div className={`${styles.tip} ${styles.animateUp}`}>
                <span className={styles.tipNumber}>02</span>
                <p>
                  Only play when you are in a good mood and don’t play when you
                  are sad, depressed, angry, or lonely
                </p>
              </div>
              <div className={`${styles.tip} ${styles.animateUp}`}>
                <span className={styles.tipNumber}>03</span>
                <p>Limit how much you play if you have consumed alcohol</p>
              </div>
              <div className={`${styles.tip} ${styles.animateUp}`}>
                <span className={styles.tipNumber}>04</span>
                <p>Make sure you know the rules before you start</p>
              </div>
              <div className={`${styles.tip} ${styles.animateUp}`}>
                <span className={styles.tipNumber}>05</span>
                <p>
                  Only play with money you can afford to lose. Do not borrow money
                  or use money that you planned for other necessities
                </p>
              </div>
            </div>

            {/* Right Column: Tips 6–10 */}
            <div className={styles.tipsColumn}>
              <div className={`${styles.tip} ${styles.animateUp}`}>
                <span className={styles.tipNumber}>06</span>
                <p>
                  Don’t use credit cards or loans to finance your gambling or
                  skillful gaming
                </p>
              </div>
              <div className={`${styles.tip} ${styles.animateUp}`}>
                <span className={styles.tipNumber}>07</span>
                <p>Take frequent breaks</p>
              </div>
              <div className={`${styles.tip} ${styles.animateUp}`}>
                <span className={styles.tipNumber}>08</span>
                <p>Set an affordable budget and set a time limit</p>
              </div>
              <div className={`${styles.tip} ${styles.animateUp}`}>
                <span className={styles.tipNumber}>09</span>
                <p>
                  Gambling and skillful gaming are not ways to make money and you
                  shouldn’t try to win back money that you’ve lost
                </p>
              </div>
              <div className={`${styles.tip} ${styles.animateUp}`}>
                <span className={styles.tipNumber}>10</span>
                <p>If you stop having fun, then you need to stop playing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <h2 className={`${styles.toolsHeading} ${styles.animateUp}`}>
          Tools to help you stay in control of your play
        </h2>
        <p className={`${styles.toolsIntro} ${styles.animateUp}`}>
          At Panna, we provide tools to support responsible play and give you
          control over your play. We encourage you to use these tools to keep
          the experience fun and within your personal limits. You can set:
        </p>
        <div className={styles.toolsContainer}>
          <div className={styles.toolsColumn}>
            <div className={`${styles.toolBox} ${styles.animateUp}`}>
              <span className={styles.toolTick}>✓</span>
              <div className={styles.toolContent}>
                <h3>Time limit</h3>
                <p>Set how many hours per day you want to access your account.</p>
              </div>
            </div>
            <div className={`${styles.toolBox} ${styles.animateUp}`}>
              <span className={styles.toolTick}>✓</span>
              <div className={styles.toolContent}>
                <h3>Deposit limit</h3>
                <p>Set how much money you can deposit within a given period.</p>
              </div>
            </div>
            <div className={`${styles.toolBox} ${styles.animateUp}`}>
              <span className={styles.toolTick}>✓</span>
              <div className={styles.toolContent}>
                <h3>Bet and entry limit</h3>
                <p>
                  Set how much money you can bet or enter in a contest within a
                  period.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.toolsColumn}>
            <div className={`${styles.toolBox} ${styles.animateUp}`}>
              <span className={styles.toolTick}>✓</span>
              <div className={styles.toolContent}>
                <h3>Maximum bet and entry</h3>
                <p>
                  Set how much money you can spend on a single bet or contest.
                </p>
              </div>
            </div>
            <div className={`${styles.toolBox} ${styles.animateUp}`}>
              <span className={styles.toolTick}>✓</span>
              <div className={styles.toolContent}>
                <h3>Timeout</h3>
                <p>Take a break if you want to pause your play temporarily.</p>
              </div>
            </div>
            <div className={`${styles.toolBox} ${styles.animateUp}`}>
              <span className={styles.toolTick}>✓</span>
              <div className={styles.toolContent}>
                <h3>Self Exclusion</h3>
                <p>
                  Exclude yourself from Panna’s gaming products for a set
                  period.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Responsible Gambling Section */}
        <h2 className={`${styles.additionalHeading} ${styles.animateUp}`}>
          Committing to Responsible Gambling
        </h2>
        <div className={`${styles.additionalSection} ${styles.animateUp}`}>
          <p>
            At Panna, we are dedicated to promoting responsible gambling. Our commitment includes providing comprehensive resources and support to ensure that your gaming experience remains enjoyable and safe. Whether you need assistance or simply want to learn more about maintaining control, our team is here to help.
          </p>
          <button className={styles.button}>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Responsibility;
