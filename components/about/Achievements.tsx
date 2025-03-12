import React from "react";
import SectionContainer from "../global/SectionContainer";
import clsx from "clsx";

const Achievements = () => {
  return (
    <SectionContainer className="py-[24px] md:py-20">
      <div className="pb-4">
        <h2 className="font-semibold hidden md:block">Achievements</h2>
        <h4 className="font-bold md:hidden">Achievements</h4>
      </div>
      <div className="flex gap-4 flex-col lg:flex-row">
        <div className="md:w-1/2 h-[400px] bg-slate-300" />
        <div className="md:w-1/2 space-y-4">
          <h2 className="font-semibold hidden md:block">
            Creation of the company
          </h2>
          <h5 className="font-semibold md:hidden">Creation of the company</h5>
          <h6 className="font-semibold">Une Expertise Reconnue</h6>
          <p>
            Avec plus de 15 ans d'expérience , nous avons accompagné de nombreux
            projets à travers l'Afrique subsaharienne, en particulier au
            Cameroun. Avec plus de 15 ans d'expérience , nous avons accompagné
            de nombreux projets à travers l'Afrique subsaharienne, en
            particulier au Cameroun.
          </p>
        </div>
      </div>
      <div className="flex gap-4 h-fit p-4 justify-center items-center mt-10">
        {["2011", "2015", "2018", "2024"].map((date, index) => {
          return (
            <div
              key={index}
              className={clsx(
                "p-2 flex justify-center items-center aspect-square rounded-full text-white h-fit w-fit border-8",
                index !== 1
                  ? "border-gray-300 bg-black"
                  : "border-gray-300 bg-[var(--primary)]"
              )}
            >
              <small className="font-semibold">{date}</small>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default Achievements;
