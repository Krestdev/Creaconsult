"use client";

import "swiper/css";
import SectionContainer from "./SectionContainer";

import Marquee from "react-fast-marquee";

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

const Partners = () => {
  return (
    <SectionContainer className="bg-gray-300 !py-7">
      <div className="space-y-6">
        <h2 className="font-semibold hidden md:block">Partners</h2>
        <h4 className="font-bold md:hidden">Partners</h4>

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
