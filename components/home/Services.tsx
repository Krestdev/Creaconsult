"use client";

import React from "react";
import SectionContainer from "../global/SectionContainer";
import Link from "next/link";
import { ArrowRight } from "phosphor-react";
import { Dictionary } from "@/lib/i18n";

interface ServiceType {
  dictionary: Dictionary;
}

const Services = ({ dictionary }: ServiceType) => {
  return (
    <SectionContainer>
      <div className="flex flex-col items-center gap-6">
        {/* web */}
        <div className="w-full">
          <h2 className="font-semibold hidden md:block">
            {dictionary.service.title.main}
          </h2>
          <h5 className="max-w-[600px] hidden md:block">
            {dictionary.service.title.sub}
          </h5>
        </div>
        {/* mobile */}
        <div className="w-full">
          <h4 className="font-semibold md:hidden">
            {dictionary.service.title.main}
          </h4>
          <p className="max-w-[600px] md:hidden">
            {dictionary.service.title.sub}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {dictionary.service.serviceList.map((service, index) => {
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
  sub: string;
  link: string;
  img: string;
}

const SingleServicesItem = ({
  title,
  sub,
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
      <p>{sub}</p>
      <div className="flex items-center gap-2 link_button w-fit">
        <Link href={`/services/#${link}`}>voir plus</Link>
        <ArrowRight size={18} />
      </div>
    </div>
  );
};
