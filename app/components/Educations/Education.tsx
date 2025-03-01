import React from "react";
import Reveal from "../Reveal";

type Props = {
  id: number;
  image: string;
  institute: string;
  description: string;
  course: string;
  dates: string;
};

const Education = ({
  id,
  image,
  institute,
  description,
  course,
  dates,
}: Props) => {
  return (
    <Reveal initialX={id % 2 === 0 ? -60 : 60} delay={0.5 * id}>
      <div className="card flex flex-col items-stretch w-full max-w-screen-lg px-6 py-[27px] md:px-[33px] gap-3">
        <div className="flex flex-col items-start md:gap-0 md:justify-between">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <img
              src={image}
              alt={institute}
              width={50}
              height={50}
              className="rounded-full"
            />
            <h3 className="text-xl font-bold">{institute}</h3>
          </div>
          <p className="text-base md:text-l font-semibold mt-5">{course}</p>
        </div>
        <p className="text-sm md:text-base">{description}</p>
        <p className="text-sm md:text-base">{dates}</p>
      </div>
    </Reveal>
  );
};

export default Education;
