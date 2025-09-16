import React from "react";
import "./css/partners.css";

function Partners() {
  return (
    <div className="partners-page">
      <header className="partners-header">
        <h1>Become a Partner</h1>
        <p>
          Join the Panna community as a writer, ambassador, or in other roles to help us grow and thrive.
        </p>
      </header>
      <main className="partners-content">
        {/* Advocate Section */}
     

        {/* Writer Section */}
        <section className="partner-section writer-section">
          <h2>Writers</h2>
          <p>
            Passionate about writing? Contribute articles to our news feed and share insights, stories, and tips with the Panna community.
          </p>
          <a href="mailto:info@panna.app?subject=Contribute as Writer" className="partner-button">
            Contribute as Writer
          </a>
        </section>

        {/* Ambassador Section */}
        <section className="partner-section ambassador-section">
          <h2>Ambassadors</h2>
          <p>
            Represent Panna as an ambassador and be the face of our brand in your region. Help us build meaningful connections with players and communities.
          </p>
          <a href="mailto:info@panna.app?subject=Apply to be an Ambassador" className="partner-button">
            Apply to be an Ambassador
          </a>
        </section>

        {/* Other Roles Section */}
        <section className="partner-section other-roles-section">
          <h2>Other Roles</h2>
          <p>
            Have unique skills or ideas? Whether it's design, marketing, or something else, let’s collaborate and make Panna even better!
          </p>
          <a href="mailto:info@panna.app?subject=Get Involved" className="partner-button">
            Get Involved
          </a>
        </section>
      </main>
    </div>
  );
}

export default Partners;
