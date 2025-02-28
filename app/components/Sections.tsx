import React from "react";
import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Experiences from "./Experiences/Experiences";
import Contact from "./Contact";
import Educations from "./Educations/Educations";
import About from "./About";

const Sections = () => {
  return (
    <>
      <main className="flex flex-col gap-[142px] w-full md:max-w-screen-lg pt-[236px] md:pt-60 mx-auto">
        <Hero />
        <About />
        <Skills />
        <Experiences />
        <Projects />
        <Educations />
        <Contact />
      </main>
    </>
  );
};

export default Sections;
