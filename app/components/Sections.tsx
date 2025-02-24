import React from "react";
import Hero from "./Hero/Hero";

const Sections = () => {
  return (
    <>
      <main className="flex flex-col gap-[142px] w-full md:max-w-screen-lg pt-[236px] md:pt-60 mx-auto">
        <Hero />
      </main>
    </>
  );
};

export default Sections;
