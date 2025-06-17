"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/home/page.module.css";
import { Typewriter } from "react-simple-typewriter";
import {
  FaRocket,
  FaBolt,
  FaList,
  FaUsers,
  FaHeart,
  FaHandshake,
  FaTiktok,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
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
      "Yes! You can create private pots to play against your friends. Customise the game mode, stake, and payout structure, then share the invite link or code.",
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

const Home: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [phonesVisible, setPhonesVisible] = useState<boolean>(false);

  useEffect(() => {
    // Trigger phone “appear” animation on mount
    setPhonesVisible(true);
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className={styles.homePage}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={`${styles.container} ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Social Betting</h1>
            <h2 className={styles.heroSubtitle}>
              <Typewriter
                words={[
                  "Live",
                  "Low stakes",
                  "Your way",
                  "Done better",
                  "More social",
                ]}
                loop={0} // Infinite
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
            <p className={styles.heroDescription}>
              Your go-to platform for social betting with friends or competing globally.
              Explore innovative social gambling features, including group pools, leaderboards,
              and community challenges.
            </p>
            <button className={styles.heroButton}>Play Now</button>
          </div>

          <div className={styles.heroImages}>
            <div className={`${styles.phonesWrapper} ${phonesVisible ? styles.appear : ""}`}>
              {/* Phone #1 */}
              <div className={`${styles.phoneContainer} ${styles.phoneContainer1}`}>
                <Image
                  src="/assets/app_screenshot_outline.png"
                  alt="Phone Outline 1"
                  className={styles.phoneOutline}
                  width={200}
                  height={400}
                />
                <Image
                  src="/assets/app_screenshot_2.png"
                  alt="App Screenshot 1"
                  className={styles.appScreenshot}
                  width={200}
                  height={400}
                />
              </div>
              {/* Phone #2 */}
              <div className={`${styles.phoneContainer} ${styles.phoneContainer2}`}>
                <Image
                  src="/assets/app_screenshot_outline.png"
                  alt="Phone Outline 2"
                  className={styles.phoneOutline}
                  width={200}
                  height={400}
                />
                <Image
                  src="/assets/app_screenshot.png"
                  alt="App Screenshot 2"
                  className={styles.appScreenshot}
                  width={200}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SNIPPETS SECTION (Endless Scrolling Rows) */}
      <section className={styles.snippetsSection}>
        <div className={styles.snippetsWrapper}>
          {/* Row 1 */}
          <div className={`${styles.snippetsRow} ${styles.row1}`}>
            {/* Original Snippets */}
            <div className={styles.snippet}>Play with Panna</div>
            <div className={styles.snippet}>Bet Smarter, Together</div>
            <div className={styles.snippet}>Peer-to-Peer Fun</div>
            <div className={styles.snippet}>Win Big in Community</div>
            <div className={styles.snippet}>Challenge Your Friends</div>
            <div className={styles.snippet}>Real-Time Updates</div>
            <div className={styles.snippet}>Leaderboard Rankings</div>
            <div className={styles.snippet}>Exclusive Pools</div>
            {/* Duplicated Snippets for Seamless Scrolling */}
            <div className={styles.snippet}>Play with Panna</div>
            <div className={styles.snippet}>Bet Smarter, Together</div>
            <div className={styles.snippet}>Peer-to-Peer Fun</div>
            <div className={styles.snippet}>Win Big in Community</div>
            <div className={styles.snippet}>Challenge Your Friends</div>
            <div className={styles.snippet}>Real-Time Updates</div>
            <div className={styles.snippet}>Leaderboard Rankings</div>
            <div className={styles.snippet}>Exclusive Pools</div>
          </div>
          {/* Row 2 */}
          <div className={`${styles.snippetsRow} ${styles.row2}`}>
            {/* Original Snippets */}
            <div className={styles.snippet}>Join the Action</div>
            <div className={styles.snippet}>Competitive Play</div>
            <div className={styles.snippet}>Social Interactions</div>
            <div className={styles.snippet}>Daily Challenges</div>
            <div className={styles.snippet}>Win Exclusive Rewards</div>
            <div className={styles.snippet}>Track Your Bets</div>
            <div className={styles.snippet}>Customisable Games</div>
            <div className={styles.snippet}>Instant Notifications</div>
            {/* Duplicated Snippets for Seamless Scrolling */}
            <div className={styles.snippet}>Join the Action</div>
            <div className={styles.snippet}>Competitive Play</div>
            <div className={styles.snippet}>Social Interactions</div>
            <div className={styles.snippet}>Daily Challenges</div>
            <div className={styles.snippet}>Win Exclusive Rewards</div>
            <div className={styles.snippet}>Track Your Bets</div>
            <div className={styles.snippet}>Customisable Games</div>
            <div className={styles.snippet}>Instant Notifications</div>
          </div>
          {/* Row 3 */}
          <div className={`${styles.snippetsRow} ${styles.row3}`}>
            {/* Original Snippets */}
            <div className={styles.snippet}>Unlock Achievements</div>
            <div className={styles.snippet}>Global Competitions</div>
            <div className={styles.snippet}>Smart Betting Tools</div>
            <div className={styles.snippet}>Community Events</div>
            <div className={styles.snippet}>Secure Transactions</div>
            <div className={styles.snippet}>24/7 Support</div>
            <div className={styles.snippet}>Personalised Stats</div>
            <div className={styles.snippet}>Referral Bonuses</div>
            {/* Duplicated Snippets for Seamless Scrolling */}
            <div className={styles.snippet}>Unlock Achievements</div>
            <div className={styles.snippet}>Global Competitions</div>
            <div className={styles.snippet}>Smart Betting Tools</div>
            <div className={styles.snippet}>Community Events</div>
            <div className={styles.snippet}>Secure Transactions</div>
            <div className={styles.snippet}>24/7 Support</div>
            <div className={styles.snippet}>Personalised Stats</div>
            <div className={styles.snippet}>Referral Bonuses</div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE PANNA SECTION */}
      <section className={styles.whyChoosePannaSection}>
        <div className={`${styles.container} ${styles.whyChooseInner}`}>
          <div className={styles.textColumn}>
            <h2 className={styles.sectionHeading}>Join a Community</h2>
            <p className={styles.sectionDescription}>
              Join a community of like-minded sports enthusiasts and elevate your
              betting experience. Compete with friends and others in the community, 
              share insights, and test your skills. Play together, but the winnings
              are yours alone.
            </p>
          </div>
          <div className={styles.featureCardsColumn}>
            {/* Feature Card 1 */}
            <div className={styles.featureCard}>
              <div className={`${styles.featureIcon} ${styles.purple}`}>
                <FaRocket size={24} />
              </div>
              <div>
                <h3 className={styles.featureTitle}>Play against your mates!</h3>
                <p className={`${styles.featureDescription} ${styles.grey}`}>
                  Win big on your bet against mates by making bold predictions and connecting
                  with other players.
                </p>
              </div>
            </div>
            {/* Feature Card 2 */}
            <div className={styles.featureCard}>
              <div className={`${styles.featureIcon} ${styles.purple}`}>
                <FaBolt size={24} />
              </div>
              <div>
                <h3 className={styles.featureTitle}>Community & Risk-Free Play</h3>
                <p className={`${styles.featureDescription} ${styles.grey}`}>
                  Compete in multiple leagues or create your own. Build a
                  community and share strategies to reduce risk.
                </p>
              </div>
            </div>
            {/* Feature Card 3 */}
            <div className={styles.featureCard}>
              <div className={`${styles.featureIcon} ${styles.purple}`}>
                <FaList size={24} />
              </div>
              <div>
                <h3 className={styles.featureTitle}>Experts and Influencers</h3>
                <p className={`${styles.featureDescription} ${styles.grey}`}>
                  Monitor tactics by experts and influencers. Learn from the best
                  to win big.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GREY DIVIDER */}
      <hr className={styles.greyDivider} />

      {/* SOCIAL GAMBLING SECTION */}
      <section className={styles.socialGamblingSection}>
        <div className={`${styles.container} ${styles.socialGamblingInner}`}>
          <div className={styles.textColumn}>
            <h2 className={styles.sectionHeading}>Gambling Redefined</h2>
            <p className={styles.sectionDescription}>
            Experience a revolutionary way to gamble socially. Our innovative
        platform ensures transparency, fairness, and a thrilling social
        aspect. Social gambling is the future, seamlessly blending cutting-edge
        technology with community interaction to create a more engaging and
        immersive gambling experience for everyone.
            </p>
          </div>
          <div className={styles.featureCardsColumn}>
            {/* Feature Card 1 */}
            <div className={styles.featureCard}>
              <div className={`${styles.featureIcon} ${styles.green}`}>
                <FaUsers size={24} />
              </div>
              <div>
                <h3 className={styles.featureTitle}>Engaging Communities</h3>
                <p className={`${styles.featureDescription} ${styles.grey}`}>
                  Join vibrant communities and enjoy an immersive social gambling
                  experience.
                </p>
              </div>
            </div>
            {/* Feature Card 2 */}
            <div className={styles.featureCard}>
              <div className={`${styles.featureIcon} ${styles.green}`}>
                <FaHeart size={24} />
              </div>
              <div>
                <h3 className={styles.featureTitle}>Responsible Play</h3>
                <p className={`${styles.featureDescription} ${styles.grey}`}>
                  Play responsibly with built-in features promoting safer
                  gambling habits.
                </p>
              </div>
            </div>
            {/* Feature Card 3 */}
            <div className={styles.featureCard}>
              <div className={`${styles.featureIcon} ${styles.green}`}>
                <FaHandshake size={24} />
              </div>
              <div>
                <h3 className={styles.featureTitle}>Collaborative Challenges</h3>
                <p className={`${styles.featureDescription} ${styles.grey}`}>
                  Work together with friends to achieve shared goals and reap the
                  rewards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOLLOW US SECTION */}
      <section className={styles.followUsSection}>
        <hr className={styles.greyDivider} />
        <div className={styles.followUsContainer}>
          <h2 className={styles.followUsHeading}>Follow us</h2>
          <p className={styles.followUsDescription}>
            Play-by-play. Moment-by-moment. Come join the family as we turn the 
            world into our betting and fantasy playground. The future of sports, 
            fantasy, and betting just got better.
          </p>
          <div className={styles.socialIcons}>
            <div className={styles.iconCircle}>
              <FaTiktok />
            </div>
            <div className={styles.iconCircle}>
              <FaInstagram />
            </div>
            <div className={styles.iconCircle}>
              <FaTwitter />
            </div>
            <div className={styles.iconCircle}>
              <FaYoutube />
            </div>
            <div className={styles.iconCircle}>
              <FaDiscord />
            </div>
          </div>
        </div>
        <hr className={styles.greyDivider} />
      </section>

      {/* FAQ SECTION */}
      <section className={styles.faqSection}>
        <div className={`${styles.container} ${styles.faqContainer}`}>
          <h2 className={styles.faqHeading}>Frequently Asked Questions</h2>
          {faqItems.map((item, index) => (
            <div className={styles.faq} key={index}>
              <button
                className={`${styles.faqQuestion} ${
                  activeFAQ === index ? styles.open : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
              </button>
              <div
                className={`${styles.faqAnswer} ${
                  activeFAQ === index ? styles.visible : ""
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
};

export default Home;
