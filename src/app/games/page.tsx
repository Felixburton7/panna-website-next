// src/app/about/games/page.tsx

"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./page.module.css"; // Importing CSS module
import { FaCalendarCheck, FaBook, FaLink } from "react-icons/fa";
import Image from "next/image";

interface FAQItem {
  question: string;
  answer: string;
}

const Games: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  // State to trigger phone animations
  const [animatePhones, setAnimatePhones] = useState(false);

  // Refs for sections to observe
  const lastManStandingRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger minimal angle "appear" effect once component mounts
    setAnimatePhones(true);

    const options = {
      threshold: 0.2,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles["fade-in-up"]);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (lastManStandingRef.current) {
      observer.observe(lastManStandingRef.current);
    }
    if (benefitsRef.current) {
      observer.observe(benefitsRef.current);
    }
    if (howItWorksRef.current) {
      observer.observe(howItWorksRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  // Example FAQ
  const faqData: FAQItem[] = [
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
    <div className={styles["games-page"]}>
      {/*
        -------------------------------------------------------------
        1. HERO SECTION
      */}
      <section className={styles["games-hero-section"]}>
        <div className={styles["games-hero-container"]}>
          <div className={styles["games-hero-text"]}>
            <h1 className={styles["games-hero-title"]}>Game Modes</h1>
            <p className={styles["games-hero-subtitle"]}>
              Explore unique games, challenge your friends,
              and enjoy the thrill of social betting.
            </p>
            {/* Increased spacing below subtitle */}
            <div className={styles["subtitle-spacing"]}></div>
            {/* Minimal angles + subtle transition */}
            <div
              className={`${styles["hero-phone-images"]} ${
                animatePhones ? styles["animate-phones"] : ""
              }`}
            >
              <div className={`${styles["phone-image"]} ${styles["phone-image-1"]}`}>
                <Image
                  src="/assets/phone_mockup_1.png"
                  alt="Front Phone Mockup"
                  className={styles["games-phone-mockup"]}
                  width={220}
                  height={400}
                />
              </div>
              <div className={`${styles["phone-image"]} ${styles["phone-image-2"]}`}>
                <Image
                  src="/assets/phone_mockup_2.png"
                  alt="Middle Phone Mockup"
                  className={styles["games-phone-mockup"]}
                  width={220}
                  height={400}
                />
              </div>
              <div className={`${styles["phone-image"]} ${styles["phone-image-3"]}`}>
                <Image
                  src="/assets/phone_mockup_3.png"
                  alt="Back Phone Mockup"
                  className={styles["games-phone-mockup"]}
                  width={220}
                  height={400}
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
      <section className={styles["last-man-standing-intro"]} ref={lastManStandingRef}>
        <h2 className={styles["lms-title"]}>Last Man Standing</h2>
        <p className={styles["lms-subtitle"]}>
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
      <section className={`${styles["games-section"]} ${styles["lms-benefits-section"]}`} ref={benefitsRef}>
        <div className={`${styles["games-section-inner"]} ${styles["benefits-row"]}`}>
          {/* TEXT (Left) */}
          <div className={styles["benefits-left"]}>
            <h2 className={styles["games-section-heading"]}>How It Works</h2>

            {/* Bullet points */}
            <div className={styles["lms-benefit-point"]}>
              <div className={`${styles["lms-number"]} ${styles["purple"]}`}>01</div>
              <div>
                <h3>Survivor: Our Take on 'Last Man Standing'</h3>
                <p>
                  If you're a fan of Last Man Standing, Survivor could be
                  the perfect game for you. Experience the same excitement
                  in a digital, hassle-free environment.
                </p>
              </div>
            </div>

            <div className={styles["lms-benefit-point"]}>
              <div className={`${styles["lms-number"]} ${styles["purple"]}`}>02</div>
              <div>
                <h3>Eliminate Last Man Standing Hassles</h3>
                <p>
                  Say goodbye to complicated setups! Let us handle rules,
                  game weeks, and payments efficiently with Survivor.
                </p>
              </div>
            </div>

            <div className={styles["lms-benefit-point"]}>
              <div className={`${styles["lms-number"]} ${styles["purple"]}`}>03</div>
              <div>
                <h3>We Manage Money and Payouts</h3>
                <p>
                  No more waiting or delays! We manage money and payouts,
                  ensuring a seamless experience.
                </p>
              </div>
            </div>

            <div className={styles["lms-benefit-point"]}>
              <div className={`${styles["lms-number"]} ${styles["purple"]}`}>04</div>
              <div>
                <h3>Private or Public Pots</h3>
                <p>
                  Create private Survivor pots for friends or join
                  public ones for bigger prizes. The choice is yours!
                </p>
              </div>
            </div>

            <div className={styles["lms-benefit-point"]}>
              <div className={`${styles["lms-number"]} ${styles["purple"]}`}>05</div>
              <div>
                <h3>Use Survivor to Raise Funds</h3>
                <p>
                  Set a creator rake to allocate the pot
                  for charity. Enjoy the game while supporting a cause!
                </p>
              </div>
            </div>

            <div className={styles["lms-benefit-point"]}>
              <div className={`${styles["lms-number"]} ${styles["purple"]}`}>06</div>
              <div>
                <h3>Set any buy-in up to £500</h3>
                <p>
                  The larger the buy-in the bigger the prize. 
                </p>
              </div>
            </div>
          </div>

          {/* PHONE (Right) */}
          <div className={styles["benefits-right"]}>
            <Image
              src="/assets/phone_mockup_1.png"
              alt="Phone Mockup for Benefits"
              className={styles["games-phone-shadow"]}
              width={250}
              height={400}
            />
          </div>
        </div>
      </section>

      {/*
        -------------------------------------------------------------
        4. HOW IT WORKS SECTION
      */}
      <section className={`${styles["games-section"]} ${styles["how-it-works"]}`} ref={howItWorksRef}>
        <h2 className={styles["games-section-title"]}>
          Create A Survivor Pot &amp; Play
        </h2>
        <div className={styles["games-how-steps"]}>
          <div className={styles["games-step"]}>
            <FaCalendarCheck size={36} className={styles["games-step-icon"]} />
            <h3 className={styles["games-step-title"]}>Step 1: Select Fixtures</h3>
            <p>Choose matches and teams to include in your pot.</p>
          </div>
          <div className={styles["games-step"]}>
            <FaBook size={36} className={styles["games-step-icon"]} />
            <h3 className={styles["games-step-title"]}>Step 2: Set Rules</h3>
            <p>Customize entry fees, stakes, and payout distribution.</p>
          </div>
          <div className={styles["games-step"]}>
            <FaLink size={36} className={styles["games-step-icon"]} />
            <h3 className={styles["games-step-title"]}>Step 3: Invite Friends</h3>
            <p>Share your pot link and compete with your friends.</p>
          </div>
        </div>
      </section>

      {/*
        -------------------------------------------------------------
        5. FAQ SECTION
      */}
      <section className={`${styles["games-section"]} ${styles["games-faq"]}`}>
        <h2 className={styles["games-section-title"]}>FAQs</h2>
        <div className={styles["games-faq-container"]}>
          {faqData.map((item, index) => (
            <div className={styles["games-faq-item"]} key={index}>
              <button
                className={`${styles["games-faq-question"]} ${
                  activeFAQ === index ? styles["open"] : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
              </button>
              <div
                className={`${styles["games-faq-answer"]} ${
                  activeFAQ === index ? styles["visible"] : ""
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
      <section className={`${styles["games-section"]} ${styles["games-footer-cta"]}`}>
        <h2 className={styles["games-section-title"]}>Get Started with Panna</h2>
        <p className={styles["games-section-subtitle"]}>
          Join the community and revolutionize social betting.
        </p>
        <button className={styles["games-cta-button"]}>Sign Up Now</button>
      </section>
      <footer className={styles["games-footer"]}>
        <p>
          To use Panna, you must agree to our{" "}
          <a href="/terms-and-conditions" className={styles["terms-link"]}>
            Terms and Conditions
          </a>{" "}
          and{" "}
          <a href="/privacy-policy" className={styles["terms-link"]}>
            Privacy Policy
          </a>.
        </p>
      </footer>
    </div>
  );
};

export default Games;
