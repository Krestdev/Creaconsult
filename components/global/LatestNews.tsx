"use client";

import { ArrowRight } from "phosphor-react";
import SectionContainer from "./SectionContainer";

const LatestNews = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-12">
        <h2 className="font-semibold hidden md:block">Our Latest News</h2>
        <h4 className="font-bold md:hidden">Our Latest News</h4>
        <div className="flex gap-8 flex-col xl:flex-row">
          <div className="xl:w-1/2">
            <div className="w-full flex flex-col gap-4 mb-4">
              <img
                src="/ui/news/main1.jpeg"
                alt="articel"
                className="w-full h-[350px] object-cover bg-slate-300  shadow-md shadow-black"
              />
              <div className="flex flex-col md:flex-row gap-4">
                <img
                  src="/ui/news/main2.jpeg"
                  alt="articel"
                  className="w-full md:max-w-[300px] h-[150px] object-cover bg-slate-300  shadow-md shadow-black"
                />
                <img
                  src="/ui/news/main3.jpeg"
                  alt="articel"
                  className="w-full md:max-w-[300px] h-[150px] object-cover bg-slate-300  shadow-md shadow-black"
                />
                <img
                  src="/ui/news/main4.jpeg"
                  alt="articel"
                  className="w-full md:max-w-[300px] h-[150px] object-cover bg-slate-300  shadow-md shadow-black"
                />
              </div>
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
                savoir-faire à travers des études de cas détaillées, avec images
                avant/après et résultats obtenus.
              </p>
              <div className="flex gap-2 items-center text-[var(--primary)] font-semibold">
                <p>Read More</p> <ArrowRight size={24} />
              </div>
            </div>
          </div>

          <div className="xl:w-1/2 space-y-4">
            <div className="flex gap-4 flex-col md:flex-row">
              <img
                className="md:w-[300px] h-[250px] object-cover bg-slate-300 shadow-md shadow-black"
                src="/ui/news/side1.jpeg"
                alt="img"
              />
              <div className="flex-1 flex flex-col">
                <h4 className="hidden md:block">Une Expertise Reconnue</h4>
                <h6 className="md:hidden">Une Expertise Reconnue</h6>
                <p>
                  {
                    "Avec plus de 15 ans d'expérience , nous avons accompagné de nombreux projets à travers l'Afrique subsaharienne, en particulier au Cameroun."
                  }
                </p>
                <div className="flex gap-2 items-center text-[var(--primary)] font-semibold mt-auto">
                  <p>Read More</p> <ArrowRight size={24} />
                </div>
              </div>
            </div>
            <div className="flex gap-4 flex-col md:flex-row">
              <img
                className="md:w-[300px] h-[250px] object-cover bg-slate-300  shadow-md shadow-black"
                src="/ui/news/side2.jpeg"
                alt="img"
              />
              <div className="flex-1 flex flex-col">
                <h4 className="hidden md:block">
                  Certifications et Engagement Qualité
                </h4>
                <h6 className="md:hidden">
                  Certifications et Engagement Qualité
                </h6>
                <p>
                  {
                    "Nous sommes certifiés ISO 9001 et 14001 (référentiel 2015), garantissant une gestion rigoureuse de la qualité et une approche respectueuse de l'environnement."
                  }
                </p>
                <div className="flex gap-2 items-center text-[var(--primary)] font-semibold mt-auto">
                  <p>Read More</p> <ArrowRight size={24} />
                </div>
              </div>
            </div>
            <div className="flex gap-4 flex-col md:flex-row">
              <img
                className="md:w-[300px] h-[250px] object-cover bg-slate-300  shadow-md shadow-black"
                src="/ui/news/side3.jpeg"
                alt="img"
              />
              <div className="flex-1 flex flex-col">
                <h4 className="hidden md:block">
                  Références et Projets Réussis
                </h4>
                <h6 className="md:hidden">Références et Projets Réussis</h6>
                <p>
                  Nos collaborations avec des institutions, des entreprises
                  commerciales et industrielles ont permis la réalisation de
                  projets d’envergure.
                </p>
                <div className="flex gap-2 items-center text-[var(--primary)] font-semibold mt-auto">
                  <p>Read More</p> <ArrowRight size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default LatestNews;
