import Link from "next/link";
import { describe } from "node:test";
import React from "react";
import BorderDecorationImage from "../utils/BorderDecorationImage";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <section className="line_decoration">
      <div className="max-w-7xl min-h-screen h-full gap-8 mx-auto space-y-24 py-[160px]">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <div className="w-full flex flex-col text-left p-[24px]">
              <h2>Nos Service</h2>
              <p>
                Des solutions innovantes en ingénierie et maîtrise d’œuvre pour
                des projets d’exception.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-16 p-[80px]">
              {[
                {
                  img: "/ui/img/img500x300.webp",
                  text: "Ingénierie et Études Techniques",
                  desc: "Nous réalisons des études approfondies pour garantir la viabilitéet l’optimisation de chaque projet.",
                },
                {
                  img: "/ui/img/img500x300.webp",
                  text: "Maîtrise d’Œuvre et Gestion de Projets",
                  desc: "Nous assurons un suivi rigoureux de la conception à la réalisation des projets.",
                },
                {
                  img: "/ui/img/img500x300.webp",
                  text: "Conseil en Conception et Optimisation",
                  desc: "Nous accompagnons nos clients dans la conception et l’amélioration de leurs projets.",
                },
                {
                  img: "/ui/img/img500x300.webp",
                  text: "Développement Durable et Certifications",
                  desc: "Nous intégrons une approche écoresponsable et durable dans nos missions.",
                },
              ].map((service, index) => {
                return <ServiceSummary {...service} key={index} />;
              })}
            </div>
          </div>

          <img
            src="/ui/services/servicebg.jpeg"
            className="col-span-1 w-full h-full flex flex-col text-left p-[24px]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

interface ServiceSummaryT {
  img: string;
  text: string;
  desc: string;
}

const ServiceSummary = ({ img, text, desc }: ServiceSummaryT) => {
  return (
    <BorderDecorationImage>
      <div className="relative h-full p-[12px] flex flex-col justify-between duration-300">
        <img
          className="absolute -z-[1] -top-10 -left-14 w-[160px] h-[160px] opacity-40"
          src={img}
          alt=""
        />
        <div>
          {" "}
          <h5>{text}</h5>
          <p>{desc}</p>
        </div>
        <Link
          href={"/"}
          className="small text-[--primary] flex justify-start items-center gap-4"
        >
          read more <ArrowRight strokeWidth={0.8} />
        </Link>
      </div>
    </BorderDecorationImage>
  );
};

export default Services;
