"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
type Props = {
  icon: string;
  name: string;
};

const Skill = ({ icon, name }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const xDistance = useMotionValue(0);
  const yDistance = useMotionValue(0);

  const mask = useMotionTemplate`radial-gradient(100px 100px at ${xDistance}px ${yDistance}px, #000, transparent)`;

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;

      const clientRect = ref.current.getBoundingClientRect();

      xDistance.set(e.x - clientRect.x);
      yDistance.set(e.y - clientRect.y);
    },
    [xDistance, yDistance]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);
  return (
    <div className="relative flex gap-2 p-2 border-primary border rounded-lg h-[46px]">
      <motion.div
        ref={ref}
        className="absolute inset-0 border-2 border-purple-500 dark:border-purple-300 rounded-lg"
        style={{
          maskImage: mask,
          WebkitMaskImage: mask,
        }}
      ></motion.div>
      <Image src={icon} alt={`${name} icon`} height={30} width={30} />
      <p className="text-lg">{name}</p>
    </div>
  );
};

export default Skill;
