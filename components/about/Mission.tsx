import { PushpinOutlined } from "@ant-design/icons";
import React from "react";
import ListItem from "./ListItem";
import BorderDecoration from "../BorderDecoration";
import BorderDecorationImage from "./BorderDecorationImage";

const Mission = () => {
  return (
    <section className="h-fit">
      <div className="max-w-7xl w-full h-[700px] mx-auto flex justify-center items-center">
        <div className="w-full grid grid-cols-2 gap-2">
          <div className="col-span-1">
            <div className="mr-auto w-fit">
              <BorderDecorationImage>
                <img
                  src="https://placehold.co/500x500"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </BorderDecorationImage>
            </div>
          </div>
          <div className="col-span-1 space-y-6">
            <div>
              <h2>Nos Missions</h2>
              <p className="font-medium">
                Nos visions se présentent de la manière suivante
              </p>
            </div>
            <ul className="space-y-2">
              {[
                "Transformer l’idée en ouvrage",
                "Amener le maitre d’ouvrage en phase conceptuelle à atteindre au mieux ses objectifs",
                "Construire des ouvrages dans le respect des normes",
                "Fournir un cadre de vie agréable, fonctionnel et convenable",
                "Réaliser le meilleur rapport qualité-prix",
                "Gagner le pari de la conformité",
                "Respecter les calendriers",
                "Conseiller le Maitre d’ouvrage de manière générale",
                "Toujours atteindre nos objectifs généraux et spécifiques",
                "S’insérer dans les activités dans tous les cadres possibles.",
              ].map((mission, index) => {
                return <ListItem key={index} text={mission}></ListItem>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
