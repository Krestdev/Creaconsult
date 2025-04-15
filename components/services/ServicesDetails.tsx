"use client";

import clsx from "clsx";
import { Barricade } from "phosphor-react";
import SectionContainer from "../global/SectionContainer";
import { Dictionary } from "@/lib/i18n";

interface ServiceType {
  dictionary: Dictionary;
}

interface ServicesDetailsT {
  title: string;
  sub: string;
  imgList: string[];
  link: string;
  img: string;
  sublist: string[];
}

const ServicesDetails = ({ dictionary }: ServiceType) => {
  const services: ServicesDetailsT[] = dictionary.service.serviceList;

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
                {service.imgList.map((img, index) => {
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
                  <h6>{service.sub}</h6>
                  {service.sublist.map((desc, i) => (
                    <div key={i} className="flex gap-2 w-full">
                      <span className="w-fit">
                        <Barricade size={24} />
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
