import Image from "next/image";
import React from "react";

type Props = {
  thumbnail: string;
  title: string;
  description: string;
  technologies: string[];
  link: {
    url: string;
    label: string;
  };
};

const Project = ({
  thumbnail,
  title,
  description,
  technologies,
  link,
}: Props) => {
  return (
    <div className="card flex flex-col items-stretch w-full max-w-[428.4px] p-5 md:p-[18px] gap-[30px]">
      {/* Project thumbnail */}
      <Image
        src={thumbnail}
        alt={title}
        width={392}
        height={230}
        className="w-full h-[230px] object-cover rounded-lg"
      />

      {/* Project details */}
      <div className="flex flex-col gap-[11px]">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-xl md:text-[22px]">{title}</h3>
          <a
            href={link.url}
            className="flex items-center px-[5px] py-[3px] bg-white bg-opacity-[24%] rounded text-[14px] transition duration-300 hover:bg-opacity-40"
          >
            <span className="hidden md:block">{link.label}</span>
            <img
              src="/link_arrow.svg"
              alt="arrow"
              className="block dark:hidden"
            />
            <img
              src="/link_arrow_dark.svg"
              alt="arrow"
              className="hidden dark:block"
            />
          </a>
        </div>
        <p className="line-clamp-2 text-sm md:text-base">{description}</p>

        {/* Technologies - Wrapped to prevent overflow */}
        <div className="flex flex-wrap gap-[8px]">
          {technologies.map((technology, id) => (
            <span
              key={id}
              className="px-2 py-1 bg-gray-800 text-white text-xs md:text-sm rounded-lg truncate"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
