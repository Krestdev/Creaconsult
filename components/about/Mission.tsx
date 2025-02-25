import BorderDecorationImage from "../utils/BorderDecorationImage";
import ListItem from "./ListItem";

const Mission = () => {
  return (
    <section className="h-fit relative overflow-hidden">
      <div className="mission absolute bottom-0 max-w-[800px] max-h-[800px] w-full h-full" />
      <div className="max-w-7xl w-full h-fit py-[150px] mx-auto flex justify-center items-center">
        <div className="w-full grid grid-cols-2 gap-12">
          <div className="col-span-1">
            <div className="mr-auto w-fit h-full flex flex-col items-center justify-center">
              <BorderDecorationImage>
                <img
                  src="/ui/services/mission.jpeg"
                  className="w-full h-full object-cover aspect-video"
                  alt=""
                />
              </BorderDecorationImage>
            </div>
          </div>
          <div className="col-span-1 space-y-6 py-[20px]">
            <div>
              <h2>Nos Missions</h2>
              <h6 className="opacity-70">
                Nos visions se présentent de la manière suivante
              </h6>
            </div>
            <ul className="space-y-2">
              {[
                "Transformer l’idée en ouvrage",
                "Amener le maitre d’ouvrage en phase conceptuelle à atteindre au mieux ses objectifs",
                "Construire des ouvrages dans le respect des normes et Gagner le pari de la conformité",
                "Fournir un cadre de vie agréable, fonctionnel et convenable",
                "Réaliser le meilleur rapport qualité-prix",
                "Respecter les calendriers",
                "Toujours atteindre nos objectifs généraux et spécifiques",
                "S’insérer dans les activités dans tous les cadres possibles.",
              ].map((mission, index) => {
                return (
                  <ListItem icon="circle" key={index} text={mission}></ListItem>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
