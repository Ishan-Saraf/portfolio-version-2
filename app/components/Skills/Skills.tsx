import React from "react";
import skills from "@/data/skills.json";
import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";
import Skill from "./Skill";
import Image from "next/image";
import Reveal from "../Reveal";

const Skills = () => {
  return (
    <SectionContainer id="skills">
      <div className="section-contents mx-[22px] md:mx-[116px]">
        <SectionHeader plainText="💻 This is my" highlightText="Tech Stack" />

        <Reveal duration={1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
            {/* Frontend */}
            <div className="card p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-center mb-4">
                Frontend
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {skills.frontend.map((skill, id) => (
                  <Skill key={id} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="card p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-center mb-4">
                Backend
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {skills.backend.map((skill, id) => (
                  <Skill key={id} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="card p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-center mb-4">
                Databases
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {skills.databases.map((skill, id) => (
                  <Skill key={id} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </div>

            {/* Programming Languages */}
            <div className="card p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-center mb-4">
                Programming Languages
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {skills.programming_languages.map((skill, id) => (
                  <Skill key={id} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <Image
        src="/projects_highlight.svg"
        alt="Highlight"
        width={558}
        height={558}
        className="absolute hidden md:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
      />
      <Image
        src="/projects_highlight_mobile.svg"
        alt="Highlight"
        width={558}
        height={558}
        className="absolute md:hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
      />

      <>
        {/* Dark mode background */}
        <Image
          src="/tech_stack_grid_dark.svg"
          alt="Tech stack grid"
          width={569}
          height={373}
          className="hidden dark:md:block -z-10 absolute -left-[135px] -top-[139px]"
        />

        {/* Light mode background */}
        <Image
          src="/tech_stack_grid.svg"
          alt="Tech stack grid"
          width={569}
          height={373}
          className="hidden dark:hidden md:block -z-10 absolute -left-[125px] -top-[139px]"
        />
      </>
    </SectionContainer>
  );
};

export default Skills;
