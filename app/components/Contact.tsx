"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import personal from "@/data/personal.json";
import contacts from "@/data/contacts.json";
import Reveal from "./Reveal";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Contact = () => {
  const ref = useRef<HTMLElement>(null);

  // Motion values for smoother animation
  const xPos = useMotionValue(0);
  const yPos = useMotionValue(0);

  // Add a spring animation for a smoother effect
  const smoothX = useSpring(xPos, { stiffness: 150, damping: 20 });
  const smoothY = useSpring(yPos, { stiffness: 150, damping: 20 });

  const updatePos = (e: MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const insideX = e.clientX - rect.left;
    const insideY = e.clientY - rect.top;

    // Ensure the glow only moves when inside the contact section
    if (
      insideX >= 0 &&
      insideX <= rect.width &&
      insideY >= 0 &&
      insideY <= rect.height
    ) {
      xPos.set(insideX);
      yPos.set(insideY);
    }
  };

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    // Attach listener only when inside the section
    section.addEventListener("mousemove", updatePos);

    return () => {
      section.removeEventListener("mousemove", updatePos);
    };
  }, []);

  return (
    <Reveal initialY={60} delay={0.5}>
      <section
        ref={ref}
        id="contacts"
        className="card relative items-center mx-6 flex flex-col px-[33px] py-[27px] z-30 gap-[54px] md:gap-[35px] mb-[67px] md:mb-[42px] group overflow-hidden"
      >
        <div className="flex flex-col gap-5 items-center justify-between md:w-full">
          <h2 className="font-semibold text-[20px] md:text-[35px] md:max-w-[462px] text-center">
            📞 Want me in your team?
          </h2>
          <div className="flex flex-col gap-5 items-center justify-center w-full">
            <a
              href={`mailto:${personal[0].email}`}
              className="self-center bg-primary text-white p-2.5 rounded-full flex gap-2.5 items-center justify-center text-lg md:text-xl/l font-normal hover:scale-[105%] transition"
            >
              Let's get in touch!
              <Image src="/mail_icon.svg" alt="mail" width={20} height={20} />
            </a>

            {/* Social media links */}
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 w-full">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  className="flex items-center gap-2 p-2 bg-white bg-opacity-10 rounded-full transition hover:bg-opacity-20 hover:scale-[105%]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={contact.icon}
                    alt={contact.name}
                    width={20}
                    height={20}
                  />
                  <span className="text-sm md:text-base font-medium">
                    {contact.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <small>
          Copyright &copy; {personal[0].name} {new Date().getFullYear()}
        </small>

        {/* Glow effect following cursor */}
        <motion.div
          className="absolute w-64 h-64 bg-gradient-radial from-violet-700/100 to-transparent rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition duration-300"
          style={{
            left: smoothX,
            top: smoothY,
            transform: "translate(-50%, -50%)",
          }}
        />
      </section>
    </Reveal>
  );
};

export default Contact;
