import React from "react";
import { weeklyAppointmentsCount, activityBars } from "../data/activityData";
import "../styles/ActivityFeed.css";

function ActivityFeed() {
  return (
    <section className="activity-feed" aria-label="Weekly activity feed">
      <h2>Activity</h2>
      <p>This week you had {weeklyAppointmentsCount} appointments</p>
      <div className="activity-bars">
        {activityBars.map(({ day, height }, i) => (
          <div key={i} className="activity-bar-container">
            <div className="activity-bar" style={{ height: `${height}px` }}></div>
            <span className="day-label">{day}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ActivityFeed;
