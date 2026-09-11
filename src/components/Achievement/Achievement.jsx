import React from "react";
import { achievements } from "../../constants";

const Achievement = () => {
  const renderStars = (filled, total = 5) => {
    return Array.from({ length: total }, (_, index) => (
      <span key={index} className={index < filled ? "achievement-star filled" : "achievement-star"}>★</span>
    ));
  };

  return (
    <section id="achievement" className="section-shell section-spacing">
      <div className="section-header">
        <span className="eyebrow">Progress snapshot</span>
        <h2>Achievements</h2>
      </div>

      <div className="project-grid">
        {achievements.map((item) => (
          <div key={item.id} className="surface-panel project-card achievement-card">
            <div className="project-body">
              <h3>{item.title}</h3>

              {item.type === "rating" ? (
                <div className="achievement-block">
                  <p className="meta-label">Skill rating</p>
                  <div className="stars">{renderStars(item.stars, item.maxStars)}</div>
                </div>
              ) : (
                <div className="achievement-block">
                  <p className="large-number">{item.count}</p>
                  <p className="meta-label">{item.suffix}</p>
                </div>
              )}

              <p className="achievement-note">{item.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievement;
