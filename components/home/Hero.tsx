import { Dictionary } from "@/lib/i18n";
import Link from "next/link";
import React from "react";

interface HeroType {
  dictionary: Dictionary;
}

const Hero = ({ dictionary }: HeroType) => {
  return (
    <section className="relative containerParent bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/ui/home/hero_sky_scapers.webp')] bg-cover bg-center px-7">
      <div className="absolute inset-0 top-0 left-0 bg-transparent/50"/>
      <div className="container flex justify-between items-center gap-4 min-h-[700px] z-10">
        <div className="flex flex-col gap-2 text-white mx-4">
          <small className="font-bold uppercase link_button w-fit border-b-white border-b-4">
            {dictionary.hero.title.small}
          </small>
          <h3 className="font-semibold max-w-[600px] md:hidden w-full text-white">
            {/* Turn your projects into reality with Creaconsult. */}
            {dictionary.hero.title.main}
          </h3>
          <h1 className="font-semibold text-[3rem] lg:text-[3.813rem] max-w-[600px] hidden md:block text-white">
            {/* Turn your projects into reality with Creaconsult. */}
            {dictionary.hero.title.main}
          </h1>
          <p className="max-w-[750px] text-base lg:text-3xl mb-4">
            {dictionary.hero.title.sub}
          </p>
          <div className="flex gap-2 flex-col md:flex-row w-full">
            <Link href={"/contact"} className="link_button w-fit text-nowrap">
              {dictionary.hero.action.contact}
            </Link>
            <Link href={"/contact"} className="link_button_outline w-fit text-nowrap">
              {dictionary.hero.action.devis}
            </Link>
          </div>
        </div>
        {/* image */}
        <div className="hidden md:grid md:grid-cols-2 justify-center gap-4 ">
          <div className="flex flex-col items-end gap-4 mt-[50px] w-full">
            <img
              src="/ui/home/hero_sky_scapers.webp"
              className="max-w-[250px] w-[100%]  aspect-square shadow-black shadow-lg"
              alt=""
            />
            <img
              src="/ui/home/hero_building2.webp"
              className="max-w-[250px] w-[100%]  aspect-square shadow-black shadow-lg"
              alt=""
            />
          </div>
          <img
            src="/ui/home/hero_building1.webp"
            className="max-h-[516px] h-auto w-full aspect-auto shadow-black shadow-lg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
