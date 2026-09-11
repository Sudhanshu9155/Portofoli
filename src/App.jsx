import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Banner from "./components/Banner/Banner";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Certificate from "./components/Certificate/Certificate";
import Achievement from "./components/Achievement/Achievement";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <div className="site-shell">
      <div className="page-glow page-glow-1" aria-hidden="true" />
      <div className="page-glow page-glow-2" aria-hidden="true" />
      <div className="page-glow page-glow-3" aria-hidden="true" />

      <div className="relative z-10 pt-6 md:pt-8">
        <Navbar />
        <main>
          <About />
          <Skills />
          <Banner />
          <Work />
          <Certificate />
          <Achievement />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
