import React from "react";
import SectionHeader from "../Section/SectionHeader";
import SectionContainer from "../Section/SectionContainer";
import projects from "@/data/projects.json";
import Project from "./Project";
import Image from "next/image";

const Projects = () => {
  return (
    <SectionContainer id="projects">
      <div className="section-contents mx-6 md:mx-[64px]">
        <SectionHeader plainText="💡 Some of my" highlightText="Projects" />
        {/* Projects go here */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* Project card */}
          {projects.map((project, id) => {
            return (
              <Project
                key={id}
                thumbnail={project.thumbnail}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                link={project.link}
              />
            );
          })}
        </div>
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
    </SectionContainer>
  );
};

export default Projects;
