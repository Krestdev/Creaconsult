"use client";

import React from "react";
import SectionContainer from "../global/SectionContainer";
import clsx from "clsx";
import { ArrowRight } from "phosphor-react";

const NewsList = () => {
  return (
    <SectionContainer>
      <div className="space-y-2 mb-4">
        <h2 className="font-semibold">News</h2>
        <h6 className="max-w-[700px]">
          Des solutions innovantes en ingénierie et maîtrise d'œuvre pour des
          projets d'exception.
        </h6>
      </div>
      <div className="space-y-4">
        <ul className="flex gap-2">
          {["All", "New", "Last Week", "Date"].map((filter, index) => {
            const selected = index == 0;
            return (
              <li key={index}>
                <button
                  className={clsx(
                    "rounded-full px-4 py-2",
                    selected
                      ? "bg-[var(--primary)] text-white"
                      : "bg-[#700032]/10"
                  )}
                >
                  {filter}
                </button>
              </li>
            );
            //
          })}
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((news, index) => {
            return (
              <div key={index}>
                <div className="w-full flex flex-col gap-4 mb-4">
                  <img
                    src="/ui/news/main1.jpeg"
                    alt="articel"
                    className="w-full h-[250px] object-cover bg-slate-300  shadow-md shadow-black"
                  />
                </div>
                <div>
                  <h4 className="font-semibold hidden md:block">
                    Etude de Cas et Realisations
                  </h4>
                  <h6 className="font-semibold md:hidden">
                    Etude de Cas et Realisations
                  </h6>
                  <p>
                    Nous mettons en avant des projets concrets, illustrant notre
                    savoir-faire à travers des études de cas détaillées, avec
                    images avant/après et résultats obtenus.
                  </p>
                  <div className="flex gap-2 items-center text-[var(--primary)] font-semibold">
                    <p>Read More</p> <ArrowRight size={24} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
};

export default NewsList;
