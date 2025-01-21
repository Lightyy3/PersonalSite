import React from "react";

import { workExperience } from "@/data";

import { GlareCard } from "./ui/Glare";

const Experience = () => {
  return (
    <div className="py-20 w-full z-10">
      {/* <TextRevealCard
        text="You know the business"
        revealText="I know the chemistry "
        className="justify-center text-center text-purple"
      ></TextRevealCard> */}
      <h1 className="heading text-white  justify-center text-center">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <div
            key={card.id}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 gap-10"
          >
            <GlareCard className="h-[50vh]  flex flex-col justify-between gap-16">
              <div className="flex flex-col lg:flex-row lg:items-center p-3 py-12 md:p-5 lg:p-10 gap-2 h-full">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-32 md:w-20 w-16 mx-auto lg:mx-0"
                />
                <div className="lg:ms-2 flex-1">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-start text-white-100 mt-3 font-semibold">
                    {card.desc}
                  </p>
                </div>
              </div>
            </GlareCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
