import Image from "next/image";
import React from "react";
import personal from "@/data/personal.json";
import SectionContainer from "./Section/SectionContainer";
import SectionHeader from "./Section/SectionHeader";

const About = () => {
  return (
    <SectionContainer id="about">
      <div className="section-contents mx-[22px] md:mx-[116px] md:my-[20px]">
        <SectionHeader plainText="ℹ️" highlightText="About Me" />

        <div className="flex flex-col md:flex-row justify-center items-center md:gap-[60px] w-full h-full p-6 rounded-xl gap-[30px]">
          {/* Profile Image */}
          <div className="flex justify-center items-center w-full h-full">
            <Image
              src="/profile_picture.jpg"
              alt="Profile Picture"
              width={300}
              height={300}
              className="w-[300px] h-[300px] max-w-[300px] max-h-[300px] rounded-full border-2 border-primary object-cover"
            />
          </div>

          {/* About Text */}
          <div className="card  p-4 flex flex-col gap-[30px] items-center justify-center md:gap-[34px] md:items-start">
            <p className="text-center text-sm md:text-base md:text-start">
              {personal[0].about}
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
