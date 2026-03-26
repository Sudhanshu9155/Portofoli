import React from "react";
import { achievements } from "../../constants";

const Achievement = () => {
  const renderStars = (filled, total = 5) => {
    return Array.from({ length: total }, (_, index) => (
      <span
        key={index}
        className={index < filled ? "text-yellow-400" : "text-gray-600"}
      >
        ★
      </span>
    ));
  };

  return (
    <section id="achievement" className="py-24 px-[5vw] lg:px-[10vw] font-sans relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
          ACHIEVEMENTS
        </h2>
        <p className="text-gray-400 mt-4 text-lg font-medium">
          Progress highlights across coding practice and technical skills
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item) => (
          <div
            key={item.id}
            className="group border border-white/10 bg-card backdrop-blur-3xl rounded-2xl shadow-xl p-6 hover:shadow-glow hover:-translate-y-2 hover:border-primary-500/50 transition-all duration-300"
          >
            <h3 className="text-2xl font-extrabold text-white mb-5">{item.title}</h3>

            {item.type === "rating" ? (
              <div className="mb-5">
                <p className="text-sm text-gray-400 mb-2">Skill Rating</p>
                <div className="text-2xl tracking-wider">
                  {renderStars(item.stars, item.maxStars)}
                </div>
              </div>
            ) : (
              <div className="mb-5">
                <p className="text-4xl font-black text-primary-300 leading-none">{item.count}</p>
                <p className="text-sm text-gray-400 mt-2">{item.suffix}</p>
              </div>
            )}

            <p className="text-sm text-gray-400 leading-relaxed">{item.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievement;
