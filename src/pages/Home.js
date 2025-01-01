import React, { useState, useEffect } from 'react';

import "../pages/css/home.css";
import { ReactTyped as Typed } from "react-typed";
import appScreenshotOutline1 from "../assets/app_screenshot_outline.png"; // Outline for first screenshot
import appScreenshot1 from "../assets/app_screenshot_2.png"; // First app screenshot
import appScreenshotOutline2 from "../assets/app_screenshot_outline.png"; // Outline for second screenshot
import appScreenshot2 from "../assets/app_screenshot.png"; // Second app screenshot
import { FaRocket, FaBolt, FaList, FaUsers, FaHeart, FaHandshake } from "react-icons/fa";

function Home() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [animatePhones, setAnimatePhones] = useState(false);

  useEffect(() => {
    setAnimatePhones(true);
  }, []);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is Panna?",
      answer:
        "Panna is a social betting app that combines the thrill of sports betting with community interaction and innovative features.",
    },
    {
      question: "How does social betting work?",
      answer:
        "Social betting allows you to participate in pools with friends or the wider community, tracking your bets in real-time and competing on leaderboards.",
    },
    {
      question: "What’s the difference between Panna and a Sportsbook?",
      answer:
        "A sportsbook offers fixed odds betting where punters bet on certain outcomes to win money from the bookie. In Panna, players compete with each other in peer-to-peer game modes, making it more interactive and social.",
    },
      
    {
      question: "How do I get started on Panna?",
      answer:
        "To start on Panna, install the app, register your account, and verify your identity. Then, explore the lobby for available games, join a pot, and make your selections.",
    },
    {
      question: "How do I know if I’ve won?",
      answer:
        "Check your position on the leaderboard during and after the game. Winners are displayed based on points scored. Even if you don't finish first, you may still win if the pot allows for multiple winners.",
    },
    {
      question: "Can I set up a private game on Panna?",
      answer:
        "Yes! You can create private pots to play against your friends. Customize the game mode, stake, and payout structure, then share the invite link or code.",
    },
    {
      question: "Does Panna have a referral scheme?",
      answer:
        "Yes, Panna offers a referral program. Refer friends and earn free bets when they sign up, deposit, and play a game.",
    },
    {
      question: "Can I get free bets on Panna?",
      answer:
        "Yes, free bets are available through promotions, sign-up bonuses, and free pots. Check your app for eligible free bets before joining a pot.",
    },
  ];

  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-inner">
          <div className="hero-text">
            <h1 className="hero-title">Social Betting</h1>
            <h2 className="hero-subtitle">
              <Typed
                strings={[
                  "Re-imagined",
                  "Higher stakes",
                  "Your way",
                  "Done better",
                  "More social",
                ]}
                typeSpeed={70}
                backSpeed={70}
                loop
              />
            </h2>
            <p className="hero-description">
              Your go-to platform for social betting with friends or competing globally. Explore innovative social gambling features, including group pools, leaderboards, and community challenges.
            </p>
            <button className="hero-button">Play Now</button>
          </div>
          <div className="hero-images">
            <div
              className={`phones-wrapper ${animatePhones ? "appear" : ""}`}
            >
              <div className="phone-container phone-container-1">
                <img
                  src={appScreenshotOutline1}
                  alt="Phone Outline 1"
                  className="phone-outline"
                />
                <img
                  src={appScreenshot1}
                  alt="App Screenshot 1"
                  className="app-screenshot"
                />
              </div>
              <div className="phone-container phone-container-2">
                <img
                  src={appScreenshotOutline2}
                  alt="Phone Outline 2"
                  className="phone-outline"
                />
                <img
                  src={appScreenshot2}
                  alt="App Screenshot 2"
                  className="app-screenshot"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PICKS SECTION */}
      <section className="why-choose-panna-section">
        <div className="container why-choose-inner">
          <div className="text-column">
            <h2 className="section-heading">Join a Community</h2>
            <p className="section-description">
            Join a community of like-minded sports enthusiasts and elevate your betting experience. Compete with friends and others in the community, share insights, and test your skills. Play together, but the winnings are yours alone.          </p>
          </div>
          <div className="feature-cards-column">
            <div className="feature-card">
              <div className="feature-icon purple">
                <FaRocket size={24} />
              </div>
              <div>
                <h3 className="feature-title">Massive Wins</h3>
                <p className="feature-description grey">
                  Win big on your bet by making bold predictions and connecting with other players.
                </p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon purple">
                <FaBolt size={24} />
              </div>
              <div>
                <h3 className="feature-title">Community & Risk-Free Play</h3>
                <p className="feature-description grey">
                 Compete in multiple leagues or create your own. Build a community and share strategies to reduce risk. 
                </p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon purple">
                <FaList size={24} />
              </div>
              <div>
                <h3 className="feature-title">Experts and Influencers</h3>
                <p className="feature-description grey">
                  Monitor tactics by experts and influencers. Learn from the best to win big. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL GAMBLING SECTION */}
      <section className="social-gambling-section">
        <div className="container social-gambling-inner">
          <div className="feature-cards-column">
            <div className="feature-card">
              <div className="feature-icon green">
                <FaUsers size={24} />
              </div>
              <div>
                <h3 className="feature-title">Engaging Communities</h3>
                <p className="feature-description grey">
                  Join vibrant communities and enjoy an immersive social gambling experience.
                </p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon green">
                <FaHeart size={24} />
              </div>
              <div>
                <h3 className="feature-title">Responsible Play</h3>
                <p className="feature-description grey">
                  Play responsibly with built-in features promoting safer gambling habits.
                </p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon green">
                <FaHandshake size={24} />
              </div>
              <div>
                <h3 className="feature-title">Collaborative Challenges</h3>
                <p className="feature-description grey">
                  Work together with friends to achieve shared goals and reap the rewards.
                </p>
              </div>
            </div>
          </div>
          <div className="text-column">
            <h2 className="section-heading">Gambling Redefined</h2>
            <p className="section-description">
              Experience a revolutionary way to gamble socially. Our innovative platform ensures transparency, fairness, and a thrilling social aspect.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="container faq-container">
          <h2 className="faq-heading">Frequently Asked Questions</h2>
          {faqItems.map((item, index) => (
            <div className="faq" key={index}>
              <button
                className={`faq-question ${activeFAQ === index ? "open" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
              </button>
              <div
                className={`faq-answer ${
                  activeFAQ === index ? "visible" : ""
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
