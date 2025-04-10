import SectionContainer from "../global/SectionContainer";

const Achievements = () => {
  return (
    <SectionContainer className="py-[24px] md:py-20">
      <div className="pb-4">
        <h2 className="font-semibold hidden md:block">Certifications</h2>
        <h4 className="font-bold md:hidden">Certifications</h4>
      </div>
      <div className="flex gap-[100px] flex-col lg:flex-row">
        <div className="md:w-1/2 space-y-4">
          {/* <h2 className="font-semibold hidden md:block">
            Creation of the company
          </h2> */}
          <h5 className="font-semibold md:hidden">Creation of the company</h5>
          <h6 className="font-semibold">Une Expertise Reconnue</h6>
          <p className="text-justify">
            {"Certifiée"} <strong>ISO 9001 et ISO 14001,</strong>{" "}
            {"et détentrice de"}{" "}
            <strong>l’Agrément pour les études d’impact environnemental</strong>{" "}
            {
              ", CREACONSULT affirme son engagement pour la qualité, la performance durable et la responsabilité environnementale. Ces reconnaissances consolident la rigueur de ses processus internes, valorisent son image auprès des partenaires, facilitent l’accès aux marchés et assurent une meilleure gestion des risques dans un environnement économique de plus en plus exigeant."
            }
          </p>
        </div>
        <div className="md:w-[524px] h-[300px] flex gap-[24px]">
          <div className="flex flex-col h-full w-full gap-2">
            <img
              src="/ui/certificates/isoveritas.png"
              className="object-cover md:w-full h-full"
            />
            <img
              src="/ui/certificates/isoveritas2.png"
              className="object-cover md:w-full h-full"
            />
          </div>
          <img
            src="/ui/certificates/ukasMs.png"
            className="md:w-[200px] object-cover "
          />
        </div>
      </div>
      {/* <div className="flex gap-4 h-fit p-4 justify-center items-center mt-10">
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
      </div> */}
    </SectionContainer>
  );
};

export default Achievements;
