import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile231.jpg';

const About = () => {
  return (
    <section id="about" className="section-shell hero-section">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Available for product engineering roles</span>
          <h1>
            I design and build <span className="accent-text">human-centered</span> digital experiences.
          </h1>
          <div className="typing-wrap">
            <span className="typing-prefix">I’m a</span>
            <ReactTypingEffect
              text={['Full Stack Developer', 'UI/UX Engineer', 'Software Engineer']}
              speed={100}
              eraseSpeed={40}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => <span className="cursor-blink">{cursor}</span>}
              className="typing-effect"
            />
          </div>
          <p>
            I craft performant web applications with a strong focus on clean architecture, intuitive UX, and product-minded execution.
            From frontend polish to API integrations and scalable user flows, I enjoy bringing ideas into usable, reliable products.
          </p>

          <div className="cta-row">
            <a
              href="https://drive.google.com/file/d/1D51eI4_UtIPz_W5JeZmnlFFgFDkhivEZ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              Download CV
            </a>
            <a href="#contact" className="secondary-button">
              Let’s talk
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <Tilt
            className="portrait-frame"
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            perspective={1200}
            scale={1.03}
            transitionSpeed={1200}
          >
            <div className="portrait-ring" />
            <img src={profileImage} alt="Sudhanshu Kumar" />
          </Tilt>

          <div className="floating-card highlight-card">
            <span className="card-label">Current focus</span>
            <strong>Full-stack product builds</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
