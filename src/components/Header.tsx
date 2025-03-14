"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaBars } from "react-icons/fa";
import { MoonIcon } from "@heroicons/react/24/solid";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for dark mode preference stored in localStorage
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    // Toggle dark mode directly without using state
    const isDark = document.documentElement.classList.contains("dark");
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="flex items-center justify-between p-4 dark:bg-gray-900">
      <div className="flex items-center space-x-2">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/images/snakechain.png"
            alt="Logo"
            className="h-8 w-8 cursor-pointer"
          />
          <span className="text-lg font-semibold text-gray-900 dark:text-white cursor-pointer">
            Nhat Thanh
          </span>
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <div className="md:hidden relative" ref={menuRef}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            <FaBars className="w-6 h-6" />
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 flex flex-col space-y-2">
              <Link
                href="/project"
                className="block p-2 hover:bg-gray-200 dark:text-white rounded dark:hover:bg-gray-700"
              >
                Project
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                className="block p-2 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded flex items-center space-x-2"
              >
                <FaGithub className="w-5 h-5" />
                <span>Github</span>
              </Link>
            </div>
          )}
        </div>

        <nav className="hidden md:flex space-x-6">
          <Link
            href="/project"
            className="text-gray-800 dark:hover:bg-gray-700 dark:text-white hover:bg-gray-300 p-2 rounded-full"
          >
            Project
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            className="flex items-center space-x-2 text-gray-800 dark:hover:bg-gray-700 dark:text-white hover:bg-gray-300 p-2 rounded-full"
          >
            <FaGithub className="w-5 h-5" />
            <span>Github</span>
          </Link>
        </nav>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          <MoonIcon className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
