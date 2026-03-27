import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[5vw] lg:px-[10vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-extrabold text-purple-500">Sudhanshu Kumar</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            // { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        {/* <div className="flex flex-wrap justify-center space-x-4 mt-6"> */}
          {/* {[
            { icon: <FaFacebook />, link: "facebook.com/skedit01" },
            { icon: <FaTwitter />, link: "twitter.com/skedit01?s=09" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/tarun-kaushik-553b441a4" },
            { icon: <FaInstagram />, link: "instagram.com/invites/contact/?i=1lhsbid8es7tm&utm_content=adyb2s" },
            // { icon: <FaYoutube />, link: "https://www.youtube.com/codingmasteryt" },

          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div> */}

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Sudhanshu Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
