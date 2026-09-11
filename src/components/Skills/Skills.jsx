import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section id="skills" className="section-shell section-spacing">
      <div className="section-header">
        <span className="eyebrow">Core capabilities</span>
        <h2>Skills</h2>
      </div>

      <div className="skills-grid">
        {SkillsInfo.map((category) => (
          <div key={category.title} className="surface-panel skills-panel">
            <h3>{category.title}</h3>

            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1200} scale={1.01} transitionSpeed={1500}>
              <div className="skill-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <img src={skill.logo} alt={`${skill.name} logo`} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
