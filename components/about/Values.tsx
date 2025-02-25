import React from "react";
import ListItem from "./ListItem";

const Values = () => {
  return (
    <section className="h-screen">
      <div className="max-w-7xl w-full min-h-screen mx-auto flex flex-col items-center justify-center">
        <h2 className="text-center">Nos valeurs</h2>
        <div className="grid grid-cols-2 py-[100px] gap-8">
          <div className="col-span-1 space-y-4 bg-slate-300 bg-opacity-20 p-4">
            <img
              src="/ui/img/img500X300.webp"
              alt=""
              className="w-full h-[300px] object-cover"
            />
            <h4>Valeurs techniques</h4>
            <ul className="space-y-2">
              {[
                "Satisfaction du client dans diverses phases : collecte des informations, étude du projet, maturation du projet, réalisation du projet",
                "Respect strict des normes nationales et internationales",
                "Protection de l’environnement et durabilité des ouvrages réalisés ou suivis",
                "Amélioration continue et recherche perpétuelle de la perfection.",
              ].map((value, index) => {
                return (
                  <ListItem icon="circle" key={index} text={value}></ListItem>
                );
              })}
            </ul>
          </div>
          <div className="col-span-1 space-y-4 bg-slate-300 bg-opacity-20 p-4">
            <img
              src="/ui/img/img500X300.webp"
              alt=""
              className="w-full h-[300px] object-cover"
            />
            <h4>Valeurs sociales</h4>
            <ul className="space-y-2">
              {[
                "Satisfaction, fidélité, implication et valorisation des employés",
                "Esprit d’équipe et prise de décision",
                "Promotion du multiculturalisme et du multiracialisme",
                "Équité, égalité et respect du genre",
                "Respect de la diversité et de la différence",
                "Responsabilité Sociétale de l’Entreprise (RSE).",
              ].map((value, index) => {
                return (
                  <ListItem icon="circle" key={index} text={value}></ListItem>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
