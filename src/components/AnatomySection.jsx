import React from "react";
import { anatomyIndicators } from "../data/anatomyIndicators";
import "../styles/AnatomySection.css";

function AnatomySection() {
  return (
    <section className="anatomy-section" aria-label="Anatomical illustration and health indicators">
      <div className="anatomy-image-container">
        <img
          alt="Human anatomical illustration"
          src="https://news.flinders.edu.au/wp-content/uploads/2013/10/human.jpg"
          className="anatomy-image"
        />
        {anatomyIndicators.map(({ name, color, position }, idx) => (
          <div
            key={idx}
            className="indicator"
            style={{ top: position.top, left: position.left, borderColor: color }}
          >
            <span className="indicator-label" style={{ color }}>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AnatomySection;
