import React from 'react';
import './PlaceholderPage.css';

function SaferGambling() {
  return (
    <div className="placeholder-page">
      <div className="placeholder-content">
        <h1>Safer Gambling at Panna</h1>
        
        <section>
          <p>
            At Panna, we take safer gambling seriously. We're committed to promoting responsible play and protecting the well-being of our users. Gambling should be a fun and enjoyable experience—not a cause of stress or financial difficulty.
          </p>
          
          <p>
            To support this, we've built a range of tools and safeguards into our platform:
          </p>
          
          <div className="safeguards-list">
            <div className="safeguard-item">
              <h3>Age Verification</h3>
              <p>Strict age checks ensure that only adults can access our platform.</p>
            </div>
            
            <div className="safeguard-item">
              <h3>Self-Exclusion Tools</h3>
              <p>Set limits, take breaks, or opt out completely with easy-to-use self-exclusion features.</p>
            </div>
            
            <div className="safeguard-item">
              <h3>Support Resources</h3>
              <p>Access professional help and support through trusted organisations directly from the app.</p>
            </div>
            
            <div className="safeguard-item">
              <h3>Transparent Information</h3>
              <p>We provide clear and accessible information on the risks of gambling and how to gamble responsibly.</p>
            </div>
          </div>
          
          <p className="closing-statement">
            We believe in keeping gambling safe, informed, and balanced.
          </p>
        </section>
      </div>
    </div>
  );
}

export default SaferGambling; 