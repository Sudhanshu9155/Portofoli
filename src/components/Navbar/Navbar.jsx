import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["about", "skills", "work", "education", "certificate", "achievement"];
    const handleScrollSpy = () => {
      const offset = 100;
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= offset) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80;
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "certificate", label: "Certificates" },
    { id: "achievement", label: "Achievements" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92vw] max-w-5xl">
      <div
        className={`transition-all duration-300 rounded-full border border-white/10 px-4 lg:px-5 py-2.5 flex justify-between items-center
          ${
            isScrolled
              ? theme === "light"
                ? "bg-white/90 backdrop-blur-xl shadow-[0_4px_24px_rgba(15,23,42,0.12)] border-slate-300/60"
                : "bg-black/70 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-white/15"
              : theme === "light"
              ? "bg-white/70 backdrop-blur-md shadow-[0_2px_16px_rgba(15,23,42,0.08)] border-slate-300/50"
              : "bg-white/5 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
          }`}
      >
        <div className="text-base lg:text-lg font-display font-medium cursor-pointer shrink-0">
          <span className="text-primary-500">&lt;</span>
          <span className={theme === "light" ? "text-slate-900" : "text-white"}>Sudhanshu</span>
          <span className="text-primary-500">/</span>
          <span className={theme === "light" ? "text-slate-900" : "text-white"}>Kumar</span>
          <span className="text-primary-500">&gt;</span>
        </div>

        <ul className={`hidden lg:flex items-center gap-5 xl:gap-7 text-sm xl:text-base ${theme === "light" ? "text-slate-700" : "text-gray-300"}`}>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer transition-colors duration-300 hover:text-primary-400 ${
                activeSection === item.id ? "text-primary-500 font-medium" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 shrink-0">
          <button
            type="button"
            onClick={onToggleTheme}
            className={`w-10 h-10 rounded-full transition-all duration-300 flex items-center justify-center ${
              theme === "light"
                ? "border border-slate-300 bg-white text-slate-700 hover:text-primary-500 hover:border-primary-400/70"
                : "border border-white/20 bg-white/5 text-gray-200 hover:text-primary-400 hover:border-primary-400/50"
            }`}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <a
            href="https://github.com/Sudhanshu9155"
            target="_blank"
            rel="noopener noreferrer"
            className={`${theme === "light" ? "text-slate-700" : "text-gray-300"} hover:text-primary-400 transition-colors duration-300 hover-scale`}
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/sudhanshu-kumar-7529863b9"
            target="_blank"
            rel="noopener noreferrer"
            className={`${theme === "light" ? "text-slate-700" : "text-gray-300"} hover:text-primary-400 transition-colors duration-300 hover-scale`}
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className={`w-9 h-9 rounded-full transition-all duration-300 flex items-center justify-center ${
              theme === "light"
                ? "border border-slate-300 bg-white text-slate-700 hover:text-primary-500"
                : "border border-white/20 bg-white/5 text-gray-200 hover:text-primary-400"
            }`}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>

          {isOpen ? (
            <FiX
              className="text-3xl text-primary-500 cursor-pointer transition-transform duration-300 hover:rotate-90"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-primary-500 cursor-pointer transition-transform duration-300 hover:scale-110"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-[calc(100%+8px)] left-1/2 transform -translate-x-1/2 w-4/5 glass-effect-strong z-50 rounded-xl shadow-professional animate-fade-in-up lg:hidden">
          <ul className="flex flex-col items-center space-y-4 py-6 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer transition-colors duration-300 hover:text-primary-400 ${activeSection === item.id ? "text-primary-500 font-medium" : ""}`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
              </li>
            ))}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://github.com/Sudhanshu9155"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sudhanshu-kumar-7529863b9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
