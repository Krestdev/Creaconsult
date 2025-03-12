import React from "react";
import SectionContainer from "./SectionContainer";

const Projects = () => {
  return (
    <SectionContainer className="bg-[#700032]/10 min-h-[700px] overflow-hidden">
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="md:w-1/2 space-y-8">
          <h4 className="font-bold md:hidden">Projects</h4>
          <h2 className="font-semibold hidden md:block">Projects</h2>
          <div className="space-y-4 max-w-[500px]">
            <h5 className="font-semibold md:hidden">
              Djapoma Stadium Construction
            </h5>
            <h3 className="font-semibold hidden md:block">
              Djapoma Stadium Construction
            </h3>
            <p>
              {
                "Avec plus de 15 ans d'expérience , nous avons accompagné de nombreux projets à travers l'Afrique subsaharienne, en particulier au Cameroun."
              }
            </p>
          </div>
        </div>
        <div className="flex w-1/2 gap-4 h-fit md:h-[500px] items-end p-6">
          <img
            src="/ui/projects/project1.jpeg"
            alt="Djapoma Stadium Construction"
            className="w-[200px] h-[300px] object-cover object-center bg-gray-400 shadow-lg shadow-black"
          />
          <img
            src="/ui/projects/project3.jpeg"
            alt="Djapoma Stadium Construction"
            className="w-[200px] h-[300px] object-cover object-center bg-gray-400 shadow-lg shadow-black"
          />
          <img
            src="/ui/projects/project2.jpeg"
            alt="Djapoma Stadium Construction"
            className="w-[200px] h-[300px] object-cover object-center bg-gray-400 shadow-lg shadow-black"
          />
          <img
            src="/ui/projects/project3.jpeg"
            alt="Djapoma Stadium Construction"
            className="w-[200px] h-[300px] object-cover object-center bg-gray-400 shadow-lg shadow-black"
          />
        </div>
        <div></div>
      </div>
    </SectionContainer>
  );
};

export default Projects;
