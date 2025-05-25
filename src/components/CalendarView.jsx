import React from "react";
import { calendarMonth, calendarAppointments, detailedAppointments } from "../data/calendarData";
import "../styles/CalendarView.css";

function CalendarView() {
  const daysInMonth = 31;

  
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <section className="calendar-view" aria-label="Calendar view">
      <h2>{calendarMonth}</h2>
      <div className="calendar-grid" role="grid">
        
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="calendar-day-header">{day}</div>
        ))}
        
        {daysArray.map((day) => {
          const appointmentForDay = calendarAppointments.find((a) => a.day === day);
          return (
            <div key={day} className="calendar-day" role="gridcell" aria-label={`Day ${day}`}>
              <div className="date">{day}</div>
              {appointmentForDay && (
                <ul className="appointment-times">
                  {appointmentForDay.times.map((time, idx) => (
                    <li key={idx} className="appointment-time">{time}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
      <div className="detailed-appointments">
        {detailedAppointments.map(({ title, time, description }, i) => (
          <article key={i} className="appointment-card">
            <h3>{title}</h3>
            <time>{time}</time>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CalendarView;
