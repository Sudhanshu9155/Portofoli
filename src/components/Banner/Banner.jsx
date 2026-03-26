import React from 'react';

const Banner = () => {
    return (
        <div className="relative w-full h-[340px] aspect-video bg-transparent overflow-hidden group my-0">
            {/* Deep Background Glows */}
            {/* <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-red-600/20 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-red-900/20 blur-[100px] rounded-full pointer-events-none"></div> */}

            {/* Ribbons Container */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">

                {/* Ribbon 1: Deepest Layer — deep navy blue */}
                <div className="absolute w-[200%] h-[50px] md:h-[80px] bg-gradient-to-r from-transparent via-[#1e3a8a] to-transparent opacity-50 transform -rotate-[15deg] blur-lg pointer-events-none"></div>

                {/* Ribbon 2: Middle Layer — indigo */}
                <div className="absolute w-[200%] h-[40px] md:h-[60px] bg-gradient-to-r from-[#0f172a] via-[#4f46e5] to-[#0f172a] opacity-90 transform rotate-[10deg] shadow-[0_0_40px_rgba(79,70,229,0.5)] pointer-events-none"></div>

                {/* Ribbon 3: Front Main Layer — sapphire to indigo */}
                <div className="absolute w-[150%] sm:w-[200%] h-[40px] sm:h-[50px] md:h-[75px] bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#4f46e5] transform -rotate-[5deg] shadow-[0_0_60px_rgba(37,99,235,0.7)] border-y border-blue-400/30 flex items-center overflow-hidden z-10 group-hover:shadow-[0_0_80px_rgba(99,102,241,0.9)] transition-shadow duration-700">

                    {/* Inner Glowing Highlight */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/15 to-transparent pointer-events-none mix-blend-overlay"></div>

                    {/* Typography Marquee */}
                    <div className="flex whitespace-nowrap animate-marquee">
                        <div className="flex items-center">
                            <h2 className="text-white font-mono font-bold text-sm sm:text-base md:text-xl lg:text-2xl tracking-widest px-4 drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)]">
                                LEARNING MINDSET <span className="text-blue-200 mx-4 sm:mx-6 md:mx-10 opacity-80 text-xs sm:text-lg md:text-xl">✦</span>
                                PROBLEM SOLVING <span className="text-blue-200 mx-4 sm:mx-6 md:mx-10 opacity-80 text-xs sm:text-lg md:text-xl">✦</span>
                                TIME MANAGEMENT <span className="text-blue-200 mx-4 sm:mx-6 md:mx-10 opacity-80 text-xs sm:text-lg md:text-xl">✦</span>
                                ADAPTIVE <span className="text-blue-200 mx-4 sm:mx-6 md:mx-10 opacity-80 text-xs sm:text-lg md:text-xl">✦</span>
                                CREATIVE <span className="text-blue-200 mx-4 sm:mx-6 md:mx-10 opacity-80 text-xs sm:text-lg md:text-xl">✦</span>
                            </h2>
                        </div>
                        <div className="flex items-center">
                            <h2 className="text-white font-mono font-bold text-sm sm:text-base md:text-xl lg:text-2xl tracking-widest px-4 drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)]">
                                LEARNING MINDSET <span className="text-blue-200 mx-4 sm:mx-6 md:mx-10 opacity-80 text-xs sm:text-lg md:text-xl">✦</span>
                                PROBLEM SOLVING <span className="text-blue-200 mx-4 sm:mx-6 md:mx-10 opacity-80 text-xs sm:text-lg md:text-xl">✦</span>
                                TIME MANAGEMENT <span className="text-blue-200 mx-4 sm:mx-6 md:mx-10 opacity-80 text-xs sm:text-lg md:text-xl">✦</span>
                                ADAPTIVE <span className="text-blue-200 mx-4 sm:mx-6 md:mx-10 opacity-80 text-xs sm:text-lg md:text-xl">✦</span>
                                CREATIVE <span className="text-blue-200 mx-4 sm:mx-6 md:mx-10 opacity-80 text-xs sm:text-lg md:text-xl">✦</span>
                            </h2>
                        </div>
                    </div>

                </div>

                {/* Top minimal overlay ribbon for depth */}
                <div className="absolute w-[200%] h-[30px] md:h-[40px] bg-gradient-to-r from-transparent via-[#6366f1] to-transparent opacity-15 transform -rotate-[22deg] blur-md mix-blend-screen z-20 pointer-events-none translate-x-[10%]"></div>
            </div>

            {/* Ambient Vignette Overlay */}
            <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.85)] z-30 pointer-events-none"></div>

        </div>
    );
};

export default Banner;
