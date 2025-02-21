import React from "react";

const Structure = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto flex flex-col gap-24 justify-center items-center">
        <div>
          <h2 className="text-center">Structuration de l’entreprise</h2>
          <p>
            Le cabinet CREACONSULT comprend 04 (quatre) départements comme
            renforts à la Direction Générale
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 gap-y-10">
          <div className="space-y-2">
            <div>
              <img
                src="https://placehold.co/400x400"
                className="w-full h-[350px] object-cover"
                alt=""
              />
            </div>
            <h5>Département des Opérations (DOP)</h5>
            <ul>
              <li>
                <p>▪ Voiries, réseaux divers et ouvrage d’art ;</p>
              </li>
              <li>
                <p>▪ Bâtiments et corps d’état secondaires ;</p>
              </li>
              <li>
                <p>▪ Fluides et énergies ;</p>
              </li>
              <li>
                <p>▪ Brigade Topo et géotechnique.</p>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <div>
              <img
                src="https://placehold.co/400x400"
                className="w-full h-[350px] object-cover"
                alt=""
              />
            </div>
            <h5>
              Département Qualité, Développement Durable et Prospective (DQP)
            </h5>
            <ul>
              <li>
                <p>▪ Système de Management de Qualité (SMQ)</p>
              </li>
              <li>
                <p>▪ Environnement et sécurité</p>
              </li>
              <li>
                <p>▪ Responsabilité Sociétales de l’Entreprise (RSE)</p>
              </li>
              <li>
                <p> ▪ Recherche et développement.</p>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <div>
              <img
                src="https://placehold.co/400x400"
                className="w-full h-[350px] object-cover"
                alt=""
              />
            </div>
            <h5>Un Département Administratif et Financier (DAF)</h5>
            <ul>
              <li>
                <p>▪ Voiries, réseaux divers et ouvrage d’art ;</p>
              </li>
              <li>
                <p>▪ Bâtiments et corps d’état secondaires ;</p>
              </li>
              <li>
                <p>▪ Fluides et énergies ;</p>
              </li>
              <li>
                <p>▪ Brigade Topo et géotechnique.</p>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <div>
              <img
                src="https://placehold.co/400x400"
                className="w-full h-[350px] object-cover"
                alt=""
              />
            </div>
            <h5>Un département Juridique et Ressource Humaine (DJRH)</h5>
            <ul>
              <li>
                <p>▪ Voiries, réseaux divers et ouvrage d’art ;</p>
              </li>
              <li>
                <p>▪ Bâtiments et corps d’état secondaires ;</p>
              </li>
              <li>
                <p>▪ Fluides et énergies ;</p>
              </li>
              <li>
                <p>▪ Brigade Topo et géotechnique.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Structure;
