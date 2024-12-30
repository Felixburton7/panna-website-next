import React from "react";

function Mission() {
  return (
    <div className="mission-page">
      <div className="container">
        {/* Header Section */}
        <div className="mission-header">
          <h1 className="mission-title">Our Mission</h1>
          <p className="mission-intro">
            Changing the gambling industry for the better. We believe in
            creating a more engaging, fair, and social experience for everyone.
          </p>
        </div>

        {/* Highlights Section */}
        <div className="highlights-section">
          <h2 className="highlights-title">Why Social Gambling?</h2>
          <div className="highlights-stats">
            <div className="stat">
              <h3 className="stat-value">50M</h3>
              <p className="stat-label">Players Impacted</p>
            </div>
            <div className="stat">
              <h3 className="stat-value">85%</h3>
              <p className="stat-label">Enjoy More Responsible Play</p>
            </div>
            <div className="stat">
              <h3 className="stat-value">#1</h3>
              <p className="stat-label">Social Gambling Platform</p>
            </div>
          </div>
        </div>

        {/* Mission Details */}
        <div className="mission-details">
          <h2 className="mission-details-title">What We Stand For</h2>
          <p className="mission-paragraph">
            At Panna, we are redefining gambling by making it more social,
            transparent, and responsible. By fostering community connections and
            integrating modern tools, we aim to ensure that gambling is not only
            fun but also safe and within limits.
          </p>
          <p className="mission-paragraph">
            Our focus on innovation and community-driven gameplay creates a new
            type of experience that brings people together. We are here to make
            social gambling the preferred choice for millions of players.
          </p>
        </div>

        {/* Social Media and Partners */}
        <div className="social-partners-section">
          <h2 className="social-title">Follow Our Journey</h2>
          <div className="social-icons">
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              <img src="/icons/tiktok.svg" alt="TikTok" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src="/icons/twitter.svg" alt="Twitter" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icons/instagram.svg" alt="Instagram" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer">
              <img src="/icons/discord.svg" alt="Discord" />
            </a>
          </div>
        </div>

        {/* Team & Partnerships */}
        <div className="team-partners-section">
          <h2 className="team-title">Meet Our Team</h2>
          <div className="team-row">
            <div className="team-member">
              <img src="/team/john_doe.jpg" alt="John Doe" />
              <h3 className="member-name">John Doe</h3>
              <p className="member-role">Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src="/team/jane_smith.jpg" alt="Jane Smith" />
              <h3 className="member-name">Jane Smith</h3>
              <p className="member-role">Head of Community</p>
            </div>
            <div className="team-member">
              <img src="/team/alex_lee.jpg" alt="Alex Lee" />
              <h3 className="member-name">Alex Lee</h3>
              <p className="member-role">Head of Innovation</p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="mission-footer">
          <p className="footer-text">
            Interested in partnering with us? Reach out at{" "}
            <a href="mailto:partnerships@pannaapp.uk">partnerships@pannaapp.uk</a>
          </p>
          <p className="footer-note">
            © 2024 Panna. All Rights Reserved, Oxford, UK.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Mission;
