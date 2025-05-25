import React from "react";
import { upcomingAppointments } from "../data/upcomingAppointments";
import SimpleAppointmentCard from "./SimpleAppointmentCard";
import "../styles/UpcomingSchedule.css";

function UpcomingSchedule() {
  return (
    <section className="upcoming-schedule" aria-label="Upcoming schedule">
      <h2>Upcoming schedule</h2>
      <div className="appointments-list">
        {upcomingAppointments.map(({ title, time }, idx) => (
          <SimpleAppointmentCard key={idx} title={title} time={time} />
        ))}
      </div>
    </section>
  );
}

export default UpcomingSchedule;
