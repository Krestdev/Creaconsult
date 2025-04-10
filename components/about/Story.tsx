"use client";

import SectionContainer from "../global/SectionContainer";

const Story = () => {
  return (
    <SectionContainer color="white" img="/ui/global/bglinesDeco.png">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full space-y-4">
          <h2 className="font-semibold hidden md:block">Our Story</h2>
          <h4 className="font-bold md:hidden">Our Story</h4>
          <p>
            {`CREACONSULT, cabinet d’ingénierie et de maîtrise d’œuvre fondé en 2006, façonne durablement le cadre de vie grâce à une expertise éprouvée. Résolument tournés vers l’amélioration continue, nous simplifions chaque étape pour les porteurs et investisseurs de projets.`}
            <p />

            <p>
              {`
              Certifié ISO 9001 et 14001 (référentiel 2015), notre management allie rigueur, qualité et engagement environnemental. Spécialistes des projets institutionnels, commerciaux et industriels, nous mettons notre savoir-faire technique pointu au service de réalisations ambitieuses.`}{" "}
            </p>

            <p>{`
              Chez CREACONSULT, l’excellence repose sur des valeurs professionnelles et éthiques fortes, garantissant à nos clients et partenaires une collaboration privilégiée et efficace.`}</p>
          </p>
          <p>
            {
              "Des solutions innovantes en ingénierie et maîtrise d'œuvre pour des projets d'exception. Des solutions innovantes en ingénierie et maîtrise d'œuvre pour des projets d'exception."
            }
          </p>
        </div>
        <div className="grid grid-cols-2 w-full gap-4">
          <div className="min-h-[200px] flex flex-col justify-end bg-slate-300 p-4">
            <h6>Ingénierie et Études Techniques</h6>
            {/* <div className="flex gap-2 items-center text-[var(--primary)] font-semibold">
              <p>Read More</p> <ArrowRight size={24} />
            </div> */}
          </div>
          <div className="min-h-[200px] flex flex-col justify-end bg-slate-300 p-4">
            <h6>Ingénierie et Études Techniques</h6>
            {/* <div className="flex gap-2 items-center text-[var(--primary)] font-semibold">
              <p>Read More</p> <ArrowRight size={24} />
            </div> */}
          </div>
          <div className="min-h-[200px] flex flex-col justify-end bg-slate-300 p-4">
            <h6>Ingénierie et Études Techniques</h6>
            {/* <div className="flex gap-2 items-center text-[var(--primary)] font-semibold">
              <p>Read More</p> <ArrowRight size={24} />
            </div> */}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Story;
