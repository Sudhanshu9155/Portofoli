import React, { useEffect, useState } from "react";
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
import ParticleField from "./components/ParticleField";

const App = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="bg-black min-h-screen relative overflow-hidden selection:bg-primary-500 selection:text-white">
      {theme === "dark" && <ParticleField />}

      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className={`absolute w-[500px] h-[500px] rounded-full blur-[120px] top-[-10%] left-[-10%] animate-orbitX ${theme === "dark" ? "bg-blue-700/10" : "bg-blue-400/20"}`} />
        <div className={`absolute w-[400px] h-[400px] rounded-full blur-[100px] top-[5%] right-[-8%] animate-orbitY ${theme === "dark" ? "bg-indigo-600/10" : "bg-indigo-300/20"}`} style={{ animationDelay: "-6s" }} />
        <div className={`absolute w-[350px] h-[350px] rounded-full blur-[110px] top-[40%] left-[40%] animate-drift ${theme === "dark" ? "bg-violet-700/10" : "bg-cyan-300/20"}`} style={{ animationDelay: "-3s" }} />
        <div className={`absolute w-[450px] h-[450px] rounded-full blur-[130px] bottom-[-5%] left-[10%] animate-orbitY ${theme === "dark" ? "bg-blue-900/10" : "bg-blue-200/30"}`} style={{ animationDelay: "-10s" }} />
        <div className={`absolute w-[300px] h-[300px] rounded-full blur-[90px] bottom-[10%] right-[5%] animate-drift ${theme === "dark" ? "bg-indigo-500/10" : "bg-teal-200/30"}`} style={{ animationDelay: "-7s" }} />
      </div>

      <div className="relative pt-20 z-10">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <About />
        <Skills />
        <Banner />
        <Work />
        <Certificate />
        <Achievement />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
