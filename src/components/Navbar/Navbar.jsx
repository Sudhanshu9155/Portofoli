import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sectionIds = ["about", "skills", "work", "education", "certificate", "achievement", "contact"];
    const handleScrollSpy = () => {
      const offset = 120;
      let current = "about";
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

  useEffect(() => {
    const handleViewportChange = () => {
      if (window.innerWidth > 1100) setIsOpen(false);
    };

    window.addEventListener("resize", handleViewportChange);
    handleViewportChange();
    return () => window.removeEventListener("resize", handleViewportChange);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - 90;
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
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="section-shell sticky top-4 z-50">
      <nav className="nav-surface">
        <div className="brand-mark" onClick={() => handleMenuItemClick("about")}>
          <span className="brand-symbol">&lt;</span>
          <span>Sudhanshu</span>
          <span className="brand-divider">/</span>
          <span>Kumar</span>
          <span className="brand-symbol">&gt;</span>
        </div>

        <ul className="nav-links desktop-nav-links">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleMenuItemClick(item.id)}
                className={activeSection === item.id ? "nav-link active" : "nav-link"}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-actions desktop-nav-actions">
          <a href="https://github.com/Sudhanshu9155" target="_blank" rel="noreferrer" className="nav-icon" aria-label="GitHub">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/sudhanshu-kumar-7529863b9" target="_blank" rel="noreferrer" className="nav-icon" aria-label="LinkedIn">
            <FaLinkedin size={18} />
          </a>
          <button type="button" onClick={() => handleMenuItemClick("contact")} className="primary-button small-button">
            Contact
          </button>
        </div>

        <div className="mobile-nav-actions">
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="mobile-menu surface-panel">
          {menuItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleMenuItemClick(item.id)}
              className={activeSection === item.id ? "mobile-link active" : "mobile-link"}
            >
              {item.label}
            </button>
          ))}
          <div className="mobile-menu-actions">
            <a href="https://github.com/Sudhanshu9155" target="_blank" rel="noreferrer" className="nav-icon" aria-label="GitHub">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/sudhanshu-kumar-7529863b9" target="_blank" rel="noreferrer" className="nav-icon" aria-label="LinkedIn">
              <FaLinkedin size={18} />
            </a>
            <button type="button" onClick={() => handleMenuItemClick("contact")} className="primary-button small-button">
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
