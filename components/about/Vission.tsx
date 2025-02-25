import React from "react";
import BorderDecorationImage from "../utils/BorderDecorationImage";
import ListItem from "./ListItem";

const Vission = () => {
  return (
    <section className="h-fit relative">
      <div className="vission absolute right-0 bottom-0 max-w-[800px] max-h-[800px] w-full h-full" />
      <div className="max-w-7xl w-full h-fit py-[150px] mx-auto flex justify-center items-center">
        <div className="w-full grid grid-cols-2 gap-2">
          <div className="col-span-1 space-y-6">
            <div>
              <h2>Nos visions</h2>
              <h6 className="small opacity-70">
                Nos visions se présentent de la manière suivante
              </h6>
            </div>
            <ul className="space-y-2">
              {[
                "Réponse en temps réel du client ",
                "Clé du succès par la maturation des projets ",
                " Intégration des matériaux locaux et ressources locales pour baisser les coûts et acceptabilité des projets par les bénéficiaires ; ",
                "Réalisation des projets soutenables ;",
                " Compagnonnage en interne comme clé de voute de la formation continue et du transfert du savoir-faire ; ",
                " Promotion de la pluridisciplinarité à travers la couverture d’une bonne palette de métiers.",
              ].map((vission, index) => {
                return (
                  <ListItem icon="circle" key={index} text={vission}></ListItem>
                );
              })}
            </ul>
          </div>
          <div className="col-span-1">
            <div className="ml-auto w-fit">
              <BorderDecorationImage>
                <img
                  src="/ui/services/vission.jpeg"
                  className="w-full h-full object-cover aspect-video"
                  alt=""
                />
              </BorderDecorationImage>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vission;
