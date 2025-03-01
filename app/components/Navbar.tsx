"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import cn from "classnames";
import Reveal from "./Reveal";

const navItems = {
  home: "Home",
  about: "About",
  skills: "Skills",
  experiences: "Experience",
  projects: "Projects",
  educations: "Education",
  contacts: "Contact",
};

const Navbar = () => {
  const [isActive, setIsActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsActive("home");

    // Close menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Smooth scrolling effect
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div
      ref={menuRef}
      className="fixed top-5 right-6 mx-auto flex flex-col gap-2.5 items-center z-50 md:right-auto md:left-1/2 md:-translate-x-1/2"
    >
      {/* Hamburger Button */}
      <button
        className="bg-background p-3 shadow-md md:hidden rounded-full flex justify-center items-center w-12 h-12 transition-transform duration-200 ease-in-out hover:scale-110"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          className="block dark:hidden w-6 h-6"
          src="/menu_icon_light.svg"
          alt="menu"
        />
        <img
          className="hidden dark:block w-6 h-6"
          src="/menu_icon_dark.svg"
          alt="menu"
        />
      </button>

      {/* Navbar */}
      <Reveal initialY={-20} duration={0.5} isVisible={isOpen || true}>
        <nav
          className={cn(
            "bg-background card-shadow p-4 rounded-full md:flex md:relative md:opacity-100 md:pointer-events-auto md:scale-100",
            "absolute top-6 right-6 w-48 transition-all duration-200 ease-in-out md:w-auto",
            {
              "opacity-0 pointer-events-none scale-95 md:opacity-100 md:pointer-events-auto md:scale-100":
                !isOpen,
              "opacity-100 pointer-events-auto scale-100": isOpen,
            }
          )}
        >
          <ul className="flex flex-col md:flex-row items-center gap-4 text-lg font-normal">
            {Object.entries(navItems).map(([key, value]) => (
              <li key={key}>
                <div
                  className={cn(
                    "rounded-full p-1 transition-transform duration-200 cursor-pointer ease-in-out hover:scale-110",
                    {
                      "bg-primary text-white": isActive === key,
                      "hover:bg-gray-200 dark:hover:bg-gray-700":
                        isActive !== key,
                    }
                  )}
                  onClick={() => {
                    setIsActive(key);
                    scrollToSection(key);
                    setIsOpen(false);
                  }}
                >
                  {value}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </Reveal>
    </div>
  );
};

export default Navbar;
