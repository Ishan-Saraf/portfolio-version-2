"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(savedTheme ? savedTheme === "dark" : prefersDark);
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-[58px] left-6 md:top-16 md:left-auto md:right-[42px] w-9 h-[18px] bg-gray-800 dark:bg-gray-200 rounded-lg z-50 flex items-center justify-end dark:justify-start px-1"
    >
      {isDarkMode ? (
        <Image src="/sun_icon.svg" alt="sun" width={18} height={18} />
      ) : (
        <Image src="/moon_icon.svg" alt="moon" width={18} height={18} />
      )}
    </button>
  );
};

export default ThemeToggle;
