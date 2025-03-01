"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type Props = React.PropsWithChildren<{
  initialX?: number;
  initialY?: number;
  duration?: number;
  delay?: number;
  isVisible?: boolean; // Optional manual control
}>;

const Reveal = ({
  children,
  initialX = 0,
  initialY = 0,
  duration = 1,
  delay = 0,
  isVisible,
}: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  const shouldAnimate = isVisible ?? inView;

  useEffect(() => {
    if (shouldAnimate) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [shouldAnimate, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: initialX, y: initialY, scale: 0.95 },
        visible: { opacity: 1, x: 0, y: 0, scale: 1 },
      }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
