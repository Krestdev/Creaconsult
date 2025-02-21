import { PushpinOutlined } from "@ant-design/icons";
import React from "react";
import BorderDecorationImage from "./BorderDecorationImage";

const Vission = () => {
  return (
    <section className="h-fit">
      <div className="max-w-7xl w-full h-[700px] mx-auto flex justify-center items-center">
        <div className="w-full grid grid-cols-2 gap-2">
          <div className="col-span-1">
            <h2>Nos visions</h2>
            <p>Nos visions se présentent de la manière suivante</p>
            <ul>
              <li className="flex gap-4">
                <PushpinOutlined className="text-[24px]" />{" "}
                <p>Réponse en temps réel du client </p>
              </li>
              <li>
                <p>Clé du succès par la maturation des projets </p>
              </li>
              <li>
                <p>
                  Intégration des matériaux locaux et ressources locales pour
                  baisser les coûts et acceptabilité des projets par les
                  bénéficiaires ;
                </p>
              </li>
              <li>
                <p>Réalisation des projets soutenables ;</p>
              </li>
              <li>
                <p>
                  Compagnonnage en interne comme clé de voute de la formation
                  continue et du transfert du savoir-faire ;
                </p>
              </li>
              <li>
                <p>
                  Promotion de la pluridisciplinarité à travers la couverture
                  d’une bonne palette de métiers.
                </p>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <div className="ml-auto w-fit">
              <BorderDecorationImage>
                <img
                  src="https://placehold.co/400x400"
                  className="w-full h-full object-cover"
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
