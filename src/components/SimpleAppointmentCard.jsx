import React from "react";
import "../styles/SimpleAppointmentCard.css";

function SimpleAppointmentCard({ title, time }) {
  return (
    <div className="simple-appointment-card" tabIndex={0}>
      <p className="appointment-title">{title}</p>
      <time className="appointment-time">{time}</time>
    </div>
  );
}

export default SimpleAppointmentCard;
