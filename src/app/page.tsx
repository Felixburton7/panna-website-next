"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
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
  FaChevronLeft,
  FaChevronRight,
  FaUserPlus,
  FaGamepad,
  FaFootballBall,
  FaTrophy,
  FaMoneyBillWave,
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
    question: "What's the difference between Panna and a Sportsbook?",
    answer:
      "A sportsbook offers fixed odds betting where punters bet on certain outcomes to win money from the bookie. In Panna, players compete with each other in peer-to-peer game modes, making it more interactive and social.",
  },
  {
    question: "How do I get started on Panna?",
    answer:
      "To start on Panna, install the app, register your account, and verify your identity. Then, explore the lobby for available games, join a pot, and make your selections.",
  },
  {
    question: "How do I know if I've won?",
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

interface HowToPlayStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  emoji: string;
  details: string;
  phoneImage?: string;
  phoneImages?: string[];
}

const howToPlaySteps: HowToPlayStep[] = [
  {
    id: 1,
    title: "STEP 1: REGISTER ACCOUNT",
    description: "We legally need to verify your identity before you can play our games. We will need some personal details, including your age. This is to ensure the safety of you and every other user on the Panna app.",
    icon: <FaUserPlus size={24} />,
    emoji: "📱",
    details: "Quick phone verification and account setup in under 30 seconds.",
    phoneImage: "/assets/create_account.png"
  },
  {
    id: 2,
    title: "STEP 2: JOIN OR CREATE A GAME",
    description: "Choose between our two exciting game modes: Last Man Standing where you pick teams that must win (get eliminated if they don't), or Scorer Selector where you pick 3 players and earn points based on their performance with position multipliers.",
    icon: <FaGamepad size={24} />,
    emoji: "🎮",
    details: "Private games with friends or join public competitions. Set your own stakes and rules.",
    phoneImages: ["/assets/create_game.png", "/assets/join_game.png"]
  },
  {
    id: 3,
    title: "STEP 3: CHOOSE A TEAM OR MAKE A PLAYER PICK",
    description: "For Last Man Standing, select a team you think will win. For Scorer Selector, choose 3 players from the available fixtures. Defenders earn 8 points per goal, midfielders get 5, and forwards get 4. Make your picks before the deadline!",
    icon: <FaFootballBall size={24} />,
    emoji: "⚽",
    details: "Strategic decisions based on form, fixtures, and your football knowledge.",
    phoneImage: "/assets/phone_mockup_3.png"
  },
  {
    id: 4,
    title: "STEP 4: SEE THE RESULTS",
    description: "Watch the action unfold in real-time! Our system processes every goal, card, and match event as it happens. Track your picks live and see how you're performing against other players on the leaderboard.",
    icon: <FaTrophy size={24} />,
    emoji: "📊",
    details: "Live scoring updates and instant leaderboard rankings throughout the gameweek.",
    phoneImages: ["/assets/see_the_results.png", "/assets/see_the_results_scorer.png"]
  },
  {
    id: 5,
    title: "STEP 5: WIN MONEY AND BRAGGING RIGHTS!",
    description: "Successful players earn real money payouts and the ultimate prize - bragging rights over their friends! Scorer Selector pays out 60/30/10 to top finishers, while Last Man Standing winners take the entire pot after our small admin fee.",
    icon: <FaMoneyBillWave size={24} />,
    emoji: "💰",
    details: "Instant payouts to your wallet plus leaderboard glory and social recognition.",
    phoneImage: "/assets/win_money.png"
  }
];

// Component to display phone screenshots (single or overlaid)
interface PhoneScreenshotDisplayProps {
  phoneImage?: string;
  phoneImages?: string[];
  title: string;
}

const PhoneScreenshotDisplay: React.FC<PhoneScreenshotDisplayProps> = ({ phoneImage, phoneImages, title }) => {
  if (phoneImages && phoneImages.length > 1) {
    // Overlaid images
    return (
      <div className={styles.phoneDisplayContainer}>
        <div className={styles.overlaidScreenshots}>
          <Image
            src={phoneImages[0]}
            alt={`${title} Screenshot 1`}
            width={140}
            height={280}
            className={`${styles.phoneScreenshot} ${styles.overlaidScreenshot1}`}
          />
          <Image
            src={phoneImages[1]}
            alt={`${title} Screenshot 2`}
            width={140}
            height={280}
            className={`${styles.phoneScreenshot} ${styles.overlaidScreenshot2}`}
          />
        </div>
      </div>
    );
  } else {
    // Single image
    const imageSrc = phoneImage || (phoneImages && phoneImages[0]);
    if (!imageSrc) return null;
    
    return (
      <div className={styles.phoneDisplayContainer}>
        <Image
          src={imageSrc}
          alt={`${title} Screenshot`}
          width={140}
          height={280}
          className={styles.phoneScreenshot}
        />
      </div>
    );
  }
};

const HowToPlayCarousel: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % howToPlaySteps.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentStep((prev) => (prev - 1 + howToPlaySteps.length) % howToPlaySteps.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentStep((prev) => (prev + 1) % howToPlaySteps.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentStepData = howToPlaySteps[currentStep];

  return (
    <div className={styles.carouselContainer}>
      {/* Navigation Arrows */}
      <button className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`} onClick={goToPrevious}>
        <FaChevronLeft size={20} />
      </button>
      <button className={`${styles.carouselArrow} ${styles.carouselArrowRight}`} onClick={goToNext}>
        <FaChevronRight size={20} />
      </button>

      {/* Main Content Area */}
      <div className={styles.carouselContent}>
        {/* Phone Screenshot Display */}
        <PhoneScreenshotDisplay
          phoneImage={currentStepData.phoneImage}
          phoneImages={currentStepData.phoneImages}
          title={currentStepData.title}
        />

        <h3 className={styles.stepTitle}>{currentStepData.title}</h3>

        {/* Progress Indicators */}
        <div className={styles.progressIndicators}>
          {howToPlaySteps.map((_, index) => (
            <button
              key={index}
              className={`${styles.progressDot} ${index === currentStep ? styles.active : ""}`}
              onClick={() => goToStep(index)}
            />
          ))}
        </div>

        {/* Download Button */}
        <a href="https://panna-app.uk" target="_blank" rel="noopener noreferrer">
          <button className={styles.downloadButton}>
            DOWNLOAD NOW
          </button>
        </a>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [phonesVisible, setPhonesVisible] = useState<boolean>(false);

  useEffect(() => {
    // Trigger phone "appear" animation on mount
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
            <a href="https://panna-app.uk" target="_blank" rel="noopener noreferrer">
              <button className={styles.heroButton}>Play Now</button>
            </a>
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

      {/* HOW TO PLAY SECTION */}
      <section className={styles.howToPlaySection}>
        <div className={styles.container}>
          <h2 className={styles.howToPlayHeading}>HOW TO PLAY</h2>
          <p className={styles.howToPlaySubheading}>
            Panna's Daily Fantasy Sports app is lightning fast and easy to use. You can create an account, add funds, and
            start playing in less than 1 minute. Here's how:
          </p>
          
          <HowToPlayCarousel />
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
            <a href="https://www.instagram.com/panna.app/" target="_blank" rel="noopener noreferrer">
              <div className={styles.iconCircle}>
                <FaInstagram />
              </div>
            </a>
            <a href="https://whatsapp.com/channel/0029VbAudnREQIatLdBnFf0O" target="_blank" rel="noopener noreferrer">
              <div className={styles.iconCircle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                </svg>
              </div>
            </a>
            <a href="https://x.com/Panna_App" target="_blank" rel="noopener noreferrer">
              <div className={styles.iconCircle}>
                <FaTwitter />
              </div>
            </a>
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
