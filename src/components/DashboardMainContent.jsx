import React from "react";
import DashboardOverview from "./DashboardOverview";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import "../styles/DashboardMainContent.css";

function DashboardMainContent() {
  return (
    <main className="dashboard-main" aria-label="Healthcare dashboard main content">
      <DashboardOverview />
      <section className="middle-section">
        <AnatomySection />
        <HealthStatusCards />
      </section>
      <CalendarView />
      <section className="bottom-section">
        <UpcomingSchedule />
        <ActivityFeed />
      </section>
    </main>
  );
}

export default DashboardMainContent;
