import React, { useState, useEffect } from "react";
import "../pages/css/games.css";

// Icons for the "How It Works" section
import { FaCalendarCheck, FaBook, FaLink } from "react-icons/fa";

// Example phone mockup images (replace with your actual images)
import phoneMockup1 from "../assets/phone_mockup_2.png";
import phoneMockup2 from "../assets/phone_mockup_3.png";
import phoneMockup3 from "../assets/phone_mockup_1.png";

function Games() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  // State to trigger phone animations
  const [animatePhones, setAnimatePhones] = useState(false);

  useEffect(() => {
    // Trigger minimal angle "appear" effect once component mounts
    setAnimatePhones(true);
  }, []);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  // Example FAQ
  const faqData = [
    {
      question: "What is Panna?",
      answer:
        "Panna is a social betting app that combines the thrill of sports betting with community interaction and innovative features.",
    },
    {
      question: "How do I get started on Panna?",
      answer:
        "Install the app, register your account, and start exploring available pots. You can join existing game modes or create your own.",
    },
    {
      question: "Can I create private games?",
      answer:
        "Yes! Create private pots with custom rules and invite your friends to compete together in a secure environment.",
    },
  ];

  return (
    <div className="games-page">
      {/*
        -------------------------------------------------------------
        1. HERO SECTION
      */}
      <section className="games-hero-section">
        <div className="games-hero-container">
          <div className="games-hero-text">
            <h1 className="games-hero-title">Game Modes</h1>
            <p className="games-hero-subtitle">
              Explore unique games, challenge your friends,
              and enjoy the thrill of social betting.
            </p>
            {/* Minimal angles + subtle transition */}
            <div
              className={`hero-phone-images ${
                animatePhones ? "animate-phones" : ""
              }`}
            >
              <div className="phone-image phone-image-1">
                <img
                  src={phoneMockup1}
                  alt="Top Phone Mockup"
                  className="games-phone-mockup"
                />
              </div>
              <div className="phone-image phone-image-2">
                <img
                  src={phoneMockup2}
                  alt="Back Phone Mockup"
                  className="games-phone-mockup"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
        -------------------------------------------------------------
        2. LAST MAN STANDING INTRO
      */}
      <section className="last-man-standing-intro">
        <h2 className="lms-title">Last Man Standing</h2>
        <p className="lms-subtitle">
          <strong>Survivor:</strong> Will you be the last man standing?
          Try Survivor — our take on the classic ‘Last Man Standing’ game.
          Pick one team each week that you think will win to progress
          through to the next round. The winner takes all!
        </p>
      </section>

      {/*
        -------------------------------------------------------------
        3. LAST MAN STANDING BENEFITS
      */}
      <section className="games-section lms-benefits-section">
        <div className="games-section-inner benefits-row">
          {/* TEXT (Left) */}
          <div className="benefits-left">
            <h2 className="games-section-heading">How It Works</h2>

            {/* Bullet points */}
            <div className="lms-benefit-point">
              <div className="lms-number purple">01</div>
              <div>
                <h3>Survivor: Our Take on 'Last Man Standing'</h3>
                <p>
                  If you're a fan of Last Man Standing, Survivor could be
                  the perfect game for you. Experience the same excitement
                  in a digital, hassle-free environment.
                </p>
              </div>
            </div>

            <div className="lms-benefit-point">
              <div className="lms-number purple">02</div>
              <div>
                <h3>Eliminate Last Man Standing Hassles</h3>
                <p>
                  Say goodbye to complicated setups! Let us handle rules,
                  game weeks, and payments efficiently with Survivor.
                </p>
              </div>
            </div>

            <div className="lms-benefit-point">
              <div className="lms-number purple">03</div>
              <div>
                <h3>We Manage Money and Payouts</h3>
                <p>
                  No more waiting or delays! We manage money and payouts,
                  ensuring a seamless experience.
                </p>
              </div>
            </div>

            <div className="lms-benefit-point">
              <div className="lms-number purple">04</div>
              <div>
                <h3>Private or Public Pots</h3>
                <p>
                  Create private Survivor pots for friends or join
                  public ones for bigger prizes. The choice is yours!
                </p>
              </div>
            </div>

            <div className="lms-benefit-point">
              <div className="lms-number purple">05</div>
              <div>
                <h3>Use Survivor to Raise Funds</h3>
                <p>
                  Set a creator rake to allocate the pot
                  for charity. Enjoy the game while supporting a cause!
                </p>
              </div>
            </div>

            <div className="lms-benefit-point">
              <div className="lms-number purple">06</div>
              <div>
                <h3>Set any buy-in up to £500</h3>
                <p>
                  The larger the buy-in the bigger the prize. 
                </p>
              </div>
            </div>
          </div>

          {/* PHONE (Right) */}
          <div className="benefits-right">
            <img
              src={phoneMockup3}
              alt="Phone Mockup for Benefits"
              className="games-phone-shadow"
            />
          </div>
        </div>
      </section>

      {/*
        -------------------------------------------------------------
        4. HOW IT WORKS SECTION
      */}
      <section className="games-section how-it-works">
        <h2 className="games-section-title">
          Create A Survivor Pot &amp; Play
        </h2>
        <div className="games-how-steps">
          <div className="games-step">
            <FaCalendarCheck size={36} className="games-step-icon" />
            <h3 className="games-step-title">Step 1: Select Fixtures</h3>
            <p>Choose matches and teams to include in your pot.</p>
          </div>
          <div className="games-step">
            <FaBook size={36} className="games-step-icon" />
            <h3 className="games-step-title">Step 2: Set Rules</h3>
            <p>Customize entry fees, stakes, and payout distribution.</p>
          </div>
          <div className="games-step">
            <FaLink size={36} className="games-step-icon" />
            <h3 className="games-step-title">Step 3: Invite Friends</h3>
            <p>Share your pot link and compete with your friends.</p>
          </div>
        </div>
      </section>

      {/*
        -------------------------------------------------------------
        5. FAQ SECTION
      */}
      <section className="games-section games-faq">
        <h2 className="games-section-title">FAQs</h2>
        <div className="games-faq-container">
          {faqData.map((item, index) => (
            <div className="games-faq-item" key={index}>
              <button
                className={`games-faq-question ${
                  activeFAQ === index ? "open" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
              </button>
              <div
                className={`games-faq-answer ${
                  activeFAQ === index ? "visible" : ""
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*
        -------------------------------------------------------------
        6. FOOTER CTA
      */}
      <section className="games-section games-footer-cta">
        <h2 className="games-section-title">Get Started with Panna</h2>
        <p className="games-section-subtitle">
          Join the community and revolutionize social betting.
        </p>
        <button className="games-cta-button">Sign Up Now</button>
      </section>
      <footer className="games-footer">
        <p>
          To use Panna, you must agree to our{" "}
          <a href="/terms-and-conditions" className="terms-link">
            Terms and Conditions
          </a>{" "}
          and{" "}
          <a href="/privacy-policy" className="terms-link">
            Privacy Policy
          </a>.
        </p>
      </footer>
    </div>
    
  );
}

export default Games;
