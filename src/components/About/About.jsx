import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile231.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[5vw] lg:px-[10vw] font-sans mt-16 md:mt-24 lg:mt-32 overflow-visible"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
        {/* Left Side — Text Content */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 flex-shrink-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight tracking-tight">
            Sudhanshu Kumar
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-4 leading-tight">
            <span className="text-white opacity-90">I am a </span>
            <ReactTypingEffect
              text={['Fullstack Developer', 'UI/UX Designer', 'Software Engineer']}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => <span className="gradient-text">{cursor}</span>}
              className="gradient-text"
            />
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed font-medium max-w-xl">
            I am a passionate MERN Developer skilled in creating dynamic and responsive web applications.
            I work with front-end and back-end technologies to build user-friendly and efficient solutions.
          </p>
          <a
            href="https://docs.google.com/document/d/1f6KD_gEW2jETFJBVaHQlymhzwKdY-W6X/edit?usp=sharing&ouid=107394016595270127078&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-4 px-10 rounded-2xl mt-5 text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:bg-white/10 border border-white/5 bg-gradient-primary shadow-glow hover:shadow-primary-500/25"
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side — Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end flex-shrink-0">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-primary-600 rounded-full shadow-2xl relative"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1200}
            scale={1.02}
            transitionSpeed={1500}
          >
            {/* Background glow ring */}
            <div className="absolute inset-[-10px] rounded-full bg-primary-500/20 blur-2xl -z-10 animate-pulse" />

            <img
              src={profileImage}
              alt="Sudhanshu Kumar"
              className="w-full h-full rounded-full object-cover shadow-[0_0_50px_rgba(37,99,235,0.3)] filter contrast-[1.1]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
