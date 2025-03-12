"use client";

import React from "react";
import SectionContainer from "../global/SectionContainer";
import { ArrowRight } from "phosphor-react";

const Story = () => {
  return (
    <SectionContainer color="white" img="/ui/global/bglinesDeco.png">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full space-y-4">
          <h2 className="font-semibold hidden md:block">Our Story</h2>
          <h4 className="font-bold md:hidden">Our Story</h4>
          <p>
            Des solutions innovantes en ingénierie et maîtrise d'œuvre pour des
            projets d'exception.Des solutions innovantes en ingénierie et
            maîtrise d'œuvre pour des projets d'exception. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Itaque, modi sapiente a eos quo
            expedita doloribus perspiciatis qui iste dolores repellendus aliquam
            laborum excepturi nesciunt. Saepe ex facere corporis est?
          </p>
          <p>
            Des solutions innovantes en ingénierie et maîtrise d'œuvre pour des
            projets d'exception. Des solutions innovantes en ingénierie et
            maîtrise d'œuvre pour des projets d'exception.
          </p>
        </div>
        <div className="grid grid-cols-2 w-full gap-4">
          <div className="min-h-[200px] flex flex-col justify-end bg-slate-300 p-4">
            <h6>Ingénierie et Études Techniques</h6>
            <div className="flex gap-2 items-center text-[var(--primary)] font-semibold">
              <p>Read More</p> <ArrowRight size={24} />
            </div>
          </div>
          <div className="min-h-[200px] flex flex-col justify-end bg-slate-300 p-4">
            <h6>Ingénierie et Études Techniques</h6>
            <div className="flex gap-2 items-center text-[var(--primary)] font-semibold">
              <p>Read More</p> <ArrowRight size={24} />
            </div>
          </div>
          <div className="min-h-[200px] flex flex-col justify-end bg-slate-300 p-4">
            <h6>Ingénierie et Études Techniques</h6>
            <div className="flex gap-2 items-center text-[var(--primary)] font-semibold">
              <p>Read More</p> <ArrowRight size={24} />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Story;
