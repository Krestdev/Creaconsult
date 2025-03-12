"use client";

import React from "react";
import SectionContainer from "../global/SectionContainer";
import Link from "next/link";
import { ArrowRight } from "phosphor-react";

const Services = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col items-center gap-6">
        {/* web */}
        <div className="w-full">
          <h2 className="font-semibold hidden md:block">Nos Service</h2>
          <h5 className="max-w-[600px] hidden md:block">
            {
              "Des solutions innovantes en ingénierie et maîtrise d'œuvre pour des projets d'exception."
            }
          </h5>
        </div>
        {/* mobile */}
        <div className="w-full">
          <h4 className="font-semibold md:hidden">Nos Service</h4>
          <p className="max-w-[600px] md:hidden">
            {
              "Des solutions innovantes en ingénierie et maîtrise d'œuvre pour des projets d'exception."
            }
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            {
              title: "Ingénierie et Études Techniques",
              description:
                "Nous réalisons des études approfondies pour garantir la viabilitéet l'optimisation de chaque projet.",
              link: "ingenierie-et-etudes-techniques",
              img: "/ui/home/service1.jpg",
            },
            {
              title: "Maîtrise d’Œuvre et Gestion de Projets",
              description:
                "Nous assurons un suivi rigoureux de la conception à la réalisation des projets.",
              link: "maitrise-d-oeuvre",
              img: "/ui/home/service2.jpg",
            },
            {
              title: "Conseil en Conception et Optimisation",
              description:
                "Nous accompagnons nos clients dans la conception et l’amélioration de leurs projets.",
              link: "controle-technique",
              img: "/ui/home/service3.jpg",
            },
            {
              title: "Développement Durable et Certifications",
              description:
                "Nous intégrons une approche écoresponsable et durable dans nos missions.",
              link: "controle-technique",
              img: "/ui/home/service4.jpg",
            },
          ].map((service, index) => {
            return <SingleServicesItem {...service} key={index} />;
          })}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Services;

// Single Services display

interface SingleServicesItemProps {
  title: string;
  description: string;
  link: string;
  img: string;
}

const SingleServicesItem = ({
  title,
  description,
  link,
  img,
}: SingleServicesItemProps) => {
  return (
    <div
      className="md h-[400px] md:h-[500px] w-full flex flex-col justify-end gap-2 bg-cover bg-center p-4 text-white shadow-black shadow-lg"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,1)), url('${img}')`,
      }}
    >
      <h4 className="text-white">{title}</h4>
      <p>{description}</p>
      <div className="flex items-center gap-2 link_button w-fit">
        <Link href={`/services/#${link}`}>voir plus</Link>
        <ArrowRight size={18} />
      </div>
    </div>
  );
};
