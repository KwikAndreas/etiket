"use client";
import { useState, useEffect } from "react";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-4 shadow-md fixed w-full z-10 transition duration-500">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-gray-900 dark:text-white">
          Ringkasan Etika & Etiket
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="bg-gray-300 dark:bg-gray-700 p-2 rounded-lg text-sm"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <a
            href="https://www.instagram.com/kwik_andreas_jonathan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-blue-400"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>

          <a
            href="https://github.com/KwikAndreas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-blue-400"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            href="https://kwikandreas.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-blue-400"
          >
            <FontAwesomeIcon icon={faGlobe} size="lg" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
