"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";

type GameType = "lms" | "grassroots" | "scorer";

interface RuleSection {
  title: string;
  rules: string[];
}

interface GameRules {
  displayName: string;
  description: string;
  icon: string;
  sections: RuleSection[];
}

const gameRulesData: Record<GameType, GameRules> = {
  lms: {
    displayName: "Last Man Standing",
    description: "Survive the eliminations to win the prize pool",
    icon: "🏆",
    sections: [
      {
        title: "How to Play",
        rules: [
          "Select one team you think will win in each gameweek",
          "Make your selection before the gameweek deadline (one hour before the first kick-off)",
          "If your selected team wins, you progress to the next round",
          "If your selected team draws or loses, you are eliminated",
          "You cannot select the same team more than once per game cycle",
        ],
      },
      {
        title: "Entry & Participation",
        rules: [
          "Must be 18+ to participate in paid games",
          "Entry fee must be paid before the game starts",
          "Players can only enter once per game",
          "No changes allowed after round deadlines",
        ],
      },
      {
        title: "Deadlines & Missed Picks",
        rules: [
          "The selection deadline is one hour before the first kick-off of the gameweek",
          "If you forget to submit a pick before the deadline, you will be eliminated from the game",
        ],
      },
      {
        title: "Postponements & Cancellations",
        rules: [
          "If your selected team's match is postponed or abandoned, you receive an automatic pass for that round (you are not eliminated)",
          "This team selection is consumed and becomes unavailable for future gameweeks",
          "If the match is rescheduled and fully completed within the same gameweek window, the final result will count; otherwise the automatic pass stands",
        ],
      },
      {
        title: "Payouts, Rankings & Fees",
        rules: [
          "Public games: a 10% platform fee is charged on the total pot and paid by the winner(s)",
          "Private games: 0% platform fee",
          "In Public games, the prize pot displayed in-app is the net pot (after the 10% fee). Private games display the full pot",
          "The net prize pot is paid out to the last remaining player",
          "If multiple players remain and all are eliminated in the same round, the net pot is split equally between them",
          "Winnings are credited to your account balance within 24 hours (subject to verification)",
          "Minimum withdrawal limits may apply",
        ],
      },
    ],
  },
  grassroots: {
    displayName: "Grassroots Fantasy",
    description: "Pick players from your local team to score points",
    icon: "🌱",
    sections: [
      {
        title: "How to Play",
        rules: [
          "Select players from your grassroots team.",
          "Your selected players score points based on their performance in each fixture throughout the season",
          "Use your 2 transfers per gameweek strategically to swap underperforming players",
          "Accumulate points across all fixtures; highest total points at season end wins",
        ],
      },
      {
        title: "Player Selection",
        rules: [
          "Choose 3/5/9 players (decided by the admin): This can be a combination of formations.",
          "All players must be from the same grassroots team",
          "Players are locked to their position at the start of the season",
          "You can only select from players registered in the team roster",
        ],
      },
      {
        title: "Points Scoring",
        rules: [
          "Goals: Defender 8 points • Midfielder 5 points • Forward 3 points",
          "Assists: Defender 4 points • Midfielder 3 points • Forward 2 points",
          "Defender Bonus (clean sheet): Goalkeeper 6 points • Defender 4 points",
          "Man of the Match (MOTM): 6 points (decided by game admin)",
          "Least Valuable Player (LVP): -2 points (decided by game admin)",
          "Yellow Card: -1 point",
          "Red Card: -2 points",
          "Own Goal: -2 points",
          "Points are awarded only for regular time and extra time (not penalty shootouts)",
          "All scoring events must be confirmed by the game admin",
        ],
      },
      {
        title: "Transfer System",
        rules: [
          "First fixture: Unlimited changes allowed before the first fixture deadline",
          "Subsequent fixtures: Maximum 2 transfers per gameweek",
          "Transfers must be made before each fixture deadline (1 hour before kickoff)",
          "You can change any of your players, but must maintain position requirements.",
          "Unused transfers do not carry over to the next gameweek",
        ],
      },
      {
        title: "Deadlines & Rollovers",
        rules: [
          "Selection deadline: 1 hour before each fixture kickoff",
          "If you miss the deadline, your previous selection automatically rolls over",
          "Rollover selections use the same players from your last confirmed team",
          "You can make changes for the next fixture once the current one has kicked off",
        ],
      },
      {
        title: "Postponements & Cancellations",
        rules: [
          "If a fixture is postponed before kickoff, the deadline extends to the rescheduled time",
          "Your selection remains active and will be used for the rescheduled fixture",
          "If a fixture is abandoned after kickoff, points earned up to abandonment stand",
          "If a fixture is cancelled entirely, no points are awarded for that gameweek",
        ],
      },
      {
        title: "Entry & Participation",
        rules: [
          "Must be 18+ to participate in paid games",
          "Entry fee must be paid before the season starts",
          "Players can only enter once per game",
          "All participants must be registered to the same grassroots club",
        ],
      },
      {
        title: "Payouts, Rankings & Fees",
        rules: [
          "Public games: a 10% platform fee is charged on the total pot and paid by the winner(s)",
          "Private games: 0% platform fee",
          "In Public games, the prize pot displayed in-app is the net pot (after the 10% fee). Private games display the full pot",
          "Rankings are based on cumulative points across the entire season",
          "Payout structure is determined by the game admin at creation and shown on the Home tab",
          "Common payout types: Winner Takes All (100% to 1st) or Tiered (e.g., 60%/30%/10% for top 3)",
          "Ties: If players tie on points for paying positions, the combined prize for those ranks is split equally",
          "Winnings are credited to your account balance within 24 hours (subject to verification)",
          "Minimum withdrawal limits may apply",
        ],
      },
      {
        title: "Admin Responsibilities",
        rules: [
          "The game admin is responsible for confirming match results and player statistics",
          "Admin must designate the Man of the Match for each fixture",
          "Admin should update results within 24 hours of fixture completion",
          "Any disputes regarding scoring should be raised with the admin",
        ],
      },
    ],
  },
  scorer: {
    displayName: "Scorer Selector",
    description: "Pick the goalscorers to climb the leaderboard",
    icon: "⚽",
    sections: [
      {
        title: "How to Play",
        rules: [
          "Select three players you think will score in upcoming fixtures each gameweek",
          "Earn points for goals scored: the number of points depends on the player's position",
          "Your game's payout type (Winner Takes All or Tiered) is shown on the Home tab for the game",
          "Accumulate points across the gameweek; top positions win according to the selected payout type",
        ],
      },
      {
        title: "Scoring System",
        rules: [
          "Forward: 3 points per goal",
          "Midfielder: 5 points per goal",
          "Defender: 8 points per goal",
          "Points awarded only for goals scored during regular/extra time",
        ],
      },
      {
        title: "Entry & Deadlines",
        rules: [
          "Submit your selections before the gameweek deadline (one hour before first kick-off)",
          "You can change selections until the deadline; after the deadline, selections lock",
          "You must select three players per gameweek to participate",
          "Your entry fee must be paid to lock in your selections",
        ],
      },
      {
        title: "Postponements & Refunds",
        rules: [
          "If any of your selected players' fixtures are postponed or cancelled before kick-off, your entry for the week is refunded",
          "If a relevant fixture is rescheduled and fully completed within the same gameweek window, goals from that match will count; otherwise a refund applies",
        ],
      },
      {
        title: "Payouts, Rankings & Fees",
        rules: [
          "Public games: a 10% platform fee is charged on the total pot and paid by the winner(s)",
          "Private games: 0% platform fee",
          "In Public games, the prize pot displayed in-app is the net pot (after the 10% fee). Private games display the full pot",
          "There are two payout types for Scorer Selector games, which are set by the game admin and shown on your game's Home tab:",
          "Winner Takes All: Top player wins 100% of the net pot",
          "Tiered Payout: Top 3 split the net pot (default 60% / 30% / 10%) or per game's configured rules",
          "Ties: If players tie on points for paying positions, the combined prize for those ranks is split equally among tied players",
          "Example A (3-way tie for 1st): Ranks 1+2+3 are combined and split equally (each receives 33.33% of the net pot)",
          "Example B (2-way tie for 2nd): Rank 2 and 3 shares are combined and split equally (each receives 20% of the net pot)",
        ],
      },
      {
        title: "Double Gameweeks",
        rules: [
          "Only the official original fixtures of the gameweek are taken into account for scoring",
          "The fixtures you can see in the Fixtures tab or on the make selection page (where it shows \"vs\") are the only fixtures that count",
          "Postponed fixtures that have been moved to a double gameweek do not count towards scoring",
          "Goals scored in postponed fixtures that are rescheduled to a different gameweek will not be counted",
          "This ensures fair competition based on the fixtures clearly shown to players during selection",
        ],
      },
    ],
  },
};

function GamesContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");

  const [activeGame, setActiveGame] = useState<GameType>("lms");

  useEffect(() => {
    if (tabParam && (tabParam === "lms" || tabParam === "grassroots" || tabParam === "scorer")) {
      setActiveGame(tabParam as GameType);
    }
  }, [tabParam]);

  const currentGame = gameRulesData[activeGame];

  return (
    <div className={styles.gamesPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.pageTitle}>Game Rules</h1>
          <p className={styles.pageSubtitle}>
            Learn how to play our different game modes and understand the rules
          </p>
        </div>

        <div className={styles.gameTabs}>
          <button
            className={`${styles.gameTab} ${activeGame === "lms" ? styles.activeTabLms : ""}`}
            onClick={() => setActiveGame("lms")}
          >
            🏆 Last Man Standing
          </button>
          <button
            className={`${styles.gameTab} ${activeGame === "grassroots" ? styles.activeTabGrassroots : ""}`}
            onClick={() => setActiveGame("grassroots")}
          >
            🌱 Grassroots Fantasy
          </button>
          <button
            className={`${styles.gameTab} ${activeGame === "scorer" ? styles.activeTabScorer : ""}`}
            onClick={() => setActiveGame("scorer")}
          >
            ⚽ Scorer Selector
          </button>
        </div>

        <div className={styles.gameContent}>
          <div className={styles.gameHeader}>
            <span className={styles.gameIcon}>{currentGame.icon}</span>
            <div>
              <h2 className={styles.gameTitle}>{currentGame.displayName}</h2>
              <p className={styles.gameDescription}>{currentGame.description}</p>
            </div>
          </div>

          <div className={styles.sections}>
            {currentGame.sections.map((section, idx) => (
              <div key={idx} className={styles.section}>
                <h3 className={styles.sectionTitle}>{section.title}</h3>
                <ul className={styles.rulesList}>
                  {section.rules.map((rule, rIdx) => (
                    <li key={rIdx} className={styles.ruleItem}>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GamesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GamesContent />
    </Suspense>
  );
}
