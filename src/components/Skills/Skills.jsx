import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-[5vw] lg:px-[10vw] font-sans">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-black text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
          SKILLS
        </h2>
        <p className="text-gray-400 mt-4 text-lg font-medium opacity-80">
          A collection of my technical skills and expertise honed through various projects
        </p>
      </div>

      {/* Skill Categories */}
      <div className="flex flex-wrap gap-6 py-10 justify-center">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-card backdrop-blur-3xl px-6 sm:px-10 py-8 sm:py-10 w-full sm:w-[48%] rounded-3xl border border-white/5 shadow-2xl hover:border-primary-500/30 group"
          >
            <h3 className="text-2xl sm:text-3xl font-black text-gray-300 mb-8 text-center group-hover:text-primary-400 transition-colors">
              {category.title}
            </h3>

            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1200}
              scale={1.02}
              transitionSpeed={2000}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center space-y-3 bg-white/5 border border-white/5 hover:border-primary-500/50 hover:bg-white/10 rounded-2xl p-4 text-center transition-all duration-300"
                  >
                    <img src={skill.logo} alt={`${skill.name} logo`} className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-lg" />
                    <span className="text-xs sm:text-sm font-bold text-gray-400 group-hover/skill:text-white">
                      {skill.name}
                    </span>
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
