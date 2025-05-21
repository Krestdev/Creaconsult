"use client";

import "swiper/css";
import SectionContainer from "./SectionContainer";

import Marquee from "react-fast-marquee";
import { Dictionary } from "@/lib/i18n";

const slides = [
  {
    src: "/ui/partners/feicom.png",
  },
  {
    src: "/ui/partners/smt.png",
  },
  {
    src: "/ui/partners/tradex.png",
  },
  {
    src: "/ui/partners/bicec.png",
  },
  {
    src: "/ui/partners/picture11.png",
  },
  {
    src: "/ui/partners/picture12.png",
  },
  {
    src: "/ui/partners/picture13.png",
  },
  {
    src: "/ui/partners/picture14.png",
  },
  {
    src: "/ui/partners/picture15.png",
  },
  {
    src: "/ui/partners/picture16.png",
  },
  {
    src: "/ui/partners/picture17.jpg",
  },
];

interface ServiceType {
  dictionary: Dictionary;
}

const Partners = ({ dictionary }: ServiceType) => {
  return (
    <SectionContainer className="bg-white !py-7">
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="font-semibold hidden md:block w-fit">{dictionary.partner.title}</h2>
          <h4 className="font-bold md:hidden">{dictionary.partner.title}</h4>
          <h5 className="w-fit text-center">{dictionary.partner.description}</h5>
          <div className="h-[1px] bg-[#E4E4E7] max-w-[300px] w-full" />
        </div>

        <Marquee speed={100} gradient={false} pauseOnHover={true}>
          {slides.map((img, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-2 !w-[200px] !h-[100px] mt-auto "
            >
              <img
                src={img.src}
                alt={`${img.src.split("/").at(-1)?.split(".")[0]} logo`}
                width={100}
                height={100}
                className=" h-full object-contain w-full"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </SectionContainer>
  );
};

export default Partners;
