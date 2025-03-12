import React from "react";
import SectionContainer from "./SectionContainer";

const WhyChooseUs = () => {
  return (
    <SectionContainer
      color="white"
      img="/ui/global/bglinesDeco.png"
      className="min-h-[800px]"
    >
      <div className="flex flex-col justify-between gap-4 xl:flex-row">
        <div className="space-y-4 p-2 md:w-1/2 max-w-[600px]">
          <h2 className=" font-semibold hidden md:block">
            Pourquoi Choisir Creaconsult ?
          </h2>
          <h5 className=" font-bold md:hidden">
            Pourquoi Choisir Creaconsult ?
          </h5>
          <p>
            Des solutions innovantes en ingénierie et maîtrise d’œuvre pour des
            projets d’exception.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full xl:w-1/2 gap-6">
          {[
            {
              title: "Une Expertise Reconnue",
              description:
                "Avec plus de 15 ans d’expérience , nous avons accompagné de nombreux projets à travers l’Afrique subsaharienne, en particulier au Cameroun.",
            },
            {
              title: "Certifications et Engagement Qualité",
              description:
                "Nous sommes certifiés ISO 9001 et 14001 (référentiel 2015), garantissant une gestion rigoureuse de la qualité et une approche respectueuse de l’environnement.",
            },
            {
              title: "Références et Projets Réussis",
              description:
                "Nos collaborations avec des institutions, des entreprises commerciales et industrielles ont permis la réalisation de projets d’envergure.",
            },
            {
              title: "Études de Cas et Réalisations",
              description:
                "Nous mettons en avant des projets concrets, illustrant notre savoir-faire à travers des études de cas détaillées, avec images avant/après et résultats obtenus.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="space-y-2 p-2 bg-[#700032]/10 min-h-[250px]"
            >
              <h4 className="hidden md:block">{item.title}</h4>
              <h5 className=" md:hidden">{item.title}</h5>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default WhyChooseUs;
