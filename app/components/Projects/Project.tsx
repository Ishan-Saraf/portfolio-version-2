"use client";

import Image from "next/image";
import React, { MouseEventHandler } from "react";
import Reveal from "../Reveal";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

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
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const xRotation = useTransform(ySpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const yRotation = useTransform(xSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouesMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!e.currentTarget) return;

    const target = e.currentTarget as HTMLElement;
    const clientRect = target.getBoundingClientRect();

    const xPos = (e.clientX - clientRect.left) / clientRect.width - 0.5;
    const yPos = (e.clientY - clientRect.top) / clientRect.height - 0.5;

    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    y.set(0);
    x.set(0);
  };

  return (
    <Reveal initialX={-50} delay={0.5}>
      <motion.div
        onMouseMove={handleMouesMove}
        onMouseLeave={handleMouseLeave}
        className="card flex flex-col items-stretch w-full max-w-[428.4px] p-5 md:p-[18px] gap-[30px]"
        style={{
          transformStyle: "preserve-3d",
          rotateX: xRotation,
          rotateY: yRotation,
        }}
      >
        {/* Project thumbnail */}
        <Image
          src={thumbnail}
          alt={title}
          width={392}
          height={230}
          className="w-full h-[230px] object-cover rounded-lg"
          style={{
            transform: "translateZ(100px)",
          }}
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
              <Image
                src="/link_arrow.svg"
                height={20}
                width={20}
                alt="arrow"
                className="block dark:hidden"
              />
              <Image
                src="/link_arrow_dark.svg"
                height={20}
                width={20}
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
      </motion.div>
    </Reveal>
  );
};

export default Project;
