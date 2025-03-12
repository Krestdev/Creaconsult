"use client";

import clsx from "clsx";
import { Square } from "phosphor-react";
import SectionContainer from "../global/SectionContainer";

interface ServicesDetailsT {
  title: string;
  subs: Array<string>;
}

const ServicesDetails = () => {
  const services: ServicesDetailsT[] = [
    {
      title: "Ingénierie et Études Techniques",
      subs: [
        "Nous réalisons des études approfondies pour garantir la viabilitéet l'optimisation de chaque projet.",
        "Nous réalisons des études approfondies pour garantir la viabilitéet l'optimisation de chaque projet.",
        "Nous réalisons des études approfondies pour garantir la viabilitéet l'optimisation de chaque projet.",
        "Nous réalisons des études approfondies pour garantir la viabilitéet l'optimisation de chaque projet.",
      ],
    },
    {
      title: "Ingénierie et Études Techniques",
      subs: [
        "Nous réalisons des études approfondies pour garantir la viabilitéet l'optimisation de chaque projet.",
        "Nous réalisons des études approfondies pour garantir la viabilitéet l'optimisation de chaque projet.",
        "Nous réalisons des études approfondies pour garantir la viabilitéet l'optimisation de chaque projet.",
        "Nous réalisons des études approfondies pour garantir la viabilitéet l'optimisation de chaque projet.",
      ],
    },
    {
      title: "Ingénierie et Études Techniques",
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
                "flex gap-4 justify-between flex-col",
                revert ? " lg:flex-row-reverse" : "lg:flex-row"
              )}
              key={index}
            >
              <div className="grid grid-cols-3 lg:w-1/2 gap-2">
                <img
                  src="/"
                  alt=""
                  className="w-full h-[250px] lg:h-[400px] aspect-square bg-slate-200"
                />
                <img
                  src="/"
                  alt=""
                  className="w-full h-[250px] lg:h-[400px] mt-10 aspect-square bg-slate-200"
                />
                <img
                  src="/"
                  alt=""
                  className="w-full h-[250px] lg:h-[400px] aspect-square bg-slate-200"
                />
              </div>
              <div className="flex flex-col gap-8">
                <h3 className="font-semibold hidden md:block">
                  {service.title}
                </h3>
                <h5 className="font-semibold md:hidden">{service.title}</h5>
                <div className="space-y-4">
                  {service.subs.map((desc, i) => (
                    <div key={i} className="flex gap-2 w-full max-w-[600px]">
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
