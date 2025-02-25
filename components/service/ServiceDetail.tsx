import BorderDecorationImage from "../utils/BorderDecorationImage";

const ServiceDetail = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto w-full space-y-[180px] py-[100px]">
        <div className="flex gap-10 justify-between">
          <BorderDecorationImage>
            <img
              src="/ui/servicesDetails/tellordHomes.jpeg"
              className="max-w-[500px] w-full h-full"
              alt=""
            />
          </BorderDecorationImage>
          {/* main service description */}
          <div className="space-y-10">
            <ServiceDetailTitle
              title="Ingénierie et Études Techniques"
              desc="Nous réalisons des études approfondies pour garantir la viabilité
              et l’optimisation de chaque projet."
            />
            {/* service details/specs */}
            <ul className="w-full space-y-8">
              {[
                {
                  img: "/ui/img/img500x300.webp",
                  title: "Études de faisabilité technique et économique",
                  desc: "desc",
                },
                {
                  img: "/ui/img/img500x300.webp",
                  title: "Calculs et dimensionnement des structures",
                  desc: "desc",
                },
                {
                  img: "/ui/img/img500x300.webp",
                  title: "Études d’impact environnemental",
                  desc: "desc",
                },
                {
                  img: "/ui/img/img500x300.webp",
                  title: "Modélisation et simulation numérique",
                  desc: "desc",
                },
              ].map((serviceItem, index) => {
                return <ServiceDetailItem key={index} {...serviceItem} />;
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-row-reverse gap-10 justify-center">
          <BorderDecorationImage>
            <img
              src="/ui/servicesDetails/civilConstruction.jpeg"
              className="max-w-[500px] w-full h-full"
              alt=""
            />
          </BorderDecorationImage>
          {/* main service description 2 */}
          <div className="space-y-10">
            <ServiceDetailTitle
              title="Maîtrise d’Œuvre et Gestion de Projets"
              desc="Nous assurons un suivi rigoureux de la conception à la réalisation
              des projets."
            />
            {/* service details/specs */}
            <ul className="w-full space-y-8">
              {[
                {
                  title: "Coordination et pilotage des travaux",
                  desc: "desc",
                  img: "/ui/img/img500x300.webp",
                },
                {
                  title: "Contrôle qualité et respect des normes",
                  desc: "desc",
                  img: "/ui/img/img500x300.webp",
                },
                {
                  title: "Planification et suivi budgétaire",
                  desc: "desc",
                  img: "/ui/img/img500x300.webp",
                },
                {
                  title: "Assistance à la réception des ouvrages",
                  desc: "desc",
                  img: "/ui/img/img500x300.webp",
                },
              ].map((serviceItem, index) => {
                return <ServiceDetailItem key={index} {...serviceItem} />;
              })}
            </ul>
          </div>
        </div>
        <div className="flex gap-10 justify-center">
          <BorderDecorationImage>
            <img
              src="/ui/servicesDetails/conception.jpeg"
              className="max-w-[500px] w-full h-full"
              alt=""
            />
          </BorderDecorationImage>
          {/* main service description 3 */}
          <div className="space-y-10">
            <ServiceDetailTitle
              title="Conseil en Conception et Optimisation"
              desc="Nous accompagnons nos clients dans la conception et l’amélioration
              de leurs projets."
            />
            {/* service details/specs */}
            <ul className="w-full space-y-8">
              {[
                {
                  title: "Accompagnement dans la définition du projet",
                  desc: "desc",
                  img: "/ui/img/img500x300.webp",
                },
                {
                  title: "Conception optimisée pour maximiser la performance",
                  desc: "desc",
                  img: "/ui/img/img500x300.webp",
                },
                {
                  title: "Veille technologique et innovation",
                  desc: "desc",
                  img: "/ui/img/img500x300.webp",
                },
              ].map((serviceItem, index) => {
                return <ServiceDetailItem key={index} {...serviceItem} />;
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-row-reverse gap-10 justify-center">
          <BorderDecorationImage>
            <img
              src="/ui/servicesDetails/ecology.jpeg"
              className="max-w-[500px] w-full h-full object-cover object-left"
              alt=""
            />
          </BorderDecorationImage>
          {/* main service description 3 */}

          <div className="space-y-10">
            <ServiceDetailTitle
              title="Développement Durable et Certifications"
              desc="Nous intégrons une approche écoresponsable et durable dans nos
              missions."
            />
            {/* service details/specs */}
            <ul className="w-full space-y-8">
              {[
                {
                  title: "Certification ISO 9001 & 14001",
                  desc: "desc",
                  img: "/ui/img/img500x300.webp",
                },
                {
                  title: "Conception bioclimatique et énergies renouvelables",
                  desc: "desc",
                  img: "/ui/img/img500x300.webp",
                },
                {
                  title: "Optimisation des performances énergétiques",
                  desc: "desc",
                  img: "/ui/img/img500x300.webp",
                },
                {
                  title: "Intégration des normes environnementales",
                  desc: "desc",
                  img: "/ui/img/img500x300.webp",
                },
              ].map((serviceItem, index) => {
                return <ServiceDetailItem key={index} {...serviceItem} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ServiceDetailTitle {
  title: string;
  desc: string;
}

const ServiceDetailTitle = ({ title, desc }: ServiceDetailTitle) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{desc}</p>
      {/* icons */}
    </div>
  );
};

interface ServiceDetailItem {
  title: string;
  desc: string;
  img: string;
}

const ServiceDetailItem = ({ title, desc, img }: ServiceDetailItem) => {
  return (
    <li className="flex gap-4">
      <img
        src={img}
        alt=""
        className="col-span-1 w-[100px] h-[100px] object-cover"
      />
      <div>
        <h6>{title}</h6>
        <p>{desc}</p>
      </div>
    </li>
  );
};
// const ServiceDetailItemReverse = ({ title, desc, img }: ServiceDetailItem) => {
//   return (
//     <li className="grid grid-cols-3 gap-4">
//       <div className="col-span-2">
//         <h5>{title}</h5>
//         <p>{desc}</p>
//       </div>
//       <img
//         src={img}
//         alt=""
//         className="col-span-1 w-full h-[200px] object-cover"
//       />
//     </li>
//   );
// };

export default ServiceDetail;
