"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import {
  FaInstagram,
  FaTwitter,
  FaArrowRight,
  FaPlus,
} from "react-icons/fa";

// Hero story screens (single phone mockup carousel)
import screen11 from "../assets/11.png";
import screen12 from "../assets/12.png";
import screen7 from "../assets/7.png";
import screen4 from "../assets/4.png";
import screen8 from "../assets/8.png";
import pannaAppScreen from "../assets/handimage.png";

// How to play assets (straight-on, high-res)
import signupSvg from "../assets/signup.svg";
import depositSvg from "../assets/deposit.svg";
import discoverSvg from "../assets/discoverpage.svg";
import createGamePng from "../assets/11.png";
import scorerPicksSvg from "../assets/scorerpicks.svg";
import lmsPicksSvg from "../assets/lmspicks1.svg";
import grassrootsSelectionsSvg from "../assets/Grassroots Selections.svg";
import gameHomeSvg from "../assets/gamehome.svg";
import lmsTablePng from "../assets/4.png";

// Games section layered images
import lmsTableSvg from "../assets/lmstable.svg";
import scorerTableSvg from "../assets/scorertable.svg";
import grassroots1Svg from "../assets/Grassroots 1.svg";
import grassroots2Svg from "../assets/Grassroots 2.svg";



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
  subItems?: { label: string; detail: string }[];
}

const howToStickySteps: HowToStickyStep[] = [
  {
    title: "Register Account",
    description: "Sign up, verify your ID, and top up your wallet securely in seconds.",
    image: signupSvg
  },
  {
    title: "Find or Create a Game",
    description: "Browse the public lobby for big pools, or create a private pot for you and your mates.",
    image: createGamePng,
    subItems: [
      { label: "Public Lobby", detail: "Join existing big-money pools" },
      { label: "Private Pots", detail: "Create free games for friends" }
    ]
  },
  {
    title: "Make Your Picks",
    description: "Lock in your selections before the deadline.",
    image: lmsPicksSvg,
    subItems: [
      { label: "Last Man Standing", detail: "Pick 1 winner per week. Lose & you're out." },
      { label: "Scorer Selector", detail: "Pick 3 anytime goalscorers for points." },
      { label: "Grassroots Fantasy", detail: "Build a squad of your real-life teammates." }
    ]
  },
  {
    title: "Track the Action",
    description: "Follow the live leaderboards and see where you stand as the matches play out.",
    image: lmsTablePng
  },
  {
    title: "Win & Withdraw",
    description: "Top the table to win the pot. Winnings are credited instantly for you to withdraw.",
    image: gameHomeSvg
  }
];

const HowToPlaySticky: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = React.useRef<(HTMLElement | null)[]>([]);

  return (
    <div className={styles.howToSticky}>
      <div className={styles.stepsColWrapper}>
        {/* Vertical progress rail with shimmer */}
        <div className={styles.progressRail}>
          <div className={styles.progressRailTrack} />
          <div
            className={styles.progressRailIndicator}
            style={{
              top: `${(activeIndex / (howToStickySteps.length - 1)) * 100}%`,
            }}
          />

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
              onClick={() => setActiveIndex(idx)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
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
              <div className={styles.stepBody}>
                <p>{step.description}</p>
                {step.subItems && (
                  <div className={styles.subItemsGrid}>
                    {step.subItems.map((sub, sIdx) => (
                      <div key={sIdx} className={styles.subItem}>
                        <span className={styles.subItemLabel}>{sub.label}</span>
                        <span className={styles.subItemDetail}>{sub.detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
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
    </div>
  );
};

// Rotating Text Component with Underline Wipe
const heroWords = ["Live", "Low stakes", "Your way", "Done better", "More social"];

const RotatingText: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showUnderline, setShowUnderline] = useState(false);

  // Configuration
  const typeSpeed = 100;
  const deleteSpeed = 40;
  const holdTime = 1500; // Time to wait with full text & underline
  const underlineDelay = 200; // Short pause after typing before underline wipes in

  useEffect(() => {
    const currentWord = heroWords[index % heroWords.length];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      // DELETING PHASE
      if (subIndex > 0) {
        timer = setTimeout(() => {
          setSubIndex((prev) => prev - 1);
        }, deleteSpeed);
      } else {
        // Finished deleting
        setIsDeleting(false);
        setShowUnderline(false);
        setIndex((prev) => prev + 1);
      }
    } else {
      // TYPING PHASE
      if (subIndex < currentWord.length) {
        timer = setTimeout(() => {
          setSubIndex((prev) => prev + 1);
        }, typeSpeed);
      } else {
        // Finished typing
        if (!showUnderline) {
          // Trigger underline appearing
          timer = setTimeout(() => {
            setShowUnderline(true);
          }, underlineDelay);
        } else {
          // Underline is visible, hold then start deleting
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, holdTime);
        }
      }
    }

    return () => clearTimeout(timer);
  }, [subIndex, isDeleting, showUnderline, index]);

  return (
    <div className={styles.heroSubtitleWrapper}>
      <span className={styles.prefixText}>Social Betting</span>
      <div className={styles.rotatingWindow}>
        <span className={styles.wordWrapper}>
          {heroWords[index % heroWords.length].substring(0, subIndex)}
          <span className={styles.cursor}>|</span>
          <div className={`${styles.underlineBar} ${showUnderline ? styles.underlineVisible : ""}`} />
        </span>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [phonesVisible, setPhonesVisible] = useState<boolean>(false);
  const [currentHeroScreen, setCurrentHeroScreen] = useState<number>(0);

  const heroScreens = [screen11, screen12, screen7, screen4, screen8];

  // Games section toggle
  const [activeGame, setActiveGame] = useState<"lms" | "scorer" | "grassroots">("lms");

  // Scroll Animation for Games Section
  const gamesSectionRef = React.useRef<HTMLElement>(null);
  const [gamesVisible, setGamesVisible] = useState(false);

  // Scroll Animation for Social Section
  const socialSectionRef = React.useRef<HTMLElement>(null);
  const [socialVisible, setSocialVisible] = useState(false);

  useEffect(() => {
    const gamesObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setGamesVisible(true);
          gamesObserver.disconnect(); // Animate once
        }
      },
      { threshold: 0.3 } // Trigger when 30% visible
    );

    const socialObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSocialVisible(true);
          socialObserver.disconnect(); // Animate once
        }
      },
      { threshold: 0.2 } // Trigger when 20% visible
    );

    if (gamesSectionRef.current) {
      gamesObserver.observe(gamesSectionRef.current);
    }
    if (socialSectionRef.current) {
      socialObserver.observe(socialSectionRef.current);
    }
    return () => {
      gamesObserver.disconnect();
      socialObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    // Trigger phone "appear" animation on mount
    setPhonesVisible(true);
  }, []);

  // Carousel Logic
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Game Content Configuration
  const gamesConfig = {
    lms: {
      title: "LAST MAN STANDING",
      desc: "The ultimate test of ball knowledge. Pick one winner each week to survive. You can't pick the same team twice. Last one standing takes the pot.",
      cta: "Start Your League",
      link: "/#games",
      titleClass: styles.titleLms,
    },
    grassroots: {
      title: "GRASSROOTS FANTASY",
      desc: "Fantasy football for your local team. Raise funds, win bragging rights.",
      cta: "Start Your League",
      link: "/#games",
      titleClass: styles.titleGrassroots,
    },
    scorer: {
      title: "SCORER SELECTOR",
      desc: "Pick 3 scorers each week. Points calculate live. Top the leaderboard.",
      cta: "Start Your League",
      link: "/#games",
      titleClass: styles.titleScorer,
    },
  };

  const activeContent = gamesConfig[activeGame];

  // 3 Phones: 0, 1, 2.
  // We want them to rotate: Center -> Left -> Right -> Center...
  // Wait: Standard carousel is Right -> Center -> Left -> Right (wrap)
  // Let's define the positions as [Left, Center, Right]
  // 0: Center
  // 1: Right
  // 2: Left
  //
  // Tick 1: 0 Goes Left (2), 1 Goes Center (0), 2 Goes Right (1)
  // Mapping logic:
  // We have 3 items. item i at state s.
  // let pos = (i - s + 3) % 3
  // 0: Center, 1: Right, 2: Left.

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % 3);
    }, 5000); // 5s slow rotation
    return () => clearInterval(interval);
  }, []);

  const getPhoneClass = (index: number, current: number) => {
    // Calculate "virtual position" in the cycle
    // We want 3 slots: Center(0), Right(1), Left(2)
    // If index matches current, it's Center.
    // If index is (current + 1), it's Right.
    // If index is (current + 2), it's Left.
    const pos = (index - current + 3) % 3;
    if (pos === 0) return styles.posCenter;
    if (pos === 1) return styles.posRight;
    return styles.posLeft;
  };

  // Assign specific images to specific phones so they carry their content
  // Phone 0: Screens[0] (screen11)
  // Phone 1: Screens[1] (screen12)
  // Phone 2: Screens[2] (screen7)
  const phoneImages = [screen11, screen12, screen7];

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className={styles.homePage}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={`${styles.container} ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Play, Bet, Connect</h1>
            <RotatingText />
            <div className={styles.downloadButtons}>
              <Link href="https://apps.apple.com/gb/app/panna/id6749247478" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/appstore.png" width={180} height={56} alt="Download on the App Store" className={styles.downloadBadge} />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.pannasports.app&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/googleplay.png" width={200} height={56} alt="Get it on Google Play" className={styles.downloadBadge} />
              </Link>
            </div>
          </div>

          <div className={styles.heroImages}>
            <div className={styles.phonesWrapper}>

              {/* Phone 0 */}
              <div className={`${styles.heroPhoneBase} ${getPhoneClass(0, carouselIndex)}`}>
                <div className={styles.heroSlides}>
                  <Image
                    src={phoneImages[0]}
                    alt="Phone Screen 1"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
              </div>

              {/* Phone 1 */}
              <div className={`${styles.heroPhoneBase} ${getPhoneClass(1, carouselIndex)}`}>
                <div className={styles.heroSlides}>
                  <Image
                    src={phoneImages[1]}
                    alt="Phone Screen 2"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
              </div>

              {/* Phone 2 */}
              <div className={`${styles.heroPhoneBase} ${getPhoneClass(2, carouselIndex)}`}>
                <div className={styles.heroSlides}>
                  <Image
                    src={phoneImages[2]}
                    alt="Phone Screen 3"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
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



      {/* SOCIAL FEATURE SECTION */}
      <section
        ref={socialSectionRef}
        className={`${styles.socialSection} ${socialVisible ? styles.socialSectionVisible : ""}`}
      >
        <div className={styles.socialContainer}>
          <div className={styles.socialContent}>
            <h2 className={styles.socialTitle}>
              <span className={styles.socialTitleLine}>Your Mates.</span>
              <span className={styles.socialTitleLine}>Your Bets.</span>
            </h2>
            <p className={styles.socialDescription}>
              Share your bets, follow your mates bets, and build bets together in the first group chat made for betting.
            </p>
            <Link href="/download" className={styles.socialCta}>
              Play here
            </Link>
          </div>
          <div className={styles.socialImageWrapper}>
            {/* Background Decorations - Swapped positions */}
            <div className={styles.socialBackdrop} />
            <div className={styles.socialCircle1} />
            <div className={styles.socialCircle2} />

            {/* Phone Image */}
            <div className={styles.socialPhoneImage}>
              <Image
                src={pannaAppScreen}
                alt="Panna App Screen"
                width={340}
                height={680}
                style={{ height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>



      {/* GAMES SECTION (Tabs + Layered Images) */}
      <section
        id="games"
        ref={gamesSectionRef}
        className={`${styles.gamesSection} ${gamesVisible ? styles.gamesSectionVisible : ""}`}
      >
        {/* Background Shapes */}
        <div className={`${styles.backgroundCircle} ${styles.circle1}`} />
        <div className={`${styles.backgroundCircle} ${styles.circle2}`} />

        <div className={styles.gamesContainer}>
          <div>
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
              className={`${styles.gamesTab} ${activeGame === "grassroots" ? styles.activeGrassrootsTab : ""}`}
              onClick={() => setActiveGame("grassroots")}
              aria-pressed={activeGame === "grassroots"}
            >
              Grassroots Fantasy
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
              <h3 className={`${styles.gamesTitle} ${activeContent.titleClass}`}>
                {activeContent.title}
              </h3>
              <p className={styles.gamesDescription}>
                {activeContent.desc}
              </p>
              <Link href={activeContent.link} className={styles.gamesCta}>
                {activeContent.cta} <FaArrowRight style={{ marginLeft: "8px" }} />
              </Link>
            </div>

            <div className={styles.gamesImages}>
              <div key={activeGame} className={`${styles.imageStack} ${activeGame === "scorer" ? styles.stackScorer : activeGame === "grassroots" ? styles.stackGrassroots : ""}`}>
                {activeGame === "lms" ? (
                  <>
                    <Image src={lmsTableSvg} alt="LMS Table" className={styles.imageBack} />
                    <Image src={lmsPicksSvg} alt="LMS Picks" className={styles.imageFront} />
                  </>
                ) : activeGame === "scorer" ? (
                  <>
                    <Image src={scorerTableSvg} alt="Scorer Table" className={styles.imageBack} />
                    <Image src={scorerPicksSvg} alt="Scorer Picks" className={styles.imageFront} />
                  </>
                ) : (
                  <>
                    <Image src={grassroots1Svg} alt="Grassroots 1" className={styles.imageBack} />
                    <Image src={grassroots2Svg} alt="Grassroots 2" className={styles.imageFront} />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO PLAY SECTION (Sticky Scroll) */}
      <section className={styles.howToPlaySection}>
        <div className={styles.container}>
          <h2 className={styles.howToPlayHeading}>HOW TO PLAY</h2>
          <p className={styles.howToPlaySubtitle}>Sign up and create a game in less than a minute!</p>

          <HowToPlaySticky />
          <div className={styles.ctaRow}>
            <Link href="/download" className={styles.downloadButton}>
              DOWNLOAD NOW
            </Link>
          </div>
        </div>
      </section>


      {/* FAQ SECTION */}
      <section className={styles.faqSection}>
        <div className={styles.faqContainer}>

          {/* Left Col: Heading & Contact */}
          <div className={styles.faqLeftCol}>
            <h2 className={styles.faqHeading}>FAQS</h2>
            <p className={styles.faqDescription}>
              If you can't find what you're looking for, get in touch and we'll be happy to help.
            </p>
            <Link href="mailto:support@panna.app" className={styles.contactButton}>
              Get in touch
            </Link>
          </div>

          {/* Right Col: Accordion */}
          <div className={styles.faqList}>
            {faqItems.map((item, index) => (
              <div className={styles.faqItem} key={index}>
                <button
                  className={styles.faqQuestionButton}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeFAQ === index}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <span className={`${styles.iconPlus} ${activeFAQ === index ? styles.iconPlusOpen : ""}`}>
                    <FaPlus />
                  </span>
                </button>
                <div
                  className={`${styles.faqAnswerWrapper} ${activeFAQ === index ? styles.faqAnswerVisible : ""}`}
                >
                  <div className={styles.faqAnswerContent}>
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
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
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109" />
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

      {/* FOOTER LOGOS */}


    </div >
  );
};

export default Home;