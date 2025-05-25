import React from "react";
import { healthCards } from "../data/healthCards";
import "../styles/HealthStatusCards.css";

function HealthStatusCards() {
  return (
    <section className="health-status-cards" aria-label="Health status cards">
      {healthCards.map(({ title, lastCheck, statusColor, progress }, i) => (
        <div key={i} className="health-card">
          <h3>{title}</h3>
          <p>Last checked: {lastCheck}</p>
          <div className="progress-bar-background">
            <div
              className="progress-bar-fill"
              style={{ width: `${progress}%`, backgroundColor: statusColor }}
            />
          </div>
          <span className="status-indicator" style={{ backgroundColor: statusColor }}></span>
        </div>
      ))}
    </section>
  );
}

export default HealthStatusCards;
