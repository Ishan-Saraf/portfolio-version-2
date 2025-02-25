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
        className="w-full h-[230px] object-cover"
      />

      {/* Project details */}
      <div className="flex flex-col gap-[11px]">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-xl md:text-[22px]">{title}</h3>
          <a
            href={link.url}
            className="flex px-[5px] py-[3px] bg-white bg-opacity-[24%] rounded text-[14px]"
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
        <div className="flex flex-row gap-[11px]">
          {technologies.map((technology, id) => (
            <span key={id} className="flex items-center gap-2">
              <img src={technology} alt={technology} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
