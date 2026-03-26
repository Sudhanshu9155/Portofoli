import React from "react";

const Banner = () => {
  return (
    <div className="banner-ribbon relative w-full h-[340px] aspect-video bg-transparent overflow-hidden group my-0">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="ribbon-back absolute w-[200%] h-[50px] md:h-[80px] bg-gradient-to-r from-transparent via-[#1e3a8a] to-transparent opacity-50 transform -rotate-[15deg] blur-lg pointer-events-none"></div>
        <div className="ribbon-middle absolute w-[200%] h-[40px] md:h-[60px] bg-gradient-to-r from-[#0f172a] via-[#4f46e5] to-[#0f172a] opacity-90 transform rotate-[10deg] shadow-[0_0_40px_rgba(79,70,229,0.5)] pointer-events-none"></div>

        <div className="ribbon-main absolute w-[150%] sm:w-[200%] h-[40px] sm:h-[50px] md:h-[75px] bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#4f46e5] transform -rotate-[5deg] shadow-[0_0_60px_rgba(37,99,235,0.7)] border-y border-blue-400/30 flex items-center overflow-hidden z-10 group-hover:shadow-[0_0_80px_rgba(99,102,241,0.9)] transition-shadow duration-700">
          <div className="ribbon-main-highlight absolute inset-0 bg-gradient-to-t from-transparent via-white/15 to-transparent pointer-events-none mix-blend-overlay"></div>

          <div className="flex whitespace-nowrap animate-marquee">
            <div className="flex items-center">
              <h2 className="banner-text font-mono font-bold text-sm sm:text-base md:text-xl lg:text-2xl tracking-widest px-4">
                LEARNING MINDSET <span className="banner-star mx-4 sm:mx-6 md:mx-10 opacity-90 text-xs sm:text-lg md:text-xl">*</span>
                PROBLEM SOLVING <span className="banner-star mx-4 sm:mx-6 md:mx-10 opacity-90 text-xs sm:text-lg md:text-xl">*</span>
                TIME MANAGEMENT <span className="banner-star mx-4 sm:mx-6 md:mx-10 opacity-90 text-xs sm:text-lg md:text-xl">*</span>
                ADAPTIVE <span className="banner-star mx-4 sm:mx-6 md:mx-10 opacity-90 text-xs sm:text-lg md:text-xl">*</span>
                CREATIVE <span className="banner-star mx-4 sm:mx-6 md:mx-10 opacity-90 text-xs sm:text-lg md:text-xl">*</span>
              </h2>
            </div>
            <div className="flex items-center">
              <h2 className="banner-text font-mono font-bold text-sm sm:text-base md:text-xl lg:text-2xl tracking-widest px-4">
                LEARNING MINDSET <span className="banner-star mx-4 sm:mx-6 md:mx-10 opacity-90 text-xs sm:text-lg md:text-xl">*</span>
                PROBLEM SOLVING <span className="banner-star mx-4 sm:mx-6 md:mx-10 opacity-90 text-xs sm:text-lg md:text-xl">*</span>
                TIME MANAGEMENT <span className="banner-star mx-4 sm:mx-6 md:mx-10 opacity-90 text-xs sm:text-lg md:text-xl">*</span>
                ADAPTIVE <span className="banner-star mx-4 sm:mx-6 md:mx-10 opacity-90 text-xs sm:text-lg md:text-xl">*</span>
                CREATIVE <span className="banner-star mx-4 sm:mx-6 md:mx-10 opacity-90 text-xs sm:text-lg md:text-xl">*</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="ribbon-overlay absolute w-[200%] h-[30px] md:h-[40px] bg-gradient-to-r from-transparent via-[#6366f1] to-transparent opacity-15 transform -rotate-[22deg] blur-md mix-blend-screen z-20 pointer-events-none translate-x-[10%]"></div>
      </div>

      <div className="banner-vignette absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.85)] z-30 pointer-events-none"></div>
    </div>
  );
};

export default Banner;
