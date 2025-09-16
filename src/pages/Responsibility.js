import React from "react";
import "../pages/css/responsibility.css";

function Responsibility() {
  return (
    <div className="responsibility-page">
      <div className="container">
        {/* Introductory Text */}
        <h1 className="intro-large">
          Gambling and skill-based gaming can be an exciting way to pass the
          time, but it needs to be enjoyed in moderation and within a budget.
        </h1>
        <p className="intro-grey">
          Responsible play is the better way to play. That means setting and
          sticking to a budget, taking frequent breaks, and using the provided
          tools to help keep your play fun and within your limits.
        </p>
        <p className="intro-grey">
          All gambling activities and skill gaming have risks and it’s important
          to understand that, over time, you will lose more often than you win.
          That is why the better way to play is to see gambling and skilled gaming
          as a form of entertainment and use responsible play strategies to keep
          play within your spending budget.
        </p>

        {/* Tips Section */}
        <h2 className="tips-heading">Tips for responsible play</h2>
        <div className="tips-container">
          {/* Left Column: Tips 1–5 */}
          <div className="tips-column">
            <div className="tip">
              <span className="tip-number">01</span>
              <p>
                Measure the success of your session based on the amount of fun
                you had
              </p>
            </div>
            <div className="tip">
              <span className="tip-number">02</span>
              <p>
                Only play when you are in a good mood and don’t play when you
                are sad, depressed, angry, or lonely
              </p>
            </div>
            <div className="tip">
              <span className="tip-number">03</span>
              <p>Limit how much you play if you consumed alcohol</p>
            </div>
            <div className="tip">
              <span className="tip-number">04</span>
              <p>Make sure you know the rules before you start</p>
            </div>
            <div className="tip">
              <span className="tip-number">05</span>
              <p>
                Only play with money you can afford to lose. Do not borrow money
                or use money that you planned for other necessities
              </p>
            </div>
          </div>

          {/* Right Column: Tips 6–10 */}
          <div className="tips-column">
            <div className="tip">
              <span className="tip-number">06</span>
              <p>
                Don’t use credit cards or loans to finance your gambling or
                skilled gaming
              </p>
            </div>
            <div className="tip">
              <span className="tip-number">07</span>
              <p>Take frequent breaks</p>
            </div>
            <div className="tip">
              <span className="tip-number">08</span>
              <p>Set an affordable budget and set a time limit</p>
            </div>
            <div className="tip">
              <span className="tip-number">09</span>
              <p>
                Gambling and skilled gaming are not ways to make money and you
                shouldn’t try to win back money that you’ve lost
              </p>
            </div>
            <div className="tip">
              <span className="tip-number">10</span>
              <p>If you stop having fun, then you need to stop playing</p>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <h2 className="tools-heading">
          Tools to help you stay in control of your play
        </h2>
        <p className="tools-intro">
          At Panna, we provide tools to support responsible play and give you
          control over your play. We encourage you to use these tools to keep
          the experience fun and within your personal limits. You can set:
        </p>
        <div className="tools-container">
          <div className="tools-column">
            <div className="tool-box">
              <span className="tool-tick">✓</span>
              <div className="tool-content">
                <h3>Time limit</h3>
                <p>Set how many hours per day you want to access your account.</p>
              </div>
            </div>
            <div className="tool-box">
              <span className="tool-tick">✓</span>
              <div className="tool-content">
                <h3>Deposit limit</h3>
                <p>Set how much money you can deposit within a given period.</p>
              </div>
            </div>
            <div className="tool-box">
              <span className="tool-tick">✓</span>
              <div className="tool-content">
                <h3>Bet and entry limit</h3>
                <p>
                  Set how much money you can bet or enter in a contest within a
                  period.
                </p>
              </div>
            </div>
          </div>
          <div className="tools-column">
            <div className="tool-box">
              <span className="tool-tick">✓</span>
              <div className="tool-content">
                <h3>Maximum bet and entry</h3>
                <p>
                  Set how much money you can spend on a single bet or contest.
                </p>
              </div>
            </div>
            <div className="tool-box">
              <span className="tool-tick">✓</span>
              <div className="tool-content">
                <h3>Timeout</h3>
                <p>Take a break if you want to pause your play temporarily.</p>
              </div>
            </div>
            <div className="tool-box">
              <span className="tool-tick">✓</span>
              <div className="tool-content">
                <h3>Self Exclusion</h3>
                <p>
                  Exclude yourself from Panna’s gaming products for a set
                  period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Responsibility;
