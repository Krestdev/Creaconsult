import React from "react";
import SectionContainer from "./SectionContainer";

const WhyChooseUs = () => {
  return (
    <SectionContainer
      color="white"
      img="/ui/global/bglinesDeco.png"
      className=""
    >
      <div className="flex flex-col justify-between gap-4 xl:flex-row">
        <div className="space-y-4 p-2 md:w-1/2 max-w-[600px]">
          <h2 className=" font-semibold hidden md:block">
            Pourquoi choisir Creaconsult ?
          </h2>
          <h5 className=" font-bold md:hidden">
            Pourquoi choisir Creaconsult ?
          </h5>
          {/* <p>
            Des solutions innovantes en ingénierie et maîtrise d’œuvre pour des
            projets d’exception.
          </p> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full xl:w-1/2 gap-6">
          {[
            {
              title: "Une Expertise Reconnue",
              description:
                "Avec plus de 15 ans d'expérience sur le terrain, notamment en Afrique subsaharienne et au Cameroun, Crea Consult ne se contente pas de participer aux projets – elle les fait réussir. Nos experts interviennent uniquement dans les domaines que nous maîtrisons à 100 %. Objectifs clairs, résultats concrets. Zéro improvisation.",
            },
            {
              title: "Certifications et Engagement Qualité",
              description:
                "Certifiée ISO 9001 et 14001 (référentiel 2015), Crea Consult s’impose par une rigueur de gestion et un engagement environnemental exemplaire. Notre système d’amélioration continue garantit des livrables impeccables, dans les délais, avec des standards élevés. Ici, la qualité n’est pas un mot, c’est une méthode.",
            },
            {
              title: "Références et Projets Réussis",
              description:
                "Nous avons gagné la confiance d’institutions, d’entreprises commerciales, industrielles et académiques à travers des projets d’envergure. Au-delà du conseil, nous sommes un partenaire stratégique : réactif, engagé, et toujours orienté solution. Nous accompagnons aussi la formation et l’insertion des jeunes, parce que l’avenir se construit aujourd’hui.",
            },
            {
              title: "Études de Cas et Réalisations",
              description:
                "Nos études de cas sont notre meilleure preuve : avant/après, résultats chiffrés, transformation réelle. Crea Consult, c’est du concret, pas du théorique. Chaque projet est une réussite visible, documentée et reproductible.",
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
