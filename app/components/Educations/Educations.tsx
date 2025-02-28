import React from "react";
import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";
import educations from "@/data/educations.json";
import Education from "./Education";
import Image from "next/image";

const Educations = () => {
  return (
    <SectionContainer id="educations">
      <div className="section-contents mb-[66px] md:mb-[43px] md:mx-[64px]">
        <SectionHeader plainText="🏫 My" highlightText="Qualifications" />
        <div className="w-full px-6 md:px-[52px] flex flex-col gap-5">
          {educations.map((education, id) => {
            return (
              <Education
                key={id}
                id={id}
                image={education.image}
                institute={education.institute}
                description={education.description}
                course={education.course}
                dates={education.dates}
              />
            );
          })}
        </div>
      </div>
      <div className="circle-icon h-14 w-14 top-[77px] right-1.5 md:top-[153px] md:right-[90px] -z-10">
        <Image
          src="/bracket_icon.svg"
          alt="Bracket icon"
          width={23}
          height={23}
        />
      </div>
      <div className="circle-icon h-14 w-14 left-1.5 bottom-0 md:left-[90px] -z-10">
        <Image
          src="/electricity_icon.svg"
          alt="Electricity icon"
          width={23}
          height={23}
        />
      </div>
    </SectionContainer>
  );
};

export default Educations;
