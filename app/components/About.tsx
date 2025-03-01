import Image from "next/image";
import React from "react";
import personal from "@/data/personal.json";
import SectionContainer from "./Section/SectionContainer";
import SectionHeader from "./Section/SectionHeader";
import Reveal from "./Reveal";

const About = () => {
  return (
    <SectionContainer id="about">
      <div className="section-contents mx-[22px] md:mx-[116px] md:my-[20px]">
        <SectionHeader plainText="ℹ️" highlightText="About Me" />

        <div className="card flex flex-col md:flex-row justify-center items-center md:gap-[60px] w-full h-full p-6 rounded-xl gap-[30px]">
          {/* Profile Image */}
          <Reveal>
            <div className="flex justify-center items-center w-full h-full glowing-border-wrapper">
              <Image
                src="/profile_picture.jpg"
                alt="Profile Picture"
                width={300}
                height={300}
                className="w-[300px] h-[300px] max-w-[300px] max-h-[300px] rounded-full object-cover"
              />
            </div>
          </Reveal>

          {/* About Text */}
          <Reveal initialX={40}>
            <div className="p-4 flex flex-col gap-[30px] items-center justify-center md:gap-[34px] md:items-start">
              <ul className="list-disc text-sm md:text-base md:text-start text-center pl-5 space-y-5">
                {personal[0].about.split("\n").map((sentence, index) => (
                  <li key={index}>{sentence.trim()}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
