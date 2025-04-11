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
      <div className="flex flex-col justify-between gap-4 xl:flex-row">
        <div className="space-y-4 p-2 md:w-1/2 max-w-[600px]">
          <h2 className=" font-semibold hidden md:block">
            {dictionary.why.title.main}
          </h2>
          <h5 className=" font-bold md:hidden">{dictionary.why.title.main}</h5>
          {/* <p>
            Des solutions innovantes en ingénierie et maîtrise d’œuvre pour des
            projets d’exception.
          </p> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full xl:w-1/2 gap-6">
          {[
            {
              title: "Recognised expertise",
              description:
                "With over 15 years' experience in the field, particularly in sub-Saharan Africa and Cameroon, Crea Consult doesn't just take part in projects - it makes them succeed. Our experts only work in areas where we have 100% expertise. Clear objectives, concrete results. No improvisation.",
            },
            {
              title: "Certifications and Quality Commitment",
              description:
                "Certified to ISO 9001 and 14001 (2015 standard), Crea Consult is renowned for its rigorous management and exemplary environmental commitment. Our continuous improvement system guarantees impeccable deliverables, on time and to the highest standards. Here, quality is not just a word, it's a method.",
            },
            {
              title: "References and Successful Projects",
              description:
                "We have won the trust of institutions, commercial, industrial and academic companies through large-scale projects. As well as providing advice, we are a strategic partner: responsive, committed and always solution-oriented. We also support the training and integration of young people, because the future is being built today.",
            },
            {
              title: "Case studies and achievements",
              description:
                "Our case studies are our best proof: before and after, quantified results, real transformation. Crea Consult is about concrete results, not theory. Each project is a visible, documented and reproducible success.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="space-y-2 p-2 bg-[#700032]/10 min-h-[250px]"
            >
              <h4 className="hidden md:block">{item.title}</h4>
              <h5 className=" md:hidden">{item.title}</h5>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default WhyChooseUs;
