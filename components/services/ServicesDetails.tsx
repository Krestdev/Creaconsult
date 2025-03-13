"use client";

import clsx from "clsx";
import { Square } from "phosphor-react";
import SectionContainer from "../global/SectionContainer";

interface ServicesDetailsT {
  title: string;
  description: string;
  imgs: Array<string>;
  subs: Array<string>;
}

const ServicesDetails = () => {
  const services: ServicesDetailsT[] = [
    {
      title: "Ingénierie et Études Techniques",
      description:
        "Nous réalisons des études approfondies pour garantir la viabilitéet l'optimisation de chaque projet.",

      imgs: [
        "/ui/services/TechnicalStudies_pic1.jpg",
        "/ui/services/TechnicalStudies_pic2.jpg",
        "/ui/services/TechnicalStudies_pic3.jpg",
      ],
      subs: [
        "Nous réalisons des études approfondies pour garantir la viabilitéet l'optimisation de chaque projet.",
        "Nous réalisons des études approfondies pour garantir la viabilitéet l'optimisation de chaque projet.",
        "Nous réalisons des études approfondies pour garantir la viabilitéet l'optimisation de chaque projet.",
        "Nous réalisons des études approfondies pour garantir la viabilitéet l'optimisation de chaque projet.",
      ],
    },
    {
      title: "Maîtrise d’Œuvre et Gestion de Projets",
      description:
        "Nous assurons un suivi rigoureux de la conception à la réalisation des projets.",
      imgs: [
        "/ui/services/ProjectManagmant_pic1.jpg",
        "/ui/services/ProjectManagmant_pic2.jpg",
        "/ui/services/ProjectManagmant_pic3.jpg",
      ],
      subs: [
        "Nous réalisons des études approfondies pour garantir la viabilitéet l'optimisation de chaque projet.",
        "Nous réalisons des études approfondies pour garantir la viabilitéet l'optimisation de chaque projet.",
        "Nous réalisons des études approfondies pour garantir la viabilitéet l'optimisation de chaque projet.",
        "Nous réalisons des études approfondies pour garantir la viabilitéet l'optimisation de chaque projet.",
      ],
    },
    {
      title: "Conseil en Conception et Optimisation",
      description:
        "Nous accompagnons nos clients dans la conception et l’amélioration de leurs projets.",
      imgs: [
        "/ui/services/Conception_pic1.jpg",
        "/ui/services/Conception_pic2.jpg",
        "/ui/services/Conception_pic3.jpg",
      ],
      subs: [
        "Nous réalisons des études approfondies pour garantir la viabilitéet l'optimisation de chaque projet.",
        "Nous réalisons des études approfondies pour garantir la viabilitéet l'optimisation de chaque projet.",
        "Nous réalisons des études approfondies pour garantir la viabilitéet l'optimisation de chaque projet.",
        "Nous réalisons des études approfondies pour garantir la viabilitéet l'optimisation de chaque projet.",
      ],
    },
    {
      title: "Développement Durable et Certifications",
      description:
        "Nous intégrons une approche écoresponsable et durable dans nos missions.",
      imgs: [
        "/ui/services/EcoDevelopment_pic1.jpg",
        "/ui/services/EcoDevelopment_pic2.jpg",
        "/ui/services/EcoDevelopment_pic3.jpg",
      ],
      subs: [
        "Nous réalisons des études approfondies pour garantir la viabilitéet l'optimisation de chaque projet.",
        "Nous réalisons des études approfondies pour garantir la viabilitéet l'optimisation de chaque projet.",
        "Nous réalisons des études approfondies pour garantir la viabilitéet l'optimisation de chaque projet.",
        "Nous réalisons des études approfondies pour garantir la viabilitéet l'optimisation de chaque projet.",
      ],
    },
  ];
  return (
    <SectionContainer>
      <div className="flex flex-col gap-[100px] lg:gap-[250px]">
        {services.map((service, index) => {
          const revert = index % 2 == 0;
          return (
            <div
              className={clsx(
                "flex gap-[50px] justify-between flex-col",
                revert ? " lg:flex-row-reverse" : "lg:flex-row"
              )}
              key={index}
            >
              <div className="grid grid-cols-3 lg:w-1/2 gap-2">
                {service.imgs.map((img, index) => {
                  return (
                    <img
                      key={index}
                      src={img}
                      alt=""
                      className={clsx(
                        "w-full h-[250px] lg:h-[400px] aspect-square object-cover bg-slate-200",
                        index == 1 ? "mt-10" : ""
                      )}
                    />
                  );
                })}
              </div>
              <div className="flex flex-col gap-8">
                <h3 className="font-semibold hidden md:block">
                  {service.title}
                </h3>
                <h5 className="font-semibold md:hidden">{service.title}</h5>
                <div className="space-y-4  max-w-[600px]">
                  <h6>{service.description}</h6>
                  {service.subs.map((desc, i) => (
                    <div key={i} className="flex gap-2 w-full">
                      <span className="w-fit">
                        <Square size={24} />
                      </span>{" "}
                      <p>{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default ServicesDetails;
