// src/pages/GameRules.js
import React from "react";

function GameRules() {
  return (
    <div className="rules-page">
      <h1>Panna Game Rules</h1>
      <ol>
        <li><strong>How to Play:</strong> Choose a pool or create a private one for friends.</li>
        <li><strong>Entry Fees & Payouts:</strong> Each pool may have different entry fees and payout structures.</li>
        <li><strong>Scoring & Leaderboard:</strong> Points are awarded based on correct picks. Live standings are updated in real-time.</li>
        <li><strong>Bet Types:</strong> Survivor pools, Yes/No predictions, Over/Under lines, etc.</li>
        {/* ... */}
      </ol>
    </div>
  );
}

export default GameRules;
