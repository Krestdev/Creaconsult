import ListItem from "./ListItem";

const Structure = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto flex flex-col py-[180px] gap-24 justify-center items-center">
        <div>
          <h2 className="text-center">Structuration de l’entreprise</h2>
          <p>
            Le cabinet CREACONSULT comprend 04 (quatre) départements comme
            renforts à la Direction Générale
          </p>
        </div>
        <div className="grid grid-cols-2 gap-[100px]">
          <div className="space-y-2">
            <div>
              <img
                src="/ui/services/operations.jpeg"
                className="w-full h-[350px] object-cover"
                alt=""
              />
            </div>
            <h6>Département des Opérations (DOP)</h6>
            <ul>
              {[
                "Voiries, réseaux divers et ouvrage d’art",
                "Bâtiments et corps d’état secondaires",
                "Fluides et énergies",
                "Brigade Topo et géotechnique.",
              ].map((structureitem, index) => {
                return (
                  <ListItem
                    icon="caret"
                    key={index}
                    text={structureitem}
                  ></ListItem>
                );
              })}
            </ul>
          </div>
          <div className="space-y-2">
            <div>
              <img
                src="/ui/services/inspection.jpeg"
                className="w-full h-[350px] object-cover"
                alt=""
              />
            </div>
            <h6>
              Département Qualité, Développement Durable et Prospective (DQP)
            </h6>
            <ul>
              {[
                "Système de Management de Qualité (SMQ)",
                "Environnement et sécurité",
                "Recherche et développement",
                "Responsabilité Sociétales de l’Entreprise (RSE)",
              ].map((structureitem, index) => {
                return (
                  <ListItem
                    icon="caret"
                    key={index}
                    text={structureitem}
                  ></ListItem>
                );
              })}
            </ul>
          </div>
          <div className="space-y-2">
            <div>
              <img
                src="/ui/services/officework.jpeg"
                className="w-full h-[350px] object-cover"
                alt=""
              />
            </div>
            <h6>Un Département Administratif et Financier (DAF)</h6>
            <ul>
              {[
                "Voiries, réseaux divers et ouvrage d’art ",
                "Bâtiments et corps d’état secondaires ",
                "Fluides et énergies ",
                "Brigade Topo et géotechnique.",
              ].map((structureitem, index) => {
                return (
                  <ListItem
                    icon="caret"
                    key={index}
                    text={structureitem}
                  ></ListItem>
                );
              })}
            </ul>
          </div>
          <div className="space-y-2">
            <div>
              <img
                src="/ui/services/humanResource.jpeg"
                className="w-full h-[350px] object-cover"
                alt=""
              />
            </div>
            <h6>Un département Juridique et Ressource Humaine (DJRH)</h6>
            <ul>
              {[
                "Voiries, réseaux divers et ouvrage d’art ",
                "Bâtiments et corps d’état secondaires",
                "Fluides et énergies",
                "Brigade Topo et géotechnique.",
              ].map((structureitem, index) => {
                return (
                  <ListItem
                    icon="caret"
                    key={index}
                    text={structureitem}
                  ></ListItem>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Structure;
