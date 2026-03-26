import React, { useEffect, useRef } from "react";
import { education } from "../../constants";

const Education = () => {
  const cardRefs = useRef([]);
  const timelineRef = useRef(null);
  const progressLineRef = useRef(null);
  const circleRefs = useRef([]);

  // Card reveal animations
  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              card.classList.add('opacity-100', 'translate-x-0');
              card.classList.remove('opacity-0', index % 2 === 0 ? '-translate-x-16' : 'translate-x-16');
            }, 100);
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(card);
      return observer;
    });
    return () => observers.forEach(obs => obs && obs.disconnect());
  }, []);

  // Scroll logic for the line and circles
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current || !progressLineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Start counting when top reaches 70% of viewport, end at 30%
      const start = viewportHeight * 0.7;
      const elementHeight = rect.height;
      const elementTop = rect.top;

      let progress = 0;
      if (elementTop < start) {
        progress = (start - elementTop) / elementHeight;
        progress = Math.min(Math.max(progress * 1.1, 0), 1);
      }

      progressLineRef.current.style.height = `${progress * 100}%`;

      // Activate circles
      circleRefs.current.forEach((circle, index) => {
        if (!circle) return;
        const threshold = (index / (education.length - 1 || 1)) * 0.95;
        if (progress >= threshold) {
          circle.classList.add('scale-150', 'bg-indigo-500', 'shadow-[0_0_15px_rgba(99,102,241,0.8)]');
          circle.classList.remove('bg-white/20', 'scale-100');
        } else {
          circle.classList.remove('scale-150', 'bg-indigo-500', 'shadow-[0_0_15px_rgba(99,102,241,0.8)]');
          circle.classList.add('bg-white/20', 'scale-100');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="education" className="py-24 px-[5vw] lg:px-[10vw] font-sans">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-white">EDUCATION</h2>
        <p className="text-gray-400 mt-4 text-lg font-medium">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      <div className="relative" ref={timelineRef}>
        {/* Static background line */}
        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-white/10 h-full"></div>

        {/* Animated Progress Line */}
        <div
          ref={progressLineRef}
          className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600 transition-all duration-150 ease-out z-0"
          style={{ height: '0%' }}
        />

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-24 relative ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}
          >
            {/* Timeline Circle */}
            <div
              ref={el => circleRefs.current[index] = el}
              className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white/20 z-10 transition-all duration-500 ease-in-out border border-white/30"
            />

            {/* Content Section */}
            <div
              ref={el => cardRefs.current[index] = el}
              className={`opacity-0 transition-all duration-700 ease-out
                ${index % 2 === 0 ? '-translate-x-16' : 'translate-x-16'}
                w-full sm:w-[45%] p-4 sm:p-6 rounded-2xl border border-white/10 bg-gray-900/80 backdrop-blur-md
                shadow-[0_0_30px_rgba(130,69,236,0.15)] hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]
                hover:border-primary-500/40 hover:scale-[1.02] transform transition-all duration-300`}
            >
              <div className="flex items-center space-x-6">
                <div className="w-24 h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img src={edu.img} alt={edu.school} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-lg font-extrabold text-white leading-tight">{edu.degree}</h3>
                    <h4 className="text-md sm:text-xs text-gray-300 mt-1">{edu.school}</h4>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-400 font-medium">Grade: {edu.grade}</p>
              <p className="mt-4 text-gray-400 text-sm leading-relaxed">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
