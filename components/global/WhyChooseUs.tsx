import React from "react";
import SectionContainer from "./SectionContainer";
import { Dictionary } from "@/lib/i18n";

interface ServiceType {
  dictionary: Dictionary;
}

const WhyChooseUs = ({ dictionary }: ServiceType) => {
  return (
    <SectionContainer
      color="white"
      img="/ui/global/bglinesDeco.png"
      className=""
    >
      <div className="flex flex-col justify-between gap-5 xl:flex-row">
        <div className="space-y-4 p-2 md:w-1/2 max-w-[600px]">
          <h2 className=" font-semibold hidden md:block w-screen lg:w-[500px] md:text-[2.5rem] lg:text-[3.063rem] text-nowrap md:text-wrap">
            {dictionary.why.title.main}
          </h2>
          <h5 className=" font-bold md:hidden text-nowrap w-full">{dictionary.why.title.main}</h5>
          {/* <p>
            Des solutions innovantes en ingénierie et maîtrise d’œuvre pour des
            projets d’exception.
          </p> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full xl:w-1/2 gap-6">
          {dictionary.why.reasons.map((item, index) => (
            <div
              key={index}
              className="space-y-2 p-2 bg-[#700032]/10 min-h-[250px] hover:scale-105 transition-all duration-500 ease-in-out"
            >
              <h4 className="hidden md:block">{item.title}</h4>
              <h5 className=" md:hidden">{item.title}</h5>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default WhyChooseUs;
