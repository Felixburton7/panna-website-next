"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import {
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

// Hero story screens (single phone mockup carousel)
import screen11 from "../assets/11.png";
import screen12 from "../assets/12.png";
import screen7 from "../assets/7.png";
import screen4 from "../assets/4.png";
import screen8 from "../assets/8.png";

// How to play assets (straight-on, high-res)
import signupSvg from "../assets/signup.svg";
import depositSvg from "../assets/deposit.svg";
import discoverSvg from "../assets/discoverpage.svg";
import createGamePng from "../assets/11.png";
import scorerPicksSvg from "../assets/scorerpicks.svg";
import lmsPicksSvg from "../assets/lmspicks1.svg";
import gameHomeSvg from "../assets/gamehome.svg";
import lmsTablePng from "../assets/4.png";

// Games section layered images
import lmsTableSvg from "../assets/lmstable.svg";
import scorerTableSvg from "../assets/scorertable.svg";

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

];

interface HowToStickyStep {
  title: string;
  description: string;
  image: StaticImageData;
}

const howToStickySteps: HowToStickyStep[] = [
  {
    title: "Register Account",
    description: "Create your account and verify your identity — quick and secure.",
    image: signupSvg
  },
  {
    title: "Deposit Funds",
    description: "Top up your wallet to join games and start playing.",
    image: depositSvg
  },
  {
    title: "Discover games",
    description: "Browse live and upcoming public games.",
    image: discoverSvg
  },
  {
    title: "Or create a game",
    description: "Start a private pot for friends or set up a public game.",
    image: createGamePng
  },
  {
    title: "Submit Scorer Picks",
    description: "Pick your scorers and lock in your selections.",
    image: scorerPicksSvg
  },
  {
    title: "Submit LMS picks",
    description: "Choose your team — survive each round to stay in.",
    image: lmsPicksSvg
  },
  {
    title: "Game Lobby",
    description: "Track entries, deadlines, and your active games.",
    image: gameHomeSvg
  },
  {
    title: "Check the LMS table",
    description: "See who’s still in and watch the leaderboard evolve.",
    image: lmsTablePng
  }
];

const HowToPlaySticky: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = React.useRef<(HTMLElement | null)[]>([]);

  // Viewport-center based detection for the active step (more stable on desktop)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const viewportCenter = window.innerHeight / 2;
        let closestIndex = 0;
        let closestDistance = Number.POSITIVE_INFINITY;
        stepRefs.current.forEach((el, idx) => {
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const elCenter = rect.top + rect.height / 2;
          const distance = Math.abs(elCenter - viewportCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = idx;
          }
        });
        setActiveIndex((prev) => (prev !== closestIndex ? closestIndex : prev));
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

    return (
    <div className={styles.howToSticky}>
      <div className={styles.stickyMediaCol}>
        <div className={styles.mediaFrame}>
          <div className={styles.stickyImageStack} aria-live="polite">
            {howToStickySteps.map((item, i) => (
              <Image
                key={i}
                src={item.image}
                alt={item.title}
                fill
                className={styles.stackedImage}
                priority={i < 2}
                loading="eager"
                sizes="(max-width: 900px) 100vw, 420px"
                style={{ objectFit: "contain", opacity: i === activeIndex ? 1 : 0 }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.stepsCol}>
        {howToStickySteps.map((step, idx) => (
          <article
            key={idx}
            ref={(el) => { stepRefs.current[idx] = el; }}
            data-index={idx}
            className={`${styles.stepBlock} ${activeIndex === idx ? styles.activeStep : ""}`}
            onMouseEnter={() => setActiveIndex(idx)}
            onFocus={() => setActiveIndex(idx)}
            onClick={() => {
              setActiveIndex(idx);
              const node = stepRefs.current[idx];
              if (node) {
                node.scrollIntoView({ behavior: "smooth", block: "center" });
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                const node = stepRefs.current[idx];
                if (node) {
                  node.scrollIntoView({ behavior: "smooth", block: "center" });
                }
                setActiveIndex(idx);
              }
            }}
            role="button"
            tabIndex={0}
          >
            <div className={styles.stepHeader}>
              <div className={styles.stepNumber}>{String(idx + 1).padStart(2, "0")}</div>
              <h3 className={styles.stepTitle2}>{step.title}</h3>
            </div>
            <div className={styles.inlineImageWrapper}>
              <Image src={step.image} alt={step.title} className={styles.inlineImage} />
      </div>
            <p className={styles.stepBody}>{step.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [phonesVisible, setPhonesVisible] = useState<boolean>(false);
  const [currentHeroScreen, setCurrentHeroScreen] = useState<number>(0);
  const heroWords = ["Live", "Low stakes", "Your way", "Done better", "More social"];
  const [heroWordIndex, setHeroWordIndex] = useState<number>(0);

  const heroScreens = [screen11, screen12, screen7, screen4, screen8];

  // Games section toggle
  const [activeGame, setActiveGame] = useState<"lms" | "scorer">("lms");

  useEffect(() => {
    // Trigger phone "appear" animation on mount
    setPhonesVisible(true);
  }, []);

  // Auto-play hero story carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroScreen((prev) => (prev + 1) % heroScreens.length);
    }, 2000); // ~10s total loop for 5 screens
    return () => clearInterval(interval);
  }, []);

  // Rotate hero type text (replace Typewriter to avoid DOM removeChild errors)
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroWordIndex((prev) => (prev + 1) % heroWords.length);
    }, 1200);
    return () => clearInterval(interval);
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
            <h2 className={styles.heroSubtitle}>{heroWords[heroWordIndex]}</h2>
            <p className={styles.heroDescription}>
              Your go-to platform for social betting with friends or competing globally.
              Explore innovative social gambling features, including group pools, leaderboards,
              and community challenges.
            </p>
            <Link href="/download">
              <button className={styles.heroButton}>Play Now</button>
            </Link>
          </div>

          <div className={styles.heroImages}>
            <div className={`${styles.phonesWrapper} ${phonesVisible ? styles.appear : ""}`}>
              <div className={styles.heroPhone}>
                <div className={styles.heroSlides}>
                  {heroScreens.map((img, index) => (
                    <Image
                      key={index}
                      src={img}
                      alt={`Hero screen ${index + 1}`}
                      className={`${styles.heroSlide} ${index === currentHeroScreen ? styles.active : ""}`}
                      width={200}
                      height={400}
                      priority
                    />
                  ))}
                </div>
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

      

      {/* HOW TO PLAY SECTION (Sticky Scroll) */}
      <section className={styles.howToPlaySection}>
        <div className={styles.container}>
          <h2 className={styles.howToPlayHeading}>HOW TO PLAY</h2>
          <p className={styles.howToPlaySubheading}>
            Create an account, add funds, and start playing in under a minute.
          </p>
          <HowToPlaySticky />
          <div className={styles.ctaRow}>
            <Link href="/download">
              <button className={styles.downloadButton}>DOWNLOAD NOW</button>
            </Link>
          </div>
        </div>
      </section>

      {/* GAMES SECTION (Tabs + Layered Images) */}
      <section id="games" className={styles.gamesSection}>
        <div className={styles.gamesContainer}>
          <div>
            <div className={styles.gamesEyebrow}>Introducing</div>
            <h2 className={styles.gamesHeading}>Our Games</h2>
          </div>
          <div className={styles.gamesTabs}>
            <button
              className={`${styles.gamesTab} ${activeGame === "lms" ? styles.activeLmsTab : ""}`}
              onClick={() => setActiveGame("lms")}
              aria-pressed={activeGame === "lms"}
            >
              Last Man Standing
            </button>
            <button
              className={`${styles.gamesTab} ${activeGame === "scorer" ? styles.activeScorerTab : ""}`}
              onClick={() => setActiveGame("scorer")}
              aria-pressed={activeGame === "scorer"}
            >
              Scorer Selector
            </button>
          </div>

          <div className={styles.gamesContent}>
            <div className={styles.gamesText}>
              {activeGame === "lms" ? (
                <>
                  <h3 className={`${styles.gamesTitle} ${styles.titleLms}`}>LAST MAN STANDING</h3>
                  <p className={styles.gamesDescription}>
                    Test your nerve. Pick one team to win each gameweek. If they win, you're through. A draw or loss, and you're out. The catch? You can only pick each team once. Outlast the competition to be the last one standing.
                  </p>
                  <Link href="/download">
                    <button className={styles.gamesCta}>Go to Last Man Standing</button>
                  </Link>
                </>
              ) : (
                <>
                  <h3 className={`${styles.gamesTitle} ${styles.titleScorer}`}>SCORER SELECTOR</h3>
                  <p className={styles.gamesDescription}>
                    Think you know who's hitting the back of the net? Choose three players each gameweek. You'll rack up points for every goal they score—8 for defenders, 5 for midfielders, and 3 for forwards. Finish high on the leaderboard to win from the pot.
                  </p>
                  <Link href="/download">
                    <button className={styles.gamesCta}>Go to Scorer Selector</button>
                  </Link>
                </>
              )}
            </div>

            <div className={styles.gamesImages}>
              <div className={`${styles.imageStack} ${activeGame === "scorer" ? styles.stackScorer : ""}`}>
                {activeGame === "lms" ? (
                  <>
                    <Image src={lmsTableSvg} alt="LMS Table" className={styles.imageBack} />
                    <Image src={lmsPicksSvg} alt="LMS Picks" className={styles.imageFront} />
                  </>
                ) : (
                  <>
                    <Image src={scorerTableSvg} alt="Scorer Table" className={styles.imageBack} />
                    <Image src={scorerPicksSvg} alt="Scorer Picks" className={styles.imageFront} />
                  </>
                )}
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
