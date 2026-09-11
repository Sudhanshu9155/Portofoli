import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section id="education" className="section-shell section-spacing">
      <div className="section-header">
        <span className="eyebrow">Academic background</span>
        <h2>Education</h2>
      </div>

      <div className="education-list">
        {education.map((edu) => (
          <article key={edu.id} className="surface-panel education-card">
            <div className="education-head">
              <div className="education-logo">
                <img src={edu.img} alt={edu.school} />
              </div>
              <div className="education-copy">
                <span className="education-label">Degree</span>
                <h3>{edu.degree}</h3>
              </div>
            </div>

            <div className="education-meta">
              <span className="education-school">{edu.school}</span>
              <span className="education-date">{edu.date}</span>
            </div>

            <div className="education-grade">
              <span>Performance</span>
              <strong>{edu.grade}</strong>
            </div>

            <p>{edu.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
